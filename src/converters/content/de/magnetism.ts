import type { ConverterContent } from "../../types";

const CGS_NOTE =
  "CGS-Einheiten (Gilbert, Oersted, Maxwell, Gauß) werden mit ihren definierenden Entsprechungen zu SI-Einheiten umgerechnet; diese enthalten 4π, weil das CGS-System nicht rationalisiert ist.";

/** Magnetism converters in this language, keyed by converter id. */
export const magnetismContent: Record<string, ConverterContent> = {
  "magnetomotive-force": {
    title: "Umrechner für magnetische Durchflutung",
    shortTitle: "Magnetische Durchflutung",
    summary: "Rechnen Sie die magnetische Durchflutung (magnetomotorische Kraft) zwischen Amperewindungen, Ampere, Gilbert und Abampere-Windungen um.",
    metaTitle: "Umrechner für magnetische Durchflutung – A, At, Gb",
    metaDescription: "Rechnen Sie magnetische Durchflutung zwischen Amperewindungen, Ampere, Kiloamperewindungen, Gilbert und Abampere-Windungen für Spulen und Magnetkreise um.",
    keywords: ["magnetische Durchflutung", "Amperewindung", "Gilbert", "magnetomotorische Kraft", "Gilbert in Amperewindungen", "Magnetkreis", "Spule"],
    intro: [
      "Die magnetische Durchflutung (magnetomotorische Kraft, MMK) treibt den magnetischen Fluss durch einen Magnetkreis, ähnlich wie eine Spannung den Strom treibt. Bei einer Spule ist sie einfach der Strom mal der Windungszahl: Eine Spule mit 200 Windungen und 2 A liefert 400 Amperewindungen.",
      "Ältere Fachliteratur und manche Magnetdaten verwenden die CGS-Einheit Gilbert. Ein Gilbert sind 10/(4π), etwa 0,796, Amperewindungen.",
    ],
    formula: {
      expression: "F = N × I\n1 Gb = 10 ÷ (4π) At ≈ 0,795775 At",
      explanation: "N ist die Windungszahl und I der Strom; Windungen haben keine Einheit, daher ist die SI-Einheit der Durchflutung das Ampere.",
    },
    assumptions: [
      "Amperewindungen und Ampere sind dieselbe SI-Einheit; der Name Amperewindung erinnert nur daran, dass Windungen gezählt wurden.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Wie viele Amperewindungen sind ein Gilbert?", answer: "Etwa 0,795775 At. Umgekehrt ist 1 At etwa 1,256637 Gb (4π/10)." },
      { question: "Wie groß ist die Durchflutung einer Spule?", answer: "Multiplizieren Sie den Strom mit der Windungszahl. 500 Windungen mit 0,3 A ergeben 150 Amperewindungen." },
      { question: "Wie hängt die Durchflutung mit der Feldstärke zusammen?", answer: "Die Feldstärke H ist die Durchflutung pro Längeneinheit des magnetischen Pfads; 150 At, verteilt auf 0,1 m Kern, ergeben also 1.500 A/m." },
    ],
    units: {
      a: "Ampere",
      ma: "Milliampere",
      ka: "Kiloampere",
      at: "Amperewindungen",
      mat: "Milliamperewindungen",
      kat: "Kiloamperewindungen",
      gilbert: "Gilbert",
      abat: "Abampere-Windungen",
    },
    sourcesUsedFor: ["Umrechnungsfaktoren für Gilbert und Abampere.", "Das Ampere als SI-Einheit der magnetischen Durchflutung."],
  },
  "magnetic-field-strength": {
    title: "Umrechner für magnetische Feldstärke",
    shortTitle: "Magnetische Feldstärke",
    summary: "Rechnen Sie die magnetische Feldstärke (H) zwischen Ampere pro Meter, Amperewindungen pro Zoll oder Zentimeter und Oersted um.",
    metaTitle: "Umrechner für magnetische Feldstärke – A/m, Oe, kOe",
    metaDescription: "Rechnen Sie die Feldstärke H zwischen A/m, kA/m, A/cm, Amperewindungen pro Zoll, Oersted und Kilo-Oersted um. Gauß und Tesla: siehe Flussdichte.",
    keywords: ["magnetische Feldstärke", "Oersted in A/m", "A/m in Oersted", "kOe in kA/m", "H-Feld", "Koerzitivfeldstärke", "Amperewindungen pro Zoll"],
    intro: [
      "Die magnetische Feldstärke H beschreibt die magnetisierende Wirkung von Strömen. Sie ist das, was eine Spule pro Meter ihrer Länge erzeugt, und Magnethersteller geben damit die Koerzitivfeldstärke an, zum Beispiel etwa 950 kA/m (etwa 12 kOe) bei einem Neodym-Magneten.",
      "Die SI-Einheit ist das Ampere pro Meter. Die CGS-Einheit ist das Oersted, und 1 Oe sind 1000/(4π), etwa 79,58, A/m.",
    ],
    formula: {
      expression: "H = N × I ÷ l\n1 Oe = 1000 ÷ (4π) A/m ≈ 79,5775 A/m",
      explanation: "N × I ist die Amperewindungszahl der Spule und l die Länge des magnetischen Pfads in Metern.",
    },
    assumptions: [
      "H (Feldstärke) und B (Flussdichte) sind verschiedene Größen, daher werden Gauß und Tesla hier nicht angeboten. Nur im Vakuum gehört in CGS-Einheiten zu 1 Oe von H genau 1 G von B, weshalb beide oft verwechselt werden; in Eisen oder in einem Magneten hängt das Verhältnis B/H vom Material ab.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Wie viel A/m ist ein Oersted?", answer: "Etwa 79,5775 A/m. Umgekehrt ist 1 kA/m etwa 12,566 Oe (4π)." },
      { question: "Ist ein Oersted dasselbe wie ein Gauß?", answer: "Nein. Das Oersted misst die Feldstärke H und das Gauß die Flussdichte B. Nur im Vakuum (und näherungsweise in Luft) erzeugt ein Feld von 1 Oe in CGS-Einheiten eine Flussdichte von 1 G. Für Gauß und Tesla verwenden Sie den Umrechner für magnetische Flussdichte." },
      { question: "Wie rechne ich kOe in kA/m für die Koerzitivfeldstärke von Magneten um?", answer: "Multiplizieren Sie mit etwa 79,58. Eine Koerzitivfeldstärke von 12 kOe sind etwa 955 kA/m." },
    ],
    units: {
      a_m: "Ampere pro Meter",
      ma_m: "Milliampere pro Meter",
      ka_m: "Kiloampere pro Meter",
      a_cm: "Ampere pro Zentimeter",
      a_mm: "Ampere pro Millimeter",
      at_m: "Amperewindungen pro Meter",
      at_cm: "Amperewindungen pro Zentimeter",
      at_in: "Amperewindungen pro Zoll",
      oe: "Oersted",
      koe: "Kilo-Oersted",
      moe: "Milli-Oersted",
      gb_cm: "Gilbert pro Zentimeter",
    },
    sourcesUsedFor: ["Umrechnungsfaktor für das Oersted.", "Das Ampere pro Meter als SI-Einheit der magnetischen Feldstärke."],
  },
  "magnetic-flux": {
    title: "Umrechner für magnetischen Fluss",
    shortTitle: "Magnetischer Fluss",
    summary: "Rechnen Sie magnetischen Fluss zwischen Weber, Milliweber, Mikroweber, Voltsekunden, Maxwell und Lines (Feldlinien) um.",
    metaTitle: "Umrechner für magnetischen Fluss – Wb, mWb, µWb, Mx",
    metaDescription: "Rechnen Sie magnetischen Fluss zwischen Weber, Milliweber, Mikroweber, Nanoweber, Voltsekunden, Tesla-Quadratmetern, Maxwell, Kilomaxwell und Lines um.",
    keywords: ["magnetischer Fluss", "Weber", "Maxwell", "Weber in Maxwell", "Voltsekunde", "verketteter Fluss", "Fluxmeter"],
    intro: [
      "Der magnetische Fluss ist die gesamte Menge des Magnetfelds, die durch eine Fläche tritt: Flussdichte mal Fläche. Ihn messen Fluxmeter und Suchspulen, und er ändert sich, wenn ein Transformator oder Generator eine Spannung induziert.",
      "Die SI-Einheit ist das Weber, das einer Voltsekunde entspricht. Die CGS-Einheit ist das Maxwell, auch Line genannt, und 1 Wb sind genau 100.000.000 Mx.",
    ],
    formula: {
      expression: "Φ = B × A\n1 Wb = 1 V·s = 1 T·m² = 10⁸ Mx",
      explanation: "B ist die Flussdichte in Tesla und A die Fläche in Quadratmetern, für ein Feld senkrecht zur Fläche.",
    },
    assumptions: [
      "Die Werte sind Fluss durch eine Fläche, nicht Flussdichte; für Tesla oder Gauß verwenden Sie den Umrechner für magnetische Flussdichte.",
      "1 Maxwell = 10⁻⁸ Wb exakt nach den Definitionen der CGS- und SI-Einheiten; eine Line ist dasselbe wie ein Maxwell.",
    ],
    faqs: [
      { question: "Wie viele Maxwell hat ein Weber?", answer: "Genau 100.000.000 (10⁸). Ein Maxwell sind 10 nWb." },
      { question: "Warum ist ein Weber gleich einer Voltsekunde?", answer: "Nach dem Faradayschen Induktionsgesetz induziert ein Fluss, der sich durch eine einzelne Windung um 1 Wb pro Sekunde ändert, eine Spannung von 1 V." },
      { question: "Wie erhalte ich den Fluss aus der Flussdichte?", answer: "Multiplizieren Sie mit der Fläche. Ein Feld von 0,5 T durch 20 cm² (0,002 m²) ergibt 1 mWb oder 100.000 Mx." },
    ],
    units: {
      wb: "Weber",
      mwb: "Milliweber",
      uwb: "Mikroweber",
      nwb: "Nanoweber",
      v_s: "Voltsekunden",
      t_m2: "Tesla-Quadratmeter",
      mx: "Maxwell",
      kmx: "Kilomaxwell",
      g_cm2: "Gauß-Quadratzentimeter",
      line: "Lines (Feldlinien)",
    },
    sourcesUsedFor: ["Umrechnungsfaktor für das Maxwell.", "Das Weber als SI-Einheit des magnetischen Flusses."],
  },
  "magnetic-flux-density": {
    title: "Umrechner für magnetische Flussdichte",
    shortTitle: "Magnetische Flussdichte",
    summary: "Rechnen Sie die magnetische Flussdichte (B) zwischen Tesla, Millitesla, Mikrotesla, Gauß, Milligauß, Gamma und Lines pro Quadratzoll um.",
    metaTitle: "Umrechner für magnetische Flussdichte – T, mT, G, mG",
    metaDescription: "Rechnen Sie die Flussdichte B zwischen Tesla, mT, µT, nT, Gauß, Kilogauß, Milligauß, Gamma und Lines pro Quadratzoll um. Oersted werden getrennt umgerechnet.",
    keywords: ["magnetische Flussdichte", "Tesla in Gauß", "Gauß in Tesla", "Milligauß", "Mikrotesla", "Magnetfeld", "Gamma nT"],
    intro: [
      "Die magnetische Flussdichte B ist das, was man meist mit der Stärke eines Magnetfelds meint. Gaußmeter und Magnetometer in Smartphones messen sie, MRT-Geräte werden danach eingestuft (1,5 T oder 3 T), und EMF-Messgeräte zeigen sie in Milligauß oder Mikrotesla an.",
      "Die SI-Einheit ist das Tesla und die CGS-Einheit das Gauß: 1 T sind genau 10.000 G. Das Erdmagnetfeld an der Oberfläche beträgt rund 25–65 µT oder 0,25–0,65 G.",
    ],
    formula: {
      expression: "1 T = 1 Wb/m² = 10.000 G\n1 G = 1 Mx/cm² = 100 µT",
      explanation: "Die Flussdichte ist der magnetische Fluss pro Flächeneinheit senkrecht zum Feld.",
    },
    assumptions: [
      "B (Flussdichte) und H (Feldstärke) sind verschiedene Größen, daher werden Oersted und A/m hier nicht angeboten. Nur im Vakuum entspricht in CGS-Einheiten 1 G von B genau 1 Oe von H; in magnetischen Werkstoffen hängt das Verhältnis von der Permeabilität des Materials ab.",
      "Das in der Geophysik verwendete Gamma (γ) ist genau 1 nT.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Wie viel Gauß hat ein Tesla?", answer: "Genau 10.000. Ein Gauß sind 100 µT, und ein Milligauß sind 0,1 µT (100 nT)." },
      { question: "Wie stark ist das Erdmagnetfeld?", answer: "Je nach Ort etwa 25 bis 65 µT an der Oberfläche, also 0,25 bis 0,65 G." },
      { question: "Kann ich Gauß in Oersted umrechnen?", answer: "Im Allgemeinen nicht, weil sie verschiedene Größen messen. Im Vakuum oder in Luft ergibt in CGS-Einheiten ein Feld von 1 Oe eine Flussdichte von 1 G; in Eisen oder in einem Magneten weichen die Werte ab. Für Oersted verwenden Sie den Umrechner für magnetische Feldstärke." },
    ],
    units: {
      t: "Tesla",
      mt: "Millitesla",
      ut: "Mikrotesla",
      nt: "Nanotesla",
      wb_m2: "Weber pro Quadratmeter",
      gauss: "Gauß",
      kgauss: "Kilogauß",
      mgauss: "Milligauß",
      gamma: "Gamma",
      mx_cm2: "Maxwell pro Quadratzentimeter",
      line_in2: "Lines pro Quadratzoll",
      kline_in2: "Kilolines pro Quadratzoll",
    },
    sourcesUsedFor: ["Umrechnungsfaktoren für Gauß, Gamma und Maxwell.", "Das Tesla als SI-Einheit der magnetischen Flussdichte."],
  },
};
