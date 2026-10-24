import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuartileText } from "../text/en";

const values = { zero: "{n} valores", one: "{n} valor", two: "{n} valores", few: "{n} valores", many: "{n} valores", other: "{n} valores" };

const es: CalculatorTranslation<QuartileText> = {
  content: {
    title: "Calculadora de cuartiles y rango intercuartílico",
    shortTitle: "Cuartiles",
    summary:
      "Calcula los cuartiles, el rango intercuartílico, el resumen de cinco números, las vallas de 1,5 × IQR y los valores atípicos de un conjunto de datos, con dos métodos de cuartiles habituales.",
    metaTitle: "Calculadora de cuartiles – IQR, cinco números y atípicos",
    metaDescription:
      "Calcula Q1, la mediana, Q3 y el rango intercuartílico de una lista de números, con el resumen de cinco números, las vallas de 1,5 × IQR y los valores atípicos.",
    keywords: ["calculadora de cuartiles", "rango intercuartílico", "calcular IQR", "resumen de cinco números", "Q1 y Q3", "valores atípicos", "diagrama de caja", "regla de 1,5 IQR"],
    intro: [
      "Los cuartiles dividen los datos ordenados en cuatro grupos de tamaño parecido. El primer cuartil Q1 deja por debajo una cuarta parte de los valores, la mediana Q2 la mitad y el tercer cuartil Q3 tres cuartas partes. El rango intercuartílico, IQR = Q3 − Q1, es la dispersión de la mitad central de los datos y, a diferencia del rango, apenas se ve afectado por unos pocos valores extremos.",
      "Pega una lista de números para obtener el IQR, el resumen de cinco números que se usa en los diagramas de caja y las vallas de 1,5 × IQR que señalan posibles valores atípicos. Se ofrecen dos métodos de cuartiles porque los libros de texto, las calculadoras y los programas no coinciden en todos los casos; para la media y la moda, usa la Calculadora de media, mediana y moda.",
    ],
    howToUse: [
      "Pega o escribe al menos 4 números, separados por punto y coma, espacios o saltos de línea. No hace falta ordenarlos.",
      "Elige el método de cuartiles: inclusivo, que coincide con QUARTILE.INC de Excel, NumPy y R, o mediana de las mitades, que coincide con una TI-83 y con muchos libros de texto escolares.",
      "Consulta el IQR, los cuartiles y las vallas.",
      "Revisa la lista de valores atípicos para ver qué valores quedan fuera de las vallas.",
    ],
    formulas: [
      {
        title: "Inclusivo (interpolación lineal)",
        expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)",
        explanation:
          "x₍₀₎ ≤ x₍₁₎ ≤ … son los valores ordenados contados desde 0, con p = 0,25 para Q1 y 0,75 para Q3. Es el tipo 7 de Hyndman y Fan, el predeterminado en R y NumPy y el de QUARTILE.INC de Excel.",
      },
      {
        title: "Mediana de las mitades",
        expression: "Q1 = mediana de la mitad inferior\nQ3 = mediana de la mitad superior",
        explanation: "Con un número impar de valores, la propia mediana se excluye de ambas mitades. Es el método de las calculadoras TI-83 y TI-84.",
      },
      {
        title: "Rango intercuartílico y vallas",
        expression: "IQR = Q3 − Q1\nvalla inferior = Q1 − 1,5 × IQR\nvalla superior = Q3 + 1,5 × IQR",
        explanation: "Los valores fuera de las vallas se señalan como posibles valores atípicos; son los puntos que se dibujan por separado en un diagrama de caja.",
      },
    ],
    examples: [
      {
        title: "Once tiempos de entrega en minutos, método inclusivo",
        steps: [
          "n = 11, así que h = 10 × 0,25 = 2,5 para Q1: a medio camino entre 17 y 18, Q1 = 17,5",
          "h = 10 × 0,75 = 7,5 para Q3: a medio camino entre 26 y 29, Q3 = 27,5",
          "IQR = 27,5 − 17,5 = 10; las vallas son 2,5 y 42,5, así que 58 es un valor atípico",
        ],
      },
      {
        title: "Los mismos datos con el método de la mediana de las mitades",
        steps: [
          "La mediana es 22; al excluirla quedan las mitades 12, 15, 17, 18, 21 y 24, 26, 29, 31, 58",
          "Q1 = 17 y Q3 = 29",
          "IQR = 29 − 17 = 12; las vallas son −1 y 47, así que 58 sigue siendo un valor atípico",
        ],
      },
      {
        title: "Ocho lecturas de pH, método inclusivo",
        steps: [
          "h = 7 × 0,25 = 1,75: Q1 = 4,1 + 0,75 × (4,4 − 4,1) = 4,325",
          "h = 7 × 0,75 = 5,25: Q3 = 6,3 + 0,25 × (7,7 − 6,3) = 6,65",
          "IQR = 6,65 − 4,325 = 2,325, con vallas en 0,8375 y 10,1375: no hay valores atípicos",
        ],
      },
    ],
    assumptions: [
      "Los cuartiles no tienen una única definición aceptada. Los dos métodos de esta página son los más habituales; otros, como QUARTILE.EXC de Excel, pueden dar valores algo distintos en conjuntos de datos pequeños.",
      "La regla de 1,5 × IQR es una convención para señalar valores que merecen una segunda mirada. No demuestra que un valor sea un error.",
      "Se aceptan hasta 10.000 números. Los resultados se muestran con hasta 10 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Por qué distintas calculadoras dan cuartiles diferentes?",
        answer:
          "Porque hay varias definiciones. Para 1, 2, 3, 4, 5, 6, el método inclusivo da Q1 = 2,25, mientras que el de la mediana de las mitades da Q1 = 2. Con conjuntos de datos grandes, los métodos casi coinciden.",
      },
      {
        question: "¿Qué es el resumen de cinco números?",
        answer: "El mínimo, Q1, la mediana, Q3 y el máximo. Juntos describen el centro, la dispersión y el rango de los datos, y son exactamente lo que dibuja un diagrama de caja.",
      },
      {
        question: "¿La mediana de las mitades es lo mismo que las bisagras de Tukey?",
        answer:
          "No exactamente. Las bisagras de Tukey incluyen la mediana en ambas mitades cuando el número de valores es impar, mientras que el método de la TI-83 que se usa aquí la excluye. Con un número par de valores son iguales.",
      },
    ],
    sourcesUsedFor: [
      "Las vallas interiores Q1 − 1,5 × IQR y Q3 + 1,5 × IQR para señalar valores atípicos.",
      "Las distintas definiciones de cuantiles muestrales comparadas por Hyndman y Fan (1996), incluida la interpolación lineal.",
    ],
  },
  text: {
    data: "Datos",
    dataHelp:
      "Al menos 4 números, separados por punto y coma, espacios o saltos de línea (por ejemplo, 1,5; 2,25; 3). Usa la coma como separador decimal; una coma seguida de un espacio también separa valores. El orden no importa.",
    errors: {
      empty: "Introduce al menos 4 números.",
      tooMany: "Introduce como máximo {max} números.",
      notNumber: "«{token}» no es un número. Usa la coma decimal y separa los valores con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    tooFew: "Introduce al menos 4 números para calcular los cuartiles; has introducido {count}.",
    method: "Método de cuartiles",
    methods: {
      inclusive: "Inclusivo, interpolación lineal (QUARTILE.INC de Excel, NumPy, R tipo 7)",
      exclusive: "Mediana de las mitades, sin la mediana (estilo TI-83)",
    },
    methodHelp: "Cada libro de texto y cada programa definen los cuartiles de forma algo distinta. Los resultados pueden variar en conjuntos de datos pequeños.",
    iqr: "Rango intercuartílico (IQR)",
    caption: "Q3 − Q1 de {count}, con el método {method}.",
    methodShort: { inclusive: "inclusivo", exclusive: "de la mediana de las mitades" },
    valueCount: values,
    min: "Mínimo",
    q1: "Primer cuartil (Q1)",
    median: "Mediana (Q2)",
    q3: "Tercer cuartil (Q3)",
    max: "Máximo",
    lowerFence: "Valla inferior (Q1 − 1,5 × IQR)",
    upperFence: "Valla superior (Q3 + 1,5 × IQR)",
    outliers: "Valores atípicos",
    noOutliers: "Ninguno",
    moreOutliers: "{list} y {count} más",
    outlierCount: "Número de valores atípicos",
    summaryTable: "Resumen de cinco números",
    colStatistic: "Estadístico",
    colValue: "Valor",
    noOutliersNote: "Ningún valor queda fuera de las vallas, así que según la regla de 1,5 × IQR los datos no tienen valores atípicos.",
    outliersNote:
      "Los valores por debajo de la valla inferior o por encima de la superior se señalan como posibles valores atípicos. Revísalos antes de eliminar nada: un valor atípico puede ser una observación real e importante.",
  },
};

export default es;
