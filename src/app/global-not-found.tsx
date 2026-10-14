import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { title: "Page not found | CalcNest", robots: { index: false } };

/** Fallback for URLs outside every language segment (for example an unknown locale prefix with a file extension). */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-4 font-sans text-center">
        <p className="text-sm font-semibold text-brand-700">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Page not found</h1>
        <p className="mt-3 text-neutral-600">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="focus-ring mt-6 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
          Go to the homepage
        </Link>
      </body>
    </html>
  );
}
