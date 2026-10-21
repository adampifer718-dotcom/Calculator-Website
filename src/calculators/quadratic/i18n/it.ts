import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuadraticText } from "../text/en";

const it: CalculatorTranslation<QuadraticText> = {
  content: {
    title: "Calcolatore di equazioni di secondo grado",
    shortTitle: "Equazione di secondo grado",
    summary: "Risolvi ax² + bx + c = 0 con radici reali o complesse, insieme a discriminante, vertice e asse di simmetria.",
    metaTitle: "Calcolatore di equazioni di secondo grado – Radici",
    metaDescription:
      "Risolvi qualsiasi equazione di secondo grado ax² + bx + c = 0: radici reali o complesse, discriminante e il suo significato, vertice e asse di simmetria.",
    keywords: [
      "equazione di secondo grado",
      "equazione quadratica",
      "formula risolutiva",
      "risolvere equazione di secondo grado",
      "discriminante",
      "vertice della parabola",
      "radici complesse",
      "algebra",
    ],
    intro: [
      "Un'equazione di secondo grado ha la forma ax² + bx + c = 0, con a diverso da zero. Il suo grafico è una parabola, e le radici sono i punti in cui la parabola incontra l'asse x.",
      "Scrivi i tre coefficienti per ottenere entrambe le radici in una volta. Se la parabola non raggiunge mai l'asse x, il calcolatore dà la coppia di radici complesse. Mostra anche il discriminante, il vertice e l'asse di simmetria.",
    ],
    howToUse: [
      "Riordina l'equazione in modo che un membro sia 0; per esempio, 3x² = 7x + 6 diventa 3x² − 7x − 6 = 0.",
      "Inserisci a, b e c. Includi i segni meno e usa 0 per ogni termine mancante.",
      "Leggi le radici. Quelle reali sono elencate dalla maggiore alla minore; quelle complesse come parte reale ± parte immaginaria.",
      "Usa discriminante, vertice e asse di simmetria per disegnare la parabola o controllare i tuoi calcoli.",
    ],
    formulas: [
      { title: "Formula risolutiva", expression: "x = (−b ± √(b² − 4ac)) ÷ 2a", explanation: "Dà entrambe le radici. Il ± produce una radice con + e una con −." },
      {
        title: "Discriminante",
        expression: "D = b² − 4ac",
        explanation: "Se D > 0 ci sono due radici reali; se D = 0, una radice doppia; se D < 0, due radici complesse coniugate.",
      },
      {
        title: "Forma stabile usata nel calcolo",
        expression: "q = −½(b + sign(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q",
        explanation:
          "È algebricamente identica alla formula risolutiva, ma evita di sottrarre due numeri quasi uguali, cosa che fa perdere precisione quando b² è molto più grande di 4ac.",
      },
      { title: "Radici complesse", expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i", explanation: "Si usa quando D < 0; i è l'unità immaginaria, con i² = −1." },
      {
        title: "Vertice e asse",
        expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  asse: x = h",
        explanation: "Il vertice (h, k) è il punto di svolta della parabola. k è il valore di ax² + bx + c in x = h.",
      },
      {
        title: "Somma e prodotto delle radici",
        expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a",
        explanation: "Sono le formule di Viète. Valgono anche per le radici complesse.",
      },
    ],
    examples: [
      {
        title: "Due radici reali: 3x² − 7x − 6 = 0",
        steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, quindi x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 e x₂ = −4 ÷ 6 ≈ −0,6667"],
      },
      {
        title: "Una radice doppia: 4x² + 12x + 9 = 0",
        steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1,5", "La parabola tocca l'asse x solo nel suo vertice (−1,5; 0)."],
      },
      {
        title: "Radici complesse: x² − 2x + 10 = 0",
        steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Parte reale: −(−2) ÷ 2 = 1", "Parte immaginaria: √36 ÷ 2 = 3, quindi x = 1 ± 3i"],
      },
    ],
    assumptions: [
      "I coefficienti sono numeri reali. Le equazioni con coefficienti complessi non sono supportate.",
      "I risultati sono mostrati con 10 cifre significative. Un discriminante che differisce da zero solo per un minimo errore di arrotondamento è trattato come esattamente zero, così viene indicata la radice doppia.",
      "I coefficienti molto grandi o molto piccoli sono calcolati in virgola mobile a doppia precisione, quindi le ultime cifre di risultati estremi possono differire dall'aritmetica esatta.",
    ],
    faqs: [
      {
        question: "Cosa succede se a è 0?",
        answer:
          "Allora manca il termine in x² e l'equazione è lineare: bx + c = 0, con l'unica soluzione x = −c ÷ b. Il calcolatore richiede una a diversa da zero perché la formula risolutiva dividerebbe per zero.",
      },
      {
        question: "Che cosa significa un discriminante negativo?",
        answer: "La parabola non incontra mai l'asse x, quindi non ci sono soluzioni reali. Le due soluzioni sono numeri complessi che differiscono solo per il segno della parte immaginaria.",
      },
      {
        question: "Perché il calcolatore non usa direttamente la formula dei libri di testo?",
        answer:
          "Quando b² è molto più grande di 4ac, −b + √D sottrae due numeri quasi uguali e perde cifre. La forma stabile calcola prima la radice più grande e ricava quella più piccola dal prodotto delle radici, c ÷ a, conservando tutta la precisione.",
      },
    ],
    sourcesUsedFor: ["La formula risolutiva e come il discriminante indica il numero e il tipo di soluzioni."],
  },
  text: {
    a: "Coefficiente a",
    aHelp: "Il numero davanti a x². Non può essere 0.",
    b: "Coefficiente b",
    bHelp: "Il numero davanti a x. Usa 0 se non c'è il termine in x.",
    c: "Termine noto c",
    cHelp: "Il numero senza x. Usa 0 se non c'è.",
    aZero: "Il coefficiente a non può essere 0. Con a = 0 l'equazione è lineare, non di secondo grado.",
    roots: "Radici",
    twoRoots: "x₁ = {x1}, x₂ = {x2}",
    oneRoot: "x = {x} (radice doppia)",
    complexRoots: "x = {re} ± {im}i",
    imaginaryRoots: "x = ±{im}i",
    discriminant: "Discriminante (b² − 4ac)",
    meaning: "Che cosa significa il discriminante",
    meanings: {
      positive: "Positivo: due radici reali distinte",
      zero: "Zero: una radice reale doppia",
      negative: "Negativo: nessuna radice reale, due radici complesse coniugate",
    },
    vertex: "Vertice (h, k)",
    vertexValue: "({h}, {k})",
    axis: "Asse di simmetria",
    axisValue: "x = {h}",
    sum: "Somma delle radici (−b/a)",
    product: "Prodotto delle radici (c/a)",
    opensUp: "La parabola è rivolta verso l'alto, quindi il vertice è il suo punto più basso.",
    opensDown: "La parabola è rivolta verso il basso, quindi il vertice è il suo punto più alto.",
  },
};

export default it;
