import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { aspectRatioEngine, makeAspectRatioEngine } from "./engine";

export const aspectRatio = defineCalculator({
  id: "aspect-ratio",
  slug: "aspect-ratio-calculator",
  status: "published",
  title: "Aspect Ratio Calculator",
  shortTitle: "Aspect ratio",
  category: "other",
  collections: ["software-data", "marketing-ecommerce"],
  summary: "Find the aspect ratio of an image or screen size, resize to a ratio without distortion, or work out a screen's width and height from its diagonal.",
  metaTitle: "Aspect Ratio Calculator – Simplify, Resize, Screen Size",
  metaDescription: "Reduce any width × height to its aspect ratio, find the nearest common ratio, resize to a ratio in whole pixels, or get screen width and height from a diagonal.",
  keywords: ["aspect ratio calculator", "16:9 calculator", "resize image aspect ratio", "screen size calculator", "pixel aspect ratio", "21:9 ratio", "width height ratio", "tv dimensions from diagonal"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "21:9 aspect ratio",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/21:9_aspect_ratio",
      usedFor: "That “21:9” is a marketing name for ultrawide screens whose real ratio is 64:27 (about 2.37:1), for example 2560 × 1080.",
    },
    {
      title: "Ultrawide formats",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Ultrawide_formats",
      usedFor: "Ultrawide screen resolutions and their exact ratios, such as 2560 × 1080 (64:27).",
    },
    {
      title: "Calculating your screen dimensions (part 1 of 2)",
      publisher: "Elite Screens",
      url: "https://elitescreens.com/2015/10/calculating-your-screen-dimensions-part-1-2/",
      usedFor: "Screen width and height from the diagonal and the aspect ratio with the Pythagorean theorem.",
    },
  ],
  intro: [
    "An aspect ratio describes the shape of a picture or screen: its width compared with its height, written W:H. A 1920 × 1080 video and a 3840 × 2160 one have different sizes but the same 16:9 shape, so one can be scaled to the other without stretching.",
    "This calculator does three jobs. It reduces any width and height to the smallest whole-number ratio and compares it with common formats; it works out the missing side when you resize to a ratio; and it turns a screen's diagonal size into its width, height and area. For general ratios of any quantities, see the Ratio Calculator.",
  ],
  howToUse: [
    "Choose what you want to do.",
    "To find a ratio, enter the width and height in the same unit, usually pixels. Decimals are scaled to whole numbers before the ratio is reduced.",
    "To resize, enter the ratio (for example 16 and 9), choose whether you know the new width or the new height, and enter it. The other side is shown exactly and rounded to whole pixels.",
    "For a screen, enter the diagonal in inches or centimeters and the ratio. The width, height and area are shown in both units.",
  ],
  formulas: [
    { title: "Simplified ratio", expression: "W:H = (width ÷ g) : (height ÷ g), g = gcd(width, height)", explanation: "g is the greatest common divisor, found with Euclid's algorithm. Decimal sizes are first multiplied by a power of 10 to make them whole numbers." },
    { title: "Resizing", expression: "new height = new width × H ÷ W;  new width = new height × W ÷ H", explanation: "Keeping the same ratio means scaling both sides by the same factor." },
    { title: "Screen size", expression: "width = d × W ÷ √(W² + H²);  height = d × H ÷ √(W² + H²)", explanation: "The diagonal d is the hypotenuse of a right triangle whose sides are in the ratio W:H. The area is width × height." },
    { title: "Difference from a common ratio", expression: "difference = (width ÷ height) ÷ (Wc ÷ Hc) − 1", explanation: "Shown as a percentage. The nearest common ratio is the one with the smallest difference." },
  ],
  examples: [
    {
      title: "An ultrawide monitor at 2560 × 1080 pixels",
      inputs: { mode: "simplify", width: 2560, height: 1080 },
      steps: ["gcd(2560, 1080) = 40", "2560 ÷ 40 = 64 and 1080 ÷ 40 = 27, so the ratio is 64:27", "64 ÷ 27 ≈ 2.3704: 1.59% wider than “21:9” (2.3333) and 0.82% narrower than 2.39:1, the nearest common ratio"],
      expectedPrimary: "64:27",
    },
    {
      title: "Resize a 4:3 slide to a height of 900 pixels",
      inputs: { mode: "resize", ratioWidth: 4, ratioHeight: 3, knownSide: "height", newSize: 900 },
      steps: ["New width = 900 × 4 ÷ 3 = 1,200", "Both sides are already whole numbers, so no rounding is needed"],
      expectedPrimary: "1,200 × 900",
    },
    {
      title: "An 81 cm screen at 4:3",
      inputs: { mode: "screen", ratioWidth: 4, ratioHeight: 3, diagonal: 81, lengthUnit: "cm" },
      steps: ["√(4² + 3²) = 5", "Width = 81 × 4 ÷ 5 = 64.8 cm; height = 81 × 3 ÷ 5 = 48.6 cm", "Area = 64.8 × 48.6 = 3,149.28 cm²"],
      expectedPrimary: "64.8 × 48.6 cm",
    },
  ],
  assumptions: [
    "The width and height use the same unit and describe square pixels. Some older video formats use non-square pixels, so their stored size and displayed shape differ.",
    "The list of common ratios is for comparison only. “21:9” in particular is a marketing name: 2560 × 1080 screens are 64:27, and cinema widescreen is often quoted as 2.39:1.",
    "A screen's diagonal is measured across the visible picture. Frames, bezels and the curvature of curved screens are not included.",
  ],
  faqs: [
    { question: "Why is 1366 × 768 not exactly 16:9?", answer: "1366 × 768 reduces to 683:384, about 1.7786:1, which is within 0.05% of 16:9 (1.7778:1). Screen makers rounded the width to a convenient number, so it is sold as 16:9 even though the reduced ratio is not." },
    { question: "How do I keep the ratio exact when resizing?", answer: "Pick a width that is a multiple of the ratio's width part. For 16:9, any width that is a multiple of 16, such as 1280 or 1920, gives a whole-number height. Other widths need rounding, which changes the shape by a tiny amount." },
    { question: "Does a bigger 21:9 screen show more than a 16:9 screen with the same diagonal?", answer: "Not necessarily. For the same diagonal, a wider screen is shorter, and its area is smaller. Use the screen-size mode for both shapes and compare the height and area." },
  ],
  related: ["ratio-calculator", "pythagorean-theorem-calculator", "download-time-calculator"],
  updated: "2026-10-28",
  engine: aspectRatioEngine,
  text,
  makeEngine: makeAspectRatioEngine,
  translations,
});
