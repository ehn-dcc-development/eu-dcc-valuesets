#!/bin/bash
BASE_JSON=test-manf.json
UPDATED_JSON=test-manf-updated.json
MERGED_JSON=test-manf-merged.json
sh source-update/update-rat.sh > $UPDATED_JSON
python3 source-update/merge-rat.py
rm $BASE_JSON $UPDATED_JSON
mv $MERGED_JSON $BASE_JSON

# Merges the current value set for the RAT manufacturers in test-manf.json with the one updated from the JRC Web site - see update-rat.sh.
# Manufacturers that have been inactived will be merged back in the value set, with their active field set to false.

