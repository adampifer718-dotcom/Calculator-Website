/**
 * Fixed-rate, fully amortizing loan with level payments (the standard
 * annuity formula): payment = P × r ÷ (1 − (1 + r)^−n), r = periodic rate.
 */
export function loanPayment(principal: number, annualRatePercent: number, payments: number, paymentsPerYear = 12): number {
  const r = annualRatePercent / 100 / paymentsPerYear;
  if (r === 0) return principal / payments;
  return (principal * r) / (1 - Math.pow(1 + r, -payments));
}

/** Remaining balance after `k` payments. */
export function balanceAfter(principal: number, annualRatePercent: number, payment: number, k: number, paymentsPerYear = 12): number {
  const r = annualRatePercent / 100 / paymentsPerYear;
  if (r === 0) return principal - payment * k;
  const growth = Math.pow(1 + r, k);
  return principal * growth - (payment * (growth - 1)) / r;
}
