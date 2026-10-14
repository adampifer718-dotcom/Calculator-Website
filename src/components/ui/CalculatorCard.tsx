import Link from "next/link";
import { calculatorPath } from "@/calculators/registry";
import type { LocalizedCalculator } from "@/calculators/localize";
import { localizePath } from "@/i18n/paths";
import { CategoryIcon } from "./CategoryIcon";

export function CalculatorCard({ calculator, headingLevel = "h3" }: { calculator: LocalizedCalculator; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={localizePath(calculator.locale, calculatorPath(calculator.def.slug))}
      className="card focus-ring group flex h-full items-start gap-3 p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/30"
    >
      <CategoryIcon category={calculator.def.category} />
      <span className="min-w-0">
        <Heading className="font-semibold text-ink-900 group-hover:text-brand-800">{calculator.content.title}</Heading>
        <span className="mt-1 block text-sm text-neutral-600">{calculator.content.summary}</span>
      </span>
    </Link>
  );
}
