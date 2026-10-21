import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GcfLcmText } from "../text/en";

const es: CalculatorTranslation<GcfLcmText> = {
  content: {
    title: "Calculadora de MCD y mcm",
    shortTitle: "MCD y mcm",
    summary: "Halla el máximo común divisor y el mínimo común múltiplo de una lista de números enteros, con su descomposición en factores primos.",
    metaTitle: "Calculadora de MCD y mcm – Máximo común divisor y mcm",
    metaDescription:
      "Halla el máximo común divisor y el mínimo común múltiplo de 2 a 20 números enteros, con la descomposición en factores primos de cada número.",
    keywords: [
      "mcd",
      "mcm",
      "máximo común divisor",
      "mínimo común múltiplo",
      "calcular mcd y mcm",
      "descomposición en factores primos",
      "común denominador",
      "algoritmo de Euclides",
    ],
    intro: [
      "El máximo común divisor (MCD) de un conjunto de números enteros es el mayor número que divide a todos ellos sin dejar resto. El mínimo común múltiplo (mcm) es el menor número positivo que es divisible entre todos ellos.",
      "El MCD sirve para simplificar fracciones y el mcm para hallar un común denominador o saber cuándo coinciden ciclos que se repiten. Introduce tus números para obtener ambos, junto con los factores primos de cada número.",
    ],
    howToUse: [
      "Escribe entre 2 y 20 números enteros positivos, separados por punto y coma, espacios o saltos de línea.",
      "Cada número puede llegar a un billón (10¹²).",
      "Consulta el MCD y el mcm. El mcm se calcula de forma exacta, aunque tenga muchas cifras.",
      "Revisa la tabla de factores primos para ver de dónde salen ambos resultados.",
    ],
    formulas: [
      {
        title: "Algoritmo de Euclides",
        expression: "mcd(a, b) = mcd(b, a mod b),  mcd(a, 0) = a",
        explanation: "Sustituye el número mayor por el resto hasta que el resto sea 0. El último valor distinto de cero es el MCD.",
      },
      { title: "mcm de dos números", expression: "mcm(a, b) = a ÷ mcd(a, b) × b", explanation: "Dividir primero mantiene pequeños los números intermedios." },
      {
        title: "Más de dos números",
        expression: "mcd(a, b, c) = mcd(mcd(a, b), c),  mcm(a, b, c) = mcm(mcm(a, b), c)",
        explanation: "Ambas operaciones se aplican de número en número.",
      },
      {
        title: "A partir de los factores primos",
        expression: "MCD = producto de los primos comunes con su menor exponente;  mcm = producto de todos los primos con su mayor exponente",
        explanation: "Los mismos resultados, leídos en la tabla de factorización.",
      },
    ],
    examples: [
      {
        title: "48 y 180",
        steps: [
          "180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0, así que el MCD es 12",
          "mcm = 48 ÷ 12 × 180 = 720",
          "Comprobación: 48 = 2⁴ × 3 y 180 = 2² × 3² × 5, así que MCD = 2² × 3 = 12 y mcm = 2⁴ × 3² × 5 = 720",
        ],
      },
      {
        title: "84, 126 y 210",
        steps: [
          "84 = 2² × 3 × 7, 126 = 2 × 3² × 7, 210 = 2 × 3 × 5 × 7",
          "Primos comunes con su menor exponente: 2 × 3 × 7 = 42",
          "Todos los primos con su mayor exponente: 2² × 3² × 5 × 7 = 1260",
        ],
      },
      {
        title: "35 y 64 (sin factores comunes)",
        steps: ["35 = 5 × 7 y 64 = 2⁶ no comparten ningún primo", "MCD = 1, así que los números son primos entre sí", "mcm = 35 × 64 = 2240"],
      },
    ],
    assumptions: [
      "Solo se aceptan números enteros positivos. El MCD y el mcm de cero o de números negativos siguen convenciones distintas, así que se rechazan.",
      "Cada número está limitado a 10¹² para que la factorización siga siendo rápida. El mcm se calcula con aritmética exacta de enteros grandes y puede ser mucho mayor.",
      "Se permiten números repetidos y no cambian los resultados; cada número distinto aparece una sola vez en la tabla de factorización.",
    ],
    faqs: [
      {
        question: "¿El MCD es lo mismo que el máximo común factor?",
        answer:
          "Sí. Máximo común divisor y máximo común factor son dos nombres del mismo número. En inglés se abrevia GCD, GCF o HCF.",
      },
      {
        question: "¿Qué relación hay entre el MCD y el mcm?",
        answer:
          "Para dos números, MCD × mcm es igual al producto de los números. Para 48 y 180: 12 × 720 = 8640 = 48 × 180. Este atajo no funciona con tres o más números.",
      },
      {
        question: "¿Cómo uso el mcm para sumar fracciones?",
        answer:
          "El mcm de los denominadores es el mínimo común denominador. Para 1/12 + 1/18, el mcm de 12 y 18 es 36, así que la suma se reescribe como 3/36 + 2/36 = 5/36.",
      },
    ],
    sourcesUsedFor: ["El algoritmo de Euclides para el máximo común divisor.", "La descomposición en factores primos y el mínimo común múltiplo."],
  },
  text: {
    numbers: "Números enteros",
    numbersHelp: "Introduce de 2 a 20 números enteros positivos, separados por punto y coma, espacios o saltos de línea.",
    errors: {
      empty: "Introduce al menos dos números.",
      tooMany: "Introduce como máximo {max} números.",
      notNumber: "«{token}» no es un número. Separa los valores con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    needTwo: "Introduce al menos dos números.",
    maxCount: "Introduce como máximo {max} números.",
    notWhole: "{value} no es un número entero. Introduce solo números enteros.",
    notPositive: "{value} no es positivo. Cada número debe ser al menos 1.",
    tooBig: "{value} es demasiado grande. Cada número puede ser como máximo {max}.",
    gcf: "Máximo común divisor (MCD)",
    gcfCaption: "También se llama máximo común factor (en inglés, GCD, GCF o HCF).",
    lcm: "Mínimo común múltiplo (mcm)",
    lcmDigits: "Cifras del mcm",
    coprime: "El MCD es 1, así que estos números no tienen más divisor común que el 1 (son primos entre sí).",
    factorTable: "Descomposición en factores primos",
    numberColumn: "Número",
    factorsColumn: "Factores primos",
    noPrimeFactors: "1 (sin factores primos)",
    isPrime: "{factors} (primo)",
  },
};

export default es;
