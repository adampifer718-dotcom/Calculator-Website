/** Return on investment helpers. Percent results use percent units (12 means 12%). */

export function netReturn(invested: number, finalValue: number): number {
  return finalValue - invested;
}

/** Simple ROI: (final value − amount invested) ÷ amount invested × 100. Null when invested is not positive. */
export function roiPercent(invested: number, finalValue: number): number | null {
  if (!(invested > 0)) return null;
  return ((finalValue - invested) / invested) * 100;
}

/**
 * Annualized ROI (compound annual growth rate):
 * ((final value ÷ amount invested)^(1 ÷ years) − 1) × 100.
 * Null when inputs make the rate undefined.
 */
export function annualizedRoiPercent(invested: number, finalValue: number, years: number): number | null {
  if (!(invested > 0) || !(years > 0) || finalValue < 0) return null;
  return (Math.pow(finalValue / invested, 1 / years) - 1) * 100;
}
