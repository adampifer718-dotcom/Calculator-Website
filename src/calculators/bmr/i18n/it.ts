import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmrText } from "../text/en";

const it: CalculatorTranslation<BmrText> = {
  content: {
    title: "Calcolatore del metabolismo basale (BMR)",
    shortTitle: "Metabolismo basale",
    summary: "Stima il tuo metabolismo basale (le calorie che consumi a riposo) con l'equazione di Mifflin-St Jeor.",
    metaTitle: "Calcolatore del metabolismo basale – Mifflin-St Jeor",
    metaDescription:
      "Stima il tuo metabolismo basale (BMR) in kcal e kJ al giorno con l'equazione di Mifflin-St Jeor, in unità metriche o imperiali.",
    keywords: ["metabolismo basale", "tasso metabolico basale", "calcolo BMR", "calorie a riposo", "Mifflin-St Jeor", "dispendio energetico a riposo", "kcal al giorno"],
    intro: [
      "Il metabolismo basale (BMR, dall'inglese basal metabolic rate) è l'energia che il tuo corpo consuma a riposo assoluto per mantenerti in vita. È il punto di partenza per stimare le calorie di cui hai bisogno ogni giorno.",
      "Questo calcolatore usa l'equazione di Mifflin-St Jeor, una stima molto diffusa per adulti sani.",
    ],
    howToUse: [
      "Scegli unità metriche o imperiali.",
      "Scegli il sesso usato nell'equazione e inserisci la tua età.",
      "Inserisci il tuo peso e la tua altezza.",
      "Leggi il BMR stimato in kcal e kJ al giorno.",
    ],
    formulas: [
      {
        title: "Mifflin-St Jeor",
        expression: "BMR = 10 × peso (kg) + 6,25 × altezza (cm) − 5 × età (anni) + s\ns = +5 per gli uomini, −161 per le donne",
        explanation: "Risultato in chilocalorie al giorno.",
      },
      { title: "Unità di energia", expression: "1 kcal = 4,184 kJ", explanation: "La caloria termochimica." },
    ],
    examples: [
      {
        title: "Uomo, 30 anni, 80 kg, 180 cm",
        steps: ["10 × 80 + 6,25 × 180 − 5 × 30 + 5", "= 800 + 1125 − 150 + 5 = 1780 kcal/giorno"],
      },
      {
        title: "Donna, 25 anni, 60 kg, 165 cm",
        steps: ["10 × 60 + 6,25 × 165 − 5 × 25 − 161", "≈ 1345 kcal/giorno"],
      },
    ],
    assumptions: [
      "Per adulti sani. Non è adatta a bambini, donne in gravidanza o persone con malattie che influiscono sul metabolismo.",
      "Le equazioni stimano valori medi; il BMR di ogni persona può variare del 10% o più.",
      "Questo non è un consiglio medico o dietetico. Rivolgiti a un professionista sanitario o a un dietista.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra il BMR e le calorie di cui ho bisogno ogni giorno?",
        answer: "Il BMR copre solo il riposo. Il fabbisogno giornaliero aggiunge l'energia dell'attività fisica e della digestione, quindi è più alto.",
      },
      {
        question: "Perché l'equazione tiene conto del sesso?",
        answer: "Lo studio originale ha stimato costanti diverse per uomini e donne perché, in media, la composizione corporea è diversa.",
      },
      {
        question: "Perché il BMR cala con l'età?",
        answer: "La massa muscolare e il ritmo metabolico tendono a ridursi con l'età, come riflette il termine −5 × età.",
      },
    ],
    sourcesUsedFor: ["L'equazione di Mifflin-St Jeor e i suoi coefficienti."],
  },
  text: {
    units: "Unità",
    unitOptions: { metric: "Metriche (kg, cm)", imperial: "Imperiali (lb, ft, in)" },
    sex: "Sesso usato nell'equazione",
    sexHelp: "L'equazione ha costanti diverse per uomini e donne.",
    sexes: { male: "Uomo", female: "Donna" },
    age: "Età",
    weight: "Peso",
    height: "Altezza",
    heightFt: "Altezza (piedi)",
    heightIn: "Altezza (pollici)",
    heightZero: "Inserisci un'altezza maggiore di 0.",
    bmr: "Metabolismo basale",
    caption: "Energia stimata che consumi a riposo assoluto.",
    kj: "In kilojoule",
    kcalDay: "kcal/giorno",
    kjDay: "kJ/giorno",
    note: "Una stima per adulti sani. I risultati individuali possono variare del 10% o più; non è un'indicazione dietetica né terapeutica.",
  },
};

export default it;
