import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type SquareRootText } from "./text/en";

export type SquareRootValues = { kind: string; value: number };

export function makeSquareRootEngine(ctx: EngineContext<SquareRootText>) {
  const t = ctx.text;
  const s = (v: number) => ctx.fmt.significant(v, 12);
  return defineEngine<SquareRootValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "kind",
        type: "select",
        label: t.kind,
        options: [
          { value: "square", label: t.kinds.square },
          { value: "cube", label: t.kinds.cube },
        ],
        defaultValue: "square",
      },
      { id: "value", type: "number", label: t.value, defaultValue: 144 },
    ],
    validate: ({ kind, value }): FieldErrors => (kind === "square" && value < 0 ? { value: t.negative } : {}),
    compute: ({ kind, value }) => {
      const cube = kind === "cube";
      const root = cube ? Math.cbrt(value) : Math.sqrt(value);
      const power = cube ? 3 : 2;
      const perfect = Number.isInteger(value) && Number.isInteger(Math.round(root)) && Math.round(root) ** power === value;
      return {
        primary: { label: cube ? t.cubeRoot : t.squareRoot, value: { kind: "text", text: s(root) } },
        secondary: [
          { label: cube ? t.perfectCube : t.perfectSquare, value: { kind: "text", text: perfect ? t.yes : t.no } },
          { label: cube ? t.checkCube : t.checkSquare, value: { kind: "text", text: s(root ** power) } },
        ],
        notes: !cube && value > 0 ? [fill(t.principalNote, { root: s(root) })] : undefined,
      };
    },
  });
}

export const squareRootEngine = makeSquareRootEngine(englishContext(en));
