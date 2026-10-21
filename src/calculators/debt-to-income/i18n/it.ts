import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DebtToIncomeText } from "../text/en";

const it: CalculatorTranslation<DebtToIncomeText> = {
  content: {
    title: "Calcolatore del rapporto debito/reddito",
    shortTitle: "Rapporto debito/reddito",
    summary: "Calcola il tuo rapporto debito/reddito complessivo (back-end) e quello relativo all'abitazione (front-end) a partire dal reddito lordo mensile e dalle rate mensili dei debiti.",
    metaTitle: "Calcolatore del rapporto debito/reddito (DTI)",
    metaDescription:
      "Calcola il tuo rapporto debito/reddito (DTI): rate mensili dei debiti divise per il reddito lordo mensile, con il rapporto per l'abitazione e il debito totale.",
    keywords: ["rapporto debito reddito", "DTI", "debt to income", "rapporto rata reddito", "sostenibilità del mutuo", "capacità di indebitamento", "debiti mensili"],
    intro: [
      "Il rapporto debito/reddito, o DTI (debt-to-income), confronta quanto paghi ogni mese per i tuoi debiti con quanto guadagni prima delle imposte. I finanziatori lo usano per misurare quanto margine ha il tuo bilancio per un nuovo prestito.",
      "Inserisci il tuo reddito lordo mensile e le rate mensili dei debiti. Il calcolatore fornisce il rapporto complessivo (back-end), che include tutti i debiti, e il rapporto per l'abitazione (front-end), che considera solo la casa.",
    ],
    howToUse: [
      "Scegli la valuta degli importi.",
      "Inserisci il tuo reddito lordo mensile, prima di imposte e trattenute.",
      "Inserisci la spesa mensile per l'abitazione: l'affitto o la rata del mutuo comprensiva di imposte e assicurazione.",
      "Inserisci le altre rate mensili dei debiti. Per le carte di credito usa il pagamento minimo.",
      "Leggi il rapporto complessivo, il rapporto per l'abitazione e il totale delle rate dei debiti.",
    ],
    formulas: [
      { title: "DTI complessivo (back-end)", expression: "DTI = rate mensili dei debiti ÷ reddito lordo mensile × 100", explanation: "Tutte le rate dei debiti, compresa l'abitazione." },
      { title: "Rapporto per l'abitazione (front-end)", expression: "rapporto abitazione = spesa per l'abitazione ÷ reddito lordo mensile × 100", explanation: "Solo l'affitto o la rata del mutuo." },
      { title: "Debito mensile totale", expression: "debito = abitazione + auto + studi + carte + altri", explanation: "Rate mensili obbligatorie, non saldi residui." },
    ],
    examples: [
      {
        title: "Reddito di $6000 con $2000 di rate",
        steps: ["Debito totale = 1500 + 100 + 400 = $2000", "DTI = 2000 ÷ 6000 × 100 ≈ 33,33%", "Rapporto abitazione = 1500 ÷ 6000 = 25%"],
      },
      {
        title: "Reddito di $5400, affitto e un prestito auto",
        steps: ["Debito totale = 1450 + 310 + 120 = $1880", "DTI = 1880 ÷ 5400 × 100 ≈ 34,81%", "Rapporto abitazione = 1450 ÷ 5400 ≈ 26,85%"],
      },
    ],
    assumptions: [
      "Il reddito è lordo (prima delle imposte). I finanziatori possono calcolare il reddito in altro modo, per esempio facendo la media dei redditi da lavoro autonomo o escludendo i bonus irregolari.",
      "Sono incluse solo le rate mensili obbligatorie. Utenze, spesa alimentare, telefono e altre spese di vita non sono debiti e restano escluse.",
      "Ogni finanziatore e programma di prestito fissa i propri limiti e valuta anche la storia creditizia, i risparmi e altri fattori. Un rapporto del 43% è stato un riferimento comune nelle norme statunitensi sui mutui, ma non è un limite universale.",
      "È una stima, non una consulenza finanziaria, e non è stata verificata da professionisti.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra il DTI per l'abitazione (front-end) e quello complessivo (back-end)?",
        answer: "Il rapporto per l'abitazione conta solo la spesa per la casa. Il rapporto complessivo aggiunge tutte le altre rate mensili dei debiti, come quelle dell'auto, dei prestiti per gli studi e delle carte di credito. Quando si parla di DTI, di solito si intende il rapporto complessivo.",
      },
      {
        question: "Perché si cita così spesso la soglia del 43%?",
        answer: "Le norme statunitensi sui mutui qualificati (qualified mortgages) usavano il 43% come riferimento per il rapporto debito/reddito, quindi questo valore è stato citato molto. Finanziatori e programmi di prestito applicano i propri limiti, che possono essere più alti o più bassi.",
      },
      {
        question: "Come posso abbassare il mio rapporto debito/reddito?",
        answer: "Riduci le rate mensili dei debiti, per esempio estinguendo un prestito o il saldo di una carta, oppure aumenta il reddito lordo. Contrarre nuovi debiti prima di chiedere un prestito fa salire il rapporto.",
      },
    ],
    sourcesUsedFor: [
      "La definizione del DTI come rate mensili dei debiti divise per il reddito lordo mensile e il riferimento del 43% nelle norme statunitensi sui mutui.",
    ],
  },
  text: {
    income: "Reddito lordo mensile",
    incomeHelp: "Il tuo stipendio prima di imposte e trattenute, in un mese. Includi tutte le tue fonti di reddito abituali.",
    housing: "Spesa per l'abitazione",
    housingHelp: "L'affitto mensile, o la rata del mutuo comprensiva di imposta sugli immobili, assicurazione della casa ed eventuali spese condominiali.",
    car: "Rate dei prestiti auto",
    student: "Rate dei prestiti per gli studi",
    creditCards: "Pagamenti minimi delle carte di credito",
    creditCardsHelp: "Il minimo di ogni carta, non il saldo intero.",
    other: "Altre rate di debiti",
    otherHelp: "Prestiti personali, assegni di mantenimento per i figli o per il coniuge e qualsiasi altra rata mensile obbligatoria di debiti.",
    backEnd: "Rapporto debito/reddito (complessivo)",
    caption: "{debt} di rate mensili dei debiti su {income} di reddito lordo mensile.",
    frontEnd: "Rapporto per l'abitazione (front-end)",
    totalDebt: "Totale delle rate mensili dei debiti",
    nonHousing: "Rate dei debiti esclusa l'abitazione",
    remaining: "Reddito lordo rimanente dopo le rate dei debiti",
    notes: {
      lenders: "Ogni finanziatore e programma di prestito fissa i propri limiti di indebitamento e valuta anche altri fattori, quindi questo rapporto da solo non indica se otterresti un prestito.",
      reference: "Secondo il Consumer Financial Protection Bureau, un rapporto debito/reddito del 43% è stato un riferimento comune nelle norme statunitensi sui mutui qualificati.",
      overIncome: "Le tue rate mensili dei debiti superano il tuo reddito lordo mensile.",
    },
  },
};

export default it;
