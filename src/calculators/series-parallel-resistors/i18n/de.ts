import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorsText } from "../text/en";

const count = { zero: "{n} Widerstände", one: "{n} Widerstand", two: "{n} Widerstände", few: "{n} Widerstände", many: "{n} Widerstände", other: "{n} Widerstände" };

const de: CalculatorTranslation<ResistorsText> = {
  content: {
    title: "Widerstandsrechner (Reihen- und Parallelschaltung)",
    shortTitle: "Widerstände in Reihe/parallel",
    summary: "Ermitteln Sie den Gesamtwiderstand von bis zu 50 Widerständen in Reihen- oder Parallelschaltung, dazu den Leitwert der Parallelschaltung.",
    metaTitle: "Widerstandsrechner – Gesamtwiderstand in Reihe und parallel",
    metaDescription: "Fassen Sie bis zu 50 Widerstände in Reihe oder parallel zusammen und erhalten Sie den Ersatzwiderstand in Ω, kΩ oder MΩ sowie den Gesamtleitwert in Siemens.",
    keywords: ["Widerstandsrechner", "Reihenschaltung Widerstände", "Parallelschaltung Widerstände", "Ersatzwiderstand berechnen", "Gesamtwiderstand", "Parallelwiderstand", "Leitwert", "Siemens", "Ohm"],
    intro: [
      "Werden Widerstände hintereinander, also in Reihe, geschaltet, fließt durch jeden derselbe Strom, und ihre Widerstandswerte addieren sich einfach. Werden sie nebeneinander, also parallel, geschaltet, liegt an jedem dieselbe Spannung und der Strom teilt sich auf. Die Kombination hat dann einen kleineren Widerstand als jeder einzelne Widerstand.",
      "Geben Sie eine Liste von Widerstandswerten ein, um beide Gesamtwerte auf einmal zu erhalten. Wählen Sie die Schaltung, die Sie aufbauen, als Hauptergebnis und die Einheit, in der Sie die Werte eingegeben haben. Die Gesamtwerte werden in der am besten lesbaren Einheit und zusätzlich in Ohm angezeigt.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie die Werte in Ohm, Kiloohm oder Megaohm eingegeben haben.",
      "Wählen Sie Reihe oder parallel, um festzulegen, welcher Gesamtwert das Hauptergebnis ist.",
      "Geben Sie 1 bis 50 Widerstandswerte ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      "Lesen Sie den Gesamtwiderstand, den Gesamtwert der anderen Schaltung und den Leitwert der Parallelschaltung in Siemens ab.",
    ],
    formulas: [
      { title: "Reihenschaltung", expression: "R_gesamt = R₁ + R₂ + … + Rₙ", explanation: "Durch jeden Widerstand fließt derselbe Strom, daher addieren sich die Spannungsabfälle." },
      { title: "Parallelschaltung", expression: "1 ÷ R_gesamt = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ", explanation: "An jedem Widerstand liegt die volle Spannung, daher addieren sich die Ströme (und die Leitwerte)." },
      { title: "Leitwert", expression: "G = 1 ÷ R, in Siemens (S)", explanation: "Der Gesamtleitwert der Parallelschaltung ist die Summe der einzelnen Leitwerte." },
    ],
    examples: [
      {
        title: "220 Ω, 470 Ω und 1 kΩ in Reihe",
        steps: ["R_gesamt = 220 + 470 + 1.000 = 1.690 Ω", "Angezeigt als 1,69 kΩ", "Parallel ergäben dieselben drei etwa 130,325 Ω"],
      },
      {
        title: "4,7 kΩ, 10 kΩ und 22 kΩ parallel",
        steps: ["G = 1/4.700 + 1/10.000 + 1/22.000 ≈ 0,000358221 S", "R_gesamt = 1 ÷ 0,000358221 ≈ 2.791,58 Ω", "Angezeigt als 2,79158 kΩ, kleiner als der kleinste Widerstand (4,7 kΩ)"],
      },
      {
        title: "Drei gleiche 330-Ω-Widerstände parallel",
        steps: ["Gleiche Widerstände parallel: R_gesamt = R ÷ n", "330 ÷ 3 = 110 Ω", "In Reihe ergäben sie 990 Ω"],
      },
    ],
    assumptions: [
      "Die Widerstände sind ideal: Ihre Werte ändern sich nicht mit Temperatur, Strom oder Frequenz, und die Verbindungsleitungen haben keinen Widerstand.",
      "Alle Widerstände bilden eine einfache Reihe oder eine einzige Parallelgruppe. Fassen Sie bei gemischten Netzwerken jede Gruppe Schritt für Schritt zusammen und geben Sie die Teilergebnisse ein.",
      "Reale Widerstände haben eine Toleranz (oft ±1 % oder ±5 %), daher kann ein gemessener Gesamtwert vom berechneten abweichen.",
      "Ergebnisse werden in der lesbaren Einheit mit 6 signifikanten Stellen und in Ohm mit 12 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Warum ist der Parallelwiderstand kleiner als jeder einzelne Widerstand?", answer: "Jeder parallel hinzugefügte Widerstand gibt dem Strom einen weiteren Weg und erhöht so den Gesamtleitwert. Der Gesamtwiderstand, sein Kehrwert, sinkt daher unter den kleinsten Einzelwert. Zwei parallele 1-kΩ-Widerstände ergeben 500 Ω." },
      { question: "Gibt es eine Abkürzung für zwei parallele Widerstände?", answer: "Ja: R_gesamt = (R₁ × R₂) ÷ (R₁ + R₂), also Produkt durch Summe. Für 6 Ω und 3 Ω ergibt das 18 ÷ 9 = 2 Ω. Bei mehr als zwei Widerständen addieren Sie stattdessen die Kehrwerte." },
      { question: "Was ist ein Siemens?", answer: "Das Siemens (S) ist die SI-Einheit des elektrischen Leitwerts, der Kehrwert des Ohms. Ein 100-Ω-Widerstand hat einen Leitwert von 0,01 S. Es ersetzt die ältere Bezeichnung „Mho“." },
    ],
    sourcesUsedFor: ["Ersatzwiderstand von Widerständen in Reihe (die Summe) und parallel (der Kehrwert der Summe der Kehrwerte)."],
  },
  text: {
    unit: "Einheit der Werte",
    unitOptions: { ohm: "Ω (Ohm)", kohm: "kΩ (Kiloohm)", megohm: "MΩ (Megaohm)" },
    connection: "Schaltung",
    connectionHelp: "Wählen Sie, welcher Gesamtwert als Hauptergebnis erscheint. Der andere wird darunter angezeigt.",
    connectionOptions: { series: "Reihe", parallel: "Parallel" },
    values: "Widerstandswerte",
    valuesHelp: "1 bis 50 Werte, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche. Jeder muss größer als 0 sein.",
    errors: {
      empty: "Geben Sie mindestens einen Widerstandswert ein.",
      tooMany: "Geben Sie höchstens {max} Widerstandswerte ein.",
      notNumber: "„{token}“ ist keine Zahl. Trennen Sie die Werte durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
    },
    maxCount: "Geben Sie höchstens {max} Widerstandswerte ein.",
    notPositive: "Jeder Widerstandswert muss größer als 0 sein ({value} ist es nicht).",
    tooBig: "{value} ist zu groß. Jeder Wert darf höchstens {max} betragen.",
    series: "Gesamtwiderstand in Reihe",
    parallel: "Gesamtwiderstand parallel",
    seriesOhms: "Reihenwiderstand in Ohm",
    parallelOhms: "Parallelwiderstand in Ohm",
    conductance: "Gesamtleitwert parallel",
    count,
    caption: "{count}, {connection}.",
    connectionWords: { series: "in Reihe geschaltet", parallel: "parallel geschaltet" },
    single: "Bei einem einzelnen Widerstand sind der Reihen- und der Parallelwert beide einfach sein eigener Widerstand.",
    parallelNote: "Ein Parallelwert ist immer kleiner als der kleinste Widerstand der Gruppe ({smallest}).",
    table: "Einzelne Widerstände",
    resistorColumn: "Widerstand",
    ohmsColumn: "Widerstandswert",
    conductanceColumn: "Leitwert",
    resistorLabel: "R{i}",
  },
};

export default de;
