import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CombinationsText } from "../text/en";

const es: CalculatorTranslation<CombinationsText> = {
  content: {
    title: "Calculadora de permutaciones y combinaciones",
    shortTitle: "Permutaciones y combinaciones",
    summary:
      "Cuenta de forma exacta las maneras de elegir u ordenar r de n elementos: nCr, nPr y ambos recuentos con repetición.",
    metaTitle: "Calculadora de permutaciones y combinaciones – nCr, nPr",
    metaDescription:
      "Calcula nCr y nPr exactos para n hasta 10.000, además de combinaciones y permutaciones con repetición, con los resultados enormes en notación científica.",
    keywords: [
      "permutaciones",
      "combinaciones",
      "calculadora de combinaciones",
      "nCr",
      "nPr",
      "coeficiente binomial",
      "combinaciones con repetición",
      "variaciones",
      "combinatoria",
      "factorial",
    ],
    intro: [
      "¿Cuántos comités distintos de 4 personas puede formar un club de 12? ¿De cuántas maneras se pueden repartir 3 premios entre 25 participantes? Son problemas de recuento, y la respuesta depende de si el orden importa.",
      "Una combinación cuenta selecciones en las que el orden no importa: el comité {Ana, Ben, Cy} es el mismo en cualquier orden. Una permutación cuenta ordenaciones en las que el orden sí importa: primer, segundo y tercer premio son resultados distintos. Esta calculadora da ambos valores de forma exacta, además de las versiones en las que un elemento puede elegirse más de una vez.",
    ],
    howToUse: [
      "Introduce n, el número de elementos distintos entre los que elegir (de 0 a 10.000).",
      "Introduce r, cuántos eliges (de 0 a n).",
      "Consulta nCr para selecciones sin orden y nPr para ordenaciones.",
      "Usa los resultados con repetición cuando el mismo elemento puede volver a elegirse, como las bolas de helado (combinaciones) o las cifras de un PIN (permutaciones).",
    ],
    formulas: [
      {
        title: "Combinaciones",
        expression: "nCr = n! ÷ (r! × (n − r)!)",
        explanation: "Selecciones de r elementos de entre n en las que el orden no importa.",
      },
      {
        title: "Permutaciones",
        expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)",
        explanation: "Ordenaciones de r elementos de entre n. nPr = nCr × r!",
      },
      {
        title: "Combinaciones con repetición",
        expression: "C(n + r − 1, r)",
        explanation: "Selecciones de r elementos de n tipos cuando un tipo puede elegirse más de una vez (el recuento de «estrellas y barras»).",
      },
      {
        title: "Permutaciones con repetición",
        expression: "nʳ",
        explanation: "Secuencias ordenadas de longitud r en las que cada posición puede ser cualquiera de los n elementos.",
      },
    ],
    examples: [
      {
        title: "Comités de 4 en un club de 12",
        steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11.880 ÷ 24", "= 495 comités distintos"],
      },
      {
        title: "Oro, plata y bronce entre 25 participantes",
        steps: [
          "En las medallas el orden importa: 25P3 = 25 × 24 × 23 = 13.800",
          "Si los 3 ganadores recibieran premios idénticos: 25C3 = 13.800 ÷ 3! = 2.300",
          "El resultado principal muestra 2.300; el número de permutaciones aparece debajo",
        ],
      },
      {
        title: "Elegir 100 de 200 elementos",
        steps: [
          "200C100 = 200! ÷ (100! × 100!)",
          "El valor exacto tiene 59 cifras y empieza por 9.054.851.465…",
          "Se muestra como 9,054851 × 10⁵⁸ (59 cifras)",
        ],
      },
    ],
    assumptions: [
      "Los n elementos son distintos. Contar ordenaciones de elementos con repeticiones (como las letras de BANANA) requiere otra fórmula.",
      "Los cuatro resultados se calculan de forma exacta con aritmética de números enteros. Los resultados de más de 30 cifras se muestran en notación científica, redondeados a 7 cifras significativas, junto con el número total de cifras.",
      "Por convenio 0! = 1, de modo que nC0 = nP0 = 1 y no elegir nada cuenta como una manera.",
      "n se limita a 10.000 para que los resultados sean rápidos; aun así, nʳ puede llegar a tener 40.001 cifras.",
    ],
    faqs: [
      {
        question: "¿Cómo sé si debo usar una permutación o una combinación?",
        answer:
          "Pregúntate si intercambiar dos de los elementos elegidos da un resultado distinto. Si es así, como con asientos, clasificaciones o contraseñas, usa una permutación. Si no, como con una mano de cartas o un grupo de personas, usa una combinación.",
      },
      {
        question: "¿Por qué nCr es igual que nC(n − r)?",
        answer:
          "Elegir r elementos para llevártelos equivale a elegir los n − r que dejas. Por ejemplo, escoger 3 de 10 personas para un equipo (120 maneras) equivale a escoger las 7 que se quedan fuera (también 120 maneras).",
      },
      {
        question: "¿Qué significa «con repetición»?",
        answer:
          "Significa que un elemento puede elegirse más de una vez. Un PIN de 4 cifras usa permutaciones con repetición: 10⁴ = 10.000 códigos. Elegir 3 bolas de helado entre 5 sabores, pudiendo repetir sabor, usa combinaciones con repetición: C(7, 3) = 35.",
      },
    ],
    sourcesUsedFor: [
      "El principio multiplicativo y las fórmulas de permutaciones y combinaciones de n objetos distintos.",
    ],
  },
  text: {
    n: "Total de elementos (n)",
    nHelp: "Un número entero de 0 a 10.000.",
    r: "Elementos elegidos (r)",
    rHelp: "Un número entero de 0 a n.",
    rTooLarge: "r no puede ser mayor que n ({n}). No se pueden elegir más elementos distintos de los que hay.",
    combinations: "Combinaciones, nCr (el orden no importa)",
    permutations: "Permutaciones, nPr (el orden importa)",
    combinationsRepeat: "Combinaciones con repetición, C(n + r − 1, r)",
    permutationsRepeat: "Permutaciones con repetición, nʳ",
    digits: { zero: "{n} cifras", one: "{n} cifra", two: "{n} cifras", few: "{n} cifras", many: "{n} cifras", other: "{n} cifras" },
    large: "{value} ({digits})",
    caption: "Maneras de elegir {r} de {n} elementos cuando el orden no importa.",
    largeNote:
      "Los resultados de más de 30 cifras se muestran en notación científica, redondeados a 7 cifras significativas, con el número exacto de cifras.",
    zeroRepeat: "Con n = 0 y r = 0 hay exactamente una manera de no elegir nada, así que todos los recuentos valen 1.",
  },
};

export default es;
