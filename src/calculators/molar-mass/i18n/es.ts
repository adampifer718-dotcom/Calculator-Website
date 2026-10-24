import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarMassText } from "../text/en";

const es: CalculatorTranslation<MolarMassText> = {
  content: {
    title: "Calculadora de masa molar",
    shortTitle: "Masa molar",
    summary:
      "Escribe una fórmula química, con paréntesis e hidratos incluidos, y obtén su masa molar en g/mol con el desglose de la fracción en masa de cada elemento.",
    metaTitle: "Calculadora de masa molar – g/mol a partir de una fórmula",
    metaDescription:
      "Halla la masa molar de cualquier fórmula química en g/mol, con paréntesis e hidratos como CuSO4·5H2O, más los átomos y el porcentaje en masa de cada elemento.",
    keywords: [
      "masa molar",
      "calcular masa molar",
      "peso molecular",
      "g/mol",
      "masa molar de un compuesto",
      "composición porcentual en masa",
      "masa molar de un hidrato",
    ],
    intro: [
      "La masa molar de una sustancia es la masa de un mol de ella, en gramos por mol. Para un compuesto es simplemente la suma de los pesos atómicos de todos los átomos de su fórmula: el agua, H2O, tiene dos hidrógenos y un oxígeno, así que unos 2 × 1,008 + 15,999 = 18,015 g/mol.",
      "Escribe cualquier fórmula y esta calculadora cuenta los átomos por ti, incluidos los grupos entre paréntesis o corchetes, como Ca(OH)2 o K4[Fe(CN)6], y los hidratos, como CuSO4·5H2O. También muestra qué parte de la masa total aporta cada elemento.",
    ],
    howToUse: [
      "Escribe la fórmula con las mayúsculas correctas: Co es el cobalto, mientras que CO es el monóxido de carbono.",
      "Pon el subíndice después de cada elemento o grupo entre paréntesis, por ejemplo Al2(SO4)3. Si no hay número, se entiende 1.",
      "Para un hidrato, separa las partes con ·, . o * y pon delante el número de moléculas de agua, como en MgSO4·7H2O.",
      "Consulta la masa molar y la tabla con el número de átomos, la aportación de masa y el porcentaje en masa de cada elemento.",
    ],
    formulas: [
      {
        title: "Masa molar",
        expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol",
        explanation: "nᵢ es el número de átomos del elemento i en la fórmula y Aᵣ,ᵢ su peso atómico estándar.",
      },
      {
        title: "Grupos e hidratos",
        expression: "(X)ₖ → cada subíndice interior × k\nA·nB → átomos de A + n × átomos de B",
        explanation:
          "El multiplicador de un paréntesis se aplica a todo lo que contiene, incluidos los grupos anidados; el coeficiente de un hidrato se aplica a la parte que sigue al punto.",
      },
      {
        title: "Porcentaje en masa",
        expression: "% del elemento i = nᵢ × Aᵣ,ᵢ ÷ M × 100",
        explanation: "La parte de la masa molar que procede de cada elemento.",
      },
    ],
    examples: [
      {
        title: "Glucosa, C6H12O6",
        steps: ["Carbono: 6 × 12,011 = 72,066", "Hidrógeno: 12 × 1,008 = 12,096", "Oxígeno: 6 × 15,999 = 95,994", "M = 72,066 + 12,096 + 95,994 = 180,156 g/mol"],
      },
      {
        title: "Sulfato de cobre(II) pentahidratado, CuSO4·5H2O",
        steps: [
          "CuSO4: 63,546 + 32,06 + 4 × 15,999 = 159,602",
          "5 H2O: 5 × (2 × 1,008 + 15,999) = 5 × 18,015 = 90,075",
          "M = 159,602 + 90,075 = 249,677 g/mol",
          "El cobre supone 63,546 ÷ 249,677 ≈ 25,45 % de la masa",
        ],
      },
      {
        title: "Ferrocianuro de potasio, K4[Fe(CN)6]",
        steps: ["Potasio: 4 × 39,098 = 156,392", "Hierro: 1 × 55,845 = 55,845", "(CN)6: 6 × (12,011 + 14,007) = 156,108", "M = 156,392 + 55,845 + 156,108 = 368,345 g/mol"],
      },
    ],
    assumptions: [
      "Los pesos atómicos son los pesos atómicos estándar abreviados de la IUPAC/CIAAW. Cuando el peso atómico de un elemento varía en la naturaleza y se da como un intervalo, se usa el valor convencional único, por lo que la última cifra puede diferir de otras tablas.",
      "Los elementos sin peso atómico estándar, como el tecnecio, el prometio, el polonio y la mayoría de los elementos más pesados que el bismuto salvo el torio, el protactinio y el uranio, se rechazan porque su masa molar depende del isótopo.",
      "No se admiten cargas, isótopos (como D o ¹³C) ni símbolos de estado. La fórmula se trata como una unidad fórmula neutra con abundancias isotópicas naturales; la masa de los electrones que gana o pierde un ion es despreciable.",
    ],
    faqs: [
      {
        question: "¿La masa molar es lo mismo que el peso molecular?",
        answer:
          "Tienen el mismo valor numérico. El peso molecular (masa molecular relativa) no tiene unidad, mientras que la masa molar se expresa en gramos por mol. El agua tiene un peso molecular de 18,015 y una masa molar de 18,015 g/mol.",
      },
      {
        question: "¿Cómo introduzco un hidrato?",
        answer:
          "Escribe la sal, luego un punto (·, . o *), y después el número de moléculas de agua y H2O, por ejemplo CuSO4·5H2O o Na2CO3*10H2O. El coeficiente multiplica todo lo que hay en la parte que sigue al punto.",
      },
      {
        question: "¿Por qué mi libro de texto da un valor algo distinto?",
        answer:
          "Las tablas redondean los pesos atómicos de forma distinta, y algunas usan valores antiguos. El cloro, por ejemplo, figura aquí como 35,45 pero como 35,453 en tablas antiguas, lo que cambia el último decimal del NaCl.",
      },
    ],
    sourcesUsedFor: ["Los pesos atómicos estándar abreviados y los valores convencionales usados para cada elemento."],
  },
  text: {
    formula: "Fórmula química",
    formulaHelp:
      "Los símbolos de los elementos distinguen mayúsculas y minúsculas (Co es el cobalto, CO es el monóxido de carbono). Usa ( ) o [ ] para los grupos y ·, . o * para los hidratos, p. ej., CuSO4·5H2O.",
    formulaPlaceholder: "p. ej., Ca(OH)2",
    errors: {
      empty: "Introduce una fórmula química.",
      tooLong: "La fórmula es demasiado larga. Usa como máximo 200 caracteres.",
      invalidChar:
        "Carácter no válido «{token}» en la posición {position}. Usa solo símbolos de elementos, números, paréntesis y puntos de hidrato.",
      lowercase:
        "Minúscula inesperada «{token}» en la posición {position}. Los símbolos de los elementos empiezan por mayúscula, p. ej., Na o Cl.",
      unknownElement: "Símbolo de elemento desconocido «{token}» en la posición {position}.",
      noStandardWeight: "{token} (posición {position}) no tiene peso atómico estándar, así que no se puede calcular su masa molar.",
      unclosed: "Paréntesis desequilibrados: el «{token}» de la posición {position} nunca se cierra.",
      unexpectedClose: "Paréntesis desequilibrados: el «{token}» de la posición {position} no tiene paréntesis de apertura correspondiente.",
      mismatched: "Paréntesis que no coinciden: el «{token}» de la posición {position} no corresponde al paréntesis que cierra.",
      emptyGroup: "El grupo entre paréntesis que empieza en la posición {position} está vacío.",
      zeroCount: "El subíndice de la posición {position} es cero. Los subíndices deben ser números enteros iguales o mayores que 1.",
      misplacedNumber: "El número de la posición {position} no va unido a ningún elemento ni grupo.",
      misplacedDot: "El punto de hidrato de la posición {position} debe ir entre dos partes de la fórmula, p. ej., CuSO4·5H2O.",
      tooManyAtoms: "La fórmula tiene demasiados átomos. Usa como máximo 1.000.000 de átomos en total.",
    },
    molarMass: "Masa molar",
    caption: "{formula}: suma de cada número de átomos × peso atómico estándar",
    totalAtoms: "Átomos por unidad fórmula",
    elements: "Elementos distintos",
    massOfMole: "Masa de un mol",
    tableCaption: "Composición por elemento",
    columns: { element: "Elemento", count: "Átomos", weight: "Peso atómico", mass: "Masa (g/mol)", percent: "% en masa" },
    note: "Los pesos atómicos son los valores estándar abreviados de la IUPAC. Para los elementos con un intervalo natural (como H, C, N, O y S), se usa el valor convencional único.",
  },
};

export default es;
