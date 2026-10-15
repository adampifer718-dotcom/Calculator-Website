import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { IdealGasLawText } from "../text/en";

const es: CalculatorTranslation<IdealGasLawText> = {
  content: {
    title: "Calculadora de la ley de los gases ideales",
    shortTitle: "Ley de los gases ideales",
    summary: "Resuelve PV = nRT para la presión, el volumen, los moles o la temperatura, con conversión de unidades incluida.",
    metaTitle: "Calculadora de la ley de los gases ideales – Resuelve PV = nRT",
    metaDescription:
      "Resuelve PV = nRT para la presión, el volumen, la cantidad de gas o la temperatura. Combina Pa, kPa, bar, atm, mmHg, litros, m³, kelvin, °C y °F.",
    keywords: ["ley de los gases ideales", "pv=nrt", "constante de los gases", "presión", "moles", "kelvin", "leyes de los gases", "química"],
    intro: [
      "La ley de los gases ideales relaciona cuatro propiedades de un gas: la presión, el volumen, la cantidad en moles y la temperatura absoluta. Si conoces tres, puedes hallar la cuarta.",
      "Elige el valor que quieres calcular e introduce los otros tres en las unidades que tengas. La calculadora lo convierte todo a unidades del SI, resuelve PV = nRT y vuelve a convertir el resultado.",
    ],
    howToUse: [
      "Elige qué quieres calcular: presión, volumen, cantidad o temperatura.",
      "Introduce los tres valores conocidos y elige una unidad para cada uno.",
      "Selecciona la unidad del resultado en la lista de unidades correspondiente.",
      "Consulta el resultado, el mismo valor en otras unidades y el volumen molar.",
    ],
    formulas: [
      { title: "Ley de los gases ideales", expression: "P × V = n × R × T", explanation: "P en pascales, V en metros cúbicos, n en moles y T en kelvin." },
      {
        title: "Constante de los gases",
        expression: "R = Nₐ × k = 8,31446261815324 J/(mol·K)",
        explanation: "Es exacta desde la redefinición del SI de 2019, porque Nₐ y k tienen valores fijos.",
      },
      {
        title: "Kelvin",
        expression: "T(K) = T(°C) + 273,15 = (T(°F) − 32) × 5/9 + 273,15",
        explanation: "La ley necesita la temperatura absoluta, así que primero se convierten los grados Celsius y Fahrenheit.",
      },
    ],
    examples: [
      {
        title: "Presión de 2 mol en un depósito de 50 L a 25 °C",
        steps: ["T = 25 + 273,15 = 298,15 K y V = 0,05 m³", "P = 2 × 8,314463 × 298,15 ÷ 0,05 ≈ 99.158 Pa", "≈ 99,158 kPa"],
      },
      {
        title: "Volumen de 1 mol a 0 °C y 1 atm",
        steps: ["T = 273,15 K y P = 101.325 Pa", "V = 1 × 8,314463 × 273,15 ÷ 101.325 ≈ 0,022414 m³", "≈ 22,414 L"],
      },
      {
        title: "Temperatura de 0,5 mol en 10 L a 200 kPa",
        steps: ["T = 200.000 × 0,01 ÷ (0,5 × 8,314463) ≈ 481,09 K", "481,09 − 273,15 ≈ 207,94 °C"],
      },
    ],
    assumptions: [
      "El gas se trata como ideal: sus moléculas no ocupan espacio y no se atraen entre sí.",
      "Los gases reales se desvían de forma apreciable a alta presión, a baja temperatura y cerca del punto en que se condensan. En esos casos, usa una ecuación de estado como la de van der Waals.",
      "La presión es absoluta, no manométrica. Suma primero la presión atmosférica a la lectura del manómetro.",
    ],
    faqs: [
      {
        question: "¿Por qué la temperatura tiene que estar en kelvin?",
        answer: "La ley es proporcional a la temperatura absoluta. A 0 °C un gas sigue teniendo mucha energía térmica, así que los valores en Celsius o Fahrenheit darían resultados erróneos. La calculadora los convierte por ti.",
      },
      {
        question: "¿Qué valor de R debo usar?",
        answer: "En unidades del SI, R = 8,314462618 J/(mol·K). Con litros y atmósferas es de aproximadamente 0,082057 L·atm/(mol·K). Esta herramienta trabaja siempre internamente en el SI, así que no tienes que elegir.",
      },
      {
        question: "¿Qué es el volumen molar de un gas?",
        answer: "Es el volumen que ocupa un mol. Para un gas ideal a 0 °C y 1 atm es de unos 22,414 L; a 25 °C y 1 bar, de unos 24,79 L.",
      },
    ],
    sourcesUsedFor: [
      "Valor exacto de la constante molar de los gases R = Nₐk = 8,314462618… J/(mol·K) y de la constante de Avogadro.",
      "La ley de los gases ideales y su falta de validez a baja temperatura y alta presión.",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { P: "Presión (P)", V: "Volumen (V)", n: "Cantidad (n)", T: "Temperatura (T)" },
    pressure: "Presión (P)",
    pressureUnit: "Unidad de presión",
    pressureUnits: {
      Pa: "Pascales (Pa)",
      kPa: "Kilopascales (kPa)",
      bar: "Bares (bar)",
      atm: "Atmósferas estándar (atm)",
      mmHg: "Milímetros de mercurio (mmHg)",
    },
    volume: "Volumen (V)",
    volumeUnit: "Unidad de volumen",
    volumeUnits: { L: "Litros (L)", mL: "Mililitros (mL)", m3: "Metros cúbicos (m³)" },
    moles: "Cantidad de gas (n)",
    temperature: "Temperatura (T)",
    temperatureUnit: "Unidad de temperatura",
    temperatureUnits: { K: "Kelvin (K)", C: "Grados Celsius (°C)", F: "Grados Fahrenheit (°F)" },
    unitHelp: "Para el valor que calculas, es la unidad del resultado.",
    belowAbsoluteZero: "La temperatura debe estar por encima del cero absoluto (0 K = −273,15 °C = −459,67 °F).",
    results: { P: "Presión", V: "Volumen", n: "Cantidad de gas", T: "Temperatura" },
    inUnit: "En {unit}",
    molecules: "Número de moléculas (n × Nₐ)",
    molarVolume: "Volumen molar (V ÷ n)",
    note: "Usa R = 8,31446261815324 J/(mol·K). Los gases reales se apartan de este modelo ideal a alta presión y a baja temperatura, sobre todo cerca de la condensación.",
  },
};

export default es;
