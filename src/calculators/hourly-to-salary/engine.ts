import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import {
  breakdownTable,
  currencyField,
  scheduleFields,
  scheduleFrom,
  scheduleNotes,
  validateScheduleValues,
  type ScheduleValues,
} from "@/calculators/shared/pay";
import { annualHours, convertPay } from "@/lib/math/pay";
import en, { type HourlyToSalaryText } from "./text/en";

export type HourlyToSalaryValues = ScheduleValues & {
  hourlyRate: number;
};

export function makeHourlyToSalaryEngine(ctx: EngineContext<HourlyToSalaryText>) {
  const t = ctx.text;
  return defineEngine<HourlyToSalaryValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "hourlyRate", type: "number", label: t.hourlyRate, help: t.hourlyRateHelp, defaultValue: 25, min: 0, prefix: "currency" },
      ...scheduleFields(ctx),
      currencyField(ctx),
    ],
    validate: (values) => validateScheduleValues(ctx, values),
    compute: (values) => {
      const schedule = scheduleFrom(values);
      const breakdown = convertPay(values.hourlyRate, "hourly", schedule);
      return {
        primary: { label: t.primary, value: { kind: "currency", amount: breakdown.annual }, caption: t.caption },
        secondary: [
          { label: t.monthly, value: { kind: "currency", amount: breakdown.monthly } },
          { label: t.annualHours, value: { kind: "number", value: annualHours(schedule), decimals: 2 } },
        ],
        tables: [breakdownTable(ctx, breakdown, schedule, ["annual", "hourly"])],
        notes: scheduleNotes(ctx, schedule),
      };
    },
  });
}

export const hourlyToSalaryEngine = makeHourlyToSalaryEngine(englishContext(en));
