# Vaccine encoding instructions

Annex A of the [document on “eHealth Network Guidelines on Value Sets
for EU Digital COVID Certificates”](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf)(eHN, DCC) contains a table that shows the coding combina8ons of the different vaccine medicinal products with their recommended ATC or SNOMED CT ‘Vaccine’ concept, along with their corresponding marketing authorization holder or manufacturer.
The table is included to assist implementation efforts.

Until release version 2.10.0 of the eHN EU DCC value sets the table in this Annex A was not encoded in a JSON format in this repository.
Because of ongoing efforts relating to a WHO/G20 pilot, it has become advantageous to encode the table in Annex A.
This has resulted in the [`vaccine-encoding-instructions.json` JSON file](../vaccine-encoding-instructions.json).

To reduce tedious manual work (which is inherently somewhat error-prone), encoding the table to produce the corresponding JSON value set file has been (somewhat) automated.
The steps to perform are:

1. Perform a textual copy of the table from the guidelines document to the [`annex-A/table.tsv` file](./table.tsv).
  This seems to work best from a `.docx` version of that document, rather than the published PDF file.
2. Clean up the [`annex-A/table.tsv` file](./table.tsv) so that every line in it corresponds to exactly one row in the table.
  It might be necessary to remove some newlines or other characters for that.
3. Run the [`build.sh` build script](./build.sh).
  This should produce the [`vaccine-encoding-instructions.json` JSON file](../vaccine-encoding-instructions.json).
  If derivation of that file fails, then the file is *not* updated.
  In principle, you'd expect the top-level `valueSetDate` field to be updated (to the date of today).
  You could also inspect that file's metadata to be sure.
4. Compare the updated file against the last version committed to the Git versioning system.
  If there are more differences between these versions than expected, you need to have to look at the [`annex-A/table.tsv` file](./table.tsv) to see whether (and if so, how) that needs to be tweaked.

The derivation relies on the Deno runtime for JavaScript/TypeScript.
It can be found and downloaded at https://deno.land/.

