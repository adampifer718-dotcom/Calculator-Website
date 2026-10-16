import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = { title: "Page not found | HourlyToSalaryCalculator.net", robots: { index: false } };

/** Fallback for URLs outside every language segment (for example an unknown locale prefix with a file extension). */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 font-sans text-center">
        <p className="text-sm font-semibold text-brand-700">404</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.025em] text-ink-900">Page not found</h1>
        <p className="mt-3 text-neutral-600">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="focus-ring btn-primary mt-6 h-11 px-5 text-sm">
          Go to the homepage
        </Link>
      </body>
    </html>
  );
}
