import type { ConverterContent } from "../../types";

const NOT_ADVICE =
  "Este conversor solo cambia unidades. No es un consejo médico ni de protección radiológica; para límites de dosis, evaluación de la exposición o cuestiones de tratamiento, sigue las indicaciones de tu responsable de protección radiológica, tu médico o el organismo regulador.";

/** Radiology converters in this language, keyed by converter id. */
export const radiologyContent: Record<string, ConverterContent> = {
  radiation: {
    title: "Conversor de dosis de radiación",
    shortTitle: "Dosis equivalente",
    summary: "Convierte la dosis equivalente de radiación entre sieverts, milisieverts, microsieverts, rem y milirem.",
    metaTitle: "Conversor de dosis de radiación – Sv, mSv, µSv, rem, mrem",
    metaDescription: "Convierte la dosis equivalente y la dosis efectiva entre sieverts, milisieverts, microsieverts, rem y milirem con la relación exacta 1 rem = 0,01 Sv.",
    keywords: ["sievert", "rem", "msv a mrem", "mrem a msv", "microsievert", "dosis equivalente", "dosis efectiva", "dosis de radiación"],
    intro: [
      "La dosis equivalente y la dosis efectiva describen el efecto biológico de la radiación ionizante en el cuerpo. Los dosímetros personales, los informes de imagen médica y los mapas de radiación de fondo las expresan en milisieverts o microsieverts, mientras que algunas normas de EE. UU. todavía usan rem y milirem.",
      "El sievert es la unidad del SI y el rem es su equivalente antiguo: 1 rem equivale exactamente a 0,01 Sv, así que 1 mSv son 100 mrem.",
    ],
    formula: {
      expression: "Sv = rem × 0,01    mSv = mrem ÷ 100",
      explanation: "El rem se definió como la centésima parte de un sievert, así que todas las conversiones son proporciones exactas de potencias de diez.",
    },
    assumptions: [
      NOT_ADVICE,
      "Los sieverts y los grays son magnitudes distintas: los sieverts incluyen factores de ponderación según el tipo de radiación y el tejido, y los grays no. Usa el conversor de dosis absorbida para grays y rads.",
      "Las tasas de dosis (por ejemplo, µSv/h) se convierten igual, siempre que ambos lados usen la misma unidad de tiempo.",
    ],
    faqs: [
      { question: "¿Cuántos milirem son 1 milisievert?", answer: "1 mSv son exactamente 100 mrem, y 1 mrem son 0,01 mSv (10 µSv)." },
      { question: "¿Cuántos rem tiene un sievert?", answer: "1 Sv son exactamente 100 rem." },
      { question: "¿Puedo convertir sieverts a grays?", answer: "No con un factor fijo. Los sieverts ponderan la dosis absorbida en grays según el tipo de radiación y el tejido expuesto, así que la relación depende de cada situación." },
    ],
    units: {
      sv: "Sieverts",
      csv: "Centisieverts",
      msv: "Milisieverts",
      usv: "Microsieverts",
      nsv: "Nanosieverts",
      rem: "Rem",
      mrem: "Milirem",
      urem: "Microrem",
    },
    sourcesUsedFor: ["Factor de conversión del rem al sievert.", "Definición del sievert."],
  },
  "radiation-activity": {
    title: "Conversor de radiactividad",
    shortTitle: "Radiactividad",
    summary: "Convierte la actividad de una fuente radiactiva entre becquerels, curios, rutherfords y desintegraciones por segundo o por minuto.",
    metaTitle: "Conversor de radiactividad – Bq, MBq, GBq, Ci, mCi, µCi",
    metaDescription: "Convierte la radiactividad entre becquerels, kilo-, mega- y gigabecquerels, curios, milicurios, microcurios, picocurios y desintegraciones por minuto.",
    keywords: ["becquerel", "curio", "mci a mbq", "mbq a mci", "picocurio", "radiactividad", "actividad", "desintegraciones por minuto"],
    intro: [
      "La actividad es el número de átomos de una muestra radiactiva que se desintegran cada segundo. Las dosis de medicina nuclear se prescriben en megabecquerels o milicurios, el radón en las viviendas se indica en becquerels o picocurios por litro, y los contadores de laboratorio suelen mostrar desintegraciones por minuto.",
      "Un becquerel es una desintegración por segundo. El curio, basado en la actividad de un gramo de radio, está fijado en exactamente 37.000 millones de becquerels.",
    ],
    formula: {
      expression: "Bq = Ci × 3,7 × 10¹⁰    1 mCi = 37 MBq",
      explanation: "El curio se define como exactamente 3,7 × 10¹⁰ Bq, y 1 dpm es una desintegración por minuto, o 1/60 Bq.",
    },
    assumptions: [
      NOT_ADVICE,
      "La actividad mide desintegraciones, no dosis: una misma actividad puede dar dosis muy distintas según el nucleido, la distancia, el blindaje y el tiempo.",
      "Las concentraciones como Bq/m³ o pCi/L se convierten igual, siempre que ambos lados usen la misma unidad de volumen.",
    ],
    faqs: [
      { question: "¿Cuántos megabecquerels tiene un milicurio?", answer: "1 mCi son exactamente 37 MBq; 1 MBq son unos 0,027 mCi (27,03 µCi)." },
      { question: "¿Cómo convierto pCi/L a Bq/m³?", answer: "1 pCi son 0,037 Bq y 1 m³ son 1000 L, así que 1 pCi/L son 37 Bq/m³. El nivel de actuación para el radón en EE. UU., 4 pCi/L, son 148 Bq/m³." },
      { question: "¿Qué diferencia hay entre dps y dpm?", answer: "Las desintegraciones por segundo equivalen a becquerels; las desintegraciones por minuto son 60 veces más pequeñas, así que 1 Bq = 60 dpm." },
    ],
    units: {
      bq: "Becquerels",
      kbq: "Kilobecquerels",
      mbq: "Megabecquerels",
      gbq: "Gigabecquerels",
      tbq: "Terabecquerels",
      pbq: "Petabecquerels",
      kci: "Kilocurios",
      ci: "Curios",
      mci: "Milicurios",
      uci: "Microcurios",
      nci: "Nanocurios",
      pci: "Picocurios",
      rd: "Rutherfords",
      dps: "Desintegraciones por segundo",
      dpm: "Desintegraciones por minuto",
    },
    sourcesUsedFor: ["Factor de conversión del curio al becquerel.", "Definición del becquerel."],
  },
  "radiation-exposure": {
    title: "Conversor de exposición a la radiación",
    shortTitle: "Exposición a la radiación",
    summary: "Convierte la exposición a rayos X y gamma entre roentgens, milirroentgens y culombios por kilogramo.",
    metaTitle: "Conversor de exposición a la radiación – R, mR, C/kg",
    metaDescription: "Convierte la exposición a la radiación entre roentgens, milirroentgens, microrroentgens y culombios por kilogramo con la relación exacta 1 R = 2,58 × 10⁻⁴ C/kg.",
    keywords: ["roentgen", "milirroentgen", "culombio por kilogramo", "r a c/kg", "exposición a la radiación", "radiámetro", "mr/h"],
    intro: [
      "La exposición mide con qué intensidad los rayos X o gamma ionizan el aire: la carga eléctrica que liberan en cada kilogramo de aire. Los radiámetros antiguos y los instrumentos de protección civil miden en roentgens o milirroentgens por hora.",
      "El SI expresa la exposición en culombios por kilogramo. El roentgen está fijado en exactamente 2,58 × 10⁻⁴ C/kg.",
    ],
    formula: {
      expression: "C/kg = R × 2,58 × 10⁻⁴",
      explanation: "Un roentgen es la exposición que libera 2,58 × 10⁻⁴ culombios de carga por kilogramo de aire seco.",
    },
    assumptions: [
      NOT_ADVICE,
      "La exposición solo está definida para rayos X y gamma en aire. No es una dosis absorbida ni una dosis equivalente, y pasarla a grays o sieverts depende de la energía de la radiación y del material.",
      "Las tasas de exposición (por ejemplo, mR/h) se convierten igual, siempre que ambos lados usen la misma unidad de tiempo.",
    ],
    faqs: [
      { question: "¿Cuántos culombios por kilogramo son un roentgen?", answer: "Exactamente 2,58 × 10⁻⁴ C/kg, o 258 µC/kg. Un milirroentgen son 0,258 µC/kg." },
      { question: "¿Cuántos roentgens hay en 1 C/kg?", answer: "Unos 3876 R, porque 1 ÷ 0,000258 ≈ 3875,97." },
      { question: "¿Es lo mismo un roentgen que un rem o un rad?", answer: "No. Miden cosas distintas. Para rayos gamma en tejido blando, 1 R da aproximadamente de 0,0087 a 0,0096 Gy, por eso algunas reglas prácticas los tratan como parecidos, pero no hay una conversión fija." },
    ],
    units: {
      c_kg: "Culombios por kilogramo",
      mc_kg: "Miliculombios por kilogramo",
      uc_kg: "Microculombios por kilogramo",
      nc_kg: "Nanoculombios por kilogramo",
      kr: "Kilorroentgens",
      r: "Roentgens",
      mr: "Milirroentgens",
      ur: "Microrroentgens",
    },
    sourcesUsedFor: ["Factor de conversión del roentgen a culombios por kilogramo."],
  },
  "radiation-absorbed-dose": {
    title: "Conversor de dosis absorbida",
    shortTitle: "Dosis absorbida",
    summary: "Convierte la dosis de radiación absorbida entre grays, centigrays, miligrays, rads y julios por kilogramo.",
    metaTitle: "Conversor de dosis absorbida – Gy, cGy, mGy, rad",
    metaDescription: "Convierte la dosis de radiación absorbida entre grays, kilograys, centigrays, miligrays, rads, kilorads, ergios por gramo y julios por kilogramo.",
    keywords: ["gray", "rad", "gy a rad", "rad a gy", "centigray", "miligray", "dosis absorbida", "kilogray"],
    intro: [
      "La dosis absorbida es la energía que la radiación ionizante deposita en cada kilogramo de materia. Los planes de radioterapia usan grays y centigrays, los índices de dosis de TC usan miligrays, y la esterilización de alimentos y productos sanitarios usa kilograys.",
      "Un gray es un julio por kilogramo. El rad, más antiguo, es exactamente la centésima parte de un gray, así que 1 cGy equivale a 1 rad.",
    ],
    formula: {
      expression: "Gy = rad × 0,01    1 Gy = 1 J/kg",
      explanation: "El rad se definió como 100 ergios por gramo, que son exactamente 0,01 J/kg.",
    },
    assumptions: [
      NOT_ADVICE,
      "Los grays solo miden energía depositada. No son sieverts, que añaden una ponderación según el tipo de radiación y el tejido; usa el conversor de dosis de radiación para sieverts y rem.",
    ],
    faqs: [
      { question: "¿Cuántos rads tiene un gray?", answer: "1 Gy son exactamente 100 rad, y 1 rad son 0,01 Gy (1 cGy)." },
      { question: "¿Por qué los informes de radioterapia usan centigrays?", answer: "Porque 1 cGy equivale a 1 rad, los centigrays permiten a las clínicas conservar cifras conocidas: una fracción de 2 Gy son 200 cGy, o 200 rad." },
      { question: "¿Es lo mismo un gray que un sievert?", answer: "Ambos son julios por kilogramo, pero son magnitudes distintas. Un gray de radiación alfa tiene un efecto biológico mucho mayor que un gray de rayos X, y el sievert lo tiene en cuenta." },
    ],
    units: {
      gy: "Grays",
      kgy: "Kilograys",
      cgy: "Centigrays",
      mgy: "Miligrays",
      ugy: "Micrograys",
      j_kg: "Julios por kilogramo",
      krad: "Kilorads",
      rad: "Rads",
      mrad: "Milirads",
      erg_g: "Ergios por gramo",
    },
    sourcesUsedFor: ["Factores de conversión del rad y del ergio por gramo al gray.", "Definición del gray."],
  },
};
