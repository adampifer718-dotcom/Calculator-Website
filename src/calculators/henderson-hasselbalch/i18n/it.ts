import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HendersonHasselbalchText } from "../text/en";

const it: CalculatorTranslation<HendersonHasselbalchText> = {
  content: {
    title: "Calcolatore del pH di un tampone (Henderson–Hasselbalch)",
    shortTitle: "pH del tampone",
    summary:
      "Trova il pH di un tampone dalle concentrazioni di acido e base, oppure il rapporto base/acido e la concentrazione di base necessari per un pH obiettivo.",
    metaTitle: "pH del tampone – Equazione di Henderson–Hasselbalch",
    metaDescription:
      "Usa pH = pKa + log([A⁻]/[HA]) per ottenere il pH di un tampone, il rapporto base/acido per un pH obiettivo o la base da aggiungere, con pKa comuni preimpostati.",
    keywords: [
      "Henderson-Hasselbalch",
      "pH tampone",
      "soluzione tampone",
      "pKa",
      "base coniugata",
      "tampone acetato",
      "tampone fosfato",
      "tampone Tris",
    ],
    intro: [
      "Un tampone è una miscela di un acido debole HA e della sua base coniugata A⁻. Mantiene il pH abbastanza stabile quando si aggiungono piccole quantità di acido o base forte, perché ciascuna delle due forme ne neutralizza uno. L'equazione di Henderson–Hasselbalch collega il pH del tampone al pKa dell'acido e al rapporto tra le due forme.",
      "Usa questo calcolatore per trovare il pH di un tampone che hai preparato, il rapporto base/acido che dà un pH obiettivo o quanto deve essere concentrata la forma basica per una data concentrazione di acido. Le impostazioni predefinite coprono i tamponi acetato, bicarbonato, fosfato, Tris e ammonio.",
    ],
    howToUse: [
      "Scegli cosa calcolare: il pH, il rapporto o la concentrazione di base.",
      "Scegli una coppia tampone dall'elenco, oppure scegli Altro e digita il pKa.",
      "Inserisci le concentrazioni in mol/L (è accettata la notazione e, come 5e-3) oppure il pH obiettivo.",
      "Leggi il risultato e controlla se il pH rientra nell'intervallo efficace pKa ± 1.",
    ],
    formulas: [
      {
        title: "Equazione di Henderson–Hasselbalch",
        expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
        explanation: "Quando le due forme sono uguali, il termine logaritmico vale 0 e pH = pKa.",
      },
      {
        title: "Rapporto per un pH obiettivo",
        expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
        explanation: "Ogni unità di pH sopra il pKa moltiplica il rapporto per 10.",
      },
      {
        title: "Intervallo efficace",
        expression: "pKa − 1 ≤ pH ≤ pKa + 1",
        explanation:
          "In questo intervallo nessuna delle due forme supera di oltre 10 volte l'altra, quindi il tampone può assorbire sia acido sia base aggiunti.",
      },
    ],
    examples: [
      {
        title: "Tampone acetato con più base che acido",
        steps: ["Rapporto = 0,15 ÷ 0,10 = 1,5", "pH = 4,76 + log₁₀(1,5) = 4,76 + 0,1761", "pH ≈ 4,936"],
      },
      {
        title: "Tampone fosfato a pH 7,40",
        steps: ["pH − pKa = 7,40 − 7,21 = 0,19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0,19 ≈ 1,549"],
      },
      {
        title: "Tris base necessaria per pH 7,8",
        steps: [
          "Rapporto = 10^(7,8 − 8,07) = 10^−0,27 ≈ 0,5370",
          "[Tris base] = 0,05 mol/L × 0,5370 ≈ 0,02685 mol/L",
        ],
      },
    ],
    assumptions: [
      "Le concentrazioni sostituiscono le attività. In soluzioni concentrate o ricche di sali il pH reale può differire di qualche decimo.",
      "Entrambe le forme devono essere presenti a concentrazioni molto maggiori di quelle di H⁺ e OH⁻, quindi i tamponi molto diluiti e i pH lontani dal pKa sono meno precisi.",
      "I pKa preimpostati valgono a 25 °C. Il pKa varia con la temperatura e la forza ionica, cosa che conta soprattutto per il Tris. Controlla il pH di un tampone reale con un pHmetro tarato.",
      "Per gli acidi con più valori di pKa (come l'acido fosforico e l'acido carbonico) si considera solo la coppia scelta.",
    ],
    faqs: [
      {
        question: "Perché l'intervallo utile è pKa ± 1?",
        answer:
          "A una unità di pH dal pKa, una forma è dieci volte l'altra. Oltre quel punto il tampone ha pochissimo di una delle due forme, quindi non riesce più ad assorbire molto acido o base aggiunti in quella direzione.",
      },
      {
        question: "Quale tampone scelgo per un dato pH?",
        answer:
          "Scegli una coppia con un pKa vicino al pH che ti serve, idealmente entro circa mezza unità. Per pH 7,4, ad esempio, il fosfato (pKa 7,21) è più adatto dell'acetato (pKa 4,76).",
      },
      {
        question: "Posso usare le moli invece delle concentrazioni?",
        answer:
          "Sì. Le due forme sono nello stesso volume, quindi il rapporto tra le moli è uguale al rapporto tra le concentrazioni. Inserisci le quantità in moli in entrambi i campi e il pH è lo stesso.",
      },
    ],
    sourcesUsedFor: [
      "L'equazione di Henderson–Hasselbalch, le sue condizioni d'uso e il potere tampone.",
      "I valori di pKa delle sostanze tampone comuni a 25 °C.",
    ],
  },
  text: {
    solve: "Calcola",
    solves: {
      ph: "pH del tampone dalle concentrazioni",
      ratio: "Rapporto base/acido per un pH obiettivo",
      base: "Concentrazione di base per un pH obiettivo",
    },
    acid: "Coppia acido debole / base coniugata",
    acids: {
      acetic: "Acido acetico / acetato (pKa {pka})",
      carbonic: "Acido carbonico / bicarbonato, prima dissociazione (pKa {pka})",
      phosphate: "Diidrogenofosfato / idrogenofosfato (pKa {pka})",
      tris: "Tris-H⁺ / Tris base (pKa {pka})",
      ammonium: "Ammonio / ammoniaca (pKa {pka})",
      custom: "Altro (inserisci il pKa)",
    },
    pka: "pKa dell'acido debole",
    pkaHelp: "−log₁₀ della costante di dissociazione acida Ka, alla temperatura del tuo tampone.",
    base: "Concentrazione della base coniugata [A⁻]",
    acidConc: "Concentrazione dell'acido debole [HA]",
    concentrationHelp: "In mol/L. È accettata la notazione e, ad es. 5e-3.",
    targetPh: "pH obiettivo",
    targetPhHelp: "Tra 0 e 14. I tamponi funzionano meglio entro 1 unità dal pKa.",
    errors: {
      notNumber: "Inserisci un numero positivo come 0,1 o 1e-3.",
      notPositive: "La concentrazione deve essere maggiore di 0.",
      tooConcentrated: "Inserisci al massimo {max} mol/L.",
    },
    molar: "{value} mol/L",
    results: { ph: "pH del tampone", ratio: "Rapporto [A⁻] ÷ [HA]", base: "Concentrazione della base coniugata [A⁻]" },
    captions: {
      ph: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
      ratio: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
      base: "[A⁻] = [HA] × 10^(pH − pKa)",
    },
    ratio: "Rapporto [A⁻] ÷ [HA]",
    phUsed: "pH obiettivo",
    pkaUsed: "pKa usato",
    range: "Intervallo efficace del tampone (pKa ± 1)",
    rangeText: "pH da {low} a {high}",
    baseShare: "Quota del tampone in forma basica",
    notes: {
      insideRange: "Il pH è entro 1 unità dal pKa, dove il tampone resiste bene alle variazioni di pH.",
      outsideRange:
        "Il pH dista più di 1 unità dal pKa. Una forma della coppia supera allora di oltre 10 volte l'altra, quindi al tampone resta poca capacità in una direzione. Di solito funziona meglio una coppia con un pKa più vicino all'obiettivo.",
      tooMuchBase:
        "La concentrazione di base richiesta supera 20 mol/L, il che non è realistico. Riduci la concentrazione di acido o scegli una coppia con un pKa più vicino al pH obiettivo.",
      extreme: "Il pH è fuori dall'intervallo 0–14. L'equazione di Henderson–Hasselbalch non è affidabile così lontano dal pKa.",
      general:
        "L'equazione usa le concentrazioni al posto delle attività e presuppone che entrambe le forme siano presenti ben al di sopra delle concentrazioni di H⁺ e OH⁻. I pKa elencati valgono a 25 °C; il pKa varia con la temperatura e la forza ionica, in particolare per il Tris.",
    },
  },
};

export default it;
