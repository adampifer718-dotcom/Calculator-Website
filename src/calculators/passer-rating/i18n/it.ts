import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasserRatingText } from "../text/en";

const it: CalculatorTranslation<PasserRatingText> = {
  content: {
    title: "Calcolatore del passer rating NFL",
    shortTitle: "Passer rating",
    summary:
      "Calcola il passer rating NFL di un quarterback da passaggi tentati, completati, yard, touchdown e intercetti, con le quattro componenti e l'efficienza NCAA.",
    metaTitle: "Passer rating NFL – Valutazione del QB e NCAA",
    metaDescription:
      "Calcola il passer rating NFL (da 0 a 158,3) dalle statistiche di passaggio di un quarterback, con le quattro componenti e l'efficienza NCAA a confronto.",
    keywords: [
      "passer rating",
      "valutazione quarterback",
      "calcolo QB rating",
      "formula passer rating NFL",
      "158,3",
      "efficienza di passaggio NCAA",
      "football americano statistiche",
    ],
    intro: [
      "Il passer rating è la misura ufficiale della NFL per valutare i passaggi di un quarterback, in uso dal 1973. Combina quattro rapporti: percentuale di passaggi completati, yard per tentativo, touchdown per tentativo e intercetti per tentativo. Ogni componente è limitata a un intervallo, quindi il rating va da 0 a un punteggio perfetto di 158,3.",
      "Inserisci le statistiche di passaggio di una partita, di una stagione o di una carriera per ottenere il rating, il valore di ciascuna componente e la quota di tentativi che sono stati passaggi completati, touchdown e intercetti. Il calcolatore mostra anche l'efficienza di passaggio NCAA, che il football universitario usa su una scala diversa.",
    ],
    howToUse: [
      "Inserisci i passaggi tentati, i passaggi completati e le yard di passaggio. Le yard possono essere negative.",
      "Inserisci i passaggi da touchdown e gli intercetti.",
      "Leggi il passer rating e controlla la tabella delle componenti per vedere quali hanno raggiunto i loro limiti.",
    ],
    formulas: [
      {
        title: "Le quattro componenti",
        expression: "a = (Cmp ÷ Att − 0,3) × 5\nb = (Yds ÷ Att − 3) × 0,25\nc = TD ÷ Att × 20\nd = 2,375 − INT ÷ Att × 25",
        explanation: "Ogni componente è limitata tra 0 e 2,375 prima di essere sommata alle altre.",
      },
      {
        title: "Passer rating",
        expression: "rating = (a + b + c + d) ÷ 6 × 100",
        explanation: "Con tutte le componenti a 2,375 il rating è 9,5 ÷ 6 × 100 ≈ 158,3, il massimo.",
      },
      {
        title: "Efficienza di passaggio NCAA",
        expression: "(8,4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att",
        explanation: "La formula del football universitario. Non ha limiti, quindi può andare ben oltre 200 o sotto 0.",
      },
    ],
    examples: [
      {
        title: "23 su 34 per 287 yard, 2 TD, 1 INT",
        steps: [
          "a = (23 ÷ 34 − 0,3) × 5 ≈ 1,8824; b = (287 ÷ 34 − 3) × 0,25 ≈ 1,3603",
          "c = 2 ÷ 34 × 20 ≈ 1,1765; d = 2,375 − 1 ÷ 34 × 25 ≈ 1,6397",
          "Rating = 6,0588 ÷ 6 × 100 ≈ 101,0",
        ],
      },
      {
        title: "30 su 41 per 402 yard, 5 TD, 0 INT",
        steps: [
          "a ≈ 2,1585 e c ≈ 2,4390 superano 2,375, quindi ciascuna vale 2,375",
          "b ≈ 1,7012; d = 2,375",
          "Rating = (2,375 + 1,7012 + 2,375 + 2,375) ÷ 6 × 100 ≈ 143,5",
        ],
      },
      {
        title: "12 su 28 per 96 yard, 0 TD, 3 INT",
        steps: ["a ≈ 0,6429; b ≈ 0,1071; c = 0", "d = 2,375 − 3 ÷ 28 × 25 ≈ −0,3036, quindi vale 0", "Rating = 0,75 ÷ 6 × 100 = 12,5"],
      },
    ],
    assumptions: [
      "Il calcolatore usa la formula NFL così come è pubblicata. Il football universitario usa la formula separata di efficienza NCAA mostrata sotto il rating.",
      "Il rating misura solo i passaggi. Ignora sack, corse, fumble, situazione di gioco e qualità dei ricevitori e degli avversari.",
      "I limiti da 0 a 2,375 fanno sì che valori molto alti o molto bassi in un'area smettano di influire sul rating, quindi due prestazioni di passaggio piuttosto diverse possono avere lo stesso rating.",
      "Il rating mostrato è arrotondato a un decimale, come nelle statistiche ufficiali.",
    ],
    faqs: [
      {
        question: "Qual è un passer rating perfetto?",
        answer:
          "158,3. Richiede una percentuale di passaggi completati di almeno il 77,5%, almeno 12,5 yard per tentativo, touchdown su almeno l'11,875% dei tentativi e nessun intercetto, così che ogni componente raggiunga 2,375.",
      },
      {
        question: "Qual è un buon passer rating?",
        answer:
          "La formula fu progettata in modo che 66,7 corrispondesse a un passatore medio degli anni Sessanta. Da allora il gioco di passaggio è diventato più efficiente, quindi le medie della lega oggi sono intorno a 90 e un rating sopra 100 è in genere considerato molto buono.",
      },
      {
        question: "Il passer rating è la stessa cosa del QBR?",
        answer:
          "No. Il passer rating usa solo i cinque numeri del tabellino. Il Total QBR di ESPN è una misura separata e proprietaria che considera anche il contesto di gioco, le corse e i sack.",
      },
    ],
    sourcesUsedFor: [
      "Le quattro componenti NFL, i loro limiti da 0 a 2,375, la scala ÷ 6 × 100 e il massimo di 158,3.",
      "La formula di efficienza di passaggio NCAA (8,4 × yard + 330 × TD + 100 × completati − 200 × INT) ÷ tentativi.",
    ],
  },
  text: {
    attempts: "Passaggi tentati",
    completions: "Passaggi completati",
    yards: "Yard di passaggio",
    yardsHelp: "Yard di passaggio totali; possono essere negative.",
    touchdowns: "Passaggi da touchdown",
    interceptions: "Intercetti",
    errors: {
      completions: "I passaggi completati non possono superare i tentati.",
      touchdowns: "I passaggi da touchdown non possono superare i completati.",
      interceptions: "Gli intercetti non possono superare i passaggi incompleti (tentati meno completati).",
    },
    rating: "Passer rating NFL",
    caption: "{cmp} su {att} per {yds} yard, {td} TD, {int} INT.",
    ncaa: "Efficienza di passaggio NCAA",
    completionPct: "Percentuale di passaggi completati",
    yardsPerAttempt: "Yard per tentativo",
    tdPct: "Percentuale di touchdown",
    intPct: "Percentuale di intercetti",
    table: {
      caption: "Componenti del passer rating (ciascuna limitata a 0–2,375)",
      component: "Componente",
      raw: "Prima del limite",
      used: "Usata",
    },
    components: {
      a: "a: completati per tentativo",
      b: "b: yard per tentativo",
      c: "c: touchdown per tentativo",
      d: "d: intercetti per tentativo",
    },
    notes: {
      clamped:
        "Almeno una componente ha raggiunto il limite di 0 o 2,375, quindi valori migliori (o peggiori) in quell'area non cambiano più il rating.",
      perfect: "Questo è un passer rating perfetto di 158,3, il massimo consentito dalla formula NFL.",
      scale: "I rating NFL e NCAA usano scale diverse e non sono confrontabili tra loro.",
    },
  },
};

export default it;
