import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CALCULATORS, calculatorPath, getCalculator } from "@/calculators/registry";
import { CalculatorPage } from "@/components/calculator/CalculatorPage";

export function generateStaticParams() {
  return CALCULATORS.map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({ params }: PageProps<"/calculators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) return {};
  const path = calculatorPath(calculator.slug);
  return {
    title: calculator.metaTitle,
    description: calculator.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: calculator.metaTitle, description: calculator.metaDescription, url: path, type: "website" },
  };
}

export default async function Page({ params }: PageProps<"/calculators/[slug]">) {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) notFound();
  return <CalculatorPage calculator={calculator} />;
}
