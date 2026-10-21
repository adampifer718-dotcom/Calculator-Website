import { describe, expect, it } from "vitest";
import { compareShape, untranslatedStrings } from "@/i18n/translation-check";
import { content as ar } from "./content/ar";
import { content as de } from "./content/de";
import { englishContent } from "./content/en";
import { content as es } from "./content/es";
import { content as fr } from "./content/fr";
import { content as itContent } from "./content/it";
import { content as nl } from "./content/nl";
import { content as pt } from "./content/pt";
import { content as ur } from "./content/ur";
import { compatible, compatibleUnits, convert, findUnitSpec, paramsWithDefaults } from "./engine";
import { ALL_CONVERTERS, getSpec, isLinear } from "./specs";
import type { ConverterContent, LinearSpec } from "./types";

const linear = ALL_CONVERTERS.filter(isLinear);
const own = ALL_CONVERTERS.filter((c) => !c.calculatorSlug);
const unique = (values: string[]) => new Set(values).size === values.length;

function close(actual: number, expected: number, rel = 1e-12) {
  if (expected === 0) return Math.abs(actual) <= rel;
  return Math.abs(actual - expected) <= Math.abs(expected) * rel;
}

/** A sample value valid in the given unit (above its minimum). */
function sample(spec: LinearSpec, unitId: string): number {
  const unit = findUnitSpec(spec, unitId)!;
  if (unit.min !== undefined) return unit.min + 12.345;
  return 12.345;
}

describe("converter registry", () => {
  it("has unique ids and slugs", () => {
    expect(unique(ALL_CONVERTERS.map((c) => c.id))).toBe(true);
    expect(unique(ALL_CONVERTERS.map((c) => c.slug))).toBe(true);
    for (const c of ALL_CONVERTERS) expect(c.slug, c.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("links only to existing converters", () => {
    for (const c of ALL_CONVERTERS) {
      for (const id of c.related) {
        expect(getSpec(id), `${c.id} → ${id}`).toBeDefined();
        expect(id).not.toBe(c.id);
      }
    }
  });
});

describe.each(linear.map((c) => [c.id, c] as const))("%s", (_id, spec) => {
  it("has a well-formed unit table", () => {
    expect(unique(spec.units.map((u) => u.id))).toBe(true);
    expect(findUnitSpec(spec, spec.baseUnit)).toBeDefined();
    for (const unit of spec.units) {
      if (unit.toBase || unit.fromBase) {
        expect(Boolean(unit.toBase && unit.fromBase), `${unit.id} needs both toBase and fromBase`).toBe(true);
      } else {
        expect(Number.isFinite(unit.factor) && unit.factor! > 0, unit.id).toBe(true);
      }
    }
    const base = findUnitSpec(spec, spec.baseUnit)!;
    if (!base.toBase) expect(base.factor).toBe(1);
  });

  it("has valid defaults and popular pairs", () => {
    const from = findUnitSpec(spec, spec.defaultFrom);
    const to = findUnitSpec(spec, spec.defaultTo);
    expect(from && to && compatible(spec, from, to)).toBe(true);
    expect(convert(spec, spec.defaultValue, spec.defaultFrom, spec.defaultTo).ok).toBe(true);
    expect(spec.popularPairs.length).toBeGreaterThanOrEqual(3);
    for (const [a, b] of spec.popularPairs) {
      const ua = findUnitSpec(spec, a);
      const ub = findUnitSpec(spec, b);
      expect(ua && ub && compatible(spec, ua, ub), `${a}→${b}`).toBe(true);
      expect(a).not.toBe(b);
    }
  });

  it("matches independently computed known values", () => {
    expect(spec.known.length).toBeGreaterThanOrEqual(spec.calculatorSlug ? 2 : 4);
    for (const k of spec.known) {
      const result = convert(spec, k.value, k.from, k.to, k.params);
      expect(result.ok, `${k.value} ${k.from}→${k.to}`).toBe(true);
      if (result.ok) expect(close(result.value, k.expected, k.tolerance ?? 1e-12), `${k.value} ${k.from}→${k.to}: ${result.value} vs ${k.expected}`).toBe(true);
    }
  });

  it("round-trips every unit through every compatible unit", () => {
    const params = paramsWithDefaults(spec);
    for (const a of spec.units) {
      for (const b of compatibleUnits(spec, a.id)) {
        const v = sample(spec, a.id);
        const there = convert(spec, v, a.id, b.id, params);
        expect(there.ok, `${a.id}→${b.id}`).toBe(true);
        if (!there.ok) continue;
        const back = convert(spec, there.value, b.id, a.id, params);
        expect(back.ok, `${b.id}→${a.id}`).toBe(true);
        if (back.ok) expect(close(back.value, v, 1e-9), `${a.id}→${b.id}→${a.id}: ${back.value} vs ${v}`).toBe(true);
      }
    }
  });

  it("never converts between different dimensions", () => {
    for (const a of spec.units) {
      for (const b of spec.units) {
        if (!compatible(spec, a, b)) expect(convert(spec, 1, a.id, b.id)).toEqual({ ok: false, error: "incompatible" });
      }
    }
  });

  it("rejects values below the unit's minimum and non-numbers", () => {
    expect(convert(spec, Number.NaN, spec.defaultFrom, spec.defaultTo).ok).toBe(false);
    const from = findUnitSpec(spec, spec.defaultFrom)!;
    if (from.min !== undefined) expect(convert(spec, from.min - 1, from.id, spec.defaultTo).ok).toBe(false);
    else if (!spec.allowNegative) expect(convert(spec, -1, from.id, spec.defaultTo).ok).toBe(false);
  });
});

describe.each(own.map((c) => [c.id, c] as const))("%s content (English)", (id, spec) => {
  const content = englishContent[id];
  it("exists and is complete", () => {
    expect(content, id).toBeDefined();
    expect(content.metaTitle.length).toBeLessThanOrEqual(60);
    expect(content.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(content.metaDescription.length).toBeLessThanOrEqual(160);
    expect(content.intro.length).toBeGreaterThan(0);
    expect(content.assumptions.length).toBeGreaterThan(0);
    expect(content.faqs.length).toBeGreaterThanOrEqual(3);
    expect(content.sources.length).toBeGreaterThan(0);
    expect(content.sourcesUsedFor.length).toBe(content.sources.length);
    if (isLinear(spec)) {
      expect(Object.keys(content.units).sort()).toEqual(spec.units.map((u) => u.id).sort());
      expect(Object.keys(content.paramLabels ?? {}).sort()).toEqual(
        (spec.params ?? []).flatMap((p) => [p.id, ...(p.presets ?? []).map((preset) => preset.key)]).sort(),
      );
    }
  });
});

describe("unique titles and metadata", () => {
  it("are unique across converters", () => {
    const contents = own.map((c) => englishContent[c.id]).filter(Boolean);
    expect(unique(contents.map((c) => c.title))).toBe(true);
    expect(unique(contents.map((c) => c.metaTitle))).toBe(true);
    expect(unique(contents.map((c) => c.metaDescription))).toBe(true);
  });
});

const TRANSLATED: Record<string, Record<string, ConverterContent>> = { ur, es, fr, de, ar, it: itContent, pt, nl };
const english = (id: string): ConverterContent => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sources, verification, updated, ...rest } = englishContent[id];
  return rest;
};

describe.each(Object.entries(TRANSLATED))("%s translation", (locale, entries) => {
  const ids = Object.keys(entries);

  it("covers only known converters", () => {
    for (const id of ids) expect(englishContent[id], id).toBeDefined();
  });

  it.each(ids.length ? ids : ["(none)"])("%s matches the English shape", (id) => {
    if (id === "(none)") return;
    const tr = entries[id];
    expect(compareShape(english(id), tr, "", { flexibleArrays: ["keywords"] }), id).toEqual([]);
    // Formula expressions are mostly symbols ("rad/s", "rpm") and may legitimately match English.
    const prose = (c: ConverterContent) => ({ ...c, formula: { ...c.formula, expression: "" } });
    expect(untranslatedStrings(prose(english(id)), prose(tr)), id).toEqual([]);
    expect(tr.metaTitle.length, id).toBeLessThanOrEqual(60);
    expect(tr.metaDescription.length, id).toBeGreaterThanOrEqual(70);
    expect(tr.metaDescription.length, id).toBeLessThanOrEqual(160);
    if (locale === "fr") {
      expect(tr.title, id).toMatch(/^Convertisseur /);
      expect(JSON.stringify(tr), id).not.toMatch(/\p{L}'\p{L}/u);
    }
    if (locale === "de") {
      expect(tr.title, id).toMatch(/umrechner\b|Umrechner\b/);
      expect((tr.title.match(/-/g) ?? []).length, id).toBeLessThanOrEqual(2);
    }
  });

  it("has unique titles and metadata", () => {
    const all = Object.values(entries);
    expect(unique(all.map((c) => c.title))).toBe(true);
    expect(unique(all.map((c) => c.metaTitle))).toBe(true);
    expect(unique(all.map((c) => c.metaDescription))).toBe(true);
  });
});
