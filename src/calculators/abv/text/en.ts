const text = {
  scale: "Gravity scale",
  scales: { sg: "Specific gravity (SG)", plato: "Degrees Plato (°P)" },
  og: "Original gravity (OG)",
  ogHelp: "The specific gravity before fermentation, for example 1.050. Accepted range 0.980 to 1.200.",
  fg: "Final gravity (FG)",
  fgHelp: "The specific gravity after fermentation, for example 1.010.",
  ogPlato: "Original extract",
  ogPlatoHelp: "The original gravity in degrees Plato, for example 12.",
  fgPlato: "Apparent final extract",
  fgPlatoHelp: "The final hydrometer reading in degrees Plato, for example 2.5. It can be slightly below 0 for very dry beers.",
  errors: {
    fgAboveOg: "The final gravity cannot be higher than the original gravity.",
    sgRange: "This converts to a specific gravity of {sg}, outside the accepted range of 0.980 to 1.200.",
  },
  abv: "Alcohol by volume (standard formula)",
  caption: "OG {og} − FG {fg} = {drop} gravity points.",
  abvAlt: "Alcohol by volume (alternative formula)",
  abw: "Alcohol by weight (approximate)",
  attenuation: "Apparent attenuation",
  ogSg: "Original gravity as SG",
  fgSg: "Final gravity as SG",
  notes: {
    estimate: "This is a homebrewing estimate from hydrometer readings, not a figure for legal labelling. No hydrometer temperature correction is applied.",
    high: "For strong worts the two formulas give noticeably different results. Many brewers prefer the alternative formula at high gravities.",
    noAttenuation: "Apparent attenuation needs an original gravity above 1.000.",
  },
};
export type AbvText = typeof text;
export default text;
