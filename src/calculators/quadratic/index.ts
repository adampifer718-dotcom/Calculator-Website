import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { quadraticEngine, makeQuadraticEngine } from "./engine";

export const quadratic = defineCalculator({
  id: "quadratic",
  slug: "quadratic-equation-calculator",
  status: "published",
  title: "Quadratic Equation Calculator",
  shortTitle: "Quadratic equation",
  category: "math",
  collections: ["education-research"],
  summary: "Solve ax² + bx + c = 0 for real or complex roots, with the discriminant, vertex and axis of symmetry.",
  metaTitle: "Quadratic Equation Calculator – Roots, Vertex, Discriminant",
  metaDescription: "Solve any quadratic equation ax² + bx + c = 0. Get real or complex roots, the discriminant and what it means, the vertex and the axis of symmetry.",
  keywords: ["quadratic equation", "quadratic formula", "roots", "discriminant", "vertex", "parabola", "complex roots", "solve for x", "algebra"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Elementary Algebra, section 10.3: Solve Quadratic Equations Using the Quadratic Formula",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/elementary-algebra/pages/10-3-solve-quadratic-equations-using-the-quadratic-formula",
      usedFor: "The quadratic formula and how the discriminant predicts the number and type of solutions.",
    },
  ],
  intro: [
    "A quadratic equation has the form ax² + bx + c = 0, where a is not zero. Its graph is a parabola, and the roots are the points where that parabola crosses the x-axis.",
    "Type the three coefficients to get both roots at once. When the parabola never reaches the x-axis, the calculator gives the pair of complex roots instead. It also reports the discriminant, the vertex and the axis of symmetry.",
  ],
  howToUse: [
    "Rearrange your equation so that one side is 0, for example 3x² = 7x + 6 becomes 3x² − 7x − 6 = 0.",
    "Enter a, b and c. Include the minus signs, and use 0 for any missing term.",
    "Read the roots. Real roots are listed from largest to smallest; complex roots are shown as real part ± imaginary part.",
    "Use the discriminant, vertex and axis of symmetry to sketch the parabola or check your working.",
  ],
  formulas: [
    { title: "Quadratic formula", expression: "x = (−b ± √(b² − 4ac)) ÷ 2a", explanation: "Gives both roots. The ± produces one root with + and one with −." },
    { title: "Discriminant", expression: "D = b² − 4ac", explanation: "D > 0 gives two real roots, D = 0 gives one repeated root, and D < 0 gives two complex conjugate roots." },
    { title: "Stable form used for the calculation", expression: "q = −½(b + sign(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q", explanation: "Algebraically identical to the quadratic formula, but it avoids subtracting two nearly equal numbers, which loses precision when b² is much larger than 4ac." },
    { title: "Complex roots", expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i", explanation: "Used when D < 0; i is the imaginary unit, with i² = −1." },
    { title: "Vertex and axis", expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  axis: x = h", explanation: "The vertex (h, k) is the turning point of the parabola. k equals the value of ax² + bx + c at x = h." },
    { title: "Sum and product of the roots", expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a", explanation: "Vieta's formulas. They hold for complex roots too." },
  ],
  examples: [
    {
      title: "Two real roots: 3x² − 7x − 6 = 0",
      inputs: { a: 3, b: -7, c: -6 },
      steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, so x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 and x₂ = −4 ÷ 6 ≈ −0.6667"],
      expectedPrimary: "x₁ = 3, x₂ = -0.6666666667",
    },
    {
      title: "One repeated root: 4x² + 12x + 9 = 0",
      inputs: { a: 4, b: 12, c: 9 },
      steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1.5", "The parabola just touches the x-axis at its vertex (−1.5, 0)."],
      expectedPrimary: "x = -1.5 (double root)",
    },
    {
      title: "Complex roots: x² − 2x + 10 = 0",
      inputs: { a: 1, b: -2, c: 10 },
      steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Real part: −(−2) ÷ 2 = 1", "Imaginary part: √36 ÷ 2 = 3, so x = 1 ± 3i"],
      expectedPrimary: "x = 1 ± 3i",
    },
  ],
  assumptions: [
    "Coefficients are real numbers. Equations with complex coefficients are not supported.",
    "Results are shown to 10 significant digits. A discriminant that is zero apart from tiny rounding error is treated as exactly zero, so the double root is reported.",
    "Very large or very small coefficients are calculated in double-precision floating point, so the last digits of extreme results can differ from exact arithmetic.",
  ],
  faqs: [
    { question: "What if a is 0?", answer: "Then there is no x² term and the equation is linear: bx + c = 0, with the single solution x = −c ÷ b. The calculator asks for a non-zero a because the quadratic formula would divide by zero." },
    { question: "What does a negative discriminant mean?", answer: "The parabola never crosses the x-axis, so there are no real solutions. The two solutions are complex numbers that differ only in the sign of their imaginary part." },
    { question: "Why does the calculator not use the textbook formula directly?", answer: "When b² is much larger than 4ac, −b + √D subtracts two almost equal numbers and loses digits. The stable form computes the larger root first and gets the smaller one from the product of the roots, c ÷ a, which keeps full precision." },
  ],
  related: ["slope-calculator", "square-root-calculator", "exponent-calculator"],
  updated: "2026-10-15",
  engine: quadraticEngine,
  text,
  makeEngine: makeQuadraticEngine,
  translations,
});
