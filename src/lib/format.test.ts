import { describe, expect, it } from "vitest";
import { currencySymbol, formatCurrency, formatNumber, formatPercent } from "./format";

describe("formatting", () => {
  it("formats currencies without converting values", () => {
    expect(formatCurrency(28.846153846)).toBe("$28.85");
    expect(formatCurrency(60000, "EUR")).toBe("€60,000.00");
    expect(formatCurrency(60000, "GBP")).toBe("£60,000.00");
    expect(formatCurrency(1234.5, "JPY")).toBe("¥1,235");
    expect(formatCurrency(10, "NOT-A-CODE")).toBe("$10.00");
  });

  it("does not show negative zero", () => {
    expect(formatCurrency(-0)).toBe("$0.00");
    expect(formatCurrency(-0.001)).toBe("$0.00");
    expect(formatNumber(-0.00001, 2)).toBe("0");
    expect(formatPercent(-0.0001, 2, "exceptZero")).toBe("0%");
  });

  it("shows signs when requested", () => {
    expect(formatPercent(25, 2, "exceptZero")).toBe("+25%");
    expect(formatPercent(-20, 2, "exceptZero")).toBe("-20%");
    expect(formatCurrency(2500, "USD", "exceptZero")).toBe("+$2,500.00");
  });

  it("rounds only for display", () => {
    expect(formatNumber(1 / 3, 4)).toBe("0.3333");
    expect(formatPercent(100 / 3)).toBe("33.33%");
    expect(formatNumber(1950)).toBe("1,950");
  });

  it("returns currency symbols", () => {
    expect(currencySymbol("USD")).toBe("$");
    expect(currencySymbol("EUR")).toBe("€");
    expect(currencySymbol("INR")).toBe("₹");
    expect(formatCurrency(100, "USD", "negative", 0)).toBe("$100");
  });
});
