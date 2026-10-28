import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DueDateText } from "../text/en";

const weeks = { zero: "{n} Wochen", one: "{n} Woche", two: "{n} Wochen", few: "{n} Wochen", many: "{n} Wochen", other: "{n} Wochen" };
const days = { zero: "{n} Tage", one: "{n} Tag", two: "{n} Tage", few: "{n} Tage", many: "{n} Tage", other: "{n} Tage" };

const de: CalculatorTranslation<DueDateText> = {
  content: {
    title: "Geburtsterminrechner",
    shortTitle: "Geburtstermin",
    summary: "Schätzen Sie den Geburtstermin aus der letzten Periode, dem Empfängnisdatum oder einem IVF-Transfer – mit der heutigen Schwangerschaftswoche und den Trimesterdaten.",
    metaTitle: "Geburtsterminrechner – nach Periode, Empfängnis oder IVF",
    metaDescription: "Schätzen Sie Ihren Geburtstermin aus dem ersten Tag der letzten Periode, der Empfängnis oder einem IVF-Embryotransfer, mit Schwangerschaftswoche und Trimestern.",
    keywords: ["Geburtstermin berechnen", "Entbindungstermin", "Schwangerschaftsrechner", "Naegele-Regel", "Schwangerschaftswoche berechnen", "SSW Rechner", "IVF Geburtstermin"],
    intro: [
      "Die meisten Schwangerschaften werden ab dem ersten Tag der letzten Menstruation gerechnet, obwohl die Empfängnis meist etwa zwei Wochen später stattfindet. Eine typische Schwangerschaft dauert ab diesem Tag etwa 40 Wochen oder 280 Tage.",
      "Dieser Rechner schätzt den Geburtstermin aus der letzten Periode (angepasst an Ihre Zykluslänge), aus einem bekannten Empfängnisdatum oder aus einem IVF-Embryotransfer. Außerdem zeigt er, in welcher Schwangerschaftswoche Sie an einem gewählten Datum sind, das Trimester und die Daten, an denen jedes Trimester endet.",
    ],
    howToUse: [
      "Wählen Sie die Berechnungsgrundlage: die letzte Periode, die Empfängnis oder einen IVF-Transfer.",
      "Geben Sie das Datum ein. Bei der letzten Periode geben Sie zusätzlich Ihre übliche Zykluslänge ein; bei IVF wählen Sie das Alter des Embryos beim Transfer.",
      "Behalten Sie das heutige Datum bei oder wählen Sie ein anderes, um das Schwangerschaftsalter an diesem Tag zu sehen.",
      "Lesen Sie den geschätzten Geburtstermin, das Schwangerschaftsalter, das Trimester und die Trimesterdaten ab.",
    ],
    formulas: [
      {
        title: "Aus der letzten Periode (Naegele-Regel, an den Zyklus angepasst)",
        expression: "Geburtstermin = erster Tag der letzten Periode + 280 Tage + (Zykluslänge − 28)",
        explanation: "Bei einem 28-Tage-Zyklus sind das genau 40 Wochen. Längere Zyklen verschieben den Eisprung und damit den Geburtstermin nach hinten.",
      },
      {
        title: "Aus der Empfängnis",
        expression: "Geburtstermin = Empfängnisdatum + 266 Tage",
        explanation: "266 Tage sind 38 Wochen, die übliche Zeit von der Befruchtung bis zur Geburt.",
      },
      {
        title: "Aus einem IVF-Transfer",
        expression: "Geburtstermin = Transferdatum + 266 Tage − Alter des Embryos (3 oder 5 Tage)",
        explanation: "Der Embryo war beim Transfer bereits 3 oder 5 Tage nach der Befruchtung.",
      },
      {
        title: "Schwangerschaftsalter",
        expression: "Schwangerschaftsalter = Datum − (Geburtstermin − 280 Tage), in Wochen und Tagen",
        explanation: "Gezählt ab dem Tag, der der erste Tag der letzten Periode gewesen wäre – die übliche klinische Konvention.",
      },
    ],
    examples: [
      {
        title: "Letzte Periode ab 1. Juni 2026, 28-Tage-Zyklus",
        steps: ["1. Juni 2026 + 280 Tage = 8. März 2027", "Am 24. Oktober 2026: 145 Tage = 20 Wochen, 5 Tage", "Das liegt im zweiten Trimester (14 Wochen 0 Tage bis 27 Wochen 6 Tage)"],
      },
      {
        title: "Letzte Periode ab 10. März 2026, 32-Tage-Zyklus",
        steps: ["10. März 2026 + 280 + (32 − 28) = 284 Tage = 19. Dezember 2026", "Die Zählung beginnt dann am 14. März 2026 (Geburtstermin − 280 Tage)", "Am 24. Oktober 2026: 224 Tage = 32 Wochen, 0 Tage, drittes Trimester"],
      },
      {
        title: "Embryo am Tag 5, übertragen am 20. Juni 2026",
        steps: ["266 − 5 = 261 Tage", "20. Juni 2026 + 261 Tage = 8. März 2027", "Das ist derselbe Termin wie bei einer letzten Periode ab dem 1. Juni 2026"],
      },
    ],
    assumptions: [
      "Der Geburtstermin ist eine Schätzung, keine medizinische Beratung, und dieser Rechner wurde noch nicht fachlich geprüft. Nur ein kleiner Teil der Babys kommt genau am errechneten Termin zur Welt; die meisten werden innerhalb von etwa zwei Wochen um diesen Termin geboren.",
      "Ein Ultraschall zur Datierung in der Frühschwangerschaft ist genauer als eine Schätzung aus Daten und kann den Geburtstermin ändern. Ihre Hebamme, Ihre Ärztin oder Ihr Arzt legt den Termin fest, der für Ihre Betreuung gilt.",
      "Die Zyklusanpassung setzt voraus, dass der Eisprung etwa 14 Tage vor der nächsten Periode stattfindet. Unregelmäßige Zyklen, kürzlich abgesetzte hormonelle Verhütung oder unsichere Daten werden nicht berücksichtigt.",
      "Als Trimester gelten: bis 13 Wochen 6 Tage, 14 Wochen 0 Tage bis 27 Wochen 6 Tage und ab 28 Wochen 0 Tagen. Manche Quellen ziehen die Grenzen eine Woche früher oder später.",
    ],
    faqs: [
      {
        question: "Warum wird die Schwangerschaft ab der letzten Periode gezählt und nicht ab der Empfängnis?",
        answer: "Der erste Tag der letzten Periode ist meist bekannt, der Tag der Empfängnis dagegen nicht. Die Zählung ab diesem Tag ist eine lang etablierte Konvention; bei der Empfängnis ist eine Schwangerschaft daher bereits etwa 2 Wochen alt.",
      },
      {
        question: "Wie verändert die Zykluslänge den Geburtstermin?",
        answer: "In einem 28-Tage-Zyklus liegt der Eisprung etwa am Tag 14. In einem längeren Zyklus liegt er später, sodass sich der Geburtstermin um dieselbe Zahl von Tagen nach hinten verschiebt; ein kürzerer Zyklus verschiebt ihn nach vorn.",
      },
      {
        question: "Kann sich der Geburtstermin ändern?",
        answer: "Ja. Ein früher Ultraschall kann einen anderen Termin ergeben, und Ihre Ärztin, Ihr Arzt oder Ihre Hebamme passt ihn auf dieser Grundlage gegebenenfalls an, meist nur einmal.",
      },
    ],
    sourcesUsedFor: [
      "Dass ein Ultraschall im ersten Trimester die genaueste Methode zur Bestätigung des Geburtstermins ist und IVF-Schwangerschaften ab dem Transfer datiert werden.",
      "Zählung von 280 Tagen (40 Wochen) ab dem ersten Tag der letzten Periode, Anpassung an Zyklen länger oder kürzer als 28 Tage und dass ein Datierungsultraschall einen genaueren Termin liefert.",
    ],
  },
  text: {
    method: "Berechnen aus",
    methods: { lmp: "Erster Tag der letzten Periode", conception: "Empfängnisdatum", ivf: "Datum des IVF-Embryotransfers" },
    lmp: "Erster Tag Ihrer letzten Menstruation",
    cycle: "Durchschnittliche Zykluslänge",
    cycleHelp: "Tage vom ersten Tag einer Periode bis zum ersten Tag der nächsten. Nehmen Sie 28, wenn Sie unsicher sind.",
    daysSuffix: "Tage",
    conception: "Empfängnisdatum",
    conceptionHelp: "Meist nur ungefähr bekannt, zum Beispiel durch Zyklusbeobachtung.",
    transfer: "Datum des Embryotransfers",
    embryoAge: "Alter des Embryos beim Transfer",
    embryoAges: { "3": "Embryo am Tag 3", "5": "Embryo am Tag 5 (Blastozyste)" },
    asOf: "Schwangerschaftsalter am",
    asOfHelp: "Standardmäßig heute. Ändern Sie das Datum, um zu sehen, wie weit die Schwangerschaft an einem anderen Tag ist.",
    units: { weeks, days },
    weeksDays: "{weeks}, {days}",
    dueDate: "Errechneter Geburtstermin",
    caption: "{days} Tage nach {from}.",
    captionFrom: {
      lmp: "dem ersten Tag der letzten Periode, angepasst an die Zykluslänge",
      conception: "dem Empfängnisdatum",
      ivf: "dem Transferdatum",
    },
    gestationalAge: "Schwangerschaftsalter",
    trimester: "Trimester",
    trimesters: { first: "Erstes Trimester", second: "Zweites Trimester", third: "Drittes Trimester" },
    notStarted: "An diesem Datum noch nicht begonnen",
    firstEnds: "Ende des ersten Trimesters (13 Wochen 6 Tage)",
    secondEnds: "Ende des zweiten Trimesters (27 Wochen 6 Tage)",
    thirdStarts: "Beginn des dritten Trimesters (28 Wochen 0 Tage)",
    daysToDue: "Tage bis zum Geburtstermin",
    startDate: "Beginn der Schwangerschaftszählung (0 Wochen 0 Tage)",
    notes: {
      estimate: "Nur eine Schätzung: Nur ein kleiner Teil der Babys kommt am errechneten Termin zur Welt, die meisten innerhalb von etwa zwei Wochen davor oder danach. Ein Datierungsultraschall kann den Termin ändern.",
      beforeStart: "Das gewählte Datum liegt vor dem Beginn der Schwangerschaftszählung, daher gibt es noch kein Schwangerschaftsalter.",
      pastDue: "Das gewählte Datum liegt am oder nach dem errechneten Geburtstermin.",
      veryLate: "Das gewählte Datum liegt mehr als 42 Wochen nach Beginn der Schwangerschaft. Prüfen Sie, ob die Daten stimmen.",
      clinician: "Das Schwangerschaftsalter wird ab dem ersten Tag der letzten Periode gezählt, auch wenn das Datum aus der Empfängnis oder dem Transfer stammt. Den offiziellen Geburtstermin legt Ihre Hebamme, Ihre Ärztin oder Ihr Arzt fest.",
    },
    errors: { range: "Dieses Datum ergibt einen Geburtstermin außerhalb des unterstützten Bereichs." },
  },
};

export default de;
