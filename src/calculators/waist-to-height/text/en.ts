const text = {
  unit: "Unit",
  units: { cm: "Centimeters (cm)", in: "Inches (in)" },
  waist: "Waist circumference",
  waistHelp: "Measure halfway between the bottom of your lowest rib and the top of your hip bone, after breathing out normally.",
  height: "Height",
  heightHelp: "Your standing height without shoes, in the same unit as the waist.",
  errors: {
    implausible: "A waist-to-height ratio of {ratio} is very unlikely. Check that both measurements use the same unit.",
  },
  ratio: "Waist-to-height ratio",
  caption: "Waist {waist} ÷ height {height}.",
  band: "NICE adult reference band (reference only, not a diagnosis)",
  bands: {
    below: "Below 0.4: under the lowest band in the guideline",
    healthy: "0.4 to 0.49: no increased health risk",
    increased: "0.5 to 0.59: increased health risk",
    high: "0.6 or more: high (further increased) health risk",
  },
  waistHalf: "Waist at a ratio of 0.5 (half your height)",
  waistHigh: "Waist at a ratio of 0.6",
  difference: "Your waist compared with half your height",
  notes: {
    rounding: "The band is chosen from the ratio rounded to two decimals, as displayed.",
    below: "The NICE bands start at 0.4. A lower ratio may mean a measurement or unit mistake, or a very slim build; it is not a band of its own.",
    scope: "NICE uses these bands for adults with a BMI under 35, of any sex or ethnicity. They are not meant for adults with a BMI of 35 or more, during pregnancy, or for children and young people, who should be assessed with a clinician.",
    reference: "This is a reference comparison, not a diagnosis. Talk to a doctor or nurse about what your result means for you.",
  },
};
export type WaistToHeightText = typeof text;
export default text;
