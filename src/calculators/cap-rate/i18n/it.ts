import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CapRateText } from "../text/en";

const it: CalculatorTranslation<CapRateText> = {
  content: {
    title: "Calcolatore del cap rate",
    shortTitle: "Cap rate",
    summary:
      "Trova il tasso di capitalizzazione di un immobile in affitto da reddito, sfitto e spese operative, oppure il suo valore da un cap rate obiettivo.",
    metaTitle: "Calcolatore del cap rate – NOI e valore dell'immobile",
    metaDescription:
      "Calcola il cap rate di un immobile in affitto da canoni, sfitto e spese operative, o stimane il valore dal reddito operativo netto e da un cap rate obiettivo.",
    keywords: [
      "cap rate",
      "tasso di capitalizzazione",
      "reddito operativo netto",
      "NOI",
      "immobile in affitto",
      "metodo reddituale",
      "investimento immobiliare",
      "valore dell'immobile",
    ],
    intro: [
      "Il tasso di capitalizzazione, o cap rate, confronta il reddito prodotto da un immobile con il suo valore. È il reddito operativo netto di un anno diviso per il valore o il prezzo dell'immobile, espresso in percentuale.",
      "Gli investitori lo usano per confrontare rapidamente gli immobili indipendentemente da come sono finanziati. Inserisci canoni, sfitto e costi di gestione per ottenere il cap rate, oppure cambia modalità per trasformare un reddito operativo netto e un cap rate obiettivo in un valore stimato.",
    ],
    howToUse: [
      "Scegli se trovare il cap rate o il valore e seleziona la valuta.",
      "Per il cap rate, inserisci il valore o il prezzo richiesto dell'immobile, il canone lordo annuo, la quota di sfitto e le spese operative annue.",
      "Per il valore, inserisci il reddito operativo netto e il cap rate che hai come obiettivo.",
      "Leggi il cap rate o il valore, insieme al reddito lordo effettivo, al NOI e all'incidenza delle spese.",
    ],
    formulas: [
      {
        title: "Reddito lordo effettivo",
        expression: "EGI = reddito lordo × (1 − sfitto)",
        explanation: "Lo sfitto è la quota di reddito persa per unità vuote e canoni non pagati.",
      },
      {
        title: "Reddito operativo netto",
        expression: "NOI = EGI − spese operative",
        explanation: "Le spese operative escludono le rate del mutuo, l'ammortamento e le imposte sul reddito.",
      },
      {
        title: "Cap rate",
        expression: "cap rate = NOI ÷ valore × 100%",
        explanation: "Il rendimento annuo, al lordo delle imposte, che l'immobile darebbe a un acquirente che paga interamente in contanti.",
      },
      {
        title: "Valore da un cap rate",
        expression: "valore = NOI ÷ cap rate",
        explanation: "Dividi per il tasso in forma decimale, quindi 6% è 0,06.",
      },
    ],
    examples: [
      {
        title: "Bifamiliare del valore di $450.000",
        steps: ["EGI = 48.000 × 0,95 = $45.600", "NOI = 45.600 − 16.000 = $29.600", "Cap rate = 29.600 ÷ 450.000 ≈ 6,58%"],
      },
      {
        title: "Piccolo condominio in vendita a $720.000",
        steps: ["EGI = 62.400 × 0,92 = $57.408", "NOI = 57.408 − 21.500 = $35.908", "Cap rate = 35.908 ÷ 720.000 ≈ 4,99%"],
      },
      {
        title: "Valore di un negozio con NOI di $41.250 a un cap rate del 5,75%",
        steps: ["Valore = 41.250 ÷ 0,0575", "≈ $717.391,30"],
      },
    ],
    assumptions: [
      "Il cap rate ignora finanziamento, imposte sul reddito, migliorie in conto capitale e variazioni future di canoni o valore. È un'istantanea del reddito di un anno.",
      "Il risultato dipende interamente dai dati di reddito e spesa che inserisci. Usa costi operativi realistici per l'intero anno, compresi gestione e manutenzione anche se te ne occupi tu.",
      "Un reddito operativo netto negativo è ammesso e dà un cap rate negativo, il che significa che l'immobile non copre i propri costi di gestione.",
      "Si tratta di una stima, non di una consulenza finanziaria o di investimento, e non è stata verificata da professionisti.",
    ],
    faqs: [
      {
        question: "Qual è un buon cap rate?",
        answer:
          "Non esiste un unico valore buono. I cap rate dipendono da posizione, tipo di immobile, stato di conservazione e tassi di interesse. Un cap rate più alto significa più reddito rispetto al prezzo, ma di solito anche più rischio o una crescita attesa minore.",
      },
      {
        question: "Perché le rate del mutuo sono escluse dalle spese operative?",
        answer:
          "Il cap rate descrive l'immobile, non il prestito dell'acquirente. Escludere il finanziamento permette di confrontare gli immobili in modo equo. Per includere il prestito, guarda invece il rendimento cash-on-cash o il ROI.",
      },
      {
        question: "Perché un cap rate più basso fa aumentare il valore?",
        answer:
          "Il valore è il NOI diviso per il cap rate. Con lo stesso NOI di $40.000, un cap rate del 5% dà $800.000 mentre un cap rate dell'8% dà $500.000, quindi gli acquirenti che accettano cap rate più bassi pagano di più.",
      },
    ],
    sourcesUsedFor: [
      "Il tasso di capitalizzazione come rapporto tra reddito operativo netto e valore, e valore = reddito ÷ tasso.",
      "La relazione I = R × V tra reddito operativo netto, cap rate complessivo e valore.",
    ],
  },
  text: {
    mode: "Calcola",
    modes: { rate: "Cap rate dal reddito", value: "Valore da un cap rate obiettivo" },
    value: "Valore o prezzo dell'immobile",
    gross: "Reddito lordo annuo da affitti",
    grossHelp: "Tutti i canoni che l'immobile incasserebbe in un anno se interamente affittato, più altri redditi come parcheggi o lavanderia.",
    vacancy: "Sfitto e morosità",
    vacancyHelp: "La quota di reddito lordo che prevedi di perdere per unità vuote e canoni non pagati.",
    expenses: "Spese operative annue",
    expensesHelp:
      "Imposte sull'immobile, assicurazione, manutenzione, gestione, utenze a tuo carico e costi di gestione simili. Non includere rate del mutuo, ammortamento o imposte sul reddito.",
    noi: "Reddito operativo netto (NOI) annuo",
    noiHelp: "Reddito al netto di sfitto e spese operative, prima delle rate del mutuo e delle imposte sul reddito.",
    targetRate: "Cap rate obiettivo",
    errors: {
      noiPositive: "Il reddito operativo netto deve essere maggiore di 0 per calcolare un valore.",
    },
    capRate: "Cap rate",
    capCaption: "Reddito operativo netto di {noi} su un valore di {value}.",
    propertyValue: "Valore stimato dell'immobile",
    valueCaption: "{noi} di reddito operativo netto capitalizzato al {rate}.",
    egi: "Reddito lordo effettivo",
    noiResult: "Reddito operativo netto (NOI)",
    monthlyNoi: "NOI mensile",
    expenseRatio: "Incidenza delle spese operative (sul reddito lordo effettivo)",
    grm: "Moltiplicatore del reddito lordo (valore ÷ reddito lordo)",
    valuePerPoint: "Variazione di valore se il cap rate è più basso di 1 punto",
    notes: {
      negative:
        "Le spese operative superano il reddito al netto dello sfitto, quindi il NOI e il cap rate sono negativi: l'immobile non copre i propri costi di gestione.",
      financing: "Il cap rate ignora finanziamento, imposte sul reddito e variazioni future del valore.",
    },
  },
};

export default it;
