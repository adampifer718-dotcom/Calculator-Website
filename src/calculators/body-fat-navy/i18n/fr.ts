import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BodyFatText } from "../text/en";

const fr: CalculatorTranslation<BodyFatText> = {
  content: {
    title: "Calculateur de masse grasse",
    shortTitle: "Masse grasse",
    summary: "Estimez votre taux de masse grasse à partir de la taille et des tours de cou, de taille et de hanches avec la méthode des circonférences de l’US Navy.",
    metaTitle: "Calculateur de masse grasse – Méthode du ruban US Navy",
    metaDescription: "Estimez votre taux de masse grasse au mètre ruban avec les équations de circonférence de l’US Navy, en cm ou en pouces, avec masse grasse et masse maigre.",
    keywords: ["masse grasse", "taux de masse grasse", "pourcentage de graisse corporelle", "masse grasse US Navy", "méthode des circonférences", "masse maigre", "calcul masse grasse"],
    intro: [
      "Le taux de masse grasse est la part de votre poids corporel constituée de graisse. Les méthodes de laboratoire le mesurent directement, mais un mètre ruban permet d’en obtenir une estimation rapide.",
      "Ce calculateur utilise la méthode des circonférences de l’US Navy, mise au point par Hodgdon et Beckett en 1984. Elle nécessite votre taille et vos tours de cou et de taille, ainsi que votre tour de hanches pour l’équation des femmes. Ajoutez votre poids pour voir la part de masse grasse et celle de masse maigre.",
    ],
    howToUse: [
      "Choisissez les centimètres ou les pouces et le sexe utilisé dans l’équation.",
      "Saisissez votre taille et vos tours de cou et de taille (ainsi que le tour de hanches pour l’équation des femmes).",
      "Si vous le souhaitez, saisissez votre poids pour le répartir entre masse grasse et masse maigre.",
      "Lisez le taux de masse grasse estimé.",
    ],
    formulas: [
      { title: "Hommes (longueurs en pouces)", expression: "%MG = 86,010 × log₁₀(tour de taille − tour de cou) − 70,041 × log₁₀(taille) + 36,76", explanation: "Le tour de taille se mesure autour de l’abdomen, au niveau du nombril." },
      { title: "Femmes (longueurs en pouces)", expression: "%MG = 163,205 × log₁₀(tour de taille + tour de hanches − tour de cou) − 97,684 × log₁₀(taille) − 78,387", explanation: "Le tour de taille se mesure à l’endroit le plus étroit et le tour de hanches à l’endroit le plus large." },
      { title: "Centimètres", expression: "longueur (in) = longueur (cm) ÷ 2,54", explanation: "Les mesures en centimètres sont converties en pouces avant d’appliquer les équations." },
      { title: "Masse grasse et masse maigre", expression: "masse grasse = poids × %MG ÷ 100\nmasse maigre = poids − masse grasse", explanation: "La masse maigre désigne ici tout ce qui n’est pas de la graisse : muscles, os, organes et eau." },
    ],
    examples: [
      {
        title: "Homme de 178 cm, cou 38 cm, taille 88 cm, poids 80 kg",
        steps: ["En pouces : taille 70,08, cou 14,96, tour de taille 34,65", "86,010 × log₁₀(19,69) − 70,041 × log₁₀(70,08) + 36,76 ≈ 18,8 %", "Masse grasse ≈ 80 × 0,188 = 15,0 kg ; masse maigre ≈ 65,0 kg"],
      },
      {
        title: "Femme de 65 in, cou 13 in, taille 29 in, hanches 39 in, poids 140 lb",
        steps: ["tour de taille + tour de hanches − tour de cou = 29 + 39 − 13 = 55 in", "163,205 × log₁₀(55) − 97,684 × log₁₀(65) − 78,387 ≈ 28,6 %", "Masse grasse ≈ 140 × 0,2856 = 40,0 lb ; masse maigre ≈ 100,0 lb"],
      },
    ],
    assumptions: [
      "Le résultat est une estimation, pas un avis médical, et ce calculateur n’a pas encore été vérifié par un professionnel. Parlez à un professionnel de santé de ce que votre taux de masse grasse signifie pour vous.",
      "Les équations ont été établies sur du personnel adulte de l’US Navy. Elles s’écartent généralement d’environ 3 à 4 points de pourcentage des mesures de laboratoire et peuvent être moins précises chez les personnes très musclées, très minces ou âgées, ainsi que pendant la grossesse.",
      "De petites erreurs de mesure modifient nettement le résultat, surtout au tour de taille. Mesurez avec soin et toujours de la même façon.",
      "Aucune catégorie de santé n’est affichée, car aucun tableau de classification unique n’a été vérifié pour cette page.",
    ],
    faqs: [
      { question: "Quelle est la précision de la méthode de l’US Navy ?", answer: "Pour la plupart des adultes, elle se situe à quelques points de pourcentage de méthodes comme la pesée hydrostatique, mais l’erreur individuelle peut être plus grande. Elle sert surtout à suivre l’évolution dans le temps avec la même technique de mesure." },
      { question: "Pourquoi l’équation des femmes utilise-t-elle les hanches ?", answer: "Les femmes ont tendance à stocker davantage de graisse au niveau des hanches et des cuisses ; ajouter le tour de hanches a donc amélioré l’ajustement de l’équation pour les femmes." },
      { question: "Pourquoi la taille fait-elle baisser l’estimation ?", answer: "Une personne plus grande ayant le même tour de taille et le même tour de cou a une circonférence relativement plus faible pour sa stature ; l’équation soustrait donc un terme fondé sur la taille." },
    ],
    sourcesUsedFor: [
      "La méthode des circonférences pour les hommes, à partir des tours de cou et d’abdomen et de la taille, et sa précision par rapport à la pesée hydrostatique.",
      "Le contexte de la méthode militaire au mètre ruban et l’endroit où se mesurent les tours de cou, de taille et de hanches.",
    ],
  },
  text: {
    unit: "Unité de mesure",
    units: { cm: "Centimètres (cm)", in: "Pouces (in)" },
    sex: "Sexe utilisé dans l’équation",
    sexHelp: "La méthode utilise des équations distinctes pour les hommes et les femmes ; celle des femmes utilise aussi le tour de hanches.",
    sexes: { male: "Homme", female: "Femme" },
    height: "Taille",
    heightHelp: "Taille debout, sans chaussures.",
    neck: "Tour de cou",
    neckHelp: "Juste sous le larynx (pomme d’Adam), le ruban légèrement incliné vers le bas à l’avant.",
    waist: "Tour de taille",
    waistHelp: "Hommes : autour de l’abdomen, au niveau du nombril. Femmes : à l’endroit le plus étroit de la taille.",
    hip: "Tour de hanches",
    hipHelp: "Autour de la partie la plus large des hanches et des fesses.",
    weight: "Poids corporel",
    weightHelp: "Facultatif. Sert à répartir votre poids entre masse grasse et masse maigre.",
    weightUnit: "Unité de poids",
    weightUnits: { kg: "Kilogrammes (kg)", lb: "Livres (lb)" },
    bodyFat: "Taux de masse grasse estimé",
    caption: "{method} ; taille {height}, cou {neck}, tour de taille {waist}.",
    captionHip: "{method} ; taille {height}, cou {neck}, tour de taille {waist}, hanches {hip}.",
    method: "Méthode",
    methodName: "Méthode des circonférences de l’US Navy (Hodgdon et Beckett, 1984)",
    methodShort: "Méthode US Navy",
    fatMass: "Masse grasse",
    leanMass: "Masse maigre (tout sauf la graisse)",
    errors: {
      range: "Saisissez une valeur comprise entre {min} et {max} {unit}.",
      waistNeck: "Le tour de taille doit être supérieur au tour de cou pour cette équation.",
      logArgument: "Tour de taille + tour de hanches − tour de cou doit être supérieur à 0.",
      outOfRange: "Ces mesures donnent une estimation de {value}, en dehors de la plage que l’équation peut décrire. Vérifiez les mesures et l’unité.",
    },
    notes: {
      estimate: "Une estimation à partir de mesures au ruban. Par rapport aux méthodes de laboratoire, les équations de circonférence s’écartent généralement d’environ 3 à 4 points de pourcentage, et davantage chez les personnes très minces ou très musclées.",
      measure: "Mesurez sur la peau nue, détendu et sans rentrer le ventre, et faites la moyenne de deux ou trois mesures.",
      noCategories: "Aucune catégorie de santé n’est indiquée ici ; demandez à un professionnel de santé comment interpréter votre résultat.",
      extreme: "Ce résultat est proche de la limite de ce pour quoi l’équation a été établie ; il est donc moins fiable.",
    },
  },
};

export default fr;
