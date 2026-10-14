const text = {
  principal: "Initial deposit",
  rate: "Annual interest rate",
  years: "Time",
  frequency: "Compounding",
  frequencies: { "1": "Annually", "2": "Semi-annually", "4": "Quarterly", "12": "Monthly", "365": "Daily" },
  future: "Future value",
  interest: "Interest earned",
  effective: "Effective annual rate",
  tableCaption: "Balance at the end of each year",
  tableColumns: { year: "Year", balance: "Balance", interest: "Interest to date" },
  note: "Assumes a fixed rate, no further deposits or withdrawals, and no taxes or fees.",
};
export type CompoundInterestText = typeof text;
export default text;
