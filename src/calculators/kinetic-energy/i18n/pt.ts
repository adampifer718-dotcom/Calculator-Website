import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { KineticEnergyText } from "../text/en";

const pt: CalculatorTranslation<KineticEnergyText> = {
  content: {
    title: "Calculadora de energia cinética",
    shortTitle: "Energia cinética",
    summary: "Calcule a energia cinética de um objeto em movimento a partir da sua massa e velocidade.",
    metaTitle: "Calculadora de energia cinética – Ec = ½mv²",
    metaDescription:
      "Calcule a energia cinética a partir da massa e da velocidade, em kg ou lb e em m/s, km/h ou mph. Resultados em joules, quilojoules e watts-hora.",
    keywords: ["energia cinética", "calcular energia cinética", "fórmula da energia cinética", "joules", "massa e velocidade", "física", "1/2 mv2"],
    intro: [
      "A energia cinética é a energia que um objeto possui por estar em movimento. Cresce com o quadrado da velocidade, pelo que duplicar a velocidade quadruplica a energia.",
      "Introduza a massa e a velocidade nas unidades que tiver.",
    ],
    howToUse: [
      "Introduza a massa e escolha quilogramas ou libras.",
      "Introduza a velocidade e escolha m/s, km/h ou mph.",
      "Consulte a energia cinética em joules e noutras unidades.",
    ],
    formulas: [
      { title: "Energia cinética", expression: "Ec = ½ × m × v²", explanation: "m em quilogramas, v em metros por segundo e Ec em joules." },
    ],
    examples: [
      {
        title: "1000 kg a 20 m/s",
        steps: ["Ec = 0,5 × 1000 × 20²", "= 200 000 J"],
      },
      {
        title: "Carro de 1500 kg a 100 km/h",
        steps: ["100 km/h ≈ 27,78 m/s", "Ec = 0,5 × 1500 × 27,78² ≈ 578 704 J"],
      },
    ],
    assumptions: [
      "Usa a mecânica clássica, precisa a velocidades muito inferiores à da luz.",
      "Não está incluída a energia de rotação (por exemplo, a das rodas).",
    ],
    faqs: [
      {
        question: "Porque é que a velocidade influencia mais do que a massa?",
        answer: "A energia cinética depende do quadrado da velocidade. Passar de 50 para 100 km/h quadruplica a energia.",
      },
      {
        question: "Em que unidade se mede a energia cinética?",
        answer: "Em joules (J). Um joule equivale a um quilograma vezes metro quadrado a dividir por segundo ao quadrado (kg·m²/s²).",
      },
      {
        question: "A energia cinética pode ser negativa?",
        answer: "Não. A massa é positiva e a velocidade é elevada ao quadrado, pelo que a energia cinética é zero ou positiva.",
      },
    ],
    sourcesUsedFor: ["Definição Ec = ½mv².", "Fatores de conversão exatos para libras, km/h e mph."],
  },
  text: {
    mass: "Massa",
    massUnit: "Unidade de massa",
    massUnits: { kg: "Quilogramas (kg)", lb: "Libras (lb)" },
    velocity: "Velocidade",
    velocityUnit: "Unidade de velocidade",
    velocityUnits: { "m/s": "Metros por segundo (m/s)", "km/h": "Quilómetros por hora (km/h)", mph: "Milhas por hora (mph)" },
    energy: "Energia cinética",
    kj: "Em quilojoules",
    wh: "Em watts-hora",
    mps: "Velocidade em m/s",
    note: "Energia cinética clássica (não relativista), precisa para velocidades do dia a dia.",
  },
};

export default pt;
