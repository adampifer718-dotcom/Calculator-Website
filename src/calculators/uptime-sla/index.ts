import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeUptimeSlaEngine, uptimeSlaEngine } from "./engine";

export const uptimeSla = defineCalculator({
  id: "uptime-sla",
  slug: "uptime-calculator",
  status: "published",
  title: "Uptime and SLA Calculator",
  shortTitle: "Uptime / SLA",
  category: "other",
  collections: ["software-data", "business"],
  summary: "Turn an SLA percentage into allowed downtime per day, week, month and year, find the availability achieved from actual downtime, or combine components in series or parallel.",
  metaTitle: "Uptime and SLA Calculator – Allowed Downtime and Nines",
  metaDescription: "Convert an uptime SLA such as 99.9% into allowed downtime per day, week, month and year, measure achieved availability, and combine serial or redundant parts.",
  keywords: ["uptime calculator", "sla calculator", "allowed downtime", "99.9 uptime", "nines of availability", "availability calculator", "composite sla", "downtime per month"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Site Reliability Engineering, chapter 3: Embracing Risk",
      publisher: "Google",
      url: "https://sre.google/sre-book/embracing-risk/",
      usedFor: "Time-based availability as uptime ÷ (uptime + downtime), and the downtime that an availability target allows per period.",
    },
    {
      title: "Availability",
      publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Availability",
      usedFor: "Combining availabilities: the product for components in series and one minus the product of unavailabilities for redundant components.",
    },
    {
      title: "Designing Highly Available Systems 1/5 – Series & Parallel",
      publisher: "AWS Community",
      url: "https://community.aws/content/2f3iBkaGxz19uhBxKvgF6tmNd9t/designing-highly-available-systems-1-5---series-parallel",
      usedFor: "Worked series and parallel availability calculations, and the assumption that failures are independent.",
    },
  ],
  intro: [
    "A service level agreement (SLA) often promises an availability such as 99.9%, “three nines”. That sounds close to perfect, but it still allows about 43 minutes of downtime a month. Seeing the allowance as time makes targets easier to compare and to plan maintenance around.",
    "This calculator converts an availability target into allowed downtime for a day, a week, a month and a year; works out the availability you actually achieved from measured downtime; and combines the availabilities of several components that depend on each other (in series) or back each other up (in parallel).",
  ],
  howToUse: [
    "Choose what you want to work out.",
    "For allowed downtime, enter the SLA percentage. The monthly allowance is shown first, followed by a table for every period.",
    "For achieved availability, enter the length of the measurement period and the total downtime in it.",
    "For several components, list their availabilities in percent and choose whether all of them must work (series) or any one is enough (parallel).",
  ],
  formulas: [
    { title: "Allowed downtime", expression: "downtime = (1 − A) × period", explanation: "A is the availability as a fraction (99.9% = 0.999). A year is 365 days and a month is 365 ÷ 12 = 30.42 days." },
    { title: "Achieved availability", expression: "A = 1 − downtime ÷ period", explanation: "Both times must be in the same unit; the calculator converts them for you." },
    { title: "Number of nines", expression: "nines = −log₁₀(1 − A)", explanation: "99.9% gives 3 nines and 99.95% about 3.3. It is not defined for 100%." },
    { title: "Components in series", expression: "A = A₁ × A₂ × … × Aₙ", explanation: "Every component must be up, so the combined availability is below the weakest one." },
    { title: "Components in parallel", expression: "A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)", explanation: "The system is down only when all redundant components are down at the same time." },
  ],
  examples: [
    {
      title: "Monthly downtime allowed by a 99.9% SLA",
      inputs: { mode: "allowed", sla: 99.9 },
      steps: ["A month is 365 × 86,400 ÷ 12 = 2,628,000 seconds", "Allowed downtime = (1 − 0.999) × 2,628,000 = 2,628 s", "2,628 s = 43 min 48 s"],
      expectedPrimary: "43 min 48 s",
    },
    {
      title: "25 minutes of downtime in a 30-day month",
      inputs: { mode: "achieved", periodLength: 30, periodUnit: "d", downtime: 25, downtimeUnit: "min" },
      steps: ["Period = 30 × 1,440 = 43,200 min", "Downtime share = 25 ÷ 43,200 ≈ 0.0579%", "Availability = 100% − 0.0579% ≈ 99.94213%"],
      expectedPrimary: 99.94212962962963,
    },
    {
      title: "Two redundant servers at 99.9% each",
      inputs: { mode: "composite", components: "99.9, 99.9", topology: "parallel" },
      steps: ["Each server is down 0.1% of the time", "Both are down together 0.001 × 0.001 = 0.000001 of the time", "Availability = 1 − 0.000001 = 99.9999%, or 6 nines"],
      expectedPrimary: 99.9999,
    },
  ],
  assumptions: [
    "A year is taken as 365 days and a month as one twelfth of a year (about 30.42 days). Contracts may use calendar months, 30-day months or 365.25-day years, which change the allowance slightly.",
    "Many SLAs exclude planned maintenance and count only some kinds of outage. Check the contract's definitions before comparing figures.",
    "Combined availabilities assume that components fail independently. Shared power, networks, software releases or providers make real systems less available than the formulas suggest.",
  ],
  faqs: [
    { question: "How much downtime does 99.99% allow?", answer: "About 52 minutes 34 seconds per 365-day year, or 4 minutes 23 seconds per month of 365 ÷ 12 days. Each extra nine divides the allowance by 10." },
    { question: "Why is a chain of reliable services less reliable than each one?", answer: "When a request needs every service in the chain, any one of them failing causes an outage. The availabilities multiply: three services at 99.9% give about 99.7% together, which is roughly three times as much downtime as one of them." },
    { question: "Does adding a second server double the nines?", answer: "In the ideal case, yes: two independent servers at 99.9% give 99.9999%. In practice the load balancer, the database and shared failure causes remain, so the real gain is smaller." },
  ],
  related: ["time-calculator", "percentage-calculator", "probability-calculator"],
  updated: "2026-10-28",
  engine: uptimeSlaEngine,
  text,
  makeEngine: makeUptimeSlaEngine,
  translations,
});
