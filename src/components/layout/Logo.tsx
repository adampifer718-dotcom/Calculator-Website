import { SITE } from "@/lib/site";

/** Brand mark: a clock dial (hourly) on a peach tile, with a coral hand rising like a salary chart. */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#EEB49F" />
      <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" fill="none" stroke="#fff" strokeOpacity="0.35" />
      <circle cx="18" cy="18" r="10.5" fill="#FAF7F3" stroke="#22395C" strokeWidth="2.4" />
      <path d="M18 11.5V18" stroke="#22395C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M18 18l5.2-4.2" stroke="#C2654C" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="18" cy="18" r="1.9" fill="#22395C" />
      <path d="M25.6 11.4l1.6-1.6M10.4 11.4 8.8 9.8" stroke="#22395C" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Text wordmark "HourlyToSalaryCalculator.net". Always left-to-right, also on
 * Urdu and Arabic pages. Below the `sm` breakpoint it stacks on two lines so
 * it fits a 320px phone next to the menu and language buttons.
 */
export function Wordmark({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const strong = tone === "light" ? "text-white" : "text-ink-900";
  const soft = tone === "light" ? "text-brand-100" : "text-neutral-600";
  const tld = tone === "light" ? "text-accent-300" : "text-accent-700";
  return (
    <span dir="ltr" lang="en" className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <LogoMark className="size-8 sm:size-9" />
      <span className="sr-only">{SITE.name}</span>
      <span aria-hidden="true" className="flex flex-col leading-none tracking-tight sm:flex-row sm:items-baseline">
        <span className={`text-[15px] font-extrabold sm:text-lg ${strong}`}>HourlyToSalary</span>
        <span className={`mt-0.5 text-[12px] font-semibold sm:mt-0 sm:text-lg sm:font-medium ${soft}`}>
          Calculator<span className={`font-bold ${tld}`}>.net</span>
        </span>
      </span>
    </span>
  );
}
