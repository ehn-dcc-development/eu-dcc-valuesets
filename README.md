# EU eHealthNetwork Digital COVID Certificate value-sets

Welcome to the EU-DCC value-sets repository. This repository contains a snapshot of the value-sets referenced by the EU Digital COVID Certificate (DCC) [JSON Schema](https://github.com/ehn-dcc-development/ehn-dcc-schema). The most up-to-date version of the value-sets are distributed on the DCCG (DCC Gateway).

All of the file found in this repository should be considered for reference usage only. The current official release is published on the EU DGC Gateway. As access to this gateway is only available to Member States please refer to your own Member State to for access to those files.

Release: 2.12.0

## Overview

Here is an overview of the files available in this repository. The column "managed on" describes the place where the value-set is managed. In most cases that is in this Github repository. Those value-sets will usually be very close to the versions provided on the EU DGC Gateway.

**Reminder: the value-sets on the EU DGC Gateway are leading, the value-sets here should only be used for development purposes.**

File name 							 | Description														 | Managed on
------------------------------------ | ----------------------------------------------------------------- | ------------
country-2-codes.json				 | List of ISO-3166-2 country codes used for issuers 				 | Github
disease-targeted-agent.json			 | List of diseases/targeted agent (i.e. covid)						 | Github
test-manf-example.json				 | Example of the test manufacturers value-set						 | DGC Gateway
test-result.json					 | List of supported test results (i.e. detected, not detected..)	 | Github
test-type.json						 | List of supported test types (i.e. PCR, rapid-antigen..)			 | Github
vaccine-encoding-instructions.json	 | List of valid encodings (manufacturer + medical product)			 | Github
vaccine-mah-manf.json				 | List of vaccine manufacturers									 | Github
vaccine-medical-product.json		 | List of the vaccines												 | Github
vaccine-prophylaxis.json			 | List of the vaccine/prophylaxis types							 | Github

The JSON Schema definition for the structure used for all of the above value-sets can be found in [DCC.ValueSets.schema.json](DCC.ValueSets.schema.json)

Finally the we have [changelog](CHANGELOG.md), [license](LICENSE.md) and [versioning](VERSIONING.md) files and, of course, this [readme](README.md).

## Governance

The value-sets are owned by the eHealth Network Subgroup on Semantics (SSG). Any requests for additions or changes must be directed to that group. If you or your country are not members of that subgroup then you can raise an issue on this Github repository and, if appropriate, we will raise it with the SSG on your behalf.

This repository, as with all of the eHN Github repositories, is maintained by a number of volunteers from the eHealth Network Technical IOP Subgroup.
