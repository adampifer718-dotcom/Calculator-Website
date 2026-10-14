const text = {
  shape: "Shape",
  shapes: { rectangle: "Rectangle or square", circle: "Circle", triangle: "Triangle" },
  unit: "Measurement unit",
  units: { ft: "Feet (ft)", in: "Inches (in)", yd: "Yards (yd)", m: "Meters (m)", cm: "Centimeters (cm)" },
  length: "Length",
  width: "Width",
  diameter: "Diameter",
  base: "Base",
  height: "Height",
  quantity: "Number of areas",
  quantityHelp: "For several identical rooms or pieces.",
  area: "Area",
  quantityCaption: "Total for {count} identical areas.",
  sqM: "Square meters",
  sqYd: "Square yards",
  sqUnit: "Square {unit}",
  sqFtSuffix: "sq ft",
  sqYdSuffix: "sq yd",
};
export type SquareFootageText = typeof text;
export default text;
