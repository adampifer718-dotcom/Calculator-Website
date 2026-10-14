const text = {
  value: "Temperature",
  from: "From",
  to: "To",
  scales: { C: "Celsius (°C)", F: "Fahrenheit (°F)", K: "Kelvin (K)" },
  belowZero: "This is below absolute zero (0 K, −273.15 °C, −459.67 °F).",
  primary: "Converted temperature",
  tableCaption: "On every scale",
  tableScale: "Scale",
  tableValue: "Temperature",
};
export type TemperatureConverterText = typeof text;
export default text;
