import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { foodCostPercentageEngine, makeFoodCostPercentageEngine } from "./engine";

export const foodCostPercentage = defineCalculator({
  id: "food-cost-percentage",
  slug: "food-cost-calculator",
  status: "published",
  title: "Food Cost Percentage Calculator",
  shortTitle: "Food cost percentage",
  category: "food",
  collections: ["food-hospitality", "business"],
  summary: "Find the food cost percentage of a dish or of a whole period from inventory and sales, and the menu price that hits a target food cost.",
  metaTitle: "Food Cost Percentage Calculator – Plate Cost and Menu Price",
  metaDescription: "Calculate food cost percentage for a dish or a period from inventory, purchases and sales, with gross profit and a menu price for your target food cost.",
  keywords: ["food cost calculator", "food cost percentage", "plate cost", "menu price calculator", "restaurant food cost", "cost of goods sold", "COGS food", "menu pricing"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Food Cost Percentage lesson (FCS-L700052)",
      publisher: "Illinois State Board of Education, Career and Technical Education",
      url: "https://www.isbe.net/CTEDocuments/FCS-L700052.pdf",
      usedFor: "Food cost % = portion cost ÷ menu price × 100, and the often-quoted range of 28 to 35 percent of the selling price.",
    },
    {
      title: "The Guide to Restaurant Food Cost",
      publisher: "ChowNow",
      url: "https://get.chownow.com/blog/guide-to-restaurant-food-cost/",
      usedFor: "Period food cost % = (beginning inventory + purchases − ending inventory) ÷ food sales × 100.",
    },
  ],
  intro: [
    "Food cost percentage is the share of a menu price, or of a restaurant's food sales, that goes on the ingredients. It is one of the most watched numbers in food service, because it shows quickly whether prices keep up with what the food costs to buy.",
    "Use the dish mode to check a single menu item from its plate cost and price, and to find the price that gives a target food cost. Use the period mode to work out the food cost for a week or a month from your inventory counts, purchases and food sales.",
  ],
  howToUse: [
    "Choose the currency and whether you are working on one dish or a whole period.",
    "For a dish, enter the plate cost (the cost of every ingredient in one portion) and the menu price before tax.",
    "For a period, enter the value of food in stock at the start and end, the food bought in between, and the food sales for the same period.",
    "Optionally enter a target food cost percentage to get a suggested menu price, or the sales that the period's food cost would need.",
  ],
  formulas: [
    { title: "Food cost % of a dish", expression: "food cost % = plate cost ÷ menu price × 100", explanation: "The menu price is the price before sales tax." },
    { title: "Menu price for a target", expression: "price = plate cost ÷ (target % ÷ 100)", explanation: "For example, a $4.20 plate at a 28% target gives 4.20 ÷ 0.28 = $15.00." },
    { title: "Food cost % of a period", expression: "COGS = beginning inventory + purchases − ending inventory;  food cost % = COGS ÷ food sales × 100", explanation: "COGS is the cost of the food used up during the period, whether it was sold, wasted or given away." },
    { title: "Gross profit and margin", expression: "gross profit = price − food cost;  margin % = gross profit ÷ price × 100", explanation: "This margin only takes away the food cost; labor and overheads still have to be paid from it." },
  ],
  examples: [
    {
      title: "A $14 dish with a $4.20 plate cost, 28% target",
      inputs: { currency: "USD", mode: "dish", plateCost: 4.2, menuPrice: 14, target: 28 },
      steps: ["Food cost = 4.20 ÷ 14 × 100 = 30%", "Gross profit = 14 − 4.20 = $9.80, a 70% margin", "Price for 28% = 4.20 ÷ 0.28 = $15.00"],
      expectedPrimary: 30,
    },
    {
      title: "A €12.50 pasta dish costing €3.85 to make",
      inputs: { currency: "EUR", mode: "dish", plateCost: 3.85, menuPrice: 12.5, target: 30 },
      steps: ["Food cost = 3.85 ÷ 12.50 × 100 = 30.8%", "Price for a 30% target = 3.85 ÷ 0.30 ≈ €12.83"],
      expectedPrimary: 30.8,
    },
    {
      title: "A month from inventory counts",
      inputs: { currency: "USD", mode: "period", beginInventory: 9200, purchases: 14600, endInventory: 8100, sales: 48500, target: 30 },
      steps: [
        "COGS = 9,200 + 14,600 − 8,100 = $15,700",
        "Food cost = 15,700 ÷ 48,500 × 100 ≈ 32.37%",
        "Gross profit on food = 48,500 − 15,700 = $32,800; at 30% the same COGS would need about $52,333 of sales",
      ],
      expectedPrimary: 32.371134020618555,
    },
  ],
  assumptions: [
    "All amounts are in one currency and exclude sales tax. Inventory is valued at cost.",
    "The period mode assumes the inventory counts are taken at the exact start and end of the same period as the sales figure, and that the purchases include only food (not drinks or supplies, unless you want them included).",
    "There is no single right food cost percentage. A range of 28 to 35 percent of the selling price is often quoted, but the right figure depends on the type of restaurant, its prices and its other costs.",
  ],
  faqs: [
    { question: "What is a good food cost percentage?", answer: "Figures of about 28 to 35 percent are often quoted, but there is no universal target. A restaurant with high labor or rent may need a lower food cost, while a place with premium ingredients and fewer staff may run higher." },
    { question: "Why does my period food cost differ from my dish costs?", answer: "The period figure includes everything that left the stock: waste, spoilage, staff meals, over-portioning and theft, as well as food that was sold. Comparing it with the planned dish costs is a good way to find those losses." },
    { question: "Should I include sales tax in the menu price?", answer: "No. Use the price before tax, because sales tax is collected for the government and is not revenue for the business." },
  ],
  related: ["profit-margin-calculator", "recipe-scaler", "break-even-calculator"],
  updated: "2026-10-28",
  engine: foodCostPercentageEngine,
  text,
  makeEngine: makeFoodCostPercentageEngine,
  translations,
});
