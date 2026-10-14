const text = {
  power: "Power rating",
  powerHelp: "From the label, e.g. 100 W. Use 1000 W per kW.",
  hours: "Use per day",
  days: "Number of days",
  rate: "Electricity price per kWh",
  cost: "Cost for {days} days",
  energy: "Energy used",
  perDay: "Cost per day",
  perYear: "Cost per year (365 days)",
  note: "Assumes the device draws its rated power whenever it is on. Real use often varies, and standby power is not included.",
};
export type ElectricityCostText = typeof text;
export default text;
