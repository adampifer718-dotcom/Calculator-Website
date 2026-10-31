import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaterFootprintText } from "../text/en";

const it: CalculatorTranslation<WaterFootprintText> = {
  content: {
    title: "Calcolatore del consumo d'acqua della doccia",
    shortTitle: "Consumo d'acqua della doccia",
    summary:
      "Stima quanta acqua consumano in un anno le docce della tua famiglia, l'energia e il costo per scaldarla e quanto risparmieresti con un soffione a basso flusso.",
    metaTitle: "Consumo d'acqua della doccia – Litri, galloni e kWh",
    metaDescription:
      "Stima l'acqua usata ogni anno per la doccia da portata, durata e frequenza, con energia e costo per scaldarla e il risparmio di un soffione a basso flusso.",
    keywords: [
      "consumo acqua doccia",
      "litri per doccia",
      "risparmio soffione a basso flusso",
      "soffione WaterSense",
      "costo energia doccia",
      "portata soffione",
      "impronta idrica",
    ],
    intro: [
      "La doccia è uno dei maggiori utilizzi d'acqua nella maggior parte delle case e, poiché l'acqua viene scaldata, pesa in modo evidente anche sulla bolletta energetica. Quanto consuma dipende da pochi fattori: la portata del soffione, la durata di ogni doccia e quanto spesso ci si lava.",
      "Inserisci questi dati per stimare l'acqua usata per doccia, alla settimana e all'anno. Aggiungi le temperature dell'acqua e il prezzo dell'energia per stimare l'energia e il costo per scaldarla, e inserisci una seconda portata per vedere quanto risparmieresti con un soffione diverso.",
    ],
    howToUse: [
      "Inserisci la portata del soffione in galloni USA o litri al minuto. Se non la conosci, misura quanto tempo serve per riempire un secchio di capacità nota e dividi.",
      "Inserisci la durata di una doccia tipica, le docce per persona alla settimana e il numero di persone.",
      "Se vuoi, inserisci la portata di un soffione che stai valutando, per vedere il risparmio.",
      "Per stimare l'energia, lascia attiva l'opzione energia e inserisci la temperatura dell'acqua in ingresso e quella della doccia, il rendimento dello scaldacqua e, se vuoi, il prezzo per kWh.",
    ],
    formulas: [
      {
        title: "Acqua all'anno",
        expression: "V(anno) = portata × minuti × docce a settimana × persone × 52,1775",
        explanation:
          "52,1775 è il numero di settimane in un anno gregoriano medio (365,2425 ÷ 7). Il risultato è nell'unità della portata: galloni o litri.",
      },
      {
        title: "Energia per il riscaldamento",
        expression: "E (kWh) = V (L) × 1 kg/L × 4,186 kJ/(kg·K) × (T(doccia) − T(ingresso)) ÷ 3.600 ÷ rendimento",
        explanation:
          "4,186 kJ scaldano 1 kg d'acqua di 1 °C, e 3.600 kJ sono 1 kWh. Il rendimento si inserisce in percentuale e si usa come frazione.",
      },
      {
        title: "Risparmio",
        expression: "risparmio = V(attuale) − V(nuovo)",
        explanation: "L'energia e il costo risparmiati si ricavano dall'acqua risparmiata con la stessa formula.",
      },
    ],
    examples: [
      {
        title: "Una persona, doccia quotidiana di 8 minuti a 2,5 gpm",
        steps: [
          "Per doccia = 2,5 × 8 = 20 gal",
          "Alla settimana = 20 × 7 = 140 gal",
          "All'anno = 140 × 52,1775 = 7.304,85 gal, circa 27.652 L",
        ],
      },
      {
        title: "Tre persone, 9 L/min, passando a un soffione da 6 L/min",
        steps: [
          "Alla settimana = 9 × 6 × 5 × 3 = 810 L, quindi all'anno = 810 × 52,1775 ≈ 42.263,78 L",
          "Energia per il riscaldamento = 42.263,78 × 4,186 × (38 − 15) ÷ 3.600 ÷ 0,90 ≈ 1.256 kWh all'anno",
          "Con 6 L/min: 540 × 52,1775 ≈ 28.175,85 L, con un risparmio di circa 14.088 L e 419 kWh all'anno",
        ],
      },
      {
        title: "Due persone, docce di 10 minuti, scaldacqua in °F e un prezzo dell'energia",
        steps: [
          "All'anno = 2,5 × 10 × 7 × 2 × 52,1775 = 18.262,125 gal ≈ 69.130 L",
          "Aumento di temperatura = (100 − 55) × 5/9 = 25 K, quindi energia ≈ 69.130 × 4,186 × 25 ÷ 3.600 ÷ 0,90 ≈ 2.233 kWh, con un costo di circa $357 all'anno",
          "Un soffione da 1,8 gpm fa risparmiare circa 5.113 gal e circa $100 all'anno",
        ],
      },
    ],
    assumptions: [
      "La portata è considerata costante per tutta la doccia. La portata reale dipende dalla pressione dell'acqua e da quanto è aperto il rubinetto, quindi una portata misurata è migliore di quella nominale.",
      "Un anno equivale a 52,1775 settimane (365,2425 ÷ 7). Le settimane trascorse fuori casa e i cambiamenti stagionali delle abitudini non sono considerati.",
      "La stima dell'energia scalda tutta l'acqua della doccia dalla temperatura in ingresso a quella della doccia. Ignora il calore disperso dalle tubazioni e dal serbatoio di accumulo, quindi il consumo reale è di solito un po' più alto.",
      "Le tariffe dell'acqua e della fognatura non sono incluse nel costo; viene considerata solo l'energia per il riscaldamento.",
    ],
    faqs: [
      {
        question: "Quanta acqua consuma un soffione?",
        answer:
          "Negli Stati Uniti i nuovi soffioni possono consumare al massimo 2,5 galloni (circa 9,5 litri) al minuto. I soffioni con il marchio WaterSense dell'EPA consumano 2,0 galloni al minuto o meno. I soffioni più vecchi possono consumare di più, quindi misurare il tuo è il modo migliore per saperlo.",
      },
      {
        question: "Come posso misurare la portata della mia doccia?",
        answer:
          "Tieni un secchio di capacità nota sotto la doccia con l'apertura abituale e misura quanto tempo impiega a riempirsi. Dividi il volume per il tempo in minuti; per esempio, 10 litri in 75 secondi sono 10 ÷ 1,25 = 8 L/min.",
      },
      {
        question: "Che cosa fa risparmiare di più: una doccia più breve o un soffione a basso flusso?",
        answer:
          "Entrambi riducono il consumo d'acqua in proporzione. Passare da 10 a 8 minuti fa risparmiare il 20%, come passare da 2,5 a 2,0 gpm. Il calcolatore mostra l'effetto di ciascuno, così puoi provarli entrambi.",
      },
    ],
    sourcesUsedFor: [
      "Il massimo WaterSense di 2,0 galloni al minuto e la portata massima federale di 2,5 gpm per i soffioni.",
      "Il consumo d'acqua massimo federale di 2,5 galloni al minuto per i soffioni.",
      "Il calore specifico dell'acqua, 1 cal/(g·°C) = 4,186 J/(g·°C).",
    ],
  },
  text: {
    flow: "Portata del soffione",
    flowHelp:
      "2,5 galloni USA al minuto (circa 9,5 L/min) è il massimo federale statunitense per i nuovi soffioni; i soffioni con marchio WaterSense consumano 2,0 gpm (circa 7,6 L/min) o meno. Puoi misurare il tuo cronometrando quanto tempo serve per riempire un secchio.",
    flowUnit: "Unità di portata",
    flowUnits: { gpm: "Galloni USA al minuto (gpm)", lpm: "Litri al minuto (L/min)" },
    minutes: "Minuti per doccia",
    showersPerWeek: "Docce a settimana per persona",
    people: "Numero di persone",
    newFlow: "Nuova portata da confrontare (facoltativa)",
    newFlowHelp: "La portata di un soffione che stai valutando, nella stessa unità indicata sopra.",
    energy: "Stima l'energia per scaldare l'acqua",
    energyOptions: { yes: "Sì", no: "No" },
    tempUnit: "Unità di temperatura",
    tempUnits: { C: "Celsius (°C)", F: "Fahrenheit (°F)" },
    inletTemp: "Temperatura dell'acqua fredda in ingresso",
    inletTempHelp:
      "La temperatura dell'acqua che entra nello scaldacqua. 15 °C (59 °F) è un esempio tipico; varia con il clima e la stagione.",
    showerTemp: "Temperatura della doccia",
    showerTempHelp: "La temperatura dell'acqua miscelata al soffione. 38 °C (circa 100 °F) è una doccia tipicamente confortevole.",
    efficiency: "Rendimento dello scaldacqua",
    efficiencyHelp:
      "La quota dell'energia consumata che finisce come calore nell'acqua. 90% è un esempio; i vecchi scaldacqua a gas spesso rendono meno e le pompe di calore possono superare ampiamente il 100%.",
    price: "Prezzo dell'energia per kWh (facoltativo)",
    priceHelp: "Il tuo prezzo per kWh di elettricità, o di gas convertito in kWh, per il costo annuo.",
    errors: {
      showerAboveInlet: "La temperatura della doccia deve essere più alta di quella in ingresso.",
      inletRange: "Inserisci una temperatura in ingresso tra 0 °C (32 °F) e 40 °C (104 °F).",
      showerRange: "Inserisci una temperatura della doccia di al massimo 60 °C (140 °F).",
    },
    annual: "Acqua per la doccia all'anno",
    caption: "{flow} × {minutes} min × {showers} docce a settimana × {people} × {weeks} settimane all'anno.",
    annualOther: "Acqua per la doccia all'anno in altre unità",
    perWeek: "Acqua per la doccia alla settimana",
    perShower: "Acqua per doccia",
    energyYear: "Energia per scaldare l'acqua all'anno",
    costYear: "Costo per scaldare l'acqua all'anno",
    newAnnual: "Acqua all'anno con la nuova portata",
    waterSaved: "Acqua risparmiata all'anno",
    energySaved: "Energia risparmiata all'anno",
    costSaved: "Costo risparmiato all'anno",
    peopleCount: {
      zero: "{n} persone",
      one: "{n} persona",
      two: "{n} persone",
      few: "{n} persone",
      many: "{n} persone",
      other: "{n} persone",
    },
    notes: {
      weeks: "Un anno è considerato pari a 52,1775 settimane (365,2425 giorni ÷ 7, l'anno gregoriano medio).",
      energy:
        "Energia per il riscaldamento = litri × 1 kg/L × 4,186 kJ/(kg·K) × aumento di temperatura ÷ 3.600 ÷ rendimento. Il calore disperso da tubazioni e serbatoio non è incluso.",
      moreWater: "La nuova portata è più alta di quella attuale, quindi il risparmio è negativo: consumeresti più acqua.",
    },
  },
};

export default it;
