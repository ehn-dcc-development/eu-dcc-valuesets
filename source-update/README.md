# EU eHealthNetwork Digitial COVID Certificate RAT list update script

This repository contains scripts that are used to update the value set for the common list of rapid antigen tests (RATs) referenced by the EU Digital COVID Certificate (DCC) [JSON Schema](https://github.com/ehn-dcc-development/ehn-dcc-schema).

Release: 1.N.N

Script `update-rat.sh` extracts information on all RAT products and their manufacturers which are present in the so-called "HSC common list", itself derived from the [COVID-19 In Vitro Diagnostic Devices and Test Methods Database](https://covid-19-diagnostics.jrc.ec.europa.eu/devices) maintained by JRC.

The script extracts all items which are or have been included in the HSC common list and generates a JSON file according to the value set schema. Information about current status of each item is stored in the element `"active"`. Element `"version"` includes date of last update of the entry in the JRC database or date of removal from the HSC common list (in such a case element `"active" == false`).
