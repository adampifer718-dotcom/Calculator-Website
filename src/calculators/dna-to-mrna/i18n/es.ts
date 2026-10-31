import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaToMrnaText } from "../text/en";

const es: CalculatorTranslation<DnaToMrnaText> = {
  content: {
    title: "Traductor de ADN a ARNm y proteína",
    shortTitle: "ADN a ARNm",
    summary:
      "Transcribe una secuencia de ADN a ARNm y tradúcela a proteína con el código genético estándar, con la cadena complementaria y el contenido en GC.",
    metaTitle: "Traductor de ADN a ARNm – Transcripción y traducción",
    metaDescription:
      "Convierte una cadena de ADN codificante o molde en ARNm y luego en proteína, con códigos de una y tres letras según el código genético estándar y el contenido en GC.",
    keywords: [
      "adn a arnm",
      "transcripción",
      "traducción de proteínas",
      "codón",
      "código genético",
      "complemento inverso",
      "secuencia de aminoácidos",
      "contenido en gc",
    ],
    intro: [
      "Un gen se copia en ARN mensajero (transcripción) y el ARNm se lee de tres en tres bases para formar una proteína (traducción). Esta herramienta hace los dos pasos con la secuencia de ADN que pegues, usando el código genético estándar que comparten la mayoría de los organismos.",
      "El ARNm tiene la misma secuencia que la cadena codificante (con sentido), con uracilo (U) en lugar de timina (T). Si lo que tienes es la cadena molde (antisentido), el ARNm es su complemento inverso. También obtienes la cadena de ADN complementaria, la proteína en código de una y de tres letras, el número de codones y el contenido en GC.",
    ],
    howToUse: [
      "Pega la secuencia de ADN. Sirven mayúsculas y minúsculas, y se omiten los espacios, los saltos de línea y los números de posición de un archivo de secuencia.",
      "Indica si la secuencia es la cadena codificante o la cadena molde. Ambas se leen 5′→3′, como se escriben normalmente las secuencias.",
      "Elige dónde empieza la traducción: en la primera base o en el primer codón de inicio AUG del ARNm.",
      "Elige si la traducción se detiene en el primer codón de parada o si continúa y marca cada parada con *.",
    ],
    formulas: [
      {
        title: "Transcripción (cadena codificante)",
        expression: "ARNm = cadena codificante con T → U",
        explanation:
          "El ARNm se sintetiza frente a la cadena molde, así que coincide base a base con la cadena codificante, salvo que el ARN usa U en lugar de T.",
      },
      {
        title: "Transcripción (cadena molde)",
        expression: "ARNm = complemento inverso de la cadena molde, con T → U",
        explanation: "Cada base se empareja (A–U, T–A, C–G, G–C) y el resultado se invierte para que se lea 5′→3′.",
      },
      {
        title: "Traducción",
        expression: "codón (3 bases) → aminoácido, desde el inicio hasta el primer UAA, UAG o UGA",
        explanation:
          "Los codones se buscan en el código genético estándar (tabla de traducción 1 del NCBI). AUG codifica la metionina y es el codón de inicio habitual.",
      },
      {
        title: "Contenido en GC",
        expression: "GC % = (G + C) ÷ total de bases × 100",
        explanation: "La proporción de bases del ADN que son guanina o citosina. Es la misma en las dos cadenas.",
      },
    ],
    examples: [
      {
        title: "Una cadena codificante traducida desde el primer AUG",
        steps: [
          "Sustituye T por U: GCAUGCCGUGGAAAUAGC.",
          "El primer AUG empieza en la base 3, así que el marco de lectura es AUG CCG UGG AAA UAG y sobra una base (C).",
          "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = parada.",
          "Proteína: MPWK (Met-Pro-Trp-Lys).",
        ],
      },
      {
        title: "Una cadena molde",
        steps: [
          "Complemento inverso de TCACTTAGCCAT: ATGGCTAAGTGA.",
          "Sustituye T por U: AUG GCU AAG UGA.",
          "AUG = Met, GCU = Ala, AAG = Lys, UGA = parada, lo que da MAK.",
        ],
      },
      {
        title: "Lectura a través de los codones de parada",
        steps: [
          "En mayúsculas, sin espacios y con T → U: AUG UAA CAG UGG UAG.",
          "AUG = Met, UAA = parada, CAG = Gln, UGG = Trp, UAG = parada.",
          "Con la lectura continua, la proteína se muestra como M*QW*.",
        ],
      },
    ],
    assumptions: [
      "Se usa el código genético estándar (tabla de traducción 1 del NCBI). Las mitocondrias y algunos microorganismos usan otros códigos, en los que algunos codones significan algo distinto.",
      "La secuencia se trata como una única región codificante continua. No se modelan los intrones, el corte y empalme, la edición del ARN ni otros procesamientos de los genes reales.",
      "Cuando empiezas en el primer AUG, solo se usa AUG como codón de inicio; se ignoran los codones de inicio alternativos, que son poco frecuentes.",
      "Las dos cadenas se introducen y se muestran 5′→3′. La cadena complementaria se muestra como complemento inverso, de modo que también se lee 5′→3′.",
    ],
    faqs: [
      {
        question: "¿Qué cadena debo elegir?",
        answer:
          "La mayoría de las bases de datos recogen la cadena codificante (con sentido), cuya secuencia coincide con la del ARNm salvo por U en lugar de T. Elige la cadena molde (antisentido) solo si tu secuencia es la que lee la ARN polimerasa, la cadena complementaria al ARNm.",
      },
      {
        question: "¿Por qué la proteína termina antes de lo esperado?",
        answer:
          "La traducción termina en el primer codón de parada (UAA, UAG o UGA) del marco de lectura. Si esperabas una proteína más larga, comprueba que has elegido la cadena y el punto de inicio correctos, o activa la lectura continua para ver dónde están las paradas.",
      },
      {
        question: "¿Qué son las bases que sobran al final?",
        answer:
          "Los codones tienen tres bases. Si el número de bases después del inicio no es múltiplo de tres, las una o dos últimas bases no pueden formar un codón y no se traducen.",
      },
    ],
    sourcesUsedFor: [
      "La tabla de codones: qué aminoácido codifica cada uno de los 64 codones, y los codones de parada UAA, UAG y UGA.",
      "La transcripción a partir de la cadena molde, la correspondencia del ARNm con la cadena codificante con U en lugar de T, y la lectura de codones desde un codón de inicio hasta un codón de parada.",
    ],
  },
  text: {
    sequence: "Secuencia de ADN",
    sequenceHelp: "Letras A, C, G y T, en mayúsculas o minúsculas. Se ignoran los espacios, los saltos de línea y los números de posición.",
    strand: "La secuencia es la…",
    strands: {
      coding: "Cadena codificante (con sentido), 5′→3′",
      template: "Cadena molde (antisentido), 5′→3′",
    },
    frame: "Empezar a traducir en",
    frames: {
      first: "La primera base",
      aug: "El primer AUG (codón de inicio)",
    },
    stops: "En un codón de parada",
    stopModes: {
      stop: "Dejar de traducir",
      readThrough: "Continuar y marcarlo con *",
    },
    errors: {
      invalidChar: "«{char}» (carácter {position}) no es una base de ADN. Usa solo A, C, G y T.",
      empty: "Introduce al menos una base (A, C, G o T).",
      tooLong: "Introduce como máximo {max} bases.",
      noAug: "El ARNm no contiene ningún codón de inicio AUG. Elige «La primera base» para traducirlo de todos modos.",
    },
    result: "ARNm (5′→3′)",
    caption: "Agrupado en codones desde el inicio del marco de lectura.",
    complement: "Cadena de ADN complementaria (5′→3′)",
    proteinOne: "Proteína (código de una letra)",
    proteinThree: "Proteína (código de tres letras)",
    noProtein: "(no se ha traducido ningún codón completo)",
    length: "Longitud del ARNm",
    bases: "bases",
    codonsInFrame: "Codones completos en el marco de lectura",
    codonsTranslated: "Codones traducidos",
    aminoAcids: "Aminoácidos de la proteína",
    gc: "Contenido en GC",
    notes: {
      stopped: "La traducción se detuvo en el codón {codon} ({stop}), un codón de parada. La proteína de arriba termina antes de él.",
      noStop: "No se ha llegado a ningún codón de parada antes del final de la secuencia, así que la proteína puede estar incompleta.",
      readThrough: "Los codones de parada se han leído de forma continua y se muestran como * (Ter en el código de tres letras).",
      augStart: "El primer AUG empieza en la base {position} del ARNm. Las bases anteriores no se traducen.",
      leftover: {
        zero: "{n} bases al final no forman un codón completo y no se traducen.",
        one: "{n} base al final no forma un codón completo y no se traduce.",
        two: "{n} bases al final no forman un codón completo y no se traducen.",
        few: "{n} bases al final no forman un codón completo y no se traducen.",
        many: "{n} bases al final no forman un codón completo y no se traducen.",
        other: "{n} bases al final no forman un codón completo y no se traducen.",
      },
      template: "El ARNm es el complemento inverso de la cadena molde que has introducido, con U en lugar de T.",
      general:
        "Se usa el código genético estándar (tabla 1 del NCBI) y se ignoran los intrones, el corte y empalme y los codones de inicio alternativos. Los genes reales pueden necesitar otro código o procesamiento.",
    },
  },
};

export default es;
