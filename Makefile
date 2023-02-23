AJV=		./node_modules/.bin/ajv -c ajv-formats --verbose --spec=draft2020 --strict=false
SCHEMA=		./schemas/DCC.ValueSets.combined.json
#SCHEMA=		./schemas/DCC.ValueSets.schema.json
#SCHEMA=		./schemas/vaccine-encoding-instructions.schema.json

# ** TODO **
# There are two options here I prepared; first the combined schema. That accepts both the vaccine-encoding structure and the
# standard valueset structure. Downside is that it doesn't constrain files - it's allowing both formats in any file. An alternative 
# is to have two schema and a list of "exceptions". All json files *except* the exceptions are tested with the default. Exceptions 
# are tested with the schema linked to them. Logically this is identical to an "default or override."

# Compile the schema and test it against all json files in the root of the repository
test:
	#$(AJV) test -s "./schemas/DCC.ValueSets.schema.json" -d "*.json" --valid
	ls *.json
	ls *.json | grep -E -v "package|valueset" | xargs -I {} $(AJV) test -s $(SCHEMA) -d {} --valid

# Installs the ajv pre-reqs
install-ajv:
	npm install ajv ajv-cli ajv-formats
