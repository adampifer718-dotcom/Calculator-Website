import Link from "next/link";
import { popularCalculators, calculatorPath } from "@/calculators/registry";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Page not found</h1>
      <p className="mt-3 text-neutral-600">The page you are looking for does not exist or has moved.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/calculators" className="focus-ring rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
          Browse all calculators
        </Link>
        <Link href="/" className="focus-ring rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-neutral-50">
          Go home
        </Link>
      </div>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {popularCalculators(5).map((c) => (
          <li key={c.slug}>
            <Link href={calculatorPath(c.slug)} className="focus-ring rounded text-brand-700 hover:underline">
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
