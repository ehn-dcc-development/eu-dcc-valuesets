const fs = require("fs");
const Ajv2020 = require("ajv/dist/2020"); // see: https://ajv.js.org/json-schema.html#draft-2020-12
const addFormats = require("ajv-formats");

// Default schema to be used if no file-specific one is defined
const DEFAULT_SCHEMA = "DCC.ValueSets.schema.json";

// Directories containing schemas/valuesets
const SCHEMA_DIR = "./schemas/";
const VALUESET_DIR = "./";

// These files will be excluded from the schema check
const FILES_TO_EXCLUDE = [
    "package.json",
    "package-lock.json"
];

// Init ajv
const ajv = new Ajv2020({
    strict: true,
    allErrors: true,
    allowUnionTypes: true,
    validateSchema: true
});
addFormats(ajv);

// Error flag defaults to false, when a file fails validation it is set to true
let exitWithError = false;

// Get a list of all of the valuesets
const valuesets = fs
    .readdirSync(VALUESET_DIR, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .filter(item => !FILES_TO_EXCLUDE.find(x => x == item.name))
    .filter(item => item.name.endsWith(".json"))
    .map(item => item.name);

// Get a list of all of the schemas
const schemas = fs
    .readdirSync(SCHEMA_DIR, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .filter(item => item.name.endsWith(".json"))
    .map(item => item.name);

// Validate all of the valuesets against their schema
for (const item of valuesets) {
    // Choose + load schema; if a schema exists with named <value-set-file-name>.schema.json then that will be used,
    // this allows us to override the default schema when needed
    //
    // NOTE: the schemas could be loaded once, that is slightly faster but will make this script more complex..
    const schemaFileName = schemas.find(x => x === item.replace(".json", ".schema.json")) || DEFAULT_SCHEMA;
    const schemaRaw = fs.readFileSync(`${SCHEMA_DIR}${schemaFileName}`);
    const schema = JSON.parse(schemaRaw);

    // Load valuesets
    const valuesetRaw = fs.readFileSync(`${VALUESET_DIR}${item}`);
    const valueset = JSON.parse(valuesetRaw);

    // Validate
    const valid = ajv.validate(schema, valueset);

    // Handle validation errors
    if (valid) {
        console.log(`Validating ${item} (with schemas/${schemaFileName}) -> OK`);
    } else {
        exitWithError = true;
        console.log(`Validating ${item} -> FAILED`)
        console.log(ajv.errors);
    }
}


const assertSameSet = (actuals, expecteds, what) => {
    if (
            actuals.length !== expecteds.length
        || !actuals.every((l) => expecteds.indexOf(l) > -1)
        || !expecteds.every((l) => actuals.indexOf(l) > -1)
    ) {
        exitWithError = true;
        const extraActuals = actuals.filter((actual) => expecteds.indexOf(actual) === -1);
        const extraExpecteds = expecteds.filter((expected) => actuals.indexOf(expected) === -1);
        console.log(`Mismatch between actual and expected ${what}:`);
        if (extraActuals.length > 0) {
            console.log(`\tAmong actual, but not among expected: ${extraActuals.join(", ")}`);
        }
        if (extraExpecteds.length > 0) {
            console.log(`\tAmong expected, but not among actual: ${extraExpecteds.join(", ")}`);
        }
    }
}


const SCHEMA_WITH_EXPECTED_VALUESETS = "DCC.ValueSets.schema.json";

const EXPECTED_EXTRA = [
    "test-manf-example.json"
];
const EXPECTED_MISSING = [
    "test-manf.json"
];

const removedValuesetsPrefix = (path) => {
    const prefix = "valuesets/";
    if (!path.indexOf(prefix) === 0) {
        exitWithError = true;
        console.log(`Valueset URI doesn't start with expected prefix "${prefix}" --> check ${SCHEMA_WITH_EXPECTED_VALUESETS} in schema repository`);
        return path;
    }
    return path.substring(prefix.length);
}

const {EU_DCC_SCHEMA_REF} = require("./config");

fetch(new URL(`https://raw.githubusercontent.com/ehn-dcc-development/eu-dcc-schema/${EU_DCC_SCHEMA_REF}/${SCHEMA_WITH_EXPECTED_VALUESETS}`))
    .then((response) => response.json())
    .then((valuesetsRefSchema) => {
        const expectedValuesets = Object.values(valuesetsRefSchema["$defs"])
            .map((valuesetDef) => valuesetDef["valueset-uri"])
            .map(removedValuesetsPrefix);

        assertSameSet(
            valuesets.filter((valueset) => expectedValuesets.indexOf(valueset) === -1),
            EXPECTED_EXTRA,
            "extra valuesets"
        );
        assertSameSet(
            expectedValuesets.filter((expected) => valuesets.indexOf(expected) === -1),
            EXPECTED_MISSING,
            "missing valuesets"
        );

        // handle exit:
        if (exitWithError){
            console.log("Validation failed!");
            process.exit(1);
        } else {
            console.log(`Validating entire set against ${SCHEMA_WITH_EXPECTED_VALUESETS} in schema repository --> OK`);
            console.log("Validation succeeded!");
        }
    });

