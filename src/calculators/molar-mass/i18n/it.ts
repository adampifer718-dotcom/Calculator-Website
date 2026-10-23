import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarMassText } from "../text/en";

const it: CalculatorTranslation<MolarMassText> = {
  content: {
    title: "Calcolatore di massa molare",
    shortTitle: "Massa molare",
    summary:
      "Scrivi una formula chimica, anche con parentesi e idrati, e ottieni la massa molare in g/mol con la quota in massa di ciascun elemento.",
    metaTitle: "Calcolatore di massa molare – g/mol da una formula chimica",
    metaDescription:
      "Trova la massa molare di qualsiasi formula chimica in g/mol, con parentesi e idrati come CuSO4·5H2O, più atomi e percentuale in massa di ogni elemento.",
    keywords: [
      "massa molare",
      "calcolo massa molare",
      "peso molecolare",
      "g/mol",
      "massa formula",
      "composizione percentuale in massa",
      "massa molare idrati",
    ],
    intro: [
      "La massa molare di una sostanza è la massa di una mole di quella sostanza, in grammi per mole. Per un composto è semplicemente la somma dei pesi atomici di tutti gli atomi della formula: l'acqua, H2O, ha due idrogeni e un ossigeno, quindi circa 2 × 1,008 + 15,999 = 18,015 g/mol.",
      "Scrivi una formula qualsiasi e questo calcolatore conta gli atomi per te, compresi i gruppi tra parentesi tonde o quadre come Ca(OH)2 o K4[Fe(CN)6] e gli idrati come CuSO4·5H2O. Mostra anche quanta parte della massa totale apporta ciascun elemento.",
    ],
    howToUse: [
      "Scrivi la formula con le maiuscole corrette: Co è il cobalto, mentre CO è il monossido di carbonio.",
      "Metti il numero dopo ogni elemento o gruppo tra parentesi, ad esempio Al2(SO4)3. Se il numero manca, vale 1.",
      "Per un idrato, separa le parti con ·, . o * e metti davanti il numero di molecole d'acqua, come in MgSO4·7H2O.",
      "Leggi la massa molare e la tabella con numero di atomi, contributi in massa e percentuali in massa.",
    ],
    formulas: [
      {
        title: "Massa molare",
        expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol",
        explanation: "nᵢ è il numero di atomi dell'elemento i nella formula e Aᵣ,ᵢ è il suo peso atomico standard.",
      },
      {
        title: "Gruppi e idrati",
        expression: "(X)ₖ → ogni numero all'interno × k\nA·nB → atomi di A + n × atomi di B",
        explanation:
          "I moltiplicatori delle parentesi valgono per tutto il contenuto, compresi i gruppi annidati; il coefficiente di un idrato vale per la parte dopo il punto.",
      },
      {
        title: "Percentuale in massa",
        expression: "% elemento i = nᵢ × Aᵣ,ᵢ ÷ M × 100",
        explanation: "La quota della massa molare che proviene da ciascun elemento.",
      },
    ],
    examples: [
      {
        title: "Glucosio, C6H12O6",
        steps: [
          "Carbonio: 6 × 12,011 = 72,066",
          "Idrogeno: 12 × 1,008 = 12,096",
          "Ossigeno: 6 × 15,999 = 95,994",
          "M = 72,066 + 12,096 + 95,994 = 180,156 g/mol",
        ],
      },
      {
        title: "Solfato di rame(II) pentaidrato, CuSO4·5H2O",
        steps: [
          "CuSO4: 63,546 + 32,06 + 4 × 15,999 = 159,602",
          "5 H2O: 5 × (2 × 1,008 + 15,999) = 5 × 18,015 = 90,075",
          "M = 159,602 + 90,075 = 249,677 g/mol",
          "Il rame costituisce 63,546 ÷ 249,677 ≈ 25,45% della massa",
        ],
      },
      {
        title: "Ferrocianuro di potassio, K4[Fe(CN)6]",
        steps: [
          "Potassio: 4 × 39,098 = 156,392",
          "Ferro: 1 × 55,845 = 55,845",
          "(CN)6: 6 × (12,011 + 14,007) = 156,108",
          "M = 156,392 + 55,845 + 156,108 = 368,345 g/mol",
        ],
      },
    ],
    assumptions: [
      "I pesi atomici sono i pesi atomici standard abbreviati IUPAC/CIAAW. Quando il peso atomico di un elemento varia in natura ed è dato come intervallo, si usa il valore convenzionale singolo, quindi l'ultima cifra può differire da altre tabelle.",
      "Gli elementi senza peso atomico standard, come tecnezio, promezio, polonio e la maggior parte degli elementi più pesanti del bismuto tranne torio, protoattinio e uranio, vengono rifiutati perché la loro massa molare dipende dall'isotopo.",
      "Cariche, isotopi (come D o ¹³C) e simboli di stato non sono supportati. La formula è trattata come un'unità formula neutra con abbondanze isotopiche naturali; la massa degli elettroni acquistati o persi da uno ione è trascurabile.",
    ],
    faqs: [
      {
        question: "La massa molare è uguale al peso molecolare?",
        answer:
          "Hanno lo stesso valore numerico. Il peso molecolare (massa molecolare relativa) non ha unità, mentre la massa molare si esprime in grammi per mole. L'acqua ha un peso molecolare di 18,015 e una massa molare di 18,015 g/mol.",
      },
      {
        question: "Come inserisco un idrato?",
        answer:
          "Scrivi il sale, poi un punto (·, . o *), poi il numero di molecole d'acqua e H2O, ad esempio CuSO4·5H2O o Na2CO3*10H2O. Il coefficiente moltiplica tutto ciò che si trova nella parte dopo il punto.",
      },
      {
        question: "Perché il mio libro di testo riporta un valore leggermente diverso?",
        answer:
          "Le tabelle arrotondano i pesi atomici in modo diverso e alcune usano valori più vecchi. Il cloro, ad esempio, qui è indicato come 35,45 ma come 35,453 in tabelle più vecchie, e questo cambia l'ultimo decimale di NaCl.",
      },
    ],
    sourcesUsedFor: ["I pesi atomici standard abbreviati e i valori convenzionali usati per ciascun elemento."],
  },
  text: {
    formula: "Formula chimica",
    formulaHelp:
      "I simboli degli elementi distinguono maiuscole e minuscole (Co è il cobalto, CO è il monossido di carbonio). Usa ( ) o [ ] per i gruppi e ·, . o * per gli idrati, ad es. CuSO4·5H2O.",
    formulaPlaceholder: "ad es. Ca(OH)2",
    errors: {
      empty: "Inserisci una formula chimica.",
      tooLong: "La formula è troppo lunga. Usa al massimo 200 caratteri.",
      invalidChar:
        "Carattere non valido “{token}” in posizione {position}. Usa solo simboli degli elementi, numeri, parentesi e punti degli idrati.",
      lowercase:
        "Lettera minuscola inattesa “{token}” in posizione {position}. I simboli degli elementi iniziano con una maiuscola, ad es. Na o Cl.",
      unknownElement: "Simbolo di elemento sconosciuto “{token}” in posizione {position}.",
      noStandardWeight:
        "{token} (posizione {position}) non ha un peso atomico standard, quindi la sua massa molare non può essere calcolata.",
      unclosed: "Parentesi non bilanciate: la “{token}” in posizione {position} non viene mai chiusa.",
      unexpectedClose: "Parentesi non bilanciate: la “{token}” in posizione {position} non ha una parentesi di apertura corrispondente.",
      mismatched: "Parentesi non corrispondenti: la “{token}” in posizione {position} non corrisponde alla parentesi che chiude.",
      emptyGroup: "Il gruppo tra parentesi che inizia in posizione {position} è vuoto.",
      zeroCount: "Il numero in posizione {position} è zero. I numeri devono essere interi pari ad almeno 1.",
      misplacedNumber: "Il numero in posizione {position} non è associato a un elemento o a un gruppo.",
      misplacedDot: "Il punto dell'idrato in posizione {position} deve stare tra due parti della formula, ad es. CuSO4·5H2O.",
      tooManyAtoms: "La formula ha troppi atomi. Usa al massimo 1.000.000 di atomi in totale.",
    },
    molarMass: "Massa molare",
    caption: "{formula}: somma di ogni numero di atomi × peso atomico standard",
    totalAtoms: "Atomi per unità formula",
    elements: "Elementi diversi",
    massOfMole: "Massa di una mole",
    tableCaption: "Composizione per elemento",
    columns: { element: "Elemento", count: "Atomi", weight: "Peso atomico", mass: "Massa (g/mol)", percent: "% in massa" },
    note: "I pesi atomici sono i valori standard abbreviati IUPAC. Per gli elementi con un intervallo naturale (come H, C, N, O e S) si usa il valore convenzionale singolo.",
  },
};

export default it;
