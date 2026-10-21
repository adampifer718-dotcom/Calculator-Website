import type { ConverterContent } from "../../types";

const CGS_NOTE =
  "As unidades CGS (gilbert, oersted, maxwell, gauss) são convertidas através das suas correspondências de definição com as unidades SI, que incluem 4π quando o sistema CGS não é racionalizado.";

/** Magnetism converters in this language, keyed by converter id. */
export const magnetismContent: Record<string, ConverterContent> = {
  "magnetomotive-force": {
    title: "Conversor de força magnetomotriz",
    shortTitle: "Força magnetomotriz",
    summary: "Converta força magnetomotriz entre amperes-espira, amperes, gilberts e abamperes-espira.",
    metaTitle: "Conversor de força magnetomotriz – At, A, Gb",
    metaDescription: "Converta força magnetomotriz entre amperes-espira, amperes, quiloamperes-espira, gilberts e abamperes-espira para bobinas, eletroímanes e circuitos magnéticos.",
    keywords: ["força magnetomotriz", "ampere-espira", "gilbert", "fmm", "gilbert para ampere-espira", "circuito magnético", "bobina"],
    intro: [
      "A força magnetomotriz (fmm) é o que faz circular o fluxo magnético num circuito magnético, tal como a tensão faz circular a corrente. Numa bobina é simplesmente a corrente multiplicada pelo número de espiras, por isso uma bobina de 200 espiras percorrida por 2 A fornece 400 amperes-espira.",
      "Textos mais antigos e alguns dados de ímanes usam a unidade CGS gilbert. Um gilbert equivale a 10/(4π), cerca de 0,796, amperes-espira.",
    ],
    formula: {
      expression: "F = N × I\n1 Gb = 10 ÷ (4π) At ≈ 0,795775 At",
      explanation: "N é o número de espiras e I a corrente; as espiras não têm unidade, por isso a unidade SI da fmm é o ampere.",
    },
    assumptions: [
      "O ampere-espira e o ampere são a mesma unidade SI; o nome ampere-espira apenas lembra que as espiras foram contadas.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Quantos amperes-espira tem um gilbert?", answer: "Cerca de 0,795775 At. No sentido inverso, 1 At corresponde a cerca de 1,256637 Gb (4π/10)." },
      { question: "Qual é a fmm de uma bobina?", answer: "Multiplique a corrente pelo número de espiras. 500 espiras percorridas por 0,3 A dão 150 amperes-espira." },
      { question: "Como se relaciona a força magnetomotriz com a intensidade do campo?", answer: "A intensidade do campo H é a fmm por unidade de comprimento do circuito magnético, por isso 150 At distribuídos por 0,1 m de núcleo dão 1500 A/m." },
    ],
    units: {
      a: "Amperes",
      ma: "Miliamperes",
      ka: "Quiloamperes",
      at: "Amperes-espira",
      mat: "Miliamperes-espira",
      kat: "Quiloamperes-espira",
      gilbert: "Gilberts",
      abat: "Abamperes-espira",
    },
    sourcesUsedFor: ["Fatores de conversão do gilbert e do abampere.", "O ampere como unidade SI de força magnetomotriz."],
  },
  "magnetic-field-strength": {
    title: "Conversor de intensidade de campo magnético",
    shortTitle: "Intensidade de campo magnético",
    summary: "Converta a intensidade do campo magnético (H) entre amperes por metro, amperes-espira por polegada ou por centímetro e oersteds.",
    metaTitle: "Conversor de intensidade de campo magnético – A/m, Oe, kOe",
    metaDescription: "Converta a intensidade do campo magnético H entre A/m, kA/m, A/cm, amperes-espira por polegada, oersteds e quilo-oersteds. Gauss e tesla estão noutro conversor.",
    keywords: ["intensidade de campo magnético", "oersted para a/m", "a/m para oersted", "koe para ka/m", "campo h", "coercividade", "amperes-espira por polegada"],
    intro: [
      "A intensidade do campo magnético, representada por H, descreve o efeito magnetizante das correntes. É o que uma bobina produz por metro do seu comprimento, e é a forma como os fabricantes de ímanes indicam a coercividade, por exemplo um íman de neodímio com cerca de 950 kA/m (cerca de 12 kOe).",
      "A unidade SI é o ampere por metro. A unidade CGS é o oersted, e 1 Oe equivale a 1000/(4π), cerca de 79,58, A/m.",
    ],
    formula: {
      expression: "H = N × I ÷ l\n1 Oe = 1000 ÷ (4π) A/m ≈ 79,5775 A/m",
      explanation: "N × I são os amperes-espira da bobina e l é o comprimento do circuito magnético em metros.",
    },
    assumptions: [
      "H (intensidade do campo) e B (densidade de fluxo) são grandezas diferentes, por isso o gauss e o tesla não estão disponíveis aqui. No vazio, e só aí, 1 Oe de H corresponde a 1 G de B em unidades CGS, razão pela qual são frequentemente confundidos; dentro do ferro ou de um íman, a razão B/H depende do material.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Quantos A/m tem um oersted?", answer: "Cerca de 79,5775 A/m. No sentido inverso, 1 kA/m corresponde a cerca de 12,566 Oe (4π)." },
      { question: "Um oersted é o mesmo que um gauss?", answer: "Não. O oersted mede a intensidade do campo H e o gauss mede a densidade de fluxo B. Só no vazio (e, aproximadamente, no ar) um campo de 1 Oe produz uma densidade de fluxo de 1 G em unidades CGS. Utilize o conversor de densidade de fluxo magnético para gauss e tesla." },
      { question: "Como converto kOe em kA/m para a coercividade de um íman?", answer: "Multiplique por cerca de 79,58. Uma coercividade de 12 kOe corresponde a cerca de 955 kA/m." },
    ],
    units: {
      a_m: "Amperes por metro",
      ma_m: "Miliamperes por metro",
      ka_m: "Quiloamperes por metro",
      a_cm: "Amperes por centímetro",
      a_mm: "Amperes por milímetro",
      at_m: "Amperes-espira por metro",
      at_cm: "Amperes-espira por centímetro",
      at_in: "Amperes-espira por polegada",
      oe: "Oersteds",
      koe: "Quilo-oersteds",
      moe: "Mili-oersteds",
      gb_cm: "Gilberts por centímetro",
    },
    sourcesUsedFor: ["Fator de conversão do oersted.", "O ampere por metro como unidade SI de intensidade do campo magnético."],
  },
  "magnetic-flux": {
    title: "Conversor de fluxo magnético",
    shortTitle: "Fluxo magnético",
    summary: "Converta fluxo magnético entre webers, miliwebers, microwebers, volts-segundo, maxwells e linhas.",
    metaTitle: "Conversor de fluxo magnético – Wb, mWb, µWb, Mx",
    metaDescription: "Converta fluxo magnético entre webers, miliwebers, microwebers, nanowebers, volts-segundo, teslas-metro quadrado, maxwells, quilomaxwells e linhas.",
    keywords: ["fluxo magnético", "weber", "maxwell", "weber para maxwell", "volt-segundo", "fluxo ligado", "fluxímetro"],
    intro: [
      "O fluxo magnético é a quantidade total de campo magnético que atravessa uma superfície: a densidade de fluxo multiplicada pela área. É o que medem um fluxímetro e uma bobina de prova, e é o que varia quando um transformador ou um gerador induz uma tensão.",
      "A unidade SI é o weber, igual a um volt-segundo. A unidade CGS é o maxwell, também chamado linha, e 1 Wb equivale exatamente a 100 000 000 Mx.",
    ],
    formula: {
      expression: "Φ = B × A\n1 Wb = 1 V·s = 1 T·m² = 10⁸ Mx",
      explanation: "B é a densidade de fluxo em tesla e A a área em metros quadrados, para um campo perpendicular à superfície.",
    },
    assumptions: [
      "Os valores são o fluxo através de uma superfície, não a densidade de fluxo; para converter tesla ou gauss, utilize o conversor de densidade de fluxo magnético.",
      "1 maxwell = 10⁻⁸ Wb exatamente, pelas definições das unidades CGS e SI; uma linha é o mesmo que um maxwell.",
    ],
    faqs: [
      { question: "Quantos maxwells tem um weber?", answer: "Exatamente 100 000 000 (10⁸). Um maxwell equivale a 10 nWb." },
      { question: "Porque é que um weber é igual a um volt-segundo?", answer: "Pela lei de Faraday, um fluxo que varia 1 Wb em cada segundo através de uma única espira induz 1 V." },
      { question: "Como obtenho o fluxo a partir da densidade de fluxo?", answer: "Multiplique pela área. Um campo de 0,5 T através de 20 cm² (0,002 m²) dá 1 mWb, ou 100 000 Mx." },
    ],
    units: {
      wb: "Webers",
      mwb: "Miliwebers",
      uwb: "Microwebers",
      nwb: "Nanowebers",
      v_s: "Volts-segundo",
      t_m2: "Teslas-metro quadrado",
      mx: "Maxwells",
      kmx: "Quilomaxwells",
      g_cm2: "Gauss-centímetro quadrado",
      line: "Linhas",
    },
    sourcesUsedFor: ["Fator de conversão do maxwell.", "O weber como unidade SI de fluxo magnético."],
  },
  "magnetic-flux-density": {
    title: "Conversor de densidade de fluxo magnético",
    shortTitle: "Densidade de fluxo magnético",
    summary: "Converta a densidade de fluxo magnético (B) entre tesla, militesla, microtesla, gauss, miligauss, gama e linhas por polegada quadrada.",
    metaTitle: "Conversor de densidade de fluxo magnético – T, mT, G, mG",
    metaDescription: "Converta a densidade de fluxo magnético B entre tesla, mT, µT, nT, gauss, quilogauss, miligauss, gama e linhas por polegada quadrada. Os oersteds são à parte.",
    keywords: ["densidade de fluxo magnético", "tesla para gauss", "gauss para tesla", "miligauss", "microtesla", "campo magnético", "indução magnética", "gama nT"],
    intro: [
      "A densidade de fluxo magnético, representada por B e também chamada indução magnética, é o que normalmente se entende por intensidade de um campo magnético. É o que leem os gaussímetros e os magnetómetros dos telemóveis, é a grandeza que classifica os aparelhos de ressonância magnética (1,5 T ou 3 T), e os medidores de campos eletromagnéticos mostram-na em miligauss ou microtesla.",
      "A unidade SI é o tesla e a unidade CGS é o gauss: 1 T equivale exatamente a 10 000 G. O campo da Terra à superfície é de aproximadamente 25–65 µT, ou 0,25–0,65 G.",
    ],
    formula: {
      expression: "1 T = 1 Wb/m² = 10 000 G\n1 G = 1 Mx/cm² = 100 µT",
      explanation: "A densidade de fluxo é o fluxo magnético por unidade de área perpendicular ao campo.",
    },
    assumptions: [
      "B (densidade de fluxo) e H (intensidade do campo) são grandezas diferentes, por isso os oersteds e os A/m não estão disponíveis aqui. Só no vazio, em unidades CGS, 1 G de B corresponde a 1 Oe de H; nos materiais magnéticos, a razão depende da permeabilidade do material.",
      "O gama (γ) usado em geofísica equivale exatamente a 1 nT.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Quantos gauss tem um tesla?", answer: "Exatamente 10 000. Um gauss equivale a 100 µT, e um miligauss a 0,1 µT (100 nT)." },
      { question: "Qual é a intensidade do campo magnético da Terra?", answer: "Cerca de 25 a 65 µT à superfície, conforme o local, ou seja, 0,25 a 0,65 G." },
      { question: "Posso converter gauss em oersted?", answer: "Em geral, não, porque medem coisas diferentes. No vazio ou no ar, em unidades CGS, um campo de 1 Oe dá uma densidade de fluxo de 1 G; dentro do ferro ou de um íman, os valores diferem. Utilize o conversor de intensidade de campo magnético para os oersteds." },
    ],
    units: {
      t: "Teslas",
      mt: "Militeslas",
      ut: "Microteslas",
      nt: "Nanoteslas",
      wb_m2: "Webers por metro quadrado",
      gauss: "Gauss",
      kgauss: "Quilogauss",
      mgauss: "Miligauss",
      gamma: "Gamas",
      mx_cm2: "Maxwells por centímetro quadrado",
      line_in2: "Linhas por polegada quadrada",
      kline_in2: "Quilolinhas por polegada quadrada",
    },
    sourcesUsedFor: ["Fatores de conversão do gauss, do gama e do maxwell.", "O tesla como unidade SI de densidade de fluxo magnético."],
  },
};
