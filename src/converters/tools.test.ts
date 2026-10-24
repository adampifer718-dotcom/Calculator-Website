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
  PAPER_SIZES,
  bestRational,
  decodeBase64,
  decodeUrl,
  encodeBase64,
  encodeUrl,
  mixedParts,
  nearestFraction,
  paperDimensions,
  parseExactFraction,
  parseTireSize,
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

describe("Base64", () => {
  it("encodes UTF-8 text in both alphabets", () => {
    // python: base64.b64encode("Hello, world!".encode())
    expect(encodeBase64("Hello, world!", false)).toEqual({ ok: true, bytes: 13, output: "SGVsbG8sIHdvcmxkIQ==" });
    // python: base64.urlsafe_b64encode("é?>".encode()) → "w6k_Pg==", padding dropped
    expect(encodeBase64("é?>", true)).toEqual({ ok: true, bytes: 4, output: "w6k_Pg" });
    expect(encodeBase64("😀", false)).toMatchObject({ output: "8J+YgA==" });
  });
  it("decodes standard and URL-safe input, with or without padding", () => {
    expect(decodeBase64("SGVsbG8sIHdvcmxkIQ==")).toEqual({ ok: true, output: "Hello, world!", bytes: 13 });
    expect(decodeBase64("w6k_Pg")).toEqual({ ok: true, output: "é?>", bytes: 4 });
    expect(decodeBase64(" SGkh\n")).toMatchObject({ output: "Hi!" });
  });
  it("rejects invalid Base64 and non-UTF-8 bytes", () => {
    expect(decodeBase64("SGk*")).toEqual({ ok: false, error: "invalid" });
    expect(decodeBase64("A")).toEqual({ ok: false, error: "invalid" });
    // 0xFF 0xFE is not UTF-8
    expect(decodeBase64("//4=")).toEqual({ ok: false, error: "notUtf8" });
    expect(decodeBase64("")).toEqual({ ok: false, error: "empty" });
  });
});

describe("URL encoding", () => {
  it("encodes single values and whole URLs", () => {
    // python: urllib.parse.quote("café & crème?", safe="-_.~")
    expect(encodeUrl("café & crème?", "component")).toEqual({ ok: true, output: "caf%C3%A9%20%26%20cr%C3%A8me%3F" });
    expect(encodeUrl("it's (ok)*!", "component")).toEqual({ ok: true, output: "it%27s%20%28ok%29%2A%21" });
    expect(encodeUrl("https://example.com/a b?q=é&x=1", "uri")).toEqual({ ok: true, output: "https://example.com/a%20b?q=%C3%A9&x=1" });
  });
  it("decodes, optionally treating + as a space, and rejects broken sequences", () => {
    expect(decodeUrl("caf%C3%A9%20%26", false)).toEqual({ ok: true, output: "café &" });
    expect(decodeUrl("a+b", true)).toEqual({ ok: true, output: "a b" });
    expect(decodeUrl("a+b", false)).toEqual({ ok: true, output: "a+b" });
    expect(decodeUrl("%E2%8", false)).toEqual({ ok: false, error: "malformed" });
    expect(decodeUrl("%FF", false)).toEqual({ ok: false, error: "malformed" });
  });
});

describe("tire sizes", () => {
  it("parses metric designations and computes dimensions", () => {
    const r = parseTireSize("225/45R17");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // 17 × 25.4 + 2 × 101.25 = 634.3 mm (24.972 in); revs/km = 1e6 / (π × 634.3)
    expect(r.dims.sidewallMm).toBeCloseTo(101.25, 10);
    expect(r.dims.diameterMm).toBeCloseTo(634.3, 10);
    expect(r.dims.revsPerKm).toBeCloseTo(501.83, 2);
    expect(parseTireSize("P215/65R15").ok).toBe(true);
    expect(parseTireSize("LT245/75R16 120/116S").ok).toBe(true);
    expect(parseTireSize("205/55 ZR 16")).toMatchObject({ ok: true, size: { width: 205, aspect: 55, rim: 16 } });
    // 18 × 25.4 + 2 × 94 = 645.2 mm; ratio to 634.3 = 1.01718
    const b = parseTireSize("235/40R18");
    expect(b.ok && b.dims.diameterMm / r.dims.diameterMm).toBeCloseTo(1.017184, 6);
  });
  it("rejects malformed and implausible sizes", () => {
    expect(parseTireSize("31x10.50R15")).toEqual({ ok: false, error: "invalid" });
    expect(parseTireSize("225/45R35")).toEqual({ ok: false, error: "range" });
    expect(parseTireSize("225/45R9")).toEqual({ ok: false, error: "invalid" });
    expect(parseTireSize("")).toEqual({ ok: false, error: "empty" });
  });
});

describe("decimal to fraction", () => {
  it("converts decimals and fractions exactly", () => {
    expect(parseExactFraction("0.375")).toMatchObject({ ok: true, exact: { num: 3n, den: 8n } });
    expect(parseExactFraction("2.6875")).toMatchObject({ exact: { num: 43n, den: 16n } });
    expect(parseExactFraction("-1.5")).toMatchObject({ exact: { num: -3n, den: 2n } });
    expect(parseExactFraction("14/16")).toMatchObject({ exact: { num: 7n, den: 8n } });
    expect(parseExactFraction("2.5e-3")).toMatchObject({ exact: { num: 1n, den: 400n } });
    expect(parseExactFraction("3")).toMatchObject({ exact: { num: 3n, den: 1n } });
    expect(parseExactFraction("1/0")).toEqual({ ok: false, error: "invalid" });
    expect(parseExactFraction("abc")).toEqual({ ok: false, error: "invalid" });
  });
  it("finds nearest and best approximations", () => {
    expect(nearestFraction(0.7, 16)).toEqual({ num: 11, den: 16 });
    expect(nearestFraction(0.5, 16)).toEqual({ num: 1, den: 2 });
    // python: Fraction(3.14159).limit_denominator(1000) → 355/113
    expect(bestRational(3.14159, 1000)).toEqual({ num: 355, den: 113 });
    expect(bestRational(0.333, 10)).toEqual({ num: 1, den: 3 });
    expect(bestRational(-0.75, 100)).toEqual({ num: -3, den: 4 });
    expect(mixedParts(43n, 16n)).toEqual({ whole: 2n, num: 11n, den: 16n, negative: false });
  });
});

describe("paper sizes", () => {
  it("derives the ISO series and converts units", () => {
    const get = (id: string) => PAPER_SIZES.find((p) => p.id === id)!;
    expect([get("A4").width, get("A4").height]).toEqual([210, 297]);
    expect([get("A10").width, get("A10").height]).toEqual([26, 37]);
    expect([get("B5").width, get("B5").height]).toEqual([176, 250]);
    expect([get("C4").width, get("C4").height]).toEqual([229, 324]);
    const a4 = paperDimensions(get("A4"), 300);
    expect(a4.px).toEqual([2480, 3508]);
    expect(a4.pt[0]).toBeCloseTo(595.28, 2);
    const letter = paperDimensions(get("letter"), 300).mm;
    expect(letter[0]).toBeCloseTo(215.9, 9);
    expect(letter[1]).toBeCloseTo(279.4, 9);
  });
});
