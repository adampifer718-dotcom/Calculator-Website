const text = {
  units: "Units",
  unitSystems: { imperial: "US (ft, ft²)", metric: "Metric (m, m²)" },
  length: "Room length",
  width: "Room width",
  length2: "Second area length",
  width2: "Second area width",
  secondHelp: "Optional. For an L-shaped room, split it into two rectangles and enter the second one here. Leave both at 0 otherwise.",
  waste: "Waste allowance",
  wasteHelp: "Extra for cuts, offcuts and damaged pieces. About 10% suits a straight layout; use about 15% for diagonal or herringbone patterns.",
  coverage: "Coverage per box",
  coverageHelp: "The area one box covers, printed on the box or the product page.",
  price: "Price per unit area",
  priceHelp: "Optional. The price of the flooring per square foot or square meter.",
  errors: {
    secondPair: "Enter both the length and the width of the second area, or set both to 0.",
  },
  boxes: "Boxes needed",
  caption: "{area} plus {waste} waste, at {coverage} per box.",
  floorArea: "Floor area",
  areaWithWaste: "Area including waste",
  areaBought: "Area in the boxes bought",
  leftover: "Spare after installation",
  otherUnit: "Floor area in other units",
  cost: "Flooring cost (whole boxes)",
  costWithWaste: "Cost of the area including waste",
  notes: {
    squareFootage: "Need only the area of a room? The Square Footage Calculator gives the area without boxes or waste.",
    extras: "Underlayment, trim, transition strips and adhesive are not included.",
  },
};
export type FlooringText = typeof text;
export default text;
