const csvLines = Deno.readTextFileSync("clinical-trials/clinical-trials.csv")
    .split("\n")


type Trial = {
    id: string
    name: string
}

const trials: Trial[] = []
let descriptionIndex: number

csvLines.forEach((line) => {
    const columns = line.split(";")
    if (columns[0] === "A.2 EudraCT Number") {
        descriptionIndex = columns.findIndex((column) => column.startsWith("D.3.1"))
    } else if (columns[0].match(/\d{4}-\d{6}-\d{2}/)) {
        trials.push({
            id: columns[0],
            name: columns[descriptionIndex]
        })
    }
})


const valueset = {
    "valueSetId": "clinical-trials",
    "valueSetDate": new Date().toISOString().substring(0, 10),
    "valueSetValues": Object.fromEntries(
        trials.map(({id, name}) => [
            id,
            {
                "display": name,
                "lang": "en",
                "active": true,
                "system": "",
                "version": ""
            }
        ])
    )
}

Deno.writeTextFileSync("clinical-trials.json", JSON.stringify(valueset, null, 2))

