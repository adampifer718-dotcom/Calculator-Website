const text = {
  invested: "Amount invested",
  investedHelp: "Total cost of the investment.",
  finalValue: "Amount returned",
  finalValueHelp: "Final value or total proceeds, including the original amount.",
  years: "Investment length (optional)",
  yearsHelp: "Add years held to see the annualized ROI.",
  primary: "Return on investment",
  gainCaption: "Total gain relative to the amount invested.",
  lossCaption: "Total loss relative to the amount invested.",
  net: "Net gain or loss",
  annualized: "Annualized ROI",
  addLength: "Add investment length",
  note: "ROI here ignores taxes, fees and the timing of any interim cash flows unless they are included in the amounts.",
};
export type RoiText = typeof text;
export default text;
