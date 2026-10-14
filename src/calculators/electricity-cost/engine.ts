import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type ElectricityValues = { power: number; hours: number; days: number; rate: number; currency: string };

export const electricityCostEngine = defineEngine<ElectricityValues>({
  currencyField: "currency",
  fields: [
    { id: "power", type: "number", label: "Power rating", help: "From the label, e.g. 100 W. Use 1000 W per kW.", defaultValue: 100, min: 0, suffix: "W" },
    { id: "hours", type: "number", label: "Use per day", defaultValue: 5, min: 0, max: 24, suffix: "hours" },
    { id: "days", type: "number", label: "Number of days", defaultValue: 30, min: 0, minExclusive: true, max: 3660, suffix: "days" },
    { id: "rate", type: "number", label: "Electricity price per kWh", defaultValue: 0.15, min: 0, prefix: "currency" },
    currencyField,
  ],
  compute: ({ power, hours, days, rate }) => {
    const dailyKwh = (power * hours) / 1000;
    const kwh = dailyKwh * days;
    return {
      primary: { label: `Cost for ${days} days`, value: { kind: "currency", amount: kwh * rate } },
      secondary: [
        { label: "Energy used", value: { kind: "number", value: kwh, decimals: 3, suffix: "kWh" } },
        { label: "Cost per day", value: { kind: "currency", amount: dailyKwh * rate } },
        { label: "Cost per year (365 days)", value: { kind: "currency", amount: dailyKwh * 365 * rate } },
      ],
      notes: ["Assumes the device draws its rated power whenever it is on. Real use often varies, and standby power is not included."],
    };
  },
});
