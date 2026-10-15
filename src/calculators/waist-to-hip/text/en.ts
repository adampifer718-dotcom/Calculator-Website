const text = {
  unit: "Unit",
  units: { cm: "Centimeters (cm)", in: "Inches (in)" },
  waist: "Waist circumference",
  waistHelp: "Measure midway between the lowest rib and the top of the hip bone (iliac crest), at the end of a normal breath out.",
  hip: "Hip circumference",
  hipHelp: "Measure around the widest part of the buttocks, with the tape level.",
  sex: "Sex",
  sexHelp: "Used only to choose the WHO cut-off, which differs for women and men.",
  sexes: { female: "Female", male: "Male" },
  errors: {
    implausible: "A waist-to-hip ratio of {ratio} is outside the range seen in adults. Check that both measurements use the same unit.",
  },
  ratio: "Waist-to-hip ratio",
  caption: "Waist {waist} ÷ hip {hip}.",
  comparison: "Compared with the WHO cut-off",
  atOrAbove: "At or above the cut-off",
  below: "Below the cut-off",
  cutoff: "WHO cut-off for {sex}",
  waistAtCutoff: "Waist that would reach the cut-off",
  notes: {
    above: "A ratio of {cutoff} or more for {sex} is the level the WHO expert consultation linked with a substantially increased risk of metabolic complications. It is a screening marker, not a diagnosis.",
    below: "The ratio is below the WHO cut-off of {cutoff} for {sex}. Other factors, such as weight, activity, blood pressure and family history, also affect health risk.",
    rounding: "The ratio is rounded to two decimals before it is compared with the cut-off.",
    advice: "This is an estimate, not medical advice. Talk to a healthcare professional about your results.",
  },
  sexNames: { female: "women", male: "men" },
};
export type WaistToHipText = typeof text;
export default text;
