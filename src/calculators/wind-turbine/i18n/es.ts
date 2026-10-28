import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WindTurbineText } from "../text/en";

const es: CalculatorTranslation<WindTurbineText> = {
  content: {
    title: "Calculadora de potencia de aerogeneradores",
    shortTitle: "Potencia de aerogenerador",
    summary:
      "Estima la potencia de un aerogenerador a partir del diámetro del rotor, la velocidad del viento, la densidad del aire y el coeficiente de potencia, con una cifra aproximada de energía anual.",
    metaTitle: "Calculadora de potencia de aerogeneradores – kW y kWh",
    metaDescription:
      "Calcula la potencia de un aerogenerador con el rotor, el viento, la densidad del aire y el Cp, compárala con el límite de Betz y estima los kWh al año.",
    keywords: [
      "potencia aerogenerador",
      "fórmula potencia eólica",
      "energía eólica kWh",
      "área barrida",
      "coeficiente de potencia",
      "límite de Betz",
      "factor de capacidad",
    ],
    intro: [
      "Un aerogenerador convierte parte de la energía cinética del aire en movimiento en electricidad. La potencia disponible depende de cuánto aire atraviesa el círculo que barren las palas, de la densidad de ese aire y, sobre todo, de su velocidad: la potencia crece con el cubo de la velocidad del viento, así que al duplicar la velocidad se obtiene ocho veces más potencia.",
      "Introduce el diámetro del rotor, la velocidad del viento y el coeficiente de potencia de la turbina para estimar su producción. También puedes limitar el resultado a la potencia nominal del generador y añadir un factor de capacidad para obtener una cifra aproximada de energía anual.",
    ],
    howToUse: [
      "Introduce el diámetro del rotor en metros o en pies.",
      "Introduce la velocidad del viento a la altura del buje y elige su unidad.",
      "Mantén la densidad estándar del aire de 1,225 kg/m³ o introduce un valor para tu altitud y temperatura.",
      "Introduce el coeficiente de potencia Cp. 0,40 es un valor razonable para una buena turbina moderna; no puede superar el límite de Betz de aproximadamente 0,593.",
      "Si quieres, introduce la potencia nominal para limitar la producción y un factor de capacidad para estimar la energía de un año.",
    ],
    formulas: [
      { title: "Área barrida", expression: "A = π × (D ÷ 2)²", explanation: "D es el diámetro del rotor. Un rotor de 80 m barre unos 5.027 m²." },
      {
        title: "Potencia de la turbina",
        expression: "P = ½ × ρ × A × v³ × Cp",
        explanation: "ρ es la densidad del aire en kg/m³, v la velocidad del viento en m/s y Cp el coeficiente de potencia. El resultado se obtiene en vatios.",
      },
      {
        title: "Límite de Betz",
        expression: "Cp ≤ 16/27 ≈ 0,593",
        explanation:
          "Un rotor ideal puede captar como máximo 16/27 de la potencia del viento que lo atraviesa. Las turbinas reales captan menos, normalmente bastante menos de 0,5 incluso en su mejor punto de funcionamiento.",
      },
      {
        title: "Energía anual (aproximada)",
        expression: "E = P × 8.760 h × factor de capacidad",
        explanation: "P es la producción, limitada a la potencia nominal si se indica. El factor de capacidad tiene en cuenta el tiempo en que el viento es más débil.",
      },
    ],
    examples: [
      {
        title: "Rotor de 80 m con viento de 10 m/s",
        steps: ["A = π × 40² ≈ 5.026,55 m²", "P = 0,5 × 1,225 × 5.026,55 × 10³ × 0,40 ≈ 1.231.504 W", "Producción ≈ 1.231,50 kW, unos 1,23 MW"],
      },
      {
        title: "Turbina pequeña de 10 ft con brisa de 12 mph",
        steps: ["D = 10 × 0,3048 = 3,048 m, así que A ≈ 7,297 m²", "v = 12 × 0,44704 = 5,364 m/s", "P = 0,5 × 1,225 × 7,297 × 5,364³ × 0,35 ≈ 241 W, unos 0,24 kW"],
      },
      {
        title: "Rotor de 100 m de 2.500 kW nominales, viento de 12 m/s y factor de capacidad del 35 %",
        steps: [
          "A = π × 50² ≈ 7.853,98 m²",
          "Potencia del rotor = 0,5 × 1,225 × 7.853,98 × 12³ × 0,45 ≈ 3.740,69 kW, más que los 2.500 kW nominales",
          "La producción se limita a 2.500 kW",
          "Energía anual ≈ 2.500 × 8.760 × 0,35 = 7.665.000 kWh",
        ],
      },
    ],
    assumptions: [
      "La velocidad del viento se considera constante y uniforme en todo el rotor. El viento real varía de un segundo a otro y con la altura, y como la potencia depende del cubo de la velocidad, la potencia media es mayor que la potencia a la velocidad media.",
      "El coeficiente de potencia se trata como constante. En realidad cambia con la velocidad del viento, y cada turbina tiene su propia curva de potencia, velocidad de arranque y velocidad de corte.",
      "La energía anual es una estimación aproximada con la fórmula anterior, no una evaluación del emplazamiento. Para planificar una instalación real se necesitan datos de viento medidos y la curva de potencia del fabricante.",
      "Se supone que las pérdidas del generador, la multiplicadora y el sistema eléctrico ya están incluidas en el coeficiente de potencia que introduces.",
    ],
    faqs: [
      {
        question: "¿Qué es el límite de Betz?",
        answer:
          "Es la fracción máxima teórica de la potencia del viento que puede extraer cualquier rotor: 16/27, es decir, alrededor del 59,3 %. Si un rotor frenara el aire hasta detenerlo, no podría pasar más aire a través de él, así que siempre debe quedar algo de energía en el viento que sale de la turbina.",
      },
      {
        question: "¿Por qué influye tanto la velocidad del viento?",
        answer:
          "La potencia del viento crece con el cubo de la velocidad. Un emplazamiento con un viento medio de 7 m/s tiene alrededor de un 31 % más de potencia disponible ((7 ÷ 6,4)³ ≈ 1,31) que uno con 6,4 m/s, así que pequeñas diferencias de ubicación y de altura de la torre tienen un gran efecto.",
      },
      {
        question: "¿Qué factor de capacidad debo usar?",
        answer:
          "Depende mucho del emplazamiento, de la altura de la torre y de la turbina, así que no hay un único valor correcto. Usa datos de viento medidos en tu emplazamiento o cifras publicadas de turbinas similares en tu región. Las turbinas pequeñas en lugares resguardados suelen alcanzar valores mucho más bajos que las grandes en zonas abiertas y ventosas.",
      },
    ],
    sourcesUsedFor: [
      "La potencia del viento, P = ½ρAv³, el coeficiente de potencia y el límite de Betz de 16/27.",
      "La densidad del aire a nivel del mar de la Atmósfera Estándar Internacional, 1,225 kg/m³.",
    ],
  },
  text: {
    diameter: "Diámetro del rotor",
    diameterHelp: "El diámetro del círculo que barren las puntas de las palas (dos veces la longitud de la pala más el buje).",
    diameterUnit: "Unidad del diámetro",
    diameterUnits: { m: "Metros (m)", ft: "Pies (ft)" },
    speed: "Velocidad del viento",
    speedHelp: "La velocidad del viento a la altura del buje. La potencia aumenta con el cubo de la velocidad, así que un pequeño cambio importa mucho.",
    speedUnit: "Unidad de velocidad",
    speedUnits: { ms: "Metros por segundo (m/s)", kmh: "Kilómetros por hora (km/h)", mph: "Millas por hora (mph)", kn: "Nudos (kn)" },
    density: "Densidad del aire",
    densityHelp:
      "1,225 kg/m³ es el valor de la Atmósfera Estándar Internacional a nivel del mar y 15 °C. El aire es menos denso en altitud y cuando hace calor.",
    cp: "Coeficiente de potencia (Cp)",
    cpHelp:
      "La fracción de la potencia del viento que el rotor convierte en producción. 0,40 es una cifra razonable para una buena turbina moderna; el máximo teórico es 16/27 ≈ 0,593 (el límite de Betz).",
    ratedPower: "Potencia nominal (opcional)",
    ratedPowerHelp: "La potencia que figura en la placa del generador. Si la indicas, la producción se limita a este valor.",
    capacityFactor: "Factor de capacidad (opcional)",
    capacityFactorHelp:
      "La producción media a lo largo de un año como porcentaje de la potencia usada en la estimación. Déjalo vacío para omitir la energía anual.",
    errors: {
      betz: "El coeficiente de potencia no puede superar 16/27 ≈ 0,5926 (el límite de Betz). Ningún rotor puede captar una fracción mayor de la potencia del viento.",
    },
    power: "Potencia producida por la turbina",
    caption: "Área barrida {area}, viento {speed}, Cp {cp}.",
    powerW: "Potencia en vatios",
    aeroPower: "Potencia del rotor antes del límite de potencia nominal",
    windPower: "Potencia del viento a través del área barrida (Cp = 1)",
    betzPower: "Potencia máxima que podría captar cualquier rotor (límite de Betz)",
    sweptArea: "Área barrida",
    speedMs: "Velocidad del viento en m/s",
    annualEnergy: "Energía anual, estimación aproximada",
    annualEnergyMwh: "Energía anual en MWh",
    notes: {
      capped: "A esta velocidad del viento el rotor podría producir más que la potencia nominal, así que la producción se limita a los {rated} nominales.",
      annual:
        "La energía anual es una estimación aproximada: la potencia anterior × 8.760 horas × el factor de capacidad. La producción real depende de cómo varía la velocidad del viento a lo largo del año, de la curva de potencia de la turbina, de las paradas y de las pérdidas.",
      single:
        "Esta es la producción con una única velocidad de viento constante. El viento real cambia continuamente, y las turbinas no producen nada por debajo de su velocidad de arranque y se detienen por encima de su velocidad de corte.",
    },
  },
};

export default es;
