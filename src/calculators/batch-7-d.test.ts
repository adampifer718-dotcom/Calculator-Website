import { describe, expect, it } from "vitest";
import { defaultRawValues, evaluate, rawFromValues } from "./framework/evaluate";
import { formatResultValue } from "./framework/format-result";
import type { AnyEngine, CalculatorDefinition, RawValues, ResultValue } from "./framework/types";
import { npv } from "./npv";
import { discountedPayback, irrOf, npvOf, npvSchedule, signChanges } from "./npv/engine";
import { subnet } from "./subnet";
import { addressScope, maskFromPrefix, parseIpv4, prefixFromMask, subnetInfo } from "./subnet/engine";
import { passwordEntropy } from "./password-entropy";
import { entropyBits } from "./password-entropy/engine";
import { batteryLife } from "./battery-life";
import { runtimeHours } from "./battery-life/engine";

const DEFS: CalculatorDefinition[] = [npv, subnet, passwordEntropy, batteryLife];

const num = (value: ResultValue) => (value.kind === "currency" ? value.amount : value.kind === "number" || value.kind === "percent" ? value.value : Number.NaN);
const txt = (value: ResultValue) => formatResultValue(value, "USD");

function run(engine: AnyEngine, raw: RawValues) {
  return evaluate(engine, { ...defaultRawValues(engine), ...raw });
}
function ok(engine: AnyEngine, raw: RawValues) {
  const result = run(engine, raw);
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  return result.result;
}
const primary = (engine: AnyEngine, raw: RawValues) => ok(engine, raw).primary.value;
const secondary = (engine: AnyEngine, raw: RawValues, label: string) => {
  const item = ok(engine, raw).secondary?.find((s) => s.label === label);
  if (!item) throw new Error(`missing ${label}`);
  return item.value;
};
const hasSecondary = (engine: AnyEngine, raw: RawValues, label: string) => (ok(engine, raw).secondary ?? []).some((s) => s.label === label);
const errors = (engine: AnyEngine, raw: RawValues) => {
  const result = run(engine, raw);
  return result.ok ? {} : result.errors;
};

describe("batch 7 group D: content and examples", () => {
  it.each(DEFS.map((d) => [d.slug, d] as const))("%s has valid metadata and content", (_slug, d) => {
    expect(d.metaTitle.length).toBeLessThanOrEqual(59);
    expect(d.metaDescription.length).toBeGreaterThanOrEqual(70);
    expect(d.metaDescription.length).toBeLessThanOrEqual(160);
    expect(d.examples.length).toBeGreaterThanOrEqual(2);
    expect(d.examples.length).toBeLessThanOrEqual(3);
    expect(d.faqs.length).toBe(3);
    expect(d.intro.length).toBeGreaterThan(0);
    expect(d.howToUse.length).toBeGreaterThan(0);
    expect(d.formulas.length).toBeGreaterThan(0);
    expect(d.assumptions.length).toBeGreaterThan(0);
    expect(d.related.length).toBeGreaterThanOrEqual(2);
    expect(d.related.length).toBeLessThanOrEqual(4);
    expect(d.related).not.toContain(d.slug);
    expect(d.addedOn).toBe("2026-10-24");
    expect(d.updated).toBe("2026-10-24");
    expect(d.status).toBe("published");
    expect(d.sources.length).toBeGreaterThan(0);
    expect(d.popularRank).toBeUndefined();
    expect(d.featured).toBeUndefined();
    const ids = (d.engine.fields as readonly { id: string }[]).map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(evaluate(d.engine, defaultRawValues(d.engine)).ok).toBe(true);
  });

  it("sets review flags exactly where specified", () => {
    expect(npv.expertReview).toEqual({ area: "financial", status: "pending" });
    expect(passwordEntropy.expertReview).toEqual({ area: "safety", status: "pending" });
    expect(subnet.expertReview).toBeUndefined();
    expect(batteryLife.expertReview).toBeUndefined();
    for (const d of [npv, passwordEntropy]) {
      const text = d.assumptions.join(" ");
      expect(text).toContain("not been professionally reviewed");
      expect(text).toMatch(/estimate/);
      expect(d.sources.every((s) => s.url)).toBe(true);
    }
  });

  it.each(DEFS.flatMap((d) => d.examples.map((e) => [d.slug, e.title, d, e] as const)))("%s example “%s”", (_slug, _title, d, example) => {
    const evaluation = evaluate(d.engine, rawFromValues(d.engine, example.inputs));
    expect(evaluation.ok).toBe(true);
    if (!evaluation.ok) return;
    const value = evaluation.result.primary.value;
    if (typeof example.expectedPrimary === "string") {
      expect(formatResultValue(value, String(example.inputs.currency ?? "USD"))).toBe(example.expectedPrimary);
    } else {
      expect(num(value)).toBeCloseTo(example.expectedPrimary, 9);
    }
  });
});

describe("NPV and IRR", () => {
  const e = npv.engine;
  const base = { currency: "USD" };
  it("matches reference values", () => {
    // python3 (Fraction): -10000 + 3000/1.06 + 4000/1.06**2 + 5000/1.06**3 + 2000/1.06**4 = 2172.4581809397932
    const r = { ...base, initial: "10000", cashFlows: "3000, 4000, 5000, 2000", rate: "6" };
    expect(num(primary(e, r))).toBeCloseTo(2172.4581809397932, 8);
    // python3 Newton iteration on the NPV: IRR = 15.322137877181552 %
    expect(num(secondary(e, r, "Internal rate of return (IRR)"))).toBeCloseTo(15.322137877181552, 8);
    // python3: (2172.4581809397932 + 10000) / 10000 = 1.2172458180939793
    expect(num(secondary(e, r, "Profitability index (PV of cash flows ÷ initial investment)"))).toBeCloseTo(1.2172458180939793, 10);
    // python3: cumulative after year 2 = -3610.18; 2 + 3610.18/(5000/1.06**3) = 2.859872
    expect(discountedPayback(npvSchedule(10000, [3000, 4000, 5000, 2000], 0.06))).toBeCloseTo(2.859872, 9);
    expect(txt(secondary(e, r, "Discounted payback period"))).toBe("2.86 years");
    expect(num(secondary(e, r, "Total undiscounted cash flow (including the initial investment)"))).toBe(4000);
    // default example: python3 IRR = 14.600921662525954 %, payback = 3.7985952
    const d = { ...base, initial: "50000", cashFlows: "12000, 15000, 18000, 20000, 9000", rate: "8" };
    expect(num(secondary(e, d, "Internal rate of return (IRR)"))).toBeCloseTo(14.600921662525954, 8);
    expect(discountedPayback(npvSchedule(50000, [12000, 15000, 18000, 20000, 9000], 0.08))).toBeCloseTo(3.7985952, 9);
    // python3: npv at 0% = sum of flows = 24000
    expect(npvOf([-50000, 12000, 15000, 18000, 20000, 9000], 0)).toBeCloseTo(24000, 9);
    // the year table has year 0 plus one row per cash flow
    expect(ok(e, d).tables?.[0].rows.length).toBe(6);
  });
  it("handles IRR edge cases", () => {
    // flows summing to zero: IRR = 0 exactly; NPV at 10% = python3 -20000 + sum(4000/1.1**t for t in 1..5) = -4836.85292236621
    const zero = { ...base, initial: "20000", cashFlows: "4000 4000 4000 4000 4000", rate: "10" };
    expect(num(primary(e, zero))).toBeCloseTo(-4836.85292236621, 8);
    expect(num(secondary(e, zero, "Internal rate of return (IRR)"))).toBeCloseTo(0, 9);
    expect(txt(secondary(e, zero, "Discounted payback period"))).toBe("Not reached within these cash flows");
    // all outflows: no sign change
    expect(irrOf([-100, -50, 0])).toEqual({ status: "none" });
    expect(txt(secondary(e, { ...base, initial: "100", cashFlows: "-50, 0", rate: "5" }, "Internal rate of return (IRR)"))).toBe("Not found");
    // two sign changes: roots 27.64% and 72.36%, reported as not unique
    expect(signChanges([-1000, 3000, -2200])).toBe(2);
    const twice = ok(e, { ...base, initial: "1000", cashFlows: "3000, -2200", rate: "10" });
    expect(txt(twice.secondary!.find((s) => s.label === "Internal rate of return (IRR)")!.value)).toBe("Not unique");
    expect(twice.notes?.some((n) => n.includes("more than once"))).toBe(true);
    // IRR above 1,000%: 1 → 100000 next year is 9,999,900%
    expect(irrOf([-1, 100000]).status).toBe("outOfRange");
    expect(txt(secondary(e, { ...base, initial: "1", cashFlows: "100000", rate: "5" }, "Internal rate of return (IRR)"))).toBe("Not found between -99.99% and 1,000%");
    // single cash flow: IRR = 1100/1000 - 1 = 10%
    expect(irrOf([-1000, 1100])).toEqual({ status: "ok", rate: expect.closeTo(0.1, 12) });
    // 100 yearly flows near -99% remain finite
    expect(run(e, { ...base, initial: "1000", cashFlows: Array(100).fill("0").join(" ") + "", rate: "-99" }).ok).toBe(true);
    expect(run(e, { ...base, initial: "1000", cashFlows: Array(100).fill("5").join(", "), rate: "-99" }).ok).toBe(true);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { initial: "0" }).initial).toBeDefined();
    expect(errors(e, { cashFlows: "" }).cashFlows).toBeDefined();
    expect(errors(e, { cashFlows: "100, abc" }).cashFlows).toMatch(/not a number/);
    expect(errors(e, { cashFlows: Array(101).fill("1").join(", ") }).cashFlows).toMatch(/at most 100/);
    expect(errors(e, { cashFlows: "5e13" }).cashFlows).toMatch(/too large/);
    expect(errors(e, { rate: "-100" }).rate).toBeDefined();
    expect(errors(e, { rate: "1001" }).rate).toBeDefined();
  });
  it("parses decimal commas in German", async () => {
    const { makeNpvEngine } = await import("./npv/engine");
    const { engineContext } = await import("./framework/i18n");
    const en = (await import("./npv/text/en")).default;
    const de = makeNpvEngine(engineContext("de", en));
    const result = evaluate(de, { ...defaultRawValues(de), initial: "10000", cashFlows: "3000; 4000; 5000; 2000", rate: "6" });
    expect(result.ok && num(result.result.primary.value)).toBeCloseTo(2172.4581809397932, 8);
  });
});

describe("IP subnet", () => {
  const e = subnet.engine;
  const s = (raw: RawValues, label: string) => txt(secondary(e, raw, label));
  it("matches reference values (python3 ipaddress)", () => {
    // ipaddress.ip_interface('10.45.200.17/255.255.240.0').network -> 10.45.192.0/20, broadcast 10.45.207.255, 4094 hosts
    const a = { address: "10.45.200.17", maskType: "mask", mask: "255.255.240.0" };
    expect(txt(primary(e, a))).toBe("10.45.192.0");
    expect(s(a, "Broadcast address")).toBe("10.45.207.255");
    expect(s(a, "First usable host")).toBe("10.45.192.1");
    expect(s(a, "Last usable host")).toBe("10.45.207.254");
    expect(num(secondary(e, a, "Usable host addresses"))).toBe(4094);
    expect(s(a, "Wildcard mask")).toBe("0.0.15.255");
    expect(s(a, "Network in CIDR notation")).toBe("10.45.192.0/20");
    expect(s(a, "Subnet mask in binary")).toBe("11111111.11111111.11110000.00000000");
    expect(s(a, "Address type")).toBe("Private (RFC 1918)");
    // 172.20.5.130/27 -> 172.20.5.128, broadcast .159, 30 hosts, mask 255.255.255.224
    const b = { address: "172.20.5.130/27" };
    expect(txt(primary(e, b))).toBe("172.20.5.128");
    expect(s(b, "Broadcast address")).toBe("172.20.5.159");
    expect(num(secondary(e, b, "Usable host addresses"))).toBe(30);
    expect(s(b, "Subnet mask")).toBe("255.255.255.224");
    expect(s(b, "Historical address class")).toBe("Class B");
    // 131.107.3.200/16 -> 131.107.0.0, 65536 addresses, public (is_global True)
    const c = { address: "131.107.3.200", maskType: "prefix", prefix: "16" };
    expect(txt(primary(e, c))).toBe("131.107.0.0");
    expect(num(secondary(e, c, "Total addresses in the network"))).toBe(65536);
    expect(s(c, "Address type")).toBe("Public (globally routable)");
    // 100.70.1.1/10 -> 100.64.0.0, broadcast 100.127.255.255, shared address space
    expect(txt(primary(e, { address: "100.70.1.1/10" }))).toBe("100.64.0.0");
    expect(s({ address: "100.70.1.1/10" }, "Broadcast address")).toBe("100.127.255.255");
    // 100.70.1.1 = 0x64460101
    expect(addressScope(0x64460101)).toBe("shared");
    expect(addressScope(0xc0000201)).toBe("documentation");
  });
  it("handles /31, /32 and /0", () => {
    // RFC 3021: 203.0.113.9/31 -> both 203.0.113.8 and .9 usable
    const p31 = { address: "203.0.113.9/31" };
    expect(txt(primary(e, p31))).toBe("203.0.113.8");
    expect(num(secondary(e, p31, "Usable host addresses"))).toBe(2);
    expect(s(p31, "First usable host")).toBe("203.0.113.8");
    expect(s(p31, "Last usable host")).toBe("203.0.113.9");
    expect(s(p31, "Broadcast address")).toMatch(/^None/);
    const p32 = { address: "8.8.8.8/32" };
    expect(num(secondary(e, p32, "Usable host addresses"))).toBe(1);
    expect(s(p32, "First usable host")).toBe("8.8.8.8");
    const all = subnetInfo(parseIpv4("0.0.0.0").ok ? 0 : 1, 0);
    expect(all.totalAddresses).toBe(4294967296);
    expect(all.usableHosts).toBe(4294967294);
    expect(all.broadcast).toBe(0xffffffff);
    expect(txt(primary(e, { address: "255.255.255.255/0" }))).toBe("0.0.0.0");
    expect(s({ address: "255.255.255.255" }, "Address type")).toBe("Limited broadcast (255.255.255.255)");
    expect(s({ address: "127.0.0.1" }, "Address type")).toBe("Loopback (127.0.0.0/8)");
    expect(s({ address: "224.0.0.5" }, "Historical address class")).toBe("Class D (multicast)");
    expect(maskFromPrefix(0)).toBe(0);
    expect(maskFromPrefix(32)).toBe(0xffffffff);
    expect(prefixFromMask(0xfffffff0)).toBe(28);
    expect(prefixFromMask(0xff00ff00)).toBeNull();
    // the slash overrides the select
    expect(txt(primary(e, { address: "192.168.1.10/26", maskType: "prefix", prefix: "24" }))).toBe("192.168.1.0");
    expect(s({ address: "192.168.1.70/26", prefix: "24" }, "Network in CIDR notation")).toBe("192.168.1.64/26");
  });
  it("rejects invalid addresses and masks", () => {
    expect(errors(e, { address: "256.1.1.1" }).address).toMatch(/0 to 255/);
    expect(errors(e, { address: "192.168.1" }).address).toBeDefined();
    expect(errors(e, { address: "192.168.01.1" }).address).toMatch(/leading zeros/);
    expect(errors(e, { address: "10.0.0.1/33" }).address).toMatch(/prefix length/);
    expect(errors(e, { address: "a.b.c.d" }).address).toBeDefined();
    expect(errors(e, { address: "" }).address).toBeDefined();
    expect(errors(e, { maskType: "mask", mask: "255.0.255.0" }).mask).toMatch(/1 bits/);
    expect(errors(e, { maskType: "mask", mask: "255.255.255" }).mask).toBeDefined();
    // a hidden mask field is not validated
    expect(run(e, { maskType: "prefix", mask: "nonsense" }).ok).toBe(true);
  });
});

describe("password entropy", () => {
  const e = passwordEntropy.engine;
  const sets = { mode: "random", poolMode: "sets", lower: "yes", upper: "yes", digits: "yes", symbols: "yes", symbolCount: "32", guessRate: "10000000000" };
  it("matches reference values", () => {
    // python3: 12*math.log2(62) = 71.45035572464249
    const r = { ...sets, length: "12", symbols: "no" };
    expect(num(primary(e, r))).toBeCloseTo(71.45035572464249, 10);
    // python3: 62**12/2/1e10/(365.25*86400) = 5111.711223917376 years
    expect(txt(secondary(e, r, "Average time to guess"))).toBe("5,112 years");
    // python3: 8*math.log2(5) = 18.575424759098897 (custom pool of 5)
    expect(num(primary(e, { ...sets, length: "8", poolMode: "custom", customPool: "5" }))).toBeCloseTo(18.575424759098897, 10);
    // python3: 6*math.log2(7776) = 77.54887502163469; 7776**6 = 2.210739e+23
    const p = { mode: "passphrase", words: "6", wordList: "7776", guessRate: "10000000000" };
    expect(txt(secondary(e, p, "Possible combinations"))).toBe("2.21 × 10²³");
    expect(txt(secondary(e, p, "Average time to guess"))).toBe("350,270 years");
    // python3: 26**8 = 208827064576; /2/1e10 = 10.44 s; /1e10 = 20.88 s
    const l8 = { ...sets, length: "8", upper: "no", digits: "no", symbols: "no" };
    expect(txt(secondary(e, l8, "Possible combinations"))).toBe("208,827,064,576");
    expect(txt(secondary(e, l8, "Average time to guess"))).toBe("10 seconds");
    expect(txt(secondary(e, l8, "Time to try every combination"))).toBe("21 seconds");
    // python3: 94**16/2/1e10/(365.25*86400) = 5.887e13 years; worst 1.177e14
    const all = { ...sets, length: "16" };
    expect(txt(secondary(e, all, "Average time to guess"))).toBe("5.89 × 10¹³ years");
    expect(txt(secondary(e, all, "Time to try every combination"))).toBe("1.18 × 10¹⁴ years");
    expect(num(secondary(e, all, "Pool size per position"))).toBe(94);
  });
  it("formats durations in each unit", () => {
    const lower = { ...sets, upper: "no", digits: "no", symbols: "no" };
    // python3: 26**9/2/1e10/60 = 4.52 minutes; 26**10/2/1e10/3600 = 1.96 hours; 26**11/2/1e10/86400 = 2.12 days
    expect(txt(secondary(e, { ...lower, length: "9" }, "Average time to guess"))).toBe("4.5 minutes");
    expect(txt(secondary(e, { ...lower, length: "10" }, "Average time to guess"))).toBe("2 hours");
    expect(txt(secondary(e, { ...lower, length: "11" }, "Average time to guess"))).toBe("2.1 days");
    // python3: 10**4/2/1e10 = 5e-7 s
    expect(txt(secondary(e, { ...sets, length: "4", lower: "no", upper: "no", symbols: "no" }, "Average time to guess"))).toBe("Less than 1 second");
  });
  it("handles extremes", () => {
    // python3: 1000*math.log2(1000000) = 19931.568569324176
    const big = ok(e, { ...sets, length: "1000", poolMode: "custom", customPool: "1000000", guessRate: "1" });
    expect(num(big.primary.value)).toBeCloseTo(19931.568569324176, 8);
    expect(txt(big.secondary!.find((s) => s.label === "Possible combinations")!.value)).toBe("1 × 10⁶⁰⁰⁰");
    // a single symbol in the pool gives 0 bits
    const one = ok(e, { ...sets, length: "10", lower: "no", upper: "no", digits: "no", symbolCount: "1" });
    expect(num(one.primary.value)).toBe(0);
    expect(one.notes?.[0]).toMatch(/0 bits/);
    expect(entropyBits(5, 7776)).toBeCloseTo(5 * Math.log2(7776), 12);
    // every result says no password is collected
    expect(ok(e, sets).notes?.some((n) => n.includes("never asks for your password"))).toBe(true);
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { ...sets, lower: "no", upper: "no", digits: "no", symbols: "no", length: "8" }).lower).toBe("Include at least one character set.");
    expect(errors(e, { ...sets, length: "0" }).length).toBeDefined();
    expect(errors(e, { ...sets, length: "8.5" }).length).toBeDefined();
    expect(errors(e, { ...sets, poolMode: "custom", customPool: "1" }).customPool).toBeDefined();
    expect(errors(e, { mode: "passphrase", words: "0" }).words).toBeDefined();
    expect(errors(e, { guessRate: "0" }).guessRate).toBeDefined();
  });
});

describe("battery life", () => {
  const e = batteryLife.engine;
  it("matches reference values", () => {
    // python3: 2400/1000*1.2 ... -> 2400 mAh at 1.2 V, 0.5 W, 100%: 2.4*1.2/0.5 = 5.76 h -> 5:46
    const a = { capacity: "2400", capacityUnit: "mAh", voltage: "1.2", load: "0.5", loadUnit: "W", depth: "100" };
    expect(txt(primary(e, a))).toBe("5:46");
    expect(num(secondary(e, a, "Runtime in hours"))).toBeCloseTo(5.76, 10);
    expect(num(secondary(e, a, "Rated energy"))).toBeCloseTo(2.88, 10);
    // python3: 0.5/1.2*1000 = 416.6666666666667 mA
    expect(num(secondary(e, a, "Load current"))).toBeCloseTo(416.6666666666667, 9);
    // python3: 20 Wh at 12 V with a 250 mA load, 80%: 20/(0.25*12)*0.8 = 5.333333333333334 h -> 5:20
    const b = { capacity: "20", capacityUnit: "Wh", voltage: "12", load: "250", loadUnit: "mA", depth: "80" };
    expect(txt(primary(e, b))).toBe("5:20");
    expect(num(secondary(e, b, "Runtime in days"))).toBeCloseTo(5.333333333333334 / 24, 10);
    // python3: 0.5 Ah / 2 A * 100% = 0.25 h -> 0:15
    expect(txt(primary(e, { capacity: "0.5", capacityUnit: "Ah", load: "2", loadUnit: "A", depth: "100" }))).toBe("0:15");
    expect(runtimeHours(3000, "mAh", 150, "mA", 80, null)).toBeCloseTo(16, 12);
    // python3: 3000*3.7/1000 = 11.1 Wh; usable 8.88
    expect(num(secondary(e, { capacity: "3000", capacityUnit: "mAh", voltage: "3.7", load: "150", loadUnit: "mA", depth: "80" }, "Usable energy"))).toBeCloseTo(8.88, 10);
  });
  it("handles optional voltage and long runtimes", () => {
    const noV = { capacity: "3000", capacityUnit: "mAh", voltage: "", load: "150", loadUnit: "mA", depth: "80" };
    expect(txt(primary(e, noV))).toBe("16:00");
    expect(hasSecondary(e, noV, "Rated energy")).toBe(false);
    // python3: 100000 mAh / 0.01 mA = 1e7 h -> 10,000,000:00
    expect(txt(primary(e, { capacity: "100000", capacityUnit: "mAh", voltage: "", load: "0.01", loadUnit: "mA", depth: "100" }))).toBe("10,000,000:00");
  });
  it("rejects impossible inputs", () => {
    expect(errors(e, { capacityUnit: "mAh", loadUnit: "W", voltage: "" }).voltage).toMatch(/voltage/);
    expect(errors(e, { capacityUnit: "Wh", loadUnit: "mA", voltage: "" }).voltage).toBeDefined();
    expect(errors(e, { capacity: "0" }).capacity).toBeDefined();
    expect(errors(e, { load: "-5" }).load).toBeDefined();
    expect(errors(e, { depth: "0" }).depth).toBeDefined();
    expect(errors(e, { depth: "101" }).depth).toBeDefined();
  });
});
