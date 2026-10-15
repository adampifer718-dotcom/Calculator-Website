import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PlantSpacingText } from "../text/en";

const fr: CalculatorTranslation<PlantSpacingText> = {
  content: {
    title: "Calculateur d’espacement des plantations",
    shortTitle: "Espacement des plantations",
    summary: "Comptez combien de plants tiennent dans une planche rectangulaire pour un espacement donné, en rangs droits ou en quinconce.",
    metaTitle: "Calculateur d’espacement des plantations – Plants par planche",
    metaDescription: "Calculez combien de plants tiennent dans une planche de potager selon l’espacement sur le rang et entre les rangs, en carré ou en quinconce, et la densité par m² ou ft².",
    keywords: ["espacement des plantations", "distance de plantation", "combien de plants", "plantation en quinconce", "plan de potager", "espacement entre les rangs", "densité de plantation"],
    intro: [
      "Les sachets de graines et les étiquettes de plants indiquent un espacement recommandé. Le traduire en nombre de plants pour une planche donnée relève de l’arithmétique simple, mais on oublie facilement que les plants du bord ont eux aussi besoin de place.",
      "Ce calculateur place chaque plant à au moins un demi-espacement du bord de la planche, afin que les plants en bordure disposent du même espace que ceux du milieu. Il fonctionne pour les rangs droits et pour la disposition en quinconce (triangulaire), où chaque rang est décalé d’un demi-espacement.",
    ],
    howToUse: [
      "Choisissez l’unité et saisissez la longueur et la largeur de la planche.",
      "Choisissez des rangs droits ou une disposition en quinconce.",
      "Saisissez l’espacement entre les plants et, pour les rangs, l’espacement entre les rangs.",
      "Lisez le nombre de plants qui tiennent, la densité de plantation et la disposition des rangs.",
    ],
    formulas: [
      { title: "Rangs droits", expression: "plants = ⌊L ÷ s⌋ × ⌊W ÷ r⌋", explanation: "L et W sont la longueur et la largeur de la planche, s l’espacement sur le rang et r l’espacement entre les rangs. Avec un demi-espacement libre à chaque bord, un rang de longueur L contient ⌊L ÷ s⌋ plants." },
      { title: "Rangs en quinconce", expression: "h = s × √3 ÷ 2\nrangs = ⌊(W − s) ÷ h⌋ + 1 (0 si W < s)", explanation: "Chaque plant est à la même distance s de ses voisins : les rangs ne sont donc espacés que d’environ 0,866 s." },
      { title: "Plants en quinconce", expression: "rangs complets : ⌊L ÷ s⌋ plants\nrangs décalés : max(0, ⌊L ÷ s − 0,5⌋) plants", explanation: "Les rangs alternent, en commençant par un rang complet ; les rangs décalés le sont d’un demi-espacement et peuvent compter un plant de moins." },
      { title: "Densité", expression: "densité = plants ÷ (L × W)", explanation: "Affichée par mètre carré en unités métriques et par pied carré en unités américaines." },
    ],
    examples: [
      { title: "Poivrons dans une planche de 12 ft × 4 ft, à 18 in d’écart en rangs espacés de 2 ft", steps: ["Plants par rang : ⌊12 ÷ 1,5⌋ = 8", "Rangs : ⌊4 ÷ 2⌋ = 2", "Total : 8 × 2 = 16 plants, soit 16 ÷ 48 ft² ≈ 0,33 par ft²"] },
      {
        title: "Laitues dans une planche de 300 cm × 120 cm, en quinconce à 40 cm",
        steps: [
          "Écart entre les rangs : 40 × √3 ÷ 2 ≈ 34,64 cm",
          "Rangs : ⌊(120 − 40) ÷ 34,64⌋ + 1 = 2 + 1 = 3",
          "Rangs complets : ⌊300 ÷ 40⌋ = 7 ; rang décalé : ⌊7,5 − 0,5⌋ = 7",
          "Total : 2 × 7 + 1 × 7 = 21 plants",
        ],
      },
      { title: "Carottes dans un bac de 48 in × 24 in, à 3 in d’écart dans les deux sens", steps: ["Plants par rang : ⌊48 ÷ 3⌋ = 16", "Rangs : ⌊24 ÷ 3⌋ = 8", "Total : 16 × 8 = 128 plants sur 8 ft², soit 16 par ft²"] },
    ],
    assumptions: [
      "La planche est un rectangle sans allée, bordure ni obstacle à l’intérieur. Ne mesurez que la surface plantée.",
      "Les plants sont à au moins un demi-espacement de chaque bord, si bien que les planches ou allées voisines se partagent l’écart. Si votre planche est contre un mur, vous pourrez peut-être y loger quelques plants de plus.",
      "Les rangs suivent la longueur de la planche. Les espacements recommandés varient selon la variété, le sol et le climat ; suivez le sachet de graines ou les conseils locaux en horticulture.",
      "Les nombres correspondent à la disposition finale des plants. Semez davantage puis éclaircissez, ou achetez quelques plants de réserve, pour compenser les pertes.",
    ],
    faqs: [
      { question: "La plantation en quinconce permet-elle de loger plus de plants ?", answer: "Dans les grandes planches, oui : à espacement égal, elle loge environ 15 % de plants en plus, car les rangs sont plus rapprochés. Dans les petites planches, les rangs décalés peuvent perdre un plant en bout de rang, si bien que le gain peut être plus faible, voire négatif." },
      { question: "Pourquoi laisser une marge sur les bords ?", answer: "Un plant a besoin d’espace de tous les côtés. Laisser un demi-espacement libre à chaque bord donne aux plants de bordure autant de place qu’aux autres, et deux planches côte à côte se retrouvent à un espacement complet l’une de l’autre." },
      { question: "Que signifie le nombre de plants par pied carré ?", answer: "C’est le nombre de plants divisé par la surface de la planche. Il sert à comparer des dispositions ou à utiliser les tableaux du jardinage en carrés (square-foot gardening), qui indiquent un nombre de plants par pied carré." },
    ],
    sourcesUsedFor: ["Notions de base sur l’espacement égal (en bloc) des plants et des rangs dans les planches de potager."],
  },
  text: {
    unit: "Unité",
    units: { m: "m", cm: "cm", ft: "ft", in: "in" },
    length: "Longueur de la planche",
    width: "Largeur de la planche",
    pattern: "Disposition des plants",
    patterns: { grid: "En rangs (grille carrée)", triangular: "En quinconce (décalée)" },
    spacing: "Espacement entre les plants",
    spacingHelp: "La distance recommandée entre les plants, indiquée sur le sachet de graines ou l’étiquette.",
    rowSpacing: "Espacement entre les rangs",
    errors: { tooMany: "Cet espacement est trop petit pour la planche : il donnerait plus d’un milliard de plants." },
    plants: "Plants qui tiennent",
    caption: "Chaque plant est placé à au moins un demi-espacement de chaque bord de la planche.",
    rows: "Rangs",
    perRow: "Plants par rang",
    perRowOffset: "Plants par rang (complet / décalé)",
    perRowOffsetValue: "{full} / {offset}",
    bedArea: "Surface de la planche",
    densityMetric: "Plants par mètre carré",
    densityImperial: "Plants par pied carré",
    notes: {
      tooSmall: "La planche est trop petite pour cet espacement : aucun plant ne tient avec un demi-espacement libre à chaque bord.",
      triangular: "En quinconce, chaque rang est décalé d’un demi-espacement, et les rangs sont distants de 0,866 (√3/2) espacement.",
    },
  },
};

export default fr;
