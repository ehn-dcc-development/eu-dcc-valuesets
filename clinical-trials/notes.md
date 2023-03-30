# Notes

https://health.ec.europa.eu/publications/guidance-mutual-acceptance-eu-digital-covid-certificates-issued-participants-clinical-trials-covid_en


## TODOs

### Technical

1. Add a new valueset to this repo.
2. Also add that to [the part of the EU DCC Schema describing the valuesets](https://github.com/ehn-dcc-development/eu-dcc-schema/blob/release/1.3.2/DCC.ValueSets.schema.json).
3. Release a version (at least) 2.12.0 of the EU DCC Valuesets, and a version (at least) 1.3.3 of the EU DCC Schema.


### Non-technical

1. Confer with the eHN Subgroup on Semantics about the intended changes, and the questions below.
   * Check what would be good values for:
     * `valueSetId` = `clinical-trials`?
     * `display` - can column D.3.1 be used?
     * `system`?
     * `version`?
2. Add a section to the [guidelines document](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) explaining the new valueset.
   (This implies a version (at least) 1.15 of this document.)
3. Add the new valueset to the [document formally specifying the valueset formats](https://webgate.ec.europa.eu/fpfis/wikis/display/eHN/Specification%3A+EU+DCC+Valuesets+format).
4. Prepare a document explaining how to use the valueset in verifier apps (with or without [business rules](https://github.com/ehn-dcc-development/eu-dcc-business-rules)).
5. Get the changes in items 2 and 3 approved through the eHN Coordinated Actions meeting.


## Questions

* What's the expected change rate and change profile of the list of approved clinical trials?
* Is it e.g. to be expected that the list is expanded with _key international trials_?


## Arguments

Solidifying a list of (IDs of) approved clinical trials in the form of a valueset for the EU DCC ensures a **single approach of mutual acceptance**.


## Use of the clinical trials valueset in scanner/verifier apps

This valueset should be used to verify whether a vaccination-DCC grants its holder fit-for-entry status, augmenting the [`vaccines-covid-19-names` valueset](./vaccine-medicinal-product.json).
In practice, scanner/verifier apps tend to have their own list of approved vaccines configured.
Usually (but not always!) this is a subset of the vaccines listed in the `vaccines-covid-19-names` valueset.

When determining fit-for-entry status a scanner/verifier app should also consider the `clinical-trials` valueset.
Currently, this valueset is not part of the [EU DCC Validation Rules specification](https://ec.europa.eu/health/sites/default/files/ehealth/docs/eu-dcc_validation-rules_en.pdf).
(Given the uptake of that specification is not universal, a new version of it amending this is not likely.)
This has the following consequences:

* National backends currently can't be expected to rely on the presence of the new valueset on the EU DCC Gateway.
    Hence, distribution of this valueset to apps should be implemented separately.
* Business rules can't rely on the presence of this valueset in the `external.valueSets` part of the external parameters passed to them.
    Instead, business rules distributed through the EU DCC Gateway could “_inline_” the valueset.

