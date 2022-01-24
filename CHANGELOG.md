# Change log

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

