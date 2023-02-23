const fs = require('fs');
const exec = require('child_process').exec;
const Ajv2020 = require("ajv/dist/2020"); // see: https://ajv.js.org/json-schema.html#draft-2020-12
const addFormats = require("ajv-formats");

// Default schema to be used if no file-specific one is defined
const DEFAULT_SCHEMA = 'DCC.ValueSets.schema.json';

// Directories containing schemas/valuesets
const SCHEMA_DIR = "./schemas/";
const VALUESET_DIR = "./";

// These files will be excluded from the schema check
const FILES_TO_EXCLUDE = [
    'package.json',
    'package-lock.json'
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
for(const item of valuesets)
{
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
    if(valid) {
        console.log(`Validating ${item} (with schemas/${schemaFileName}) -> OK`);
    } else {
        console.log(`Validating ${item} -> FAILED`)
        console.log(ajv.errors);
        exitWithError = true;
    }
}

// Handle exit
if(exitWithError){
    console.log("Validation failed!");
    process.exit(1);
} else {
    console.log("Validation succeeded!");
}