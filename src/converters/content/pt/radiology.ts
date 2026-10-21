import type { ConverterContent } from "../../types";

const NOT_ADVICE =
  "Este conversor apenas muda de unidades. Não constitui aconselhamento médico nem de proteção radiológica; para limites de dose, avaliação da exposição ou questões de tratamento, siga as indicações do responsável pela proteção radiológica, do seu médico ou da autoridade reguladora.";

/** Radiology converters in this language, keyed by converter id. */
export const radiologyContent: Record<string, ConverterContent> = {
  radiation: {
    title: "Conversor de dose de radiação",
    shortTitle: "Dose equivalente",
    summary: "Converta a dose equivalente de radiação entre sieverts, milisieverts, microsieverts, rem e milirem.",
    metaTitle: "Conversor de dose de radiação – Sv, mSv, µSv, rem, mrem",
    metaDescription: "Converta a dose equivalente e a dose efetiva entre sieverts, milisieverts, microsieverts, rem e milirem, com a relação exata 1 rem = 0,01 Sv.",
    keywords: ["sievert", "rem", "msv para mrem", "mrem para msv", "microsievert", "dose equivalente", "dose efetiva", "dose de radiação"],
    intro: [
      "A dose equivalente e a dose efetiva descrevem o efeito biológico da radiação ionizante no organismo. Os dosímetros pessoais, os relatórios de imagiologia médica e os mapas de radiação de fundo indicam-nas em milisieverts ou microsieverts, enquanto alguns regulamentos dos EUA ainda usam rem e milirem.",
      "O sievert é a unidade SI e o rem é a sua equivalente mais antiga: 1 rem corresponde exatamente a 0,01 Sv, por isso 1 mSv corresponde a 100 mrem.",
    ],
    formula: {
      expression: "Sv = rem × 0,01    mSv = mrem ÷ 100",
      explanation: "O rem foi definido como a centésima parte de um sievert, por isso todas as conversões são razões exatas entre potências de dez.",
    },
    assumptions: [
      NOT_ADVICE,
      "Os sieverts e os grays são grandezas diferentes: os sieverts incluem fatores de ponderação para o tipo de radiação e o tecido, os grays não. Use o conversor de dose absorvida para grays e rads.",
      "As taxas de dose (por exemplo µSv/h) convertem-se da mesma forma, desde que ambos os lados usem a mesma unidade de tempo.",
    ],
    faqs: [
      { question: "Quantos milirem tem 1 milisievert?", answer: "1 mSv corresponde exatamente a 100 mrem, e 1 mrem a 0,01 mSv (10 µSv)." },
      { question: "Quantos rem tem um sievert?", answer: "1 Sv corresponde exatamente a 100 rem." },
      { question: "Posso converter sieverts em grays?", answer: "Não com um fator fixo. Os sieverts ponderam a dose absorvida em grays pelo tipo de radiação e pelo tecido exposto, por isso a relação depende da situação." },
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
    sourcesUsedFor: ["Fator de conversão do rem para o sievert.", "Definição do sievert."],
  },
  "radiation-activity": {
    title: "Conversor de radioatividade",
    shortTitle: "Radioatividade",
    summary: "Converta a atividade de uma fonte radioativa entre becquerels, curies, rutherfords e desintegrações por segundo ou por minuto.",
    metaTitle: "Conversor de radioatividade – Bq, MBq, GBq, Ci, mCi, µCi",
    metaDescription: "Converta a radioatividade entre becquerels, quilo-, mega- e gigabecquerels, curies, milicuries, microcuries, picocuries e desintegrações por minuto.",
    keywords: ["becquerel", "curie", "mci para mbq", "mbq para mci", "picocurie", "radioatividade", "atividade", "desintegrações por minuto"],
    intro: [
      "A atividade é o número de átomos de uma amostra radioativa que decaem em cada segundo. As doses de medicina nuclear são prescritas em megabecquerels ou milicuries, o radão nas habitações é indicado em becquerels ou picocuries por litro, e os contadores de laboratório mostram muitas vezes desintegrações por minuto.",
      "Um becquerel é um decaimento por segundo. O curie, baseado na atividade de um grama de rádio, está fixado em exatamente 37 mil milhões de becquerels.",
    ],
    formula: {
      expression: "Bq = Ci × 3,7 × 10¹⁰    1 mCi = 37 MBq",
      explanation: "O curie está definido como exatamente 3,7 × 10¹⁰ Bq, e 1 dpm é um decaimento por minuto, ou 1/60 Bq.",
    },
    assumptions: [
      NOT_ADVICE,
      "A atividade mede decaimentos, não dose: a mesma atividade pode dar doses muito diferentes consoante o nuclídeo, a distância, a blindagem e o tempo.",
      "As concentrações como Bq/m³ ou pCi/L convertem-se da mesma forma, desde que ambos os lados usem a mesma unidade de volume.",
    ],
    faqs: [
      { question: "Quantos megabecquerels tem um milicurie?", answer: "1 mCi corresponde exatamente a 37 MBq; 1 MBq corresponde a cerca de 0,027 mCi (27,03 µCi)." },
      { question: "Como converto pCi/L em Bq/m³?", answer: "1 pCi corresponde a 0,037 Bq e 1 m³ a 1000 L, por isso 1 pCi/L corresponde a 37 Bq/m³. O nível de ação para o radão nos EUA, de 4 pCi/L, corresponde a 148 Bq/m³." },
      { question: "Qual é a diferença entre dps e dpm?", answer: "As desintegrações por segundo são iguais aos becquerels; as desintegrações por minuto são 60 vezes mais pequenas, por isso 1 Bq = 60 dpm." },
    ],
    units: {
      bq: "Becquerels",
      kbq: "Quilobecquerels",
      mbq: "Megabecquerels",
      gbq: "Gigabecquerels",
      tbq: "Terabecquerels",
      pbq: "Petabecquerels",
      kci: "Quilocuries",
      ci: "Curies",
      mci: "Milicuries",
      uci: "Microcuries",
      nci: "Nanocuries",
      pci: "Picocuries",
      rd: "Rutherfords",
      dps: "Desintegrações por segundo",
      dpm: "Desintegrações por minuto",
    },
    sourcesUsedFor: ["Fator de conversão do curie para o becquerel.", "Definição do becquerel."],
  },
  "radiation-exposure": {
    title: "Conversor de exposição à radiação",
    shortTitle: "Exposição à radiação",
    summary: "Converta a exposição a raios X e gama entre roentgens, miliroentgens e coulombs por quilograma.",
    metaTitle: "Conversor de exposição à radiação – R, mR, C/kg",
    metaDescription: "Converta a exposição à radiação entre roentgens, miliroentgens, microroentgens e coulombs por quilograma, com a relação exata 1 R = 2,58 × 10⁻⁴ C/kg.",
    keywords: ["roentgen", "miliroentgen", "coulomb por quilograma", "r para c/kg", "exposição à radiação", "medidor de radiação", "mr/h"],
    intro: [
      "A exposição mede a intensidade com que os raios X ou gama ionizam o ar: a carga elétrica que libertam em cada quilograma de ar. Os medidores de radiação mais antigos e os instrumentos de proteção civil indicam roentgens ou miliroentgens por hora.",
      "O SI exprime a exposição em coulombs por quilograma. O roentgen está fixado em exatamente 2,58 × 10⁻⁴ C/kg.",
    ],
    formula: {
      expression: "C/kg = R × 2,58 × 10⁻⁴",
      explanation: "Um roentgen é a exposição que liberta 2,58 × 10⁻⁴ coulombs de carga por quilograma de ar seco.",
    },
    assumptions: [
      NOT_ADVICE,
      "A exposição só está definida para raios X e gama no ar. Não é uma dose absorvida nem uma dose equivalente, e a sua conversão em grays ou sieverts depende da energia da radiação e do material.",
      "As taxas de exposição (por exemplo mR/h) convertem-se da mesma forma, desde que ambos os lados usem a mesma unidade de tempo.",
    ],
    faqs: [
      { question: "Quantos coulombs por quilograma tem um roentgen?", answer: "Exatamente 2,58 × 10⁻⁴ C/kg, ou 258 µC/kg. Um miliroentgen corresponde a 0,258 µC/kg." },
      { question: "Quantos roentgens tem 1 C/kg?", answer: "Cerca de 3876 R, porque 1 ÷ 0,000258 ≈ 3875,97." },
      { question: "Um roentgen é o mesmo que um rem ou um rad?", answer: "Não. Medem coisas diferentes. Para raios gama em tecidos moles, 1 R dá aproximadamente 0,0087 a 0,0096 Gy, razão pela qual algumas regras práticas os tratam como semelhantes, mas não existe uma conversão fixa." },
    ],
    units: {
      c_kg: "Coulombs por quilograma",
      mc_kg: "Milicoulombs por quilograma",
      uc_kg: "Microcoulombs por quilograma",
      nc_kg: "Nanocoulombs por quilograma",
      kr: "Quiloroentgens",
      r: "Roentgens",
      mr: "Miliroentgens",
      ur: "Microroentgens",
    },
    sourcesUsedFor: ["Fator de conversão do roentgen para coulombs por quilograma."],
  },
  "radiation-absorbed-dose": {
    title: "Conversor de dose absorvida",
    shortTitle: "Dose absorvida",
    summary: "Converta a dose de radiação absorvida entre grays, centigrays, miligrays, rads e joules por quilograma.",
    metaTitle: "Conversor de dose absorvida – Gy, cGy, mGy, rad",
    metaDescription: "Converta a dose de radiação absorvida entre grays, quilograys, centigrays, miligrays, rads, quilorads, ergs por grama e joules por quilograma.",
    keywords: ["gray", "rad", "gy para rad", "rad para gy", "centigray", "miligray", "dose absorvida", "quilogray"],
    intro: [
      "A dose absorvida é a energia que a radiação ionizante deposita em cada quilograma de matéria. Os planos de radioterapia usam grays e centigrays, os índices de dose de TC usam miligrays, e a esterilização de alimentos e de dispositivos médicos usa quilograys.",
      "Um gray é um joule por quilograma. O antigo rad é exatamente a centésima parte de um gray, por isso 1 cGy é igual a 1 rad.",
    ],
    formula: {
      expression: "Gy = rad × 0,01    1 Gy = 1 J/kg",
      explanation: "O rad foi definido como 100 ergs por grama, o que corresponde exatamente a 0,01 J/kg.",
    },
    assumptions: [
      NOT_ADVICE,
      "Os grays medem apenas a energia depositada. Não são sieverts, que acrescentam uma ponderação para o tipo de radiação e o tecido; use o conversor de dose de radiação para sieverts e rem.",
    ],
    faqs: [
      { question: "Quantos rads tem um gray?", answer: "1 Gy corresponde exatamente a 100 rad, e 1 rad a 0,01 Gy (1 cGy)." },
      { question: "Porque é que os relatórios de radioterapia usam centigrays?", answer: "Como 1 cGy é igual a 1 rad, os centigrays permitem às clínicas manter números familiares: uma fração de 2 Gy corresponde a 200 cGy, ou 200 rad." },
      { question: "Um gray é o mesmo que um sievert?", answer: "Ambos são joules por quilograma, mas são grandezas diferentes. Um gray de radiação alfa tem um efeito biológico muito maior do que um gray de raios X, e o sievert tem isso em conta." },
    ],
    units: {
      gy: "Grays",
      kgy: "Quilograys",
      cgy: "Centigrays",
      mgy: "Miligrays",
      ugy: "Micrograys",
      j_kg: "Joules por quilograma",
      krad: "Quilorads",
      rad: "Rads",
      mrad: "Milirads",
      erg_g: "Ergs por grama",
    },
    sourcesUsedFor: ["Fatores de conversão do rad e do erg por grama para o gray.", "Definição do gray."],
  },
};
