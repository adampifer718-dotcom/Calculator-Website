import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CaloriesBurnedText } from "../text/en";

const de: CalculatorTranslation<CaloriesBurnedText> = {
  content: {
    title: "Kalorienverbrauchsrechner",
    shortTitle: "Kalorienverbrauch",
    summary: "Schätzen Sie die beim Gehen, Laufen, Radfahren, Schwimmen und bei anderen Aktivitäten verbrauchten Kalorien aus MET-Werten, Körpergewicht und Dauer.",
    metaTitle: "Kalorienverbrauchsrechner – MET-Methode nach Aktivität",
    metaDescription: "Schätzen Sie den Kalorienverbrauch beim Gehen, Laufen, Radfahren, Schwimmen und mehr aus veröffentlichten MET-Werten, Ihrem Gewicht und der Dauer.",
    keywords: ["Kalorienverbrauch berechnen", "Kalorien beim Sport", "MET-Wert", "metabolisches Äquivalent", "Energieverbrauch", "Kalorien pro Stunde", "Kalorienverbrauch Joggen"],
    intro: [
      "Ein MET (metabolisches Äquivalent) vergleicht den Energieaufwand einer Aktivität mit ruhigem Sitzen. Zügiges Gehen hat etwa 4 MET und verbraucht damit rund viermal so viel Energie wie Ruhe.",
      "Dieser Rechner multipliziert den MET-Wert einer Aktivität mit Ihrem Körpergewicht und der Dauer, um die verbrauchten Kalorien zu schätzen. Wählen Sie eine der gängigen Aktivitäten mit Werten aus dem Compendium of Physical Activities oder geben Sie einen eigenen MET-Wert ein.",
    ],
    howToUse: [
      "Wählen Sie eine Aktivität oder einen eigenen MET-Wert und geben Sie ihn ein.",
      "Geben Sie Ihr Körpergewicht in Kilogramm oder Pfund ein.",
      "Geben Sie die Dauer der Aktivität in Stunden und Minuten ein.",
      "Lesen Sie die geschätzten verbrauchten Kalorien, die Kilojoule und den Stundenwert ab.",
    ],
    formulas: [
      {
        title: "MET-Methode",
        expression: "kcal = MET × Gewicht (kg) × Zeit (h)",
        explanation: "Beruht auf der Konvention, dass 1 MET etwa 1 kcal pro Kilogramm Körpergewicht und Stunde entspricht.",
      },
      {
        title: "Über dem Ruheumsatz",
        expression: "Netto-kcal = (MET − 1) × Gewicht (kg) × Zeit (h)",
        explanation: "Lässt die Energie weg, die Sie in Ruhe ohnehin verbraucht hätten.",
      },
      { title: "Einheiten", expression: "1 lb = 0,45359237 kg · 1 kcal = 4,184 kJ", explanation: "Exakte Umrechnungsfaktoren." },
    ],
    examples: [
      {
        title: "Zügiges Gehen über 45 Minuten bei 70 kg",
        steps: ["Zügiges Gehen (3,5 mph) = 4,3 MET", "4,3 × 70 × 0,75 = 225,75 ≈ 226 kcal", "In Kilojoule: 225,75 × 4,184 ≈ 945 kJ"],
      },
      {
        title: "Laufen mit 6 mph über 1 h 30 min bei 180 lb",
        steps: ["180 lb × 0,45359237 = 81,65 kg", "9,8 × 81,65 × 1,5 ≈ 1.200 kcal", "Das sind etwa 800 kcal pro Stunde"],
      },
      {
        title: "Eigene Aktivität mit 6,5 MET über 2 Stunden bei 55 kg",
        steps: ["6,5 × 55 × 2 = 715 kcal", "Über dem Ruheumsatz: (6,5 − 1) × 55 × 2 = 605 kcal"],
      },
    ],
    assumptions: [
      "Das Ergebnis ist eine Schätzung, keine medizinische Beratung, und dieser Rechner wurde noch nicht fachlich geprüft. Sprechen Sie mit einer Ärztin oder einem Arzt, bevor Sie ein neues Trainingsprogramm beginnen.",
      "MET-Werte sind Durchschnittswerte für Erwachsene. Fitness, Technik, Gelände, Körperzusammensetzung und Temperatur verändern den tatsächlichen Energieverbrauch, daher fallen die individuellen Ergebnisse unterschiedlich aus.",
      "Die Berechnung beruht auf der Konvention 1 MET ≈ 1 kcal pro kg und Stunde. Der gemessene Ruheumsatz unterscheidet sich von Mensch zu Mensch, was die Unsicherheit erhöht.",
      "Die MET-Werte stammen aus dem Compendium of Physical Activities von 2011. Die Aktualisierung von 2024 hat einige Aktivitäten geändert, daher können Werte aus anderen Tools leicht abweichen.",
    ],
    faqs: [
      {
        question: "Was ist ein MET?",
        answer: "Ein MET gibt den Energieaufwand einer Aktivität im Verhältnis zum ruhigen Sitzen an. Eine Aktivität mit 6 MET verbraucht etwa sechsmal so viel Energie wie Ruhe.",
      },
      {
        question: "Warum spielt das Körpergewicht eine Rolle?",
        answer: "Einen schwereren Körper zu bewegen, kostet mehr Energie. Dieselbe Aktivität über dieselbe Zeit verbrennt bei einem schwereren Menschen daher mehr Kalorien.",
      },
      {
        question: "Sind die Werte von Fitnesstrackern genauer?",
        answer: "Tracker nutzen zusätzlich die Herzfrequenz, was helfen kann, doch auch sie liefern Schätzungen. Beide Methoden eignen sich am besten, um Aktivitäten zu vergleichen, und nicht als exakte Werte.",
      },
    ],
    sourcesUsedFor: [
      "Die MET-Werte der aufgeführten Aktivitäten und die Konvention, dass 1 MET etwa 1 kcal pro kg und Stunde entspricht.",
      "Hintergrund zur aktuellen Ausgabe des Compendiums, die einige MET-Werte überarbeitet hat; den neuesten Wert einer Aktivität finden Sie auf pacompendium.com.",
    ],
  },
  text: {
    activity: "Aktivität",
    activityHelp: "MET-Werte sind Durchschnittswerte für Erwachsene aus dem Compendium of Physical Activities.",
    activities: {
      walking: "Gehen, 3,0 mph (4,8 km/h), eben",
      brisk: "Zügiges Gehen, 3,5 mph (5,6 km/h)",
      hiking: "Wandern, querfeldein",
      run5: "Laufen, 5 mph (8 km/h, 12 min/Meile)",
      run6: "Laufen, 6 mph (9,7 km/h, 10 min/Meile)",
      cycleLeisure: "Radfahren, gemütlich, unter 10 mph (16 km/h)",
      cycleModerate: "Radfahren, 12–13,9 mph (19–22 km/h), mäßig",
      swimModerate: "Bahnenschwimmen, Kraul, leichte oder mäßige Anstrengung",
      swimVigorous: "Bahnenschwimmen, Kraul, schnell, hohe Anstrengung",
      weightsLight: "Krafttraining, leichte oder mäßige Anstrengung",
      weightsVigorous: "Krafttraining, hohe Anstrengung",
      yoga: "Yoga, Hatha",
      tennis: "Tennis, allgemein",
      soccer: "Fußball, locker",
      jumpRope: "Seilspringen, mäßiges Tempo",
      gardening: "Gartenarbeit, allgemein",
      custom: "Eigener MET-Wert",
    },
    customMet: "MET-Wert",
    customMetHelp: "Metabolisches Äquivalent der Aktivität: 1 entspricht ruhigem Sitzen, zügiges Gehen etwa 4.",
    weight: "Körpergewicht",
    weightRange: "Geben Sie ein Körpergewicht zwischen 20 und 700 kg ein (etwa 45 bis 1.540 lb).",
    weightUnit: "Gewichtseinheit",
    weightUnits: { kg: "Kilogramm (kg)", lb: "Pfund (lb)" },
    hours: "Stunden",
    minutes: "Minuten",
    timeZero: "Geben Sie eine Dauer über 0 ein.",
    timeMax: "Geben Sie eine Dauer von höchstens 24 Stunden ein.",
    calories: "Verbrauchte Kalorien",
    caption: "{met} MET × {kg} kg × {hours} h.",
    kj: "In Kilojoule",
    perHour: "Kalorien pro Stunde",
    metUsed: "Verwendeter MET-Wert",
    aboveRest: "Über dem Ruheumsatz (MET − 1)",
    kcal: "kcal",
    kcalHour: "kcal/h",
    notes: {
      estimate: "MET-Werte sind Durchschnittswerte für Erwachsene; Ihr eigener Energieverbrauch hängt von Fitness, Technik, Körperzusammensetzung und Bedingungen ab und kann deutlich abweichen.",
      gross: "Die Summe enthält die Energie, die Sie in derselben Zeit auch in Ruhe verbraucht hätten. Der Wert „über dem Ruheumsatz“ lässt sie weg.",
    },
  },
};

export default de;
