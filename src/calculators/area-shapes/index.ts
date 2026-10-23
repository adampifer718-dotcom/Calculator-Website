import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { areaShapesEngine, makeAreaShapesEngine } from "./engine";

export const areaShapes = defineCalculator({
  id: "area-shapes",
  slug: "area-calculator",
  status: "published",
  title: "Area Calculator",
  shortTitle: "Area",
  category: "math",
  collections: ["education-research", "construction-engineering"],
  summary: "Find the area of a trapezoid, parallelogram, rhombus, ellipse, sector, ring, triangle from three sides or regular polygon, with the perimeter where it applies.",
  metaTitle: "Area Calculator – Trapezoid, Ellipse, Sector and Polygon",
  metaDescription: "Calculate the area of a trapezoid, parallelogram, rhombus, ellipse, circular sector, ring, triangle from three sides or regular polygon in seven units.",
  keywords: ["area calculator", "area of a trapezoid", "area of an ellipse", "sector area", "annulus area", "heron's formula", "regular polygon area", "hexagon area", "rhombus area"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Prealgebra (OpenStax), Appendix: Geometric Formulas",
      publisher: "LibreTexts (adapted from OpenStax, Rice University)",
      url: "https://math.libretexts.org/Courses/Grayson_College/Prealgebra/Book%3A_Prealgebra_(OpenStax)/12%3A_Appendix/12.3%3A_Geometric_Formulas",
      usedFor: "Area formulas for the trapezoid and other basic plane figures.",
    },
    {
      title: "Precalculus, section 8.2: Non-right Triangles: Law of Cosines",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/precalculus/pages/8-2-non-right-triangles-law-of-cosines",
      usedFor: "Heron's formula for the area of a triangle from its three sides.",
    },
    {
      title: "Ellipse perimeter",
      publisher: "Mathwords",
      url: "https://www.mathwords.com/e/ellipse_perimeter.htm",
      usedFor: "Ramanujan's second approximation of the ellipse perimeter and its typical accuracy.",
    },
  ],
  intro: [
    "Area measures how much flat surface a shape covers. This calculator handles eight shapes that need more than length times width: the trapezoid, parallelogram, rhombus, ellipse, circular sector, ring (annulus), a triangle known only by its three sides, and any regular polygon from a triangle to a 1,000-sided figure.",
    "Rectangles, circles and triangles with a known base and height are covered by the Square Footage Calculator, so they are left out here. Pick a shape and a length unit, type the dimensions, and the area appears in that unit squared and in square meters, together with the perimeter wherever it can be found from the same measurements.",
  ],
  howToUse: [
    "Choose the shape.",
    "Choose the unit you measured in. Every length must use the same unit.",
    "Enter the dimensions shown for that shape. Heights are always perpendicular heights, and the sector angle is in degrees.",
    "Read the area, the area in square meters and the extra measurements such as the perimeter, arc length or apothem.",
  ],
  formulas: [
    { title: "Trapezoid and parallelogram", expression: "A = ½(a + b)h\nA = b × h", explanation: "a and b are the two parallel sides of the trapezoid; h is always the perpendicular height." },
    { title: "Rhombus", expression: "A = ½ d₁d₂\nP = 2√(d₁² + d₂²)", explanation: "The diagonals of a rhombus cross at right angles, so the four small right triangles give both the area and the side length." },
    { title: "Ellipse", expression: "A = πab\nP ≈ π(a + b)(1 + 3h ÷ (10 + √(4 − 3h))), h = (a − b)² ÷ (a + b)²", explanation: "a and b are the semi-axes. The perimeter uses Ramanujan's second approximation, because no simple exact formula exists." },
    { title: "Circular sector and ring", expression: "A = ½ r²θ, arc = rθ\nA = π(R² − r²)", explanation: "θ is the central angle converted to radians (θ = degrees × π ÷ 180). R and r are the outer and inner radii of the ring." },
    { title: "Triangle from three sides (Heron)", expression: "s = (a + b + c) ÷ 2\nA = √(s(s − a)(s − b)(s − c))", explanation: "s is the semi-perimeter. The sides must satisfy the triangle inequality. The calculator uses an equivalent rearrangement that stays accurate for very thin triangles." },
    { title: "Regular polygon", expression: "A = n s² ÷ (4 tan(π/n))\napothem = s ÷ (2 tan(π/n))\ninterior angle = (n − 2) × 180° ÷ n", explanation: "n is the number of equal sides and s the side length. The perimeter is n × s." },
  ],
  examples: [
    {
      title: "A curved garden bed shaped as a 135° sector with a 2.5 ft radius",
      inputs: { shape: "sector", unit: "ft", radius: 2.5, angle: 135 },
      steps: ["θ = 135 × π ÷ 180 ≈ 2.35619 rad", "A = ½ × 2.5² × 2.35619 ≈ 7.3631 ft²", "Arc = 2.5 × 2.35619 ≈ 5.8905 ft, so the edge to border is 5.8905 + 2 × 2.5 ≈ 10.8905 ft"],
      expectedPrimary: 7.3631077818510775,
    },
    {
      title: "A regular octagon tabletop with 30 cm sides",
      inputs: { shape: "polygon", unit: "cm", sides: 8, side: 30 },
      steps: ["tan(π/8) ≈ 0.414214", "A = 8 × 30² ÷ (4 × 0.414214) ≈ 4,345.58 cm²", "That is about 0.4346 m², with a perimeter of 240 cm"],
      expectedPrimary: 4345.584412271572,
    },
    {
      title: "A triangular plot with sides of 13 m, 14 m and 15 m",
      inputs: { shape: "heron", unit: "m", sideA: 13, sideB: 14, sideC: 15 },
      steps: ["s = (13 + 14 + 15) ÷ 2 = 21", "A = √(21 × 8 × 7 × 6) = √7,056", "A = 84 m²"],
      expectedPrimary: 84,
    },
  ],
  assumptions: [
    "Shapes are ideal: sides are straight, the regular polygon has equal sides and angles, and round shapes are true circles or ellipses.",
    "Heights are perpendicular heights. The slanted side of a trapezoid or parallelogram does not give the area.",
    "The ellipse perimeter is an approximation, typically within about 0.04%. All other results use exact formulas, rounded only for display.",
    "Square meters are found with exact length factors (1 in = 2.54 cm, 1 ft = 0.3048 m, 1 yd = 0.9144 m).",
  ],
  faqs: [
    { question: "Where are the rectangle, circle and ordinary triangle?", answer: "The Square Footage Calculator already covers rectangles, circles and triangles from a base and height, so this page focuses on shapes that need a different formula." },
    { question: "How do I find the area of a triangle when I only know the sides?", answer: "Use Heron's formula: choose “Triangle from three sides”. For sides of 5, 6 and 7, the semi-perimeter is 9 and the area is √(9 × 4 × 3 × 2) = √216 ≈ 14.70." },
    { question: "Why is the ellipse perimeter only approximate?", answer: "The exact perimeter of an ellipse needs an elliptic integral, which has no closed form. Ramanujan's second approximation is accurate enough for almost every practical use and becomes exact when the ellipse is a circle." },
  ],
  related: ["square-footage-calculator", "surface-area-calculator", "circumference-calculator"],
  updated: "2026-10-22",
  engine: areaShapesEngine,
  text,
  makeEngine: makeAreaShapesEngine,
  translations,
});
