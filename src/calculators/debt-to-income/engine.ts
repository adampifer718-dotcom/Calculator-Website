import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type DebtToIncomeText } from "./text/en";

export type DebtToIncomeValues = {
  currency: string;
  income: number;
  housing: number;
  car: number;
  student: number;
  creditCards: number;
  other: number;
};

export const DEBT_FIELDS = ["housing", "car", "student", "creditCards", "other"] as const;

export interface DebtToIncome {
  totalDebt: number;
  /** All debt payments ÷ gross income × 100. */
  backEnd: number;
  /** Housing payment ÷ gross income × 100. */
  frontEnd: number;
}

export function debtToIncome(income: number, debts: Record<(typeof DEBT_FIELDS)[number], number>): DebtToIncome {
  const totalDebt = DEBT_FIELDS.reduce((sum, key) => sum + debts[key], 0);
  return { totalDebt, backEnd: (totalDebt / income) * 100, frontEnd: (debts.housing / income) * 100 };
}

export function makeDebtToIncomeEngine(ctx: EngineContext<DebtToIncomeText>) {
  const t = ctx.text;
  const debt = (id: (typeof DEBT_FIELDS)[number], defaultValue: number, help?: string) => ({
    id,
    type: "number" as const,
    label: t[id],
    help,
    defaultValue,
    min: 0,
    prefix: "currency",
  });
  return defineEngine<DebtToIncomeValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "income", type: "number", label: t.income, help: t.incomeHelp, defaultValue: 6500, min: 0, minExclusive: true, prefix: "currency" },
      debt("housing", 1750, t.housingHelp),
      debt("car", 380),
      debt("student", 220),
      debt("creditCards", 95, t.creditCardsHelp),
      debt("other", 0, t.otherHelp),
    ],
    compute: ({ currency, income, ...debts }) => {
      const r = debtToIncome(income, debts);
      const notes = [t.notes.lenders, t.notes.reference];
      if (r.totalDebt > income) notes.push(t.notes.overIncome);
      return {
        primary: {
          label: t.backEnd,
          value: { kind: "percent", value: r.backEnd, decimals: 2 },
          caption: fill(t.caption, { debt: ctx.fmt.currency(r.totalDebt, currency), income: ctx.fmt.currency(income, currency) }),
        },
        secondary: [
          { label: t.frontEnd, value: { kind: "percent", value: r.frontEnd, decimals: 2 } },
          { label: t.totalDebt, value: { kind: "currency", amount: r.totalDebt } },
          { label: t.nonHousing, value: { kind: "currency", amount: r.totalDebt - debts.housing } },
          { label: t.remaining, value: { kind: "currency", amount: income - r.totalDebt } },
        ],
        notes,
      };
    },
  });
}

export const debtToIncomeEngine = makeDebtToIncomeEngine(englishContext(en));
