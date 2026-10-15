const text = {
  value: "Value",
  from: "From",
  to: "To",
  unitNames: {
    mm2: "Square millimeters",
    cm2: "Square centimeters",
    m2: "Square meters",
    ha: "Hectares",
    km2: "Square kilometers",
    in2: "Square inches",
    ft2: "Square feet",
    yd2: "Square yards",
    acre: "Acres",
    mi2: "Square miles",
  },
  primary: "{value} {symbol} in {unit}",
  caption: "1 {from} = {factor} {to}",
  tableCaption: "{value} {symbol} in every area unit",
  tableUnit: "Unit",
  tableValue: "Value",
  note: "Results are shown to 10 significant digits.",
};
export type AreaConverterText = typeof text;
export default text;
