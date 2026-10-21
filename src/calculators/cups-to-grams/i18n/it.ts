import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CupsToGramsText } from "../text/en";

const it: CalculatorTranslation<CupsToGramsText> = {
  content: {
    title: "Convertitore da tazze a grammi",
    shortTitle: "Tazze in grammi",
    summary: "Converti tazze in grammi e grammi in tazze per farina, zucchero, burro e altri ingredienti da forno, ciascuno con la propria densità.",
    metaTitle: "Convertitore da tazze a grammi – Farina, zucchero, burro",
    metaDescription:
      "Converti tazze in grammi e grammi in tazze per 18 ingredienti da forno con la densità di ciascuno, con tazze statunitensi, metriche e imperiali.",
    keywords: ["tazze in grammi", "grammi in tazze", "quanti grammi in una tazza", "tazza di farina in grammi", "tazza di zucchero in grammi", "equivalenze in cucina", "misure da cucina"],
    intro: [
      "Una tazza misura un volume, ma una tazza di farina pesa molto meno di una tazza di miele. Per questo, per convertire tra tazze e grammi serve la densità di ciascun ingrediente.",
      "Scegli l'ingrediente e la tazza usata dalla ricetta. Le ricette statunitensi usano una tazza da 236,6 mL, mentre molte ricette australiane, neozelandesi e canadesi usano una tazza metrica da 250 mL.",
    ],
    howToUse: [
      "Scegli da tazze a grammi o da grammi a tazze.",
      "Scegli l'ingrediente.",
      "Scegli la misura di tazza usata dalla ricetta.",
      "Inserisci la quantità e leggi il risultato e la tabella per tazza.",
    ],
    formulas: [
      { title: "Da tazze a grammi", expression: "grammi = tazze × volume della tazza (mL) × densità (g/mL)", explanation: "Densità = grammi in una tazza statunitense ÷ 236,588 mL." },
      { title: "Da grammi a tazze", expression: "tazze = grammi ÷ (volume della tazza (mL) × densità (g/mL))", explanation: "La stessa relazione, risolta rispetto al numero di tazze." },
    ],
    examples: [
      {
        title: "2 tazze statunitensi di farina 00",
        steps: ["Una tazza statunitense di farina 00 pesa 120 g", "2 × 120 g = 240 g (circa 8,47 oz)"],
      },
      {
        title: "500 g di zucchero semolato in tazze statunitensi",
        steps: ["Una tazza statunitense di zucchero semolato pesa 198 g", "500 ÷ 198 ≈ 2,53 tazze, poco più di 2 tazze e mezza"],
      },
    ],
    assumptions: [
      "Gli ingredienti secchi si versano nella tazza con un cucchiaio e si livellano, senza immergere la tazza nella confezione né setacciarli.",
      "I pesi sono valori tipici; la marca della farina, la granulometria dello zucchero, l'umidità e la temperatura possono modificarli di qualche punto percentuale.",
      "Il burro si misura solido e ben pressato; i liquidi a temperatura ambiente.",
    ],
    faqs: [
      {
        question: "Perché una tazza di farina pesa meno di una di zucchero?",
        answer: "Le particelle di farina trattengono più aria e sono meno dense, quindi lo stesso volume contiene meno massa. Per questo ogni ingrediente richiede una conversione propria.",
      },
      {
        question: "Quale misura di tazza devo scegliere?",
        answer: "Usa la tazza statunitense per le ricette americane e la tazza metrica da 250 mL per la maggior parte delle ricette australiane, neozelandesi e canadesi. Le vecchie ricette britanniche possono usare la tazza imperiale, più grande.",
      },
      { question: "È meglio pesare che usare le tazze?", answer: "Sì, nei dolci. Una bilancia da cucina evita le variazioni che dipendono da come si riempie la tazza." },
    ],
    sourcesUsedFor: [
      "Grammi per tazza di farine, zuccheri, burro, olio, miele, sciroppo d'acero, cacao, fiocchi d'avena, gocce di cioccolato e amido di mais.",
      "Peso di una tazza di latte intero e di riso bianco a chicco lungo crudo.",
      "La misura della tazza statunitense (8 once liquide USA) e dell'oncia liquida imperiale.",
    ],
  },
  text: {
    direction: "Converti",
    directions: { toGrams: "Tazze in grammi", toCups: "Grammi in tazze" },
    ingredient: "Ingrediente",
    ingredients: {
      flourAllPurpose: "Farina 00 (per tutti gli usi)",
      flourBread: "Farina di forza (per pane)",
      flourWholeWheat: "Farina integrale di frumento",
      flourAlmond: "Farina di mandorle",
      sugarGranulated: "Zucchero semolato",
      sugarBrown: "Zucchero di canna (pressato)",
      sugarPowdered: "Zucchero a velo",
      butter: "Burro",
      oil: "Olio vegetale",
      honey: "Miele",
      mapleSyrup: "Sciroppo d'acero",
      cocoa: "Cacao in polvere (amaro)",
      oats: "Fiocchi d'avena",
      chocolateChips: "Gocce di cioccolato",
      cornstarch: "Amido di mais (maizena)",
      rice: "Riso bianco (crudo)",
      milk: "Latte (intero)",
      water: "Acqua",
    },
    cup: "Misura della tazza",
    cups: {
      us: "Tazza USA (236,6 mL)",
      metric: "Tazza metrica (250 mL)",
      usLegal: "Tazza delle etichette nutrizionali USA (240 mL)",
      imperial: "Tazza imperiale (284,1 mL)",
    },
    cupHelp: "Le ricette statunitensi usano la tazza USA; quelle australiane, neozelandesi e canadesi di solito usano la tazza metrica da 250 mL.",
    amountCups: "Quantità in tazze",
    amountGrams: "Quantità in grammi",
    cupsUnit: "tazze",
    grams: "Peso",
    gramsCaption: "{amount} × {cup} di {ingredient}.",
    cupsResult: "Volume in tazze",
    cupsCaption: "{amount} g di {ingredient}. Misura: {cup}.",
    ounces: "In once",
    milliliters: "Volume in millilitri",
    kitchen: "Misura da cucina più vicina",
    density: "Densità",
    tableCaption: "Peso di una tazza di ogni ingrediente ({cup})",
    tableIngredient: "Ingrediente",
    tableGrams: "Grammi",
    notes: {
      method: "I pesi presuppongono che gli ingredienti siano versati nella tazza con un cucchiaio e livellati. Prendere la farina direttamente dalla confezione con la tazza la compatta e può aggiungere il 20–30%.",
      sources: "Le densità sono valori tipici tratti dalla tabella dei pesi degli ingredienti di King Arthur Baking e da USDA FoodData Central; variano secondo la marca e le condizioni.",
    },
  },
};

export default it;
