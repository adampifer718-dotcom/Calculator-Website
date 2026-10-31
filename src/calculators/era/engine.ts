import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type EraText } from "./text/en";

export type EraValues = {
  earnedRuns: number;
  innings: number;
  outs: string;
  gameLength: string;
  hits: number | null;
  walks: number | null;
  strikeouts: number | null;
};

const OUTS = ["0", "1", "2"] as const;
const LENGTHS = ["9", "7"] as const;

/** Innings pitched as a number: whole innings plus outs ÷ 3. */
export function inningsPitched(whole: number, outs: number): number {
  return whole + outs / 3;
}

/** ERA = earned runs × innings per game ÷ innings pitched. */
export function earnedRunAverage(earnedRuns: number, innings: number, gameLength = 9): number {
  return (earnedRuns * gameLength) / innings;
}

/** WHIP = (walks + hits) ÷ innings pitched. */
export function whip(walks: number, hits: number, innings: number): number {
  return (walks + hits) / innings;
}

export function makeEraEngine(ctx: EngineContext<EraText>) {
  const t = ctx.text;
  const count = { min: 0, integer: true, max: 100000 } as const;
  return defineEngine<EraValues>({
    locale: ctx.locale,
    fields: [
      { id: "earnedRuns", type: "number", label: t.earnedRuns, help: t.earnedRunsHelp, defaultValue: 3, ...count },
      { id: "innings", type: "number", label: t.innings, help: t.inningsHelp, defaultValue: 6, ...count },
      { id: "outs", type: "select", label: t.outs, options: OUTS.map((value) => ({ value, label: t.outsOptions[value] })), defaultValue: "2", display: "segmented" },
      { id: "gameLength", type: "select", label: t.gameLength, help: t.gameLengthHelp, options: LENGTHS.map((value) => ({ value, label: t.gameLengths[value] })), defaultValue: "9" },
      { id: "hits", type: "number", label: t.hits, defaultValue: 7, optional: true, ...count },
      { id: "walks", type: "number", label: t.walks, help: t.walksHelp, defaultValue: 2, optional: true, ...count },
      { id: "strikeouts", type: "number", label: t.strikeouts, defaultValue: 8, optional: true, ...count },
    ],
    validate: ({ innings, outs }): FieldErrors => (innings === 0 && outs === "0" ? { innings: t.errors.noInnings } : {}),
    compute: ({ earnedRuns, innings, outs, gameLength, hits, walks, strikeouts }) => {
      const extraOuts = Number(outs) || 0;
      const length = gameLength === "7" ? 7 : 9;
      const ip = inningsPitched(innings, extraOuts);
      const era = earnedRunAverage(earnedRuns, ip, length);
      const notation = fill(t.notation, { whole: ctx.fmt.number(innings, 0), outs: ctx.fmt.number(extraOuts, 0) });
      const secondary = [
        { label: t.inningsNotation, value: { kind: "text" as const, text: notation } },
        { label: t.inningsDecimal, value: { kind: "number" as const, value: ip, decimals: 3 } },
        { label: t.totalOuts, value: { kind: "number" as const, value: innings * 3 + extraOuts, decimals: 0 } },
      ];
      const notes = [t.notes.notation];
      if (hits !== null && walks !== null) secondary.push({ label: t.whip, value: { kind: "number", value: whip(walks, hits, ip), decimals: 2 } });
      else notes.push(t.notes.whip);
      if (strikeouts !== null) secondary.push({ label: t.k9, value: { kind: "number", value: (strikeouts * 9) / ip, decimals: 2 } });
      if (walks !== null) secondary.push({ label: t.bb9, value: { kind: "number", value: (walks * 9) / ip, decimals: 2 } });
      if (strikeouts !== null && walks !== null && walks > 0) secondary.push({ label: t.kbb, value: { kind: "number", value: strikeouts / walks, decimals: 2 } });
      if (strikeouts !== null || walks !== null) notes.push(t.notes.perNine);
      return {
        primary: {
          label: t.era,
          value: { kind: "number", value: era, decimals: 2 },
          caption: fill(t.caption, { er: ctx.fmt.number(earnedRuns, 0), length: ctx.fmt.number(length, 0), ip: ctx.fmt.number(ip, 3), notation }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const eraEngine = makeEraEngine(englishContext(en));
