import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StairsText } from "../text/en";

const fr: CalculatorTranslation<StairsText> = {
  content: {
    title: "Calculateur d’escalier",
    shortTitle: "Escalier",
    summary: "Calculez le nombre de marches, la hauteur de marche, le reculement total, l’angle de l’escalier et la longueur du limon à partir de la hauteur d’étage, avec un contrôle de confort 2H + G.",
    metaTitle: "Calculateur d’escalier – Marches, giron, reculement et limon",
    metaDescription: "Trouvez le nombre de marches selon la hauteur totale, avec la hauteur de marche, le reculement, l’angle, le limon et un contrôle 2H + G, en pouces ou en cm.",
    keywords: ["calcul escalier", "nombre de marches", "hauteur de marche", "giron escalier", "longueur du limon", "angle d’escalier", "formule de Blondel", "dimensions escalier"],
    intro: [
      "Un escalier divise la hauteur entre deux niveaux en marches égales. Chaque marche a une hauteur (la contremarche) et une profondeur (le giron). Le nombre de contremarches dépend de la hauteur totale et de la hauteur de marche maximale que vous acceptez ; il y a toujours un giron de moins que de contremarches, car la dernière marche est le plancher de l’étage lui-même.",
      "Saisissez la hauteur d’étage, la hauteur de marche maximale et le giron pour obtenir le nombre de marches, la hauteur de marche exacte, le reculement total, l’angle de l’escalier et la longueur de la diagonale du limon, avec le contrôle de confort traditionnel 2H + G. Les valeurs par défaut sont les limites de l’International Residential Code (code résidentiel américain), mais la réglementation qui s’applique chez vous peut être différente.",
    ],
    howToUse: [
      "Choisissez les pouces ou les centimètres.",
      "Mesurez la hauteur totale du sol fini du bas jusqu’au sol fini du haut.",
      "Vérifiez la hauteur de marche maximale et le giron. Les valeurs par défaut sont celles de l’International Residential Code : 7¾ in de hauteur de marche maximale et 10 in de giron minimal.",
      "Saisissez éventuellement une hauteur de marche visée, ainsi que l’espace horizontal disponible pour vérifier si l’escalier y tient.",
      "Lisez le nombre de contremarches et la disposition, puis vérifiez le tout par rapport à la réglementation de construction locale.",
    ],
    formulas: [
      { title: "Nombre de contremarches", expression: "n = ⌈hauteur totale ÷ hauteur de marche maximale⌉", explanation: "Avec une hauteur de marche visée, n est le nombre entier le plus proche de hauteur totale ÷ hauteur visée." },
      { title: "Hauteur de marche et girons", expression: "hauteur de marche = hauteur totale ÷ n ; girons = n − 1", explanation: "Toutes les contremarches ont la même hauteur." },
      { title: "Reculement total et angle", expression: "reculement = girons × giron ; angle = arctan(hauteur de marche ÷ giron)", explanation: "Le reculement se mesure de nez de marche à nez de marche, sans palier." },
      { title: "Diagonale du limon", expression: "limon = √(hauteur totale² + reculement total²)", explanation: "La ligne droite du bas jusqu’en haut de la volée." },
      { title: "Règle empirique de confort", expression: "24 in ≤ 2 × hauteur de marche + giron ≤ 25 in", explanation: "Environ 61 à 63,5 cm. Une recommandation traditionnelle pour une foulée confortable, pas une règle de la réglementation." },
    ],
    examples: [
      {
        title: "108 in d’étage à étage avec les valeurs par défaut de l’IRC",
        steps: [
          "n = ⌈108 ÷ 7,75⌉ = ⌈13,94⌉ = 14 contremarches",
          "Hauteur de marche = 108 ÷ 14 ≈ 7,714 in ; 13 girons de 10 in donnent un reculement de 130 in",
          "Angle = arctan(7,714 ÷ 10) ≈ 37,6° ; limon = √(108² + 130²) ≈ 169,01 in",
          "2H + G ≈ 25,43 in, un peu au-dessus de la plage de confort de 24 à 25 in",
        ],
      },
      {
        title: "Hauteur de 252 cm avec des girons de 24 cm",
        steps: [
          "n = ⌈252 ÷ 19,6⌉ = ⌈12,86⌉ = 13 contremarches",
          "Hauteur de marche = 252 ÷ 13 ≈ 19,385 cm ; 12 girons donnent un reculement de 288 cm",
          "2H + G ≈ 62,77 cm ≈ 24,71 in, dans la plage de confort",
        ],
      },
      {
        title: "Hauteur de 100 in, marches de 7 in visées, dans un espace de 130 in",
        steps: [
          "n = arrondi(100 ÷ 7) = arrondi(14,29) = 14 contremarches d’environ 7,143 in",
          "13 girons × 10,5 in = 136,5 in de reculement, soit 6,5 in de plus que l’espace disponible",
          "2H + G ≈ 24,79 in, dans la plage de confort",
        ],
      },
    ],
    assumptions: [
      "Il s’agit d’une estimation géométrique pour une seule volée droite à marches égales. Les paliers, les marches balancées, les escaliers hélicoïdaux et l’épaisseur des marches ne sont pas pris en compte.",
      "Les réglementations de construction varient selon le territoire et évoluent dans le temps, et elles portent sur bien plus que les dimensions des marches : échappée, largeur, mains courantes, garde-corps, nez de marche et écart toléré entre les marches. Les valeurs par défaut sont tirées de l’International Residential Code uniquement comme point de départ ; vérifiez la réglementation qui s’applique là où vous construisez.",
      "Le résultat n’a pas été vérifié par un professionnel et ne constitue pas un conseil de sécurité ni d’ingénierie. Les escaliers sont une cause fréquente de chutes : faites vérifier le projet par le service d’urbanisme compétent ou par un professionnel qualifié avant de construire.",
      "La hauteur totale doit être mesurée entre les surfaces de sol finies. Changer de revêtement de sol par la suite modifie la hauteur de la première et de la dernière marche.",
    ],
    faqs: [
      { question: "Combien de marches faut-il pour une hauteur de 9 ft (108 in) ?", answer: "Avec une hauteur de marche maximale de 7¾ in, il faut ⌈108 ÷ 7,75⌉ = 14 contremarches d’environ 7,71 in chacune, et 13 girons. Une hauteur de marche maximale plus faible donne des marches plus nombreuses et plus basses, et un escalier plus long." },
      { question: "Pourquoi y a-t-il moins de girons que de contremarches ?", answer: "La dernière contremarche vous amène sur le plancher de l’étage, qui sert de marche du haut. Une volée de 14 contremarches a donc 13 girons, et le reculement total vaut 13 girons." },
      { question: "Qu’est-ce que la règle 2H + G ?", answer: "C’est une recommandation de confort traditionnelle : deux hauteurs de marche plus un giron doivent donner environ 24 à 25 in (61 à 63,5 cm), soit à peu près la longueur d’une foulée confortable. Ce n’est pas une exigence réglementaire, mais les escaliers qui s’en écartent nettement sont souvent inconfortables." },
    ],
    sourcesUsedFor: [
      "Les limites de l’International Residential Code (R311.7.5) utilisées par défaut : une hauteur de marche maximale de 7¾ in (196 mm) et un giron minimal de 10 in (254 mm).",
      "La règle empirique de confort 2 × hauteur de marche + giron = 24 à 25 in, attribuée aux Architectural Graphic Standards.",
    ],
  },
  text: {
    unit: "Unités",
    units: { in: "Pouces (in)", cm: "Centimètres (cm)" },
    rise: "Hauteur totale (d’étage à étage)",
    riseHelp: "La distance verticale entre le dessus du sol fini inférieur et le dessus du sol fini supérieur.",
    maxRiser: "Hauteur de marche maximale",
    maxRiserHelp: "La marche la plus haute que vous acceptez. La valeur par défaut est le maximum de 7¾ in (196 mm) de l’International Residential Code ; la réglementation locale peut être différente.",
    targetRiser: "Hauteur de marche visée (facultatif)",
    targetRiserHelp: "Si vous saisissez une hauteur de marche préférée, le nombre de contremarches est choisi pour s’en approcher le plus possible, même si cela dépasse le maximum ci-dessus.",
    tread: "Giron",
    treadHelp: "La profondeur horizontale de chaque marche, de nez de marche à nez de marche. La valeur par défaut est le minimum de 10 in (254 mm) de l’International Residential Code.",
    runLimit: "Reculement disponible (facultatif)",
    runLimitHelp: "L’espace horizontal dont vous disposez pour l’escalier, pour le comparer au résultat.",
    steps: "Nombre de contremarches (marches)",
    caption: "{risers} de {riser} chacune, avec {treads} de {tread}.",
    risersCount: { zero: "{n} contremarche", one: "{n} contremarche", two: "{n} contremarches", few: "{n} contremarches", many: "{n} de contremarches", other: "{n} contremarches" },
    treadsCount: { zero: "{n} giron", one: "{n} giron", two: "{n} girons", few: "{n} girons", many: "{n} de girons", other: "{n} girons" },
    riserHeight: "Hauteur de marche",
    treads: "Nombre de girons",
    totalRun: "Reculement total",
    angle: "Angle de l’escalier",
    stringer: "Longueur du limon (diagonale hauteur-reculement)",
    comfort: "Contrôle de confort 2H + G",
    comfortStatus: "Par rapport à la règle empirique de 24 à 25 in (61 à 63,5 cm)",
    comfortOptions: { low: "Sous la plage : escalier peu pentu et long", ok: "Dans la plage", high: "Au-dessus de la plage : escalier raide ou à giron profond" },
    notes: {
      overMax: "La hauteur de marche de {riser} dépasse le maximum que vous avez saisi ({max}).",
      overRun: "Le reculement total de {run} dépasse de {over} l’espace que vous avez saisi ({limit}).",
      comfort: "La règle 2H + G (deux hauteurs de marche plus un giron, environ 24 à 25 in) est une recommandation de confort traditionnelle, pas une exigence réglementaire.",
      code: "Les réglementations de construction varient selon le territoire et ne fixent pas que les dimensions des marches : échappée, largeur, mains courantes, garde-corps, nez de marche, paliers et écart toléré entre les marches. Vérifiez la réglementation locale et faites vérifier le projet par un professionnel qualifié.",
      stringer: "La longueur du limon est la diagonale droite de la hauteur et du reculement totaux. Un limon découpé est plus long, une fois ajoutée la longueur de planche nécessaire aux raccords du haut et du bas.",
    },
  },
};

export default fr;
