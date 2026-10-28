import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PunnettText } from "../text/en";

const it: CalculatorTranslation<PunnettText> = {
  content: {
    title: "Calcolatore del quadrato di Punnett",
    shortTitle: "Quadrato di Punnett",
    summary:
      "Incrocia due genitori per uno o due geni e ottieni il quadrato di Punnett, i rapporti genotipici e fenotipici e la probabilità di ciascun carattere.",
    metaTitle: "Calcolatore del quadrato di Punnett – Genotipi e fenotipi",
    metaDescription:
      "Inserisci due genotipi parentali come AaBb × AaBb: ottieni il quadrato di Punnett, i rapporti genotipici e fenotipici e la probabilità di ogni carattere.",
    keywords: [
      "quadrato di Punnett",
      "incrocio monoibrido",
      "incrocio diibrido",
      "rapporto genotipico",
      "rapporto fenotipico",
      "genetica mendeliana",
      "9:3:3:1",
      "reincrocio",
    ],
    intro: [
      "Un quadrato di Punnett elenca su un lato tutti i gameti che un genitore può produrre e sull'altro lato tutti i gameti dell'altro genitore. Ogni casella della griglia è una combinazione ugualmente probabile, quindi contando le caselle si ottiene la quota attesa di ciascun genotipo della prole.",
      "Questo calcolatore gestisce un gene (un incrocio monoibrido come Aa × aa) o due geni (un incrocio diibrido come AaBb × AaBb). Disegna la griglia e la trasforma in rapporti genotipici, rapporti fenotipici e nella probabilità di ogni combinazione di caratteri.",
    ],
    howToUse: [
      "Scegli una lettera per ogni gene. Scrivi l'allele dominante in maiuscolo e quello recessivo in minuscolo.",
      "Digita il genotipo del genitore 1, ad esempio Aa per un gene o AaBb per due geni.",
      "Digita il genotipo del genitore 2 con le stesse lettere, ad esempio aa o Aabb.",
      "Leggi il rapporto fenotipico, poi controlla la griglia e le tabelle con ogni genotipo e la sua probabilità.",
    ],
    formulas: [
      {
        title: "Gameti",
        expression: "gameti per genitore = 2ⁿ per n geni",
        explanation:
          "Ogni gamete porta un allele di ciascun gene. Con due geni un genitore come AaBb produce AB, Ab, aB e ab in parti uguali.",
      },
      {
        title: "Probabilità di un genotipo",
        expression: "P = caselle con quel genotipo ÷ caselle totali",
        explanation: "Un incrocio a un gene ha 4 caselle e uno a due geni ne ha 16, tutte ugualmente probabili.",
      },
      {
        title: "Regola del prodotto",
        expression: "P(A_ e B_) = P(A_) × P(B_)",
        explanation:
          "Con l'assortimento indipendente i geni si comportano separatamente. Per AaBb × AaBb, 3/4 × 3/4 = 9/16 della prole mostra entrambi i caratteri dominanti.",
      },
    ],
    examples: [
      {
        title: "Due genitori eterozigoti, un gene",
        steps: [
          "Ogni genitore produce gameti A e a in numero uguale.",
          "La griglia dà AA, Aa, Aa e aa: un rapporto genotipico di 1 : 2 : 1.",
          "AA e Aa mostrano entrambi il carattere dominante, quindi il rapporto fenotipico è 3 : 1 (75% e 25%).",
        ],
      },
      {
        title: "Un classico incrocio diibrido",
        steps: [
          "Ogni genitore produce quattro gameti: AB, Ab, aB e ab.",
          "La griglia 4 × 4 ha 16 caselle e 9 genotipi diversi.",
          "Raggruppati per caratteri: 9 A_B_, 3 A_bb, 3 aaB_ e 1 aabb, quindi il rapporto è 9 : 3 : 3 : 1.",
        ],
      },
      {
        title: "Reincrocio con un doppio recessivo",
        steps: [
          "Il genitore 2 può produrre solo gameti ab, quindi ogni discendente mostra gli alleli ricevuti dal genitore 1.",
          "I quattro gameti del genitore 1 sono ugualmente probabili, quindi i quattro fenotipi compaiono in rapporto 1 : 1 : 1 : 1, il 25% ciascuno.",
        ],
      },
    ],
    assumptions: [
      "Dominanza completa: basta un allele dominante per mostrare il carattere dominante. Dominanza incompleta, codominanza e alleli multipli (come i gruppi sanguigni AB0) non sono modellati.",
      "Con due geni si assume che assortiscano in modo indipendente. I geni associati sullo stesso cromosoma non seguono questi rapporti.",
      "Ogni gene ha esattamente due alleli e non è legato al sesso. Si assume che ogni combinazione di gameti abbia la stessa probabilità di sopravvivere.",
      "I risultati sono probabilità per ciascun discendente. Una prole poco numerosa può discostarsi dal rapporto atteso per puro caso.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra rapporto genotipico e fenotipico?",
        answer:
          "Il rapporto genotipico conta le combinazioni di alleli, come AA : Aa : aa = 1 : 2 : 1. Il rapporto fenotipico conta i caratteri visibili. Con dominanza completa AA e Aa appaiono uguali, quindi lo stesso incrocio dà un rapporto fenotipico di 3 : 1.",
      },
      {
        question: "Perché per alcuni genitori la griglia mostra due volte lo stesso gamete?",
        answer:
          "Un genitore come AA produce solo gameti A, ma la griglia tiene una riga o una colonna per allele, così ogni casella ha la stessa probabilità. Intestazioni doppie significano semplicemente che quel gamete è due volte più probabile.",
      },
      {
        question: "Posso inserire tre geni?",
        answer:
          "Non qui. Un incrocio a tre geni richiede 64 caselle, ed è più semplice moltiplicare le probabilità dei singoli geni con la regola del prodotto. Calcola ogni gene separatamente e moltiplica le probabilità che ti servono.",
      },
    ],
    sourcesUsedFor: [
      "Dominanza, segregazione, assortimento indipendente e il rapporto 9 : 3 : 3 : 1 di un incrocio diibrido.",
    ],
  },
  text: {
    parent1: "Genotipo del genitore 1",
    parent2: "Genotipo del genitore 2",
    parentHelp:
      "Uno o due geni, due lettere per gene: maiuscola per l'allele dominante, minuscola per quello recessivo. Esempi: Aa, AaBb, AABb.",
    parent2Help: "Usa le stesse lettere dei geni del genitore 1, ad es. aa o aabb.",
    errors: {
      invalidChar: "«{token}» non è consentito. Usa solo lettere, come Aa o AaBb.",
      length: "Inserisci un gene (2 lettere, ad es. Aa) o due geni (4 lettere, ad es. AaBb).",
      pairMismatch:
        "«{token}» mescola due geni. Ogni gene si scrive con due forme della stessa lettera, come Aa, AA o aa.",
      duplicateGene: "Il gene {token} compare due volte. Usa una lettera diversa per ogni gene, ad es. AaBb.",
      geneCount: "Entrambi i genitori devono avere lo stesso numero di geni.",
      geneMismatch: "Usa le stesse lettere dei geni del genitore 1 ({genes}).",
    },
    listSeparator: ", ",
    dominantTrait: "{gene} dominante",
    recessiveTrait: "{gene} recessivo",
    phenotypeRatio: "Rapporto fenotipico",
    caption: "Nell'ordine {order} (un trattino basso indica uno qualsiasi dei due alleli)",
    genotypeRatio: "Rapporto genotipico",
    genotypeOrder: "Genotipi in quell'ordine",
    genotypeCount: "Genotipi diversi",
    phenotypeCount: "Fenotipi diversi",
    probabilityOf: "Probabilità di una prole con {phenotype}",
    fraction: "{count} su {total}",
    gridCaption: "Quadrato di Punnett: gameti del genitore 1 sul lato, del genitore 2 in alto",
    gridCorner: "Genitore 1 ↓ · Genitore 2 →",
    genotypeTable: "Genotipi della prole",
    phenotypeTable: "Fenotipi della prole",
    columns: {
      genotype: "Genotipo",
      phenotype: "Fenotipo",
      description: "Caratteri mostrati",
      cells: "Caselle",
      probability: "Probabilità",
    },
    singlePhenotype: "In questo incrocio tutta la prole mostra gli stessi caratteri.",
    linkageNote:
      "Si assume che i due geni assortiscano in modo indipendente, come i geni su cromosomi diversi. I geni vicini sullo stesso cromosoma vengono spesso ereditati insieme, il che modifica questi rapporti.",
    note: "Presuppone una dominanza completa: basta un allele dominante per mostrare il carattere dominante. I rapporti sono probabilità per ciascun discendente, quindi cucciolate o famiglie reali possono differire per caso.",
  },
};

export default it;
