import type { MetadataRoute } from "next";
import { categoryPath } from "@/calculators/categories";
import { CALCULATORS, activeCategories, calculatorPath, calculatorsInCategory } from "@/calculators/registry";
import { absoluteUrl } from "@/lib/site";

const latest = (dates: string[]) => dates.reduce((a, b) => (a > b ? a : b));

export default function sitemap(): MetadataRoute.Sitemap {
  const allUpdated = latest(CALCULATORS.map((c) => c.updated));
  return [
    { url: absoluteUrl("/"), lastModified: allUpdated, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/calculators"), lastModified: allUpdated, changeFrequency: "weekly", priority: 0.9 },
    ...activeCategories().map((category) => ({
      url: absoluteUrl(categoryPath(category.slug)),
      lastModified: latest(calculatorsInCategory(category.slug).map((c) => c.updated)),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...CALCULATORS.map((calculator) => ({
      url: absoluteUrl(calculatorPath(calculator.slug)),
      lastModified: calculator.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/about"), lastModified: allUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
