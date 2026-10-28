import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasswordEntropyText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const es: CalculatorTranslation<PasswordEntropyText> = {
  content: {
    title: "Calculadora de entropía de contraseñas",
    shortTitle: "Entropía de contraseñas",
    summary:
      "Estima la entropía en bits de una contraseña o frase de contraseña generada al azar y cuánto tardaría un atacante en adivinarla.",
    metaTitle: "Entropía de contraseñas – Bits y tiempo para descifrarla",
    metaDescription:
      "Calcula la entropía en bits de una contraseña aleatoria o una frase Diceware a partir de su longitud y su conjunto de caracteres, y el tiempo medio para adivinarla.",
    keywords: [
      "entropía de contraseña",
      "seguridad de contraseña",
      "entropía frase de contraseña",
      "diceware",
      "bits de entropía",
      "tiempo de fuerza bruta",
      "longitud de contraseña",
    ],
    intro: [
      "La entropía mide lo impredecible que es un secreto. Una contraseña elegida al azar entre N caracteres posibles gana log₂(N) bits por cada carácter, y cada bit adicional duplica el número de intentos que puede necesitar un atacante.",
      "Esta calculadora trabaja solo con la estructura de una contraseña: su longitud y los tipos de caracteres, o el número de palabras y el tamaño de la lista de palabras. Nunca pide, recibe ni analiza una contraseña real, así que no escribas la tuya en ningún lugar de esta página.",
    ],
    howToUse: [
      "Elige una contraseña de caracteres aleatorios o una frase de contraseña de palabras aleatorias.",
      "Para caracteres, introduce la longitud y elige los conjuntos de caracteres, o introduce un tamaño de conjunto personalizado.",
      "Para una frase de contraseña, introduce el número de palabras y el tamaño de la lista de palabras (7.776 para una lista Diceware).",
      "Si quieres, ajusta los intentos por segundo del atacante y consulta la entropía, el número de combinaciones y los tiempos para adivinarla.",
    ],
    formulas: [
      {
        title: "Entropía de una contraseña aleatoria",
        expression: "H = L × log₂(N)",
        explanation: "L es el número de caracteres y N el tamaño del conjunto, por ejemplo 26 + 26 + 10 + 32 = 94 con los cuatro conjuntos.",
      },
      {
        title: "Entropía de una frase de contraseña",
        expression: "H = W × log₂(K)",
        explanation: "W es el número de palabras y K el tamaño de la lista de palabras. Cada palabra Diceware añade log₂(7.776) ≈ 12,92 bits.",
      },
      {
        title: "Tiempo medio para adivinarla",
        expression: "t = 2ᴴ ÷ 2 ÷ g",
        explanation: "2ᴴ es el número de combinaciones y g los intentos por segundo. De media hay que probar la mitad.",
      },
    ],
    examples: [
      {
        title: "16 caracteres aleatorios de los cuatro conjuntos",
        steps: [
          "Conjunto = 26 + 26 + 10 + 32 = 94 caracteres",
          "Entropía = 16 × log₂(94) ≈ 16 × 6,5546 ≈ 104,87 bits",
          "Tiempo medio a 10¹⁰ intentos por segundo ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5,89 × 10¹³ años",
        ],
      },
      {
        title: "Frase de contraseña Diceware de seis palabras",
        steps: [
          "Entropía = 6 × log₂(7.776) ≈ 6 × 12,925 ≈ 77,55 bits",
          "Combinaciones = 7.776⁶ ≈ 2,21 × 10²³",
          "Tiempo medio ≈ 350.270 años a 10¹⁰ intentos por segundo",
        ],
      },
      {
        title: "8 letras minúsculas aleatorias",
        steps: ["Entropía = 8 × log₂(26) ≈ 37,60 bits", "Combinaciones = 26⁸ = 208.827.064.576", "Tiempo medio ≈ 208.827.064.576 ÷ 2 ÷ 10¹⁰ ≈ 10 segundos"],
      },
    ],
    assumptions: [
      "Cada carácter o palabra se elige de forma independiente y uniformemente al azar, como haría un gestor de contraseñas o unos dados. Las contraseñas que eligen las personas son mucho más predecibles de lo que sugieren estas cifras.",
      "La velocidad de ataque es una suposición que puedes cambiar. Las velocidades reales van desde unos pocos intentos por segundo contra un inicio de sesión en línea con límites de intentos hasta muchos miles de millones por segundo contra contraseñas robadas con un hash débil.",
      "La entropía no cubre otros riesgos, como el phishing, la reutilización de la misma contraseña en varios sitios o una contraseña que ya se ha filtrado.",
      "Es una estimación para comparar, no asesoramiento de seguridad ni una garantía, y no ha sido revisada por profesionales.",
    ],
    faqs: [
      {
        question: "¿Cuántos bits de entropía son suficientes?",
        answer:
          "No hay un umbral único, porque depende de cómo se almacena la contraseña y de quién podría atacarla. Como orientación aproximada, cada bit duplica el trabajo, así que una contraseña aleatoria de 16 caracteres o más, o una frase de seis o más palabras Diceware, queda muy lejos del alcance práctico de la fuerza bruta con la velocidad por defecto.",
      },
      {
        question: "¿Por qué esta página no me deja comprobar mi propia contraseña?",
        answer:
          "La entropía describe cómo se generó una contraseña, no los caracteres que acabó teniendo. Una contraseña como Summer2025! parece variada, pero es fácil de adivinar porque la gente la elige. Además, escribir una contraseña real en cualquier sitio web es un riesgo, así que esta página nunca pide ninguna.",
      },
      {
        question: "¿Es mejor una frase de contraseña larga que una contraseña corta y compleja?",
        answer:
          "A menudo, sí. Seis palabras aleatorias de una lista de 7.776 dan unos 77,5 bits, más que 12 caracteres aleatorios de letras y dígitos (unos 71,5 bits), y son más fáciles de recordar y escribir. Lo importante es que las palabras se elijan al azar, no como una frase con sentido.",
      },
    ],
    sourcesUsedFor: [
      "Las recomendaciones actuales de EE. UU. sobre contraseñas, que priorizan la longitud y el cotejo con contraseñas filtradas conocidas frente a las reglas de composición.",
      "El tamaño de lista de 7.776 palabras (6⁵, cinco tiradas de dado por palabra) usado por defecto para las frases de contraseña.",
    ],
  },
  text: {
    mode: "Tipo de contraseña",
    modes: { random: "Caracteres aleatorios", passphrase: "Palabras aleatorias (frase de contraseña)" },
    length: "Longitud (caracteres)",
    poolMode: "Conjunto de caracteres",
    poolModes: { sets: "Elegir conjuntos de caracteres", custom: "Tamaño de conjunto personalizado" },
    lower: "Letras minúsculas a–z (26)",
    upper: "Letras mayúsculas A–Z (26)",
    digits: "Dígitos 0–9 (10)",
    symbols: "Símbolos",
    yesNo: { yes: "Incluir", no: "Excluir" },
    symbolCount: "Número de símbolos posibles",
    symbolCountHelp:
      "32 abarca todos los símbolos ASCII imprimibles de un teclado estadounidense, como ! ? # y @. Usa un número menor si solo se permiten algunos símbolos.",
    customPool: "Tamaño del conjunto (caracteres posibles)",
    customPoolHelp: "Cuántos caracteres distintos puede tomar cada posición.",
    words: "Número de palabras",
    wordList: "Tamaño de la lista de palabras",
    wordListHelp: "7.776 es el tamaño de una lista de palabras Diceware, pensada para cinco tiradas de un dado de seis caras por palabra.",
    guessRate: "Intentos por segundo del atacante",
    guessRateHelp:
      "Una suposición sobre el atacante. 10¹⁰ (10.000 millones) por segundo corresponde a un ataque rápido sin conexión contra una contraseña con un hash débil; los ataques en línea son mucho más lentos.",
    errors: {
      noSets: "Incluye al menos un conjunto de caracteres.",
    },
    entropy: "Entropía",
    bits: "bits",
    captionRandom: "{length} elegidos al azar de un conjunto de {pool} caracteres.",
    captionPassphrase: "{words} elegidas al azar de una lista de {list} palabras.",
    lengthCount: forms("{n} carácter", "{n} caracteres"),
    wordCount: forms("{n} palabra", "{n} palabras"),
    combinations: "Combinaciones posibles",
    poolSize: "Tamaño del conjunto por posición",
    bitsPerItem: "Entropía por carácter o palabra",
    averageTime: "Tiempo medio para adivinarla",
    worstTime: "Tiempo para probar todas las combinaciones",
    duration: {
      lessThanSecond: "Menos de 1 segundo",
      seconds: forms("{n} segundo", "{n} segundos"),
      minutes: forms("{n} minuto", "{n} minutos"),
      hours: forms("{n} hora", "{n} horas"),
      days: forms("{n} día", "{n} días"),
      years: forms("{n} año", "{n} años"),
    },
    notes: {
      random:
        "Estas cifras solo son válidas si cada carácter o palabra se elige de forma realmente aleatoria, por ejemplo con un gestor de contraseñas o con dados. Las contraseñas inventadas por personas, los nombres, las fechas y las sustituciones habituales tienen mucha menos entropía.",
      average: "De media, un atacante encuentra la contraseña tras probar la mitad de las combinaciones.",
      notCollected: "Esta página nunca pide tu contraseña. Solo trabaja con la longitud y los tipos de caracteres o palabras.",
      zero: "Con una sola opción posible por posición no hay incertidumbre, así que la entropía es de 0 bits.",
    },
  },
};

export default es;
