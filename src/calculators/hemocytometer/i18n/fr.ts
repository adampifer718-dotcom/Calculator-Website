import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HemocytometerText } from "../text/en";

const fr: CalculatorTranslation<HemocytometerText> = {
  content: {
    title: "Calculateur de numération cellulaire (hématimètre)",
    shortTitle: "Numération cellulaire",
    summary: "Convertissez des comptages à l’hématimètre en cellules par mL, avec la viabilité, le total de cellules vivantes de l’échantillon et le volume à prélever pour ensemencer un nombre cible de cellules.",
    metaTitle: "Calculateur de numération cellulaire – Cellules par mL",
    metaDescription:
      "Calculez les cellules vivantes et totales par mL à partir d’un comptage en cellule de Neubauer améliorée, avec dilution, viabilité au bleu trypan et volume d’ensemencement.",
    keywords: ["hématimètre", "numération cellulaire", "cellules par mL", "cellule de Neubauer", "bleu trypan", "viabilité cellulaire", "ensemencement cellulaire", "comptage cellulaire"],
    intro: [
      "Un hématimètre est une lame de verre épaisse dont la chambre, de profondeur connue, porte une grille de comptage gravée. Dans une cellule de Neubauer améliorée, chacun des neuf grands carrés mesure 1 mm × 1 mm et la chambre a 0,1 mm de profondeur : le liquide au-dessus d’un grand carré représente donc 0,1 µL, soit un dix-millième de millilitre.",
      "Le nombre moyen de cellules par grand carré, multiplié par 10⁴ et par l’éventuelle dilution, donne donc le nombre de cellules par mL. Ce calculateur l’applique aux cellules vivantes, ajoute les cellules mortes (colorées) pour le comptage total et la viabilité, puis calcule combien de cellules contient l’échantillon et quel volume prélever pour ensemencer un nombre donné de cellules.",
    ],
    howToUse: [
      "Comptez les cellules vivantes dans plusieurs grands carrés, par exemple les quatre carrés d’angle, puis saisissez le total et le nombre de carrés.",
      "Si vous avez coloré les cellules, par exemple au bleu trypan, saisissez aussi les cellules mortes (colorées) comptées dans les mêmes carrés.",
      "Saisissez le facteur de dilution : 2 si vous avez mélangé des volumes égaux de cellules et de colorant, 1 si les cellules n’ont pas été diluées.",
      "Saisissez éventuellement le volume de la suspension et le nombre de cellules à ensemencer.",
    ],
    formulas: [
      {
        title: "Concentration cellulaire",
        expression: "cellules/mL = (cellules comptées ÷ grands carrés comptés) × facteur de dilution × 10⁴",
        explanation: "Un grand carré contient 1 mm × 1 mm × 0,1 mm = 0,1 mm³ = 10⁻⁴ mL : le nombre par carré multiplié par 10⁴ donne donc les cellules par mL.",
      },
      {
        title: "Viabilité",
        expression: "viabilité % = vivantes ÷ (vivantes + mortes) × 100",
        explanation: "La part des cellules comptées qui excluent le colorant.",
      },
      {
        title: "Total de cellules et volume d’ensemencement",
        expression: "cellules vivantes totales = cellules vivantes/mL × volume ; volume à ensemencer = cellules cibles ÷ cellules vivantes/mL",
        explanation: "La concentration est extrapolée à toute la suspension, ou ramenée au volume qui contient le nombre de cellules nécessaire.",
      },
    ],
    examples: [
      {
        title: "Comptage au bleu trypan des quatre carrés d’angle",
        steps: [
          "Moyenne par carré : 182 ÷ 4 = 45,5 cellules vivantes.",
          "Cellules vivantes/mL : 45,5 × 2 × 10⁴ = 910 000 = 9,1 × 10⁵.",
          "Viabilité : 182 ÷ (182 + 14) = 92,9 %.",
          "Volume pour 1 000 000 de cellules : 1 000 000 ÷ 910 000 ≈ 1,099 mL.",
        ],
      },
      {
        title: "Une culture dense diluée au 1/10",
        steps: ["Moyenne par carré : 95 ÷ 5 = 19 cellules.", "Cellules vivantes/mL : 19 × 10 × 10⁴ = 1,9 × 10⁶."],
      },
      {
        title: "Un échantillon peu dense, non dilué",
        steps: [
          "Moyenne par carré : 37 ÷ 4 = 9,25 cellules.",
          "Cellules vivantes/mL : 9,25 × 1 × 10⁴ = 9,25 × 10⁴.",
          "Avec seulement 37 cellules comptées, l’erreur de comptage seule est d’environ ±16 % (1 ÷ √37).",
        ],
      },
    ],
    assumptions: [
      "La chambre est de type Neubauer améliorée, avec des grands carrés de 1 mm² et une profondeur de 0,1 mm. D’autres chambres, comme la Fuchs-Rosenthal, ou le comptage des petits carrés demandent un autre facteur.",
      "Les cellules sont bien homogénéisées et la chambre a été remplie correctement, sans débordement ni bulles.",
      "Les cellules se répartissent au hasard : le comptage suit donc une loi de Poisson et l’erreur relative vaut environ 1 ÷ √(cellules comptées). Les faibles comptages sont beaucoup moins précis, et les différences entre opérateurs ajoutent de l’erreur.",
      "La viabilité par exclusion de colorant est une estimation. Les cellules qui excluent le colorant ne sont pas forcément en bonne santé, et la durée de coloration influe sur le résultat.",
    ],
    faqs: [
      {
        question: "Pourquoi multiplier par 10⁴ ?",
        answer: "Un grand carré mesure 1 mm de côté et la chambre a 0,1 mm de profondeur : il contient donc 0,1 mm³, soit 0,1 µL ou 10⁻⁴ mL. Diviser les cellules par carré par 10⁻⁴ mL revient à les multiplier par 10⁴ pour obtenir des cellules par mL.",
      },
      {
        question: "Quel facteur de dilution utiliser avec le bleu trypan ?",
        answer: "Le volume total divisé par le volume de suspension cellulaire. Des volumes égaux de cellules et de bleu trypan (par exemple 10 µL + 10 µL) donnent un facteur de dilution de 2. L’oublier divise le résultat par deux.",
      },
      {
        question: "Combien de cellules faut-il compter ?",
        answer: "Plus vous comptez de cellules, plus l’erreur de comptage est faible ; elle vaut environ 1 ÷ √(nombre compté). Compter quelques centaines de cellules sur plusieurs carrés donne une erreur d’environ 5 à 6 % ; en compter 30 donne environ 18 %.",
      },
    ],
    sourcesUsedFor: [
      "Cellules par mL = nombre moyen par grand carré × facteur de dilution × 10⁴, et le conseil de recompter à une autre dilution en dehors d’environ 20 à 50 cellules par carré.",
      "L’erreur de comptage, à peu près égale à la racine carrée du nombre de cellules comptées, et la recommandation de compter quelques centaines de cellules au total.",
    ],
  },
  text: {
    live: "Cellules vivantes (non colorées) comptées",
    liveHelp: "Le nombre total de cellules vivantes dans tous les grands carrés comptés.",
    dead: "Cellules mortes (colorées) comptées",
    deadHelp: "Facultatif. Les cellules qui ont pris le colorant, comme le bleu trypan, dans les mêmes carrés. Sert au comptage total et à la viabilité.",
    squares: "Grands carrés comptés",
    squaresHelp: "Chaque grand carré d’une cellule de Neubauer améliorée mesure 1 mm × 1 mm × 0,1 mm de profondeur, soit 0,1 µL. On compte généralement les 4 carrés d’angle.",
    dilution: "Facteur de dilution",
    dilutionHelp: "Volume total ÷ volume de suspension cellulaire. Pour des volumes égaux de cellules et de bleu trypan (1:1), saisissez 2. Saisissez 1 sans dilution.",
    volume: "Volume de l’échantillon",
    volumeHelp: "Facultatif. Le volume de la suspension cellulaire, pour obtenir le nombre total de cellules vivantes qu’elle contient.",
    target: "Cellules nécessaires à l’ensemencement",
    targetHelp: "Facultatif. Le nombre de cellules vivantes à ensemencer, pour obtenir le volume de suspension à prélever.",
    errors: {
      noLiveForTarget: "Aucune cellule vivante n’a été comptée : le volume nécessaire à l’ensemencement ne peut donc pas être calculé.",
    },
    cellsPerMl: "{value} cellules/mL",
    cellsPerMlUnit: "cellules/mL",
    cellsUnit: "cellules",
    result: "Cellules vivantes par mL",
    caption: "Cellules vivantes ÷ carrés comptés × facteur de dilution × 10⁴",
    totalPerMl: "Cellules totales par mL (vivantes + mortes)",
    viability: "Viabilité",
    averagePerSquare: "Moyenne de cellules vivantes par grand carré",
    totalLive: "Cellules vivantes dans {volume} mL",
    volumeNeeded: "Volume de suspension pour {target} cellules",
    volumeNeededUl: "Même volume en µL",
    notes: {
      poisson: "Vous avez compté {count} cellules au total. La statistique de comptage seule donne une erreur relative d’environ ±{cv} % (1 ÷ √nombre) ; compter davantage de cellules la réduit. Il est couramment recommandé de compter quelques centaines de cellules au total.",
      density: "La moyenne de {average} cellules vivantes par carré sort de la plage d’environ 20 à 50 cellules par carré souvent recommandée pour le comptage. Envisagez d’ajuster la dilution et de recompter.",
      noCells: "Aucune cellule vivante n’a été comptée : la concentration en cellules vivantes est donc nulle. Vérifiez l’échantillon et la dilution.",
      exceedsSample: "L’objectif d’ensemencement demande plus de cellules vivantes que n’en contient le volume de l’échantillon.",
      general: "Ce calcul suppose une cellule de Neubauer améliorée de 0,1 mm de profondeur avec des grands carrés de 1 mm². D’autres chambres, ou le comptage des petits carrés, demandent un autre facteur.",
    },
  },
};

export default fr;
