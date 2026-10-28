import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentYieldText } from "../text/en";

const it: CalculatorTranslation<PercentYieldText> = {
  content: {
    title: "Calcolatore della resa percentuale",
    shortTitle: "Resa percentuale",
    summary:
      "Trova la resa percentuale di una reazione dalla resa effettiva e da quella teorica, oppure calcola la resa teorica dalle moli e da un'equazione bilanciata.",
    metaTitle: "Calcolatore della resa percentuale – Effettiva e teorica",
    metaDescription:
      "Calcola la resa percentuale dalla resa effettiva e teorica, oppure ottieni la resa teorica dalle moli del reagente limitante, dai coefficienti e da una formula.",
    keywords: [
      "resa percentuale",
      "resa teorica",
      "resa effettiva",
      "reagente limitante",
      "stechiometria",
      "resa di reazione",
      "laboratorio di chimica",
    ],
    intro: [
      "La resa teorica è la quantità di prodotto che un'equazione bilanciata prevede quando il reagente limitante si consuma completamente. La resa effettiva è quella che raccogli. La resa percentuale confronta le due e mostra quanto sono stati efficienti la reazione e il trattamento successivo.",
      "Se conosci già la resa teorica, inserisci entrambe le masse. Altrimenti inserisci le moli del reagente limitante, i coefficienti dell'equazione bilanciata e la formula o la massa molare del prodotto: il calcolatore ricava prima la resa teorica.",
    ],
    howToUse: [
      "Scegli se conosci la resa teorica o se vuoi calcolarla dalle moli.",
      "Scegli l'unità di massa e inserisci la resa effettiva che hai raccolto.",
      "Inserisci la resa teorica, oppure le moli del reagente limitante, entrambi i coefficienti e la formula del prodotto (o la sua massa molare).",
      "Leggi la resa percentuale, la resa teorica e la massa persa.",
    ],
    formulas: [
      {
        title: "Resa percentuale",
        expression: "resa percentuale = resa effettiva ÷ resa teorica × 100%",
        explanation: "Le due rese devono essere nella stessa unità, così le unità si semplificano.",
      },
      {
        title: "Resa teorica dalle moli",
        expression: "teorica (g) = n(limitante) × (coefficiente del prodotto ÷ coefficiente del reagente) × M(prodotto)",
        explanation:
          "Il rapporto tra i coefficienti converte le moli del reagente limitante in moli di prodotto; la massa molare converte le moli in grammi.",
      },
      {
        title: "Massa persa",
        expression: "perdita = resa teorica − resa effettiva",
        explanation: "Viene mostrata anche come quota della resa teorica, pari a 100% meno la resa percentuale.",
      },
    ],
    examples: [
      {
        title: "Cristalli recuperati da una sintesi in laboratorio",
        steps: ["Resa percentuale = 4,25 g ÷ 5,6 g × 100%", "≈ 75,89%", "Massa persa = 5,6 − 4,25 = 1,35 g"],
      },
      {
        title: "Aspirina da 0,0200 mol di acido salicilico",
        steps: [
          "Una molecola di acido salicilico dà una di aspirina, quindi il rapporto è 1 ÷ 1.",
          "M(C9H8O4) = 9 × 12,011 + 8 × 1,008 + 4 × 15,999 = 180,159 g/mol",
          "Resa teorica = 0,0200 × 180,159 ≈ 3,6032 g",
          "Resa percentuale = 2,95 ÷ 3,6032 × 100% ≈ 81,87%",
        ],
      },
      {
        title: "Ammoniaca quando l'idrogeno è il reagente limitante",
        steps: [
          "N₂ + 3 H₂ → 2 NH₃, quindi 0,90 mol H₂ × 2 ÷ 3 = 0,60 mol NH₃",
          "Resa teorica = 0,60 × 17,031 = 10,2186 g",
          "Resa percentuale = 8,1 ÷ 10,2186 × 100% ≈ 79,27%",
        ],
      },
    ],
    assumptions: [
      "Il reagente limitante è noto. Se non ne sei sicuro, calcola il prodotto che ogni reagente potrebbe formare: quello che ne dà di meno è il limitante.",
      "L'equazione è bilanciata e dà un solo prodotto principale. I sottoprodotti non vengono considerati.",
      "Le masse molari calcolate da una formula usano i pesi atomici standard abbreviati IUPAC. I risultati sono precisi solo quanto le masse che misuri.",
      "La resa effettiva dovrebbe riferirsi al prodotto secco e purificato. Solvente o impurezze fanno sembrare la resa più alta di quanto sia.",
    ],
    faqs: [
      {
        question: "La resa percentuale può superare il 100%?",
        answer:
          "Non per un prodotto puro e secco, perché la massa non si crea dal nulla. Un risultato oltre il 100% di solito significa che il prodotto è ancora umido, contiene impurezze o materiale di partenza non reagito, oppure che una massa è stata misurata o registrata male.",
      },
      {
        question: "Perché la mia resa è più bassa del previsto?",
        answer:
          "Le reazioni secondarie consumano reagenti, molte reazioni si fermano prima del completamento e un po' di prodotto si perde sempre durante filtrazione, travaso o ricristallizzazione. Rese ben al di sotto del 100% sono normali, soprattutto nelle sintesi a più stadi.",
      },
      {
        question: "Devo usare moli o grammi?",
        answer:
          "La resa percentuale in sé confronta masse (o moli) di prodotto, e l'unità si semplifica. Per calcolare la resa teorica servono le moli, perché i coefficienti di un'equazione bilanciata mettono in relazione quantità in moli, non in grammi.",
      },
    ],
    sourcesUsedFor: ["Definizioni di resa teorica, effettiva e percentuale e di reagente limitante."],
  },
  text: {
    mode: "Resa teorica",
    modes: { direct: "La conosco", stoichiometry: "Calcolala dalle moli" },
    unit: "Unità di massa",
    actual: "Resa effettiva",
    actualHelp: "La massa di prodotto che hai effettivamente raccolto (idealmente secco e puro).",
    theoretical: "Resa teorica",
    theoreticalHelp: "La massa di prodotto prevista dall'equazione bilanciata, nella stessa unità della resa effettiva.",
    moles: "Moli di reagente limitante",
    molesHelp: "Il reagente che si esaurisce per primo. Dividi la sua massa per la sua massa molare per ottenere le moli.",
    reactantCoef: "Coefficiente del reagente limitante",
    productCoef: "Coefficiente del prodotto",
    coefHelp: "Dall'equazione bilanciata. In N₂ + 3 H₂ → 2 NH₃, H₂ ha 3 e NH₃ ha 2.",
    massSource: "Massa molare del prodotto da",
    massSources: { formula: "Formula chimica", molarMass: "Valore della massa molare" },
    formula: "Formula del prodotto",
    formulaHelp:
      "I simboli degli elementi distinguono maiuscole e minuscole, ad es. C9H8O4 o Ca(OH)2. La massa molare viene calcolata dai pesi atomici standard.",
    molarMass: "Massa molare del prodotto",
    formulaErrors: {
      empty: "Inserisci una formula chimica.",
      tooLong: "La formula è troppo lunga. Usa al massimo 200 caratteri.",
      invalidChar:
        "Carattere non valido «{token}» in posizione {position}. Usa solo simboli degli elementi, numeri, parentesi e punti degli idrati.",
      lowercase:
        "Lettera minuscola inattesa «{token}» in posizione {position}. I simboli degli elementi iniziano con una maiuscola, ad es. Na o Cl.",
      unknownElement: "Simbolo di elemento sconosciuto «{token}» in posizione {position}.",
      noStandardWeight:
        "{token} (posizione {position}) non ha un peso atomico standard, quindi la sua massa molare non può essere calcolata.",
      unclosed: "Parentesi non bilanciate: la «{token}» in posizione {position} non viene mai chiusa.",
      unexpectedClose:
        "Parentesi non bilanciate: la «{token}» in posizione {position} non ha una parentesi di apertura corrispondente.",
      mismatched:
        "Parentesi non corrispondenti: la «{token}» in posizione {position} non corrisponde alla parentesi che chiude.",
      emptyGroup: "Il gruppo tra parentesi che inizia in posizione {position} è vuoto.",
      zeroCount: "Il numero in posizione {position} è zero. I numeri devono essere interi pari ad almeno 1.",
      misplacedNumber: "Il numero in posizione {position} non è associato a un elemento o a un gruppo.",
      misplacedDot:
        "Il punto dell'idrato in posizione {position} deve stare tra due parti della formula, ad es. CuSO4·5H2O.",
      tooManyAtoms: "La formula ha troppi atomi. Usa al massimo 1.000.000 di atomi in totale.",
    },
    result: "Resa percentuale",
    caption: "Resa effettiva ÷ resa teorica × 100",
    theoreticalResult: "Resa teorica",
    productMoles: "Moli teoriche di prodotto",
    molarMassUsed: "Massa molare del prodotto usata",
    loss: "Massa persa (teorica − effettiva)",
    excess: "Massa oltre la resa teorica",
    lossPercent: "Quota della resa teorica persa",
    excessPercent: "Quota oltre la resa teorica",
    notes: {
      over100:
        "Una resa superiore al 100% non è fisicamente possibile per un prodotto puro e secco. Di solito significa che il prodotto è ancora umido o contiene impurezze o reagenti residui, oppure che una massa o una quantità è stata misurata in modo errato.",
      zero: "Non è stato raccolto alcun prodotto, quindi la resa è dello 0%.",
      general:
        "Le cause tipiche di una resa inferiore al 100% sono le reazioni secondarie, le reazioni che non arrivano a completamento e il prodotto perso durante travaso, filtrazione o purificazione.",
    },
  },
};

export default it;
