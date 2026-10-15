const text = {
  solve: "Find",
  solveOptions: { density: "Density (ρ)", mass: "Mass (m)", volume: "Volume (V)" },
  mass: "Mass (m)",
  massUnit: "Mass unit",
  massUnits: { g: "Grams (g)", kg: "Kilograms (kg)", lb: "Pounds (lb)" },
  volume: "Volume (V)",
  volumeUnit: "Volume unit",
  volumeUnits: { cm3: "Cubic centimeters (cm³ = mL)", L: "Liters (L)", m3: "Cubic meters (m³)", ft3: "Cubic feet (ft³)" },
  density: "Density (ρ)",
  densityUnit: "Density unit",
  densityUnits: { gcm3: "Grams per cubic centimeter (g/cm³)", kgm3: "Kilograms per cubic meter (kg/m³)", lbft3: "Pounds per cubic foot (lb/ft³)" },
  unitHelp: "For the value you are finding, this is the unit of the answer.",
  results: { density: "Density", mass: "Mass", volume: "Volume" },
  inUnit: "In {unit}",
  relative: "Relative to water (1,000 kg/m³)",
  floats: "Less dense than water, so it would float in pure water.",
  sinks: "Denser than water, so it would sink in pure water.",
  note: "1 cm³ is the same as 1 mL. Densities of liquids and gases change with temperature, and gases also with pressure.",
};
export type DensityText = typeof text;
export default text;
