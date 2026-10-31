import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VoltageDividerText } from "../text/en";

const es: CalculatorTranslation<VoltageDividerText> = {
  content: {
    title: "Calculadora de divisor de tensión",
    shortTitle: "Divisor de tensión",
    summary:
      "Calcula la tensión de salida de un divisor de dos resistencias, o la resistencia necesaria para una tensión objetivo, con la corriente, la potencia, el efecto de la carga y el valor E24 más cercano.",
    metaTitle: "Calculadora de divisor de tensión – Vout, R1, R2 y carga",
    metaDescription:
      "Calcula la tensión de salida de un divisor resistivo o despeja R1 o R2, con la corriente, la potencia de cada resistencia, la salida con carga y el valor E24.",
    keywords: [
      "divisor de tensión",
      "divisor de voltaje",
      "divisor resistivo",
      "fórmula vout",
      "calcular r1 r2",
      "relación de división",
      "divisor de tensión con carga",
      "resistencias serie E24",
    ],
    intro: [
      "Un divisor de tensión son dos resistencias en serie conectadas a una tensión. El punto entre ellas queda a una fracción fija de la tensión de entrada, que depende solo de la relación entre las resistencias. Los divisores se usan para reducir una señal a la entrada de un microcontrolador, fijar un punto de polarización o crear una referencia.",
      "Esta calculadora obtiene la tensión de salida a partir de las dos resistencias, o la resistencia que necesitas para una salida objetivo. También muestra la corriente por el divisor, la potencia que disipa cada resistencia, lo que ocurre al conectar una carga y el valor normalizado E24 más cercano.",
    ],
    howToUse: [
      "Elige qué quieres calcular: la tensión de salida, la resistencia inferior R2 o la resistencia superior R1.",
      "Introduce la tensión de entrada y los valores conocidos, eligiendo Ω, kΩ o MΩ para cada resistencia.",
      "Si quieres, introduce la resistencia de carga conectada a la salida para ver cuánto hace bajar la tensión.",
      "Consulta el resultado, la corriente y la potencia del divisor y, si calculas una resistencia, el valor E24 más cercano y la salida que daría.",
    ],
    formulas: [
      {
        title: "Salida sin carga",
        expression: "Vout = Vin × R2 ÷ (R1 + R2)",
        explanation: "R1 es la resistencia superior (de la entrada a la salida) y R2 la inferior (de la salida a masa).",
      },
      {
        title: "Cálculo de una resistencia",
        expression: "R2 = R1 × Vout ÷ (Vin − Vout)\no bien R1 = R2 × (Vin − Vout) ÷ Vout",
        explanation: "Despejadas de la ecuación del divisor. Vout debe estar entre 0 y Vin.",
      },
      {
        title: "Corriente y potencia",
        expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2",
        explanation: "Por las dos resistencias circula la misma corriente cuando no hay nada conectado a la salida.",
      },
      {
        title: "Salida con carga",
        expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,carga = Vin × R2′ ÷ (R1 + R2′)",
        explanation: "Una carga RL queda en paralelo con R2, lo que reduce la resistencia inferior efectiva y, por tanto, la salida.",
      },
    ],
    examples: [
      {
        title: "12 V sobre 10 kΩ y 4,7 kΩ",
        steps: ["Vout = 12 × 4,7 ÷ (10 + 4,7) = 56,4 ÷ 14,7", "Vout ≈ 3,8367 V", "I = 12 V ÷ 14,7 kΩ ≈ 0,8163 mA"],
      },
      {
        title: "R2 para obtener 3,3 V a partir de 5 V con R1 = 10 kΩ",
        steps: [
          "R2 = 10 kΩ × 3,3 ÷ (5 − 3,3) = 33 ÷ 1,7 kΩ",
          "R2 ≈ 19,4118 kΩ",
          "El valor E24 más cercano es 20 kΩ, que da 5 × 20 ÷ 30 ≈ 3,3333 V (un 1,01 % más)",
        ],
      },
      {
        title: "R1 para obtener 2,5 V a partir de 9 V con R2 = 1 kΩ y una carga de 10 kΩ",
        steps: [
          "R1 = 1 kΩ × (9 − 2,5) ÷ 2,5 = 2,6 kΩ",
          "Con la carga, R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0,9091 kΩ",
          "Vout con carga = 9 × 0,9091 ÷ (2,6 + 0,9091) ≈ 2,3316 V, aproximadamente un 6,74 % menos",
        ],
      },
    ],
    assumptions: [
      "Las resistencias son ideales y exactas. Las resistencias reales tienen una tolerancia (5 % en las piezas E24), así que la salida real puede diferir del valor calculado.",
      "Sin resistencia de carga, el divisor se considera sin carga. Cualquier cosa conectada a la salida, incluido un voltímetro, consume corriente y reduce la tensión; mantener la carga al menos 10 veces por encima de la resistencia de salida del divisor mantiene el error pequeño.",
      "Un divisor sin carga no es una fuente de alimentación. Su salida cae con la carga y consume corriente todo el tiempo, así que usa un regulador de tensión para alimentar un circuito.",
      "La entrada es una tensión continua estable. No se modelan efectos de frecuencia como las capacidades parásitas.",
    ],
    faqs: [
      {
        question: "¿Qué resistencia es R1 y cuál es R2?",
        answer:
          "R1 une la entrada con el punto de salida y R2 une el punto de salida con masa. La salida se toma en R2, así que una R2 mayor da una salida más alta.",
      },
      {
        question: "¿Por qué la tensión que mido es menor que la calculada?",
        answer:
          "Lo que esté conectado a la salida actúa como una resistencia en paralelo con R2, lo que reduce la salida. Introduce su resistencia como carga para ver el efecto, o usa resistencias más pequeñas en el divisor para que la carga influya menos.",
      },
      {
        question: "¿Cómo elijo el tamaño de las resistencias?",
        answer:
          "La relación fija la tensión y el tamaño fija la corriente. Las resistencias pequeñas desperdician más potencia pero soportan mejor la carga; las grandes ahorran potencia pero son sensibles a la carga y a las fugas de la entrada. Compara las cifras de potencia con la potencia nominal de las resistencias.",
      },
    ],
    sourcesUsedFor: [
      "La relación del divisor de tensión Vout = Vin × R2 ÷ (R1 + R2) y cómo una resistencia de carga reduce la salida.",
      "La serie E24 de 24 valores preferentes de resistencia por década usada para el valor normalizado más cercano.",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { vout: "Tensión de salida (Vout)", r2: "Resistencia inferior (R2)", r1: "Resistencia superior (R1)" },
    vin: "Tensión de entrada (Vin)",
    vout: "Tensión de salida deseada (Vout)",
    r1: "Resistencia superior (R1)",
    r1Help: "La resistencia entre la entrada y el nodo de salida.",
    r2: "Resistencia inferior (R2)",
    r2Help: "La resistencia entre el nodo de salida y masa.",
    load: "Resistencia de carga (RL, opcional)",
    loadHelp:
      "La resistencia de lo que esté conectado a la salida. Queda en paralelo con R2 y hace bajar la salida. Déjala vacía para un divisor sin carga.",
    unit: "Unidad",
    units: { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" },
    errors: {
      voutRange: "La tensión de salida debe ser mayor que 0 y menor que la tensión de entrada.",
    },
    voutResult: "Tensión de salida (sin carga)",
    r2Result: "Resistencia inferior R2",
    r1Result: "Resistencia superior R1",
    captionVout: "{vin} sobre R1 = {r1} y R2 = {r2}.",
    captionR: "Da {vout} a partir de {vin} con {known}.",
    knownR1: "R1 = {r}",
    knownR2: "R2 = {r}",
    ratio: "Relación de división (Vout ÷ Vin)",
    current: "Corriente del divisor (sin carga)",
    p1: "Potencia en R1",
    p2: "Potencia en R2",
    rTotal: "Resistencia total (R1 + R2)",
    rOut: "Resistencia de salida (R1 ∥ R2)",
    vLoaded: "Tensión de salida con la carga",
    drop: "Caída causada por la carga",
    loadCurrent: "Corriente por la carga",
    e24: "Valor E24 más cercano",
    e24Vout: "Tensión de salida con el valor E24",
    e24Error: "Variación de la salida con el valor E24",
    notes: {
      unloaded:
        "Estas cifras corresponden a un divisor sin carga. Cualquier cosa conectada a la salida consume corriente y reduce Vout; introduce una resistencia de carga para ver cuánto.",
      loaded: "Con la carga, R2 y RL en paralelo equivalen a {r} y la salida cae {drop}.",
      heavyLoad:
        "La carga es menor que 10 veces la resistencia de salida del divisor, así que modifica la salida de forma apreciable. Usa resistencias más pequeñas en el divisor o un búfer si la tensión debe mantenerse.",
      supply:
        "Un divisor de tensión no es una fuente de alimentación: su salida cambia con la carga y desperdicia potencia continuamente. Usa un regulador para alimentar un circuito.",
      e24: "E24 es la serie normalizada de 24 valores preferentes por década con una tolerancia del 5 %. El valor más cercano se elige por la menor diferencia absoluta.",
    },
  },
};

export default es;
