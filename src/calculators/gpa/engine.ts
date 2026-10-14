import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { cumulativeGpa, letterPoints, weightedGpa, type Course, type GpaScale } from "@/lib/math/gpa";
import { normalizeNumberText } from "@/lib/parse";
import en, { type GpaText } from "./text/en";

export type GpaValues = { scale: string; courses: string; priorGpa: number | null; priorCredits: number | null };

export const MAX_COURSES = 50;

type Parsed = { ok: true; courses: Course[] } | { ok: false; error: string };

/**
 * Reads one course per line: "[name] grade credits". The grade is a letter
 * (A, B+, C−) or grade points (3.3, or 3,3 in es/fr/de); credits come last.
 */
export function parseCourses(text: string, scale: GpaScale, t: GpaText, locale: EngineContext<GpaText>["locale"], maxText: string): Parsed {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return { ok: false, error: t.errors.empty };
  if (lines.length > MAX_COURSES) return { ok: false, error: fill(t.errors.tooMany, { max: maxText }) };
  const courses: Course[] = [];
  for (const [index, line] of lines.entries()) {
    const n = String(index + 1);
    const tokens = line.split(/[\s\t;]+/).filter(Boolean);
    if (tokens.length < 2) return { ok: false, error: fill(t.errors.line, { line: n }) };
    const credits = Number(normalizeNumberText(tokens[tokens.length - 1], locale));
    const gradeText = tokens[tokens.length - 2];
    if (!Number.isFinite(credits)) return { ok: false, error: fill(t.errors.line, { line: n }) };
    if (credits <= 0 || credits > 100) return { ok: false, error: fill(t.errors.credits, { line: n }) };
    const numeric = /^\d/.test(gradeText) ? Number(normalizeNumberText(gradeText, locale)) : undefined;
    const points = numeric !== undefined ? numeric : letterPoints(gradeText, scale);
    if (points === undefined || !Number.isFinite(points) || points < 0 || points > Number(scale)) {
      return { ok: false, error: fill(t.errors.grade, { line: n, grade: gradeText }) };
    }
    courses.push({ name: tokens.slice(0, -2).join(" ") || fill(t.unnamed, { line: n }), points, credits });
  }
  return { ok: true, courses };
}

export function makeGpaEngine(ctx: EngineContext<GpaText>) {
  const t = ctx.text;
  const maxText = ctx.fmt.number(MAX_COURSES, 0);
  const scaleOf = (value: string): GpaScale => (value === "4.3" ? "4.3" : "4.0");
  const parse = (text: string, scale: GpaScale) => parseCourses(text, scale, t, ctx.locale, maxText);
  return defineEngine<GpaValues>({
    locale: ctx.locale,
    fields: [
      { id: "scale", type: "select", label: t.scale, options: (["4.0", "4.3"] as const).map((v) => ({ value: v, label: t.scales[v] })), defaultValue: "4.0", display: "segmented" },
      { id: "courses", type: "text", multiline: true, label: t.courses, help: t.coursesHelp, defaultValue: t.defaultCourses },
      { id: "priorGpa", type: "number", label: t.priorGpa, help: t.priorGpaHelp, defaultValue: null, optional: true, min: 0, max: 4.3 },
      { id: "priorCredits", type: "number", label: t.priorCredits, defaultValue: null, optional: true, min: 0, max: 1000 },
    ],
    validate: (values): FieldErrors => {
      const scale = scaleOf(values.scale);
      const parsed = parse(values.courses, scale);
      const errors: FieldErrors = {};
      if (!parsed.ok) errors.courses = parsed.error;
      if ((values.priorGpa === null) !== (values.priorCredits === null)) errors[values.priorGpa === null ? "priorGpa" : "priorCredits"] = t.errors.priorBoth;
      if (values.priorGpa !== null && values.priorGpa > Number(scale)) errors.priorGpa = fill(t.errors.priorRange, { max: ctx.fmt.number(Number(scale), 1) });
      return errors;
    },
    compute: (values) => {
      const parsed = parse(values.courses, scaleOf(values.scale));
      const courses = parsed.ok ? parsed.courses : [];
      const term = weightedGpa(courses);
      const hasPrior = values.priorGpa !== null && values.priorCredits !== null;
      return {
        primary: {
          label: t.gpa,
          value: { kind: "number", value: term.gpa, decimals: 2 },
          caption: fill(t.caption, { credits: ctx.fmt.number(term.credits, 2), points: ctx.fmt.number(term.qualityPoints, 2) }),
        },
        secondary: [
          ...(hasPrior ? [{ label: t.cumulative, value: { kind: "number" as const, value: cumulativeGpa(values.priorGpa!, values.priorCredits!, term), decimals: 2 } }] : []),
          { label: t.totalCredits, value: { kind: "number", value: term.credits, decimals: 2 } },
          { label: t.qualityPoints, value: { kind: "number", value: term.qualityPoints, decimals: 2 } },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.columns.course, t.columns.points, t.columns.credits, t.columns.quality],
            rows: courses.map((c) => ({
              label: c.name,
              cells: [
                { kind: "number" as const, value: c.points, decimals: 2 },
                { kind: "number" as const, value: c.credits, decimals: 2 },
                { kind: "number" as const, value: c.points * c.credits, decimals: 2 },
              ],
            })),
          },
        ],
        notes: [t.note],
      };
    },
  });
}

export const gpaEngine = makeGpaEngine(englishContext(en));
