import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PunnettText } from "../text/en";

const es: CalculatorTranslation<PunnettText> = {
  content: {
    title: "Calculadora de cuadro de Punnett",
    shortTitle: "Cuadro de Punnett",
    summary:
      "Cruza dos progenitores para uno o dos genes y obtén el cuadro de Punnett, las proporciones genotípicas y fenotípicas y la probabilidad de cada carácter.",
    metaTitle: "Cuadro de Punnett – Proporciones genotípicas y fenotípicas",
    metaDescription:
      "Introduce dos genotipos parentales, como AaBb × AaBb, para construir el cuadro de Punnett con las proporciones genotípicas y fenotípicas y sus probabilidades.",
    keywords: [
      "cuadro de Punnett",
      "cruce monohíbrido",
      "cruce dihíbrido",
      "proporción genotípica",
      "proporción fenotípica",
      "genética mendeliana",
      "9:3:3:1",
      "cruzamiento prueba",
    ],
    intro: [
      "Un cuadro de Punnett coloca en un lado todos los gametos que puede producir un progenitor y en el otro todos los gametos del otro progenitor. Cada casilla de la cuadrícula es una combinación igual de probable, así que contar casillas da la proporción esperada de cada genotipo en la descendencia.",
      "Esta calculadora trabaja con un gen (un cruce monohíbrido como Aa × aa) o con dos genes (un cruce dihíbrido como AaBb × AaBb). Dibuja la cuadrícula y la convierte en proporciones genotípicas, proporciones fenotípicas y la probabilidad de cada combinación de caracteres.",
    ],
    howToUse: [
      "Elige una letra para cada gen. Escribe el alelo dominante en mayúscula y el recesivo en minúscula.",
      "Escribe el genotipo del progenitor 1, por ejemplo Aa para un gen o AaBb para dos genes.",
      "Escribe el genotipo del progenitor 2 con las mismas letras, por ejemplo aa o Aabb.",
      "Consulta la proporción fenotípica y revisa la cuadrícula y las tablas con cada genotipo y su probabilidad.",
    ],
    formulas: [
      {
        title: "Gametos",
        expression: "gametos por progenitor = 2ⁿ para n genes",
        explanation: "Cada gameto lleva un alelo de cada gen. Con dos genes, un progenitor como AaBb produce AB, Ab, aB y ab en proporciones iguales.",
      },
      {
        title: "Probabilidad de un genotipo",
        expression: "P = casillas con ese genotipo ÷ total de casillas",
        explanation: "Un cruce de un gen tiene 4 casillas y uno de dos genes tiene 16, todas igual de probables.",
      },
      {
        title: "Regla del producto",
        expression: "P(A_ y B_) = P(A_) × P(B_)",
        explanation: "Con la segregación independiente, los genes se comportan por separado. En AaBb × AaBb, 3/4 × 3/4 = 9/16 de la descendencia muestra ambos caracteres dominantes.",
      },
    ],
    examples: [
      {
        title: "Dos progenitores heterocigotos, un gen",
        steps: [
          "Cada progenitor produce gametos A y a en igual número.",
          "La cuadrícula da AA, Aa, Aa y aa: una proporción genotípica de 1 : 2 : 1.",
          "AA y Aa muestran el carácter dominante, así que la proporción fenotípica es 3 : 1 (75 % y 25 %).",
        ],
      },
      {
        title: "Un cruce dihíbrido clásico",
        steps: [
          "Cada progenitor produce cuatro gametos: AB, Ab, aB y ab.",
          "La cuadrícula de 4 × 4 tiene 16 casillas y 9 genotipos distintos.",
          "Agrupados por caracteres: 9 A_B_, 3 A_bb, 3 aaB_ y 1 aabb, así que la proporción es 9 : 3 : 3 : 1.",
        ],
      },
      {
        title: "Cruzamiento prueba con un doble recesivo",
        steps: [
          "El progenitor 2 solo puede producir gametos ab, así que cada descendiente muestra los alelos que recibió del progenitor 1.",
          "Los cuatro gametos del progenitor 1 son igual de probables, así que los cuatro fenotipos aparecen en proporción 1 : 1 : 1 : 1, un 25 % cada uno.",
        ],
      },
    ],
    assumptions: [
      "Dominancia completa: basta un alelo dominante para que se manifieste el carácter dominante. No se modelan la dominancia incompleta, la codominancia ni los alelos múltiples (como los grupos sanguíneos ABO).",
      "Con dos genes, se supone que segregan de forma independiente. Los genes ligados en el mismo cromosoma no siguen estas proporciones.",
      "Cada gen tiene exactamente dos alelos y no está ligado al sexo. Se supone que todas las combinaciones de gametos tienen la misma probabilidad de sobrevivir.",
      "Los resultados son probabilidades para cada descendiente. En una descendencia pequeña, las proporciones pueden diferir de las esperadas solo por azar.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre la proporción genotípica y la fenotípica?",
        answer: "La proporción genotípica cuenta las combinaciones de alelos, como AA : Aa : aa = 1 : 2 : 1. La fenotípica cuenta los caracteres visibles. Con dominancia completa, AA y Aa tienen el mismo aspecto, así que el mismo cruce da una proporción fenotípica de 3 : 1.",
      },
      {
        question: "¿Por qué la cuadrícula muestra el mismo gameto dos veces en algunos progenitores?",
        answer: "Un progenitor como AA solo produce gametos A, pero la cuadrícula mantiene una fila o columna por alelo para que todas las casillas tengan la misma probabilidad. Los encabezados repetidos solo indican que ese gameto es el doble de probable.",
      },
      {
        question: "¿Puedo introducir tres genes?",
        answer: "Aquí no. Un cruce de tres genes necesita 64 casillas, y es más sencillo multiplicar las probabilidades de cada gen con la regla del producto. Calcula cada gen por separado y multiplica las probabilidades que necesites.",
      },
    ],
    sourcesUsedFor: ["Dominancia, segregación, segregación independiente y la proporción 9 : 3 : 3 : 1 de un cruce dihíbrido."],
  },
  text: {
    parent1: "Genotipo del progenitor 1",
    parent2: "Genotipo del progenitor 2",
    parentHelp:
      "Uno o dos genes, dos letras por gen: mayúscula para el alelo dominante y minúscula para el recesivo. Ejemplos: Aa, AaBb, AABb.",
    parent2Help: "Usa las mismas letras de gen que en el progenitor 1, p. ej., aa o aabb.",
    errors: {
      invalidChar: "«{token}» no está permitido. Usa solo letras, como Aa o AaBb.",
      length: "Introduce un gen (2 letras, p. ej., Aa) o dos genes (4 letras, p. ej., AaBb).",
      pairMismatch: "«{token}» mezcla dos genes. Cada gen se escribe con dos formas de la misma letra, como Aa, AA o aa.",
      duplicateGene: "El gen {token} aparece dos veces. Usa una letra distinta para cada gen, p. ej., AaBb.",
      geneCount: "Los dos progenitores deben tener el mismo número de genes.",
      geneMismatch: "Usa las mismas letras de gen que en el progenitor 1 ({genes}).",
    },
    listSeparator: ", ",
    dominantTrait: "{gene} dominante",
    recessiveTrait: "{gene} recesivo",
    phenotypeRatio: "Proporción fenotípica",
    caption: "En el orden {order} (un guion bajo indica cualquiera de los dos alelos)",
    genotypeRatio: "Proporción genotípica",
    genotypeOrder: "Genotipos en ese orden",
    genotypeCount: "Genotipos distintos",
    phenotypeCount: "Fenotipos distintos",
    probabilityOf: "Probabilidad de descendencia con {phenotype}",
    fraction: "{count} de {total}",
    gridCaption: "Cuadro de Punnett: gametos del progenitor 1 en el lateral y del progenitor 2 en la parte superior",
    gridCorner: "Progenitor 1 ↓ · Progenitor 2 →",
    genotypeTable: "Genotipos de la descendencia",
    phenotypeTable: "Fenotipos de la descendencia",
    columns: { genotype: "Genotipo", phenotype: "Fenotipo", description: "Caracteres que muestra", cells: "Casillas", probability: "Probabilidad" },
    singlePhenotype: "Toda la descendencia de este cruce muestra los mismos caracteres.",
    linkageNote:
      "Se supone que los dos genes segregan de forma independiente, como los genes situados en cromosomas distintos. Los genes cercanos en un mismo cromosoma suelen heredarse juntos, lo que cambia estas proporciones.",
    note: "Supone dominancia completa: basta un alelo dominante para que se manifieste el carácter dominante. Las proporciones son probabilidades para cada descendiente, así que las camadas o familias reales pueden diferir por azar.",
  },
};

export default es;
