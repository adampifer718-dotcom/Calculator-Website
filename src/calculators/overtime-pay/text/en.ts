const text = {
  rate: "Regular hourly rate",
  rateHelp: "The straight-time rate for one hour of work, before any overtime premium.",
  hours: "Total hours worked in the week",
  threshold: "Regular-hours threshold",
  thresholdHelp: "Hours paid at the regular rate before overtime starts. Under the US federal rule this is 40 hours in a workweek.",
  multiplier: "Overtime multiplier",
  multiplierHelp: "1.5 is time and a half.",
  doubleHours: "Double-time hours (optional)",
  doubleHoursHelp: "Hours paid at the higher double-time rate. They are part of the overtime hours, not added on top. Leave empty or 0 if none.",
  doubleMultiplier: "Double-time multiplier",
  errors: {
    doubleExceeds: "Double-time hours cannot be more than the overtime hours ({overtime} h).",
  },
  grossPay: "Total gross pay",
  caption: "{hours} h at {rate} an hour, with overtime after {threshold} h at {multiplier}× the regular rate.",
  regularPay: "Regular pay",
  overtimePay: "Overtime pay",
  doublePay: "Double-time pay",
  regularHours: "Regular hours",
  overtimeHours: "Overtime hours (including double time)",
  overtimeRate: "Overtime hourly rate",
  doubleRate: "Double-time hourly rate",
  effectiveRate: "Effective hourly rate",
  notes: {
    noOvertime: "The hours worked do not exceed the threshold, so no overtime is due.",
    gross: "Amounts are gross pay before taxes and deductions.",
    rules: "Overtime rules depend on the country, state and employment contract; some places also require daily overtime.",
  },
};
export type OvertimePayText = typeof text;
export default text;
