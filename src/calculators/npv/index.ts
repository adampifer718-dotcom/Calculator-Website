import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { npvEngine, makeNpvEngine } from "./engine";

export const npv = defineCalculator({
  id: "npv",
  slug: "npv-calculator",
  status: "published",
  title: "NPV and IRR Calculator",
  shortTitle: "NPV and IRR",
  category: "finance",
  collections: ["business", "accounting-finance"],
  summary: "Discount a series of yearly cash flows to find the net present value, internal rate of return, profitability index and discounted payback.",
  metaTitle: "NPV and IRR Calculator – Net Present Value of Cash Flows",
  metaDescription: "Find the net present value and internal rate of return of an investment from its yearly cash flows, with the profitability index and discounted payback.",
  keywords: ["npv calculator", "net present value", "irr calculator", "internal rate of return", "discounted cash flow", "profitability index", "discounted payback period", "capital budgeting"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Principles of Finance, Chapter 16 summary: How Companies Think about Investing",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/principles-finance/pages/16-summary",
      usedFor: "The definitions of net present value and internal rate of return and the accept/reject rules for each.",
    },
    {
      title: "Net Present Value and Internal Rate of Return (Finance)",
      publisher: "Newcastle University",
      url: "https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/finance/net-present-value-and-internal-rate-of-return.html",
      usedFor: "The discounting formula for NPV and the definition of IRR as the rate at which the NPV equals zero.",
    },
  ],
  expertReview: { area: "financial", status: "pending" },
  intro: [
    "Money you receive later is worth less than the same amount today, because today's money could be invested in the meantime. Net present value (NPV) puts every future cash flow of a project into today's terms by discounting it at your required rate of return, then subtracts what you pay up front.",
    "A positive NPV means the project is expected to earn more than that rate; a negative NPV means it earns less. The internal rate of return (IRR) is the rate at which the NPV is exactly zero, so it shows the project's own yearly return. This page covers both, so there is no separate IRR calculator.",
  ],
  howToUse: [
    "Pick the currency and enter the initial investment as a positive amount.",
    "List the net cash flow for each year, starting with year 1. Use a minus sign for a year with a net outflow, such as a major repair.",
    "Enter the discount rate: the yearly return you require or your cost of capital.",
    "Read the NPV, the IRR, the profitability index and the discounted payback period, and check the year-by-year table.",
  ],
  formulas: [
    { title: "Net present value", expression: "NPV = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ", explanation: "C₀ is the initial investment, CFₜ the cash flow at the end of year t and r the discount rate as a decimal. The sum runs from year 1 to the last year." },
    { title: "Internal rate of return", expression: "−C₀ + Σ CFₜ ÷ (1 + IRR)ᵗ = 0", explanation: "Found by bisection between −99.99% and 1,000% per year. When the cash flows change sign more than once there can be several solutions, so no IRR is reported." },
    { title: "Profitability index", expression: "PI = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀", explanation: "The present value received per unit invested. A PI above 1 matches a positive NPV." },
    { title: "Discounted payback period", expression: "k + (−cumulativeₖ) ÷ discounted CFₖ₊₁", explanation: "k is the last year in which the cumulative discounted value is still negative. The fraction assumes the next year's cash flow arrives evenly." },
  ],
  examples: [
    {
      title: "$50,000 machine returning five years of cash flows at 8%",
      inputs: { currency: "USD", initial: 50000, cashFlows: "12000, 15000, 18000, 20000, 9000", rate: 8 },
      steps: [
        "Discounted values: 12,000 ÷ 1.08 ≈ 11,111.11; 15,000 ÷ 1.08² ≈ 12,860.08; 18,000 ÷ 1.08³ ≈ 14,288.98; 20,000 ÷ 1.08⁴ ≈ 14,700.60; 9,000 ÷ 1.08⁵ ≈ 6,125.25",
        "Present value of the cash flows ≈ $59,086.02",
        "NPV = 59,086.02 − 50,000 ≈ $9,086.02, and the IRR is about 14.60%",
      ],
      expectedPrimary: 9086.019583233761,
    },
    {
      title: "€250,000 project at a 12% required return",
      inputs: { currency: "EUR", initial: 250000, cashFlows: "60000, 70000, 80000, 90000, 40000", rate: 12 },
      steps: [
        "Present value of the five cash flows ≈ €246,211.12",
        "NPV = 246,211.12 − 250,000 ≈ −€3,788.88",
        "The IRR is about 11.38%, just below the 12% required return, which is why the NPV is negative",
      ],
      expectedPrimary: -3788.878889748319,
    },
    {
      title: "Cash flows that change sign twice",
      inputs: { currency: "USD", initial: 1000, cashFlows: "3000, -2200", rate: 10 },
      steps: [
        "NPV = −1,000 + 3,000 ÷ 1.1 − 2,200 ÷ 1.1² = −1,000 + 2,727.27 − 1,818.18 ≈ −$90.91",
        "Both 27.64% and 72.36% make the NPV zero, so the IRR is reported as not unique",
      ],
      expectedPrimary: -1000 / 11,
    },
  ],
  assumptions: [
    "Each cash flow arrives at the end of its year, and the initial investment is paid at the start (year 0). Mid-year or monthly timing gives a different NPV.",
    "One constant discount rate is used for every year. Taxes, inflation and financing costs are only included if you have already built them into the cash flows or the rate.",
    "The IRR assumes the cash flows change sign only once. With several sign changes the IRR can have more than one value or none, and the NPV is the more reliable guide.",
    "This is an estimate for comparing options, not investment or financial advice, and it has not been professionally reviewed.",
  ],
  faqs: [
    { question: "What discount rate should I use?", answer: "Use the return you could earn elsewhere on an investment of similar risk, or your organization's cost of capital. A higher rate lowers the value of later cash flows, so riskier projects usually get a higher rate." },
    { question: "Why can the IRR and NPV disagree when I compare projects?", answer: "IRR is a percentage and ignores the size of the project, while NPV is an amount. A small project can have a higher IRR but add less value than a larger one. When the two rank projects differently, NPV at your required rate is generally preferred." },
    { question: "Why is the IRR shown as not unique?", answer: "When the cash flows switch between outflows and inflows more than once, for example a large clean-up cost at the end, the NPV can cross zero at several rates. No single rate then describes the project, so the calculator reports the NPV only." },
  ],
  related: ["roi-calculator", "compound-interest-calculator", "depreciation-calculator"],
  updated: "2026-10-24",
  engine: npvEngine,
  text,
  makeEngine: makeNpvEngine,
  translations,
});
