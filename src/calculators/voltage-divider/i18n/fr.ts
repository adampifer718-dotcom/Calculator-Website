import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VoltageDividerText } from "../text/en";

const fr: CalculatorTranslation<VoltageDividerText> = {
  content: {
    title: "Calculateur de diviseur de tension",
    shortTitle: "Diviseur de tension",
    summary: "Calculez la tension de sortie d’un diviseur à deux résistances, ou la résistance nécessaire pour une tension cible, avec le courant, la puissance, l’effet de la charge et la valeur E24 la plus proche.",
    metaTitle: "Calculateur de diviseur de tension – Vout, R1, R2 et charge",
    metaDescription:
      "Calculez la sortie d’un diviseur de tension résistif ou trouvez R1 ou R2, avec le courant, la puissance des résistances, la sortie en charge et la valeur E24.",
    keywords: ["diviseur de tension", "pont diviseur", "formule Vout", "diviseur résistif", "calcul R1 R2", "rapport de division", "diviseur de tension en charge", "résistance E24"],
    intro: [
      "Un diviseur de tension est formé de deux résistances en série soumises à une tension. Le point situé entre elles se trouve à une fraction fixe de la tension d’entrée, déterminée uniquement par le rapport des résistances. Les diviseurs servent à abaisser un signal pour l’entrée d’un microcontrôleur, à fixer un point de polarisation ou à créer une référence.",
      "Ce calculateur trouve la tension de sortie à partir des deux résistances, ou la résistance nécessaire pour une sortie cible. Il indique aussi le courant dans le diviseur, la puissance dissipée par chaque résistance, l’effet d’une charge branchée et la valeur normalisée E24 la plus proche.",
    ],
    howToUse: [
      "Choisissez ce que vous cherchez : la tension de sortie, la résistance basse R2 ou la résistance haute R1.",
      "Saisissez la tension d’entrée et les valeurs connues, en choisissant Ω, kΩ ou MΩ pour chaque résistance.",
      "Saisissez éventuellement la résistance de la charge branchée sur la sortie pour voir de combien elle fait baisser la tension.",
      "Lisez le résultat, le courant et la puissance du diviseur et, si vous cherchez une résistance, la valeur E24 la plus proche et la sortie qu’elle donnerait.",
    ],
    formulas: [
      {
        title: "Sortie à vide",
        expression: "Vout = Vin × R2 ÷ (R1 + R2)",
        explanation: "R1 est la résistance haute (de l’entrée à la sortie) et R2 la résistance basse (de la sortie à la masse).",
      },
      {
        title: "Calcul d’une résistance",
        expression: "R2 = R1 × Vout ÷ (Vin − Vout)\nou R1 = R2 × (Vin − Vout) ÷ Vout",
        explanation: "Obtenues en réarrangeant l’équation du diviseur. Vout doit être compris entre 0 et Vin.",
      },
      {
        title: "Courant et puissance",
        expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2",
        explanation: "Le même courant traverse les deux résistances lorsque rien n’est branché sur la sortie.",
      },
      {
        title: "Sortie en charge",
        expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,charge = Vin × R2′ ÷ (R1 + R2′)",
        explanation: "Une charge RL est en parallèle avec R2, ce qui abaisse la résistance basse effective et donc la sortie.",
      },
    ],
    examples: [
      {
        title: "12 V aux bornes de 10 kΩ et 4,7 kΩ",
        steps: ["Vout = 12 × 4,7 ÷ (10 + 4,7) = 56,4 ÷ 14,7", "Vout ≈ 3,8367 V", "I = 12 V ÷ 14,7 kΩ ≈ 0,8163 mA"],
      },
      {
        title: "R2 pour obtenir 3,3 V à partir de 5 V avec R1 = 10 kΩ",
        steps: ["R2 = 10 kΩ × 3,3 ÷ (5 − 3,3) = 33 ÷ 1,7 kΩ", "R2 ≈ 19,4118 kΩ", "La valeur E24 la plus proche est 20 kΩ, ce qui donne 5 × 20 ÷ 30 ≈ 3,3333 V (1,01 % de trop)"],
      },
      {
        title: "R1 pour obtenir 2,5 V à partir de 9 V avec R2 = 1 kΩ et une charge de 10 kΩ",
        steps: ["R1 = 1 kΩ × (9 − 2,5) ÷ 2,5 = 2,6 kΩ", "Avec la charge, R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0,9091 kΩ", "Vout en charge = 9 × 0,9091 ÷ (2,6 + 0,9091) ≈ 2,3316 V, soit environ 6,74 % de moins"],
      },
    ],
    assumptions: [
      "Les résistances sont idéales et exactes. Les résistances réelles ont une tolérance (5 % pour les composants E24) : la sortie réelle peut donc différer de la valeur calculée.",
      "Sans résistance de charge, le diviseur est considéré à vide. Tout ce qui est branché sur la sortie, y compris un voltmètre, consomme du courant et abaisse la tension ; une charge d’au moins 10 fois la résistance de sortie du diviseur limite l’erreur.",
      "Un diviseur à vide n’est pas une alimentation. Sa sortie chute en charge et il consomme du courant en permanence : utilisez un régulateur de tension pour alimenter un circuit.",
      "L’entrée est une tension continue stable. Les effets de fréquence, comme les capacités parasites, ne sont pas modélisés.",
    ],
    faqs: [
      {
        question: "Quelle résistance est R1 et laquelle est R2 ?",
        answer: "R1 relie l’entrée au point de sortie et R2 relie le point de sortie à la masse. La sortie est prise aux bornes de R2 : une R2 plus grande donne donc une sortie plus élevée.",
      },
      {
        question: "Pourquoi la tension mesurée est-elle plus basse que la valeur calculée ?",
        answer: "Ce qui est branché sur la sortie agit comme une résistance en parallèle avec R2, ce qui abaisse la sortie. Saisissez sa résistance comme charge pour voir l’effet, ou utilisez des résistances de diviseur plus faibles pour que la charge compte moins.",
      },
      {
        question: "Comment choisir la valeur des résistances ?",
        answer: "Le rapport fixe la tension, tandis que la valeur absolue fixe le courant. Des résistances faibles gaspillent plus de puissance mais résistent mieux à la charge ; des résistances élevées économisent de la puissance mais sont sensibles à la charge et aux courants de fuite d’entrée. Comparez les puissances calculées aux puissances nominales des résistances.",
      },
    ],
    sourcesUsedFor: [
      "La relation du diviseur de tension Vout = Vin × R2 ÷ (R1 + R2) et la façon dont une résistance de charge abaisse la sortie.",
      "La série E24 de 24 valeurs normalisées de résistances par décade, utilisée pour la valeur normalisée la plus proche.",
    ],
  },
  text: {
    solve: "Calculer",
    solveOptions: { vout: "Tension de sortie (Vout)", r2: "Résistance basse (R2)", r1: "Résistance haute (R1)" },
    vin: "Tension d’entrée (Vin)",
    vout: "Tension de sortie souhaitée (Vout)",
    r1: "Résistance haute (R1)",
    r1Help: "La résistance entre l’entrée et le nœud de sortie.",
    r2: "Résistance basse (R2)",
    r2Help: "La résistance entre le nœud de sortie et la masse.",
    load: "Résistance de charge (RL, facultatif)",
    loadHelp: "La résistance de ce qui est branché sur la sortie. Elle se trouve en parallèle avec R2 et fait baisser la sortie. Laissez vide pour un diviseur à vide.",
    unit: "Unité",
    units: { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" },
    errors: {
      voutRange: "La tension de sortie doit être supérieure à 0 et inférieure à la tension d’entrée.",
    },
    voutResult: "Tension de sortie (à vide)",
    r2Result: "Résistance basse R2",
    r1Result: "Résistance haute R1",
    captionVout: "{vin} aux bornes de R1 = {r1} et R2 = {r2}.",
    captionR: "Donne {vout} à partir de {vin} avec {known}.",
    knownR1: "R1 = {r}",
    knownR2: "R2 = {r}",
    ratio: "Rapport de division (Vout ÷ Vin)",
    current: "Courant dans le diviseur (à vide)",
    p1: "Puissance dans R1",
    p2: "Puissance dans R2",
    rTotal: "Résistance totale (R1 + R2)",
    rOut: "Résistance de sortie (R1 ∥ R2)",
    vLoaded: "Tension de sortie avec la charge",
    drop: "Baisse due à la charge",
    loadCurrent: "Courant dans la charge",
    e24: "Valeur E24 la plus proche",
    e24Vout: "Tension de sortie avec la valeur E24",
    e24Error: "Écart de sortie avec la valeur E24",
    notes: {
      unloaded: "Ces valeurs concernent un diviseur à vide. Tout ce qui est branché sur la sortie consomme du courant et abaisse Vout ; saisissez une résistance de charge pour voir de combien.",
      loaded: "Avec la charge, R2 et RL en parallèle équivalent à {r} et la sortie baisse de {drop}.",
      heavyLoad: "La charge vaut moins de 10 fois la résistance de sortie du diviseur : elle modifie donc nettement la sortie. Utilisez des résistances de diviseur plus faibles ou un étage tampon si la tension doit rester stable.",
      supply: "Un diviseur de tension n’est pas une alimentation : sa sortie varie avec la charge et il gaspille de la puissance en permanence. Utilisez un régulateur pour alimenter un circuit.",
      e24: "E24 est la série normalisée de 24 valeurs préférentielles par décade, à 5 % de tolérance. La valeur la plus proche est celle dont l’écart absolu est le plus faible.",
    },
  },
};

export default fr;
