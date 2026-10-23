import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeTriangleEngine, triangleEngine } from "./engine";

export const triangle = defineCalculator({
  id: "triangle",
  slug: "triangle-calculator",
  status: "published",
  title: "Triangle Calculator",
  shortTitle: "Triangle",
  category: "math",
  collections: ["education-research", "construction-engineering"],
  summary: "Solve any triangle from three known sides and angles (SSS, SAS, ASA, AAS or SSA) and get its area, perimeter, type, inradius and circumradius.",
  metaTitle: "Triangle Calculator – Solve SSS, SAS, ASA, AAS and SSA",
  metaDescription: "Solve a triangle from three sides, two sides and an angle, or two angles and a side. Handles the ambiguous SSA case and finds area, perimeter and type.",
  keywords: ["triangle calculator", "solve triangle", "law of sines", "law of cosines", "SSA ambiguous case", "triangle area", "missing side", "missing angle", "inradius", "circumradius"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Precalculus, section 8.2: Non-right Triangles: Law of Cosines",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/precalculus/pages/8-2-non-right-triangles-law-of-cosines",
      usedFor: "The law of cosines for SSS and SAS, and Heron's formula for the area.",
    },
    {
      title: "Precalculus 2e, section 8.2: Non-right Triangles: Law of Sines",
      publisher: "LibreTexts (adapted from OpenStax, Rice University)",
      url: "https://math.libretexts.org/Bookshelves/Precalculus/Precalculus_2e_(OpenStax)/08%3A_Further_Applications_of_Trigonometry/8.02%3A_Non-right_Triangles_-_Law_of_Sines",
      usedFor: "The law of sines for ASA, AAS and SSA, including the ambiguous case.",
    },
  ],
  intro: [
    "A triangle is fixed by three measurements, as long as at least one of them is a side. This calculator takes any such set, SSS, SAS, ASA, AAS or SSA, and works out the missing sides and angles with the law of cosines and the law of sines.",
    "It also finds the area, perimeter, inradius and circumradius, and says whether the triangle is acute, right or obtuse and whether it is equilateral, isosceles or scalene. In the SSA case, two different triangles can fit the same values; the calculator shows both when that happens, and says so when no triangle exists. For right triangles from two sides, the Pythagorean Theorem Calculator is quicker.",
  ],
  howToUse: [
    "Choose which values you know. Side a is always opposite angle A, b opposite B and c opposite C.",
    "Enter the sides in any one unit and the angles in degrees.",
    "Read the area, then the table of all three sides and angles.",
    "For SSA, check the note: there may be a second triangle, listed separately.",
  ],
  formulas: [
    { title: "Law of cosines", expression: "c² = a² + b² − 2ab cos C\ncos A = (b² + c² − a²) ÷ (2bc)", explanation: "Finds the third side from two sides and the angle between them (SAS), or every angle from three sides (SSS)." },
    { title: "Law of sines", expression: "a ÷ sin A = b ÷ sin B = c ÷ sin C = 2R", explanation: "Finds the remaining sides once two angles are known (ASA, AAS), and the second angle in SSA. R is the circumradius." },
    { title: "SSA ambiguous case", expression: "h = b sin A\na < h: no triangle; a = h: one right triangle\nh < a < b: two triangles; a ≥ b: one triangle", explanation: "For an acute angle A, sin B = b sin A ÷ a has two possible angles, B and 180° − B. If A is 90° or more, a triangle exists only when a > b." },
    { title: "Area and radii", expression: "Area = √(s(s − a)(s − b)(s − c)), s = (a + b + c) ÷ 2\nr = Area ÷ s\nR = abc ÷ (4 × Area)", explanation: "Heron's formula gives the area from the three sides. r is the radius of the inscribed circle and R of the circumscribed circle." },
  ],
  examples: [
    {
      title: "Three sides: 5, 6 and 7",
      inputs: { mode: "sss", sideA: 5, sideB: 6, sideC: 7 },
      steps: ["cos A = (36 + 49 − 25) ÷ 84 ≈ 0.7143, so A ≈ 44.4153°; likewise B ≈ 57.1217° and C ≈ 78.4630°", "s = 9, Area = √(9 × 4 × 3 × 2) = √216 ≈ 14.6969", "All angles are below 90° and all sides differ: an acute, scalene triangle"],
      expectedPrimary: 14.696938456699069,
    },
    {
      title: "Two sides of 8 and 11 with a 37° angle between them",
      inputs: { mode: "sas", sideA: 8, sideB: 11, angleC: 37 },
      steps: ["c² = 64 + 121 − 176 × cos 37° ≈ 44.4401, so c ≈ 6.6663", "Area = ½ × 8 × 11 × sin 37° ≈ 26.4799", "B ≈ 96.7625°, so the triangle is obtuse"],
      expectedPrimary: 26.479861018690123,
    },
    {
      title: "SSA: a = 6, b = 8 and A = 35° (two triangles)",
      inputs: { mode: "ssa", sideA: 6, sideB: 8, angleA: 35 },
      steps: ["h = 8 × sin 35° ≈ 4.5886; since 4.5886 < 6 < 8, two triangles fit", "sin B = 8 × sin 35° ÷ 6 ≈ 0.7648, so B ≈ 49.8864° or 130.1136°", "Triangle 1: C ≈ 95.1136°, c ≈ 10.4190, area ≈ 23.9045. Triangle 2: C ≈ 14.8864°, c ≈ 2.6874, area ≈ 6.1657"],
      expectedPrimary: 23.90447880181987,
    },
  ],
  assumptions: [
    "The triangle is flat (Euclidean). Angles are in degrees and every side uses the same length unit.",
    "Each angle must be greater than 0° and less than 180°, the given angles must add up to less than 180°, and three sides must satisfy the triangle inequality.",
    "Acute, right or obtuse, and equal sides, are judged with a tiny tolerance so that rounding inside the computer does not hide a right angle or equal sides.",
    "Results are rounded only for display.",
  ],
  faqs: [
    { question: "Why can SSA give two triangles?", answer: "When the side opposite the known angle is shorter than the other known side but longer than the height b × sin A, it can meet the third side at two points. One gives an acute angle B and the other its supplement, 180° − B." },
    { question: "Why is AAA not an option?", answer: "Three angles fix the shape but not the size: every scaled copy has the same angles. At least one side length is needed." },
    { question: "How do I check whether three lengths make a triangle?", answer: "Each side must be shorter than the other two added together. Lengths of 3, 4 and 8 fail because 3 + 4 is less than 8." },
  ],
  related: ["pythagorean-theorem-calculator", "area-calculator", "roof-pitch-calculator"],
  updated: "2026-10-22",
  engine: triangleEngine,
  text,
  makeEngine: makeTriangleEngine,
  translations,
});
