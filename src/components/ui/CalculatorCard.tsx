import Link from "next/link";
import { calculatorPath } from "@/calculators/registry";
import type { LocalizedCalculator } from "@/calculators/localize";
import { localizePath } from "@/i18n/paths";
import { CategoryIcon } from "./CategoryIcon";
import { ArrowIcon } from "./Icons";

export function CalculatorCard({ calculator, headingLevel = "h3" }: { calculator: LocalizedCalculator; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={localizePath(calculator.locale, calculatorPath(calculator.def.slug))}
      className="card card-link focus-ring group flex h-full items-start gap-4 p-5"
    >
      <CategoryIcon category={calculator.def.category} slug={calculator.def.slug} size="lg" />
      <span className="min-w-0 flex-1">
        <Heading className="font-bold text-ink-900 group-hover:text-brand-700">{calculator.content.title}</Heading>
        <span className="mt-1 block text-sm leading-relaxed text-neutral-600">{calculator.content.summary}</span>
      </span>
      <ArrowIcon className="mt-1 size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600 rtl:group-hover:-translate-x-0.5" />
    </Link>
  );
}
