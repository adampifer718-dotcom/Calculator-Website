import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BsaText } from "../text/en";

const es: CalculatorTranslation<BsaText> = {
  content: {
    title: "Calculadora de superficie corporal",
    shortTitle: "Superficie corporal",
    summary:
      "Estima la superficie corporal en m² a partir de la altura y el peso con la fórmula de Mosteller, comparada con las fórmulas de Du Bois, Haycock y Gehan-George.",
    metaTitle: "Calculadora de superficie corporal – Mosteller y Du Bois",
    metaDescription:
      "Estima la superficie corporal (SC) en m² y ft² a partir de la altura y el peso con la fórmula de Mosteller, junto a las de Du Bois, Haycock y Gehan-George.",
    keywords: [
      "superficie corporal",
      "calcular superficie corporal",
      "fórmula de Mosteller",
      "fórmula de Du Bois",
      "fórmula de Haycock",
      "Gehan George",
      "SC en m2",
      "BSA",
    ],
    intro: [
      "La superficie corporal (SC) es el área total de la piel, expresada en metros cuadrados. En medicina se usa para ajustar algunas mediciones al tamaño corporal, como el índice cardiaco o la filtración renal. Medirla directamente no es práctico, así que se estima a partir de la altura y el peso.",
      "Esta calculadora usa la fórmula de Mosteller como resultado principal porque es sencilla y de uso generalizado. Las fórmulas de Du Bois, Haycock y Gehan-George se muestran a su lado para que veas cuánto difieren las estimaciones.",
    ],
    howToUse: [
      "Introduce el peso y elige kilogramos o libras.",
      "Introduce la altura y elige centímetros o pulgadas.",
      "Consulta la estimación de Mosteller en m² y ft², y compara las cuatro fórmulas en la tabla.",
    ],
    formulas: [
      { title: "Mosteller", expression: "SC = √(altura × peso ÷ 3600)", explanation: "Altura en cm, peso en kg, resultado en m²." },
      {
        title: "Du Bois y Du Bois",
        expression: "SC = 0,007184 × peso^0,425 × altura^0,725",
        explanation: "La más antigua de las cuatro, ajustada a un pequeño grupo de personas en 1916.",
      },
      {
        title: "Haycock",
        expression: "SC = 0,024265 × peso^0,5378 × altura^0,3964",
        explanation: "Ajustada a mediciones desde lactantes hasta adultos.",
      },
      {
        title: "Gehan y George",
        expression: "SC = 0,0235 × peso^0,51456 × altura^0,42246",
        explanation: "Ajustada a un grupo más amplio de 401 personas.",
      },
      {
        title: "Pies cuadrados",
        expression: "ft² = m² ÷ 0,09290304",
        explanation: "1 ft = 0,3048 m exactamente, así que 1 ft² = 0,09290304 m².",
      },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: [
          "Mosteller: √(175 × 70 ÷ 3600) = √3,4028 ≈ 1,84 m²",
          "Du Bois ≈ 1,848 m², Haycock ≈ 1,847 m², Gehan-George ≈ 1,854 m²",
          "1,8447 m² ÷ 0,09290304 ≈ 19,86 ft²",
        ],
      },
      {
        title: "82 kg, 168 cm",
        steps: [
          "Mosteller: √(168 × 82 ÷ 3600) = √3,8267 ≈ 1,96 m²",
          "Du Bois da unos 1,919 m², el valor más bajo de los cuatro",
          "Haycock da unos 1,979 m², el más alto",
        ],
      },
      {
        title: "165 lb, 64 in",
        steps: [
          "165 lb × 0,45359237 = 74,84 kg; 64 in × 2,54 = 162,56 cm",
          "Mosteller: √(162,56 × 74,84 ÷ 3600) ≈ 1,84 m²",
          "Du Bois ≈ 1,802 m², Haycock ≈ 1,859 m²",
        ],
      },
    ],
    assumptions: [
      "El resultado es una estimación, no un consejo médico, y esta calculadora todavía no ha sido revisada por profesionales. No la uses nunca para calcular la dosis de un medicamento sin la confirmación de un profesional clínico cualificado.",
      "Las cuatro fórmulas son ajustes estadísticos a grupos de personas medidos hace décadas. Pueden diferir entre sí y de la superficie real de una persona en varios puntos porcentuales, sobre todo en personas muy pequeñas, muy altas o de mucho peso.",
      "Se admiten pesos de 0,5 a 500 kg y alturas de 30 a 260 cm. Los hospitales pueden usar otra fórmula, o un peso ajustado, en niños o en personas con obesidad.",
      "Las libras se convierten con 1 lb = 0,45359237 kg y las pulgadas con 1 in = 2,54 cm, ambos valores exactos.",
    ],
    faqs: [
      {
        question: "¿Cuál es una superficie corporal típica?",
        answer:
          "En adultos suele estar entre aproximadamente 1,6 y 2,2 m², según la altura y el peso. Los valores en niños son mucho menores, y las fórmulas difieren más con esos tamaños.",
      },
      {
        question: "¿Qué fórmula debo usar?",
        answer:
          "La de Mosteller es la más habitual porque es fácil de calcular y coincide bien con las demás en la mayoría de los adultos. Los centros sanitarios y los protocolos suelen especificar una fórmula, así que usa la que use tu equipo sanitario.",
      },
      {
        question: "¿Por qué las fórmulas dan resultados distintos?",
        answer:
          "Cada una se ajustó a un grupo de personas distinto con un método diferente para medir la superficie de la piel. Las diferencias suelen ser pequeñas en adultos de complexión media y mayores en personas fuera del intervalo con el que se elaboraron.",
      },
    ],
    sourcesUsedFor: [
      "La fórmula de Mosteller SC = √(altura en cm × peso en kg ÷ 3600).",
      "Las constantes de Du Bois 0,007184 × peso^0,425 × altura^0,725.",
      "La fórmula de Haycock 0,024265 × peso^0,5378 × altura^0,3964.",
      "La fórmula de Gehan-George 0,0235 × peso^0,51456 × altura^0,42246.",
    ],
  },
  text: {
    weight: "Peso",
    weightUnit: "Unidad de peso",
    weightUnits: { kg: "Kilogramos (kg)", lb: "Libras (lb)" },
    height: "Altura",
    heightUnit: "Unidad de altura",
    heightUnits: { cm: "Centímetros (cm)", in: "Pulgadas (in)" },
    errors: {
      weightRange: "Introduce un peso entre {min} y {max}.",
      heightRange: "Introduce una altura entre {min} y {max}.",
    },
    bsa: "Superficie corporal (Mosteller)",
    caption: "√({height} cm × {weight} kg ÷ 3600).",
    bsaFt: "Superficie corporal (Mosteller) en pies cuadrados",
    spread: "Diferencia entre las cuatro fórmulas",
    table: {
      caption: "Superficie corporal según la fórmula",
      formula: "Fórmula",
      m2: "m²",
      ft2: "ft²",
    },
    formulas: {
      mosteller: "Mosteller (1987)",
      duBois: "Du Bois y Du Bois (1916)",
      haycock: "Haycock et al. (1978)",
      gehanGeorge: "Gehan y George (1970)",
    },
    notes: {
      estimate:
        "Cada fórmula es una estimación ajustada a un grupo limitado de personas; pueden diferir entre sí y de una superficie medida en varios puntos porcentuales, sobre todo en los extremos de tamaño.",
      dosing:
        "No uses este resultado para calcular la dosis de un medicamento. Las dosis basadas en la superficie corporal deben calcularlas y comprobarlas profesionales clínicos cualificados.",
    },
  },
};

export default es;
