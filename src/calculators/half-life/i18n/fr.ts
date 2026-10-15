import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HalfLifeText } from "../text/en";

const fr: CalculatorTranslation<HalfLifeText> = {
  content: {
    title: "Calculateur de demi-vie",
    shortTitle: "Demi-vie",
    summary: "Résolvez une décroissance exponentielle pour la quantité restante, la quantité initiale, la demi-vie ou le temps écoulé.",
    metaTitle: "Calculateur de demi-vie – Quantité restante et durée",
    metaDescription: "Résolvez N = N₀(1/2)^(t/T) pour la quantité restante, la quantité initiale, la demi-vie ou le temps écoulé, avec la constante de désintégration et la vie moyenne.",
    keywords: ["demi-vie", "période radioactive", "décroissance radioactive", "décroissance exponentielle", "constante de désintégration", "vie moyenne", "datation au carbone 14", "cinétique d’ordre 1"],
    intro: [
      "La demi-vie est le temps nécessaire pour que la moitié d’une quantité en décroissance disparaisse. Après une demi-vie, il en reste 50 % ; après deux, 25 % ; après trois, 12,5 %, et ainsi de suite.",
      "La même règle s’applique aux isotopes radioactifs et à tout autre processus de décroissance d’ordre 1. Saisissez trois des quatre valeurs pour trouver celle qui manque. Le calculateur affiche aussi la constante de désintégration, la vie moyenne et la part restante.",
    ],
    howToUse: [
      "Choisissez la valeur à trouver : la quantité restante, la quantité initiale, la demi-vie ou le temps écoulé.",
      "Saisissez les autres valeurs. Les quantités peuvent être dans n’importe quelle unité, et les durées aussi, à condition que chaque paire utilise la même.",
      "Lisez le résultat dans ces mêmes unités, avec le nombre de demi-vies et la constante de désintégration.",
    ],
    formulas: [
      { title: "Loi de décroissance", expression: "N = N₀ × (1/2)^(t ÷ T½)", explanation: "N₀ est la quantité initiale, t le temps écoulé et T½ la demi-vie." },
      { title: "Demi-vie et temps écoulé", expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)", explanation: "La loi de décroissance réarrangée à l’aide des logarithmes." },
      { title: "Constante de désintégration et vie moyenne", expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2", explanation: "λ est la fraction qui se désintègre par unité de temps ; τ est la durée de vie moyenne, environ 1,4427 demi-vie." },
    ],
    examples: [
      { title: "40 g de cobalt 60 après 15,81 ans (T½ = 5,27 ans)", steps: ["t ÷ T½ = 15,81 ÷ 5,27 = 3 demi-vies", "N = 40 × (1/2)³ = 5 g"] },
      { title: "Demi-vie pour 1 200 coups tombant à 150 en 36 heures", steps: ["N₀ ÷ N = 1 200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 heures"] },
      { title: "Âge d’un échantillon contenant encore 30 % de son carbone 14 (T½ = 5 730 ans)", steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3,333", "t = 5 730 × log₂(3,333) ≈ 9 952,8 ans"] },
    ],
    assumptions: [
      "La décroissance est d’ordre 1 : la demi-vie reste la même quelle que soit la quantité de matière restante.",
      "Les grands échantillons suivent fidèlement la courbe ; pour une poignée d’atomes, la désintégration est aléatoire et le résultat n’est qu’une moyenne.",
      "Il s’agit d’un outil mathématique général. Il ne donne aucun conseil sur les médicaments, les doses ou la radioprotection ; adressez-vous pour cela à un professionnel qualifié.",
    ],
    faqs: [
      { question: "L’unité de temps a-t-elle de l’importance ?", answer: "Seulement en ce que la demi-vie et le temps écoulé doivent utiliser la même unité. Saisissez les deux en jours, ou les deux en années, et le résultat sera dans cette unité." },
      { question: "Combien en reste-t-il après 10 demi-vies ?", answer: "(1/2)¹⁰ = 1/1 024, soit un peu moins de 0,1 % de la quantité initiale." },
      { question: "Quelle est la différence entre demi-vie et vie moyenne ?", answer: "La demi-vie est le moment où la moitié de la matière a disparu. La vie moyenne est le temps moyen avant qu’un atome isolé se désintègre ; elle est plus longue, environ 1,4427 fois la demi-vie." },
    ],
    sourcesUsedFor: ["Décroissance d’ordre 1, définition de la demi-vie et λ = ln 2 ÷ T½."],
  },
  text: {
    solve: "Trouver",
    solveOptions: { N: "Quantité restante (N)", N0: "Quantité initiale (N₀)", T: "Demi-vie (T½)", t: "Temps écoulé (t)" },
    initial: "Quantité initiale (N₀)",
    remaining: "Quantité restante (N)",
    amountHelp: "N’importe quelle unité (grammes, atomes, becquerels…), à condition que N et N₀ utilisent la même.",
    halfLife: "Demi-vie (T½)",
    elapsed: "Temps écoulé (t)",
    timeHelp: "N’importe quelle unité de temps, à condition que t et T½ utilisent la même.",
    remainingTooLarge: "La quantité restante ne peut pas dépasser la quantité initiale (N ≤ N₀).",
    remainingMustDrop: "Pour trouver la demi-vie, la quantité restante doit être inférieure à la quantité initiale.",
    timeMustBePositive: "Pour trouver la demi-vie, le temps écoulé doit être supérieur à 0.",
    tooManyHalfLives: "Trop de demi-vies : la quantité initiale serait trop grande pour être affichée.",
    results: { N: "Quantité restante", N0: "Quantité initiale", T: "Demi-vie", t: "Temps écoulé" },
    amountCaption: "Dans la même unité que l’autre quantité.",
    timeCaption: "Dans la même unité de temps que l’autre durée.",
    percentRemaining: "Pourcentage restant (N ÷ N₀)",
    halfLives: "Nombre de demi-vies (t ÷ T½)",
    decayConstant: "Constante de désintégration λ = ln 2 ÷ T½ (par unité de temps)",
    meanLifetime: "Vie moyenne τ = 1 ÷ λ (unité de temps)",
    note: "Suppose une décroissance exponentielle simple (d’ordre 1) avec une demi-vie constante.",
  },
};

export default fr;
