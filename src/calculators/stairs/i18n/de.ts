import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StairsText } from "../text/en";

const de: CalculatorTranslation<StairsText> = {
  content: {
    title: "Treppenrechner",
    shortTitle: "Treppe",
    summary: "Berechnen Sie Stufenanzahl, Steigungshöhe, Lauflänge, Treppenwinkel und Wangenlänge aus der Geschosshöhe – mit Prüfung der Schrittmaßregel 2R + T.",
    metaTitle: "Treppenrechner – Steigung, Auftritt, Lauflänge und Wange",
    metaDescription: "Ermitteln Sie die Stufenanzahl einer Treppe aus der Gesamthöhe, dazu Steigung, Lauflänge, Winkel, Wangenlänge und die Schrittmaßregel 2R + T, in Zoll oder cm.",
    keywords: ["Treppenrechner", "Treppe berechnen", "Stufenanzahl berechnen", "Steigungshöhe", "Auftrittsbreite", "Schrittmaßregel", "Treppenwinkel", "Treppenwange Länge"],
    intro: [
      "Eine Treppe teilt die Höhe zwischen zwei Geschossen in gleiche Stufen. Jede Stufe hat eine Steigung (ihre Höhe) und einen Auftritt (ihre Tiefe). Die Anzahl der Steigungen hängt von der Gesamthöhe und der größten Steigung ab, die Sie zulassen; es gibt immer einen Auftritt weniger als Steigungen, weil die oberste Stufe das obere Geschoss selbst ist.",
      "Geben Sie die Geschosshöhe, die maximale Steigung und die Auftrittstiefe ein, um die Stufenanzahl, die genaue Steigungshöhe, die Lauflänge, den Treppenwinkel und die Länge der Wangendiagonale zu erhalten – mit der traditionellen Schrittmaßprüfung 2R + T. Die Voreinstellungen sind die Grenzwerte des International Residential Code (USA); Ihre örtlichen Vorschriften können abweichen.",
    ],
    howToUse: [
      "Wählen Sie Zoll oder Zentimeter.",
      "Messen Sie die Gesamthöhe vom fertigen Fußboden unten bis zum fertigen Fußboden oben.",
      "Prüfen Sie die maximale Steigungshöhe und die Auftrittstiefe. Voreingestellt sind die maximale Steigung von 7¾ in und der minimale Auftritt von 10 in nach dem International Residential Code.",
      "Geben Sie bei Bedarf eine gewünschte Steigungshöhe ein sowie den verfügbaren horizontalen Platz, um zu sehen, ob die Treppe passt.",
      "Lesen Sie die Anzahl der Steigungen und die Aufteilung ab und prüfen Sie dann alles anhand Ihrer örtlichen Bauvorschriften.",
    ],
    formulas: [
      { title: "Anzahl der Steigungen", expression: "n = ⌈Gesamthöhe ÷ maximale Steigung⌉", explanation: "Mit einer gewünschten Steigungshöhe ist n die ganze Zahl, die Gesamthöhe ÷ Wunschhöhe am nächsten liegt." },
      { title: "Steigungshöhe und Auftritte", expression: "Steigung = Gesamthöhe ÷ n; Auftritte = n − 1", explanation: "Alle Steigungen sind gleich hoch." },
      { title: "Lauflänge und Winkel", expression: "Lauflänge = Auftritte × Auftrittstiefe; Winkel = arctan(Steigung ÷ Auftritt)", explanation: "Die Lauflänge wird von Vorderkante zu Vorderkante gemessen, ohne Podest." },
      { title: "Wangendiagonale", expression: "Wange = √(Gesamthöhe² + Lauflänge²)", explanation: "Die gerade Linie vom unteren bis zum oberen Ende des Treppenlaufs." },
      { title: "Faustregel für bequemes Gehen", expression: "24 in ≤ 2 × Steigung + Auftritt ≤ 25 in", explanation: "Etwa 61–63,5 cm. Eine traditionelle Richtlinie für eine bequeme Schrittlänge, keine Vorschrift." },
    ],
    examples: [
      {
        title: "108 in Geschosshöhe mit den IRC-Voreinstellungen",
        steps: [
          "n = ⌈108 ÷ 7,75⌉ = ⌈13,94⌉ = 14 Steigungen",
          "Steigung = 108 ÷ 14 ≈ 7,714 in; 13 Auftritte zu 10 in ergeben eine Lauflänge von 130 in",
          "Winkel = arctan(7,714 ÷ 10) ≈ 37,6°; Wange = √(108² + 130²) ≈ 169,01 in",
          "2R + T ≈ 25,43 in, etwas über dem Komfortbereich von 24–25 in",
        ],
      },
      {
        title: "252 cm Höhe mit 24-cm-Auftritten",
        steps: [
          "n = ⌈252 ÷ 19,6⌉ = ⌈12,86⌉ = 13 Steigungen",
          "Steigung = 252 ÷ 13 ≈ 19,385 cm; 12 Auftritte ergeben eine Lauflänge von 288 cm",
          "2R + T ≈ 62,77 cm ≈ 24,71 in, innerhalb des Komfortbereichs",
        ],
      },
      {
        title: "100 in Höhe, Ziel 7-in-Steigungen auf 130 in Platz",
        steps: [
          "n = round(100 ÷ 7) = round(14,29) = 14 Steigungen zu ≈ 7,143 in",
          "13 Auftritte × 10,5 in = 136,5 in Lauflänge, 6,5 in mehr als der verfügbare Platz",
          "2R + T ≈ 24,79 in, innerhalb des Komfortbereichs",
        ],
      },
    ],
    assumptions: [
      "Dies ist eine geometrische Schätzung für einen einzigen geraden Treppenlauf mit gleichen Stufen. Podeste, gewendelte Stufen, Wendeltreppen und die Dicke der Trittstufen sind nicht berücksichtigt.",
      "Bauvorschriften unterscheiden sich je nach Land und Region, ändern sich mit der Zeit und regeln weit mehr als die Stufenmaße: Kopfhöhe, Breite, Handläufe, Absturzsicherungen, Stufenvorderkanten und die zulässige Abweichung zwischen den Stufen. Die Voreinstellungen stammen aus dem International Residential Code und dienen nur als Ausgangspunkt; prüfen Sie die Vorschriften, die an Ihrem Bauort gelten.",
      "Das Ergebnis wurde nicht fachlich geprüft und ist keine Sicherheits- oder Ingenieurberatung. Treppen sind eine häufige Sturzursache; lassen Sie den Entwurf daher vor dem Bau von Ihrer Bauaufsichtsbehörde oder einer qualifizierten Fachperson prüfen.",
      "Die Gesamthöhe sollte zwischen den fertigen Fußbodenoberflächen gemessen werden. Ein späterer Wechsel des Bodenbelags verändert die Höhe der obersten und untersten Stufe.",
    ],
    faqs: [
      { question: "Wie viele Stufen brauche ich für eine Höhe von 9 ft (108 in)?", answer: "Mit einer maximalen Steigung von 7¾ in brauchen Sie ⌈108 ÷ 7,75⌉ = 14 Steigungen von je etwa 7,71 in und 13 Auftritte. Eine kleinere maximale Steigung ergibt mehr, flachere Stufen und eine längere Treppe." },
      { question: "Warum gibt es weniger Auftritte als Steigungen?", answer: "Die letzte Steigung führt Sie auf das obere Geschoss, das als oberste Stufe dient. Ein Lauf mit 14 Steigungen hat also 13 Auftritte, und die Lauflänge beträgt 13 Auftrittstiefen." },
      { question: "Was ist die Regel 2R + T?", answer: "Eine traditionelle Komfortrichtlinie (Schrittmaßregel): Zwei Steigungshöhen plus eine Auftrittstiefe sollten etwa 24–25 in (61–63,5 cm) ergeben, ungefähr die Länge eines bequemen Schritts. Sie ist keine Vorschrift, aber Treppen weit außerhalb dieses Bereichs fühlen sich meist unangenehm an." },
    ],
    sourcesUsedFor: [
      "Die als Voreinstellung verwendeten Grenzwerte des International Residential Code (R311.7.5): eine maximale Steigung von 7¾ in (196 mm) und eine minimale Auftrittstiefe von 10 in (254 mm).",
      "Die Komfort-Faustregel 2 × Steigung + Auftritt = 24–25 in, zurückgeführt auf die Architectural Graphic Standards.",
    ],
  },
  text: {
    unit: "Einheiten",
    units: { in: "Zoll (in)", cm: "Zentimeter (cm)" },
    rise: "Gesamthöhe (Geschoss zu Geschoss)",
    riseHelp: "Der senkrechte Abstand von der Oberkante des unteren fertigen Fußbodens bis zur Oberkante des oberen fertigen Fußbodens.",
    maxRiser: "Maximale Steigungshöhe",
    maxRiserHelp: "Die höchste Stufe, die Sie zulassen. Voreingestellt ist das Maximum von 7¾ in (196 mm) nach dem International Residential Code; Ihre örtlichen Vorschriften können abweichen.",
    targetRiser: "Gewünschte Steigungshöhe (optional)",
    targetRiserHelp: "Wenn Sie eine bevorzugte Stufenhöhe eingeben, wird die Anzahl der Steigungen so gewählt, dass sie ihr möglichst nahekommt – auch wenn dabei das obige Maximum überschritten wird.",
    tread: "Auftrittstiefe",
    treadHelp: "Die horizontale Tiefe jeder Stufe, von Vorderkante zu Vorderkante. Voreingestellt ist das Minimum von 10 in (254 mm) nach dem International Residential Code.",
    runLimit: "Verfügbare Lauflänge (optional)",
    runLimitHelp: "Der horizontale Platz, den Sie für die Treppe haben, um das Ergebnis damit abzugleichen.",
    steps: "Anzahl der Steigungen (Stufen)",
    caption: "{risers} zu je {riser}, mit {treads} zu {tread}.",
    risersCount: { zero: "{n} Steigungen", one: "{n} Steigung", two: "{n} Steigungen", few: "{n} Steigungen", many: "{n} Steigungen", other: "{n} Steigungen" },
    treadsCount: { zero: "{n} Auftritten", one: "{n} Auftritt", two: "{n} Auftritten", few: "{n} Auftritten", many: "{n} Auftritten", other: "{n} Auftritten" },
    riserHeight: "Steigungshöhe",
    treads: "Anzahl der Auftritte",
    totalRun: "Lauflänge",
    angle: "Treppenwinkel",
    stringer: "Wangenlänge (Diagonale aus Höhe und Lauflänge)",
    comfort: "Schrittmaßprüfung 2R + T",
    comfortStatus: "Verglichen mit der Faustregel von 24–25 in (61–63,5 cm)",
    comfortOptions: { low: "Unter dem Bereich: eine flache, lange Treppe", ok: "Innerhalb des Bereichs", high: "Über dem Bereich: eine steile oder tiefe Treppe" },
    notes: {
      overMax: "Die Steigungshöhe von {riser} liegt über dem eingegebenen Maximum ({max}).",
      overRun: "Die Lauflänge von {run} ist um {over} länger als der eingegebene Platz ({limit}).",
      comfort: "Die Regel 2R + T (zwei Steigungen plus ein Auftritt ergeben etwa 24–25 in) ist eine traditionelle Komfortrichtlinie, keine Vorschrift.",
      code: "Bauvorschriften unterscheiden sich je nach Land und Region und regeln mehr als die Stufenmaße: Kopfhöhe, Breite, Handläufe, Absturzsicherungen, Stufenvorderkanten, Podeste und die zulässige Abweichung zwischen den Stufen. Prüfen Sie die örtlichen Bauvorschriften und lassen Sie den Entwurf von einer qualifizierten Fachperson prüfen.",
      stringer: "Die Wangenlänge ist die gerade Diagonale aus Gesamthöhe und Lauflänge. Eine zugeschnittene Wange ist länger, sobald das Holz für die Anschlüsse oben und unten hinzukommt.",
    },
  },
};

export default de;
