import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type SalesTaxText } from "./text/en";

export type SalesTaxValues = { mode: string; amount: number; rate: number; currency: string };

export function makeSalesTaxEngine(ctx: EngineContext<SalesTaxText>) {
  const t = ctx.text;
  return defineEngine<SalesTaxValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      {
        id: "mode",
        type: "select",
        label: t.mode,
        options: [
          { value: "add", label: t.modes.add },
          { value: "remove", label: t.modes.remove },
        ],
        defaultValue: "add",
      },
      { id: "amount", type: "number", label: t.amount, help: t.amountHelp, defaultValue: 100, min: 0, prefix: "currency" },
      { id: "rate", type: "number", label: t.rate, defaultValue: 8.25, min: 0, max: 100, suffix: "%" },
      currencyField(ctx),
    ],
    compute: ({ mode, amount, rate }) => {
      if (mode === "remove") {
        const before = amount / (1 + rate / 100);
        return {
          primary: { label: t.beforeTax, value: { kind: "currency", amount: before }, caption: t.beforeTaxCaption },
          secondary: [
            { label: t.taxIncluded, value: { kind: "currency", amount: amount - before } },
            { label: t.total, value: { kind: "currency", amount } },
          ],
        };
      }
      const tax = (amount * rate) / 100;
      return {
        primary: { label: t.total, value: { kind: "currency", amount: amount + tax }, caption: t.totalCaption },
        secondary: [
          { label: t.tax, value: { kind: "currency", amount: tax } },
          { label: t.beforeTax, value: { kind: "currency", amount } },
        ],
      };
    },
  });
}

export const salesTaxEngine = makeSalesTaxEngine(englishContext(en));
