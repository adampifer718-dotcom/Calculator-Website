/** Descriptive statistics for lists of numbers. */

export const MAX_DATA_POINTS = 10000;

export type ListIssue = { code: "empty" } | { code: "tooMany" } | { code: "notNumber"; token: string } | { code: "tooLarge"; token: string };

export type ParsedList = { ok: true; values: number[] } | { ok: false; error: string; issue: ListIssue };

/** Localized message for a list parsing problem, or undefined when the list is valid. */
export function listError(
  parsed: ParsedList,
  messages: { empty: string; tooMany: string; notNumber: string; tooLarge: string },
  maxText: string,
): string | undefined {
  if (parsed.ok) return undefined;
  const { issue } = parsed;
  const vars: Record<string, string> = { max: maxText, token: "token" in issue ? issue.token : "" };
  return messages[issue.code].replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);
}

/** Parses numbers separated by commas, semicolons, spaces or new lines. */
export function parseNumberList(text: string): ParsedList {
  const tokens = text.split(/[\s,;]+/).filter(Boolean);
  if (tokens.length === 0) return { ok: false, error: "Enter at least one number.", issue: { code: "empty" } };
  if (tokens.length > MAX_DATA_POINTS) return { ok: false, error: `Enter at most ${MAX_DATA_POINTS.toLocaleString("en-US")} numbers.`, issue: { code: "tooMany" } };
  const values: number[] = [];
  for (const token of tokens) {
    if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(token))
      return { ok: false, error: `“${token}” is not a number. Separate values with commas, spaces or new lines.`, issue: { code: "notNumber", token } };
    const value = Number(token);
    if (!Number.isFinite(value)) return { ok: false, error: `“${token}” is too large.`, issue: { code: "tooLarge", token } };
    values.push(value);
  }
  return { ok: true, values };
}

export function sum(values: readonly number[]): number {
  // Neumaier summation keeps long lists accurate.
  let total = 0;
  let compensation = 0;
  for (const v of values) {
    const t = total + v;
    compensation += Math.abs(total) >= Math.abs(v) ? total - t + v : v - t + total;
    total = t;
  }
  return total + compensation;
}

export function mean(values: readonly number[]): number {
  return sum(values) / values.length;
}

export function median(values: readonly number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/** All most-frequent values, ascending. Empty when every value occurs once (no mode). */
export function modes(values: readonly number[]): number[] {
  const counts = new Map<number, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  const max = Math.max(...counts.values());
  if (max === 1 && values.length > 1) return [];
  return [...counts.entries()].filter(([, c]) => c === max).map(([v]) => v).sort((a, b) => a - b);
}

/** Variance with a two-pass algorithm. `sample` divides by n − 1, population by n. */
export function variance(values: readonly number[], sample: boolean): number {
  const m = mean(values);
  const squares = sum(values.map((v) => (v - m) ** 2));
  return squares / (sample ? values.length - 1 : values.length);
}
