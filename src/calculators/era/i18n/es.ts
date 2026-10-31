import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { EraText } from "../text/en";

const es: CalculatorTranslation<EraText> = {
  content: {
    title: "Calculadora de ERA de béisbol",
    shortTitle: "ERA",
    summary:
      "Calcula el promedio de carreras limpias (ERA) de un lanzador a partir de las carreras limpias y las entradas lanzadas, con WHIP, K/9 y BB/9, para béisbol de 9 entradas o partidos de 7 entradas.",
    metaTitle: "Calculadora de ERA – Carreras limpias, WHIP y K/9",
    metaDescription:
      "Calcula la ERA de un lanzador con las carreras limpias y las entradas más outs, con WHIP, K/9 y BB/9, para partidos de 9 o de 7 entradas.",
    keywords: [
      "calculadora ERA",
      "promedio de carreras limpias",
      "efectividad del lanzador",
      "ERA béisbol",
      "ERA sóftbol",
      "WHIP",
      "K/9",
      "entradas lanzadas",
    ],
    intro: [
      "El promedio de carreras limpias (ERA) es el número de carreras limpias que permite un lanzador por partido completo. Escala las carreras permitidas a la duración de un partido estándar, de modo que se pueden comparar abridores y relevistas con cargas de trabajo muy distintas.",
      "Introduce las carreras limpias y las entradas lanzadas para obtener la ERA. Las entradas se introducen como entradas completas más outs adicionales, porque cada out es un tercio de entrada. Añade hits, bases por bolas y ponches para ver también el WHIP, el K/9 y el BB/9. Elige 7 entradas para sóftbol y muchas ligas juveniles.",
    ],
    howToUse: [
      "Introduce las carreras limpias permitidas.",
      "Introduce las entradas completas lanzadas y elige 0, 1 o 2 outs adicionales. El 5.1 de una hoja de anotación significa 5 entradas y 1 out.",
      "Elige 9 entradas por partido para béisbol o 7 para sóftbol y muchas ligas juveniles.",
      "Si quieres, introduce hits, bases por bolas y ponches, y consulta la ERA y las demás tasas.",
    ],
    formulas: [
      {
        title: "Entradas lanzadas",
        expression: "IP = entradas completas + outs adicionales ÷ 3",
        explanation: "Cada out es un tercio de entrada, así que 6.2 en la notación de la hoja de anotación son 6⅔ = 6,667 entradas.",
      },
      {
        title: "Promedio de carreras limpias",
        expression: "ERA = carreras limpias × entradas por partido ÷ IP",
        explanation: "Las entradas por partido son 9 en béisbol; se usan 7 en sóftbol y en muchas ligas juveniles.",
      },
      {
        title: "WHIP",
        expression: "WHIP = (bases por bolas + hits) ÷ IP",
        explanation: "Corredores permitidos por entrada mediante hits y bases por bolas.",
      },
      {
        title: "Tasas por nueve entradas",
        expression: "K/9 = ponches × 9 ÷ IP\nBB/9 = bases por bolas × 9 ÷ IP",
        explanation: "Ponches y bases por bolas por cada nueve entradas.",
      },
    ],
    examples: [
      {
        title: "3 carreras limpias en 6⅔ entradas",
        steps: ["IP = 6 + 2 ÷ 3 = 6,667", "ERA = 3 × 9 ÷ 6,667 = 4,05", "WHIP = (2 + 7) ÷ 6,667 = 1,35; K/9 = 8 × 9 ÷ 6,667 = 10,8"],
      },
      {
        title: "Una temporada: 61 carreras limpias en 187⅓ entradas",
        steps: ["IP = 187 + 1 ÷ 3 = 187,333", "ERA = 61 × 9 ÷ 187,333 ≈ 2,93", "WHIP = (45 + 158) ÷ 187,333 ≈ 1,08; K/9 ≈ 9,66; BB/9 ≈ 2,16"],
      },
      {
        title: "Sóftbol: 4 carreras limpias en un partido completo de 7 entradas",
        steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4,00", "WHIP = (3 + 5) ÷ 7 ≈ 1,14"],
      },
    ],
    assumptions: [
      "Las carreras limpias son las que haya registrado el anotador oficial. Las carreras que se anotan por un error o una bola pasada no son limpias y no deben incluirse.",
      "Las entradas se introducen como entradas completas más outs, y no como un decimal como 6.2, porque en las hojas de anotación la cifra tras el punto cuenta outs, no décimas.",
      "La ERA depende de la defensa que tiene detrás el lanzador, del estadio y de la liga, así que, cuando puedas, compara lanzadores de la misma liga y temporada.",
      "El K/9 y el BB/9 usan siempre 9 entradas, como es habitual, aunque se elijan 7 entradas por partido para la ERA.",
    ],
    faqs: [
      {
        question: "¿Qué significa 6.2 entradas lanzadas?",
        answer:
          "Significa 6 entradas y 2 outs, o 6⅔ entradas, no 6,2 como decimal. Cada out es un tercio de entrada, así que la cifra tras el punto solo puede ser 0, 1 o 2. Aquí introduce 6 entradas y 2 outs adicionales.",
      },
      {
        question: "¿Qué es una buena ERA?",
        answer:
          "Depende de la liga y de la época. En las temporadas recientes de las Grandes Ligas, la media de la liga ha rondado 4,00, y una ERA inferior a 3,00 en una temporada completa se suele considerar excelente.",
      },
      {
        question: "¿Por qué el sóftbol usa 7 entradas?",
        answer:
          "Los partidos de sóftbol, y muchos partidos de béisbol de instituto y juveniles, se programan a siete entradas, así que la ERA se escala a un partido de siete entradas para mostrar las carreras permitidas por partido completo en ese formato.",
      },
    ],
    sourcesUsedFor: [
      "La definición de carrera limpia y ERA = 9 × carreras limpias ÷ entradas lanzadas.",
      "WHIP = (bases por bolas + hits) ÷ entradas lanzadas, sin contar los bateadores golpeados ni los errores.",
    ],
  },
  text: {
    earnedRuns: "Carreras limpias permitidas",
    earnedRunsHelp: "Carreras anotadas sin la ayuda de un error o una bola pasada, según decida el anotador oficial.",
    innings: "Entradas lanzadas (entradas completas)",
    inningsHelp:
      "Introduce aquí las entradas completas y los outs adicionales en el campo siguiente. 6⅔ entradas, que en las hojas de anotación se escriben 6.2, son 6 entradas y 2 outs.",
    outs: "Outs adicionales",
    outsOptions: { "0": "0 outs", "1": "1 out (⅓ de entrada)", "2": "2 outs (⅔ de entrada)" },
    gameLength: "Entradas por partido",
    gameLengthHelp: "Usa 9 para el béisbol profesional y la mayoría del universitario, y 7 para sóftbol y muchas ligas de instituto y juveniles.",
    gameLengths: { "9": "9 entradas (béisbol)", "7": "7 entradas (sóftbol, muchas ligas juveniles)" },
    hits: "Hits permitidos (opcional)",
    walks: "Bases por bolas permitidas (opcional)",
    walksHelp: "Bases por bolas. Los bateadores golpeados no se cuentan en el WHIP.",
    strikeouts: "Ponches (opcional)",
    errors: {
      noInnings: "Introduce al menos un out lanzado.",
    },
    era: "Promedio de carreras limpias (ERA)",
    caption: "{er} carreras limpias × {length} ÷ {ip} entradas lanzadas ({notation} en notación de hoja de anotación).",
    notation: "{whole}.{outs}",
    inningsNotation: "Entradas lanzadas (notación de béisbol)",
    inningsDecimal: "Entradas lanzadas en decimal",
    totalOuts: "Outs registrados",
    whip: "WHIP (bases por bolas + hits por entrada)",
    k9: "Ponches por 9 entradas (K/9)",
    bb9: "Bases por bolas por 9 entradas (BB/9)",
    kbb: "Relación ponches/bases por bolas",
    notes: {
      notation: "En las hojas de anotación, la cifra tras el punto cuenta outs, no décimas: 6.1 significa 6⅓ entradas y 6.2 significa 6⅔ entradas.",
      whip: "Introduce los hits y las bases por bolas para ver el WHIP.",
      perNine: "El K/9 y el BB/9 son siempre por 9 entradas, sea cual sea la duración del partido.",
    },
  },
};

export default es;
