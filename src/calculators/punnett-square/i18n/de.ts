import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PunnettText } from "../text/en";

const de: CalculatorTranslation<PunnettText> = {
  content: {
    title: "Punnett-Quadrat-Rechner",
    shortTitle: "Punnett-Quadrat",
    summary: "Kreuzen Sie zwei Eltern für ein oder zwei Gene und erhalten Sie das Punnett-Quadrat, Genotyp- und Phänotypverhältnisse und die Wahrscheinlichkeit jedes Merkmals.",
    metaTitle: "Punnett-Quadrat-Rechner – Genotyp- und Phänotypverhältnis",
    metaDescription: "Geben Sie zwei Elterngenotypen wie AaBb × AaBb ein und erhalten Sie das Punnett-Quadrat, die Genotyp- und Phänotypverhältnisse und jede Wahrscheinlichkeit.",
    keywords: ["Punnett-Quadrat", "Kreuzungsschema", "monohybrider Erbgang", "dihybrider Erbgang", "Mendelsche Regeln", "Genotyp Phänotyp Verhältnis", "9:3:3:1", "Testkreuzung"],
    intro: [
      "Ein Punnett-Quadrat listet alle Keimzellen (Gameten), die ein Elternteil bilden kann, an einer Seite auf und alle Gameten des anderen Elternteils an der anderen Seite. Jedes Feld im Raster ist eine gleich wahrscheinliche Kombination, daher ergibt das Zählen der Felder den erwarteten Anteil jedes Genotyps bei den Nachkommen.",
      "Dieser Rechner behandelt ein Gen (monohybride Kreuzung wie Aa × aa) oder zwei Gene (dihybride Kreuzung wie AaBb × AaBb). Er zeichnet das Raster und leitet daraus Genotypverhältnisse, Phänotypverhältnisse und die Wahrscheinlichkeit jeder Merkmalskombination ab.",
    ],
    howToUse: [
      "Wählen Sie für jedes Gen einen Buchstaben. Schreiben Sie das dominante Allel als Großbuchstaben und das rezessive als Kleinbuchstaben.",
      "Geben Sie den Genotyp von Elternteil 1 ein, zum Beispiel Aa für ein Gen oder AaBb für zwei Gene.",
      "Geben Sie den Genotyp von Elternteil 2 mit denselben Buchstaben ein, zum Beispiel aa oder Aabb.",
      "Lesen Sie das Phänotypverhältnis ab und prüfen Sie dann das Raster und die Tabellen mit jedem Genotyp und seiner Wahrscheinlichkeit.",
    ],
    formulas: [
      {
        title: "Gameten",
        expression: "Gameten pro Elternteil = 2ⁿ bei n Genen",
        explanation: "Jeder Gamet trägt ein Allel jedes Gens. Bei zwei Genen bildet ein Elternteil wie AaBb die Gameten AB, Ab, aB und ab zu gleichen Anteilen.",
      },
      {
        title: "Wahrscheinlichkeit eines Genotyps",
        expression: "P = Felder mit diesem Genotyp ÷ Felder insgesamt",
        explanation: "Eine Kreuzung mit einem Gen hat 4 Felder, eine mit zwei Genen 16, alle gleich wahrscheinlich.",
      },
      {
        title: "Produktregel",
        expression: "P(A_ und B_) = P(A_) × P(B_)",
        explanation: "Bei unabhängiger Neukombination verhalten sich die Gene getrennt. Bei AaBb × AaBb zeigen 3/4 × 3/4 = 9/16 der Nachkommen beide dominanten Merkmale.",
      },
    ],
    examples: [
      {
        title: "Zwei heterozygote Eltern, ein Gen",
        steps: ["Jeder Elternteil bildet A- und a-Gameten in gleicher Zahl.", "Das Raster ergibt AA, Aa, Aa und aa: ein Genotypverhältnis von 1 : 2 : 1.", "AA und Aa zeigen beide das dominante Merkmal, daher ist das Phänotypverhältnis 3 : 1 (75 % und 25 %)."],
      },
      {
        title: "Eine klassische dihybride Kreuzung",
        steps: ["Jeder Elternteil bildet vier Gameten: AB, Ab, aB und ab.", "Das 4 × 4-Raster hat 16 Felder und 9 verschiedene Genotypen.", "Nach Merkmalen gruppiert: 9 A_B_, 3 A_bb, 3 aaB_ und 1 aabb, also das Verhältnis 9 : 3 : 3 : 1."],
      },
      {
        title: "Testkreuzung mit einem doppelt Rezessiven",
        steps: ["Elternteil 2 kann nur ab-Gameten bilden, daher zeigt jeder Nachkomme die Allele, die er von Elternteil 1 erhalten hat.", "Die vier Gameten von Elternteil 1 sind gleich wahrscheinlich, daher treten die vier Phänotypen im Verhältnis 1 : 1 : 1 : 1 auf, je 25 %."],
      },
    ],
    assumptions: [
      "Vollständige Dominanz: Ein dominantes Allel genügt, damit das dominante Merkmal sichtbar wird. Unvollständige Dominanz, Kodominanz und multiple Allele (etwa bei den AB0-Blutgruppen) werden nicht abgebildet.",
      "Bei zwei Genen wird eine unabhängige Neukombination angenommen. Gekoppelte Gene auf demselben Chromosom folgen diesen Verhältnissen nicht.",
      "Jedes Gen hat genau zwei Allele und ist nicht geschlechtsgebunden. Jede Gametenkombination gilt als gleich überlebensfähig.",
      "Die Ergebnisse sind Wahrscheinlichkeiten für jeden einzelnen Nachkommen. Bei wenigen Nachkommen kann das tatsächliche Verhältnis rein zufällig vom erwarteten abweichen.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Genotyp- und Phänotypverhältnis?",
        answer: "Das Genotypverhältnis zählt die Allelkombinationen, etwa AA : Aa : aa = 1 : 2 : 1. Das Phänotypverhältnis zählt die sichtbaren Merkmale. Bei vollständiger Dominanz sehen AA und Aa gleich aus, daher ergibt dieselbe Kreuzung ein Phänotypverhältnis von 3 : 1.",
      },
      {
        question: "Warum zeigt das Raster bei manchen Eltern denselben Gameten zweimal?",
        answer: "Ein Elternteil wie AA bildet nur A-Gameten, doch das Raster behält eine Zeile oder Spalte pro Allel, damit jedes Feld dieselbe Wahrscheinlichkeit hat. Doppelte Überschriften bedeuten einfach, dass dieser Gamet doppelt so wahrscheinlich ist.",
      },
      {
        question: "Kann ich drei Gene eingeben?",
        answer: "Hier nicht. Eine Kreuzung mit drei Genen braucht 64 Felder, und es ist einfacher, die Wahrscheinlichkeiten der einzelnen Gene mit der Produktregel zu multiplizieren. Berechnen Sie jedes Gen einzeln mit dem Rechner und multiplizieren Sie die benötigten Wahrscheinlichkeiten.",
      },
    ],
    sourcesUsedFor: ["Dominanz, Spaltung, unabhängige Neukombination und das Verhältnis 9 : 3 : 3 : 1 einer dihybriden Kreuzung."],
  },
  text: {
    parent1: "Genotyp von Elternteil 1",
    parent2: "Genotyp von Elternteil 2",
    parentHelp: "Ein oder zwei Gene, zwei Buchstaben pro Gen: Großbuchstabe für das dominante Allel, Kleinbuchstabe für das rezessive. Beispiele: Aa, AaBb, AABb.",
    parent2Help: "Verwenden Sie dieselben Genbuchstaben wie bei Elternteil 1, z. B. aa oder aabb.",
    errors: {
      invalidChar: "„{token}“ ist nicht erlaubt. Verwenden Sie nur Buchstaben, etwa Aa oder AaBb.",
      length: "Geben Sie ein Gen (2 Buchstaben, z. B. Aa) oder zwei Gene (4 Buchstaben, z. B. AaBb) ein.",
      pairMismatch: "„{token}“ vermischt zwei Gene. Jedes Gen wird als zwei Formen desselben Buchstabens geschrieben, etwa Aa, AA oder aa.",
      duplicateGene: "Das Gen {token} kommt zweimal vor. Verwenden Sie für jedes Gen einen anderen Buchstaben, z. B. AaBb.",
      geneCount: "Beide Eltern brauchen dieselbe Anzahl an Genen.",
      geneMismatch: "Verwenden Sie dieselben Genbuchstaben wie bei Elternteil 1 ({genes}).",
    },
    listSeparator: ", ",
    dominantTrait: "{gene} dominant",
    recessiveTrait: "{gene} rezessiv",
    phenotypeRatio: "Phänotypverhältnis",
    caption: "In der Reihenfolge {order} (ein Unterstrich steht für ein beliebiges Allel)",
    genotypeRatio: "Genotypverhältnis",
    genotypeOrder: "Genotypen in dieser Reihenfolge",
    genotypeCount: "Verschiedene Genotypen",
    phenotypeCount: "Verschiedene Phänotypen",
    probabilityOf: "Wahrscheinlichkeit für Nachkommen mit {phenotype}",
    fraction: "{count} von {total}",
    gridCaption: "Punnett-Quadrat: Gameten von Elternteil 1 an der Seite, von Elternteil 2 oben",
    gridCorner: "Elternteil 1 ↓ · Elternteil 2 →",
    genotypeTable: "Genotypen der Nachkommen",
    phenotypeTable: "Phänotypen der Nachkommen",
    columns: { genotype: "Genotyp", phenotype: "Phänotyp", description: "Sichtbare Merkmale", cells: "Felder", probability: "Wahrscheinlichkeit" },
    singlePhenotype: "Bei dieser Kreuzung zeigen alle Nachkommen dieselben Merkmale.",
    linkageNote: "Für die beiden Gene wird eine unabhängige Neukombination angenommen, wie bei Genen auf verschiedenen Chromosomen. Gene, die auf einem Chromosom nahe beieinanderliegen, werden oft gemeinsam vererbt, was diese Verhältnisse verändert.",
    note: "Setzt vollständige Dominanz voraus: Ein dominantes Allel genügt, damit das dominante Merkmal sichtbar wird. Die Verhältnisse sind Wahrscheinlichkeiten für jeden Nachkommen, daher können echte Würfe oder Familien zufällig abweichen.",
  },
};

export default de;
