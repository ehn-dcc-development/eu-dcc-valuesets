# EU eHealthNetwork Digitial COVID Certificate RAT list update script

This repository contains scripts that could be used to update value set with common rapid antigen tests (RAT) referenced by the EU Digital COVID Certificate (DCC) [JSON Schema](https://github.com/ehn-dcc-development/ehn-dcc-schema).

Release: 1.3.0

Script `update-rat.sh` extracts information on all RAT test products and their manufacturers which are present on so called "HSC common list" from a [COVID-19 In Vitro Diagnostic Devices and Test Methods Database](https://covid-19-diagnostics.jrc.ec.europa.eu/devices) maintained by JRC.

Script extracts all items which are or has been included on the HSC common list and forms a JSON file according to the value set schema. Information about current status of each item is stored in the element `"active"`. Element `"version"` includes date of last update of the entry in the JRC database or date of removal from the HSC common list (in such case element `"active" == false`).
