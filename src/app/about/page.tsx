import type { Metadata } from "next";
import Link from "next/link";
import { CALCULATORS } from "@/calculators/registry";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About & Methodology",
  description: `How ${SITE.name} calculators work: browser-based calculations, visible formulas, stated assumptions and rounding only for display.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "About & methodology", href: "/about" }]} />
      <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">About & methodology</h1>
      <div className="prose-calc mt-6 space-y-8">
        <section>
          <p>
            {SITE.name} publishes {CALCULATORS.length} free calculators. Each one is built on a small, tested calculation module, and each page explains the formula, the
            assumptions and worked examples, so you can check any result yourself.
          </p>
        </section>
        <section aria-labelledby="principles">
          <h2 id="principles" className="mb-3 text-xl font-semibold text-ink-900">
            Principles
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Calculations run in your browser as you type. Your inputs are not sent to our servers.</li>
            <li>The same inputs always give the same result. Results are rounded only for display, never in intermediate steps.</li>
            <li>Default assumptions, such as a 40-hour week or 52 paid weeks, are visible and editable.</li>
            <li>Choosing a currency changes formatting only. We do not convert between currencies.</li>
            <li>Pay calculators show gross pay. They do not estimate taxes, deductions or take-home pay.</li>
          </ul>
        </section>
        <section aria-labelledby="limits">
          <h2 id="limits" className="mb-3 text-xl font-semibold text-ink-900">
            Limitations
          </h2>
          <p>
            Results are for general information and are not financial, tax or legal advice. Real-world figures can differ because of taxes, fees, overtime rules,
            rounding conventions used by employers or institutions, and other factors listed on each calculator page.
          </p>
        </section>
        <p>
          <Link href="/calculators" className="focus-ring rounded font-medium text-brand-700 hover:underline">
            Browse all calculators
          </Link>
        </p>
      </div>
    </div>
  );
}
