import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BakersPercentageText } from "../text/en";

const it: CalculatorTranslation<BakersPercentageText> = {
  content: {
    title: "Calcolatore delle percentuali del panettiere",
    shortTitle: "Percentuali del panettiere",
    summary:
      "Trasforma le percentuali del panettiere in pesi degli ingredienti a partire dal peso della farina, oppure trova la farina per un peso d'impasto desiderato, con l'idratazione.",
    metaTitle: "Calcolatore percentuali del panettiere – Pesi e idratazione",
    metaDescription:
      "Converti le percentuali del panettiere in grammi o once di farina, acqua, sale, lievito e altri ingredienti, trova la farina per un peso d'impasto e vedi l'idratazione.",
    keywords: [
      "percentuale del panettiere",
      "percentuali da fornaio",
      "idratazione impasto",
      "calcolo impasto",
      "ricetta del pane",
      "impasto pizza grammi",
      "percentuale di farina",
    ],
    intro: [
      "I panettieri scrivono le ricette del pane come percentuali della farina. La farina vale sempre 100% e ogni altro ingrediente è espresso rispetto a essa: un impasto con il 70% di acqua usa 700 g di acqua ogni 1.000 g di farina. Poiché le percentuali si riferiscono alla farina, la loro somma supera il 100%.",
      "Così le ricette si scalano e si confrontano facilmente. Inserisci il peso della farina per ottenere il peso di ogni ingrediente, oppure il peso totale d'impasto che ti serve, per esempio quattro panetti da pizza da 250 g, per sapere con quanta farina partire.",
    ],
    howToUse: [
      "Scegli se partire dal peso della farina o dal peso totale dell'impasto che vuoi ottenere.",
      "Scegli grammi o once e inserisci il peso.",
      "Inserisci le percentuali di acqua, sale e lievito e fino a tre ingredienti aggiuntivi come olio, zucchero o burro, ciascuno con un nome facoltativo.",
      "Leggi nella tabella il peso di ogni ingrediente, il peso totale dell'impasto e l'idratazione.",
    ],
    formulas: [
      {
        title: "Peso di un ingrediente",
        expression: "peso = peso della farina × percentuale ÷ 100",
        explanation: "La percentuale di ogni ingrediente si riferisce al peso totale della farina, che vale 100%.",
      },
      { title: "Peso totale dell'impasto", expression: "impasto = farina × Σ% ÷ 100", explanation: "Σ% è la somma di tutte le percentuali, compreso il 100% della farina." },
      {
        title: "Farina per un peso d'impasto desiderato",
        expression: "farina = impasto desiderato ÷ (Σ% ÷ 100)",
        explanation: "Per 1.500 g di impasto con Σ% = 171,5%, la farina è 1.500 ÷ 1,715 ≈ 874,6 g.",
      },
      { title: "Idratazione", expression: "idratazione = acqua ÷ farina × 100%", explanation: "Con le percentuali del panettiere coincide semplicemente con la percentuale di acqua." },
    ],
    examples: [
      {
        title: "Pane semplice con 1.000 g di farina al 70% di idratazione",
        steps: ["Acqua = 1.000 × 0,70 = 700 g", "Sale = 20 g e lievito = 10 g", "Totale = 1.000 × 173% = 1.730 g di impasto"],
      },
      {
        title: "1.500 g di impasto per pizza con il 3% di olio d'oliva",
        steps: ["Σ% = 100 + 65 + 2 + 1,5 + 3 = 171,5%", "Farina = 1.500 ÷ 1,715 ≈ 874,6 g", "Acqua = 874,6 × 0,65 ≈ 568,5 g"],
      },
      {
        title: "Pan carré con 16 oz di farina e il 5% di zucchero",
        steps: ["Σ% = 100 + 68 + 2 + 0,5 + 5 = 175,5%", "Acqua = 16 × 0,68 = 10,88 oz; zucchero = 0,8 oz", "Totale = 16 × 1,755 = 28,08 oz di impasto"],
      },
    ],
    assumptions: [
      "Tutte le percentuali sono in peso, riferite al peso totale di tutte le farine della ricetta.",
      "L'idratazione considera solo la riga dell'acqua. Latte, uova, burro o un lievito madre contengono anch'essi acqua (e il lievito madre anche farina), quindi aggiungili come righe extra e regola l'acqua se vuoi un'idratazione complessiva esatta.",
      "Il peso dell'impasto è la somma degli ingredienti prima della cottura. Un po' d'impasto resta sempre attaccato a ciotole e attrezzi, e il pane perde peso in forno, quindi prevedi un piccolo margine quando ti servono pezzature esatte.",
    ],
    faqs: [
      {
        question: "Perché le percentuali del panettiere superano il 100%?",
        answer:
          "Perché ogni ingrediente è confrontato con la farina, non con l'intero impasto. La sola farina vale 100%, quindi una volta aggiunti acqua, sale e lievito il totale è sempre sopra il 100%, spesso intorno al 160–180% per il pane.",
      },
      {
        question: "Che cosa significa idratazione al 70%?",
        answer:
          "Significa che l'impasto contiene 70 g di acqua ogni 100 g di farina. Un'idratazione più alta dà un impasto più umido e appiccicoso e di solito una mollica più alveolata; un'idratazione più bassa dà un impasto più sodo, più facile da formare.",
      },
      {
        question: "Come scalo una ricetta con le percentuali del panettiere?",
        answer:
          "Mantieni le stesse percentuali e cambia solo il peso della farina, oppure inserisci il peso totale d'impasto che ti serve e lascia che il calcolatore trovi la farina. Tutti gli altri ingredienti si adeguano automaticamente.",
      },
    ],
    sourcesUsedFor: [
      "La definizione di percentuale del panettiere: ogni ingrediente come percentuale del peso totale della farina, con la farina sempre al 100%.",
    ],
  },
  text: {
    mode: "Parti da",
    modes: { fromFlour: "Peso della farina", fromDough: "Peso d'impasto desiderato" },
    unit: "Unità di peso",
    units: { g: "Grammi (g)", oz: "Once (oz)" },
    flour: "Peso totale della farina",
    flourHelp: "Tutta la farina della ricetta. Vale 100%.",
    dough: "Peso d'impasto desiderato",
    doughHelp: "Il peso totale d'impasto che vuoi ottenere, per esempio il numero di pagnotte o pizze moltiplicato per il peso di ciascuna.",
    water: "Acqua",
    salt: "Sale",
    yeast: "Lievito",
    pctHelp: "In percentuale del peso della farina.",
    extraName: "Ingrediente aggiuntivo {n} (facoltativo)",
    extraNamePlaceholder: "es. olio d'oliva",
    extraPct: "Ingrediente aggiuntivo {n}, % della farina",
    extraDefault: "Ingrediente aggiuntivo {n}",
    doughWeight: "Peso totale dell'impasto",
    flourNeeded: "Farina necessaria",
    captionFlour: "{flour} di farina per un totale di {total}.",
    captionDough: "{dough} di impasto ÷ ({total} ÷ 100).",
    flourOut: "Farina",
    totalPct: "Somma di tutte le percentuali",
    hydration: "Idratazione (acqua ÷ farina)",
    waterOut: "Peso dell'acqua",
    tableCaption: "Pesi degli ingredienti",
    colIngredient: "Ingrediente",
    colPercent: "Percentuale del panettiere",
    colWeight: "Peso",
    flourRow: "Farina",
    totalRow: "Impasto totale",
    notes: {
      hydration:
        "L'idratazione considera solo la riga dell'acqua. Latte, uova, lievito madre o altri ingredienti umidi aggiungono acqua, quindi se li usi l'idratazione reale dell'impasto è più alta.",
      rounding: "Piccole quantità come lievito e sale si pesano più facilmente con precisione su una bilancia con risoluzione di 0,1 g.",
    },
  },
};

export default it;
