# Unit converter inventory

Generated from `src/converters` by `npm run converters:report`. Do not edit by hand.

The catalogue follows the breadth of the public unitconverters.net directory (used for topic discovery only; no text, design or code was copied).
Every factor is defined in code from exact definitions or NIST SP 811 values and checked by known-value and round-trip tests in `src/converters/converters.test.ts`.

## Summary

| | Count |
| --- | --- |
| Converters in the catalogue | 89 |
| Served by existing calculator pages (reused, not duplicated) | 7 |
| New converter pages under `/unit-converters/` | 82 |
| New converter pages complete in all 9 languages | 82 |

Currency runs in manual-rate mode: no exchange-rate provider is configured, so no rates are fetched or stored.

## Common (18)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Length Converter | `/calculators/length-converter` (existing) | 9 | see calculator page | 9 / 9 | see calculator page |
| Weight Converter | `/calculators/weight-converter` (existing) | 7 | see calculator page | 9 / 9 | see calculator page |
| Volume Converter | `/calculators/volume-converter` (existing) | 15 | see calculator page | 9 / 9 | see calculator page |
| Temperature Converter | `/calculators/temperature-converter` (existing) | 3 | see calculator page | 9 / 9 | see calculator page |
| Area Converter | `/calculators/area-converter` (existing) | 10 | see calculator page | 9 / 9 | see calculator page |
| Speed Converter | `/calculators/speed-converter` (existing) | 6 | see calculator page | 9 / 9 | see calculator page |
| Data Storage Converter | `/calculators/data-storage-converter` (existing) | 15 | see calculator page | 9 / 9 | see calculator page |
| Pressure Converter | `/unit-converters/pressure-converter` | 16 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Energy Converter | `/unit-converters/energy-converter` | 17 | standard | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Dry Volume Converter | `/unit-converters/dry-volume-converter` | 13 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Power Converter | `/unit-converters/power-converter` | 14 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Force Converter | `/unit-converters/force-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Time Converter | `/unit-converters/time-converter` | 16 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Angle Converter | `/unit-converters/angle-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Fuel Consumption Converter | `/unit-converters/fuel-consumption-converter` | 7 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Currency Converter | `/unit-converters/currency-converter` | currency | user-supplied | 9 / 9 | [International Organization for Standardization](https://www.iso.org/iso-4217-currency-codes.html) |
| Case Converter | `/unit-converters/case-converter` | text-case | exact | 9 / 9 | Ecma International |
| Number Base Converter | `/unit-converters/number-base-converter` | number-base | exact | 9 / 9 | Ecma International |

## Engineering (8)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Angular Velocity Converter | `/unit-converters/angular-velocity-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Acceleration Converter | `/unit-converters/acceleration-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Angular Acceleration Converter | `/unit-converters/angular-acceleration-converter` | 8 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Density Converter | `/unit-converters/density-converter` | 15 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Specific Volume Converter | `/unit-converters/specific-volume-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Moment of Inertia Converter | `/unit-converters/moment-of-inertia-converter` | 13 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Moment of Force Converter | `/unit-converters/moment-of-force-converter` | 8 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Torque Converter | `/unit-converters/torque-converter` | 9 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |

## Heat (10)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Fuel Efficiency (Mass) Converter | `/unit-converters/fuel-efficiency-mass-converter` | 13 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Fuel Efficiency (Volume) Converter | `/unit-converters/fuel-efficiency-volume-converter` | 17 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Temperature Interval Converter | `/unit-converters/temperature-interval-converter` | 7 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Thermal Expansion Converter | `/unit-converters/thermal-expansion-converter` | 8 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Thermal Resistance Converter | `/unit-converters/thermal-resistance-converter` | 13 | standard | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Thermal Conductivity Converter | `/unit-converters/thermal-conductivity-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Specific Heat Capacity Converter | `/unit-converters/specific-heat-capacity-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Heat Density Converter | `/unit-converters/heat-density-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Heat Flux Density Converter | `/unit-converters/heat-flux-density-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Heat Transfer Coefficient Converter | `/unit-converters/heat-transfer-coefficient-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |

## Fluids (12)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Flow Rate Converter | `/unit-converters/flow-converter` | 18 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Mass Flow Rate Converter | `/unit-converters/mass-flow-converter` | 17 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Molar Flow Rate Converter | `/unit-converters/molar-flow-converter` | 15 | exact | 9 / 9 | [Bureau International des Poids et Mesures](https://www.bipm.org/en/si-brochure-9), [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Mass Flux Density Converter | `/unit-converters/mass-flux-density-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Molar Concentration Converter | `/unit-converters/molar-concentration-converter` | 12 | exact | 9 / 9 | [Bureau International des Poids et Mesures](https://www.bipm.org/en/si-brochure-9), [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Solution Concentration Converter | `/unit-converters/solution-concentration-converter` | 15 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Dynamic Viscosity Converter | `/unit-converters/dynamic-viscosity-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Kinematic Viscosity Converter | `/unit-converters/kinematic-viscosity-converter` | 9 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Surface Tension Converter | `/unit-converters/surface-tension-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Permeability Converter | `/unit-converters/permeability-converter` | 10 | standard | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Blood Sugar Converter | `/unit-converters/blood-sugar-converter` | 5 | standard | 9 / 9 | [IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW)](https://ciaaw.org/abridged-atomic-weights.htm), [Labcorp](https://www.labcorp.com/test-menu/resources/si-unit-conversion-table) |
| Water Hardness Converter | `/unit-converters/water-hardness-converter` | 8 | standard | 9 / 9 | [IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW)](https://ciaaw.org/abridged-atomic-weights.htm), [U.S. Geological Survey](https://www.usgs.gov/faqs/do-you-have-information-about-water-hardness-united-states) |

## Light (5)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Luminance Converter | `/unit-converters/luminance-converter` | 13 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Luminous Intensity Converter | `/unit-converters/luminous-intensity-converter` | 7 | standard | 9 / 9 | [Bureau International des Poids et Mesures](https://www.bipm.org/en/si-brochure-9), [schorsch.com](https://schorsch.com/en/kbase/glossary/luminous-intensity.html) |
| Illuminance Converter | `/unit-converters/illuminance-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Image Resolution Converter | `/unit-converters/image-resolution-converter` | 6 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Frequency Wavelength Converter | `/unit-converters/frequency-wavelength-converter` | 16 | standard | 9 / 9 | [National Institute of Standards and Technology](https://physics.nist.gov/cuu/Constants/Value/c.html) |

## Electricity (16)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Charge Converter | `/unit-converters/charge-converter` | 13 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [International Union of Pure and Applied Chemistry](https://goldbook.iupac.org/E02032.html) |
| Linear Charge Density Converter | `/unit-converters/linear-charge-density-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Surface Charge Density Converter | `/unit-converters/surface-charge-density-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Volume Charge Density Converter | `/unit-converters/volume-charge-density-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Electric Current Converter | `/unit-converters/current-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Linear Current Density Converter | `/unit-converters/linear-current-density-converter` | 9 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Current Density Converter | `/unit-converters/surface-current-density-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Electric Field Strength Converter | `/unit-converters/electric-field-strength-converter` | 14 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Voltage Converter | `/unit-converters/electric-potential-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Electric Resistance Converter | `/unit-converters/electric-resistance-converter` | 11 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Electric Resistivity Converter | `/unit-converters/electric-resistivity-converter` | 16 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Electric Conductance Converter | `/unit-converters/electric-conductance-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Electric Conductivity Converter | `/unit-converters/electric-conductivity-converter` | 16 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Capacitance Converter | `/unit-converters/capacitance-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Inductance Converter | `/unit-converters/inductance-converter` | 9 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Wire Gauge Converter | `/unit-converters/wire-gauge-converter` | 7 | standard | 9 / 9 | [ASTM International](https://store.astm.org/standards/b258) |

## Magnetism (4)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Magnetomotive Force Converter | `/unit-converters/magnetomotive-force-converter` | 8 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures (BIPM)](https://www.bipm.org/en/si-brochure-9) |
| Magnetic Field Strength Converter | `/unit-converters/magnetic-field-strength-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures (BIPM)](https://www.bipm.org/en/si-brochure-9) |
| Magnetic Flux Converter | `/unit-converters/magnetic-flux-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures (BIPM)](https://www.bipm.org/en/si-brochure-9) |
| Magnetic Flux Density Converter | `/unit-converters/magnetic-flux-density-converter` | 12 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures (BIPM)](https://www.bipm.org/en/si-brochure-9) |

## Radiology (4)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Radiation Dose Converter | `/unit-converters/radiation-converter` | 8 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures](https://www.bipm.org/en/si-brochure-9) |
| Radioactivity Converter | `/unit-converters/radiation-activity-converter` | 15 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures](https://www.bipm.org/en/si-brochure-9) |
| Radiation Exposure Converter | `/unit-converters/radiation-exposure-converter` | 8 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Absorbed Dose Converter | `/unit-converters/radiation-absorbed-dose-converter` | 10 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8), [Bureau International des Poids et Mesures](https://www.bipm.org/en/si-brochure-9) |

## Other (12)

| Converter | Page | Units | Verification | Languages | Sources |
| --- | --- | --- | --- | --- | --- |
| Metric Prefix Converter | `/unit-converters/prefixes-converter` | 25 | exact | 9 / 9 | [Bureau International des Poids et Mesures](https://www.bipm.org/en/measurement-units/si-prefixes) |
| Data Transfer Rate Converter | `/unit-converters/data-transfer-converter` | 18 | exact | 9 / 9 | [National Institute of Standards and Technology](https://www.physics.nist.gov/cgi-bin/cuu/Info/Units/binary.html), [Bureau International des Poids et Mesures](https://www.bipm.org/en/measurement-units/si-prefixes) |
| Sound Level Converter | `/unit-converters/sound-converter` | 8 | exact | 9 / 9 | International Organization for Standardization, International Organization for Standardization |
| Typography Converter | `/unit-converters/typography-converter` | 8 | exact | 9 / 9 | World Wide Web Consortium (W3C), [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Lumber Volume Converter | `/unit-converters/lumber-volume-converter` | 10 | standard | 9 / 9 | [National Institute of Standards and Technology](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) |
| Astronomical Distance Converter | `/unit-converters/astronomical-distance-converter` | 8 | exact | 9 / 9 | [Paris Observatory – PSL](https://observatoiredeparis.psl.eu/the-new-definition-of-the-astronomical-unit.html), International Astronomical Union |
| Roman Numeral Converter | `/unit-converters/roman-numeral-converter` | tool | exact | 9 / 9 | Encyclopaedia Britannica |
| Unix Timestamp Converter | `/unit-converters/unix-timestamp-converter` | tool | exact | 9 / 9 | [The Open Group / Linux man-pages project](https://man.archlinux.org/man/time.3p.en), [Ecma International (TC39)](https://tc39.es/ecma262/pr/3966/multipage/dates-and-temporal.html) |
| Color Converter | `/unit-converters/color-converter` | tool | exact | 9 / 9 | [World Wide Web Consortium (W3C)](https://drafts.csswg.org/css-color/Overview.bs) |
| Morse Code Translator | `/unit-converters/morse-code-translator` | tool | exact | 9 / 9 | [International Telecommunication Union](https://www.itu.int/rec/R-REC-M.1677-1-200910-I/en) |
| Text to Binary Converter | `/unit-converters/text-to-binary-converter` | tool | exact | 9 / 9 | [Internet Engineering Task Force (IETF)](https://www.rfc-editor.org/rfc/rfc3629) |
| Coordinate Converter | `/unit-converters/coordinate-converter` | tool | exact | 9 / 9 | [International Organization for Standardization](https://scc-ccn.ca/standardsdb/standards/8177905) |

## Not implemented

Nothing from the requested catalogue is left unimplemented. Live currency rates are intentionally not active (manual-rate mode).
