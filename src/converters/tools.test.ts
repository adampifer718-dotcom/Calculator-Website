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
import {
  HTML_NAMED_ENTITIES,
  decodeHtml,
  describeText,
  durationSeconds,
  encodeHtml,
  formatJson,
  formatOffset,
  hashText,
  parseCodePoints,
  parseJson,
  parseWallTime,
  supportedTimeZones,
  textStats,
  zoneOffsetMs,
  zonedToInstant,
  type JsonNode,
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

describe("word and character counter", () => {
  it("counts an English text", () => {
    const text = "Hello, world! It's 2026.\nSecond line.\n\nNew paragraph here.";
    expect(textStats(text, "en-US")).toEqual({ words: 9, characters: 58, charactersNoSpaces: 49, sentences: 4, paragraphs: 2, lines: 4, bytes: 58 });
  });
  it("counts mixed scripts with Intl.Segmenter", () => {
    // Urdu (4 words, Urdu full stop), Arabic (2 words) and Chinese (2 dictionary words, no spaces)
    expect(textStats("یہ ایک جملہ ہے۔", "ur").words).toBe(4);
    expect(textStats("مرحبا بالعالم", "ar").words).toBe(2);
    expect(textStats("你好世界", "en").words).toBe(2);
    expect(textStats("Hello مرحبا", "en")).toMatchObject({ words: 2, characters: 11, bytes: 16 });
  });
  it("counts emoji and combining marks as single characters", () => {
    expect(textStats("👍🏽", "en")).toMatchObject({ characters: 1, charactersNoSpaces: 1, words: 0, bytes: 8 });
    // e + combining acute, and a family ZWJ sequence
    expect(textStats("e\u0301 👨‍👩‍👧", "en")).toMatchObject({ characters: 3, charactersNoSpaces: 2 });
  });
  it("handles empty input and the whitespace fallback", () => {
    expect(textStats("", "en")).toEqual({ words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0, paragraphs: 0, lines: 0, bytes: 0 });
    expect(textStats("  \n ", "en")).toMatchObject({ words: 0, paragraphs: 0, lines: 2 });
    expect(textStats("one two  three. Four!", "en", false)).toMatchObject({ words: 4, sentences: 2, characters: 21 });
    expect(textStats("a\r\nb", "en").lines).toBe(2);
  });
  it("computes reading and speaking time", () => {
    expect(durationSeconds(200, 200)).toBe(60);
    expect(durationSeconds(1000, 238)).toBe(253);
    expect(durationSeconds(0, 200)).toBe(0);
    expect(durationSeconds(10, 0)).toBe(0);
  });
});

describe("HTML entities", () => {
  it("encodes the five special characters, and optionally non-ASCII by code point", () => {
    expect(encodeHtml(`<a href="x">Tom & Jerry's</a>`, false)).toMatchObject({ output: "&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&#39;s&lt;/a&gt;" });
    expect(encodeHtml("café 😀", false)).toMatchObject({ output: "café 😀" });
    // 😀 is one code point (U+1F600), not two UTF-16 units
    expect(encodeHtml("café 😀", true)).toMatchObject({ output: "caf&#xE9; &#x1F600;" });
    expect(encodeHtml("", false)).toEqual({ ok: false, error: "empty" });
  });
  it("decodes named and numeric references", () => {
    expect(decodeHtml("&lt;p&gt; &amp;amp; &copy; &eacute;&Eacute; &hellip; &euro;5 &frac12;")).toMatchObject({ output: "<p> &amp; © éÉ … €5 ½", replaced: 0, unknown: [] });
    expect(decodeHtml("&#65;&#x42;&#X43; &#128512; &#x1F600;")).toMatchObject({ output: "ABC 😀 😀" });
    expect(decodeHtml("&nbsp;&apos;&#39;&quot;")).toMatchObject({ output: "\u00a0''\"" });
  });
  it("replaces invalid code points with U+FFFD and maps C1 controls like the HTML parser", () => {
    expect(decodeHtml("&#0;&#xD800;&#x110000;&#99999999999;")).toMatchObject({ output: "\uFFFD\uFFFD\uFFFD\uFFFD", replaced: 4 });
    expect(decodeHtml("&#150;&#x80;")).toMatchObject({ output: "–€" });
  });
  it("leaves unknown names and references without a semicolon unchanged", () => {
    expect(decodeHtml("&foo; &amp &bogus;")).toMatchObject({ output: "&foo; &amp &bogus;", unknown: ["&foo;", "&bogus;"] });
  });
  it("covers the required named references and the whole Latin-1 range", () => {
    const required = "amp lt gt quot apos nbsp copy reg trade hellip mdash ndash lsquo rsquo ldquo rdquo euro pound yen cent deg plusmn times divide micro para sect middot laquo raquo frac12 frac14 frac34 sup2 sup3 iexcl iquest Agrave eacute ntilde szlig yuml".split(" ");
    for (const name of required) expect(HTML_NAMED_ENTITIES[name], name).toBeDefined();
    expect(HTML_NAMED_ENTITIES.yuml).toBe(0xff);
    expect(HTML_NAMED_ENTITIES.times).toBe(0xd7);
    expect(HTML_NAMED_ENTITIES.divide).toBe(0xf7);
    expect(HTML_NAMED_ENTITIES.iquest).toBe(0xbf);
  });
  it("round-trips encoded text", () => {
    const text = `5 > 3 & "quotes" 'single' — ünïcødé 😀`;
    const enc = encodeHtml(text, true);
    expect(enc.ok && decodeHtml(enc.output)).toMatchObject({ output: text });
  });
});

describe("SHA hashes", () => {
  // FIPS 180-4 example messages ("abc") and the empty message; cross-checked with Python hashlib.
  const vectors: [string, string, string, string][] = [
    ["SHA-1", "abc", "a9993e364706816aba3e25717850c26c9cd0d89d", "da39a3ee5e6b4b0d3255bfef95601890afd80709"],
    ["SHA-256", "abc", "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"],
    ["SHA-384", "abc", "cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7", "38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b"],
    ["SHA-512", "abc", "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f", "cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e"],
  ];
  it.each(vectors)("%s of 'abc' and of the empty string", async (algorithm, message, abc, empty) => {
    expect((await hashText(message, algorithm as "SHA-256")).hex).toBe(abc);
    expect((await hashText("", algorithm as "SHA-256")).hex).toBe(empty);
  });
  it("gives Base64 output and hashes the UTF-8 bytes", async () => {
    // python: base64.b64encode(hashlib.sha256(b"abc").digest())
    expect((await hashText("abc", "SHA-256")).base64).toBe("ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0=");
    // python: hashlib.sha256("é".encode()).hexdigest()
    expect((await hashText("é", "SHA-256")).hex).toBe("4a99557e4033c3539de2eb65472017cad5f9557f7a0625a09f1c3f6e2ba69c4c");
  });
});

describe("Unicode code points", () => {
  it("describes each code point", () => {
    const { rows, total } = describeText("é😀A");
    expect(total).toBe(3);
    expect(rows[0]).toMatchObject({ notation: "U+00E9", codePoint: 233, utf8: "C3 A9", utf16: "00E9", html: "&#xE9;", js: "\\u{E9}" });
    expect(rows[1]).toMatchObject({ notation: "U+1F600", codePoint: 128512, utf8: "F0 9F 98 80", utf16: "D83D DE00", html: "&#x1F600;", js: "\\u{1F600}" });
    expect(rows[2]).toMatchObject({ notation: "U+0041", utf8: "41" });
    expect(describeText("€").rows[0].utf8).toBe("E2 82 AC");
    expect(describeText("\uD800").rows[0]).toMatchObject({ loneSurrogate: true, utf8: "" });
  });
  it("caps the table but counts every code point", () => {
    const r = describeText("a".repeat(600));
    expect(r.rows.length).toBe(500);
    expect(r.total).toBe(600);
  });
  it("parses every notation, including surrogate pairs", () => {
    expect(parseCodePoints("U+0048 u+69 0x21")).toEqual({ ok: true, text: "Hi!", count: 3 });
    expect(parseCodePoints("\\uD83D\\uDE00, \\u{1F600} U+1F600")).toEqual({ ok: true, text: "😀😀😀", count: 3 });
    expect(parseCodePoints("\\u0041\\u0042")).toEqual({ ok: true, text: "AB", count: 2 });
  });
  it("rejects invalid tokens, lone surrogates and values above U+10FFFF", () => {
    expect(parseCodePoints("U+110000")).toEqual({ ok: false, error: "range", token: "U+110000" });
    expect(parseCodePoints("U+D800")).toEqual({ ok: false, error: "surrogate", token: "U+D800" });
    expect(parseCodePoints("\\uD83D")).toEqual({ ok: false, error: "loneSurrogate", token: "\\uD83D" });
    expect(parseCodePoints("\\uDE00\\uD83D")).toMatchObject({ ok: false, error: "loneSurrogate" });
    expect(parseCodePoints("U+0048 hello")).toEqual({ ok: false, error: "invalidToken", token: "hello" });
    expect(parseCodePoints("U+12345678")).toMatchObject({ ok: false, error: "invalidToken" });
    expect(parseCodePoints("\\u12")).toMatchObject({ ok: false, error: "invalidToken" });
    expect(parseCodePoints("")).toEqual({ ok: false, error: "empty" });
  });
});

describe("time zones", () => {
  const at = (iso: string) => Date.parse(iso);
  it("reads offsets from the tz database", () => {
    expect(formatOffset(zoneOffsetMs(at("2026-01-15T12:00:00Z"), "America/New_York"))).toBe("-05:00");
    expect(formatOffset(zoneOffsetMs(at("2026-07-15T12:00:00Z"), "America/New_York"))).toBe("-04:00");
    expect(formatOffset(zoneOffsetMs(at("2026-07-15T12:00:00Z"), "Asia/Karachi"))).toBe("+05:00");
    expect(formatOffset(zoneOffsetMs(at("2026-01-15T12:00:00Z"), "Asia/Kolkata"))).toBe("+05:30");
    expect(formatOffset(zoneOffsetMs(at("2026-01-15T12:00:00Z"), "UTC"))).toBe("+00:00");
    expect(formatOffset(-(4 * 3600 + 56 * 60 + 2) * 1000)).toBe("-04:56:02");
  });
  it("converts a wall time to an instant", () => {
    const wall = parseWallTime("2026-01-15T12:00");
    expect(wall.ok).toBe(true);
    if (!wall.ok) return;
    expect(zonedToInstant(wall.wall, "UTC")).toMatchObject({ ok: true, ms: at("2026-01-15T12:00:00Z"), status: "exact" });
    expect(zonedToInstant(wall.wall, "America/New_York")).toMatchObject({ ms: at("2026-01-15T17:00:00Z"), offsetMs: -5 * 3600e3, status: "exact" });
    expect(zonedToInstant(wall.wall, "Asia/Kolkata")).toMatchObject({ ms: at("2026-01-15T06:30:00Z"), status: "exact" });
    expect(zonedToInstant(wall.wall, "Asia/Tokyo")).toMatchObject({ ms: at("2026-01-15T03:00:00Z") });
  });
  it("moves a time in the spring-forward gap forward (2026-03-08 02:30 New York)", () => {
    const wall = parseWallTime("2026-03-08T02:30");
    if (!wall.ok) throw new Error("parse");
    // 02:30 EST would be 07:30Z, but clocks jump from 02:00 EST to 03:00 EDT; 07:30Z is 03:30 EDT.
    expect(zonedToInstant(wall.wall, "America/New_York")).toEqual({ ok: true, ms: at("2026-03-08T07:30:00Z"), offsetMs: -4 * 3600e3, status: "gap" });
  });
  it("takes the earlier instant in the fall-back overlap (2026-11-01 01:30 New York)", () => {
    const wall = parseWallTime("2026-11-01T01:30");
    if (!wall.ok) throw new Error("parse");
    expect(zonedToInstant(wall.wall, "America/New_York")).toEqual({ ok: true, ms: at("2026-11-01T05:30:00Z"), offsetMs: -4 * 3600e3, status: "ambiguous", laterOffsetMs: -5 * 3600e3 });
  });
  it("validates input and zones", () => {
    expect(parseWallTime("2026-02-29T10:00")).toEqual({ ok: false, error: "invalid" });
    expect(parseWallTime("2024-02-29T10:00").ok).toBe(true);
    expect(parseWallTime("2026-13-01T10:00")).toEqual({ ok: false, error: "invalid" });
    expect(parseWallTime("2026-01-01 24:00")).toEqual({ ok: false, error: "invalid" });
    expect(parseWallTime("")).toEqual({ ok: false, error: "empty" });
    const wall = parseWallTime("2026-01-15T12:00:30");
    expect(wall.ok && zonedToInstant(wall.wall, "Mars/Olympus")).toEqual({ ok: false, error: "zone" });
    expect(supportedTimeZones()[0]).toBe("UTC");
    expect(supportedTimeZones()).toContain("Asia/Karachi");
  });
});

describe("JSON formatter", () => {
  const ok = (text: string) => {
    const r = parseJson(text);
    if (!r.ok) throw new Error(`${r.error} at ${r.line}:${r.column}`);
    return r;
  };
  it("formats with spaces or tabs and minifies", () => {
    const r = ok(' {"b": [1, 2, {"c": null}], "a": "x\\u00e9", "e": {}, "f": []} ');
    expect(formatJson(r.value, "  ", false)).toBe('{\n  "b": [\n    1,\n    2,\n    {\n      "c": null\n    }\n  ],\n  "a": "xé",\n  "e": {},\n  "f": []\n}');
    expect(formatJson(r.value, "", false)).toBe('{"b":[1,2,{"c":null}],"a":"xé","e":{},"f":[]}');
    expect(formatJson(r.value, "\t", false).split("\n")[1]).toBe('\t"b": [');
    // Same as JSON.stringify for ordinary documents
    const doc = '{"x":[true,false,null,-15.25,"a\\nb"],"y":{"z":0}}';
    expect(formatJson(ok(doc).value, "    ", false)).toBe(JSON.stringify(JSON.parse(doc), null, 4));
  });
  it("sorts keys recursively", () => {
    const r = ok('{"b":1,"a":{"d":1,"c":[{"z":1,"y":2}]},"B":0}');
    expect(formatJson(r.value, "", true)).toBe('{"B":0,"a":{"c":[{"y":2,"z":1}],"d":1},"b":1}');
  });
  it("keeps large numbers exactly as written", () => {
    const r = ok('{"id": 12345678901234567890, "x": 1.10, "e": 1E+2}');
    expect(formatJson(r.value, "", false)).toBe('{"id":12345678901234567890,"x":1.10,"e":1E+2}');
  });
  it("lets the last duplicate key win and counts duplicates", () => {
    const r = ok('{"a":1,"b":2,"a":3}');
    expect(r.duplicateKeys).toBe(1);
    expect(formatJson(r.value, "", false)).toBe('{"a":3,"b":2}');
  });
  it("handles deep nesting up to the limit", () => {
    const deep = "[".repeat(1000) + "]".repeat(1000);
    expect(formatJson(ok(deep).value, "", false)).toBe(deep);
    expect(parseJson("[".repeat(1002) + "]".repeat(1002))).toMatchObject({ ok: false, error: "tooDeep" });
  });
  it("reports the reason, line and column of errors", () => {
    const err = (text: string) => {
      const r = parseJson(text);
      return r.ok ? null : { error: r.error, line: r.line, column: r.column };
    };
    expect(err('{"a": 1,}')).toEqual({ error: "trailingComma", line: 1, column: 9 });
    expect(err("[1, 2,]")).toEqual({ error: "trailingComma", line: 1, column: 7 });
    expect(err('{\n  "a": 1\n  "b": 2\n}')).toEqual({ error: "unexpectedToken", line: 3, column: 3 });
    expect(err('{"a": "abc')).toEqual({ error: "unterminatedString", line: 1, column: 7 });
    expect(err('{"a": "x\\q"}')).toEqual({ error: "invalidEscape", line: 1, column: 9 });
    expect(err('"tab\there"')).toEqual({ error: "controlCharacter", line: 1, column: 5 });
    expect(err("{'a': 1}")).toEqual({ error: "expectedKey", line: 1, column: 2 });
    expect(err("{a: 1}")).toEqual({ error: "expectedKey", line: 1, column: 2 });
    expect(err('{"a" 1}')).toEqual({ error: "expectedColon", line: 1, column: 6 });
    expect(err("[01]")).toEqual({ error: "invalidNumber", line: 1, column: 3 });
    expect(err("[1.]")).toEqual({ error: "invalidNumber", line: 1, column: 3 });
    expect(err("[-]")).toEqual({ error: "invalidNumber", line: 1, column: 2 });
    expect(err("[NaN]")).toEqual({ error: "unexpectedToken", line: 1, column: 2 });
    expect(err("[1, 2")).toEqual({ error: "unexpectedEnd", line: 1, column: 6 });
    expect(err("{} []")).toEqual({ error: "trailingData", line: 1, column: 4 });
    expect(err('["😀", x]')).toEqual({ error: "unexpectedToken", line: 1, column: 7 });
    expect(err("   ")).toEqual({ error: "empty", line: 1, column: 1 });
  });
  it("accepts every RFC 8259 value at the top level", () => {
    for (const text of ["0", "-0.5e-3", '"s"', "true", "false", "null", "[]", "{}", "\uFEFF[1]"]) expect(parseJson(text).ok, text).toBe(true);
    const node: JsonNode = ok("3").value;
    expect(node).toEqual({ type: "number", raw: "3" });
  });
});
