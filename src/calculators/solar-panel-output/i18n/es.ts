import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SolarPanelOutputText } from "../text/en";

const es: CalculatorTranslation<SolarPanelOutputText> = {
  content: {
    title: "Calculadora de producción de paneles solares",
    shortTitle: "Producción solar",
    summary:
      "Estima cuántos kilovatios hora produce un conjunto de paneles solares al día, al mes y al año, y qué tamaño de instalación cubriría tu consumo eléctrico.",
    metaTitle: "Producción de paneles solares – kWh al día y al año",
    metaDescription:
      "Estima la producción de paneles solares en kWh al día, al mes y al año a partir de los vatios, las horas solares pico y las pérdidas, y dimensiona la instalación según tu consumo.",
    keywords: [
      "calculadora paneles solares",
      "producción paneles solares",
      "kWh solar al año",
      "horas solares pico",
      "tamaño instalación fotovoltaica",
      "cuántas placas solares necesito",
      "pérdidas sistema fotovoltaico",
    ],
    intro: [
      "La potencia nominal de un panel solar indica cuánta potencia produce en condiciones estándar de prueba: plena radiación solar de 1.000 vatios por metro cuadrado con una temperatura de célula de 25 °C. La producción real depende de cuánta luz solar llega realmente a los paneles a lo largo del día, lo que suele resumirse en horas solares pico, y de las pérdidas en el resto de la instalación.",
      "Introduce la potencia del panel, el número de paneles, tus horas solares pico y las pérdidas del sistema para estimar la energía producida al día, al mes y al año. Añade tu consumo eléctrico anual para ver qué parte cubre la instalación y cuántos paneles lo cubrirían por completo.",
    ],
    howToUse: [
      "Introduce la potencia de un panel en vatios, tal como figura en su etiqueta o ficha técnica, y el número de paneles.",
      "Introduce las horas solares pico de tu ubicación. El valor predeterminado de 4,5 es solo un ejemplo; busca un valor para tu ubicación o usa una herramienta de recurso solar.",
      "Mantén el 14 % de pérdidas predeterminado o introduce tu propia estimación de las pérdidas del inversor, el cableado, el calor, la suciedad y las sombras.",
      "Si quieres, introduce tu consumo eléctrico anual en kWh según tus facturas para ver la parte cubierta y el tamaño de instalación necesario.",
    ],
    formulas: [
      {
        title: "Energía diaria",
        expression: "E(día) = potencia (W) × paneles ÷ 1.000 × horas solares pico × (1 − pérdidas ÷ 100)",
        explanation:
          "Potencia × paneles ÷ 1.000 es el tamaño de la instalación en kW. Al multiplicarlo por las horas solares pico se obtienen los kWh a plena potencia nominal, y el factor de pérdidas lo reduce a lo que llega a tu casa.",
      },
      {
        title: "Energía anual y mensual",
        expression: "E(año) = E(día) × 365;  E(mes) = E(año) ÷ 12",
        explanation: "La cifra mensual es una media. La producción real es mayor en verano y menor en invierno.",
      },
      {
        title: "Tamaño de instalación para tu consumo",
        expression: "tamaño (kW) = consumo anual ÷ (365 × horas solares pico × (1 − pérdidas ÷ 100))",
        explanation: "Los paneles necesarios son este tamaño × 1.000 ÷ potencia del panel, redondeado al alza a un panel entero.",
      },
    ],
    examples: [
      {
        title: "Diez paneles de 400 W con 4,5 horas solares pico",
        steps: [
          "Tamaño de la instalación = 400 × 10 ÷ 1.000 = 4 kW",
          "Energía diaria = 4 × 4,5 × (1 − 0,14) = 15,48 kWh",
          "Energía anual = 15,48 × 365 = 5.650,2 kWh",
        ],
      },
      {
        title: "Dieciséis paneles de 350 W, 5,2 horas de sol y 11.000 kWh de consumo al año",
        steps: [
          "Tamaño de la instalación = 350 × 16 ÷ 1.000 = 5,6 kW",
          "Energía diaria = 5,6 × 5,2 × 0,86 = 25,0432 kWh, así que 25,0432 × 365 ≈ 9.140,77 kWh al año",
          "Parte cubierta = 9.140,77 ÷ 11.000 ≈ 83,1 %",
          "Tamaño necesario = 11.000 ÷ (365 × 5,2 × 0,86) ≈ 6,74 kW, o 6.739 ÷ 350 ≈ 19,25, redondeado al alza a 20 paneles",
        ],
      },
      {
        title: "Seis paneles de 450 W en un lugar más nublado con un 10 % de pérdidas",
        steps: [
          "Tamaño de la instalación = 450 × 6 ÷ 1.000 = 2,7 kW",
          "Energía diaria = 2,7 × 3,2 × 0,90 = 7,776 kWh",
          "Energía anual = 7,776 × 365 = 2.838,24 kWh",
        ],
      },
    ],
    assumptions: [
      "Las horas solares pico dependen de tu ubicación, de la inclinación y la orientación de los paneles, de las sombras y de la estación. La cifra que introduces se usa como media para todo el año. Para una estimación real, usa una herramienta local de recurso solar como PVWatts del NREL.",
      "El 14 % de pérdidas predeterminado es un valor de uso común que abarca pérdidas como las del inversor, el cableado, la suciedad, el desajuste entre paneles y la disponibilidad. Tu instalación puede perder más o menos.",
      "La producción de los paneles también disminuye con temperaturas de célula altas y, lentamente, con la edad. Estos efectos solo se incluyen en la medida en que formen parte de la cifra de pérdidas que introduces.",
      "La parte del consumo cubierta compara solo totales anuales. No tiene en cuenta cuándo se produce la energía y cuándo se consume, ni el almacenamiento en baterías ni las normas de vertido a la red.",
    ],
    faqs: [
      {
        question: "¿Qué son las horas solares pico?",
        answer:
          "Expresan la energía solar de un día como el número de horas de plena radiación a 1.000 W/m² que aportarían la misma energía. Un lugar que recibe 5 kWh por metro cuadrado en un día tiene 5 horas solares pico, aunque el sol esté en el cielo mucho más tiempo.",
      },
      {
        question: "¿Por qué la producción es menor que potencia × horas?",
        answer:
          "La potencia de los paneles se mide en condiciones ideales de laboratorio. En uso, se pierde energía en el inversor y el cableado, por el calor, el polvo y las sombras, y por pequeñas diferencias entre paneles. El porcentaje de pérdidas tiene en cuenta todo esto en conjunto.",
      },
      {
        question: "¿Cuántos paneles necesito?",
        answer:
          "Introduce tu consumo eléctrico anual. La calculadora lo divide entre la energía que produce un kW de paneles en un año con tus horas de sol y tus pérdidas, y después convierte ese tamaño en paneles enteros de la potencia que has introducido.",
      },
    ],
    sourcesUsedFor: ["El modelo PVWatts y sus pérdidas totales del sistema predeterminadas del 14 %."],
  },
  text: {
    panelWatts: "Potencia del panel",
    panelWattsHelp: "La potencia nominal de un panel en condiciones estándar de prueba (STC), indicada en su etiqueta o ficha técnica.",
    panels: "Número de paneles",
    sunHours: "Horas solares pico al día",
    sunHoursHelp:
      "La energía solar diaria en tu ubicación expresada en horas de pleno sol (1 kW/m²). 4,5 es solo un ejemplo; el valor correcto depende de tu ubicación, de la inclinación y la orientación de los paneles y de la estación.",
    losses: "Pérdidas del sistema",
    lossesHelp: "Pérdidas del inversor, el cableado, el calor, la suciedad, las sombras y el desajuste entre paneles. El 14 % es un valor predeterminado de uso común.",
    annualUsage: "Consumo eléctrico anual (opcional)",
    annualUsageHelp: "Tu consumo anual según tus facturas de electricidad, para ver qué parte cubre la instalación y qué tamaño lo cubriría por completo.",
    errors: {
      losses: "Las pérdidas del sistema deben ser inferiores al 100 %.",
    },
    annual: "Energía estimada al año",
    caption: "Instalación de {size} × {hours} horas solares pico × {factor} tras un {losses} de pérdidas.",
    daily: "Energía al día",
    monthly: "Energía media al mes",
    systemSize: "Tamaño de la instalación (CC)",
    specificYield: "Energía por kW instalado al año",
    coverage: "Parte de tu consumo anual cubierta",
    sizeNeeded: "Tamaño de instalación para cubrir todo tu consumo",
    panelsNeeded: "Paneles necesarios para cubrir todo tu consumo",
    panelsMore: "Paneles adicionales necesarios",
    notes: {
      estimate:
        "Esta es una estimación sencilla. Una herramienta local de recurso solar como PVWatts del NREL usa datos meteorológicos horarios de tu ubicación y da una cifra más precisa.",
      covered:
        "La instalación tal como la has introducido produce en un año al menos tanta energía como consumes. La producción y el consumo rara vez coinciden hora a hora, así que es posible que sigas tomando algo de electricidad de la red.",
      panelsRounded: "El número de paneles se redondea al alza a paneles enteros de {watts}.",
    },
  },
};

export default es;
