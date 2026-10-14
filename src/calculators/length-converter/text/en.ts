const text = {
  value: "Value",
  from: "From",
  to: "To",
  unitNames: { mm: "Millimeters", cm: "Centimeters", m: "Meters", km: "Kilometers", in: "Inches", ft: "Feet", yd: "Yards", mi: "Miles", nmi: "Nautical miles" },
  primary: "{value} {symbol} in {unit}",
  caption: "1 {from} = {factor} {to}",
  tableCaption: "{value} {symbol} in every length unit",
  tableUnit: "Unit",
  tableValue: "Value",
  note: "Results are shown to 10 significant digits.",
};
export type LengthConverterText = typeof text;
export default text;
