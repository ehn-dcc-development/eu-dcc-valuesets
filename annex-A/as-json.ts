import {readFileAsLines} from "./files.ts"


const annexALines = readFileAsLines("annex-A.tsv")
/*
 * The contents of the 'table.tsv' file are copied from the table in Annex A of the guidelines document,
 * after which some spurious newlines are cleaned up.
 */


const trim = (str: string) => {
    const match = str.match(/^\"\s*(.+?)\s*\"$/)
    return match
        ? match[1]
        : str
}


const encodingEntries =
    annexALines
        .slice(1)
        .map((line) => {
            const parts = line.split(/\t/).map(trim)
            return [parts[0], {
                "vaccine-code": parts[1],
                "vaccine-manufacturer": parts[2],
                "sct-codes": parts[3] === undefined ? [] : parts[3].split(/\s+or\s+/),
                "note": parts[4]
            }]
        })

const encodings = Object.fromEntries(encodingEntries)

// TODO  check against other value sets

if (Object.keys(encodings).length !== annexALines.length - 1) {
    console.error(`duplicate keys!`)
}


const valueSet = {
    "valueSetId": "vaccines-covid-19-encoding-instructions",
    "valueSetDate": "2022-12-12",
    "valueSetValues": encodings
}

Deno.writeTextFileSync(
    "../vaccine-encoding-instructions.json",
    JSON.stringify(valueSet, null, 2)
)

