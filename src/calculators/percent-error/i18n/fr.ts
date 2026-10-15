import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentErrorText } from "../text/en";

const fr: CalculatorTranslation<PercentErrorText> = {
  content: {
    title: "Calculateur de pourcentage d’erreur",
    shortTitle: "Pourcentage d’erreur",
    summary: "Comparez une valeur mesurée à la valeur vraie sous forme de pourcentage d’erreur, avec l’erreur absolue et l’erreur relative signée.",
    metaTitle: "Calculateur de pourcentage d’erreur – Mesure et valeur vraie",
    metaDescription:
      "Calculez le pourcentage d’erreur entre une valeur mesurée et la valeur vraie, avec l’erreur absolue, l’erreur relative signée et le sens de l’écart.",
    keywords: ["pourcentage d’erreur", "erreur relative", "erreur absolue", "erreur en pourcentage", "valeur expérimentale", "valeur de référence", "compte rendu de TP", "exactitude"],
    intro: [
      "Le pourcentage d’erreur indique à quelle distance une mesure se trouve de la valeur attendue, en proportion de cette valeur vraie. C’est une façon courante d’exprimer l’exactitude d’un résultat en travaux pratiques.",
      "Saisissez la valeur mesurée et la valeur de référence. En plus du pourcentage d’erreur, le calculateur indique la taille brute de l’erreur et si votre résultat est trop élevé ou trop faible.",
    ],
    howToUse: [
      "Saisissez votre valeur mesurée (expérimentale).",
      "Saisissez la valeur vraie (de référence ou théorique) dans la même unité. Elle ne doit pas valoir 0.",
      "Lisez le pourcentage d’erreur. Plus il est petit, plus la mesure est exacte.",
      "Consultez l’erreur relative signée ou la ligne « Sens de l’écart » pour savoir si vous avez surestimé ou sous-estimé.",
    ],
    formulas: [
      {
        title: "Pourcentage d’erreur",
        expression: "pourcentage d’erreur = |mesurée − vraie| ÷ |vraie| × 100 %",
        explanation: "La taille de l’erreur en pourcentage de la valeur vraie. Il est toujours nul ou positif.",
      },
      { title: "Erreur absolue", expression: "erreur absolue = |mesurée − vraie|", explanation: "L’erreur exprimée dans l’unité de mesure d’origine." },
      {
        title: "Erreur relative signée",
        expression: "erreur relative = (mesurée − vraie) ÷ |vraie| × 100 %",
        explanation: "Positive quand la mesure est trop élevée, négative quand elle est trop faible.",
      },
    ],
    examples: [
      {
        title: "Mesure de l’accélération de la pesanteur avec un pendule",
        steps: [
          "Erreur absolue = |9,62 − 9,81| = 0,19 m/s²",
          "Pourcentage d’erreur = 0,19 ÷ 9,81 × 100 % ≈ 1,9368 %",
          "L’erreur relative signée vaut environ −1,9368 % : la mesure est donc trop faible.",
        ],
      },
      {
        title: "Chronométrage de la vitesse du son",
        steps: ["Erreur absolue = |342,5 − 343| = 0,5 m/s", "Pourcentage d’erreur = 0,5 ÷ 343 × 100 % ≈ 0,1458 %"],
      },
      {
        title: "Une valeur de référence négative : le potentiel d’électrode du zinc",
        steps: [
          "Erreur absolue = |−0,79 − (−0,76)| = 0,03 V",
          "Pourcentage d’erreur = 0,03 ÷ |−0,76| × 100 % ≈ 3,9474 %",
          "La mesure est inférieure à la valeur de référence : l’erreur relative signée vaut donc environ −3,9474 %.",
        ],
      },
    ],
    assumptions: [
      "Les deux valeurs sont dans la même unité. Le pourcentage d’erreur est sans unité, mais l’erreur absolue est exprimée dans l’unité saisie.",
      "On divise par la valeur absolue de la valeur vraie : le pourcentage d’erreur reste donc positif même si la valeur de référence est négative.",
      "Le pourcentage d’erreur n’a pas de sens pour des grandeurs mesurées sur une échelle d’intervalle dont le zéro est arbitraire, comme les températures en °C ou en °F, sauf si vous avez une raison de vous référer à ce zéro. Le kelvin évite ce problème.",
    ],
    faqs: [
      {
        question: "Le pourcentage d’erreur peut-il être négatif ?",
        answer: "Selon la définition habituelle, non, car il utilise la valeur absolue de l’écart. Certains cours conservent le signe pour indiquer le sens de l’écart ; cette version est affichée ici sous le nom d’erreur relative signée.",
      },
      {
        question: "Qu’est-ce qu’un bon pourcentage d’erreur ?",
        answer: "Cela dépend de l’expérience et du matériel. Dans beaucoup de TP scolaires, quelques pour cent sont considérés comme un bon résultat, alors que les mesures de précision visent bien moins. Renseignez-vous sur la tolérance attendue par votre cours ou votre méthode.",
      },
      {
        question: "Quelle est la différence entre pourcentage d’erreur et pourcentage de différence ?",
        answer: "Le pourcentage d’erreur compare une mesure à une valeur vraie connue. Le pourcentage de différence compare deux mesures entre elles, généralement en divisant par leur moyenne, lorsqu’aucune ne sert de référence.",
      },
    ],
    sourcesUsedFor: ["Définition du pourcentage d’erreur : l’erreur absolue divisée par la valeur de référence, multipliée par 100 %."],
  },
  text: {
    measured: "Valeur mesurée",
    measuredHelp: "La valeur expérimentale ou observée.",
    trueValue: "Valeur vraie",
    trueHelp: "La valeur de référence, théorique ou admise. Elle ne peut pas valoir 0.",
    trueZero: "La valeur vraie ne peut pas valoir 0, car le pourcentage d’erreur divise par celle-ci.",
    percentError: "Pourcentage d’erreur",
    absoluteError: "Erreur absolue |mesurée − vraie|",
    relativeError: "Erreur relative signée",
    direction: "Sens de l’écart",
    over: "La mesure est supérieure à la valeur vraie (surestimation).",
    under: "La mesure est inférieure à la valeur vraie (sous-estimation).",
    exact: "La mesure est égale à la valeur vraie.",
    note: "Le pourcentage d’erreur utilise la taille de l’erreur : il n’est donc jamais négatif. L’erreur relative signée conserve le sens de l’écart.",
  },
};

export default fr;
