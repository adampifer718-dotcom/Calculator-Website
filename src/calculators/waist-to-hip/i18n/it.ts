import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaistToHipText } from "../text/en";

const it: CalculatorTranslation<WaistToHipText> = {
  content: {
    title: "Calcolatore del rapporto vita-fianchi",
    shortTitle: "Rapporto vita-fianchi",
    summary: "Dividi la circonferenza della vita per quella dei fianchi per ottenere il rapporto vita-fianchi e confrontalo con la soglia OMS per donne o uomini.",
    metaTitle: "Calcolatore del rapporto vita-fianchi – WHR e soglia OMS",
    metaDescription:
      "Calcola il rapporto vita-fianchi dalle misure di vita e fianchi in cm o pollici e scopri come si colloca rispetto alla soglia OMS per donne e uomini.",
    keywords: [
      "rapporto vita fianchi",
      "calcolo WHR",
      "circonferenza vita",
      "grasso addominale",
      "forma del corpo",
      "rapporto vita fianchi OMS",
    ],
    intro: [
      "Il rapporto vita-fianchi (WHR) confronta la misura della vita con quella dei fianchi. Un rapporto più alto indica che una parte maggiore del grasso corporeo si trova attorno all'addome, condizione che la ricerca ha associato a un rischio più elevato di diabete di tipo 2 e malattie cardiache.",
      "Inserisci entrambe le misure nella stessa unità per ottenere il rapporto. Il calcolatore lo confronta poi con la soglia usata in una consultazione di esperti dell'Organizzazione Mondiale della Sanità: 0,90 per gli uomini e 0,85 per le donne.",
    ],
    howToUse: [
      "Scegli centimetri o pollici. Entrambe le misure devono usare la stessa unità.",
      "Misura la vita a metà tra l'ultima costola e la sommità dell'osso dell'anca, alla fine di una normale espirazione.",
      "Misura i fianchi nel punto più largo dei glutei, tenendo il metro orizzontale e aderente ma non stretto.",
      "Scegli donna o uomo per selezionare la soglia, poi leggi il tuo rapporto.",
    ],
    formulas: [
      {
        title: "Rapporto vita-fianchi",
        expression: "WHR = circonferenza vita ÷ circonferenza fianchi",
        explanation: "Le unità si semplificano, quindi il rapporto è lo stesso in centimetri e in pollici.",
      },
      {
        title: "Soglia OMS",
        expression: "WHR ≥ 0,90 (uomini)   ·   WHR ≥ 0,85 (donne)",
        explanation: "Pari o sopra questi valori, la consultazione di esperti dell'OMS descrive il rischio di complicanze metaboliche come sostanzialmente aumentato.",
      },
    ],
    examples: [
      {
        title: "Donna, vita 82 cm e fianchi 100 cm",
        steps: ["WHR = 82 ÷ 100 = 0,82", "La soglia OMS per le donne è 0,85", "0,82 è sotto la soglia"],
      },
      {
        title: "Uomo, vita 97 cm e fianchi 101 cm",
        steps: ["WHR = 97 ÷ 101 ≈ 0,96", "La soglia OMS per gli uomini è 0,90", "0,96 è pari o superiore alla soglia"],
      },
      {
        title: "Donna che misura in pollici, vita 34 in e fianchi 40 in",
        steps: ["WHR = 34 ÷ 40 = 0,85", "La soglia per le donne è 0,85 o più", "Il rapporto è esattamente alla soglia"],
      },
    ],
    assumptions: [
      "Questo risultato è una stima, non un consiglio medico né una diagnosi, e questo calcolatore non è stato verificato da professionisti. Parla con un professionista sanitario dei tuoi rischi per la salute.",
      "I punti di misura seguono il protocollo OMS: la vita a metà tra il margine inferiore dell'ultima costola e la sommità della cresta iliaca, i fianchi nel punto più largo dei glutei. Misurare altrove cambia il rapporto.",
      "Le soglie di 0,90 e 0,85 sono riferimenti generali della consultazione di esperti dell'OMS. Le soglie adeguate variano secondo la popolazione e l'etnia e non sono pensate per bambini né per la gravidanza.",
      "Il rapporto viene arrotondato a due decimali prima del confronto con la soglia.",
    ],
    faqs: [
      {
        question: "Perché il rapporto vita-fianchi è importante?",
        answer: "È un semplice indicatore di dove si accumula il grasso corporeo. Il grasso attorno all'addome è più strettamente legato ai problemi metabolici rispetto a quello su fianchi e cosce, e il rapporto coglie questa differenza.",
      },
      {
        question: "Il rapporto vita-fianchi è migliore del BMI?",
        answer: "Misurano cose diverse. Il BMI mette in relazione peso e altezza ma non dice nulla su dove si trova il grasso, mentre il rapporto vita-fianchi ignora il peso totale. I professionisti sanitari spesso valutano più misure insieme.",
      },
      {
        question: "Fa differenza usare centimetri o pollici?",
        answer: "No. Il rapporto non ha unità di misura, quindi ottieni lo stesso risultato in entrambi i casi, purché le due misure usino la stessa unità.",
      },
    ],
    sourcesUsedFor: [
      "Le soglie del rapporto vita-fianchi di 0,90 per gli uomini e 0,85 per le donne per un rischio sostanzialmente aumentato di complicanze metaboliche, e i punti di misura.",
    ],
  },
  text: {
    unit: "Unità",
    units: { cm: "Centimetri (cm)", in: "Pollici (in)" },
    waist: "Circonferenza della vita",
    waistHelp: "Misura a metà tra l'ultima costola e la sommità dell'osso dell'anca (cresta iliaca), alla fine di una normale espirazione.",
    hip: "Circonferenza dei fianchi",
    hipHelp: "Misura attorno al punto più largo dei glutei, con il metro orizzontale.",
    sex: "Sesso",
    sexHelp: "Serve solo a scegliere la soglia OMS, che è diversa per donne e uomini.",
    sexes: { female: "Donna", male: "Uomo" },
    errors: {
      implausible: "Un rapporto vita-fianchi di {ratio} è fuori dall'intervallo osservato negli adulti. Controlla che entrambe le misure usino la stessa unità.",
    },
    ratio: "Rapporto vita-fianchi",
    caption: "Vita {waist} ÷ fianchi {hip}.",
    comparison: "Confronto con la soglia OMS",
    atOrAbove: "Pari o superiore alla soglia",
    below: "Sotto la soglia",
    cutoff: "Soglia OMS per {sex}",
    waistAtCutoff: "Vita con cui si raggiungerebbe la soglia",
    notes: {
      above: "Per {sex}, un rapporto di {cutoff} o più è il livello che la consultazione di esperti dell'OMS ha associato a un rischio sostanzialmente aumentato di complicanze metaboliche. È un indicatore di screening, non una diagnosi.",
      below: "Il rapporto è sotto la soglia OMS di {cutoff} per {sex}. Anche altri fattori, come peso, attività fisica, pressione arteriosa e familiarità, influiscono sul rischio per la salute.",
      rounding: "Il rapporto viene arrotondato a due decimali prima del confronto con la soglia.",
      advice: "Questa è una stima, non un consiglio medico. Parla dei tuoi risultati con un professionista sanitario.",
    },
    sexNames: { female: "le donne", male: "gli uomini" },
  },
};

export default it;
