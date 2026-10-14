import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OhmsLawText } from "../text/en";

const de: CalculatorTranslation<OhmsLawText> = {
  content: {
    title: "Ohmsches-Gesetz-Rechner",
    shortTitle: "Ohmsches Gesetz",
    summary: "Berechnen Sie Spannung, Strom, Widerstand und Leistung aus zwei beliebigen der Werte V, I und R.",
    metaTitle: "Ohmsches-Gesetz-Rechner – Spannung, Strom, Widerstand",
    metaDescription: "Berechnen Sie mit dem ohmschen Gesetz Spannung, Strom oder Widerstand aus den beiden anderen Werten sowie die umgesetzte elektrische Leistung – mit Formeln.",
    keywords: ["ohmsches Gesetz", "ohmsches Gesetz Rechner", "Spannung berechnen", "Widerstand berechnen", "Stromstärke berechnen", "Leistung Watt", "Elektrotechnik"],
    intro: [
      "Das ohmsche Gesetz verknüpft die Spannung an einem Widerstand, den Strom durch ihn und seinen Widerstandswert: V = I × R.",
      "Geben Sie zwei beliebige Werte ein, um den dritten zu ermitteln, zusammen mit der Leistung, die das Bauteil umsetzt.",
    ],
    howToUse: [
      "Wählen Sie, welche zwei Werte Sie kennen.",
      "Geben Sie sie in Volt, Ampere oder Ohm ein.",
      "Lesen Sie den fehlenden Wert und die Leistung in Watt ab.",
    ],
    formulas: [
      { title: "Ohmsches Gesetz", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V (Spannung, im Deutschen oft U) in Volt, I in Ampere, R in Ohm." },
      { title: "Leistung", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Leistung in Watt." },
    ],
    examples: [
      { title: "12 V an 4 Ω", steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"] },
      { title: "0,5 A durch 220 Ω", steps: ["V = 0,5 × 220", "= 110 V"] },
    ],
    assumptions: [
      "Gilt für ohmsche Bauteile, deren Widerstand sich mit dem Strom nicht ändert.",
      "Verwenden Sie bei Wechselstromkreisen mit Blindwiderstand (Kondensatoren, Spulen) stattdessen die Impedanz.",
      "Arbeiten an Netzspannung sind gefährlich; beachten Sie die örtlichen Vorschriften und beauftragen Sie eine Elektrofachkraft.",
    ],
    faqs: [
      { question: "Was besagt das ohmsche Gesetz?", answer: "Der Strom durch einen Leiter ist proportional zur anliegenden Spannung: V = I × R." },
      { question: "Wie berechne ich die Leistung aus Strom und Widerstand?", answer: "P = I² × R. Ein Strom von 2 A durch 10 Ω setzt 40 W um." },
      { question: "Gilt das ohmsche Gesetz für LEDs?", answer: "Nicht direkt. LEDs sind nichtlinear; verwenden Sie daher die Durchlassspannung und eine Vorwiderstandsberechnung." },
    ],
    sourcesUsedFor: ["Das ohmsche Gesetz und seine Grenzen.", "Leistungsformeln P = IV = I²R = V²/R."],
  },
  text: {
    known: "Bekannte Werte",
    knownOptions: { VR: "Spannung und Widerstand", VI: "Spannung und Strom", IR: "Strom und Widerstand" },
    voltage: "Spannung (V)",
    current: "Strom (I)",
    resistance: "Widerstand (R)",
    currentOut: "Strom (I = V ÷ R)",
    resistanceOut: "Widerstand (R = V ÷ I)",
    voltageOut: "Spannung (V = I × R)",
    power: "Leistung (P = V × I)",
    voltageShort: "Spannung",
    currentShort: "Strom",
    resistanceShort: "Widerstand",
    note: "Gilt für ohmsche (lineare) Bauteile und Gleichstromkreise oder für Effektivwerte bei rein ohmschen Wechselstromlasten.",
  },
};

export default de;
