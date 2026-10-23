const text = {
  cost: "Asset cost",
  costHelp: "The purchase price plus costs to get the asset ready for use, such as delivery and installation.",
  salvage: "Salvage value",
  salvageHelp: "What you expect the asset to be worth at the end of its useful life. Use 0 if it will have no value.",
  life: "Useful life",
  method: "Method",
  methods: {
    straightLine: "Straight-line",
    declining200: "Double declining balance (200%)",
    declining150: "150% declining balance",
    sumOfYears: "Sum-of-the-years'-digits",
  },
  errors: {
    salvage: "The salvage value must be less than the asset cost.",
  },
  firstYear: "First-year depreciation",
  caption: "{method}: {cost} cost, {salvage} salvage value, {life}.",
  lifeYears: { zero: "{n} years", one: "{n} year", two: "{n} years", few: "{n} years", many: "{n} years", other: "{n} years" },
  base: "Depreciable amount (cost − salvage)",
  rateStraight: "Rate applied (share of the depreciable amount per year)",
  rateDeclining: "Rate applied to the book value each year",
  rateSumOfYears: "First-year fraction of the depreciable amount",
  total: "Total depreciation over the life",
  finalYear: "Final-year depreciation",
  table: {
    caption: "Depreciation schedule",
    year: "Year",
    depreciation: "Depreciation",
    accumulated: "Accumulated depreciation",
    bookValue: "Book value at year end",
    yearLabel: "Year {n}",
  },
  notes: {
    fullYear: "A full year of depreciation is taken in the first year, whatever the purchase date.",
    declining: "Each year's charge is the rate times the book value at the start of the year, limited so the book value never drops below salvage. Whatever remains is taken in the final year.",
    macrs: "US tax depreciation uses MACRS (IRS Publication 946), which this tool does not compute.",
  },
};
export type DepreciationText = typeof text;
export default text;
