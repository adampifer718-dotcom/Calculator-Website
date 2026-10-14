import { defineEngine } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";
import { mean, median, modes, parseNumberList, sum } from "@/lib/math/data";

export type CentralValues = { data: string };

const numbers = (text: string) => {
  const parsed = parseNumberList(text);
  return parsed.ok ? parsed.values : [];
};

export const meanMedianModeEngine = defineEngine<CentralValues>({
  fields: [
    {
      id: "data",
      type: "text",
      multiline: true,
      label: "Data set",
      help: "Separate numbers with commas, spaces or new lines.",
      defaultValue: "2, 4, 4, 5, 7, 9",
      check: (text) => {
        const parsed = parseNumberList(text);
        return parsed.ok ? undefined : parsed.error;
      },
    },
  ],
  compute: ({ data }) => {
    const values = numbers(data);
    const m = modes(values);
    const f = (x: number) => formatSignificant(x, 10);
    return {
      primary: { label: "Mean (average)", value: { kind: "text", text: f(mean(values)) }, caption: `${values.length.toLocaleString("en-US")} values.` },
      secondary: [
        { label: "Median", value: { kind: "text", text: f(median(values)) } },
        { label: m.length > 1 ? "Modes" : "Mode", value: { kind: "text", text: m.length === 0 ? "No mode (all values occur once)" : m.map(f).join(", ") } },
        { label: "Range", value: { kind: "text", text: f(Math.max(...values) - Math.min(...values)) } },
        { label: "Sum", value: { kind: "text", text: f(sum(values)) } },
      ],
    };
  },
});
