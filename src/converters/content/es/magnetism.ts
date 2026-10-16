import type { ConverterContent } from "../../types";

const CGS_NOTE =
  "Las unidades CGS (gilbert, oersted, maxwell, gauss) se convierten con sus correspondencias de definición con las unidades del SI, que incluyen 4π porque el sistema CGS no está racionalizado.";

/** Magnetism converters in this language, keyed by converter id. */
export const magnetismContent: Record<string, ConverterContent> = {
  "magnetomotive-force": {
    title: "Conversor de fuerza magnetomotriz",
    shortTitle: "Fuerza magnetomotriz",
    summary: "Convierte la fuerza magnetomotriz entre amperios-vuelta, amperios, gilberts y abamperios-vuelta.",
    metaTitle: "Conversor de fuerza magnetomotriz – At, A, Gb",
    metaDescription: "Convierte la fuerza magnetomotriz entre amperios-vuelta, amperios, kiloamperios-vuelta, gilberts y abamperios-vuelta para bobinas y electroimanes.",
    keywords: ["fuerza magnetomotriz", "amperio-vuelta", "gilbert", "fmm", "gilbert a amperio-vuelta", "circuito magnético", "bobina"],
    intro: [
      "La fuerza magnetomotriz (fmm) es lo que impulsa el flujo magnético a lo largo de un circuito magnético, igual que la tensión impulsa la corriente. En una bobina es simplemente la corriente por el número de vueltas, así que una bobina de 200 vueltas que lleva 2 A aporta 400 amperios-vuelta.",
      "Los textos antiguos y algunos datos de imanes usan la unidad CGS gilbert. Un gilbert equivale a 10/(4π), unos 0,796, amperios-vuelta.",
    ],
    formula: {
      expression: "F = N × I\n1 Gb = 10 ÷ (4π) At ≈ 0,795775 At",
      explanation: "N es el número de vueltas e I la corriente; las vueltas no tienen unidad, así que la unidad del SI de la fmm es el amperio.",
    },
    assumptions: [
      "El amperio-vuelta y el amperio son la misma unidad del SI; el nombre amperio-vuelta solo recuerda que se han contado las vueltas.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "¿Cuántos amperios-vuelta es un gilbert?", answer: "Unos 0,795775 At. En sentido contrario, 1 At son unos 1,256637 Gb (4π/10)." },
      { question: "¿Cuál es la fmm de una bobina?", answer: "Multiplica la corriente por el número de vueltas. 500 vueltas con 0,3 A dan 150 amperios-vuelta." },
      { question: "¿Qué relación hay entre la fuerza magnetomotriz y la intensidad de campo?", answer: "La intensidad de campo H es la fmm por unidad de longitud del camino magnético, así que 150 At repartidos en 0,1 m de núcleo son 1500 A/m." },
    ],
    units: {
      a: "Amperios",
      ma: "Miliamperios",
      ka: "Kiloamperios",
      at: "Amperios-vuelta",
      mat: "Miliamperios-vuelta",
      kat: "Kiloamperios-vuelta",
      gilbert: "Gilberts",
      abat: "Abamperios-vuelta",
    },
    sourcesUsedFor: ["Factores de conversión del gilbert y el abamperio.", "El amperio como unidad del SI de fuerza magnetomotriz."],
  },
  "magnetic-field-strength": {
    title: "Conversor de intensidad de campo magnético",
    shortTitle: "Intensidad de campo magnético",
    summary: "Convierte la intensidad de campo magnético (H) entre amperios por metro, amperios-vuelta por pulgada o por centímetro y oersteds.",
    metaTitle: "Conversor de intensidad de campo magnético – A/m, Oe, kOe",
    metaDescription: "Convierte la intensidad de campo magnético H entre A/m, kA/m, A/cm, amperios-vuelta por pulgada, oersteds y kilooersteds. Gauss y tesla, en densidad de flujo.",
    keywords: ["intensidad de campo magnético", "oersted a a/m", "a/m a oersted", "koe a ka/m", "campo h", "coercitividad", "amperios-vuelta por pulgada"],
    intro: [
      "La intensidad de campo magnético, H, describe el efecto magnetizante de las corrientes. Es lo que produce una bobina por metro de longitud, y es como los fabricantes de imanes indican la coercitividad, por ejemplo un imán de neodimio con unos 950 kA/m (unos 12 kOe).",
      "La unidad del SI es el amperio por metro. La unidad CGS es el oersted, y 1 Oe equivale a 1000/(4π), unos 79,58, A/m.",
    ],
    formula: {
      expression: "H = N × I ÷ l\n1 Oe = 1000 ÷ (4π) A/m ≈ 79,5775 A/m",
      explanation: "N × I son los amperios-vuelta de la bobina y l es la longitud del camino magnético en metros.",
    },
    assumptions: [
      "H (intensidad de campo) y B (densidad de flujo) son magnitudes distintas, así que aquí no se ofrecen el gauss ni el tesla. En el vacío, y solo allí, 1 Oe de H corresponde a 1 G de B en unidades CGS, y por eso se suelen confundir; dentro del hierro o de un imán, la relación B/H depende del material.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "¿Cuántos A/m es un oersted?", answer: "Unos 79,5775 A/m. En sentido contrario, 1 kA/m son unos 12,566 Oe (4π)." },
      { question: "¿Un oersted es lo mismo que un gauss?", answer: "No. El oersted mide la intensidad de campo H y el gauss mide la densidad de flujo B. Solo en el vacío (y, de forma muy aproximada, en el aire) un campo de 1 Oe produce una densidad de flujo de 1 G en unidades CGS. Usa el conversor de densidad de flujo magnético para gauss y teslas." },
      { question: "¿Cómo convierto kOe a kA/m para la coercitividad de un imán?", answer: "Multiplica por unos 79,58. Una coercitividad de 12 kOe son unos 955 kA/m." },
    ],
    units: {
      a_m: "Amperios por metro",
      ma_m: "Miliamperios por metro",
      ka_m: "Kiloamperios por metro",
      a_cm: "Amperios por centímetro",
      a_mm: "Amperios por milímetro",
      at_m: "Amperios-vuelta por metro",
      at_cm: "Amperios-vuelta por centímetro",
      at_in: "Amperios-vuelta por pulgada",
      oe: "Oersteds",
      koe: "Kilooersteds",
      moe: "Milioersteds",
      gb_cm: "Gilberts por centímetro",
    },
    sourcesUsedFor: ["Factor de conversión del oersted.", "El amperio por metro como unidad del SI de intensidad de campo magnético."],
  },
  "magnetic-flux": {
    title: "Conversor de flujo magnético",
    shortTitle: "Flujo magnético",
    summary: "Convierte el flujo magnético entre webers, miliwebers, microwebers, voltios segundo, maxwells y líneas.",
    metaTitle: "Conversor de flujo magnético – Wb, mWb, µWb, Mx",
    metaDescription: "Convierte el flujo magnético entre webers, miliwebers, microwebers, nanowebers, voltios segundo, teslas metro cuadrado, maxwells, kilomaxwells y líneas.",
    keywords: ["flujo magnético", "weber", "maxwell", "weber a maxwell", "voltio segundo", "flujo concatenado", "fluxímetro"],
    intro: [
      "El flujo magnético es la cantidad total de campo magnético que atraviesa una superficie: la densidad de flujo por el área. Es lo que miden un fluxímetro y una bobina exploradora, y lo que cambia cuando un transformador o un generador induce una tensión.",
      "La unidad del SI es el weber, que equivale a un voltio segundo. La unidad CGS es el maxwell, también llamado línea, y 1 Wb son exactamente 100.000.000 Mx.",
    ],
    formula: {
      expression: "Φ = B × A\n1 Wb = 1 V·s = 1 T·m² = 10⁸ Mx",
      explanation: "B es la densidad de flujo en teslas y A el área en metros cuadrados, para un campo perpendicular a la superficie.",
    },
    assumptions: [
      "Los valores son flujo a través de una superficie, no densidad de flujo; para convertir teslas o gauss, usa el conversor de densidad de flujo magnético.",
      "1 maxwell = 10⁻⁸ Wb exactamente según las definiciones de las unidades CGS y SI; una línea es lo mismo que un maxwell.",
    ],
    faqs: [
      { question: "¿Cuántos maxwells hay en un weber?", answer: "Exactamente 100.000.000 (10⁸). Un maxwell son 10 nWb." },
      { question: "¿Por qué un weber equivale a un voltio segundo?", answer: "Según la ley de Faraday, un flujo que cambia 1 Wb cada segundo a través de una sola espira induce 1 V." },
      { question: "¿Cómo obtengo el flujo a partir de la densidad de flujo?", answer: "Multiplica por el área. Un campo de 0,5 T a través de 20 cm² (0,002 m²) da 1 mWb, o 100.000 Mx." },
    ],
    units: {
      wb: "Webers",
      mwb: "Miliwebers",
      uwb: "Microwebers",
      nwb: "Nanowebers",
      v_s: "Voltios segundo",
      t_m2: "Teslas metro cuadrado",
      mx: "Maxwells",
      kmx: "Kilomaxwells",
      g_cm2: "Gauss centímetro cuadrado",
      line: "Líneas",
    },
    sourcesUsedFor: ["Factor de conversión del maxwell.", "El weber como unidad del SI de flujo magnético."],
  },
  "magnetic-flux-density": {
    title: "Conversor de densidad de flujo magnético",
    shortTitle: "Densidad de flujo magnético",
    summary: "Convierte la densidad de flujo magnético (B) entre teslas, militeslas, microteslas, gauss, miligauss, gammas y líneas por pulgada cuadrada.",
    metaTitle: "Conversor de densidad de flujo magnético – T, mT, G, mG",
    metaDescription: "Convierte la densidad de flujo magnético B entre teslas, mT, µT, nT, gauss, kilogauss, miligauss, gammas y líneas por pulgada cuadrada. El oersted va aparte.",
    keywords: ["densidad de flujo magnético", "tesla a gauss", "gauss a tesla", "miligauss", "microtesla", "campo magnético", "gamma nT"],
    intro: [
      "La densidad de flujo magnético, B, es lo que se suele entender por intensidad de un campo magnético. La miden los gaussímetros y los magnetómetros de los teléfonos, los escáneres de resonancia magnética se clasifican por ella (1,5 T o 3 T) y los medidores de campos electromagnéticos la muestran en miligauss o microteslas.",
      "La unidad del SI es el tesla y la unidad CGS es el gauss: 1 T son exactamente 10.000 G. El campo terrestre en la superficie es de unos 25–65 µT, o 0,25–0,65 G.",
    ],
    formula: {
      expression: "1 T = 1 Wb/m² = 10.000 G\n1 G = 1 Mx/cm² = 100 µT",
      explanation: "La densidad de flujo es el flujo magnético por unidad de área perpendicular al campo.",
    },
    assumptions: [
      "B (densidad de flujo) y H (intensidad de campo) son magnitudes distintas, así que aquí no se ofrecen el oersted ni el A/m. Solo en el vacío, en unidades CGS, 1 G de B corresponde a 1 Oe de H; en los materiales magnéticos la relación depende de la permeabilidad del material.",
      "La gamma (γ) que se usa en geofísica equivale exactamente a 1 nT.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "¿Cuántos gauss hay en un tesla?", answer: "Exactamente 10.000. Un gauss son 100 µT, y un miligauss son 0,1 µT (100 nT)." },
      { question: "¿Qué intensidad tiene el campo magnético terrestre?", answer: "Entre unos 25 y 65 µT en la superficie según el lugar, es decir, entre 0,25 y 0,65 G." },
      { question: "¿Puedo convertir gauss a oersted?", answer: "En general no, porque miden cosas distintas. En el vacío o en el aire, en unidades CGS, un campo de 1 Oe da una densidad de flujo de 1 G; dentro del hierro o de un imán los valores difieren. Usa el conversor de intensidad de campo magnético para los oersteds." },
    ],
    units: {
      t: "Teslas",
      mt: "Militeslas",
      ut: "Microteslas",
      nt: "Nanoteslas",
      wb_m2: "Webers por metro cuadrado",
      gauss: "Gauss",
      kgauss: "Kilogauss",
      mgauss: "Miligauss",
      gamma: "Gammas",
      mx_cm2: "Maxwells por centímetro cuadrado",
      line_in2: "Líneas por pulgada cuadrada",
      kline_in2: "Kilolíneas por pulgada cuadrada",
    },
    sourcesUsedFor: ["Factores de conversión del gauss, la gamma y el maxwell.", "El tesla como unidad del SI de densidad de flujo magnético."],
  },
};
