import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaterFootprintText } from "../text/en";

const es: CalculatorTranslation<WaterFootprintText> = {
  content: {
    title: "Calculadora del consumo de agua en la ducha",
    shortTitle: "Agua en la ducha",
    summary:
      "Estima cuánta agua gastan al año las duchas de tu hogar, la energía y el coste de calentarla, y cuánto ahorraría una alcachofa de menor caudal.",
    metaTitle: "Calculadora del consumo de agua en la ducha – Litros y kWh",
    metaDescription:
      "Estima el agua anual de las duchas a partir del caudal, la duración y la frecuencia, con la energía y el coste de calentarla y el ahorro de una alcachofa de bajo caudal.",
    keywords: [
      "consumo de agua ducha",
      "litros por ducha",
      "alcachofa de bajo caudal",
      "ahorro de agua en la ducha",
      "coste energético de la ducha",
      "WaterSense",
      "huella hídrica",
    ],
    intro: [
      "Las duchas son uno de los mayores usos de agua en la mayoría de los hogares y, como el agua se calienta, también suponen una parte notable de la factura energética. Lo que gastan depende solo de unos pocos factores: el caudal de la alcachofa, lo que dura cada ducha y la frecuencia con la que se duchan las personas.",
      "Introduce esos datos para estimar el agua gastada por ducha, por semana y por año. Añade las temperaturas del agua y tu precio de la energía para estimar la energía y el coste de calentarla, e introduce un segundo caudal para ver cuánto ahorraría otra alcachofa.",
    ],
    howToUse: [
      "Introduce el caudal de tu alcachofa en galones estadounidenses o en litros por minuto. Si no lo sabes, mide cuánto tarda en llenarse un cubo de tamaño conocido y divide.",
      "Introduce la duración de una ducha típica, las duchas por persona a la semana y el número de personas.",
      "Si quieres, introduce el caudal de una alcachofa que estés valorando para ver el ahorro.",
      "Para estimar la energía, deja activada la opción de energía e introduce las temperaturas de entrada y de la ducha, el rendimiento del calentador y, si quieres, tu precio por kWh.",
    ],
    formulas: [
      {
        title: "Agua al año",
        expression: "V(año) = caudal × minutos × duchas por semana × personas × 52,1775",
        explanation:
          "52,1775 es el número de semanas de un año gregoriano medio (365,2425 ÷ 7). El resultado está en la unidad del caudal: galones o litros.",
      },
      {
        title: "Energía de calentamiento",
        expression: "E (kWh) = V (L) × 1 kg/L × 4,186 kJ/(kg·K) × (T(ducha) − T(entrada)) ÷ 3.600 ÷ rendimiento",
        explanation:
          "4,186 kJ calientan 1 kg de agua 1 °C, y 3.600 kJ son 1 kWh. El rendimiento se introduce como porcentaje y se usa como fracción.",
      },
      {
        title: "Ahorro",
        expression: "ahorro = V(actual) − V(nuevo)",
        explanation: "La energía y el coste ahorrados se obtienen del agua ahorrada con la misma fórmula.",
      },
    ],
    examples: [
      {
        title: "Una persona, duchas diarias de 8 minutos a 2,5 gpm",
        steps: ["Por ducha = 2,5 × 8 = 20 gal", "Por semana = 20 × 7 = 140 gal", "Al año = 140 × 52,1775 = 7.304,85 gal, unos 27.652 L"],
      },
      {
        title: "Tres personas, 9 L/min, cambiando a una alcachofa de 6 L/min",
        steps: [
          "Por semana = 9 × 6 × 5 × 3 = 810 L, así que al año = 810 × 52,1775 ≈ 42.263,78 L",
          "Energía de calentamiento = 42.263,78 × 4,186 × (38 − 15) ÷ 3.600 ÷ 0,90 ≈ 1.256 kWh al año",
          "Con 6 L/min: 540 × 52,1775 ≈ 28.175,85 L, un ahorro de unos 14.088 L y 419 kWh al año",
        ],
      },
      {
        title: "Dos personas, duchas de 10 minutos, calentador en °F y precio de la energía",
        steps: [
          "Al año = 2,5 × 10 × 7 × 2 × 52,1775 = 18.262,125 gal ≈ 69.130 L",
          "Aumento de temperatura = (100 − 55) × 5/9 = 25 K, así que la energía ≈ 69.130 × 4,186 × 25 ÷ 3.600 ÷ 0,90 ≈ 2.233 kWh, con un coste de unos 357 US$ al año",
          "Una alcachofa de 1,8 gpm ahorra unos 5.113 gal y unos 100 US$ al año",
        ],
      },
    ],
    assumptions: [
      "El caudal se considera constante durante toda la ducha. El caudal real depende de la presión del agua y de cuánto se abra el grifo, así que un caudal medido es mejor que el nominal.",
      "Un año son 52,1775 semanas (365,2425 ÷ 7). No se modelan las semanas fuera de casa ni los cambios de hábitos según la estación.",
      "La estimación de energía calienta toda el agua de la ducha desde la temperatura de entrada hasta la de la ducha. No tiene en cuenta el calor perdido en las tuberías y el depósito, así que el consumo real suele ser algo mayor.",
      "El coste no incluye las tarifas de agua y alcantarillado; solo se calcula el precio de la energía para calentarla.",
    ],
    faqs: [
      {
        question: "¿Cuánta agua gasta una alcachofa de ducha?",
        answer:
          "En Estados Unidos, las alcachofas nuevas pueden gastar como máximo 2,5 galones (unos 9,5 litros) por minuto. Las que llevan la etiqueta WaterSense de la EPA gastan 2,0 galones por minuto o menos. Las alcachofas antiguas pueden gastar más, así que medir la tuya es la mejor forma de saberlo.",
      },
      {
        question: "¿Cómo puedo medir el caudal de mi ducha?",
        answer:
          "Pon un cubo de tamaño conocido bajo la ducha con tu ajuste habitual y mide cuánto tarda en llenarse. Divide el volumen entre el tiempo en minutos; por ejemplo, 10 litros en 75 segundos son 10 ÷ 1,25 = 8 L/min.",
      },
      {
        question: "¿Qué ahorra más: una ducha más corta o una alcachofa de bajo caudal?",
        answer:
          "Ambas reducen el consumo de agua de forma proporcional. Pasar de 10 a 8 minutos ahorra un 20 %, lo mismo que pasar de 2,5 a 2,0 gpm. La calculadora muestra el efecto de cada una, así que puedes probar las dos.",
      },
    ],
    sourcesUsedFor: [
      "El máximo de WaterSense de 2,0 galones por minuto y el caudal máximo federal de 2,5 gpm para alcachofas de ducha.",
      "El consumo máximo federal de agua de 2,5 galones por minuto para alcachofas de ducha.",
      "El calor específico del agua, 1 cal/(g·°C) = 4,186 J/(g·°C).",
    ],
  },
  text: {
    flow: "Caudal de la alcachofa",
    flowHelp:
      "2,5 galones estadounidenses por minuto (unos 9,5 L/min) es el máximo federal de EE. UU. para alcachofas nuevas; las que llevan la etiqueta WaterSense gastan 2,0 gpm (unos 7,6 L/min) o menos. Puedes medir la tuya cronometrando cuánto tarda en llenarse un cubo.",
    flowUnit: "Unidad de caudal",
    flowUnits: { gpm: "Galones estadounidenses por minuto (gpm)", lpm: "Litros por minuto (L/min)" },
    minutes: "Minutos por ducha",
    showersPerWeek: "Duchas por semana y persona",
    people: "Número de personas",
    newFlow: "Nuevo caudal para comparar (opcional)",
    newFlowHelp: "El caudal de una alcachofa que estés valorando, en la misma unidad que arriba.",
    energy: "Estimar la energía para calentar el agua",
    energyOptions: { yes: "Sí", no: "No" },
    tempUnit: "Unidad de temperatura",
    tempUnits: { C: "Celsius (°C)", F: "Fahrenheit (°F)" },
    inletTemp: "Temperatura del agua fría de entrada",
    inletTempHelp: "La temperatura del agua que entra en el calentador. 15 °C (59 °F) es un ejemplo típico; varía con el clima y la estación.",
    showerTemp: "Temperatura de la ducha",
    showerTempHelp: "La temperatura del agua mezclada en la alcachofa. 38 °C (unos 100 °F) es una ducha cómoda típica.",
    efficiency: "Rendimiento del calentador de agua",
    efficiencyHelp:
      "La parte de la energía consumida que acaba como calor en el agua. 90 % es un ejemplo; los calentadores de gas antiguos suelen tener menos y las bombas de calor pueden superar ampliamente el 100 %.",
    price: "Precio de la energía por kWh (opcional)",
    priceHelp: "Tu precio por kWh de electricidad, o de gas convertido a kWh, para el coste anual.",
    errors: {
      showerAboveInlet: "La temperatura de la ducha debe ser mayor que la temperatura de entrada.",
      inletRange: "Introduce una temperatura de entrada entre 0 °C (32 °F) y 40 °C (104 °F).",
      showerRange: "Introduce una temperatura de la ducha de 60 °C (140 °F) como máximo.",
    },
    annual: "Agua de la ducha al año",
    caption: "{flow} × {minutes} min × {showers} duchas a la semana × {people} × {weeks} semanas al año.",
    annualOther: "Agua de la ducha al año en otras unidades",
    perWeek: "Agua de la ducha a la semana",
    perShower: "Agua por ducha",
    energyYear: "Energía para calentar el agua al año",
    costYear: "Coste de calentar el agua al año",
    newAnnual: "Agua al año con el nuevo caudal",
    waterSaved: "Agua ahorrada al año",
    energySaved: "Energía ahorrada al año",
    costSaved: "Coste ahorrado al año",
    peopleCount: {
      zero: "{n} personas",
      one: "{n} persona",
      two: "{n} personas",
      few: "{n} personas",
      many: "{n} personas",
      other: "{n} personas",
    },
    notes: {
      weeks: "Se considera que un año tiene 52,1775 semanas (365,2425 días ÷ 7, el año gregoriano medio).",
      energy:
        "Energía de calentamiento = litros × 1 kg/L × 4,186 kJ/(kg·K) × aumento de temperatura ÷ 3.600 ÷ rendimiento. No se incluye el calor perdido en las tuberías y el depósito.",
      moreWater: "El nuevo caudal es mayor que el actual, así que el ahorro es negativo: gastaría más agua.",
    },
  },
};

export default es;
