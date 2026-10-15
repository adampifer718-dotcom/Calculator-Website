const text = {
  value: "Value",
  from: "From",
  to: "To",
  unitNames: {
    ms: "Meters per second",
    kmh: "Kilometers per hour",
    mph: "Miles per hour",
    fts: "Feet per second",
    kn: "Knots",
    cms: "Centimeters per second",
  },
  primary: "{value} {symbol} in {unit}",
  caption: "1 {from} = {factor} {to}",
  tableCaption: "{value} {symbol} in every speed unit",
  tableUnit: "Unit",
  tableValue: "Value",
  note: "Results are shown to 10 significant digits.",
};
export type SpeedConverterText = typeof text;
export default text;
