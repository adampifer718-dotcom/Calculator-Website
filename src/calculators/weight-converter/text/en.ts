const text = {
  value: "Value",
  from: "From",
  to: "To",
  unitNames: { mg: "Milligrams", g: "Grams", kg: "Kilograms", t: "Metric tonnes", oz: "Ounces (avoirdupois)", lb: "Pounds", st: "Stones" },
  primary: "{value} {symbol} in {unit}",
  caption: "1 {from} = {factor} {to}",
  tableCaption: "{value} {symbol} in every mass unit",
  tableUnit: "Unit",
  tableValue: "Value",
  note: "Results are shown to 10 significant digits.",
};
export type WeightConverterText = typeof text;
export default text;
