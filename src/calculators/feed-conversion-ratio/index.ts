import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { feedConversionRatioEngine, makeFeedConversionRatioEngine } from "./engine";

export const feedConversionRatio = defineCalculator({
  id: "feed-conversion-ratio",
  slug: "feed-conversion-ratio-calculator",
  status: "published",
  title: "Feed Conversion Ratio Calculator",
  shortTitle: "Feed conversion ratio",
  category: "biology",
  collections: ["agriculture-gardening", "education-research"],
  summary: "Work out the feed conversion ratio (FCR) of livestock, poultry or fish from feed used and weight gained, with a mortality-adjusted FCR and feed cost per unit of gain.",
  metaTitle: "Feed Conversion Ratio (FCR) Calculator",
  metaDescription: "Calculate FCR as feed consumed ÷ live-weight gain, with an optional mortality-adjusted ratio, feed efficiency, gain per head and feed cost per kg or lb gained.",
  keywords: ["feed conversion ratio", "fcr", "feed efficiency", "livestock", "poultry", "aquaculture", "weight gain", "feed cost", "mortality adjusted fcr"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Understanding Feed Conversion Ratio (aquaculture teaching module 6)",
      publisher: "University of Florida IFAS, Indian River Research and Education Center",
      url: "https://irrec.ifas.ufl.edu/media/irrecifasufledu/teach-aquaculture-/module-6/Understanding-Feed-Conversion-Ratio.pdf",
      usedFor: "FCR = total feed fed ÷ weight gained, in the same unit, with lower values meaning more efficient growth.",
    },
    {
      title: "4-H feeding terms and feed cost calculations",
      publisher: "Alberta Agriculture and Irrigation",
      url: "https://www1.agric.gov.ab.ca/$department/deptdocs.nsf/all/4h9458",
      usedFor: "Feed conversion as the weight of feed needed for one unit of gain, and the feed cost per unit of gain.",
    },
  ],
  intro: [
    "The feed conversion ratio (FCR) tells you how much feed animals need to put on one unit of live weight. An FCR of 2 means 2 kg of feed for every kilogram gained, or 2 lb per pound: the unit cancels as long as feed and weight use the same one. A lower FCR means the feed is turned into growth more efficiently.",
    "Enter the feed used over a period and the group's total live weight at the start and end. If some animals died or were removed, add their weight to get the mortality-adjusted FCR, which does not count their feed as wasted. With a feed price and a head count you also get the feed cost per unit of gain and the gain per animal.",
  ],
  howToUse: [
    "Choose kilograms or pounds and use that unit for the feed and all the weights.",
    "Enter the total feed consumed over the period and the group's combined live weight at the start and at the end.",
    "If animals died or were removed during the period, enter their combined weight to get the mortality-adjusted FCR.",
    "Optionally enter the feed price per kg or lb and the number of animals.",
  ],
  formulas: [
    { title: "Live-weight gain", expression: "gain = final weight − initial weight + weight of animals removed", explanation: "Leave the removed weight empty for the simple gain of the animals still present." },
    { title: "Feed conversion ratio", expression: "FCR = feed consumed ÷ live-weight gain", explanation: "Feed and weights use the same unit, so the ratio has no unit." },
    { title: "Feed efficiency", expression: "feed efficiency = gain ÷ feed × 100%", explanation: "The inverse of the FCR, shown as a percentage." },
    { title: "Feed cost per unit of gain", expression: "cost per kg (or lb) of gain = feed × price ÷ gain = FCR × price", explanation: "The feed cost of each unit of live weight produced." },
  ],
  examples: [
    {
      title: "A group of pigs over a growing period",
      inputs: { unit: "kg", feed: 4200, initial: 900, final: 2850, removed: null, currency: "USD", price: null, head: null },
      steps: ["Gain: 2,850 − 900 = 1,950 kg.", "FCR: 4,200 ÷ 1,950 ≈ 2.15.", "Feed efficiency: 1,950 ÷ 4,200 ≈ 46.4%."],
      expectedPrimary: 2.1538461538461537,
    },
    {
      title: "A broiler flock with losses, priced feed",
      inputs: { unit: "kg", feed: 5300, initial: 1080, final: 4510, removed: 160, currency: "USD", price: 0.21, head: 120 },
      steps: [
        "Gain including removed birds: 4,510 − 1,080 + 160 = 3,590 kg.",
        "Mortality-adjusted FCR: 5,300 ÷ 3,590 ≈ 1.48 (without the removed birds: 5,300 ÷ 3,430 ≈ 1.55).",
        "Feed cost per kg of gain: 5,300 × $0.21 ÷ 3,590 ≈ $0.31.",
      ],
      expectedPrimary: 1.4763231197771587,
    },
    {
      title: "Lambs weighed in pounds",
      inputs: { unit: "lb", feed: 380, initial: 410, final: 612, removed: null, currency: "USD", price: null, head: null },
      steps: ["Gain: 612 − 410 = 202 lb.", "FCR: 380 ÷ 202 ≈ 1.88 lb of feed per lb of gain."],
      expectedPrimary: 1.881188118811881,
    },
  ],
  assumptions: [
    "Feed and all weights are in the same unit, and the feed figure is what the animals actually ate (or the feed delivered, minus what is left over or wasted, if that is how you record it).",
    "The weights are total live weights of the group. Dressed or carcass weights give a different ratio.",
    "The mortality-adjusted FCR adds the weight of animals that died or were removed to the gain. Some producers record this differently, for example with the weight at the start or by excluding culls, so check the method before comparing figures.",
    "No benchmark values are given, because typical FCRs differ greatly between species, ages, breeds, diets and recording methods.",
  ],
  faqs: [
    { question: "Is a lower or higher FCR better?", answer: "Lower. An FCR of 1.5 means 1.5 units of feed per unit of gain, while 2.0 means 2 units. Feed efficiency, the inverse, works the other way: higher is better." },
    { question: "Why add the weight of animals that died?", answer: "Those animals ate feed and grew before they died or were removed. Leaving their weight out makes the feed look less efficient than it was, which mixes mortality losses into the FCR. Showing both figures keeps the two effects apart." },
    { question: "Does the unit matter?", answer: "No, as long as feed and weights use the same one. The FCR is a ratio, so 2.15 kg/kg is the same as 2.15 lb/lb. Only the feed cost per unit of gain depends on the unit, because the price is per kg or per lb." },
  ],
  related: ["percentage-calculator", "unit-price-calculator", "ratio-calculator"],
  updated: "2026-10-28",
  engine: feedConversionRatioEngine,
  text,
  makeEngine: makeFeedConversionRatioEngine,
  translations,
});
