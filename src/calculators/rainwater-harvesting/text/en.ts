const text = {
  units: "Units",
  unitOptions: { metric: "Metric (m², mm, liters)", imperial: "US (ft², inches, gallons)" },
  area: "Catchment (roof) area",
  areaHelp: "The horizontal footprint of the roof, not the sloped surface.",
  rainfall: "Rainfall",
  rainfallHelp: "For one storm, a month or a year.",
  coefficient: "Runoff coefficient",
  coefficientHelp: "Share of rain that reaches the tank after losses (0 to 1).",
  collected: "Water collected",
  inLiters: "In liters",
  inGallons: "In US gallons",
  inCubic: "In cubic meters",
  gallons: "US gal",
  note: "1 mm of rain on 1 m² is exactly 1 liter; 1 inch of rain on 1 ft² is 144 ÷ 231 ≈ 0.623 US gallons.",
};
export type RainwaterText = typeof text;
export default text;
