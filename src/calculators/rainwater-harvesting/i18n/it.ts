import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RainwaterText } from "../text/en";

const it: CalculatorTranslation<RainwaterText> = {
  content: {
    title: "Calcolatore della raccolta di acqua piovana",
    shortTitle: "Acqua piovana",
    summary: "Stima quanta acqua piovana può raccogliere un tetto in base alla sua superficie, alle precipitazioni e a un coefficiente di deflusso.",
    metaTitle: "Calcolatore raccolta acqua piovana – Captazione dal tetto",
    metaDescription:
      "Stima l'acqua piovana raccolta da un tetto, in litri o galloni USA, in base alla superficie di captazione, alle precipitazioni e al deflusso.",
    keywords: ["raccolta acqua piovana", "recupero acqua piovana", "acqua piovana dal tetto", "serbatoio acqua piovana", "litri per metro quadrato", "cisterna"],
    intro: [
      "Ogni millimetro di pioggia che cade su un metro quadrato di tetto corrisponde a un litro d'acqua. Questo calcolatore estende quel conto e tiene conto delle perdite.",
      "Usalo per dimensionare un barile o un serbatoio, o per stimare la raccolta annua dalle precipitazioni medie.",
    ],
    howToUse: [
      "Scegli unità metriche o statunitensi.",
      "Inserisci la superficie in pianta del tetto.",
      "Inserisci le precipitazioni del periodo che ti interessa.",
      "Regola il coefficiente di deflusso per le perdite e leggi il volume raccolto.",
    ],
    formulas: [
      { title: "Sistema metrico", expression: "Litri = superficie (m²) × precipitazioni (mm) × coefficiente di deflusso", explanation: "1 mm di pioggia su 1 m² corrisponde a 1 litro." },
      {
        title: "Unità statunitensi",
        expression: "Galloni = superficie (ft²) × precipitazioni (in) × 0,6234 × coefficiente di deflusso",
        explanation: "0,6234 = 144 in³ ÷ 231 in³ per gallone USA.",
      },
    ],
    examples: [
      {
        title: "Tetto di 100 m², 25 mm di pioggia",
        steps: ["100 × 25 = 2.500 L di pioggia", "2.500 × 0,8 = 2.000 L raccolti"],
      },
      {
        title: "Tetto di 1.000 ft², 1 pollice di pioggia",
        steps: ["1.000 × 1 × 0,6234 ≈ 623 gal", "623 × 0,8 ≈ 499 gal raccolti"],
      },
    ],
    assumptions: [
      "Il coefficiente di deflusso copre le perdite per evaporazione, schizzi, separatori di prima pioggia e tracimazione delle grondaie. Dipende dal materiale del tetto e dal progetto dell'impianto; consulta le indicazioni locali.",
      "Usa la superficie in pianta del tetto, non la superficie inclinata.",
      "Verifica le norme locali sulla raccolta e sull'uso dell'acqua piovana, e trattala prima di berla.",
    ],
    faqs: [
      {
        question: "Quanta acqua dà 1 pollice di pioggia?",
        answer: "Circa 0,623 galloni USA per piede quadrato di tetto prima delle perdite, cioè 623 galloni ogni 1.000 ft².",
      },
      {
        question: "Quale coefficiente di deflusso devo usare?",
        answer: "I tetti lisci e duri perdono meno acqua di quelli ruvidi o assorbenti. 0,8 è un valore intermedio prudente; adattalo al tuo tetto.",
      },
      {
        question: "L'acqua piovana raccolta è potabile?",
        answer: "Non senza un'adeguata filtrazione e disinfezione. Molte persone la usano per il giardino e per gli scarichi del WC.",
      },
    ],
    sourcesUsedFor: ["Definizioni del gallone USA (231 in³) e del litro."],
  },
  text: {
    units: "Unità",
    unitOptions: { metric: "Metriche (m², mm, litri)", imperial: "USA (ft², pollici, galloni)" },
    area: "Superficie di captazione (tetto)",
    areaHelp: "L'ingombro in pianta del tetto, non la superficie inclinata.",
    rainfall: "Precipitazioni",
    rainfallHelp: "Per un singolo temporale, un mese o un anno.",
    coefficient: "Coefficiente di deflusso",
    coefficientHelp: "Quota di pioggia che arriva al serbatoio dopo le perdite (da 0 a 1).",
    collected: "Acqua raccolta",
    inLiters: "In litri",
    inGallons: "In galloni USA",
    inCubic: "In metri cubi",
    gallons: "gal USA",
    note: "1 mm di pioggia su 1 m² corrisponde esattamente a 1 litro; 1 pollice di pioggia su 1 ft² corrisponde a 144 ÷ 231 ≈ 0,623 galloni USA.",
  },
};

export default it;
