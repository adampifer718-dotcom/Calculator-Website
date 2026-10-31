import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AbvText } from "../text/en";

const de: CalculatorTranslation<AbvText> = {
  content: {
    title: "Alkoholgehaltrechner (ABV)",
    shortTitle: "Alkohol aus Stammwürze",
    summary: "Schätzen Sie den Alkoholgehalt von selbst gebrautem Bier, Wein oder Cidre aus Stammwürze und Restextrakt, als spezifisches Gewicht oder in Grad Plato.",
    metaTitle: "Alkoholgehaltrechner (ABV) – Vol.-% aus OG und FG",
    metaDescription: "Schätzen Sie den Alkoholgehalt Ihres Hausgebrauten aus Stammwürze und Restextrakt (SG oder °P) – mit zwei Formeln, Gew.-% und scheinbarem Vergärungsgrad.",
    keywords: ["Alkoholgehalt berechnen", "ABV Rechner", "Vol.-% Bier", "Stammwürze", "Restextrakt", "Bierbrauen Alkohol", "Grad Plato", "scheinbarer Vergärungsgrad"],
    intro: [
      "Hefe wandelt Zucker in Alkohol und Kohlendioxid um, und weil Alkohol leichter als Wasser ist, sinkt die Dichte von Bier, Wein oder Cidre während der Gärung. Hobbybrauer messen diese Dichte vor und nach der Gärung mit einer Bierspindel (Aräometer) oder einem Refraktometer, als Stammwürze (Original Gravity, OG) und als Restextrakt (Final Gravity, FG).",
      "Geben Sie die beiden Messwerte als spezifisches Gewicht oder in Grad Plato ein, um den Alkoholgehalt in Volumenprozent zu schätzen. Der Rechner zeigt die gängige Standardformel, eine Alternativformel, die viele Brauer bei starken Bieren bevorzugen, einen ungefähren Alkoholgehalt in Gewichtsprozent und den scheinbaren Vergärungsgrad.",
    ],
    howToUse: [
      "Wählen Sie, ob Ihre Messwerte als spezifisches Gewicht (etwa 1,050) oder in Grad Plato (etwa 12 °P) vorliegen.",
      "Geben Sie die Stammwürze ein, gemessen vor der Zugabe der Hefe.",
      "Geben Sie den Restextrakt ein, gemessen nach Abschluss der Gärung.",
      "Lesen Sie den Alkoholgehalt nach der Standardformel ab und vergleichen Sie ihn mit der Alternativformel darunter.",
    ],
    formulas: [
      {
        title: "Standardformel",
        expression: "ABV = (OG − FG) × 131,25",
        explanation: "Die am weitesten verbreitete Schätzung beim Hobbybrauen. Bei OG 1,050 und FG 1,010 ergibt sie 0,040 × 131,25 = 5,25 %.",
      },
      {
        title: "Alternativformel",
        expression: "ABV = 76,08 × (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794",
        explanation: "Wird Ritchie Products zugeschrieben (Zymurgy, 1995). Bei starken Bieren ergibt sie höhere Werte als die Standardformel.",
      },
      {
        title: "Plato in spezifisches Gewicht",
        expression: "SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1)",
        explanation: "Wird verwendet, wenn die Messwerte in Grad Plato vorliegen. 12 °P sind etwa 1,0484.",
      },
      {
        title: "Alkohol in Gewichtsprozent und Vergärungsgrad",
        expression: "ABW ≈ ABV × 0,789 ÷ FG;  Vergärungsgrad = (OG − FG) ÷ (OG − 1) × 100",
        explanation: "0,789 ist die Dichte von Ethanol im Verhältnis zu Wasser bei 20 °C. Der Vergärungsgrad ist scheinbar, weil Alkohol den Spindelwert unter den tatsächlich verbleibenden Extrakt drückt.",
      },
    ],
    examples: [
      {
        title: "Ein Pale Ale von 1,050 auf 1,010",
        steps: ["Abfall = 1,050 − 1,010 = 0,040", "ABV = 0,040 × 131,25 = 5,25 %", "Scheinbarer Vergärungsgrad = 0,040 ÷ 0,050 = 80 %"],
      },
      {
        title: "Ein Starkbier von 1,092 auf 1,021",
        steps: [
          "Standard: (1,092 − 1,021) × 131,25 ≈ 9,32 %",
          "Alternativ: 76,08 × 0,071 ÷ (1,775 − 1,092) × 1,021 ÷ 0,794 ≈ 10,17 %",
          "Bei dieser Stärke unterscheiden sich die beiden Formeln um fast einen Prozentpunkt",
        ],
      },
      {
        title: "Ein Lagerbier in Plato gemessen: 12 °P auf 2,5 °P",
        steps: ["OG = 1 + 12 ÷ (258,6 − (12 ÷ 258,2) × 227,1) ≈ 1,04838", "FG = 1 + 2,5 ÷ (258,6 − (2,5 ÷ 258,2) × 227,1) ≈ 1,00975", "ABV = (1,04838 − 1,00975) × 131,25 ≈ 5,07 %"],
      },
    ],
    assumptions: [
      "Dies ist nur eine Schätzung für Hobbybrauer. Sie eignet sich nicht für die gesetzliche oder gewerbliche Kennzeichnung, die ein kalibriertes Laborverfahren erfordert.",
      "Es wird keine Temperaturkorrektur für die Spindel angewendet. Korrigieren Sie Ihre Messwerte zuerst auf die Kalibriertemperatur der Spindel.",
      "Die Messwerte gelten als echte spezifische Gewichte. Ein Refraktometerwert, der nach Gärbeginn gemessen wurde, ist durch Alkohol verfälscht und braucht eine eigene Korrektur.",
      "Zucker, der beim Abfüllen oder nach der Messung der Stammwürze zugegeben wurde, ist nicht berücksichtigt.",
    ],
    faqs: [
      {
        question: "Welche Formel soll ich verwenden?",
        answer: "Für die meisten Biere zwischen etwa 1,040 und 1,060 liefern beide sehr ähnliche Ergebnisse. Bei stärkeren Bieren gehen sie auseinander, und viele Brauer bevorzugen dann die Alternativformel. Keine von beiden ersetzt eine Labormessung.",
      },
      {
        question: "Was ist der Unterschied zwischen Vol.-% und Gew.-%?",
        answer: "ABV (Vol.-%) ist das Volumen des Alkohols in Prozent des Getränkevolumens. ABW (Gew.-%) ist sein Gewicht in Prozent des Getränkegewichts. Alkohol ist leichter als Wasser, daher ist ABW niedriger, bei einem typischen Bier etwa 80 % des ABV.",
      },
      {
        question: "Was ist der scheinbare Vergärungsgrad?",
        answer: "Es ist der Anteil der Stammwürze über 1,000, der während der Gärung verschwunden ist. Er heißt scheinbar, weil Alkohol eine geringere Dichte als Wasser hat und den Endwert unter den tatsächlich verbleibenden Zuckergehalt drückt.",
      },
    ],
    sourcesUsedFor: [
      "Die Standardformel ABV = (OG − FG) × 131,25, die Alternativformel 76,08 (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794 und das Rechenbeispiel OG 1,092, FG 1,021.",
      "Die Umrechnung SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1).",
      "Die Herkunft der Alternativformel (Ritchie Products, Zymurgy 1995).",
      "Die Umrechnung zwischen ABV und ABW mit dem spezifischen Gewicht des Getränks und der Dichte von Ethanol (etwa 0,789).",
    ],
  },
  text: {
    scale: "Messskala",
    scales: { sg: "Spezifisches Gewicht (SG)", plato: "Grad Plato (°P)" },
    og: "Stammwürze (OG)",
    ogHelp: "Das spezifische Gewicht vor der Gärung, zum Beispiel 1,050. Zulässiger Bereich 0,980 bis 1,200.",
    fg: "Restextrakt (FG)",
    fgHelp: "Das spezifische Gewicht nach der Gärung, zum Beispiel 1,010.",
    ogPlato: "Stammwürze",
    ogPlatoHelp: "Die Stammwürze in Grad Plato, zum Beispiel 12.",
    fgPlato: "Scheinbarer Restextrakt",
    fgPlatoHelp: "Der abschließende Spindelwert in Grad Plato, zum Beispiel 2,5. Bei sehr trockenen Bieren kann er leicht unter 0 liegen.",
    errors: {
      fgAboveOg: "Der Restextrakt kann nicht höher sein als die Stammwürze.",
      sgRange: "Das entspricht einem spezifischen Gewicht von {sg}, außerhalb des zulässigen Bereichs von 0,980 bis 1,200.",
    },
    abv: "Alkohol in Volumenprozent (Standardformel)",
    caption: "OG {og} − FG {fg} = {drop} Dichtepunkte.",
    abvAlt: "Alkohol in Volumenprozent (Alternativformel)",
    abw: "Alkohol in Gewichtsprozent (ungefähr)",
    attenuation: "Scheinbarer Vergärungsgrad",
    ogSg: "Stammwürze als SG",
    fgSg: "Restextrakt als SG",
    notes: {
      estimate: "Dies ist eine Schätzung für Hobbybrauer aus Spindelwerten, kein Wert für die gesetzliche Kennzeichnung. Es wird keine Temperaturkorrektur für die Spindel angewendet.",
      high: "Bei starken Würzen liefern die beiden Formeln deutlich unterschiedliche Ergebnisse. Viele Brauer bevorzugen bei hoher Stammwürze die Alternativformel.",
      noAttenuation: "Für den scheinbaren Vergärungsgrad muss die Stammwürze über 1,000 liegen.",
    },
  },
};

export default de;
