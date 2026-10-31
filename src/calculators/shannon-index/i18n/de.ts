import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ShannonIndexText } from "../text/en";

const de: CalculatorTranslation<ShannonIndexText> = {
  content: {
    title: "Shannon-Index-Rechner",
    shortTitle: "Shannon-Index",
    summary: "Berechnen Sie den Shannon-Diversitätsindex H′, die Evenness nach Pielou, die effektive Artenzahl und die Simpson-Indizes aus der Zahl der Individuen je Art.",
    metaTitle: "Shannon-Index-Rechner – H′ und Evenness",
    metaDescription: "Ermitteln Sie den Shannon-Index H′ aus Artenzählungen mit ln, log2 oder log10 – mit Evenness J′ nach Pielou, effektiver Artenzahl und Simpson-Indizes.",
    keywords: ["Shannon-Index berechnen", "Shannon-Wiener-Index", "Artenvielfalt", "Diversitätsindex", "Evenness Pielou", "Simpson-Index", "Artenreichtum", "Ökologie", "effektive Artenzahl"],
    intro: [
      "Der Shannon-Index H′ (auch Shannon-Wiener- oder Shannon-Weaver-Index) misst die Diversität einer Lebensgemeinschaft anhand der gezählten Individuen jeder Art. Er steigt mit der Zahl der Arten und damit, wie gleichmäßig sich die Individuen auf sie verteilen, und ist 0, wenn nur eine Art vorkommt.",
      "Dieser Rechner liefert H′ zur gewählten Logarithmusbasis, die Evenness J′ nach Pielou, die effektive Artenzahl und den Simpson-Index mit seiner Gini-Simpson- und inversen Form, dazu eine Tabelle mit dem Anteil jeder Art an der Gesamtzahl.",
    ],
    howToUse: [
      "Geben Sie die Zahl der gezählten Individuen je Art ein, eine Zahl pro Art, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      "Wählen Sie die Logarithmusbasis. Der natürliche Logarithmus ist in der Ökologie am gebräuchlichsten; Basis 2 ergibt H′ in Bit.",
      "Lesen Sie H′ und die anderen Indizes ab. Nullwerte sind erlaubt, werden aber ignoriert, und das Ergebnis gibt an, wie viele es waren.",
    ],
    formulas: [
      {
        title: "Shannon-Index",
        expression: "H′ = −Σ pᵢ log pᵢ, mit pᵢ = nᵢ ÷ N",
        explanation: "nᵢ ist die Anzahl der Art i und N die Gesamtzahl. Nur Arten mit nᵢ > 0 werden berücksichtigt.",
      },
      {
        title: "Evenness nach Pielou",
        expression: "J′ = H′ ÷ log S",
        explanation: "S ist die Zahl der vorkommenden Arten. J′ reicht von nahe 0 (eine Art dominiert) bis 1 (alle Arten gleich häufig) und setzt S ≥ 2 voraus.",
      },
      {
        title: "Effektive Artenzahl",
        expression: "D₁ = Basis^H′ (e^H′ beim natürlichen Logarithmus)",
        explanation: "Die Zahl gleich häufiger Arten, die denselben H′ ergäbe. Sie hängt nicht von der Basis ab.",
      },
      {
        title: "Simpson-Index",
        expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)); Gini-Simpson = 1 − D; invers = 1 ÷ D",
        explanation: "D ist die Wahrscheinlichkeit, dass zwei zufällig ohne Zurücklegen gezogene Individuen zur selben Art gehören.",
      },
    ],
    examples: [
      {
        title: "Sechs Vogelarten entlang eines Transekts",
        steps: [
          "N = 100, die Anteile sind also 0,42, 0,27, 0,15, 0,09, 0,05 und 0,02.",
          "H′ = −(0,42 ln 0,42 + 0,27 ln 0,27 + … + 0,02 ln 0,02) ≈ 1,4472.",
          "J′ = 1,4472 ÷ ln 6 ≈ 0,808; effektive Artenzahl e^1,4472 ≈ 4,25 Arten.",
          "Simpson-D = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2.728 ÷ 9.900 ≈ 0,2756.",
        ],
      },
      {
        title: "Quadratzählungen mit fehlenden Arten, in Bit",
        steps: [
          "Die beiden Nullen werden ignoriert: S = 5 Arten und N = 80 Individuen.",
          "H′ = −Σ pᵢ log₂ pᵢ ≈ 2,0478 Bit.",
          "J′ = 2,0478 ÷ log₂ 5 ≈ 0,882.",
        ],
      },
      {
        title: "Eine von einer Art dominierte Gemeinschaft, Basis 10",
        steps: ["p = 0,60, 0,25, 0,10, 0,05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0,4487.", "Effektive Artenzahl 10^0,4487 ≈ 2,81 Arten."],
      },
    ],
    assumptions: [
      "Die Zählungen sind eine Zufallsstichprobe der Lebensgemeinschaft, und jedes Individuum wurde bis zur Art bestimmt. Seltene Arten werden in kleinen Stichproben leicht übersehen, was H′ senkt.",
      "H′ verwendet die beobachteten Anteile direkt, ohne die Korrekturen für kleine Stichproben, die manche Studien anwenden.",
      "Werte zu verschiedenen Logarithmusbasen unterscheiden sich um einen konstanten Faktor (H′ in Bit = H′ in Nat ÷ ln 2), vergleichen Sie daher nur Indizes zur selben Basis.",
      "Der Simpson-Index verwendet hier die Form für endliche Stichproben nᵢ(nᵢ − 1) ÷ (N(N − 1)). Manche Lehrbücher verwenden stattdessen Σ pᵢ², was bei kleinen Stichproben etwas andere Werte ergibt.",
    ],
    faqs: [
      {
        question: "Was ist ein hoher Shannon-Index?",
        answer: "Es gibt keine feste Skala: H′ wächst mit der Artenzahl und der Evenness, und sein Maximum ist log S. Deshalb sind die Evenness J′ (H′ ÷ log S) und die effektive Artenzahl oft leichter zu deuten und zu vergleichen.",
      },
      {
        question: "Warum werden Nullwerte ignoriert?",
        answer: "Eine Art ohne Individuen hat pᵢ = 0, und der Term pᵢ log pᵢ strebt gegen 0, wenn pᵢ kleiner wird, trägt also nichts zu H′ bei. Sie zählt auch nicht zum Artenreichtum S.",
      },
      {
        question: "Wie unterscheidet sich der Shannon-Index vom Simpson-Index?",
        answer: "Beide verbinden Artenreichtum und Evenness, doch der Simpson-Index gewichtet häufige Arten stärker, während H′ empfindlicher auf seltene Arten reagiert. Beide anzugeben oder die effektiven Artenzahlen zu nennen, ergibt ein vollständigeres Bild.",
      },
    ],
    sourcesUsedFor: [
      "Der Shannon-Index H′ = −Σ pᵢ ln pᵢ mit pᵢ = nᵢ ÷ N und ein Rechenbeispiel für den Shannon- und den Simpson-Index.",
      "Der Simpson-Index aus Zählungen, Σ n(n − 1) ÷ (N(N − 1)).",
      "Evenness als H′ geteilt durch sein Maximum log S, das erreicht wird, wenn alle Arten gleich häufig sind.",
    ],
  },
  text: {
    counts: "Gezählte Individuen je Art",
    countsHelp: "Eine ganze Zahl pro Art, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche. Nullen werden ignoriert.",
    base: "Logarithmusbasis",
    bases: { e: "Natürlicher Logarithmus (ln), die übliche Wahl", "2": "Basis 2 (Bit)", "10": "Basis 10" },
    errors: {
      empty: "Geben Sie mindestens eine Zahl ein.",
      tooMany: "Geben Sie höchstens {max} Zahlen ein.",
      notNumber: "„{token}“ ist keine Zahl. Trennen Sie die Zahlen durch Kommas, Leerzeichen oder Zeilenumbrüche.",
      tooLarge: "„{token}“ ist zu groß.",
      notInteger: "{value} ist keine ganze Zahl. Geben Sie die Zahl der Individuen jeder Art ein.",
      negative: "Zahlen dürfen nicht negativ sein ({value}).",
      countTooLarge: "Jede Zahl darf höchstens {max} betragen.",
      allZero: "Geben Sie mindestens eine Zahl über null ein.",
    },
    result: "Shannon-Index H′",
    caption: "H′ = −Σ pᵢ log pᵢ, mit {log}",
    logNames: { e: "dem natürlichen Logarithmus", "2": "dem Logarithmus zur Basis 2", "10": "dem Logarithmus zur Basis 10" },
    richness: "Artenreichtum S",
    total: "Individuen gesamt N",
    evenness: "Evenness J′ nach Pielou",
    effective: "Effektive Artenzahl",
    simpson: "Simpson-Index D",
    giniSimpson: "Gini-Simpson-Index (1 − D)",
    inverseSimpson: "Inverser Simpson-Index (1 ÷ D)",
    notAvailable: "Für diese Zahlen nicht definiert",
    table: {
      caption: "Anteile der Arten",
      species: "Art",
      count: "Anzahl",
      proportion: "Anteil pᵢ",
      term: "−pᵢ log pᵢ",
      label: "Art {n}",
    },
    notes: {
      zeros: "Ignorierte Nullwerte: {count}. Arten ohne Individuen tragen nicht zu H′ oder S bei.",
      single: "Nur eine Art hat Individuen, daher ist H′ gleich 0 und die Evenness nicht definiert.",
      simpsonUndefined: "Der Simpson-Index erfordert insgesamt mindestens 2 Individuen.",
      simpsonZero: "Jede Art hat genau ein Individuum, daher ist Simpsons D gleich 0 und sein Kehrwert nicht definiert.",
      truncated: "Die Tabelle zeigt die ersten {shown} Arten mit Individuen.",
      general: "H′ hängt von der Logarithmusbasis ab: Werte zu verschiedenen Basen unterscheiden sich um einen konstanten Faktor, die Evenness J′ und die effektive Artenzahl dagegen nicht. Vergleichen Sie Indizes nur bei gleicher Basis und gleichem Stichprobenaufwand.",
    },
  },
};

export default de;
