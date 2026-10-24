import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RaceTimePredictorText } from "../text/en";

const it: CalculatorTranslation<RaceTimePredictorText> = {
  content: {
    title: "Calcolatore di previsione del tempo di gara",
    shortTitle: "Tempo di gara",
    summary:
      "Prevedi il tuo tempo finale su miglio, 5K, 10K, mezza maratona, maratona o qualsiasi distanza a partire da una gara recente, con la formula di resistenza di Riegel.",
    metaTitle: "Calcolatore di previsione del tempo di gara – Formula di Riegel",
    metaDescription:
      "Prevedi tempo finale e passo da un risultato recente con la formula di Riegel, T₂ = T₁ × (D₂/D₁)^1,06, per 5K, 10K, mezza maratona e maratona.",
    keywords: [
      "previsione tempo gara",
      "previsione tempo maratona",
      "formula di Riegel",
      "previsione mezza maratona",
      "da 5K a maratona",
      "equivalenza tempi di gara",
      "tempo finale previsto",
    ],
    intro: [
      "Se sai quanto sei stato veloce in una gara, puoi stimare quanto potresti esserlo in un'altra. I runner rallentano un po' man mano che la distanza aumenta, e nel 1981 l'ingegnere Peter Riegel dimostrò che i record mondiali su molte distanze seguono un'unica, semplice legge di potenza.",
      "Inserisci una gara recente e il tuo tempo finale, scegli la distanza che vuoi correre e questo strumento prevede tempo e passo con la formula di Riegel. Elenca anche le previsioni per tutte le distanze standard, dal miglio alla maratona.",
    ],
    howToUse: [
      "Scegli la distanza di una gara recente corsa a pieno sforzo, oppure inserisci una distanza personalizzata in km o miglia.",
      "Inserisci il tuo tempo finale in ore, minuti e secondi.",
      "Scegli la distanza da prevedere.",
      "Lascia l'esponente di affaticamento a 1,06, a meno che tu non sappia di calare di più (prova 1,08) o di meno sulle lunghe distanze.",
      "Leggi il tempo previsto, il passo necessario e la tabella delle previsioni per le altre distanze.",
    ],
    formulas: [
      {
        title: "Formula di Riegel",
        expression: "T₂ = T₁ × (D₂ ÷ D₁)^k",
        explanation:
          "T₁ è il tuo tempo sulla distanza D₁ e T₂ il tempo previsto su D₂. Con k = 1,06, raddoppiare la distanza moltiplica il tempo per 2^1,06 ≈ 2,085.",
      },
      {
        title: "Passo",
        expression: "passo al km = T₂ ÷ D₂ (km)\npasso al miglio = passo al km × 1,609344",
        explanation: "Il passo medio necessario per correre nel tempo previsto.",
      },
    ],
    examples: [
      {
        title: "Da un 10K in 50:00 a una mezza maratona",
        steps: ["T₁ = 3.000 s, D₂ ÷ D₁ = 21,0975 ÷ 10 = 2,10975", "T₂ = 3.000 × 2,10975^1,06 ≈ 6.619 s", "6.619 s = 1:50:19, un passo di circa 5:14 al km"],
      },
      {
        title: "Da un 5K in 22:30 a una maratona",
        steps: [
          "T₁ = 1.350 s, D₂ ÷ D₁ = 42,195 ÷ 5 = 8,439",
          "T₂ = 1.350 × 8,439^1,06 ≈ 12.948 s = 3:35:48",
          "La maratona è più di quattro volte la distanza del 5K, quindi considera questa previsione ottimistica",
        ],
      },
      {
        title: "Da una mezza maratona in 1:45:00 a un 10K, con k = 1,08",
        steps: ["T₁ = 6.300 s, D₂ ÷ D₁ = 10 ÷ 21,0975 ≈ 0,474", "T₂ = 6.300 × 0,474^1,08 ≈ 2.813 s", "2.813 s = 0:46:53"],
      },
    ],
    assumptions: [
      "Sei allenato altrettanto bene per la distanza obiettivo. Un 5K veloce non significa avere la resistenza per una maratona senza abbastanza lunghi.",
      "Le previsioni sono meno precise per distanze più di circa quattro volte più lunghe o più corte della tua gara, e per gare che durano più di circa 4 ore, dove tendono a essere troppo veloci.",
      "Entrambe le gare si corrono su percorsi simili e pianeggianti, con condizioni meteo simili. Salite, caldo, vento e altitudine non sono considerati.",
    ],
    faqs: [
      {
        question: "Perché l'esponente è 1,06?",
        answer:
          "Riegel ha adattato l'esponente ai record mondiali e per la corsa ha trovato circa 1,06. Un valore di 1 significherebbe poter mantenere lo stesso passo su qualsiasi distanza; qualsiasi valore superiore a 1 significa che rallenti man mano che la gara si allunga.",
      },
      {
        question: "Quale gara devo usare come dato di partenza?",
        answer:
          "Usa una gara recente corsa a pieno sforzo, idealmente di distanza vicina a quella obiettivo. Una mezza maratona prevede una maratona meglio di un miglio.",
      },
      {
        question: "Perché la mia maratona reale è più lenta del previsto?",
        answer:
          "La maratona dipende molto dall'allenamento di resistenza, dall'alimentazione e dalla gestione del ritmo, che una gara breve non mette alla prova. Molti runner corrono più lentamente di quanto preveda la formula, per questo alcuni allenatori usano per la maratona un esponente più alto, da 1,07 a 1,08.",
      },
    ],
    sourcesUsedFor: ["L'equazione di resistenza T = a·D^b che lega tempo e distanza, con un esponente di circa 1,06 per la corsa."],
  },
  text: {
    knownRace: "Distanza della gara recente",
    targetRace: "Distanza da prevedere",
    races: {
      mile: "1 miglio",
      "5k": "5K",
      "10k": "10K",
      half: "Mezza maratona (21,0975 km)",
      marathon: "Maratona (42,195 km)",
      custom: "Distanza personalizzata",
    },
    knownDistance: "Distanza della gara recente",
    targetDistance: "Distanza da prevedere",
    unit: "Unità di distanza",
    units: { km: "Chilometri (km)", mi: "Miglia (mi)" },
    hours: "Tempo finale: ore",
    minutes: "Minuti",
    seconds: "Secondi",
    exponent: "Esponente di affaticamento (k)",
    exponentHelp: "Il valore di Riegel per la corsa è 1,06. Un valore più alto presuppone che tu rallenti di più man mano che la distanza aumenta.",
    timeZero: "Inserisci un tempo finale maggiore di zero.",
    predicted: "Tempo finale previsto",
    caption: "{time} su {known} → {target}, k = {k}",
    perKm: "Passo previsto al chilometro",
    perMile: "Passo previsto al miglio",
    speed: "Velocità media",
    tableCaption: "Previsioni per le distanze standard",
    columns: { distance: "Distanza", time: "Tempo previsto", perKm: "Passo /km", perMile: "Passo /mi" },
    tableRaces: { mile: "1 miglio", "5k": "5K", "10k": "10K", half: "Mezza maratona", marathon: "Maratona" },
    notes: {
      far: "La distanza obiettivo è più di quattro volte più lunga o più corta della tua gara, quindi la previsione è meno affidabile.",
      long: "Il tempo previsto supera circa 4 ore, dove la formula tende a essere ottimistica.",
      same: "Le due distanze coincidono, quindi la previsione è uguale al tuo tempo finale.",
      training: "Presuppone che tu sia allenato altrettanto bene per la distanza obiettivo, ad esempio con abbastanza lunghi per una maratona.",
    },
  },
};

export default it;
