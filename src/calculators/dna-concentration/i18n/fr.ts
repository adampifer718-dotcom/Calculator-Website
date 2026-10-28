import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaConcentrationText } from "../text/en";

const fr: CalculatorTranslation<DnaConcentrationText> = {
  content: {
    title: "Calculateur de concentration d’ADN et d’ARN",
    shortTitle: "Concentration d’ADN",
    summary: "Convertissez une absorbance A260 en concentration d’ADN ou d’ARN en ng/µL, avec le rendement total et les rapports A260/A280 et A260/A230.",
    metaTitle: "Concentration d’ADN et d’ARN – De l’A260 aux ng/µL",
    metaDescription: "Convertissez une mesure A260 en concentration d’ADN ou d’ARN en ng/µL (facteurs 50, 33 et 40 µg/mL), avec dilution, rendement total et rapports de pureté.",
    keywords: ["concentration d’ADN", "concentration d’ARN", "A260", "dosage des acides nucléiques", "rapport 260/280", "rapport 260/230", "spectrophotomètre", "ng/µL"],
    intro: [
      "Les acides nucléiques absorbent le plus fortement la lumière ultraviolette vers 260 nm. Dans la plage linéaire d’un spectrophotomètre, l’absorbance A260 est proportionnelle à la concentration : une seule mesure et un facteur de conversion donnent donc la quantité d’ADN ou d’ARN d’un échantillon.",
      "Les facteurs standard sont de 50 µg/mL par unité d’A260 pour l’ADN double brin, 33 pour l’ADN simple brin et 40 pour l’ARN, pour un trajet optique de 1 cm. Ce calculateur applique le facteur, la dilution et le trajet optique, et ajoute le rendement total ainsi que les rapports de pureté A260/A280 et A260/A230.",
    ],
    howToUse: [
      "Choisissez le type d’échantillon, ou saisissez votre propre facteur de conversion (par exemple un facteur calculé pour un oligonucléotide court).",
      "Saisissez la mesure A260 corrigée du blanc et le trajet optique de la cuve ou de l’instrument.",
      "Saisissez le facteur de dilution si vous avez dilué l’échantillon avant la mesure.",
      "Si vous le souhaitez, ajoutez A280, A230 et le volume de la solution mère pour obtenir les rapports de pureté et la quantité totale d’acide nucléique.",
    ],
    formulas: [
      { title: "Concentration", expression: "c (ng/µL) = A260 ÷ trajet optique (cm) × facteur × facteur de dilution", explanation: "Le facteur vaut 50 pour l’ADNdb, 33 pour l’ADNsb et 40 pour l’ARN, en µg/mL par unité d’absorbance à 1 cm. 1 µg/mL équivaut à 1 ng/µL." },
      { title: "Rendement total", expression: "quantité (µg) = c (ng/µL) × volume (µL) ÷ 1000", explanation: "La concentration de la solution mère non diluée multipliée par son volume." },
      { title: "Rapports de pureté", expression: "A260/A280 et A260/A230", explanation: "On cite couramment environ 1,8 (ADN) et 2,0 (ARN) pour A260/A280, et 2,0 à 2,2 pour A260/A230. Ce sont des repères empiriques, pas des limites strictes." },
    ],
    examples: [
      {
        title: "ADN plasmidique dilué dans une cuve de 1 cm",
        steps: ["0,65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL", "Dans 50 µL : 325 × 50 ÷ 1000 = 16,25 µg", "A260/A280 = 0,65 ÷ 0,36 ≈ 1,81"],
      },
      {
        title: "Un échantillon d’ARN dilué au 1/20",
        steps: ["0,42 × 40 µg/mL × 20 = 336 ng/µL", "A260/A280 = 0,42 ÷ 0,21 = 2,00", "A260/A230 = 0,42 ÷ 0,20 = 2,10", "Dans 30 µL : 336 × 30 ÷ 1000 = 10,08 µg"],
      },
      {
        title: "ADN simple brin dans une cuve de 2 mm",
        steps: ["Normalisation à 1 cm : 0,18 ÷ 0,2 = 0,9", "0,9 × 33 µg/mL × 1 = 29,7 ng/µL"],
      },
    ],
    assumptions: [
      "La mesure A260 est corrigée du blanc et se situe dans la plage linéaire de l’instrument.",
      "Les facteurs standard sont des moyennes. L’absorbance d’un oligonucléotide court dépend de sa séquence : un facteur propre à la séquence (saisi comme facteur personnalisé) est donc plus précis.",
      "L’absorbance compte tous les acides nucléiques et les nucléotides libres. De l’ARN contaminant un échantillon d’ADN, ou de l’ADN dans un échantillon d’ARN, augmente le résultat.",
      "Les rapports de pureté sont des valeurs de référence couramment citées, pas des seuils d’acceptation. Ils varient avec le pH et la force ionique de la solution ainsi qu’avec le blanc utilisé.",
    ],
    faqs: [
      { question: "Pourquoi les ng/µL sont-ils identiques aux µg/mL ?", answer: "Les deux unités multiplient le numérateur et le dénominateur par 1 000 : un microgramme vaut 1 000 nanogrammes et un millilitre vaut 1 000 microlitres. 325 µg/mL et 325 ng/µL décrivent donc la même concentration." },
      { question: "Que signifie un rapport A260/A280 faible ?", answer: "Les protéines et le phénol absorbent vers 280 nm : un rapport nettement inférieur à environ 1,8 pour l’ADN ou 2,0 pour l’ARN signale souvent ce type de contaminants. Le rapport n’indique rien sur l’intégrité de l’acide nucléique." },
      { question: "Ai-je besoin du trajet optique ?", answer: "Seulement s’il ne vaut pas 1 cm. Les facteurs supposent un trajet de 1 cm. Beaucoup d’instruments micro-volume mesurent sur un trajet plus court mais indiquent déjà l’absorbance normalisée à 1 cm ; dans ce cas, gardez la valeur par défaut de 1." },
    ],
    sourcesUsedFor: [
      "La mesure de la concentration en acides nucléiques à partir de l’absorbance à 260 nm avec les facteurs de conversion standard.",
      "Les valeurs de pureté couramment citées d’environ 1,8 (ADN) et 2,0 (ARN) pour A260/A280, et de 2,0 à 2,2 pour A260/A230.",
    ],
  },
  text: {
    type: "Type d’échantillon",
    types: {
      dsDNA: "ADN double brin (50 µg/mL par unité d’A260)",
      ssDNA: "ADN simple brin (33 µg/mL par unité d’A260)",
      rna: "ARN (40 µg/mL par unité d’A260)",
      custom: "Facteur de conversion personnalisé",
    },
    sampleNames: { dsDNA: "ADN", ssDNA: "ADN", rna: "ARN" },
    factor: "Facteur de conversion",
    factorHelp: "µg/mL d’acide nucléique donnant une absorbance de 1,0 à 260 nm sur 1 cm, par exemple une valeur calculée pour un oligonucléotide donné.",
    a260: "Absorbance à 260 nm (A260)",
    a260Help: "La mesure corrigée du blanc de l’échantillon mesuré (éventuellement dilué).",
    pathLength: "Trajet optique",
    pathLengthHelp: "1 cm pour une cuve standard. Beaucoup d’instruments micro-volume indiquent déjà des valeurs normalisées à 1 cm ; gardez alors 1.",
    dilution: "Facteur de dilution",
    dilutionHelp: "Volume total ÷ volume d’échantillon. Pour 5 µL d’échantillon dans 50 µL au total, saisissez 10. Saisissez 1 pour un échantillon non dilué.",
    a280: "Absorbance à 280 nm (A280)",
    a230: "Absorbance à 230 nm (A230)",
    optionalHelp: "Facultatif. Sert à calculer un rapport de pureté.",
    volume: "Volume d’échantillon",
    volumeHelp: "Facultatif. Volume de la solution mère non diluée, pour estimer la quantité totale qu’elle contient.",
    result: "Concentration en acide nucléique",
    caption: "A260 ÷ trajet optique × facteur de conversion × facteur de dilution",
    ugPerMl: "Même concentration en µg/mL",
    factorUsed: "Facteur de conversion utilisé",
    a260Normalized: "A260 pour un trajet de 1 cm",
    totalYield: "Quantité totale dans {volume} µL",
    ratio280: "Rapport A260/A280",
    ratio230: "Rapport A260/A230",
    notes: {
      ratio280: {
        near: "Le rapport A260/A280 de {ratio} est proche de la valeur d’environ {reference} couramment citée pour de l’{sample} pur.",
        below: "Le rapport A260/A280 de {ratio} est inférieur à la valeur d’environ {reference} couramment citée pour de l’{sample} pur. Un rapport plus faible peut signaler des protéines, du phénol ou d’autres substances qui absorbent vers 280 nm.",
        above: "Le rapport A260/A280 de {ratio} est supérieur à la valeur d’environ {reference} couramment citée pour de l’{sample} pur. Des valeurs légèrement plus élevées sont courantes ; pour l’ADN, la présence d’ARN dans l’échantillon peut augmenter le rapport.",
      },
      ratio280Generic: "À titre de référence, on cite couramment des valeurs A260/A280 d’environ 1,8 pour de l’ADN pur et d’environ 2,0 pour de l’ARN pur.",
      ratio230: "Le rapport A260/A230 de {ratio} se situe dans la plage de 2,0 à 2,2 couramment citée pour un acide nucléique pur, ou au-dessus.",
      ratio230Low: "Le rapport A260/A230 de {ratio} est inférieur à la plage de 2,0 à 2,2 couramment citée pour un acide nucléique pur. Des valeurs plus faibles peuvent signaler des sels, du phénol, des détergents ou d’autres substances qui absorbent vers 230 nm.",
      range: "L’absorbance par cm est en dehors de la plage d’environ 0,1 à 1,0, où les mesures d’un spectrophotomètre à cuve standard sont souvent moins fiables. Vérifiez la plage spécifiée de votre instrument et diluez ou concentrez l’échantillon si nécessaire.",
      general: "L’absorbance à 260 nm compte indistinctement tous les acides nucléiques et les nucléotides libres : elle ne permet donc pas de distinguer l’ADN de l’ARN. Les rapports de pureté dépendent aussi du pH et du blanc utilisé.",
    },
  },
};

export default fr;
