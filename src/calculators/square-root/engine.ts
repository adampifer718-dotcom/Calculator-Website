import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";

export type SquareRootValues = { kind: string; value: number };

export const squareRootEngine = defineEngine<SquareRootValues>({
  fields: [
    {
      id: "kind",
      type: "select",
      label: "Root",
      options: [
        { value: "square", label: "Square root (√x)" },
        { value: "cube", label: "Cube root (∛x)" },
      ],
      defaultValue: "square",
    },
    { id: "value", type: "number", label: "Number (x)", defaultValue: 144 },
  ],
  validate: ({ kind, value }): FieldErrors => (kind === "square" && value < 0 ? { value: "Negative numbers have no real square root." } : {}),
  compute: ({ kind, value }) => {
    const root = kind === "cube" ? Math.cbrt(value) : Math.sqrt(value);
    const power = kind === "cube" ? 3 : 2;
    const perfect = Number.isInteger(value) && Number.isInteger(Math.round(root)) && Math.round(root) ** power === value;
    return {
      primary: { label: kind === "cube" ? "Cube root" : "Square root", value: { kind: "text", text: formatSignificant(root, 12) } },
      secondary: [
        { label: kind === "cube" ? "Perfect cube?" : "Perfect square?", value: { kind: "text", text: perfect ? "Yes" : "No" } },
        { label: kind === "cube" ? "Check: root³" : "Check: root²", value: { kind: "text", text: formatSignificant(root ** power, 12) } },
      ],
      notes: kind === "square" && value > 0 ? [`−${formatSignificant(root, 12)} is also a square root; the calculator shows the principal (positive) root.`] : undefined,
    };
  },
});
