import type { ConverterContent } from "../../types";

const NOT_ADVICE =
  "Dieser Umrechner ändert nur Einheiten. Er ist keine medizinische Beratung und keine Strahlenschutzberatung; bei Fragen zu Dosisgrenzwerten, Expositionsbewertung oder Behandlung folgen Sie Ihrem Strahlenschutzbeauftragten, Ihrer Ärztin oder Ihrem Arzt oder der zuständigen Behörde.";

/** Radiology converters in this language, keyed by converter id. */
export const radiologyContent: Record<string, ConverterContent> = {
  radiation: {
    title: "Äquivalentdosisumrechner",
    shortTitle: "Äquivalentdosis",
    summary: "Rechnen Sie die Äquivalentdosis zwischen Sievert, Millisievert, Mikrosievert, Rem und Millirem um.",
    metaTitle: "Äquivalentdosisumrechner – Sv, mSv, µSv, rem, mrem",
    metaDescription: "Rechnen Sie Äquivalentdosis und effektive Dosis zwischen Sievert, Millisievert, Mikrosievert, Rem und Millirem mit dem exakten 1 rem = 0,01 Sv um.",
    keywords: ["Sievert", "Rem", "mSv in mrem", "mrem in mSv", "Mikrosievert", "Äquivalentdosis", "effektive Dosis", "Strahlendosis"],
    intro: [
      "Äquivalentdosis und effektive Dosis beschreiben die biologische Wirkung ionisierender Strahlung auf den Körper. Dosimeterplaketten, Befunde der medizinischen Bildgebung und Karten der Hintergrundstrahlung geben sie in Millisievert oder Mikrosievert an, einige US-Vorschriften verwenden noch Rem und Millirem.",
      "Das Sievert ist die SI-Einheit und das Rem sein älteres Gegenstück: 1 rem ist genau 0,01 Sv, also sind 1 mSv gleich 100 mrem.",
    ],
    formula: {
      expression: "Sv = rem × 0,01    mSv = mrem ÷ 100",
      explanation: "Das Rem wurde als ein Hundertstel Sievert festgelegt; jede Umrechnung ist daher ein exaktes Zehnerpotenzverhältnis.",
    },
    assumptions: [
      NOT_ADVICE,
      "Sievert und Gray sind verschiedene Größen: Sievert enthalten Wichtungsfaktoren für Strahlungsart und Gewebe, Gray nicht. Für Gray und Rad nutzen Sie den Energiedosisumrechner.",
      "Dosisleistungen (zum Beispiel µSv/h) werden genauso umgerechnet, solange beide Seiten dieselbe Zeiteinheit verwenden.",
    ],
    faqs: [
      { question: "Wie viele Millirem sind 1 Millisievert?", answer: "1 mSv sind genau 100 mrem, und 1 mrem sind 0,01 mSv (10 µSv)." },
      { question: "Wie viele Rem hat ein Sievert?", answer: "1 Sv sind genau 100 rem." },
      { question: "Kann ich Sievert in Gray umrechnen?", answer: "Nicht mit einem festen Faktor. Sievert wichten die Energiedosis in Gray nach Strahlungsart und bestrahltem Gewebe, daher hängt der Zusammenhang von der Situation ab." },
    ],
    units: {
      sv: "Sievert",
      csv: "Zentisievert",
      msv: "Millisievert",
      usv: "Mikrosievert",
      nsv: "Nanosievert",
      rem: "Rem",
      mrem: "Millirem",
      urem: "Mikrorem",
    },
    sourcesUsedFor: ["Umrechnungsfaktor von Rem in Sievert.", "Definition des Sievert."],
  },
  "radiation-activity": {
    title: "Umrechner für radioaktive Aktivität",
    shortTitle: "Aktivität",
    summary: "Rechnen Sie die Aktivität einer radioaktiven Quelle zwischen Becquerel, Curie, Rutherford und Zerfällen pro Sekunde oder Minute um.",
    metaTitle: "Umrechner für radioaktive Aktivität – Bq, MBq, Ci, mCi",
    metaDescription: "Rechnen Sie die Aktivität zwischen Becquerel, Kilo-, Mega- und Gigabecquerel, Curie, Millicurie, Mikrocurie, Pikocurie und Zerfällen pro Minute um.",
    keywords: ["Becquerel", "Curie", "mCi in MBq", "MBq in mCi", "Pikocurie", "Radioaktivität", "Aktivität", "Zerfälle pro Minute"],
    intro: [
      "Die Aktivität gibt an, wie viele Atome einer radioaktiven Probe pro Sekunde zerfallen. In der Nuklearmedizin werden Dosen in Megabecquerel oder Millicurie verordnet, Radon in Wohnungen wird in Becquerel oder Pikocurie pro Liter angegeben, und Laborzähler zeigen oft Zerfälle pro Minute an.",
      "Ein Becquerel ist ein Zerfall pro Sekunde. Das Curie, das auf der Aktivität eines Gramms Radium beruht, ist auf genau 37 Milliarden Becquerel festgelegt.",
    ],
    formula: {
      expression: "Bq = Ci × 3,7 × 10¹⁰    1 mCi = 37 MBq",
      explanation: "Das Curie ist als genau 3,7 × 10¹⁰ Bq definiert, und 1 dpm ist ein Zerfall pro Minute, also 1/60 Bq.",
    },
    assumptions: [
      NOT_ADVICE,
      "Die Aktivität misst Zerfälle, nicht die Dosis: Dieselbe Aktivität kann je nach Nuklid, Abstand, Abschirmung und Zeit sehr unterschiedliche Dosen ergeben.",
      "Konzentrationen wie Bq/m³ oder pCi/L werden genauso umgerechnet, solange beide Seiten dieselbe Volumeneinheit verwenden.",
    ],
    faqs: [
      { question: "Wie viele Megabecquerel hat ein Millicurie?", answer: "1 mCi sind genau 37 MBq; 1 MBq sind etwa 0,027 mCi (27,03 µCi)." },
      { question: "Wie rechne ich pCi/L in Bq/m³ um?", answer: "1 pCi sind 0,037 Bq und 1 m³ sind 1.000 L, also sind 1 pCi/L gleich 37 Bq/m³. Der US-Radon-Eingreifwert von 4 pCi/L entspricht 148 Bq/m³." },
      { question: "Was ist der Unterschied zwischen dps und dpm?", answer: "Zerfälle pro Sekunde entsprechen Becquerel; Zerfälle pro Minute sind 60-mal kleiner, also gilt 1 Bq = 60 dpm." },
    ],
    units: {
      bq: "Becquerel",
      kbq: "Kilobecquerel",
      mbq: "Megabecquerel",
      gbq: "Gigabecquerel",
      tbq: "Terabecquerel",
      pbq: "Petabecquerel",
      kci: "Kilocurie",
      ci: "Curie",
      mci: "Millicurie",
      uci: "Mikrocurie",
      nci: "Nanocurie",
      pci: "Pikocurie",
      rd: "Rutherford",
      dps: "Zerfälle pro Sekunde",
      dpm: "Zerfälle pro Minute",
    },
    sourcesUsedFor: ["Umrechnungsfaktor von Curie in Becquerel.", "Definition des Becquerel."],
  },
  "radiation-exposure": {
    title: "Ionendosisumrechner",
    shortTitle: "Ionendosis",
    summary: "Rechnen Sie die Ionendosis von Röntgen- und Gammastrahlung zwischen Röntgen, Milliröntgen und Coulomb pro Kilogramm um.",
    metaTitle: "Ionendosisumrechner – R, mR, C/kg",
    metaDescription: "Rechnen Sie die Ionendosis zwischen Röntgen, Milliröntgen, Mikroröntgen und Coulomb pro Kilogramm mit dem exakten 1 R = 2,58 × 10⁻⁴ C/kg um.",
    keywords: ["Röntgen", "Milliröntgen", "Coulomb pro Kilogramm", "R in C/kg", "Ionendosis", "Strahlenmessgerät", "mR/h"],
    intro: [
      "Die Ionendosis misst, wie stark Röntgen- oder Gammastrahlung Luft ionisiert: die elektrische Ladung, die sie in jedem Kilogramm Luft freisetzt. Ältere Strahlenmessgeräte und Zivilschutzinstrumente zeigen Röntgen oder Milliröntgen pro Stunde an.",
      "Im SI wird die Ionendosis in Coulomb pro Kilogramm angegeben. Das Röntgen ist auf genau 2,58 × 10⁻⁴ C/kg festgelegt.",
    ],
    formula: {
      expression: "C/kg = R × 2,58 × 10⁻⁴",
      explanation: "Ein Röntgen ist die Ionendosis, die 2,58 × 10⁻⁴ Coulomb Ladung pro Kilogramm trockener Luft freisetzt.",
    },
    assumptions: [
      NOT_ADVICE,
      "Die Ionendosis ist nur für Röntgen- und Gammastrahlung in Luft definiert. Sie ist weder eine Energiedosis noch eine Äquivalentdosis, und ihre Umrechnung in Gray oder Sievert hängt von der Strahlungsenergie und dem Material ab.",
      "Ionendosisleistungen (zum Beispiel mR/h) werden genauso umgerechnet, solange beide Seiten dieselbe Zeiteinheit verwenden.",
    ],
    faqs: [
      { question: "Wie viele Coulomb pro Kilogramm sind ein Röntgen?", answer: "Genau 2,58 × 10⁻⁴ C/kg oder 258 µC/kg. Ein Milliröntgen sind 0,258 µC/kg." },
      { question: "Wie viele Röntgen sind 1 C/kg?", answer: "Etwa 3.876 R, denn 1 ÷ 0,000258 ≈ 3.875,97." },
      { question: "Ist ein Röntgen dasselbe wie ein Rem oder ein Rad?", answer: "Nein. Sie messen verschiedene Dinge. Für Gammastrahlung in Weichgewebe ergibt 1 R etwa 0,0087 bis 0,0096 Gy; deshalb werden sie in Faustregeln manchmal ähnlich behandelt, eine feste Umrechnung gibt es aber nicht." },
    ],
    units: {
      c_kg: "Coulomb pro Kilogramm",
      mc_kg: "Millicoulomb pro Kilogramm",
      uc_kg: "Mikrocoulomb pro Kilogramm",
      nc_kg: "Nanocoulomb pro Kilogramm",
      kr: "Kiloröntgen",
      r: "Röntgen",
      mr: "Milliröntgen",
      ur: "Mikroröntgen",
    },
    sourcesUsedFor: ["Umrechnungsfaktor von Röntgen in Coulomb pro Kilogramm."],
  },
  "radiation-absorbed-dose": {
    title: "Energiedosisumrechner",
    shortTitle: "Energiedosis",
    summary: "Rechnen Sie die Energiedosis zwischen Gray, Zentigray, Milligray, Rad und Joule pro Kilogramm um.",
    metaTitle: "Energiedosisumrechner – Gy, cGy, mGy, rad",
    metaDescription: "Rechnen Sie die Energiedosis zwischen Gray, Kilogray, Zentigray, Milligray, Rad, Kilorad, Erg pro Gramm und Joule pro Kilogramm um.",
    keywords: ["Gray", "Rad", "Gy in rad", "rad in Gy", "Zentigray", "Milligray", "Energiedosis", "Kilogray"],
    intro: [
      "Die Energiedosis ist die Energie, die ionisierende Strahlung in jedem Kilogramm Materie abgibt. Bestrahlungspläne in der Strahlentherapie verwenden Gray und Zentigray, CT-Dosisindizes Milligray und die Sterilisation von Lebensmitteln und Medizinprodukten Kilogray.",
      "Ein Gray ist ein Joule pro Kilogramm. Das ältere Rad ist genau ein Hundertstel Gray, daher entspricht 1 cGy genau 1 rad.",
    ],
    formula: {
      expression: "Gy = rad × 0,01    1 Gy = 1 J/kg",
      explanation: "Das Rad wurde als 100 Erg pro Gramm definiert, was genau 0,01 J/kg ist.",
    },
    assumptions: [
      NOT_ADVICE,
      "Gray messen nur die abgegebene Energie. Sie sind keine Sievert, die zusätzlich nach Strahlungsart und Gewebe wichten; für Sievert und Rem nutzen Sie den Äquivalentdosisumrechner.",
    ],
    faqs: [
      { question: "Wie viele Rad hat ein Gray?", answer: "1 Gy sind genau 100 rad, und 1 rad sind 0,01 Gy (1 cGy)." },
      { question: "Warum verwenden Berichte in der Strahlentherapie Zentigray?", answer: "Da 1 cGy gleich 1 rad ist, behalten Kliniken mit Zentigray vertraute Zahlen: Eine Fraktion von 2 Gy sind 200 cGy oder 200 rad." },
      { question: "Ist ein Gray dasselbe wie ein Sievert?", answer: "Beide sind Joule pro Kilogramm, aber verschiedene Größen. Ein Gray Alphastrahlung hat eine viel größere biologische Wirkung als ein Gray Röntgenstrahlung; das berücksichtigt das Sievert." },
    ],
    units: {
      gy: "Gray",
      kgy: "Kilogray",
      cgy: "Zentigray",
      mgy: "Milligray",
      ugy: "Mikrogray",
      j_kg: "Joule pro Kilogramm",
      krad: "Kilorad",
      rad: "Rad",
      mrad: "Millirad",
      erg_g: "Erg pro Gramm",
    },
    sourcesUsedFor: ["Umrechnungsfaktoren von Rad und Erg pro Gramm in Gray.", "Definition des Gray."],
  },
};
