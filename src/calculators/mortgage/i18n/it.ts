import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MortgageText } from "../text/en";

const it: CalculatorTranslation<MortgageText> = {
  content: {
    title: "Calcolatore del mutuo con tasse e assicurazioni",
    shortTitle: "Mutuo",
    summary: "Stima il costo mensile completo di un mutuo per la casa: capitale e interessi più imposte sugli immobili, assicurazione, spese condominiali e assicurazione sul mutuo.",
    metaTitle: "Calcolatore mutuo – Rata mensile con imposte e PMI",
    metaDescription:
      "Stima la rata mensile del mutuo con capitale e interessi separati da imposte sugli immobili, assicurazione casa, spese HOA e PMI, più gli interessi totali.",
    keywords: ["mutuo", "rata del mutuo", "mutuo casa", "piti", "pmi", "imposta sugli immobili", "rata della casa", "anticipo"],
    intro: [
      "La rata di un mutuo non è solo il rimborso del prestito. I finanziatori spesso riscuotono con ogni rata anche l'imposta sugli immobili e l'assicurazione della casa, e alcuni acquirenti pagano anche spese condominiali (HOA) o un'assicurazione sul mutuo.",
      "Questo calcolatore mostra capitale e interessi separatamente da questi altri costi, così puoi vedere cosa è fissato dal prestito e cosa dipende dalle imposte e dalle assicurazioni locali.",
    ],
    howToUse: [
      "Inserisci il prezzo della casa e l'anticipo.",
      "Inserisci il tasso di interesse e la durata del mutuo.",
      "Inserisci l'imposta annuale sugli immobili e l'assicurazione della casa, più eventuali spese HOA o di servizio mensili.",
      "Inserisci il tasso dell'assicurazione sul mutuo se l'anticipo è inferiore al 20%, oppure 0 se non si applica.",
      "Leggi la rata mensile totale e la sua scomposizione.",
    ],
    formulas: [
      { title: "Capitale e interessi", expression: "M = L × r ÷ (1 − (1 + r)^(−n))", explanation: "L è l'importo del prestito (prezzo − anticipo), r il tasso mensile (tasso annuo ÷ 12) e n il numero di rate mensili." },
      { title: "Rata mensile", expression: "Rata = M + imposta sugli immobili ÷ 12 + assicurazione ÷ 12 + HOA + PMI", explanation: "Imposte e assicurazione sono ripartite in modo uniforme su 12 mesi, come in un tipico conto di deposito vincolato (escrow)." },
      { title: "Assicurazione sul mutuo", expression: "PMI = L × tasso PMI ÷ 12, finché L ÷ prezzo > 80%", explanation: "Cessa quando il debito residuo previsto raggiunge il 78% del prezzo della casa. Per la legge statunitense termina comunque al più tardi a metà della durata del mutuo." },
    ],
    examples: [
      {
        title: "Casa da 400.000, anticipo del 20%, 6,5% per 30 anni",
        steps: ["Prestito = $400.000 − $80.000 = $320.000; r = 0,065 ÷ 12; n = 360", "Capitale e interessi ≈ $2.022,62", "Imposta $400 + assicurazione $125 al mese; nessuna PMI con un rapporto prestito/valore dell'80%", "Totale ≈ $2.547,62 al mese"],
      },
      {
        title: "Casa da 300.000, anticipo del 5%, 6% per 30 anni con PMI",
        steps: ["Prestito = $285.000; capitale e interessi ≈ $1.708,72", "PMI = $285.000 × 0,5% ÷ 12 = $118,75 per le prime 129 rate", "Totale ≈ $1.708,72 + $300 + $100 + $50 + $118,75 = $2.277,47"],
      },
    ],
    assumptions: [
      "Tasso di interesse fisso con rate mensili costanti; i mutui a tasso variabile e quelli a soli interessi non sono modellati.",
      "Imposta sugli immobili, assicurazione, spese HOA e tasso PMI sono tue stime; variano a seconda della località e del finanziatore e spesso cambiano ogni anno.",
      "Le regole sulla PMI seguono i mutui convenzionali statunitensi: si paga sopra l'80% del rapporto prestito/valore e cessa al 78% secondo il piano. I mutui FHA, VA e quelli di altri paesi sono diversi.",
      "Spese notarili e di chiusura, punti, utenze e manutenzione non sono inclusi. Questa è una stima, non una consulenza finanziaria né un'offerta di finanziamento.",
    ],
    faqs: [
      { question: "Che cos'è il PITI?", answer: "Principal, interest, taxes and insurance (capitale, interessi, imposte e assicurazione): le quattro componenti di una tipica rata mensile del mutuo quando il finanziatore riscuote imposte e assicurazione tramite escrow." },
      { question: "Perché la rata del mio finanziatore è diversa?", answer: "I finanziatori usano gli importi reali di imposte e assicurazione, possono aggiungere riserve sul conto escrow e possono indicare un TAEG che include le commissioni. Chiedi un Loan Estimate per avere cifre esatte." },
      { question: "Come posso evitare l'assicurazione sul mutuo?", answer: "Per molti mutui convenzionali statunitensi, un anticipo di almeno il 20% evita la PMI. Alcuni finanziatori offrono altre opzioni, spesso con un tasso più alto." },
    ],
    sourcesUsedFor: [
      "La formula del prestito a rate costanti e la formula del debito residuo.",
      "Quando la PMI cessa automaticamente (al 78% del valore originale della casa) sui mutui convenzionali statunitensi.",
      "La cessazione definitiva della PMI a metà del periodo di ammortamento ai sensi dell'Homeowners Protection Act.",
    ],
  },
  text: {
    price: "Prezzo della casa",
    down: "Anticipo",
    rate: "Tasso di interesse",
    rateHelp: "Tasso annuo del prestito (non il TAEG comprensivo delle commissioni).",
    years: "Durata del mutuo",
    propertyTax: "Imposta sugli immobili all'anno",
    insurance: "Assicurazione casa all'anno",
    hoa: "Spese HOA o di servizio al mese",
    pmiRate: "Tasso dell'assicurazione sul mutuo (PMI)",
    pmiHelp: "Tasso annuo applicato all'importo del prestito finché l'anticipo è inferiore al 20%. Inserisci 0 se non si applica.",
    errors: { downTooLarge: "L'anticipo deve essere inferiore al prezzo della casa.", termTooShort: "Inserisci una durata di almeno un mese." },
    monthly: "Rata mensile stimata",
    caption: "Capitale e interessi per {pi} più {extras} di imposte, assicurazione e altri costi.",
    principalInterest: "Capitale e interessi",
    monthlyTax: "Imposta sugli immobili",
    monthlyInsurance: "Assicurazione casa",
    monthlyHoa: "Spese HOA o di servizio",
    monthlyPmi: "Assicurazione sul mutuo (PMI)",
    pmiMonths: "Mesi con PMI",
    loanAmount: "Importo del prestito",
    downShare: "Quota dell'anticipo",
    totalInterest: "Interessi totali",
    totalCost: "Totale di tutte le rate sulla durata",
    tableCaption: "Debito residuo per anno",
    tableColumns: { year: "Anno", principal: "Capitale rimborsato", interest: "Interessi pagati", balance: "Debito residuo" },
    notes: {
      fixed: "Con un mutuo a tasso fisso, capitale e interessi restano invariati per tutta la durata; imposte, assicurazione e spese HOA sono tue stime e di solito cambiano nel tempo.",
      pmi: "Si presume che la PMI si applichi finché il prestito supera l'80% del prezzo della casa e cessi quando il debito residuo previsto raggiunge il 78%, come per la maggior parte dei mutui convenzionali statunitensi. I mutui FHA e altri hanno regole diverse. Per la legge statunitense termina comunque al più tardi a metà della durata del mutuo.",
      noPmi: "Non è inclusa alcuna assicurazione sul mutuo perché il prestito è pari o inferiore all'80% del prezzo della casa.",
      excluded: "Spese di chiusura, punti, utenze, manutenzione ed eventuali variazioni del tasso non sono inclusi.",
    },
  },
};

export default it;
