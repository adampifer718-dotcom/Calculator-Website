import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OeeText } from "../text/en";

const fr: CalculatorTranslation<OeeText> = {
  content: {
    title: "Calculateur de TRS (OEE)",
    shortTitle: "TRS",
    summary: "Calculez le taux de rendement synthétique (TRS) à partir du temps requis, des arrêts, du temps de cycle idéal et du nombre de pièces, avec la disponibilité, la performance, la qualité et le temps perdu pour chacune.",
    metaTitle: "Calculateur de TRS – Disponibilité × performance × qualité",
    metaDescription:
      "Calculez le TRS (OEE) à partir du temps prévu, des arrêts, du temps de cycle ou de la cadence idéale et des rebuts, avec le temps perdu pour chaque cause.",
    keywords: ["calcul TRS", "taux de rendement synthétique", "OEE", "formule TRS", "disponibilité performance qualité", "temps de cycle idéal", "efficacité de production", "pertes de production"],
    intro: [
      "Le taux de rendement synthétique (TRS, en anglais OEE) mesure la part du temps de production prévu qui est réellement productive : ne fabriquer que des pièces bonnes, aussi vite que possible, sans arrêt. Un score de 100 % correspond à une production parfaite ; les lignes réelles perdent du temps à cause des pannes, des cycles lents et des rebuts.",
      "Le TRS répartit ces pertes en trois facteurs. La disponibilité tient compte du temps d’arrêt de l’équipement, la performance du fonctionnement plus lent que la cadence idéale, et la qualité des pièces qui n’étaient pas bonnes du premier coup. Ce calculateur donne les trois facteurs, le TRS et les minutes perdues pour chacun.",
    ],
    howToUse: [
      "Saisissez le temps de production prévu en minutes, sans les pauses planifiées ni les périodes sans production programmée.",
      "Saisissez le temps d’arrêt total pendant cette période, par exemple les pannes et les changements de série.",
      "Indiquez la vitesse idéale sous forme de temps de cycle en secondes par pièce, ou de cadence en pièces par minute.",
      "Saisissez le nombre total de pièces fabriquées et combien ont été rebutées. Le TRS et le tableau des pertes de temps se mettent à jour immédiatement.",
    ],
    formulas: [
      {
        title: "Disponibilité",
        expression: "D = temps de fonctionnement ÷ temps de production prévu, temps de fonctionnement = prévu − temps d’arrêt",
        explanation: "La part du temps prévu pendant laquelle l’équipement a réellement fonctionné.",
      },
      {
        title: "Performance",
        expression: "P = (temps de cycle idéal × nombre total) ÷ temps de fonctionnement",
        explanation: "À quel point l’équipement s’est approché de sa vitesse idéale. Avec une cadence idéale, le temps de cycle idéal vaut 60 ÷ cadence secondes.",
      },
      {
        title: "Qualité",
        expression: "Q = pièces bonnes ÷ nombre total, bonnes = total − rebuts",
        explanation: "La part des pièces bonnes du premier coup.",
      },
      {
        title: "TRS",
        expression: "TRS = D × P × Q = (pièces bonnes × temps de cycle idéal) ÷ temps de production prévu",
        explanation: "Le temps pleinement productif (pièces bonnes fabriquées à la vitesse idéale) en part du temps prévu.",
      },
    ],
    examples: [
      {
        title: "Une équipe de 450 minutes avec 54 minutes d’arrêts",
        steps: [
          "Temps de fonctionnement = 450 − 54 = 396 min, donc disponibilité = 396 ÷ 450 = 88 %",
          "Performance = 1,5 s × 13 200 ÷ (396 × 60 s) = 19 800 ÷ 23 760 = 83,33 %",
          "Qualité = (13 200 − 330) ÷ 13 200 = 97,5 %",
          "TRS = 0,88 × 0,8333 × 0,975 = 71,5 %",
        ],
      },
      {
        title: "Cadence idéale de 25 pièces par minute",
        steps: [
          "Temps de cycle idéal = 60 ÷ 25 = 2,4 s",
          "Disponibilité = 384 ÷ 420 = 91,43 % ; performance = 2,4 × 8 800 ÷ (384 × 60) = 91,67 %",
          "Qualité = 8 624 ÷ 8 800 = 98 %",
          "TRS = 0,9143 × 0,9167 × 0,98 ≈ 82,13 %",
        ],
      },
      {
        title: "Deux équipes de 8 heures sur une machine plus lente",
        steps: [
          "Disponibilité = 840 ÷ 960 = 87,5 %",
          "Performance = 12 × 3 900 ÷ (840 × 60) = 46 800 ÷ 50 400 = 92,86 %",
          "Qualité = 3 815 ÷ 3 900 = 97,82 %",
          "TRS = pièces bonnes × temps de cycle idéal ÷ temps prévu = 3 815 × 12 ÷ 57 600 ≈ 79,48 %",
        ],
      },
    ],
    assumptions: [
      "Le temps de production prévu exclut les pauses planifiées et les périodes sans production programmée ; la façon de traiter les changements de série et la maintenance modifie le résultat : gardez donc les mêmes définitions pour comparer.",
      "Le temps de cycle idéal est le temps le plus court dans lequel l’équipement peut fabriquer une pièce dans des conditions idéales. S’il est fixé trop lent, la performance peut dépasser 100 %, ce qui signale une référence erronée plutôt qu’une ligne excellente.",
      "Les rebuts comprennent toutes les pièces qui n’étaient pas bonnes du premier coup, y compris celles qui ont été retouchées. Le chiffre de 85 % souvent cité comme « classe mondiale » n’est qu’un repère approximatif.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’un bon TRS ?",
        answer: "Un TRS de 85 % est souvent cité comme la classe mondiale pour la fabrication discrète, et beaucoup d’usines fonctionnent bien en dessous. Comme le score dépend de la définition des arrêts et de la vitesse idéale, l’évolution sur une même ligne est plus utile que la comparaison entre usines.",
      },
      {
        question: "Pourquoi les pertes de temps s’additionnent-elles au temps prévu ?",
        answer: "Le temps de production prévu se répartit entre les arrêts (perte de disponibilité), le fonctionnement sous la vitesse idéale (perte de performance), la fabrication de rebuts (perte de qualité) et le temps pleinement productif restant. Le TRS est le temps pleinement productif divisé par le temps prévu.",
      },
      {
        question: "Faut-il saisir le temps de cycle idéal ou la cadence idéale ?",
        answer: "L’un ou l’autre : c’est la même chose exprimée de deux façons. Une cadence idéale de 40 pièces par minute équivaut à un temps de cycle idéal de 60 ÷ 40 = 1,5 seconde par pièce.",
      },
    ],
    sourcesUsedFor: [
      "La formule du TRS comme disponibilité × performance × qualité, avec disponibilité = temps de fonctionnement ÷ temps de production prévu, performance = temps de cycle idéal × nombre total ÷ temps de fonctionnement et qualité = pièces bonnes ÷ nombre total, ainsi que la référence souvent citée de 85 %.",
      "Les trois facteurs du TRS et les pertes que chacun mesure.",
    ],
  },
  text: {
    planned: "Temps de production prévu",
    plannedHelp: "Le temps pendant lequel l’équipement devait fonctionner, après déduction des pauses planifiées et des périodes sans production programmée.",
    stopTime: "Temps d’arrêt (arrêts imprévus et planifiés)",
    stopTimeHelp: "Le temps, pendant le temps de production prévu, où l’équipement ne fonctionnait pas, par exemple pannes, changements de série et attente de matière.",
    speedMode: "Vitesse idéale exprimée en",
    speedModes: { cycle: "Temps de cycle idéal (secondes par pièce)", rate: "Cadence idéale (pièces par minute)" },
    idealCycle: "Temps de cycle idéal",
    idealCycleHelp: "Le temps le plus court dans lequel l’équipement peut fabriquer une pièce dans des conditions idéales.",
    idealRate: "Cadence idéale",
    idealRateHelp: "Le plus grand nombre de pièces par minute que l’équipement peut fabriquer dans des conditions idéales.",
    perPiece: "s par pièce",
    perMinute: "pièces/min",
    totalCount: "Nombre total (toutes les pièces fabriquées)",
    rejects: "Nombre de rebuts",
    rejectsHelp: "Pièces mises au rebut ou à retoucher. Elles ne sont pas bonnes du premier coup.",
    minutes: "min",
    pieces: "pièces",
    errors: {
      stopTooLong: "Le temps d’arrêt doit être inférieur au temps de production prévu.",
      rejectsTooMany: "Le nombre de rebuts ne peut pas dépasser le nombre total.",
    },
    oee: "Taux de rendement synthétique (TRS)",
    caption: "Disponibilité {a} × performance {p} × qualité {q}.",
    availability: "Disponibilité",
    performance: "Performance",
    quality: "Qualité",
    goodCount: "Pièces bonnes",
    runTime: "Temps de fonctionnement",
    productiveTime: "Temps pleinement productif",
    idealCycleUsed: "Temps de cycle idéal utilisé",
    table: {
      caption: "Répartition du temps de production prévu",
      item: "Temps",
      minutes: "Minutes",
      share: "Part du temps prévu",
      planned: "Temps de production prévu",
      availabilityLoss: "Perte de disponibilité (arrêts)",
      performanceLoss: "Perte de performance (cycles lents et micro-arrêts)",
      qualityLoss: "Perte de qualité (temps passé à fabriquer des rebuts)",
      productive: "Temps pleinement productif",
    },
    notes: {
      overPerformance: "La performance dépasse 100 %, ce qui est physiquement impossible. Le temps de cycle idéal est probablement fixé trop lent (ou la cadence idéale trop basse), ou le nombre inclut des pièces fabriquées hors du temps de fonctionnement.",
      benchmark: "Un TRS de 85 % est souvent cité comme « classe mondiale » pour la fabrication discrète. Ne le considérez que comme un repère approximatif ; un objectif juste dépend du procédé et de la définition des pertes.",
    },
  },
};

export default fr;
