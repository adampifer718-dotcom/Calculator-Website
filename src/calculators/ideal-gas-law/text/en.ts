const text = {
  solve: "Find",
  solveOptions: { P: "Pressure (P)", V: "Volume (V)", n: "Amount (n)", T: "Temperature (T)" },
  pressure: "Pressure (P)",
  pressureUnit: "Pressure unit",
  pressureUnits: { Pa: "Pascals (Pa)", kPa: "Kilopascals (kPa)", bar: "Bar (bar)", atm: "Standard atmospheres (atm)", mmHg: "Millimeters of mercury (mmHg)" },
  volume: "Volume (V)",
  volumeUnit: "Volume unit",
  volumeUnits: { L: "Liters (L)", mL: "Milliliters (mL)", m3: "Cubic meters (m³)" },
  moles: "Amount of gas (n)",
  temperature: "Temperature (T)",
  temperatureUnit: "Temperature unit",
  temperatureUnits: { K: "Kelvin (K)", C: "Degrees Celsius (°C)", F: "Degrees Fahrenheit (°F)" },
  unitHelp: "For the value you are finding, this is the unit of the answer.",
  belowAbsoluteZero: "The temperature must be above absolute zero (0 K = −273.15 °C = −459.67 °F).",
  results: { P: "Pressure", V: "Volume", n: "Amount of gas", T: "Temperature" },
  inUnit: "In {unit}",
  molecules: "Number of molecules (n × Nₐ)",
  molarVolume: "Molar volume (V ÷ n)",
  note: "Uses R = 8.31446261815324 J/(mol·K). Real gases depart from this ideal model at high pressure and at low temperature, especially near condensation.",
};
export type IdealGasLawText = typeof text;
export default text;
