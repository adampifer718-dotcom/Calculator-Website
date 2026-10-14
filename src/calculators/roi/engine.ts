import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { annualizedRoiPercent, netReturn, roiPercent } from "@/lib/math/roi";

export type RoiValues = {
  invested: number;
  finalValue: number;
  years: number | null;
  currency: string;
};

export const roiEngine = defineEngine<RoiValues>({
  currencyField: "currency",
  fields: [
    { id: "invested", type: "number", label: "Amount invested", help: "Total cost of the investment.", defaultValue: 10000, min: 0, minExclusive: true, prefix: "currency" },
    { id: "finalValue", type: "number", label: "Amount returned", help: "Final value or total proceeds, including the original amount.", defaultValue: 12500, min: 0, prefix: "currency" },
    { id: "years", type: "number", label: "Investment length (optional)", help: "Add years held to see the annualized ROI.", defaultValue: 3, optional: true, min: 0, minExclusive: true, max: 100, suffix: "years" },
    currencyField,
  ],
  compute: ({ invested, finalValue, years }) => {
    const roi = roiPercent(invested, finalValue) ?? Number.NaN;
    const annualized = years === null ? null : annualizedRoiPercent(invested, finalValue, years);
    return {
      primary: {
        label: "Return on investment",
        value: { kind: "percent", value: roi, decimals: 2, signed: true },
        caption: roi >= 0 ? "Total gain relative to the amount invested." : "Total loss relative to the amount invested.",
      },
      secondary: [
        { label: "Net gain or loss", value: { kind: "currency", amount: netReturn(invested, finalValue), signed: true } },
        annualized === null
          ? { label: "Annualized ROI", value: { kind: "text", text: "Add investment length" } }
          : { label: "Annualized ROI", value: { kind: "percent", value: annualized, decimals: 2, signed: true } },
      ],
      notes: [
        "ROI here ignores taxes, fees and the timing of any interim cash flows unless they are included in the amounts.",
      ],
    };
  },
});
