# Change log

## Release 2.11.0

* Add a value set that encodes Annex A of the guidelines document, including its derivation.
  See the [README](./annex-A/README.md) for more details.


## Release 2.10.0

* Update to eHN guidelines document for value sets, version 1.13:
    1. New vaccine entry added: “VidPrevtyn Beta“, ID'd as “EU/1/21/1580”, and previously known as “Vidprevtyn” (which is both its display name and its ID).
       This new entry does not have an explicit version because it's an EMA-approved vaccine, and EMA has their own versioning system.
    2. Existing vaccine ID'd as “Vidprevtyn” has been deprecated.
       This is expressed in the corresponding entry in the `vaccines-covid-19-names` value set by:
        * Adding the postfix ` (deprecated)` to the `display` field's value;
        * Setting the `active` field's value to `false`, indicating that this vaccine ID should not be used anymore for new vaccines.

  The [guidelines document v1.13 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).

  Version 1.12 of this document has also been adopted after v1.11, but v1.12 only adds a textual clarification which has no impact on the (implementation of the) value sets themselves, and an Annex B which has been removed again in v1.13.


## Release 2.9.0

* Update to eHN guidelines document for value sets, version 1.11:
    1. New vaccine entry added: “COVID-19 Vaccine Valneva“, ID'd as “EU/1/21/1624”, and previously known as VLA2001.
       (This entry does not have an explicit version because it's an EMA-approved vaccine, and EMA has their own versioning system.)
    2. Existing vaccine ID as “VLA2001” has been deprecated.
       This is expressed in its entry by:
        * Adding the postfix ` (deprecated)` to the `display` field's value;
        * Setting the `active` field's value to `false`, indicating that this vaccine ID should not be used anymore for new vaccines.

  The [guidelines document v1.11 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Release 2.8.0

* Update to eHN guidelines document for value sets, version 1.10:
  1. Change of the name of one vaccine: Jcovden, formerly known as “COVID-19 Vaccine Janssen”
  2. New vaccines: Soberana 02, and Soberana Plus
  3. New vaccine marketing authorization holder or manufacturer: Finlay-Institute

  The [guidelines document v1.10 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Release 2.7.0

* Update to eHN guidelines document for value sets, version 1.9:
    1. Inclusion of the follow prophylaxes (types):
        - SARS-CoV-2 recombinant spike protein antigen vaccine
        - Inactivated whole SARS-CoV-2 antigen vaccine
        - COVID-19 non-replicating viral vector vaccine
    2. Inclusion of the following vaccines:
        - Covid-19-adsorvida-inativada
        - NVSI-06-08
        - YS-SC2-010
        - SCTV01C
        - Covifenz
        - AZD2816
    3. Inclusion of the following MAH:
        - Instituto Butantan
        - National Vaccine and Serum Institute, China
        - Yisheng Biopharma
        - Sinocelltech Ltd.
        - Medicago Inc.
    4. (Small adjustment to the values of the display name fields for Covaxin and Covishield.)

  The [guidelines document v1.9 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Release 2.6.0

* Update to eHN guidelines document for value sets, version 1.8:
  1. Inclusion of the following vaccines:
     - Covovax from Serum Institute of India, WHO approved
     - Sputnik M from Gamaleya-Institute
     - EpiVacCorona-N from Vector-Institute
     - Vidprevtyn from Sanofi Pasteur, also in rolling review by EMA
     - VLA2001 from Valneva France, also in rolling review by EMA
  2. Inclusion of the following MAH:
     - ORG-100000788 (Sanofi Pasteur)
     - ORG-100036422 (Valneva France)

  The [guidelines document v1.8 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Release 2.5.0

* Update to eHN guidelines document for value sets, version 1.7:
    1. New vaccine entry added: “Nuvaxovid“, ID'd as “EU/1/21/1618”, and previously known as NVX-CoV2373.
       (This entry does not have an explicit version because it's an EMA-approved vaccine, and EMA has their own versioning system.)
    2. Existing vaccines “NVX-CoV2373”, and “Inactivated-SARS-CoV-2-Vero-Cell” have been deprecated.
       This is expressed in their respective entries by:
       * Adding the postfix ` (deprecated)` to the `display` field's values;
       * Setting the `active` field's values to `false`, indicating that these vaccine IDs should not be used anymore for new vaccines.
    3. Value of `display` field of the vaccine ID'd as EU/1/20/1507 has been shortened to “Spikevax”.
    4. Value of `display` field of the vaccine manufacturer ID'd as “ORG-100032020” has been corrected to “Novavax CZ a.s.”.

  The [guidelines document v1.7 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Release 2.4.1

* Add vaccine NVX-CoV2373 - was missing until now.


## Release 2.4.0

* Change the versioning process, and document it in [`VERSIONING.md`](./VERSIONING.md).

* Update to eHN guidelines document for value sets, version 1.6:
   1. New vaccine: “MVC COVID-19 vaccine“, ID'd as “MVC-COV1901”.
   2. New manufacturer (for the new vaccine): “Medigen Vaccine Biologics Corporation”, ID'd as “ORG-100033914”.

    The [guidelines document v1.6 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Release 2.3.0

Changes:

1. New vaccines:
    1. Abdala, used in Vietnam
    2. WIBP-CorV, used in Vietnam
2. New manufacturers:
    1. Center for Genetic Engineering and Biotechnology (CIGB) for Abdala
    2. Sinopharm - Wuhan Institute of Biological Products for WIBP-CorV

The [guidelines document v1.5 has been adopted and published](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf) through the [eHealth network page on the EU DCC](https://ec.europa.eu/health/ehealth/covid-19_en).


## Prior releases

Change log for releases before 2.3.0 are available through the [releases page](https://github.com/ehn-dcc-development/ehn-dcc-valuesets/releases).

