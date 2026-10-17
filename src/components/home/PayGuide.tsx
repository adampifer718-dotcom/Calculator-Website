import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { getFormatter } from "@/lib/format";
import { DEFAULT_SCHEDULE, annualHours, convertPay, hourlyEquivalent } from "@/lib/math/pay";

const hours = annualHours(DEFAULT_SCHEDULE);
const hoursPerDay = DEFAULT_SCHEDULE.hoursPerWeek / DEFAULT_SCHEDULE.daysPerWeek;

export const CHART_SALARIES = [30000, 40000, 50000, 60000, 75000, 100000] as const;

const STEPS = ["currency", "pay", "period", "hours", "weeks"] as const;
const CHART_COLUMNS = ["annual", "hourly", "weekly", "biweekly", "monthly"] as const;

function tools(locale: Locale) {
  const f = getFormatter(locale);
  return { usd: (amount: number, decimals?: number) => f.currency(amount, "USD", "negative", decimals), num: (value: number) => f.number(value) };
}

function SectionIntro({ kicker, id, title, children }: { kicker: string; id: string; title: string; children?: React.ReactNode }) {
  return (
    <>
      <p id={`${id}-kicker`} className="eyebrow text-accent-700">{kicker}</p>
      <h2 id={id} className="mt-2 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {children && <p className="mt-3 max-w-2xl text-neutral-600">{children}</p>}
    </>
  );
}

function FormulaBox({ children }: { children: React.ReactNode }) {
  return (
    <p dir="auto" className="mt-3 overflow-x-auto rounded-2xl bg-brand-50 px-4 py-3 font-mono text-sm font-semibold text-brand-900 ring-1 ring-brand-100">
      {children}
    </p>
  );
}

function Example({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-neutral-600">{children}</p>;
}

/** A calculation line such as "$60,000 ÷ 2,080 = $28.85 per hour", kept left-to-right inside RTL text. */
function Calc({ children }: { children: React.ReactNode }) {
  return (
    <strong className="text-ink-900">
      <bdi dir="ltr">{children}</bdi>
    </strong>
  );
}

/** Compact step list shown beside the homepage pay calculator. */
export async function HowToUse({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "payGuide" });
  return (
    <section aria-labelledby="how-to-use" className="card p-5 sm:p-6">
      <p id="how-to-use-kicker" className="eyebrow text-accent-700">
        {t("stepsKicker")}
      </p>
      <h2 id="how-to-use" className="mt-1.5 text-lg font-extrabold tracking-tight text-ink-900">
        {t("stepsTitle")}
      </h2>
      <ol className="mt-4 space-y-3.5">
        {STEPS.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-400 text-xs font-extrabold text-ink-900">
              {index + 1}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-ink-900">{t(`steps.${step}.title`)}</h3>
              <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">{t(`steps.${step}.body`)}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 rounded-2xl bg-sky/50 px-4 py-3 text-sm font-medium text-ink-800 ring-1 ring-sky">{t("stepsLive")}</p>
    </section>
  );
}

export async function PayFormulas({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "payGuide" });
  const { usd, num } = tools(locale);
  const weekly = 1200;
  const daily = 240;
  const rate = 30;
  const reverse = convertPay(rate, "hourly", DEFAULT_SCHEDULE);
  return (
    <section aria-labelledby="how-to-calculate" className="min-w-0">
      <div>
        <SectionIntro kicker={t("formulasKicker")} id="how-to-calculate" title={t("formulasTitle")}>
          {t("formulasLead")}
        </SectionIntro>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-1">
          <article className="card p-5 sm:p-6">
            <h3 className="font-bold text-ink-900">{t("annualTitle")}</h3>
            <FormulaBox>{t("annualFormula")}</FormulaBox>
            <p className="mt-3 text-sm text-neutral-600">
              {t("annualBody", { hours: num(DEFAULT_SCHEDULE.hoursPerWeek), weeks: num(DEFAULT_SCHEDULE.weeksPerYear), annualHours: num(hours) })}
            </p>
            <FormulaBox>{t("annualShort", { annualHours: num(hours) })}</FormulaBox>
            <Example>
              {t("example")} <Calc>{usd(60000, 0)} ÷ {num(hours)} = </Calc>{" "}
              <strong className="text-ink-900">{t("perHour", { amount: usd(hourlyEquivalent(60000, "annual", DEFAULT_SCHEDULE)) })}</strong>
            </Example>
          </article>
          <article className="card p-5 sm:p-6">
            <h3 className="font-bold text-ink-900">{t("monthlyTitle")}</h3>
            <p className="mt-3 text-sm text-neutral-600">{t("monthlyBody")}</p>
            <FormulaBox>{t("monthlyFormula")}</FormulaBox>
            <Example>
              {t("example")} <Calc>({usd(5000, 0)} × 12) ÷ {num(hours)} = </Calc>{" "}
              <strong className="text-ink-900">{t("perHour", { amount: usd(hourlyEquivalent(5000, "monthly", DEFAULT_SCHEDULE)) })}</strong>
            </Example>
          </article>
          <article className="card p-5 sm:p-6">
            <h3 className="font-bold text-ink-900">{t("weeklyTitle")}</h3>
            <p className="mt-3 text-sm text-neutral-600">{t("weeklyBody")}</p>
            <FormulaBox>{t("weeklyFormula")}</FormulaBox>
            <Example>
              <Calc>
                {usd(weekly, 0)} ÷ {num(DEFAULT_SCHEDULE.hoursPerWeek)} ={" "}
              </Calc>{" "}
              <strong className="text-ink-900">{t("perHour", { amount: usd(hourlyEquivalent(weekly, "weekly", DEFAULT_SCHEDULE)) })}</strong>
            </Example>
            <FormulaBox>{t("dailyFormula")}</FormulaBox>
            <Example>
              <Calc>
                {usd(daily, 0)} ÷ {num(hoursPerDay)} ={" "}
              </Calc>{" "}
              <strong className="text-ink-900">{t("perHour", { amount: usd(hourlyEquivalent(daily, "daily", DEFAULT_SCHEDULE)) })}</strong>
            </Example>
          </article>
          <article className="card p-5 sm:p-6">
            <h3 className="font-bold text-ink-900">{t("reverseTitle")}</h3>
            <p className="mt-3 text-sm text-neutral-600">{t("reverseBody")}</p>
            <FormulaBox>{t("reverseFormula")}</FormulaBox>
            <Example>
              <Calc>
                {usd(rate)} × {num(DEFAULT_SCHEDULE.hoursPerWeek)} × {num(DEFAULT_SCHEDULE.weeksPerYear)} ={" "}
              </Calc>{" "}
              <strong className="text-ink-900">{t("perYear", { amount: usd(reverse.annual, 0) })}</strong>
            </Example>
            <FormulaBox>{t("reverseMonthly")}</FormulaBox>
            <Example>
              <Calc>{usd(reverse.annual, 0)} ÷ 12 = </Calc> <strong className="text-ink-900">{t("perMonth", { amount: usd(reverse.monthly) })}</strong>
            </Example>
          </article>
        </div>
      </div>
    </section>
  );
}

export async function ConversionChart({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "payGuide" });
  const { usd, num } = tools(locale);
  return (
    <section aria-labelledby="conversion-chart" className="min-w-0">
      <div className="xl:sticky xl:top-24">
        <SectionIntro kicker={t("chartKicker")} id="conversion-chart" title={t("chartTitle")}>
          {t("chartLead", { hours: num(DEFAULT_SCHEDULE.hoursPerWeek), weeks: num(DEFAULT_SCHEDULE.weeksPerYear), annualHours: num(hours) })}
        </SectionIntro>
        <div role="region" aria-labelledby="conversion-chart conversion-chart-kicker" tabIndex={0} className="focus-ring card mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-end text-sm tabular-nums">
            <thead className="bg-neutral-50 text-xs text-neutral-600">
              <tr>
                {CHART_COLUMNS.map((column, index) => (
                  <th key={column} scope="col" className={`px-3 py-3 font-semibold sm:px-4 ${index === 0 ? "sticky start-0 bg-neutral-50 text-start" : ""}`}>
                    {t(`chartColumns.${column}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CHART_SALARIES.map((salary) => {
                const pay = convertPay(salary, "annual", DEFAULT_SCHEDULE);
                return (
                  <tr key={salary} className="border-t border-neutral-100">
                    <th scope="row" className="sticky start-0 bg-white px-3 py-3 text-start font-semibold text-ink-900 shadow-[1px_0_0_var(--color-line)] sm:px-4 rtl:shadow-[-1px_0_0_var(--color-line)]">
                      <bdi dir="ltr">{usd(salary, 0)}</bdi>
                    </th>
                    <td className="px-3 py-3 sm:px-4 font-semibold text-brand-700">
                      <bdi dir="ltr">{usd(pay.hourly)}</bdi>
                    </td>
                    <td className="px-3 py-3 sm:px-4 text-ink-800">
                      <bdi dir="ltr">{usd(pay.weekly)}</bdi>
                    </td>
                    <td className="px-3 py-3 sm:px-4 text-ink-800">
                      <bdi dir="ltr">{usd(pay.biweekly)}</bdi>
                    </td>
                    <td className="px-3 py-3 sm:px-4 text-ink-800">
                      <bdi dir="ltr">{usd(pay.monthly)}</bdi>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-2xl bg-blush/70 px-5 py-4 text-sm text-neutral-700 ring-1 ring-blush">
          <strong className="text-ink-900">{t("chartNoteTitle")}</strong> {t("chartNote")}
        </p>
      </div>
    </section>
  );
}
