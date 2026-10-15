import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProbabilityEventsText } from "../text/en";

const de: CalculatorTranslation<ProbabilityEventsText> = {
  content: {
    title: "Rechner für Wahrscheinlichkeiten (zwei Ereignisse)",
    shortTitle: "Wahrscheinlichkeit",
    summary: "Kombinieren Sie die Wahrscheinlichkeiten zweier unabhängiger oder unvereinbarer Ereignisse: beide, mindestens eines, genau eines oder keines.",
    metaTitle: "Rechner für Wahrscheinlichkeiten – zwei Ereignisse, und, oder",
    metaDescription: "Berechnen Sie P(A und B), P(A oder B), genau eines und keines für zwei unabhängige oder unvereinbare Ereignisse – plus die Gegenereignisse.",
    keywords: ["Wahrscheinlichkeit berechnen", "Wahrscheinlichkeit zweier Ereignisse", "unabhängige Ereignisse", "unvereinbare Ereignisse", "P(A und B)", "P(A oder B)", "Gegenereignis", "Additionssatz", "Multiplikationssatz"],
    intro: [
      "Viele Alltagsfragen verbinden zwei Wahrscheinlichkeiten. Wie wahrscheinlich ist es, dass zwei Maschinen am selben Tag ausfallen, oder dass ein Kunde mit Karte oder bar bezahlt? Dieser Rechner beantwortet solche Fragen für zwei Ereignisse A und B.",
      "Geben Sie die Wahrscheinlichkeit jedes Ereignisses ein und legen Sie fest, wie sie zusammenhängen. Unabhängige Ereignisse beeinflussen sich nicht, wie zwei getrennte Münzwürfe. Unvereinbare Ereignisse können nicht beide eintreten, so wie ein einzelner Würfel nicht zugleich eine 2 und eine 5 zeigen kann. Der Rechner liefert dann die Wahrscheinlichkeit für beide, mindestens eines, genau eines und keines.",
    ],
    howToUse: [
      "Geben Sie P(A) und P(B) als Prozentwerte zwischen 0 % und 100 % ein.",
      "Wählen Sie „Unabhängig“, wenn das Eintreten des einen Ereignisses die Wahrscheinlichkeit des anderen nicht verändert.",
      "Wählen Sie „Unvereinbar“, wenn die beiden Ereignisse nie gemeinsam eintreten können. Ihre Wahrscheinlichkeiten können dann zusammen nicht mehr als 100 % ergeben.",
      "Lesen Sie P(A und B) als Hauptergebnis ab und die übrigen Kombinationen darunter.",
    ],
    formulas: [
      { title: "Beide (unabhängig)", expression: "P(A und B) = P(A) × P(B)", explanation: "Der Multiplikationssatz für unabhängige Ereignisse." },
      { title: "Beide (unvereinbar)", expression: "P(A und B) = 0", explanation: "Die Ereignisse haben keine gemeinsamen Ergebnisse." },
      { title: "Mindestens eines", expression: "P(A oder B) = P(A) + P(B) − P(A und B)", explanation: "Der Additionssatz. Die Überschneidung wird abgezogen, damit sie nicht doppelt gezählt wird." },
      { title: "Genau eines", expression: "P(genau eines) = P(A) + P(B) − 2 × P(A und B)", explanation: "Mindestens eines, abzüglich des Falls, dass beide eintreten." },
      { title: "Keines und Gegenereignisse", expression: "P(keines) = 1 − P(A oder B)\nP(nicht A) = 1 − P(A)", explanation: "Die Komplementregel: Ein Ereignis tritt entweder ein oder nicht." },
    ],
    examples: [
      {
        title: "Zwei unabhängige Maschinen, die an 8 % bzw. 5 % der Tage ausfallen",
        steps: ["P(beide fallen aus) = 0,08 × 0,05 = 0,004 = 0,4 %", "P(mindestens eine fällt aus) = 0,08 + 0,05 − 0,004 = 0,126 = 12,6 %", "P(keine fällt aus) = 1 − 0,126 = 87,4 %"],
      },
      {
        title: "Ein Kunde zahlt mit Karte (62 %) oder bar (18 %), nie beides",
        steps: ["Die Ereignisse sind unvereinbar, also P(beide) = 0", "P(Karte oder bar) = 62 % + 18 % = 80 %", "P(keines, z. B. ein Gutschein) = 100 % − 80 % = 20 %"],
      },
      {
        title: "Zwei Freiwürfe treffen, wenn jeder in 75 % der Fälle trifft",
        steps: ["P(beide treffen) = 0,75 × 0,75 = 0,5625 = 56,25 %", "P(genau einer) = 0,75 + 0,75 − 2 × 0,5625 = 37,5 %", "P(keiner) = 0,25 × 0,25 = 6,25 %"],
      },
    ],
    assumptions: [
      "Wahrscheinlichkeiten werden als Prozentwerte eingegeben und als exakte Werte behandelt.",
      "Der Rechner deckt nur die beiden Sonderfälle unabhängiger und unvereinbarer Ereignisse ab. Für Ereignisse, die keines von beiden sind, brauchen Sie P(A und B) oder eine bedingte Wahrscheinlichkeit, die dieses Werkzeug nicht abfragt.",
      "Unabhängigkeit ist eine Eigenschaft der Situation, nicht der Zahlen. Behandeln Sie Ereignisse als abhängig, solange Sie keinen guten Grund haben, sie für unabhängig zu halten.",
      "Ergebnisse werden in Prozent mit vier Nachkommastellen angezeigt.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen unabhängig und unvereinbar?", answer: "Unabhängige Ereignisse beeinflussen sich nicht, daher können beide eintreten. Unvereinbare Ereignisse können nicht gemeinsam eintreten: Tritt das eine ein, ist das andere ausgeschlossen. Zwei Ereignisse mit Wahrscheinlichkeiten ungleich null können nie zugleich unabhängig und unvereinbar sein." },
      { question: "Warum können unvereinbare Wahrscheinlichkeiten zusammen nicht mehr als 100 % ergeben?", answer: "Wenn sich A und B nie überschneiden, gilt P(A oder B) = P(A) + P(B). Eine Wahrscheinlichkeit kann 100 % nicht überschreiten, also auch diese Summe nicht. Eine Summe über 100 % bedeutet, dass sich die Ereignisse überschneiden müssen und nicht unvereinbar sind." },
      { question: "Wie finde ich die Wahrscheinlichkeit, dass etwas bei mehreren Versuchen mindestens einmal eintritt?", answer: "Bei unabhängigen Versuchen berechnen Sie die Wahrscheinlichkeit, dass es nie eintritt, und ziehen sie von 1 ab. Bei zwei Versuchen mit je 30 % gilt P(keiner) = 0,7 × 0,7 = 0,49, also P(mindestens einmal) = 51 %. Dieser Rechner zeigt das als P(A oder B)." },
    ],
    sourcesUsedFor: [
      "Definitionen unabhängiger und unvereinbarer Ereignisse, P(A und B) = P(A)·P(B) für unabhängige Ereignisse und P(A und B) = 0 für unvereinbare.",
    ],
  },
  text: {
    pA: "Wahrscheinlichkeit von A, P(A)",
    pB: "Wahrscheinlichkeit von B, P(B)",
    pHelp: "Als Prozentwert von 0 % bis 100 %.",
    relation: "Wie hängen A und B zusammen?",
    relationHelp: "Unabhängig: Das Eintreten des einen ändert die Wahrscheinlichkeit des anderen nicht. Unvereinbar: Sie können nicht beide eintreten.",
    relationOptions: { independent: "Unabhängig", exclusive: "Unvereinbar" },
    exclusiveTooLarge: "Bei unvereinbaren Ereignissen kann P(A) + P(B) nicht über 100 % liegen. Hier beträgt die Summe {sum}.",
    and: "P(A und B): beide treten ein",
    or: "P(A oder B): mindestens eines tritt ein",
    exactlyOne: "P(genau eines von A oder B)",
    neither: "P(weder A noch B)",
    notA: "P(nicht A)",
    notB: "P(nicht B)",
    independentCaption: "Für unabhängige Ereignisse gilt P(A und B) = P(A) × P(B).",
    exclusiveCaption: "Unvereinbare Ereignisse treten nie gemeinsam ein, daher gilt P(A und B) = 0.",
    certainNote: "Mit P(A) + P(B) = 100 % tritt eines der beiden unvereinbaren Ereignisse mit Sicherheit ein.",
  },
};

export default de;
