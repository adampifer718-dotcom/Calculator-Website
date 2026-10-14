/**
 * Structural checks shared by the translation tests and the completeness
 * report: a translation must have exactly the English keys, the same array
 * lengths and the same {placeholders} in every string.
 */

/** Argument names used in a message: "{count, plural, ...}" and "{name}" both yield the name. */
export function placeholders(text: string): string[] {
  const names = new Set<string>();
  for (const match of text.matchAll(/\{\s*(\w+)\s*[,}]/g)) names.add(match[1]);
  return [...names].sort();
}

export interface ShapeOptions {
  /** Array paths (dot notation, indices as "*") whose length may differ from English. */
  flexibleArrays?: readonly string[];
}

/** Differences between an English value and its translation; empty when the shapes match. */
export function compareShape(english: unknown, translated: unknown, path = "", options: ShapeOptions = {}): string[] {
  const here = path || "(root)";
  if (typeof english === "string") {
    if (typeof translated !== "string") return [`${here}: expected a string`];
    if (translated.trim() === "") return [`${here}: empty string`];
    const a = placeholders(english).join(",");
    const b = placeholders(translated).join(",");
    return a === b ? [] : [`${here}: placeholders {${a}} expected, found {${b}}`];
  }
  if (typeof english === "number" || typeof english === "boolean") {
    return translated === english ? [] : [`${here}: must equal ${String(english)}`];
  }
  if (Array.isArray(english)) {
    if (!Array.isArray(translated)) return [`${here}: expected an array`];
    const pattern = path.replace(/\.\d+/g, ".*");
    const flexible = options.flexibleArrays?.includes(pattern) ?? false;
    if (!flexible && translated.length !== english.length) return [`${here}: expected ${english.length} items, found ${translated.length}`];
    if (flexible && translated.length === 0) return [`${here}: empty list`];
    if (flexible) return translated.flatMap((item, index) => compareShape(english[0], item, `${path}.${index}`, options));
    return english.flatMap((item, index) => compareShape(item, translated[index], `${path}.${index}`, options));
  }
  if (english && typeof english === "object") {
    if (!translated || typeof translated !== "object" || Array.isArray(translated)) return [`${here}: expected an object`];
    const en = english as Record<string, unknown>;
    const tr = translated as Record<string, unknown>;
    const errors: string[] = [];
    for (const key of Object.keys(en)) {
      if (!(key in tr)) errors.push(`${path ? `${path}.` : ""}${key}: missing`);
      else errors.push(...compareShape(en[key], tr[key], path ? `${path}.${key}` : key, options));
    }
    for (const key of Object.keys(tr)) if (!(key in en)) errors.push(`${path ? `${path}.` : ""}${key}: not in English`);
    return errors;
  }
  return [];
}

/**
 * Long English sentences copied unchanged into a translation (a sign of an
 * unfinished translation). Formulas, symbols, numbers and short labels such
 * as "ROI" or "BMI" are allowed to match.
 */
export function untranslatedStrings(english: unknown, translated: unknown, path = ""): string[] {
  if (typeof english === "string" && typeof translated === "string") {
    const words = english.match(/[A-Za-z]{3,}/g) ?? [];
    return english === translated && words.length >= 4 ? [`${path}: "${english.slice(0, 60)}"`] : [];
  }
  if (Array.isArray(english) && Array.isArray(translated)) {
    return english.flatMap((item, index) => untranslatedStrings(item, translated[index], `${path}.${index}`));
  }
  if (english && typeof english === "object" && translated && typeof translated === "object") {
    return Object.keys(english).flatMap((key) =>
      untranslatedStrings((english as Record<string, unknown>)[key], (translated as Record<string, unknown>)[key], path ? `${path}.${key}` : key),
    );
  }
  return [];
}
