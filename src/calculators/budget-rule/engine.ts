import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type BudgetRuleText } from "./text/en";

export type BudgetRuleValues = {
  currency: string;
  income: number;
  rule: string;
  needsPct: number | null;
  wantsPct: number | null;
  savingsPct: number | null;
};

export const RULES = ["50-30-20", "70-20-10", "80-20", "custom"] as const;
export type Rule = (typeof RULES)[number];
export type Bucket = keyof BudgetRuleText["buckets"];

/** Bucket shares in percent for each fixed rule. */
export const RULE_SPLITS: Record<Exclude<Rule, "custom">, readonly { bucket: Bucket; percent: number }[]> = {
  "50-30-20": [
    { bucket: "needs", percent: 50 },
    { bucket: "wants", percent: 30 },
    { bucket: "savings", percent: 20 },
  ],
  "70-20-10": [
    { bucket: "spending", percent: 70 },
    { bucket: "savingsOnly", percent: 20 },
    { bucket: "extra", percent: 10 },
  ],
  "80-20": [
    { bucket: "spending", percent: 80 },
    { bucket: "savingsOnly", percent: 20 },
  ],
};

export function splitFor(rule: string, custom: { needs: number; wants: number; savings: number }): { bucket: Bucket; percent: number }[] {
  if (rule in RULE_SPLITS) return [...RULE_SPLITS[rule as Exclude<Rule, "custom">]];
  return [
    { bucket: "needs", percent: custom.needs },
    { bucket: "wants", percent: custom.wants },
    { bucket: "savings", percent: custom.savings },
  ];
}

export function makeBudgetRuleEngine(ctx: EngineContext<BudgetRuleText>) {
  const t = ctx.text;
  const custom = { field: "rule", oneOf: ["custom"] } as const;
  const pct = (id: "needsPct" | "wantsPct" | "savingsPct", defaultValue: number) => ({
    id,
    type: "number" as const,
    label: t[id],
    help: t.customHelp,
    defaultValue,
    min: 0,
    max: 100,
    suffix: "%",
    visibleWhen: custom,
  });
  return defineEngine<BudgetRuleValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "income", type: "number", label: t.income, help: t.incomeHelp, defaultValue: 4200, min: 0, minExclusive: true, prefix: "currency" },
      { id: "rule", type: "select", label: t.rule, options: RULES.map((value) => ({ value, label: t.rules[value] })), defaultValue: "50-30-20" },
      pct("needsPct", 60),
      pct("wantsPct", 25),
      pct("savingsPct", 15),
    ],
    validate: ({ rule, needsPct, wantsPct, savingsPct }): FieldErrors => {
      if (rule !== "custom") return {};
      const sum = (needsPct ?? 0) + (wantsPct ?? 0) + (savingsPct ?? 0);
      return Math.abs(sum - 100) > 1e-9 ? { savingsPct: fill(t.sumError, { sum: ctx.fmt.percent(sum, 4) }) } : {};
    },
    compute: ({ currency, income, rule, needsPct, wantsPct, savingsPct }) => {
      const split = splitFor(rule, { needs: needsPct ?? 0, wants: wantsPct ?? 0, savings: savingsPct ?? 0 });
      const first = split[0];
      const ruleName = t.ruleNames[(RULES as readonly string[]).includes(rule) ? (rule as Rule) : "custom"];
      return {
        primary: {
          label: t.buckets[first.bucket],
          value: { kind: "currency", amount: (income * first.percent) / 100 },
          caption: fill(t.primaryCaption, { percent: ctx.fmt.percent(first.percent, 4), income: ctx.fmt.currency(income, currency), rule: ruleName }),
        },
        secondary: [
          ...split.slice(1).map((s) => ({ label: t.buckets[s.bucket], value: { kind: "currency" as const, amount: (income * s.percent) / 100 } })),
          { label: t.yearlyIncome, value: { kind: "currency", amount: income * 12 } },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableColumns.bucket, t.tableColumns.share, t.tableColumns.monthly, t.tableColumns.yearly],
            rows: split.map((s) => ({
              label: t.buckets[s.bucket],
              cells: [
                { kind: "percent" as const, value: s.percent, decimals: 2 },
                { kind: "currency" as const, amount: (income * s.percent) / 100 },
                { kind: "currency" as const, amount: (income * s.percent * 12) / 100 },
              ],
            })),
          },
        ],
        notes: [t.notes.thumb, t.notes.needs],
      };
    },
  });
}

export const budgetRuleEngine = makeBudgetRuleEngine(englishContext(en));
