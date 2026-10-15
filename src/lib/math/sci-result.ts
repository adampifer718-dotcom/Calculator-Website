import type { ResultValue } from "@/calculators/framework/types";
import type { Formatter } from "@/lib/format";

/**
 * A result value shown with about `sig` significant digits. Ordinary magnitudes
 * stay numeric (so they round in the locale's format); very large or very small
 * values switch to "1.23 × 10⁻⁸" text so they never display as 0.
 */
export function sciNumber(fmt: Formatter, value: number, suffix?: string, sig = 7): ResultValue {
  // Non-finite values stay numeric so the framework's finiteness check rejects them.
  if (!Number.isFinite(value)) return { kind: "number", value };
  const abs = Math.abs(value);
  if (value === 0 || (abs >= 1e-6 && abs < 1e15)) {
    const decimals = value === 0 ? 0 : Math.min(20, Math.max(0, sig - 1 - Math.floor(Math.log10(abs))));
    return suffix ? { kind: "number", value, decimals, suffix } : { kind: "number", value, decimals };
  }
  const text = fmt.significant(value, sig);
  return { kind: "text", text: suffix ? `${text} ${suffix}` : text };
}
