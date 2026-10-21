import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SavingsGoalText } from "../text/en";

const it: CalculatorTranslation<SavingsGoalText> = {
  content: {
    title: "Calcolatore dell'obiettivo di risparmio",
    shortTitle: "Obiettivo di risparmio",
    summary: "Calcola il versamento mensile necessario per raggiungere un obiettivo di risparmio entro una data scelta, tenendo conto di ciò che hai già risparmiato e del suo rendimento.",
    metaTitle: "Calcolatore obiettivo di risparmio – Versamento mensile",
    metaDescription:
      "Calcola quanto risparmiare al mese per raggiungere un obiettivo entro una data, tenendo conto dei risparmi attuali, del rendimento annuo atteso e della capitalizzazione mensile.",
    keywords: ["obiettivo di risparmio", "quanto risparmiare al mese", "risparmio mensile", "piano di accumulo", "risparmiare per un obiettivo", "valore futuro", "piano di risparmio"],
    intro: [
      "Risparmiare per un anticipo, un'auto o un fondo di emergenza è più facile con una cifra mensile come obiettivo. Questo calcolatore trova il versamento periodico che ti porta da ciò che hai ora al tuo obiettivo nel tempo che scegli.",
      "Tiene conto della crescita sia dei risparmi attuali sia dei nuovi versamenti, con un rendimento annuo fisso capitalizzato mensilmente. Con un rendimento dello 0 % divide semplicemente quanto manca per il numero di mesi.",
    ],
    howToUse: [
      "Scegli la valuta degli importi.",
      "Inserisci l'importo dell'obiettivo e quanto hai già risparmiato per esso.",
      "Inserisci il rendimento annuo che ti aspetti, come il tasso del tuo conto deposito.",
      "Inserisci quanti anni hai a disposizione; sono ammessi decimali come 2,5.",
      "Leggi il versamento mensile, il totale che verserai e quanto deriva dalla crescita.",
    ],
    formulas: [
      { title: "Versamento mensile", expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)", explanation: "FV è l'obiettivo, PV i risparmi attuali, i = rendimento annuo ÷ 12 in decimale e n il numero di mesi. I versamenti avvengono alla fine di ogni mese." },
      { title: "Rendimento zero", expression: "PMT = (FV − PV) ÷ n", explanation: "Senza crescita, quanto manca si divide in parti uguali tra i mesi." },
      { title: "Crescita dei risparmi attuali", expression: "PV × (1 + i)^n", explanation: "Se questo da solo raggiunge l'obiettivo, non servono versamenti." },
    ],
    examples: [
      {
        title: "$15.000 in 4 anni partendo da $1.000 al 4,5 %",
        steps: ["i = 0,045 ÷ 12 = 0,00375; n = 48", "1.000 × 1,00375^48 ≈ $1.196,81", "PMT = (15.000 − 1.196,81) × 0,00375 ÷ (1,00375^48 − 1) ≈ $263,00"],
      },
      {
        title: "$30.000 in 10 anni partendo da zero al 6 %",
        steps: ["i = 0,005; n = 120", "PMT = 30.000 × 0,005 ÷ (1,005^120 − 1)", "≈ $183,06 al mese; i versamenti ammontano a circa $21.967"],
      },
      {
        title: "$6.000 in 2 anni partendo da $1.200 senza interessi",
        steps: ["n = 24 mesi", "PMT = (6.000 − 1.200) ÷ 24 = $200"],
      },
    ],
    assumptions: [
      "Il rendimento annuo è costante e capitalizzato mensilmente al tasso annuo ÷ 12. I rendimenti reali variano e gli investimenti possono perdere valore.",
      "I versamenti sono uguali ogni mese e avvengono alla fine di ciascun mese. Imposte, commissioni e inflazione non sono incluse.",
      "La durata viene arrotondata al mese intero più vicino.",
      "È una stima, non una consulenza finanziaria, e non è stata verificata da professionisti.",
    ],
    faqs: [
      {
        question: "Perché il versamento mensile è inferiore all'obiettivo diviso per i mesi?",
        answer: "I tuoi risparmi attuali e ogni versamento producono rendimento nel frattempo, quindi una parte dell'obiettivo è coperta dalla crescita. Più alto è il rendimento e più lungo il periodo, più la crescita aiuta.",
      },
      {
        question: "Quale rendimento devo inserire?",
        answer: "Per un conto deposito usa il suo tasso d'interesse annuo. Per gli investimenti usa una stima prudente di lungo periodo e ricorda che il rendimento non è garantito. Inserendo 0 % vedi il versamento necessario senza alcuna crescita.",
      },
      {
        question: "E se verso all'inizio di ogni mese?",
        answer: "Allora ogni versamento produce un mese di rendimento in più, quindi il versamento necessario è un po' più basso: circa il risultato mostrato qui diviso per (1 + i), dove i è il tasso mensile.",
      },
    ],
    sourcesUsedFor: ["Il valore futuro di una rendita posticipata e la rata del fondo di ammortamento che ne deriva."],
  },
  text: {
    goal: "Obiettivo di risparmio",
    goalHelp: "L'importo che vuoi avere alla fine.",
    current: "Risparmi attuali",
    currentHelp: "Quanto hai già messo da parte per questo obiettivo. Inserisci 0 se parti da zero.",
    rate: "Rendimento annuo",
    rateHelp: "Interesse o rendimento d'investimento annuo previsto, capitalizzato mensilmente. Usa 0 % per contanti senza interessi.",
    years: "Tempo per raggiungere l'obiettivo",
    yearsHelp: "In anni; sono ammessi decimali (1,5 = 18 mesi).",
    yearsSuffix: "anni",
    tooShort: "Usa almeno un mese (circa 0,05 anni).",
    deposit: "Versamento mensile necessario",
    caption: "Versato alla fine di ogni mese per {months} al {rate} annuo, più {current} già risparmiati, per arrivare a {goal}.",
    months: { zero: "{n} mesi", one: "{n} mese", two: "{n} mesi", few: "{n} mesi", many: "{n} mesi", other: "{n} mesi" },
    totalDeposits: "Totale versato",
    growth: "Crescita ottenuta",
    currentGrows: "Risparmi attuali alla fine",
    endBalance: "Saldo finale",
    numberOfDeposits: "Numero di versamenti mensili",
    notes: {
      reached: "Si prevede che i tuoi risparmi attuali raggiungano l'obiettivo da soli, quindi non servono altri versamenti.",
      constant: "Si presume che il rendimento sia lo stesso ogni mese. I rendimenti reali variano, e imposte, commissioni e inflazione non sono incluse.",
    },
  },
};

export default it;
