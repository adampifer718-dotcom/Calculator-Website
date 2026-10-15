import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GcfLcmText } from "../text/en";

const de: CalculatorTranslation<GcfLcmText> = {
  content: {
    title: "ggT- und kgV-Rechner",
    shortTitle: "ggT und kgV",
    summary: "Bestimmen Sie den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache einer Liste natürlicher Zahlen – mit Primfaktorzerlegung.",
    metaTitle: "ggT- und kgV-Rechner – größter gemeinsamer Teiler & kgV",
    metaDescription: "Bestimmen Sie den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache von 2 bis 20 natürlichen Zahlen, mit der Primfaktorzerlegung jeder Zahl.",
    keywords: ["ggT berechnen", "kgV berechnen", "größter gemeinsamer Teiler", "kleinstes gemeinsames Vielfaches", "Primfaktorzerlegung", "Hauptnenner", "euklidischer Algorithmus", "Brüche kürzen"],
    intro: [
      "Der größte gemeinsame Teiler (ggT) einer Menge natürlicher Zahlen ist die größte Zahl, die jede von ihnen ohne Rest teilt. Das kleinste gemeinsame Vielfache (kgV) ist die kleinste positive Zahl, die durch jede von ihnen teilbar ist.",
      "Den ggT brauchen Sie zum Kürzen von Brüchen, das kgV zum Finden eines gemeinsamen Nenners oder um zu bestimmen, wann sich wiederholende Zyklen zusammentreffen. Geben Sie Ihre Zahlen ein, um beide Werte samt den Primfaktoren jeder Zahl zu erhalten.",
    ],
    howToUse: [
      "Geben Sie 2 bis 20 positive ganze Zahlen ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      "Jede Zahl darf bis zu einer Billion (10¹²) groß sein.",
      "Lesen Sie ggT und kgV ab. Das kgV wird exakt berechnet, auch wenn es sehr viele Stellen hat.",
      "Sehen Sie in der Tabelle der Primfaktorzerlegung nach, wie beide Ergebnisse zustande kommen.",
    ],
    formulas: [
      { title: "Euklidischer Algorithmus", expression: "ggT(a, b) = ggT(b, a mod b),  ggT(a, 0) = a", explanation: "Ersetzt die größere Zahl so lange durch den Rest, bis der Rest 0 ist. Der letzte Wert ungleich null ist der ggT." },
      { title: "kgV zweier Zahlen", expression: "kgV(a, b) = a ÷ ggT(a, b) × b", explanation: "Wenn man zuerst teilt, bleiben die Zwischenergebnisse klein." },
      { title: "Mehr als zwei Zahlen", expression: "ggT(a, b, c) = ggT(ggT(a, b), c),  kgV(a, b, c) = kgV(kgV(a, b), c)", explanation: "Beide Operationen werden Zahl für Zahl angewendet." },
      { title: "Aus den Primfaktoren", expression: "ggT = Produkt der gemeinsamen Primfaktoren mit der kleinsten Potenz;  kgV = Produkt aller Primfaktoren mit der größten Potenz", explanation: "Dieselben Ergebnisse, abgelesen aus der Tabelle der Primfaktorzerlegung." },
    ],
    examples: [
      {
        title: "48 und 180",
        steps: ["180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0, also ist der ggT 12", "kgV = 48 ÷ 12 × 180 = 720", "Probe: 48 = 2⁴ × 3 und 180 = 2² × 3² × 5, also ggT = 2² × 3 = 12 und kgV = 2⁴ × 3² × 5 = 720"],
      },
      {
        title: "84, 126 und 210",
        steps: ["84 = 2² × 3 × 7, 126 = 2 × 3² × 7, 210 = 2 × 3 × 5 × 7", "Gemeinsame Primfaktoren mit der kleinsten Potenz: 2 × 3 × 7 = 42", "Alle Primfaktoren mit der größten Potenz: 2² × 3² × 5 × 7 = 1.260"],
      },
      {
        title: "35 und 64 (kein gemeinsamer Teiler)",
        steps: ["35 = 5 × 7 und 64 = 2⁶ haben keinen gemeinsamen Primfaktor", "ggT = 1, die Zahlen sind also teilerfremd", "kgV = 35 × 64 = 2.240"],
      },
    ],
    assumptions: [
      "Es werden nur positive ganze Zahlen akzeptiert. Für ggT und kgV von null oder negativen Zahlen gelten andere Konventionen, deshalb werden sie abgelehnt.",
      "Jede Zahl ist auf 10¹² begrenzt, damit die Primfaktorzerlegung schnell bleibt. Das kgV selbst wird mit exakter Ganzzahlarithmetik beliebiger Länge berechnet und kann viel größer sein.",
      "Doppelte Zahlen sind erlaubt und ändern die Ergebnisse nicht; jede verschiedene Zahl erscheint einmal in der Tabelle der Primfaktorzerlegung.",
    ],
    faqs: [
      { question: "Ist der ggT dasselbe wie GCF, GCD oder HCF?", answer: "Ja. GCF, GCD und HCF sind drei englische Abkürzungen für dieselbe Zahl, den größten gemeinsamen Teiler (ggT)." },
      { question: "Wie hängen ggT und kgV zusammen?", answer: "Für zwei Zahlen ist ggT × kgV gleich dem Produkt der Zahlen. Für 48 und 180: 12 × 720 = 8.640 = 48 × 180. Diese Abkürzung gilt nicht für drei oder mehr Zahlen." },
      { question: "Wie nutze ich das kgV beim Addieren von Brüchen?", answer: "Das kgV der Nenner ist der Hauptnenner. Für 1/12 + 1/18 ist das kgV von 12 und 18 gleich 36, also schreiben Sie die Summe als 3/36 + 2/36 = 5/36." },
    ],
    sourcesUsedFor: ["Der euklidische Algorithmus für den größten gemeinsamen Teiler.", "Primfaktorzerlegung und das kleinste gemeinsame Vielfache."],
  },
  text: {
    numbers: "Natürliche Zahlen",
    numbersHelp: "Geben Sie 2 bis 20 positive ganze Zahlen ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
    errors: {
      empty: "Geben Sie mindestens zwei Zahlen ein.",
      tooMany: "Geben Sie höchstens {max} Zahlen ein.",
      notNumber: "„{token}“ ist keine Zahl. Trennen Sie Werte durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    needTwo: "Geben Sie mindestens zwei Zahlen ein.",
    maxCount: "Geben Sie höchstens {max} Zahlen ein.",
    notWhole: "{value} ist keine ganze Zahl. Geben Sie nur ganze Zahlen ein.",
    notPositive: "{value} ist nicht positiv. Jede Zahl muss mindestens 1 sein.",
    tooBig: "{value} ist zu groß. Jede Zahl darf höchstens {max} sein.",
    gcf: "Größter gemeinsamer Teiler (ggT)",
    gcfCaption: "Im Englischen GCF, GCD oder HCF genannt.",
    lcm: "Kleinstes gemeinsames Vielfaches (kgV)",
    lcmDigits: "Stellen des kgV",
    coprime: "Der ggT ist 1, diese Zahlen haben also außer 1 keinen gemeinsamen Teiler (sie sind teilerfremd).",
    factorTable: "Primfaktorzerlegung",
    numberColumn: "Zahl",
    factorsColumn: "Primfaktoren",
    noPrimeFactors: "1 (keine Primfaktoren)",
    isPrime: "{factors} (Primzahl)",
  },
};

export default de;
