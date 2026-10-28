import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type SolarPanelOutputText } from "./text/en";

export type SolarPanelOutputValues = {
  panelWatts: number;
  panels: number;
  sunHours: number;
  losses: number;
  annualUsage: number | null;
};

export const DAYS_PER_YEAR = 365;
/** A commonly used default for total system losses (the PVWatts default). */
export const DEFAULT_LOSSES = 14;
/** Example value only; the right figure depends on the site. */
export const DEFAULT_SUN_HOURS = 4.5;

/** Daily energy in kWh = rating (W) × panels ÷ 1000 × peak sun hours × (1 − losses). */
export function dailyEnergyKwh(panelWatts: number, panels: number, sunHours: number, lossesPercent: number): number {
  return ((panelWatts * panels) / 1000) * sunHours * (1 - lossesPercent / 100);
}

/** System size in kW needed to produce the annual use: usage ÷ (365 × PSH × (1 − losses)). */
export function systemSizeNeededKw(annualUsageKwh: number, sunHours: number, lossesPercent: number): number {
  return annualUsageKwh / (DAYS_PER_YEAR * sunHours * (1 - lossesPercent / 100));
}

/** Whole panels needed for a system size, rounded up (with a tiny tolerance for floating-point noise). */
export function panelsNeeded(sizeKw: number, panelWatts: number): number {
  return Math.ceil((sizeKw * 1000) / panelWatts - 1e-9);
}

export function makeSolarPanelOutputEngine(ctx: EngineContext<SolarPanelOutputText>) {
  const t = ctx.text;
  return defineEngine<SolarPanelOutputValues>({
    locale: ctx.locale,
    fields: [
      { id: "panelWatts", type: "number", label: t.panelWatts, help: t.panelWattsHelp, defaultValue: 400, min: 0, minExclusive: true, max: 5000, suffix: "W" },
      { id: "panels", type: "number", label: t.panels, defaultValue: 10, min: 1, max: 1e6, integer: true },
      { id: "sunHours", type: "number", label: t.sunHours, help: t.sunHoursHelp, defaultValue: DEFAULT_SUN_HOURS, min: 0, minExclusive: true, max: 12, suffix: ctx.common.units.h },
      { id: "losses", type: "number", label: t.losses, help: t.lossesHelp, defaultValue: DEFAULT_LOSSES, min: 0, max: 100, suffix: "%" },
      { id: "annualUsage", type: "number", label: t.annualUsage, help: t.annualUsageHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, max: 1e9, suffix: "kWh" },
    ],
    validate: ({ losses }): FieldErrors => (losses >= 100 ? { losses: t.errors.losses } : {}),
    compute: ({ panelWatts, panels, sunHours, losses, annualUsage }) => {
      const sizeKw = (panelWatts * panels) / 1000;
      const daily = dailyEnergyKwh(panelWatts, panels, sunHours, losses);
      const annual = daily * DAYS_PER_YEAR;
      const secondary: ResultItem[] = [
        { label: t.daily, value: { kind: "number", value: daily, decimals: 2, suffix: "kWh" } },
        { label: t.monthly, value: { kind: "number", value: annual / 12, decimals: 0, suffix: "kWh" } },
        { label: t.systemSize, value: { kind: "number", value: sizeKw, decimals: 3, suffix: "kW" } },
        { label: t.specificYield, value: { kind: "number", value: annual / sizeKw, decimals: 0, suffix: "kWh/kW" } },
      ];
      const notes: string[] = [];
      if (annualUsage !== null) {
        const needKw = systemSizeNeededKw(annualUsage, sunHours, losses);
        const needPanels = panelsNeeded(needKw, panelWatts);
        secondary.push(
          { label: t.coverage, value: { kind: "percent", value: (annual / annualUsage) * 100, decimals: 1 } },
          { label: t.sizeNeeded, value: { kind: "number", value: needKw, decimals: 2, suffix: "kW" } },
          { label: t.panelsNeeded, value: { kind: "number", value: needPanels, decimals: 0 } },
        );
        if (needPanels > panels) secondary.push({ label: t.panelsMore, value: { kind: "number", value: needPanels - panels, decimals: 0 } });
        else notes.push(t.notes.covered);
        notes.push(fill(t.notes.panelsRounded, { watts: `${ctx.fmt.number(panelWatts, 2)} W` }));
      }
      notes.push(t.notes.estimate);
      return {
        primary: {
          label: t.annual,
          value: { kind: "number", value: annual, decimals: 0, suffix: "kWh" },
          caption: fill(t.caption, {
            size: `${ctx.fmt.number(sizeKw, 3)} kW`,
            hours: ctx.fmt.number(sunHours, 2),
            factor: ctx.fmt.number(1 - losses / 100, 4),
            losses: ctx.fmt.percent(losses, 2),
          }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const solarPanelOutputEngine = makeSolarPanelOutputEngine(englishContext(en));
