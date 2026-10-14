/**
 * Grade point average weighted by credit hours:
 * GPA = Σ(grade points × credits) ÷ Σ credits.
 *
 * Letter grades use the common US 4-point scale (A = 4.0, A− = 3.7, B+ = 3.3 …
 * D− = 0.7, F = 0). Schools differ, most often in whether A+ counts as 4.0 or
 * 4.3, so both are offered; numeric grade points can also be entered directly.
 */

export type GpaScale = "4.0" | "4.3";

const POINTS: Record<string, number> = {
  "A+": 4.0, A: 4.0, "A-": 3.7,
  "B+": 3.3, B: 3.0, "B-": 2.7,
  "C+": 2.3, C: 2.0, "C-": 1.7,
  "D+": 1.3, D: 1.0, "D-": 0.7,
  F: 0, E: 0,
};

export const LETTER_GRADES = Object.keys(POINTS);

/** Grade points for a letter grade on the chosen scale, or undefined. */
export function letterPoints(grade: string, scale: GpaScale): number | undefined {
  const key = grade.trim().toUpperCase().replace(/[−–]/g, "-");
  if (key === "A+" && scale === "4.3") return 4.3;
  return POINTS[key];
}

export interface Course {
  name: string;
  points: number;
  credits: number;
}

export function weightedGpa(courses: readonly Course[]): { gpa: number; credits: number; qualityPoints: number } {
  const credits = courses.reduce((sum, c) => sum + c.credits, 0);
  const qualityPoints = courses.reduce((sum, c) => sum + c.points * c.credits, 0);
  return { gpa: credits > 0 ? qualityPoints / credits : 0, credits, qualityPoints };
}

/** Combines a previous cumulative GPA (over `priorCredits`) with a new term. */
export function cumulativeGpa(priorGpa: number, priorCredits: number, term: { qualityPoints: number; credits: number }): number {
  const credits = priorCredits + term.credits;
  return credits > 0 ? (priorGpa * priorCredits + term.qualityPoints) / credits : 0;
}
