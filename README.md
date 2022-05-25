# EU eHealthNetwork Digitial COVID Certificate value sets

This repository contains a snapshot of the value sets referenced by the EU Digital COVID Certificate (DCC) [JSON Schema](https://github.com/ehn-dcc-development/ehn-dcc-schema). The most up-to-date version of the valuesets are distrbuted on the DCCG (DCC Gateway).

----- | ----------
Name | Description
-----| ------------------
test-manufactorers | List of recognised manufactorers of tests. Snapshot provided for development purposes, please refer to the gateway for the actual version.
test-result | List of supported test results (i.e. detected, not detected..)
test-type | List of supported test types (i.e. PCR, rapid-antigen..)
disease-targeted-agent | List of diseases/targeted agent 
country-2-codes | List of ISO-3166-2 country codes


Release: 2.7.0

Note that these value sets do not form a core part of the [JSON Schema](https://github.com/ehn-dcc-development/ehn-dcc-schema) but are referenced by it. These value sets can (and should) be regularly updated and distributed from the main Digital COVID Certificate Gateway (DCCG), under clear versioning and release management.

This repository has been created to provide a home for the value sets (for development purposes only) which have up until now (2021-06-16) been living a somewhat orphaned life in the [JSON Schema](https://github.com/ehn-dcc-development/ehn-dcc-schema) repository.

