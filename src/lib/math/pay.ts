/**
 * Gross pay conversions between pay periods.
 *
 * Every conversion goes through an annualized gross amount:
 * - annual, monthly, semi-monthly and biweekly pay use fixed calendar
 *   period counts (1, 12, 24 and 26 periods per year);
 * - weekly, daily and hourly pay are annualized with the supplied work
 *   schedule (weeks per year, workdays per week and hours per week).
 *
 * No rounding is applied here. Round only when displaying values.
 */

export const PAY_PERIODS = [
  "annual",
  "monthly",
  "semimonthly",
  "biweekly",
  "weekly",
  "daily",
  "hourly",
] as const;

export type PayPeriod = (typeof PAY_PERIODS)[number];

export const PAY_PERIOD_LABELS: Record<PayPeriod, string> = {
  annual: "Annual",
  monthly: "Monthly",
  semimonthly: "Semi-monthly",
  biweekly: "Biweekly",
  weekly: "Weekly",
  daily: "Daily",
  hourly: "Hourly",
};

/** Fixed number of pay periods per year for calendar-based schedules. */
export const FIXED_PERIODS_PER_YEAR = {
  annual: 1,
  monthly: 12,
  semimonthly: 24,
  biweekly: 26,
} as const satisfies Partial<Record<PayPeriod, number>>;

export interface WorkSchedule {
  hoursPerWeek: number;
  daysPerWeek: number;
  weeksPerYear: number;
}

export const DEFAULT_SCHEDULE: WorkSchedule = {
  hoursPerWeek: 40,
  daysPerWeek: 5,
  weeksPerYear: 52,
};

export const SCHEDULE_LIMITS = {
  hoursPerWeek: { min: 0, max: 168 },
  daysPerWeek: { min: 0, max: 7 },
  weeksPerYear: { min: 0, max: 53 },
  hoursPerDay: { max: 24 },
} as const;

export function isPayPeriod(value: unknown): value is PayPeriod {
  return typeof value === "string" && (PAY_PERIODS as readonly string[]).includes(value);
}

/** Number of times a pay period occurs in a year under a work schedule. */
export function periodsPerYear(period: PayPeriod, schedule: WorkSchedule): number {
  switch (period) {
    case "annual":
    case "monthly":
    case "semimonthly":
    case "biweekly":
      return FIXED_PERIODS_PER_YEAR[period];
    case "weekly":
      return schedule.weeksPerYear;
    case "daily":
      return schedule.daysPerWeek * schedule.weeksPerYear;
    case "hourly":
      return schedule.hoursPerWeek * schedule.weeksPerYear;
  }
}

/** Total paid hours per year: hours per week × weeks per year. */
export function annualHours(schedule: WorkSchedule): number {
  return schedule.hoursPerWeek * schedule.weeksPerYear;
}

/** Average paid hours per workday: hours per week ÷ workdays per week. */
export function hoursPerDay(schedule: WorkSchedule): number {
  return schedule.hoursPerWeek / schedule.daysPerWeek;
}

/** Convert an amount paid per `period` to annual gross pay. */
export function annualize(amount: number, period: PayPeriod, schedule: WorkSchedule): number {
  return amount * periodsPerYear(period, schedule);
}

/** Convert annual gross pay to the amount paid per `period`. */
export function fromAnnual(annual: number, period: PayPeriod, schedule: WorkSchedule): number {
  return annual / periodsPerYear(period, schedule);
}

/** Hourly equivalent: annualized gross pay ÷ assumed annual hours. */
export function hourlyEquivalent(amount: number, period: PayPeriod, schedule: WorkSchedule): number {
  return annualize(amount, period, schedule) / annualHours(schedule);
}

export type PayBreakdown = Record<PayPeriod, number>;

/** Equivalent gross pay for every supported period. */
export function convertPay(amount: number, from: PayPeriod, schedule: WorkSchedule): PayBreakdown {
  const annual = annualize(amount, from, schedule);
  const breakdown = {} as PayBreakdown;
  for (const period of PAY_PERIODS) {
    // Keep the original input exact rather than round-tripping it through division.
    breakdown[period] = period === from ? amount : fromAnnual(annual, period, schedule);
  }
  return breakdown;
}

/** Returns validation messages keyed by schedule field, or an empty object when valid. */
export function validateSchedule(schedule: WorkSchedule): Partial<Record<keyof WorkSchedule, string>> {
  const errors: Partial<Record<keyof WorkSchedule, string>> = {};
  const { hoursPerWeek, daysPerWeek, weeksPerYear } = schedule;
  if (!Number.isFinite(hoursPerWeek) || hoursPerWeek <= 0) {
    errors.hoursPerWeek = "Hours per week must be greater than 0.";
  } else if (hoursPerWeek > SCHEDULE_LIMITS.hoursPerWeek.max) {
    errors.hoursPerWeek = "A week has at most 168 hours.";
  }
  if (!Number.isFinite(daysPerWeek) || daysPerWeek <= 0) {
    errors.daysPerWeek = "Workdays per week must be greater than 0.";
  } else if (daysPerWeek > SCHEDULE_LIMITS.daysPerWeek.max) {
    errors.daysPerWeek = "A week has at most 7 days.";
  }
  if (!Number.isFinite(weeksPerYear) || weeksPerYear <= 0) {
    errors.weeksPerYear = "Weeks per year must be greater than 0.";
  } else if (weeksPerYear > SCHEDULE_LIMITS.weeksPerYear.max) {
    errors.weeksPerYear = "Use 53 weeks per year or fewer.";
  }
  if (!errors.hoursPerWeek && !errors.daysPerWeek && hoursPerDay(schedule) > SCHEDULE_LIMITS.hoursPerDay.max) {
    errors.hoursPerWeek = "Hours per week divided by workdays per week cannot exceed 24 hours per day.";
  }
  return errors;
}

/** Hours of work needed to earn `target` at an hourly rate. Null when the rate is not positive. */
export function hoursToEarn(target: number, hourlyRate: number): number | null {
  if (!(hourlyRate > 0)) return null;
  return target / hourlyRate;
}

/** Formats a duration in hours as "1h 15m", rounding to the nearest minute first. */
export function formatHoursMinutes(hours: number): string {
  const totalMinutes = Math.round(hours * 60);
  return `${Math.floor(totalMinutes / 60).toLocaleString("en-US")}h ${totalMinutes % 60}m`;
}

/** The next `count` whole-number hourly rates strictly above `hourlyRate`. */
export function higherHourlyRates(hourlyRate: number, count = 5): number[] {
  const start = Math.floor(hourlyRate) + 1;
  return Array.from({ length: count }, (_, index) => start + index);
}
