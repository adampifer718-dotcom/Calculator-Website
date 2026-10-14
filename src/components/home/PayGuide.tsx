import { formatCurrency, formatNumber } from "@/lib/format";
import { DEFAULT_SCHEDULE, annualHours, convertPay, hourlyEquivalent } from "@/lib/math/pay";

const usd = (amount: number, decimals?: number) => formatCurrency(amount, "USD", "negative", decimals);
const hours = annualHours(DEFAULT_SCHEDULE);
const hoursPerDay = DEFAULT_SCHEDULE.hoursPerWeek / DEFAULT_SCHEDULE.daysPerWeek;

export const CHART_SALARIES = [30000, 40000, 50000, 60000, 75000, 100000] as const;

const STEPS = [
  { title: "Choose your currency", body: "Pick the currency you are paid in. Results are formatted in that currency; amounts are never converted between currencies." },
  { title: "Enter your pay", body: "Type your gross pay exactly as it appears on your contract or pay stub, before taxes and deductions." },
  { title: "Choose your pay period", body: "Select hourly, daily, weekly, biweekly, semi-monthly, monthly or annual, depending on how the amount is paid." },
  { title: "Set your hours and workdays", body: "Most full-time employees work 40 hours over 5 days. Part-time employees should enter their scheduled hours." },
  { title: "Adjust paid weeks per year", body: "The default is 52 weeks. Lower it if you take unpaid leave, so the result reflects your real work year." },
] as const;

function SectionIntro({ kicker, id, title, children }: { kicker: string; id: string; title: string; children?: React.ReactNode }) {
  return (
    <>
      <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">{kicker}</p>
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {children && <p className="mt-3 max-w-2xl text-neutral-600">{children}</p>}
    </>
  );
}

function FormulaBox({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 overflow-x-auto rounded-md border border-neutral-200 border-l-4 border-l-brand-600 bg-neutral-50 px-4 py-3 font-mono text-sm font-semibold text-ink-900">
      {children}
    </p>
  );
}

function Example({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-neutral-600">{children}</p>;
}

export function HowToUse() {
  return (
    <section aria-labelledby="how-to-use" className="border-t border-neutral-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro kicker="Step by step" id="how-to-use" title="How to use the pay calculator">
          Five steps, no sign-up and nothing to install. It works on any phone or computer.
        </SectionIntro>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-neutral-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-lg border border-brand-100 bg-brand-50/60 px-4 py-3 text-sm text-ink-800">
          Results update as soon as you change any field, with your hourly, daily, weekly, biweekly, semi-monthly, monthly and annual pay side by side.
        </p>
      </div>
    </section>
  );
}

export function PayFormulas() {
  const weekly = 1200;
  const daily = 240;
  const rate = 30;
  return (
    <section aria-labelledby="how-to-calculate" className="border-t border-neutral-200 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro kicker="The formulas" id="how-to-calculate" title="How to convert between hourly pay and salary">
          Every conversion comes down to how many hours you are paid for in a year. Divide total pay by total hours to get your hourly rate, or multiply the other way.
        </SectionIntro>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="card p-5 sm:p-6">
            <h3 className="font-semibold text-ink-900">Annual salary to hourly rate</h3>
            <FormulaBox>Hourly rate = annual salary ÷ (hours per week × weeks per year)</FormulaBox>
            <p className="mt-3 text-sm text-neutral-600">
              A full-time schedule of {DEFAULT_SCHEDULE.hoursPerWeek} hours a week for {DEFAULT_SCHEDULE.weeksPerYear} weeks is {formatNumber(hours)} paid hours a year.
            </p>
            <FormulaBox>Hourly rate = annual salary ÷ {formatNumber(hours)}</FormulaBox>
            <Example>
              Example: <strong className="text-ink-900">{usd(60000, 0)} ÷ {formatNumber(hours)} = {usd(hourlyEquivalent(60000, "annual", DEFAULT_SCHEDULE))} per hour</strong>
            </Example>
          </article>
          <article className="card p-5 sm:p-6">
            <h3 className="font-semibold text-ink-900">Monthly pay to hourly rate</h3>
            <p className="mt-3 text-sm text-neutral-600">Multiply monthly pay by 12 to get annual pay, then divide by your paid hours per year.</p>
            <FormulaBox>Hourly rate = (monthly pay × 12) ÷ (hours per week × weeks per year)</FormulaBox>
            <Example>
              Example:{" "}
              <strong className="text-ink-900">
                ({usd(5000, 0)} × 12) ÷ {formatNumber(hours)} = {usd(hourlyEquivalent(5000, "monthly", DEFAULT_SCHEDULE))} per hour
              </strong>
            </Example>
          </article>
          <article className="card p-5 sm:p-6">
            <h3 className="font-semibold text-ink-900">Weekly and daily pay to hourly rate</h3>
            <p className="mt-3 text-sm text-neutral-600">For weekly and daily pay, the weeks per year cancel out, so you can divide directly.</p>
            <FormulaBox>Hourly rate = weekly pay ÷ hours per week</FormulaBox>
            <Example>
              <strong className="text-ink-900">
                {usd(weekly, 0)} ÷ {DEFAULT_SCHEDULE.hoursPerWeek} = {usd(hourlyEquivalent(weekly, "weekly", DEFAULT_SCHEDULE))} per hour
              </strong>
            </Example>
            <FormulaBox>Hourly rate = daily pay ÷ (hours per week ÷ workdays per week)</FormulaBox>
            <Example>
              <strong className="text-ink-900">
                {usd(daily, 0)} ÷ {formatNumber(hoursPerDay)} = {usd(hourlyEquivalent(daily, "daily", DEFAULT_SCHEDULE))} per hour
              </strong>
            </Example>
          </article>
          <article className="card p-5 sm:p-6">
            <h3 className="font-semibold text-ink-900">Hourly rate to annual and monthly salary</h3>
            <p className="mt-3 text-sm text-neutral-600">Contractors and freelancers often need the reverse: multiply the hourly rate by weekly hours, then by paid weeks.</p>
            <FormulaBox>Annual salary = hourly rate × hours per week × weeks per year</FormulaBox>
            <Example>
              <strong className="text-ink-900">
                {usd(rate)} × {DEFAULT_SCHEDULE.hoursPerWeek} × {DEFAULT_SCHEDULE.weeksPerYear} = {usd(convertPay(rate, "hourly", DEFAULT_SCHEDULE).annual, 0)} per year
              </strong>
            </Example>
            <FormulaBox>Monthly pay = annual salary ÷ 12</FormulaBox>
            <Example>
              <strong className="text-ink-900">
                {usd(convertPay(rate, "hourly", DEFAULT_SCHEDULE).annual, 0)} ÷ 12 = {usd(convertPay(rate, "hourly", DEFAULT_SCHEDULE).monthly)} per month
              </strong>
            </Example>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ConversionChart() {
  return (
    <section aria-labelledby="conversion-chart" className="border-t border-neutral-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro kicker="Quick reference" id="conversion-chart" title="Salary to hourly rate conversion chart">
          Based on {DEFAULT_SCHEDULE.hoursPerWeek} hours a week for {DEFAULT_SCHEDULE.weeksPerYear} weeks ({formatNumber(hours)} paid hours a year). All figures are gross pay before taxes and deductions.
        </SectionIntro>
        <div role="region" aria-label="Salary to hourly conversion chart" tabIndex={0} className="focus-ring mt-8 overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full min-w-[36rem] text-right text-sm tabular-nums">
            <thead className="bg-neutral-50 text-xs text-neutral-600">
              <tr>
                {["Annual salary", "Hourly rate", "Weekly pay", "Biweekly pay", "Monthly pay"].map((column, index) => (
                  <th key={column} scope="col" className={`px-4 py-3 font-semibold ${index === 0 ? "text-left" : ""}`}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CHART_SALARIES.map((salary) => {
                const pay = convertPay(salary, "annual", DEFAULT_SCHEDULE);
                return (
                  <tr key={salary} className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-3 text-left font-semibold text-ink-900">
                      {usd(salary, 0)}
                    </th>
                    <td className="px-4 py-3 font-semibold text-brand-700">{usd(pay.hourly)}</td>
                    <td className="px-4 py-3 text-ink-800">{usd(pay.weekly)}</td>
                    <td className="px-4 py-3 text-ink-800">{usd(pay.biweekly)}</td>
                    <td className="px-4 py-3 text-ink-800">{usd(pay.monthly)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-lg border border-neutral-200 border-l-4 border-l-brand-600 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
          <strong className="text-ink-900">Biweekly vs semi-monthly:</strong> biweekly pay splits a salary across 26 paychecks, while semi-monthly pay uses 24. The annual total
          is the same, so each biweekly paycheck is smaller.
        </p>
      </div>
    </section>
  );
}
