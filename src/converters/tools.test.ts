import { describe, expect, it } from "vitest";
import {
  contrastRatios,
  convertMorse,
  convertRoman,
  decodeBytes,
  encodeText,
  formatHex,
  formatHsl,
  formatRgb,
  hslToRgb,
  isoUtc,
  parseColor,
  parseCoordinate,
  parseDateTime,
  parseTimestamp,
  toDdm,
  toDms,
  toRoman,
} from "./tools";

describe("Roman numerals", () => {
  it("converts numbers to standard numerals", () => {
    expect(toRoman(1)).toBe("I");
    expect(toRoman(4)).toBe("IV");
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(14)).toBe("XIV");
    expect(toRoman(40)).toBe("XL");
    expect(toRoman(90)).toBe("XC");
    expect(toRoman(400)).toBe("CD");
    expect(toRoman(1994)).toBe("MCMXCIV");
    expect(toRoman(2026)).toBe("MMXXVI");
    expect(toRoman(3999)).toBe("MMMCMXCIX");
  });

  it("round-trips every value from 1 to 3999", () => {
    for (let n = 1; n <= 3999; n++) {
      const r = convertRoman(toRoman(n));
      expect(r.ok && r.value).toBe(n);
    }
  });

  it("detects the direction and accepts lower case", () => {
    expect(convertRoman("2026")).toEqual({ ok: true, direction: "toRoman", value: 2026, roman: "MMXXVI" });
    expect(convertRoman(" mcmxciv ")).toEqual({ ok: true, direction: "toNumber", value: 1994, roman: "MCMXCIV" });
    expect(convertRoman("3,999")).toMatchObject({ ok: true, roman: "MMMCMXCIX" });
  });

  it("rejects out-of-range, fractional and non-standard input", () => {
    expect(convertRoman("")).toEqual({ ok: false, error: "empty" });
    expect(convertRoman("0")).toEqual({ ok: false, error: "range" });
    expect(convertRoman("4000")).toEqual({ ok: false, error: "range" });
    expect(convertRoman("-5")).toEqual({ ok: false, error: "range" });
    expect(convertRoman("2.5")).toEqual({ ok: false, error: "notWhole" });
    expect(convertRoman("12,5")).toEqual({ ok: false, error: "notWhole" });
    expect(convertRoman("1.000")).toMatchObject({ ok: true, roman: "M" });
    for (const bad of ["IIII", "IC", "VX", "MMMM", "IIX", "ABC", "XM"]) expect(convertRoman(bad)).toEqual({ ok: false, error: "invalidNumeral" });
  });
});

describe("Unix time", () => {
  it("parses seconds and milliseconds", () => {
    // python: datetime.fromtimestamp(1700000000, timezone.utc) → 2023-11-14 22:13:20
    const s = parseTimestamp("1700000000", "s");
    expect(s.ok && isoUtc(s.ms)).toBe("2023-11-14T22:13:20Z");
    const ms = parseTimestamp("1700000000123", "ms");
    expect(ms.ok && isoUtc(ms.ms)).toBe("2023-11-14T22:13:20.123Z");
    // 2**31 - 1 seconds → 2038-01-19T03:14:07Z
    const y2038 = parseTimestamp("2147483647", "s");
    expect(y2038.ok && isoUtc(y2038.ms)).toBe("2038-01-19T03:14:07Z");
    const before = parseTimestamp("-86400", "s");
    expect(before.ok && isoUtc(before.ms)).toBe("1969-12-31T00:00:00Z");
  });

  it("rejects text and values outside the JavaScript date range", () => {
    expect(parseTimestamp("abc", "s")).toEqual({ ok: false, error: "invalid" });
    expect(parseTimestamp("", "s")).toEqual({ ok: false, error: "empty" });
    expect(parseTimestamp("8640000000001", "s")).toEqual({ ok: false, error: "range" });
    expect(parseTimestamp("8640000000000", "s").ok).toBe(true);
  });

  it("turns dates into timestamps in UTC or at a fixed offset", () => {
    expect(parseDateTime("2026-01-01T00:00", 0)).toEqual({ ok: true, ms: 1767225600000 });
    expect(parseDateTime("2026-01-01T00:00:00", 0)).toEqual({ ok: true, ms: 1767225600000 });
    // 01:00 at UTC+1 is midnight UTC
    expect(parseDateTime("2026-01-01T01:00", 60)).toEqual({ ok: true, ms: 1767225600000 });
    expect(parseDateTime("2024-02-29T12:00", 0).ok).toBe(true);
    expect(parseDateTime("2023-02-29T12:00", 0)).toEqual({ ok: false, error: "invalid" });
    expect(parseDateTime("2026-04-31T12:00", 0)).toEqual({ ok: false, error: "invalid" });
    expect(parseDateTime("2026-13-01T00:00", 0)).toEqual({ ok: false, error: "invalid" });
    expect(parseDateTime("1970-01-01T00:00:00.5", 0)).toEqual({ ok: true, ms: 500 });
  });
});

describe("colors", () => {
  it("parses hex, rgb() and hsl()", () => {
    expect(parseColor("#1E7A5A")).toEqual({ ok: true, rgb: { r: 30, g: 122, b: 90, a: 1 } });
    expect(parseColor("1e7a5a")).toEqual({ ok: true, rgb: { r: 30, g: 122, b: 90, a: 1 } });
    expect(parseColor("#f00")).toEqual({ ok: true, rgb: { r: 255, g: 0, b: 0, a: 1 } });
    expect(parseColor("#FF000080")).toEqual({ ok: true, rgb: { r: 255, g: 0, b: 0, a: 128 / 255 } });
    expect(parseColor("rgb(30, 122, 90)")).toEqual({ ok: true, rgb: { r: 30, g: 122, b: 90, a: 1 } });
    expect(parseColor("rgb(30 122 90 / 50%)")).toEqual({ ok: true, rgb: { r: 30, g: 122, b: 90, a: 0.5 } });
    expect(parseColor("rgba(100%, 0%, 0%, 0.25)")).toEqual({ ok: true, rgb: { r: 255, g: 0, b: 0, a: 0.25 } });
    const hsl = parseColor("hsl(120, 100%, 25%)");
    expect(hsl.ok && formatHex(hsl.rgb)).toBe("#008000");
  });

  it("formats hex, rgb and hsl", () => {
    const c = { r: 30, g: 122, b: 90, a: 1 };
    expect(formatHex(c)).toBe("#1E7A5A");
    expect(formatRgb(c)).toBe("rgb(30, 122, 90)");
    // python: colorsys.rgb_to_hls(30/255, 122/255, 90/255) → h 0.42029, l 0.29804, s 0.60526
    expect(formatHsl(c)).toBe("hsl(159.1, 60.5%, 29.8%)");
    expect(formatHsl({ r: 128, g: 128, b: 128, a: 1 })).toBe("hsl(0, 0%, 50.2%)");
    expect(formatRgb({ r: 255, g: 0, b: 0, a: 0.5 })).toBe("rgba(255, 0, 0, 0.5)");
    expect(formatHex({ r: 255, g: 0, b: 0, a: 0.5 })).toBe("#FF000080");
  });

  it("converts HSL to RGB per CSS Color 4", () => {
    expect(hslToRgb(0, 100, 50)).toEqual([255, 0, 0]);
    expect(hslToRgb(240, 100, 50)).toEqual([0, 0, 255]);
    expect(hslToRgb(0, 0, 100)).toEqual([255, 255, 255]);
    // python: colorsys.hls_to_rgb(200/360, 0.4, 0.6) × 255 → (40.8, 122.4, 163.2)
    const [r, g, b] = hslToRgb(200, 60, 40);
    expect(r).toBeCloseTo(40.8, 9);
    expect(g).toBeCloseTo(122.4, 9);
    expect(b).toBeCloseTo(163.2, 9);
  });

  it("computes WCAG contrast ratios", () => {
    expect(contrastRatios({ r: 255, g: 255, b: 255, a: 1 }).white).toBeCloseTo(1, 12);
    expect(contrastRatios({ r: 0, g: 0, b: 0, a: 1 }).white).toBeCloseTo(21, 12);
    // #767676 is the well-known 4.54:1 grey on white
    expect(contrastRatios({ r: 118, g: 118, b: 118, a: 1 }).white).toBeCloseTo(4.54, 2);
  });

  it("rejects malformed colors", () => {
    for (const bad of ["#12", "#12345", "rgb(1,2)", "hsl(a, 50%, 50%)", "blue", "rgb(1, 2, 3, 4, 5)"]) expect(parseColor(bad).ok).toBe(false);
  });
});

describe("Morse code", () => {
  it("encodes and decodes", () => {
    expect(convertMorse("SOS")).toEqual({ ok: true, direction: "encode", output: "... --- ...", unsupported: [] });
    expect(convertMorse("Hello world")).toMatchObject({ output: ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." });
    expect(convertMorse(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toMatchObject({ direction: "decode", output: "HELLO WORLD" });
    expect(convertMorse("-.... ----- ..--..")).toMatchObject({ output: "60?" });
    expect(convertMorse("·−·")).toMatchObject({ direction: "decode", output: "R" });
  });

  it("round-trips every character of the table", () => {
    const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZÉ 0123456789 .,:?'-/()\"=+@";
    const encoded = convertMorse(text);
    expect(encoded.ok && encoded.unsupported).toEqual([]);
    const decoded = encoded.ok ? convertMorse(encoded.output) : null;
    expect(decoded && decoded.ok && decoded.output).toBe(text);
  });

  it("lists unsupported characters and rejects unknown codes", () => {
    // ß upper-cases to SS, which has a code; ! has none in ITU-R M.1677-1.
    expect(convertMorse("ß!")).toEqual({ ok: true, direction: "encode", output: "... ...", unsupported: ["!"] });
    expect(convertMorse("سلام")).toMatchObject({ ok: true, output: "", unsupported: ["س", "ل", "ا", "م"] });
    expect(convertMorse("...---...")).toEqual({ ok: false, error: "unknownCode", token: "...---..." });
    expect(convertMorse("x".repeat(2001))).toEqual({ ok: false, error: "tooLong" });
  });
});

describe("text and UTF-8 bytes", () => {
  it("encodes text", () => {
    expect(encodeText("Hi", "binary")).toEqual({ bytes: 2, output: "01001000 01101001" });
    expect(encodeText("Hi", "hex")).toEqual({ bytes: 2, output: "48 69" });
    expect(encodeText("é", "decimal")).toEqual({ bytes: 2, output: "195 169" });
    // python: "😀".encode("utf-8").hex(" ") → "f0 9f 98 80"
    expect(encodeText("😀", "hex")).toEqual({ bytes: 4, output: "F0 9F 98 80" });
    // python: "سلام".encode("utf-8") → 8 bytes
    expect(encodeText("سلام", "hex").bytes).toBe(8);
  });

  it("decodes bytes, with or without spaces", () => {
    expect(decodeBytes("01001000 01101001", "binary")).toEqual({ ok: true, text: "Hi", bytes: 2 });
    expect(decodeBytes("0100100001101001", "binary")).toEqual({ ok: true, text: "Hi", bytes: 2 });
    expect(decodeBytes("C3A9", "hex")).toEqual({ ok: true, text: "é", bytes: 2 });
    expect(decodeBytes("0x48 0x69", "hex")).toEqual({ ok: true, text: "Hi", bytes: 2 });
    expect(decodeBytes("72, 105", "decimal")).toEqual({ ok: true, text: "Hi", bytes: 2 });
  });

  it("rejects invalid bytes and invalid UTF-8", () => {
    expect(decodeBytes("012", "binary")).toEqual({ ok: false, error: "invalidDigits", token: "012" });
    expect(decodeBytes("256", "decimal")).toEqual({ ok: false, error: "byteRange", token: "256" });
    expect(decodeBytes("C3", "hex")).toEqual({ ok: false, error: "notUtf8" });
    expect(decodeBytes("FF FE", "hex")).toEqual({ ok: false, error: "notUtf8" });
    expect(decodeBytes("GG", "hex")).toEqual({ ok: false, error: "invalidDigits", token: "GG" });
  });
});

describe("coordinates", () => {
  it("parses decimal degrees, DDM and DMS with hemispheres", () => {
    expect(parseCoordinate("48.8584", "lat")).toEqual({ ok: true, degrees: 48.8584 });
    expect(parseCoordinate("-33.868806", "lat")).toEqual({ ok: true, degrees: -33.868806 });
    // 33 + 52/60 + 7.7/3600 = 33.868805555…
    const dms = parseCoordinate("33°52'7.7\"S", "lat");
    expect(dms.ok && dms.degrees).toBeCloseTo(-33.868805555555554, 12);
    const spaced = parseCoordinate("151 12 33.48 E", "lon");
    expect(spaced.ok && spaced.degrees).toBeCloseTo(151.2093, 12);
    const ddm = parseCoordinate("N 48° 51.504′", "lat");
    expect(ddm.ok && ddm.degrees).toBeCloseTo(48.8584, 12);
    const west = parseCoordinate("79°56′55.9″W", "lon");
    expect(west.ok && west.degrees).toBeCloseTo(-(79 + 56 / 60 + 55.9 / 3600), 12);
    expect(parseCoordinate("2,2945", "lon")).toEqual({ ok: true, degrees: 2.2945 });
    expect(parseCoordinate("−0.1276", "lon")).toEqual({ ok: true, degrees: -0.1276 });
  });

  it("rejects bad input", () => {
    expect(parseCoordinate("91", "lat")).toEqual({ ok: false, error: "range" });
    expect(parseCoordinate("-180.5", "lon")).toEqual({ ok: false, error: "range" });
    expect(parseCoordinate("48 61 0 N", "lat")).toEqual({ ok: false, error: "minutes" });
    expect(parseCoordinate("48 E", "lat")).toEqual({ ok: false, error: "hemisphere" });
    expect(parseCoordinate("-48 S", "lat")).toEqual({ ok: false, error: "invalid" });
    expect(parseCoordinate("48.5 30", "lat")).toEqual({ ok: false, error: "invalid" });
    expect(parseCoordinate("abc", "lat")).toEqual({ ok: false, error: "invalid" });
  });

  it("splits degrees into DMS and DDM with carries", () => {
    expect(toDms(48.8584)).toEqual({ d: 48, m: 51, s: 30.24 });
    expect(toDdm(48.8584)).toEqual({ d: 48, m: 51.504 });
    // 59.99999 seconds rounds up into the next minute and degree
    expect(toDms(10.999999999)).toEqual({ d: 11, m: 0, s: 0 });
    expect(toDms(-33.868806)).toEqual({ d: 33, m: 52, s: 7.7 });
  });
});
