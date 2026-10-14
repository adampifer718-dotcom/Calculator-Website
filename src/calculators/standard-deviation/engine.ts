import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";
import { mean, parseNumberList, variance } from "@/lib/math/data";

export type DeviationValues = { data: string; kind: string };

const numbers = (text: string) => {
  const parsed = parseNumberList(text);
  return parsed.ok ? parsed.values : [];
};

export const standardDeviationEngine = defineEngine<DeviationValues>({
  fields: [
    {
      id: "data",
      type: "text",
      multiline: true,
      label: "Data set",
      help: "Separate numbers with commas, spaces or new lines.",
      defaultValue: "2, 4, 4, 4, 5, 5, 7, 9",
      check: (text) => {
        const parsed = parseNumberList(text);
        return parsed.ok ? undefined : parsed.error;
      },
    },
    {
      id: "kind",
      type: "select",
      label: "Data is a",
      options: [
        { value: "sample", label: "Sample (divide by n − 1)" },
        { value: "population", label: "Whole population (divide by n)" },
      ],
      defaultValue: "sample",
    },
  ],
  validate: ({ data, kind }): FieldErrors => (kind === "sample" && numbers(data).length < 2 ? { data: "A sample needs at least two values." } : {}),
  compute: ({ data, kind }) => {
    const values = numbers(data);
    const sample = kind !== "population";
    const v = variance(values, sample);
    const sd = Math.sqrt(v);
    const f = (x: number) => formatSignificant(x, 10);
    return {
      primary: { label: sample ? "Sample standard deviation (s)" : "Population standard deviation (σ)", value: { kind: "text", text: f(sd) } },
      secondary: [
        { label: sample ? "Sample variance (s²)" : "Population variance (σ²)", value: { kind: "text", text: f(v) } },
        { label: "Mean", value: { kind: "text", text: f(mean(values)) } },
        { label: "Count (n)", value: { kind: "number", value: values.length } },
        ...(sample ? [{ label: "Standard error of the mean", value: { kind: "text" as const, text: f(sd / Math.sqrt(values.length)) } }] : []),
      ],
    };
  },
});
