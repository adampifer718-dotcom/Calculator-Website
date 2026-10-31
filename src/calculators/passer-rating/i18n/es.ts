import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasserRatingText } from "../text/en";

const es: CalculatorTranslation<PasserRatingText> = {
  content: {
    title: "Calculadora del rating de pasador de la NFL",
    shortTitle: "Rating de pasador",
    summary:
      "Calcula el rating de pasador de la NFL de un quarterback a partir de los intentos, los pases completos, las yardas, los touchdowns y las intercepciones, con los cuatro componentes y la eficiencia NCAA.",
    metaTitle: "Rating de pasador de la NFL – QB rating y NCAA",
    metaDescription:
      "Calcula el rating de pasador de la NFL (de 0 a 158,3) con la línea de pases de un quarterback, sus cuatro componentes y la fórmula de eficiencia de la NCAA.",
    keywords: [
      "rating de pasador",
      "passer rating",
      "QB rating",
      "rating de quarterback",
      "fórmula passer rating NFL",
      "158,3",
      "eficiencia de pase NCAA",
    ],
    intro: [
      "El rating de pasador (passer rating) es la medida oficial de la NFL del juego de pase de un quarterback, en uso desde 1973. Combina cuatro tasas: el porcentaje de pases completos, las yardas por intento, los touchdowns por intento y las intercepciones por intento. Cada parte está limitada a un intervalo, así que el rating va de 0 a un máximo perfecto de 158,3.",
      "Introduce la línea de pases de un partido, una temporada o una carrera para obtener el rating, el valor de cada componente y la proporción de intentos que fueron pases completos, touchdowns e intercepciones. La calculadora muestra también la eficiencia de pase de la NCAA, que el fútbol americano universitario usa en otra escala.",
    ],
    howToUse: [
      "Introduce los pases intentados, los pases completos y las yardas de pase. Las yardas pueden ser negativas.",
      "Introduce los pases de touchdown y las intercepciones.",
      "Consulta el rating de pasador y revisa la tabla de componentes para ver qué partes han alcanzado sus límites.",
    ],
    formulas: [
      {
        title: "Los cuatro componentes",
        expression: "a = (Cmp ÷ Att − 0,3) × 5\nb = (Yds ÷ Att − 3) × 0,25\nc = TD ÷ Att × 20\nd = 2,375 − INT ÷ Att × 25",
        explanation: "Cada componente se limita a un valor entre 0 y 2,375 antes de sumarlos.",
      },
      {
        title: "Rating de pasador",
        expression: "rating = (a + b + c + d) ÷ 6 × 100",
        explanation: "Con todos los componentes en 2,375, el rating es 9,5 ÷ 6 × 100 ≈ 158,3, el máximo.",
      },
      {
        title: "Eficiencia de pase de la NCAA",
        expression: "(8,4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att",
        explanation: "La fórmula del fútbol americano universitario. No tiene límites, así que puede superar con creces 200 o bajar de 0.",
      },
    ],
    examples: [
      {
        title: "23 de 34 para 287 yardas, 2 TD, 1 INT",
        steps: [
          "a = (23 ÷ 34 − 0,3) × 5 ≈ 1,8824; b = (287 ÷ 34 − 3) × 0,25 ≈ 1,3603",
          "c = 2 ÷ 34 × 20 ≈ 1,1765; d = 2,375 − 1 ÷ 34 × 25 ≈ 1,6397",
          "Rating = 6,0588 ÷ 6 × 100 ≈ 101,0",
        ],
      },
      {
        title: "30 de 41 para 402 yardas, 5 TD, 0 INT",
        steps: [
          "a ≈ 2,1585 y c ≈ 2,4390 superan 2,375, así que cada uno cuenta como 2,375",
          "b ≈ 1,7012; d = 2,375",
          "Rating = (2,375 + 1,7012 + 2,375 + 2,375) ÷ 6 × 100 ≈ 143,5",
        ],
      },
      {
        title: "12 de 28 para 96 yardas, 0 TD, 3 INT",
        steps: ["a ≈ 0,6429; b ≈ 0,1071; c = 0", "d = 2,375 − 3 ÷ 28 × 25 ≈ −0,3036, así que cuenta como 0", "Rating = 0,75 ÷ 6 × 100 = 12,5"],
      },
    ],
    assumptions: [
      "La calculadora usa la fórmula de la NFL tal como se publica. El fútbol americano universitario usa la fórmula de eficiencia de la NCAA, que se muestra aparte debajo del rating.",
      "El rating mide solo el juego de pase. No tiene en cuenta los sacks, las carreras, los balones sueltos, la situación del partido ni la calidad de los receptores y del rival.",
      "Los límites de 0 a 2,375 hacen que las cifras muy altas o muy bajas en un apartado dejen de influir en el rating, así que dos líneas de pases bastante distintas pueden tener el mismo rating.",
      "El rating mostrado se redondea a un decimal, como en las estadísticas oficiales.",
    ],
    faqs: [
      {
        question: "¿Qué es un rating de pasador perfecto?",
        answer:
          "158,3. Requiere un porcentaje de pases completos de al menos el 77,5 %, al menos 12,5 yardas por intento, touchdowns en al menos el 11,875 % de los intentos y ninguna intercepción, de modo que todos los componentes llegan a 2,375.",
      },
      {
        question: "¿Qué es un buen rating de pasador?",
        answer:
          "La fórmula se diseñó para que 66,7 correspondiera a un pasador medio de los años sesenta. Desde entonces el juego de pase se ha vuelto más eficiente, así que las medias de la liga rondan ahora los 90 y un rating superior a 100 se suele considerar muy bueno.",
      },
      {
        question: "¿El rating de pasador es lo mismo que el QBR?",
        answer:
          "No. El rating de pasador usa solo los cinco números de la hoja de estadísticas. El Total QBR de ESPN es una medida distinta y propietaria que también tiene en cuenta el contexto del partido, las carreras y los sacks.",
      },
    ],
    sourcesUsedFor: [
      "Los cuatro componentes de la NFL, sus límites de 0 a 2,375, el escalado ÷ 6 × 100 y el máximo de 158,3.",
      "La fórmula de eficiencia de pase de la NCAA (8,4 × yardas + 330 × TD + 100 × pases completos − 200 × INT) ÷ intentos.",
    ],
  },
  text: {
    attempts: "Pases intentados",
    completions: "Pases completos",
    yards: "Yardas de pase",
    yardsHelp: "Total de yardas de pase; puede ser negativo.",
    touchdowns: "Pases de touchdown",
    interceptions: "Intercepciones",
    errors: {
      completions: "Los pases completos no pueden ser más que los intentos.",
      touchdowns: "Los pases de touchdown no pueden ser más que los pases completos.",
      interceptions: "Las intercepciones no pueden ser más que los pases incompletos (intentos menos pases completos).",
    },
    rating: "Rating de pasador de la NFL",
    caption: "{cmp} de {att} para {yds} yardas, {td} TD, {int} INT.",
    ncaa: "Eficiencia de pase de la NCAA",
    completionPct: "Porcentaje de pases completos",
    yardsPerAttempt: "Yardas por intento",
    tdPct: "Porcentaje de touchdowns",
    intPct: "Porcentaje de intercepciones",
    table: {
      caption: "Componentes del rating de pasador (cada uno limitado a 0–2,375)",
      component: "Componente",
      raw: "Antes del límite",
      used: "Utilizado",
    },
    components: {
      a: "a: pases completos por intento",
      b: "b: yardas por intento",
      c: "c: touchdowns por intento",
      d: "d: intercepciones por intento",
    },
    notes: {
      clamped:
        "Al menos un componente ha alcanzado el límite de 0 o de 2,375, así que unas cifras mejores (o peores) en ese apartado ya no cambian el rating.",
      perfect: "Es un rating de pasador perfecto de 158,3, el máximo que permite la fórmula de la NFL.",
      scale: "Los ratings de la NFL y de la NCAA usan escalas distintas y no se pueden comparar entre sí.",
    },
  },
};

export default es;
