import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FeedConversionRatioText } from "../text/en";

const de: CalculatorTranslation<FeedConversionRatioText> = {
  content: {
    title: "Futterverwertungsrechner (FCR)",
    shortTitle: "Futterverwertung",
    summary: "Berechnen Sie die Futterverwertung (FCR) von Nutztieren, Geflügel oder Fischen aus Futterverbrauch und Zuwachs – mit verlustbereinigter FCR und Futterkosten je Einheit Zuwachs.",
    metaTitle: "Futterverwertungsrechner (FCR) – Futteraufwand je kg",
    metaDescription: "Berechnen Sie die FCR als Futterverbrauch ÷ Lebendmassezuwachs – optional verlustbereinigt, mit Futtereffizienz, Zuwachs je Tier und Futterkosten je kg oder lb.",
    keywords: ["Futterverwertung berechnen", "FCR", "Futteraufwand", "Futtereffizienz", "Nutztiere", "Geflügel", "Aquakultur", "Futterkosten", "Zuwachs"],
    intro: [
      "Die Futterverwertung (Feed Conversion Ratio, FCR) gibt an, wie viel Futter Tiere für eine Einheit Lebendmassezuwachs benötigen. Eine FCR von 2 bedeutet 2 kg Futter je Kilogramm Zuwachs oder 2 lb je Pfund: Die Einheit kürzt sich heraus, solange Futter und Gewicht in derselben Einheit angegeben sind. Eine niedrigere FCR bedeutet, dass das Futter effizienter in Wachstum umgesetzt wird.",
      "Geben Sie das in einem Zeitraum verbrauchte Futter und die gesamte Lebendmasse der Gruppe zu Beginn und am Ende ein. Sind Tiere verendet oder wurden sie entnommen, ergänzen Sie deren Gewicht, um die verlustbereinigte FCR zu erhalten, die ihr Futter nicht als verschwendet zählt. Mit einem Futterpreis und der Tierzahl erhalten Sie außerdem die Futterkosten je Einheit Zuwachs und den Zuwachs je Tier.",
    ],
    howToUse: [
      "Wählen Sie Kilogramm oder Pfund und verwenden Sie diese Einheit für das Futter und alle Gewichte.",
      "Geben Sie den gesamten Futterverbrauch im Zeitraum und die gemeinsame Lebendmasse der Gruppe zu Beginn und am Ende ein.",
      "Wenn im Zeitraum Tiere verendet sind oder entnommen wurden, geben Sie ihr gemeinsames Gewicht ein, um die verlustbereinigte FCR zu erhalten.",
      "Geben Sie optional den Futterpreis je kg oder lb und die Zahl der Tiere ein.",
    ],
    formulas: [
      {
        title: "Lebendmassezuwachs",
        expression: "Zuwachs = Endgewicht − Anfangsgewicht + Gewicht entnommener Tiere",
        explanation: "Lassen Sie das Gewicht entnommener Tiere leer, um den einfachen Zuwachs der noch vorhandenen Tiere zu erhalten.",
      },
      {
        title: "Futterverwertung",
        expression: "FCR = Futterverbrauch ÷ Lebendmassezuwachs",
        explanation: "Futter und Gewichte haben dieselbe Einheit, daher ist das Verhältnis einheitenlos.",
      },
      {
        title: "Futtereffizienz",
        expression: "Futtereffizienz = Zuwachs ÷ Futter × 100 %",
        explanation: "Der Kehrwert der FCR, als Prozentsatz dargestellt.",
      },
      {
        title: "Futterkosten je Einheit Zuwachs",
        expression: "Kosten je kg (oder lb) Zuwachs = Futter × Preis ÷ Zuwachs = FCR × Preis",
        explanation: "Die Futterkosten für jede erzeugte Einheit Lebendmasse.",
      },
    ],
    examples: [
      {
        title: "Eine Schweinegruppe über eine Mastperiode",
        steps: ["Zuwachs: 2.850 − 900 = 1.950 kg.", "FCR: 4.200 ÷ 1.950 ≈ 2,15.", "Futtereffizienz: 1.950 ÷ 4.200 ≈ 46,4 %."],
      },
      {
        title: "Ein Masthähnchenbestand mit Verlusten und Futterpreis",
        steps: [
          "Zuwachs einschließlich entnommener Tiere: 4.510 − 1.080 + 160 = 3.590 kg.",
          "Verlustbereinigte FCR: 5.300 ÷ 3.590 ≈ 1,48 (ohne die entnommenen Tiere: 5.300 ÷ 3.430 ≈ 1,55).",
          "Futterkosten je kg Zuwachs: 5.300 × 0,21 $ ÷ 3.590 ≈ 0,31 $.",
        ],
      },
      {
        title: "In Pfund gewogene Lämmer",
        steps: ["Zuwachs: 612 − 410 = 202 lb.", "FCR: 380 ÷ 202 ≈ 1,88 lb Futter je lb Zuwachs."],
      },
    ],
    assumptions: [
      "Futter und alle Gewichte haben dieselbe Einheit, und der Futterwert ist das, was die Tiere tatsächlich gefressen haben (oder das gelieferte Futter abzüglich Rest und Verlust, wenn Sie es so erfassen).",
      "Die Gewichte sind die gesamten Lebendmassen der Gruppe. Schlacht- oder Karkassengewichte ergeben ein anderes Verhältnis.",
      "Die verlustbereinigte FCR addiert das Gewicht verendeter oder entnommener Tiere zum Zuwachs. Manche Betriebe erfassen das anders, etwa mit dem Gewicht zu Beginn oder ohne Merztiere; prüfen Sie daher die Methode, bevor Sie Werte vergleichen.",
      "Es werden keine Richtwerte angegeben, weil typische FCR-Werte je nach Tierart, Alter, Rasse, Futter und Erfassungsmethode stark schwanken.",
    ],
    faqs: [
      {
        question: "Ist eine niedrigere oder höhere FCR besser?",
        answer: "Eine niedrigere. Eine FCR von 1,5 bedeutet 1,5 Einheiten Futter je Einheit Zuwachs, 2,0 bedeutet 2 Einheiten. Bei der Futtereffizienz, dem Kehrwert, ist es umgekehrt: Höher ist besser.",
      },
      {
        question: "Warum wird das Gewicht verendeter Tiere addiert?",
        answer: "Diese Tiere haben Futter gefressen und sind gewachsen, bevor sie verendet sind oder entnommen wurden. Lässt man ihr Gewicht weg, wirkt das Futter weniger effizient, als es war, und Tierverluste fließen in die FCR ein. Beide Werte anzuzeigen hält die beiden Effekte getrennt.",
      },
      {
        question: "Spielt die Einheit eine Rolle?",
        answer: "Nein, solange Futter und Gewichte dieselbe verwenden. Die FCR ist ein Verhältnis, daher ist 2,15 kg/kg dasselbe wie 2,15 lb/lb. Nur die Futterkosten je Einheit Zuwachs hängen von der Einheit ab, weil der Preis je kg oder je lb gilt.",
      },
    ],
    sourcesUsedFor: [
      "FCR = gesamtes verfüttertes Futter ÷ Zuwachs in derselben Einheit, wobei niedrigere Werte effizienteres Wachstum bedeuten.",
      "Futterverwertung als Futtermenge für eine Einheit Zuwachs und die Futterkosten je Einheit Zuwachs.",
    ],
  },
  text: {
    unit: "Masseneinheit",
    units: { kg: "Kilogramm (kg)", lb: "Pfund (lb)" },
    feed: "Futterverbrauch",
    feedHelp: "Gesamtes von der Gruppe im Zeitraum gefressenes Futter, in der gewählten Einheit.",
    initial: "Gesamte Lebendmasse zu Beginn",
    initialHelp: "Gemeinsames Gewicht der Tiere zu Beginn des Zeitraums.",
    final: "Gesamte Lebendmasse am Ende",
    finalHelp: "Gemeinsames Gewicht der am Ende des Zeitraums noch vorhandenen Tiere.",
    removed: "Gewicht verendeter oder entnommener Tiere",
    removedHelp: "Optional. Ihr Gewicht, als sie verendet sind oder die Gruppe verlassen haben. Durch die Addition ergibt sich die verlustbereinigte FCR.",
    price: "Futterpreis je Masseneinheit",
    priceHelp: "Optional. Der Preis für 1 kg oder 1 lb Futter in der oben gewählten Masseneinheit. Wird für die Futterkosten je Einheit Zuwachs verwendet.",
    head: "Anzahl der Tiere",
    headHelp: "Optional. Wird für den Zuwachs je Tier verwendet.",
    errors: {
      noGain: "Der Lebendmassezuwachs ist null oder negativ, daher kann die Futterverwertung nicht berechnet werden. Prüfen Sie die Gewichte.",
    },
    result: "Futterverwertung (FCR)",
    resultAdjusted: "Futterverwertung (FCR), verlustbereinigt",
    caption: "Futterverbrauch ÷ Lebendmassezuwachs",
    unadjusted: "FCR ohne die entnommenen Tiere",
    unadjustedNone: "Nicht aussagekräftig (kein Zuwachs bei den verbleibenden Tieren)",
    efficiency: "Futtereffizienz (Zuwachs ÷ Futter)",
    gain: "Gesamter Lebendmassezuwachs",
    gainUnadjusted: "Zuwachs nur der verbleibenden Tiere",
    gainPerHead: "Zuwachs je Tier",
    feedCost: "Futterkosten gesamt",
    costPerGain: "Futterkosten je {unit} Zuwachs",
    notes: {
      meaning: "Eine FCR von {fcr} bedeutet {fcr} {unit} Futter je {unit} Lebendmassezuwachs. Niedriger ist effizienter.",
      adjusted: "Das Gewicht der entnommenen Tiere wird zum Zuwachs addiert, sodass ihr Futter nicht als verschwendet zählt. Der unbereinigte Wert wird zum Vergleich angezeigt.",
      general: "Typische Werte schwanken stark mit Tierart, Alter, Rasse, Futter und der Art, wie Futter und Gewichte gemessen werden. Vergleichen Sie FCR-Werte daher nur, wenn sie auf dieselbe Weise ermittelt wurden.",
    },
  },
};

export default de;
