import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { depreciationEngine, makeDepreciationEngine } from "./engine";

export const depreciation = defineCalculator({
  id: "depreciation",
  slug: "depreciation-calculator",
  status: "published",
  title: "Depreciation Calculator",
  shortTitle: "Depreciation",
  category: "finance",
  collections: ["accounting-finance", "business"],
  summary: "Build a yearly depreciation schedule with the straight-line, declining-balance or sum-of-the-years'-digits method.",
  metaTitle: "Depreciation Calculator – Straight-Line, DDB and SYD",
  metaDescription: "Work out yearly depreciation and book value with straight-line, double or 150% declining balance, or sum-of-the-years'-digits, and see the full schedule.",
  keywords: ["depreciation calculator", "straight-line depreciation", "declining balance", "double declining balance", "sum of the years digits", "book value", "depreciation schedule", "salvage value"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Publication 946 (2025), How To Depreciate Property",
      publisher: "Internal Revenue Service (IRS)",
      url: "https://www.irs.gov/publications/p946",
      usedFor: "That US tax depreciation for most business property uses MACRS, which differs from the accounting methods computed here, and the general straight-line and declining-balance concepts.",
    },
  ],
  expertReview: { area: "tax", status: "pending" },
  intro: [
    "Depreciation spreads the cost of a long-lived asset, such as a machine, vehicle or computer, over the years it is used. Each year part of the cost becomes an expense, and the asset's book value falls until it reaches the expected salvage value.",
    "This calculator compares four common accounting methods. Straight-line charges the same amount every year. Declining-balance and sum-of-the-years'-digits charge more in the early years and less later, which suits assets that lose value quickly.",
  ],
  howToUse: [
    "Pick the currency and enter the asset's cost.",
    "Enter the salvage value you expect at the end of its life, or 0.",
    "Enter the useful life in whole years.",
    "Choose a method and read the first-year depreciation and the full schedule of depreciation, accumulated depreciation and book value.",
  ],
  formulas: [
    { title: "Straight-line", expression: "D = (C − S) ÷ N", explanation: "C is the cost, S the salvage value and N the useful life in years. The charge is the same every year." },
    { title: "Declining balance", expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)", explanation: "Bₖ₋₁ is the book value at the start of year k and f is 2 (double declining) or 1.5. In the final year the charge is whatever remains above salvage." },
    { title: "Sum-of-the-years'-digits", expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)", explanation: "For a 5-year life the digits add up to 15, so the yearly fractions are 5/15, 4/15, 3/15, 2/15 and 1/15." },
    { title: "Book value", expression: "Bₖ = C − (D₁ + … + Dₖ)", explanation: "The cost minus the accumulated depreciation. It ends at the salvage value." },
  ],
  examples: [
    {
      title: "Straight-line: $30,000 van, $3,000 salvage, 5 years",
      inputs: { currency: "USD", cost: 30000, salvage: 3000, life: 5, method: "straightLine" },
      steps: ["Depreciable amount = 30,000 − 3,000 = $27,000", "Yearly depreciation = 27,000 ÷ 5 = $5,400", "Book value after year 5 = $3,000"],
      expectedPrimary: 5400,
    },
    {
      title: "Double declining balance: $12,000 equipment, $1,500 salvage, 5 years",
      inputs: { currency: "USD", cost: 12000, salvage: 1500, life: 5, method: "declining200" },
      steps: [
        "Rate = 2 ÷ 5 = 40% of the book value each year",
        "Year 1 = 12,000 × 0.40 = $4,800, leaving $7,200",
        "Years 2–4 = $2,880, $1,728 and $1,036.80, leaving $1,555.20",
        "Year 5 takes the remaining $55.20 so the book value ends at $1,500",
      ],
      expectedPrimary: 4800,
    },
    {
      title: "Sum-of-the-years'-digits: €50,000 machine, €5,000 salvage, 10 years",
      inputs: { currency: "EUR", cost: 50000, salvage: 5000, life: 10, method: "sumOfYears" },
      steps: ["Digits = 10 × 11 ÷ 2 = 55", "Year 1 = 45,000 × 10 ÷ 55 ≈ €8,181.82", "Year 2 = 45,000 × 9 ÷ 55 ≈ €7,363.64"],
      expectedPrimary: (45000 * 10) / 55,
    },
  ],
  assumptions: [
    "These are accounting methods with a full-year convention: a whole year of depreciation is taken in the first year, with no half-year, mid-quarter or mid-month conventions.",
    "US tax depreciation for most business property uses MACRS, described in IRS Publication 946, with its own recovery periods, conventions and percentage tables. This tool does not compute MACRS, Section 179 or bonus depreciation, and other countries have their own tax rules.",
    "With declining balance, the book value is never taken below salvage and the remaining amount is taken in the final year. Some businesses switch to straight-line part way through instead; this tool does not.",
    "This is an estimate, not tax or accounting advice, and it has not been professionally reviewed.",
  ],
  faqs: [
    { question: "Which depreciation method should I use?", answer: "Straight-line is the simplest and most common for financial statements. Accelerated methods suit assets that lose most of their value or usefulness early, such as vehicles and computers. Your accountant and local rules decide which you may use for tax." },
    { question: "Why does the final declining-balance year look different?", answer: "A fixed percentage of a falling balance never reaches the salvage value exactly. The calculator takes whatever is left above salvage in the last year, which can be larger or smaller than the year before." },
    { question: "Is salvage value subtracted before applying the declining-balance rate?", answer: "No. The declining-balance rate is applied to the full book value. Salvage only acts as a floor: the book value is not allowed to fall below it." },
  ],
  related: ["roi-calculator", "break-even-calculator", "simple-interest-calculator"],
  updated: "2026-10-22",
  engine: depreciationEngine,
  text,
  makeEngine: makeDepreciationEngine,
  translations,
});
