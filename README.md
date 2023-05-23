# EU eHealthNetwork Digital COVID Certificate valuesets

Welcome to the EU-DCC valuesets repository. This repository contains a snapshot of the valuesets referenced by the EU Digital COVID Certificate (DCC) [JSON Schema](https://github.com/ehn-dcc-development/eu-dcc-schema). The most up-to-date version of the valuesets are distributed on the [EU DGC Gateway](https://github.com/eu-digital-green-certificates/dgc-gateway).

All of the file found in this repository should be considered for reference usage only. The current official release is published on the EU DGC Gateway. As access to this gateway is only available to Member States please refer to your own Member State to for access to those files.

Release: 2.12.0


## Overview

Here is an overview of the files available in this repository. The column "managed on" describes the place where the value-set is managed. In most cases that is in this GitHub repository. Those valuesets will usually be very close to the versions provided on the EU DGC Gateway. As they are managed in the GitHub they will always be the newest version, just bear in mind that the version provided by the EU DGC Gateway is always considered the **current** version.

**Reminder: the valuesets on the EU DGC Gateway are leading, the valuesets here are provided for purposes of development and as part of our release process.**

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

The JSON Schema definition for the structure used for all of the above valuesets can be found in [DCC.ValueSets.schema.json](DCC.ValueSets.schema.json)

Finally, we have [changelog](CHANGELOG.md), [license](LICENSE.md) and [versioning](VERSIONING.md) files and, of course, this [readme](README.md).


## Working with the valuesets

### NOTE FOR WINDOWS USERS

The scripts we used are bash-based, if you're a Windows users you will either need to use the amazing [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) or use another [Cygwin](https://www.cygwin.com/).

Although the maintainers are primarily Windows developers the internet - and the git eco-system - are POSIX focused. With the fantastic support for POSIX on modern Windows we have decided to focus on a POSIX-based workflow.

### Pre-reqs

[Node.js 18.14.2 or above ](https://nodejs.org/en/)
NPM 9.5.0 (included with Node.js)

### Configuring git hooks

This repository makes use of the `pre-commit` git hook. This executes the schema validation scripts (which are described below).

To enable git hooks you need to tell git to use them, you can do that by running this command from the terminal in the root directory of this project:

	git config core.hooksPath hooks

### Validating schema

First lets ask node to install the dependencies:

	npm install

Then to run the schema validator simply:

	npm test

If there are any validation errors they will be shown on the screen.

## How the schema and validator work

We use [JSON Schema 2020-12](https://json-schema.org/specification.html) to define the schema of the valuesets. For most of the valuesets there is a [shared schema](schemas/DCC.ValueSets.schema.json).

For files which have a different schema - such as `vaccine-encoding-instructions` - the validator supports the definition of a custom schema. By convention these schema files are named `<valueset-file-name>.schema.json` and are stored in `./schema`. So for `vaccine-encoding-instructions.json` the schema `vaccine-encoding-instructions.schema.json` is used.

The validator also checks whether the set of actual valuesets coincides with the set expected by the [EU DCC Schema standard](https://github.com/ehn-dcc-development/eu-dcc-schema/blob/release/1.3.3/DCC.ValueSets.schema.json).
The exact GitHub reference - being a (release) tag, or branch - is configured through the `EU_DCC_SCHEMA_REF` constant defined in [this config file](./schemas/config.js).
This constant needs to be updated when a new release of the EU DCC Schema is released, or while being worked on.

The validator code has been written in an imperative style for ease of understanding and [can be found in the schema directory](schemas/validate-valuesets.js).


## Governance

The valuesets are owned by the eHealth Network Subgroup on Semantics (SSG). Any requests for additions or changes must be directed to that group. If you or your country are not members of that subgroup then you can raise an issue on this GitHub repository and, if appropriate, we will raise it with the SSG on your behalf.

This repository, as with all of the eHN GitHub repositories, is maintained by a number of volunteers from the eHealth Network Technical IOP Subgroup.
