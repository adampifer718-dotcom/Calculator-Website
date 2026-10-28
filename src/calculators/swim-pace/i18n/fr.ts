import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SwimPaceText } from "../text/en";

const fr: CalculatorTranslation<SwimPaceText> = {
  content: {
    title: "Calculateur d’allure de natation",
    shortTitle: "Allure de natation",
    summary: "Calculez votre allure de nage aux 100 m ou aux 100 yd à partir d’une distance et d’un temps, ou le temps sur une distance à une allure donnée.",
    metaTitle: "Calculateur d’allure de natation – Aux 100 m et 100 yd",
    metaDescription: "Calculez votre allure de nage aux 100 m ou aux 100 yd à partir de la distance et du temps, ou le temps final d’après une allure, avec vitesse et temps projetés.",
    keywords: ["allure natation", "allure de nage", "temps au 100 m", "allure aux 100 yards", "vitesse de nage", "temps de natation", "natation triathlon"],
    intro: [
      "Les nageurs mesurent généralement leur allure comme le temps mis pour chaque tranche de 100 mètres ou de 100 yards. Cela permet de comparer une séance en piscine à une nage en eau libre ou à une course, quelle que soit la distance totale.",
      "Saisissez une distance et un temps pour obtenir votre allure dans les deux unités, votre vitesse et les temps que vous réaliseriez sur des distances courantes à cette allure. Vous pouvez aussi changer de mode, saisir une allure cible et voir combien de temps prendra une distance.",
    ],
    howToUse: [
      "Choisissez de calculer l’allure ou le temps total.",
      "Saisissez la distance et choisissez les mètres ou les yards.",
      "Saisissez votre temps en heures, minutes et secondes, ou l’allure aux 100 m ou aux 100 yd.",
      "Lisez l’allure, la vitesse et les temps projetés de 50 m à 1 500 m.",
    ],
    formulas: [
      { title: "Allure", expression: "allure aux 100 m = temps (s) ÷ distance (m) × 100", explanation: "Affichée en minutes:secondes, arrondie à la seconde la plus proche." },
      { title: "Temps à partir de l’allure", expression: "temps = allure aux 100 m × distance (m) ÷ 100", explanation: "Une allure aux 100 yd est d’abord divisée par 0,9144 pour obtenir l’allure aux 100 m." },
      { title: "Yards et mètres", expression: "1 yd = 0,9144 m exactement\nallure aux 100 yd = allure aux 100 m × 0,9144", explanation: "100 yards sont un peu plus courts que 100 mètres : l’allure aux 100 yd est donc plus rapide." },
      { title: "Vitesse", expression: "vitesse (m/s) = 100 ÷ allure aux 100 m (s)\nkm/h = m/s × 3,6", explanation: "Vitesse moyenne sur l’ensemble de la nage." },
    ],
    examples: [
      {
        title: "1 500 m en 27:30",
        steps: ["27:30 = 1 650 s", "1 650 ÷ 1 500 × 100 = 110 s = 1:50 aux 100 m", "Aux 100 yd : 110 × 0,9144 ≈ 101 s = 1:41 ; vitesse ≈ 0,909 m/s"],
      },
      {
        title: "500 yd en 7:05",
        steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 aux 100 yd", "Aux 100 m : 85 ÷ 0,9144 ≈ 93 s = 1:33"],
      },
      {
        title: "1 650 yd à 1:30 aux 100 yd",
        steps: ["1 650 yd ÷ 100 = 16,5 tranches de 100 yd", "16,5 × 90 s = 1 485 s", "1 485 s = 24:45"],
      },
    ],
    assumptions: [
      "L’allure est une moyenne sur toute la distance ; les temps projetés supposent que vous pourriez tenir cette allure sur chaque distance, ce qui est rarement vrai pour des nages beaucoup plus longues.",
      "La longueur du bassin et le nombre de virages influent sur les temps : la même nage est généralement un peu plus rapide en bassin de 25 m qu’en bassin de 50 m.",
      "Les temps sont arrondis à la seconde la plus proche pour l’affichage.",
    ],
    faqs: [
      { question: "Pourquoi mon allure aux 100 yd est-elle plus rapide qu’aux 100 m ?", answer: "100 yards font 91,44 mètres et se nagent donc plus vite. À vitesse égale, l’allure aux 100 yd est inférieure d’environ 8,6 % à l’allure aux 100 m." },
      { question: "Qu’est-ce qu’une bonne allure de natation ?", answer: "Cela dépend de l’âge, de l’expérience et de la distance. Beaucoup de nageurs de loisir nagent autour de 2 à 3 minutes aux 100 m, tandis que les nageurs de fond entraînés descendent souvent bien en dessous de 1:30." },
      { question: "Puis-je l’utiliser pour la nage en eau libre ?", answer: "Oui, si vous connaissez la distance. Les distances GPS en eau libre peuvent être imprécises : l’allure n’est donc fiable que si la distance mesurée l’est." },
    ],
    sourcesUsedFor: ["La conversion exacte 1 yd = 0,9144 m, utilisée entre les bassins en yards et en mètres."],
  },
  text: {
    mode: "Calculer",
    modes: { pace: "L’allure à partir de la distance et du temps", time: "Le temps à partir de la distance et de l’allure" },
    distance: "Distance",
    unit: "Unité de distance",
    units: { m: "Mètres (m)", yd: "Yards (yd)" },
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    timeZero: "Saisissez un temps supérieur à 0.",
    paceMinutes: "Allure : minutes",
    paceSeconds: "Allure : secondes",
    paceUnit: "Allure aux",
    paceUnits: { m: "100 m", yd: "100 yd" },
    paceZero: "Saisissez une allure supérieure à 0.",
    pace: "Allure aux 100 {unit}",
    time: "Temps total",
    caption: "{distance} en {time}.",
    pace100m: "Allure aux 100 m",
    pace100yd: "Allure aux 100 yd",
    speedMs: "Vitesse (m/s)",
    speedKmh: "Vitesse (km/h)",
    distanceM: "Distance en mètres",
    table: {
      caption: "Temps projetés à la même allure régulière",
      distance: "Distance",
      time: "Temps",
    },
    notes: {
      even: "Les temps projetés supposent la même allure sur toute la distance. Les nages plus longues sont généralement plus lentes aux 100, et les virages diffèrent entre les bassins de 25 m, de 50 m et de 25 yd.",
    },
  },
};

export default fr;
