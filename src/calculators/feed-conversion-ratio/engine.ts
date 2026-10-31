import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type FeedConversionRatioText } from "./text/en";

/** Live-weight gain: final − initial + the weight of animals that died or were removed. */
export function liveWeightGain(initial: number, final: number, removed = 0): number {
  return final - initial + removed;
}

/** FCR = feed consumed ÷ live-weight gain, in the same mass unit. */
export function feedConversionRatio(feed: number, gain: number): number {
  return feed / gain;
}

const UNITS = ["kg", "lb"] as const;

export type FeedConversionRatioValues = {
  unit: string;
  feed: number | null;
  initial: number | null;
  final: number | null;
  removed: number | null;
  currency: string;
  price: number | null;
  head: number | null;
};

export function makeFeedConversionRatioEngine(ctx: EngineContext<FeedConversionRatioText>) {
  const t = ctx.text;
  const mass = { min: 0, max: 1e9 } as const;
  const gainOf = (v: FeedConversionRatioValues) => liveWeightGain(v.initial ?? 0, v.final ?? 0, v.removed ?? 0);
  return defineEngine<FeedConversionRatioValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "unit", type: "select", label: t.unit, options: UNITS.map((value) => ({ value, label: t.units[value] })), defaultValue: "kg", display: "segmented" },
      { id: "feed", type: "number", label: t.feed, help: t.feedHelp, defaultValue: 4200, min: 0, minExclusive: true, max: 1e9 },
      { id: "initial", type: "number", label: t.initial, help: t.initialHelp, defaultValue: 900, ...mass },
      { id: "final", type: "number", label: t.final, help: t.finalHelp, defaultValue: 2850, ...mass },
      { id: "removed", type: "number", label: t.removed, help: t.removedHelp, defaultValue: null, optional: true, ...mass },
      currencyField(ctx),
      { id: "price", type: "number", label: t.price, help: t.priceHelp, defaultValue: null, optional: true, min: 0, max: 1e6, prefix: "currency" },
      { id: "head", type: "number", label: t.head, help: t.headHelp, defaultValue: null, optional: true, min: 1, max: 1e9, integer: true },
    ],
    validate: (v) => (gainOf(v) <= 0 ? { final: t.errors.noGain } : {}),
    compute: (v) => {
      const unit = v.unit === "lb" ? "lb" : "kg";
      const feed = v.feed ?? 0;
      const gain = gainOf(v);
      const fcr = feedConversionRatio(feed, gain);
      const adjusted = v.removed !== null && v.removed > 0;
      const secondary: ResultItem[] = [];
      const notes: string[] = [];
      if (adjusted) {
        const plainGain = liveWeightGain(v.initial ?? 0, v.final ?? 0);
        secondary.push({
          label: t.unadjusted,
          value: plainGain > 0 ? { kind: "number", value: feedConversionRatio(feed, plainGain), decimals: 2 } : { kind: "text", text: t.unadjustedNone },
        });
      }
      secondary.push({ label: t.efficiency, value: { kind: "percent", value: (gain / feed) * 100, decimals: 1 } });
      secondary.push({ label: t.gain, value: { kind: "number", value: gain, decimals: 2, suffix: unit } });
      if (adjusted) secondary.push({ label: t.gainUnadjusted, value: { kind: "number", value: liveWeightGain(v.initial ?? 0, v.final ?? 0), decimals: 2, suffix: unit } });
      if (v.head !== null) secondary.push({ label: t.gainPerHead, value: { kind: "number", value: gain / v.head, decimals: 3, suffix: unit } });
      if (v.price !== null) {
        secondary.push({ label: t.feedCost, value: { kind: "currency", amount: feed * v.price } });
        secondary.push({ label: fill(t.costPerGain, { unit }), value: { kind: "currency", amount: (feed * v.price) / gain } });
      }
      notes.push(fill(t.notes.meaning, { fcr: ctx.fmt.number(fcr, 2), unit }));
      if (adjusted) notes.push(t.notes.adjusted);
      notes.push(t.notes.general);
      return {
        primary: { label: adjusted ? t.resultAdjusted : t.result, value: { kind: "number", value: fcr, decimals: 2 }, caption: t.caption },
        secondary,
        notes,
      };
    },
  });
}

export const feedConversionRatioEngine = makeFeedConversionRatioEngine(englishContext(en));
