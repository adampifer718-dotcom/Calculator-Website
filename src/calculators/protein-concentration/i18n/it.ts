import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProteinConcentrationText } from "../text/en";

const it: CalculatorTranslation<ProteinConcentrationText> = {
  content: {
    title: "Calcolatore della concentrazione proteica (A280)",
    shortTitle: "Concentrazione proteica",
    summary:
      "Trasforma una lettura di assorbanza A280 in una concentrazione proteica in mg/mL e µM con la legge di Lambert-Beer, da un coefficiente di estinzione molare o massico.",
    metaTitle: "Concentrazione proteica – Da A280 a mg/mL",
    metaDescription:
      "Converti le letture A280 in concentrazione proteica in mg/mL e µM con un coefficiente di estinzione molare o massico, oppure stima ε da Trp, Tyr e cistine.",
    keywords: [
      "concentrazione proteica",
      "A280",
      "coefficiente di estinzione",
      "legge di Lambert-Beer",
      "assorbività molare",
      "quantificazione proteine",
      "mg/mL",
      "triptofano tirosina",
    ],
    intro: [
      "Le proteine assorbono la luce ultravioletta intorno a 280 nm, soprattutto per via degli amminoacidi aromatici triptofano e tirosina, con un piccolo contributo dei ponti disolfuro (cistine). Secondo la legge di Lambert-Beer, l'assorbanza è proporzionale alla concentrazione, al cammino ottico e a un coefficiente di estinzione specifico di ogni proteina.",
      "Questo calcolatore trasforma una lettura A280 in una concentrazione. Puoi fornire un coefficiente di estinzione molare ε con il peso molecolare, un coefficiente di estinzione massico (l'assorbanza di una soluzione a 1 mg/mL), oppure il numero di Trp, Tyr e cistine nella sequenza per stimare ε.",
    ],
    howToUse: [
      "Scegli come fornire il coefficiente di estinzione.",
      "Inserisci l'A280 corretta per il bianco, il cammino ottico e il fattore di diluizione se hai diluito il campione prima di misurarlo.",
      "Inserisci ε e il peso molecolare, il coefficiente di estinzione massico, oppure il numero di triptofani, tirosine e ponti disolfuro insieme al peso molecolare.",
      "Se vuoi, inserisci il volume della soluzione madre per ottenere la quantità totale di proteina.",
    ],
    formulas: [
      {
        title: "Legge di Lambert-Beer",
        expression: "c (M) = A × diluizione ÷ (ε × l)",
        explanation: "A è l'assorbanza misurata, ε il coefficiente di estinzione molare in M⁻¹ cm⁻¹ e l il cammino ottico in cm.",
      },
      {
        title: "Concentrazione in massa",
        expression: "c (mg/mL) = c (M) × MW (g/mol)",
        explanation: "Moli per litro per grammi per mole danno grammi per litro, che equivalgono a milligrammi per millilitro.",
      },
      {
        title: "Coefficiente di estinzione massico",
        expression: "c (mg/mL) = A × diluizione ÷ (E0,1% × l), con E0,1% = ε ÷ MW",
        explanation: "E0,1% è l'assorbanza di una soluzione a 1 mg/mL (0,1%) su 1 cm.",
      },
      {
        title: "ε stimato (Pace et al. 1995)",
        expression: "ε₂₈₀ = 5.500 × nTrp + 1.490 × nTyr + 125 × nCistine",
        explanation: "In M⁻¹ cm⁻¹, per una proteina ripiegata in acqua. Una cistina è un ponte disolfuro tra due cisteine.",
      },
    ],
    examples: [
      {
        title: "Da un coefficiente di estinzione molare noto",
        steps: [
          "c = 0,72 ÷ (43.824 × 1) = 1,643 × 10⁻⁵ M = 16,43 µM.",
          "mg/mL = 1,643 × 10⁻⁵ mol/L × 66.463 g/mol = 1,092 g/L = 1,092 mg/mL.",
          "In 2 mL: 1,092 × 2 ≈ 2,18 mg.",
        ],
      },
      {
        title: "Stima di ε dalla sequenza",
        steps: [
          "ε = 5.500 × 6 + 1.490 × 3 + 125 × 4 = 37.970 M⁻¹ cm⁻¹.",
          "c = 0,5 ÷ 37.970 = 1,317 × 10⁻⁵ M = 13,17 µM.",
          "mg/mL = 1,317 × 10⁻⁵ × 14.307 ≈ 0,1884 mg/mL.",
        ],
      },
      {
        title: "Con un coefficiente di estinzione massico, un cammino corto e una diluizione",
        steps: ["Correggi per la diluizione: 0,88 × 4 = 3,52.", "mg/mL = 3,52 ÷ (1,45 × 0,5 cm) ≈ 4,855 mg/mL."],
      },
    ],
    assumptions: [
      "La lettura A280 è corretta per il bianco con lo stesso tampone e rientra nell'intervallo lineare dello strumento. Molti spettrofotometri perdono linearità ad assorbanze elevate, quindi i campioni molto concentrati vanno diluiti.",
      "Il coefficiente di estinzione vale per la tua proteina nel suo tampone. Le stime dalla composizione amminoacidica sono abbastanza affidabili per le proteine che contengono triptofano e meno per quelle che ne sono prive; misurare ε è meglio che prevederlo.",
      "Vengono conteggiate tutte le sostanze che assorbono a 280 nm, compresi acidi nucleici, alcuni tamponi e la luce diffusa dagli aggregati. Questi fanno risultare il valore troppo alto.",
      "Il fattore di diluizione viene applicato all'assorbanza prima di calcolare la concentrazione, quindi il risultato si riferisce alla soluzione madre non diluita.",
    ],
    faqs: [
      {
        question: "Perché mg/mL equivale a g/L?",
        answer:
          "Un millilitro è un millesimo di litro e un milligrammo è un millesimo di grammo, quindi i due millesimi si semplificano. Per questo la molarità (mol/L) moltiplicata per il peso molecolare (g/mol) dà direttamente mg/mL.",
      },
      {
        question: "E se non conosco il coefficiente di estinzione?",
        answer:
          "Se conosci la sequenza, conta triptofani, tirosine e ponti disolfuro e usa la modalità di stima. Per una miscela sconosciuta si usa talvolta come riferimento approssimativo un coefficiente di estinzione massico di circa 1,0, ma il risultato può essere sbagliato anche di molto.",
      },
      {
        question: "Devo contare le cisteine o le cistine?",
        answer:
          "Le cistine: ogni ponte disolfuro tra due cisteine conta una volta. Le cisteine libere (tioli ridotti) assorbono pochissimo a 280 nm. Per una proteina completamente ridotta, inserisci 0 cistine.",
      },
    ],
    sourcesUsedFor: [
      "La stima ε₂₈₀ = 5.500 × Trp + 1.490 × Tyr + 125 × cistina per una proteina ripiegata in acqua, e la sua minore affidabilità per le proteine prive di triptofano.",
      "Il calcolo della concentrazione da A280 con un coefficiente di estinzione massico, e il riferimento approssimativo per cui una soluzione proteica a 1 mg/mL dà un'A280 di circa 1,0 su 1 cm.",
    ],
  },
  text: {
    mode: "Coefficiente di estinzione",
    modes: {
      molar: "ε molare (M⁻¹ cm⁻¹) e peso molecolare",
      mass: "Coefficiente di estinzione massico E0,1% (1 mg/mL)",
      residues: "Stima ε dal numero di Trp, Tyr e cistine",
    },
    a280: "Assorbanza a 280 nm (A280)",
    a280Help: "La lettura corretta per il bianco del campione misurato (eventualmente diluito).",
    pathLength: "Cammino ottico",
    pathLengthHelp: "1 cm per una cuvetta standard. Lascia 1 se lo strumento riporta già l'assorbanza normalizzata a 1 cm.",
    dilution: "Fattore di diluizione",
    dilutionHelp: "Volume totale ÷ volume del campione, se hai diluito il campione prima di misurarlo. Inserisci 1 se non diluito.",
    epsilon: "Coefficiente di estinzione molare ε",
    epsilonHelp: "A 280 nm, in M⁻¹ cm⁻¹, ricavato per esempio dalla sequenza della proteina o da una banca dati.",
    mw: "Peso molecolare",
    mwHelp: "In dalton (g/mol). 1 kDa = 1.000 Da.",
    mwOptional: "Peso molecolare (facoltativo)",
    mwOptionalHelp: "Facoltativo, in dalton (g/mol). Serve per la concentrazione molare (µM).",
    e01: "Coefficiente di estinzione massico E0,1%",
    e01Help: "L'assorbanza a 280 nm di una soluzione a 1 mg/mL su 1 cm. Circa 1,0 è un valore approssimativo comune per proteine sconosciute.",
    trp: "Residui di triptofano (Trp, W)",
    tyr: "Residui di tirosina (Tyr, Y)",
    cystine: "Cistine (ponti disolfuro)",
    cystineHelp: "Il numero di ponti disolfuro, ciascuno dei quali unisce due cisteine. Le cisteine libere assorbono appena a 280 nm.",
    volume: "Volume del campione",
    volumeHelp: "Facoltativo. Il volume della soluzione madre non diluita, per ottenere la quantità totale di proteina.",
    errors: {
      noChromophores:
        "Senza Trp, Tyr né cistine, ε a 280 nm è zero e la concentrazione non si può calcolare. Usa un altro metodo.",
    },
    result: "Concentrazione proteica",
    caption: "A280 × diluizione ÷ (ε × cammino ottico)",
    micromolar: "Concentrazione molare",
    totalMass: "Proteina totale in {volume} mL",
    epsilonUsed: "ε molare usato",
    e01Used: "Coefficiente di estinzione massico E0,1% usato",
    a280Normalized: "A280 per cammino di 1 cm (come misurata)",
    notes: {
      range:
        "L'assorbanza misurata per cm supera circa 1,5. Molti spettrofotometri non sono più lineari ad assorbanze elevate, quindi controlla l'intervallo del tuo strumento e valuta di diluire il campione.",
      low: "L'assorbanza misurata per cm è inferiore a circa 0,1, dove le letture sono spesso meno precise rispetto al rumore e agli errori del bianco.",
      pace: "ε = 5.500 × Trp + 1.490 × Tyr + 125 × cistine è una stima per una proteina ripiegata in acqua (Pace et al., 1995). È meno affidabile per le proteine prive di triptofano.",
      noTrp: "Questa proteina non contiene triptofano, quindi l'ε stimato è meno affidabile.",
      general:
        "L'A280 conteggia ogni sostanza che assorbe a 280 nm, compresi acidi nucleici e altri contaminanti, e presuppone che il coefficiente di estinzione sia corretto per la tua proteina.",
    },
  },
};

export default it;
