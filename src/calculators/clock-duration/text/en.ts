const text = {
  start: "Start time",
  end: "End time",
  timeHelp: "Type a 24-hour time such as 9:30, 09:30 or 21:30, or a 12-hour time with am/pm such as 9:30 pm or 9 am.",
  breakMinutes: "Unpaid break",
  breakHelp: "Total unpaid break time in minutes, such as a lunch break. Enter 0 for none.",
  rate: "Hourly rate (optional)",
  rateHelp: "Leave empty if you only need the hours.",
  errors: {
    format: "Enter a time such as 9:30, 21:30, 9:30 pm or 9 am.",
    hour24: "The hour must be from 0 to 23.",
    hour12: "With am or pm, the hour must be from 1 to 12.",
    minute: "The minutes must be from 00 to 59.",
    breakTooLong: "The break must be shorter than the time between start and end ({span}).",
  },
  worked: "Time worked",
  caption: "{start} to {end}, minus {break} min break",
  decimalHours: "Decimal hours",
  totalMinutes: "Total minutes",
  span: "Time between start and end",
  pay: "Pay for this shift",
  notes: {
    overnight: "The end time is not after the start time, so the shift is treated as running past midnight into the next day (24 hours added).",
    fullDay: "Start and end are the same, so this is counted as a full 24-hour span.",
    rounding: "Pay is decimal hours × rate, before taxes, overtime premiums or rounding rules your employer may use.",
  },
};
export type ClockDurationText = typeof text;
export default text;
