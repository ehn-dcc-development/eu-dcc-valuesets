import {fileAsLines, readAsJson} from "./files.ts"
import {groupBy} from "./functional.ts"


const tableLines = fileAsLines("table.tsv")
/*
 * The contents of the 'table.tsv' file are copied from the table in Annex A of the guidelines document,
 * after which some spurious newlines are cleaned up.
 */


const cleanUp = (str: string) => {
    const match = str.match(/^"\s*(.+?)\s*"$/)
    return match
        ? match[1]
        : str
}


type Mapping = {
    "vaccine-code": string
    "vaccine-manufacturer": string
    "sct-codes": string[]
    "note": string
}

const lineAsEncoding = (line: string): [string, Mapping] => {
    const parts = line.split(/\t/).map(cleanUp)
    return [
        parts[0],
        {
            "vaccine-code": parts[1],
            "vaccine-manufacturer": parts[2],
            "sct-codes": /* parts[3] === undefined ? [] : */parts[3].split(/\s+or\s+/),
            "note": parts[4]
        }
    ]
}

const keyedEncodings: [string, Mapping][] = tableLines
    .slice(1)
    .map(lineAsEncoding)


// check against other value sets:
const medicinalProduct = readAsJson("../vaccine-medicinal-product.json")
const manufacturers = readAsJson("../vaccine-mah-manf.json")
const prophylaxis = readAsJson("../vaccine-prophylaxis.json")

const deprecationPostfix = " (deprecated)"
keyedEncodings.forEach(([key, mapping], i) => {

    const rowInfix = `@ mapping row ${i+2} for "${key}"`
    const warnHeader = `[WARN] ${rowInfix}:`

    const vaccineCode = mapping["vaccine-code"]
    const withoutDeprecation = vaccineCode.endsWith(deprecationPostfix) ? vaccineCode.substring(0, vaccineCode.length - deprecationPostfix.length) : vaccineCode
    if (vaccineCode.endsWith(deprecationPostfix)) {
        console.info(`[INFO] ${rowInfix}: vaccine with code "${withoutDeprecation}" occurs even though the vaccine's been deprecated`)
    }

    if (!(withoutDeprecation in medicinalProduct.valueSetValues)) {
        console.warn(`${warnHeader} vaccine code "${mapping["vaccine-code"]}" doesn't exist in value set "vaccines-covid-19-names"`)
    }

    if (!(mapping["vaccine-manufacturer"] in manufacturers.valueSetValues)) {
        console.warn(`${warnHeader} vaccine manufacturer with ID "${mapping["vaccine-manufacturer"]}" doesn't exist in value set "vaccines-covid-19-auth-holders"`)
    }

    if (mapping["sct-codes"].length === 0) {
        console.warn(`${warnHeader} no mapping to prophylaxes`)
    }
    if (new Set(...mapping["sct-codes"]).size < mapping["sct-codes"].length) {
        console.warn(`${warnHeader} mappings to duplicate prophylaxes occur`)
    }
    mapping["sct-codes"].forEach((sctCode) => {
        if (sctCode in prophylaxis.valueSetValues) {
            const sct = prophylaxis.valueSetValues[sctCode]
            if (!sct["active"]) {
                console.warn(`${warnHeader} prophylaxis code "${sctCode}" is used despite it being deprecated`)
            }
        } else {
            console.warn(`${warnHeader} prophylaxis code "${sctCode}" doesn't exist in value set "sct-vaccines-covid-19"`)
        }
    })

})


const manufacturersWithMultipleVaccines =
    groupBy(keyedEncodings, ([_, mapping]) => mapping["vaccine-manufacturer"])
        .filter(([_, encodings]) => encodings.length > 1)
        .map(([key, encodings]) => [key, encodings.map(([_, mapping]) => mapping["vaccine-code"])])

if (manufacturersWithMultipleVaccines.length > 0) {
    console.log()
    console.log(`[INFO] manufacturers with more than 1 vaccine:`)
    console.dir(manufacturersWithMultipleVaccines)
}


// check for duplicate keys:
const encodingsPerKey = groupBy(keyedEncodings, ([key]) => key)
const duplicateKeyEntries = encodingsPerKey.filter(([_, group]) => group.length > 1)
if (duplicateKeyEntries.length > 0) {
    console.error(`[ERROR] key occurs more than once: ${duplicateKeyEntries.map(([key]) => `"${key}"`).join(", ")}`)
    console.error(`    - (exiting before saving)`)
    Deno.exit(1)
}


const valueSet = {
    "valueSetId": "vaccines-covid-19-encoding-instructions",
    "valueSetDate": new Date().toISOString().slice(0, 10),
    "valueSetValues": Object.fromEntries(keyedEncodings)
}

Deno.writeTextFileSync(
    "../vaccine-encoding-instructions.json",
    JSON.stringify(valueSet, null, 2)
)

