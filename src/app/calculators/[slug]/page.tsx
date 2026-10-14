import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CALCULATORS, calculatorPath, getCalculator } from "@/calculators/registry";
import { CalculatorPage } from "@/components/calculator/CalculatorPage";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return CALCULATORS.map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({ params }: PageProps<"/calculators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) return {};
  const path = calculatorPath(calculator.slug);
  return pageMetadata({ title: calculator.metaTitle, description: calculator.metaDescription, path });
}

export default async function Page({ params }: PageProps<"/calculators/[slug]">) {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) notFound();
  return <CalculatorPage calculator={calculator} />;
}
