import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { KineticEnergyText } from "../text/en";

const fr: CalculatorTranslation<KineticEnergyText> = {
  content: {
    title: "Calculateur d’énergie cinétique",
    shortTitle: "Énergie cinétique",
    summary: "Calculez l’énergie cinétique d’un objet en mouvement à partir de sa masse et de sa vitesse.",
    metaTitle: "Calculateur d’énergie cinétique – Ec = ½mv²",
    metaDescription: "Calculez l’énergie cinétique à partir de la masse (kg ou lb) et de la vitesse (m/s, km/h ou mph). Résultats en joules, kilojoules et wattheures.",
    keywords: ["énergie cinétique", "calcul énergie cinétique", "formule 1/2 mv2", "joules", "masse et vitesse", "physique"],
    intro: [
      "L’énergie cinétique est l’énergie que possède un objet du fait de son mouvement. Elle croît avec le carré de la vitesse : doubler la vitesse quadruple l’énergie.",
      "Saisissez la masse et la vitesse dans les unités dont vous disposez.",
    ],
    howToUse: [
      "Saisissez la masse et choisissez kilogrammes ou livres.",
      "Saisissez la vitesse et choisissez m/s, km/h ou mph.",
      "Consultez l’énergie cinétique en joules et dans d’autres unités.",
    ],
    formulas: [
      { title: "Énergie cinétique", expression: "Ec = ½ × m × v²", explanation: "m en kilogrammes, v en mètres par seconde, Ec en joules." },
    ],
    examples: [
      {
        title: "1 000 kg à 20 m/s",
        steps: ["Ec = 0,5 × 1 000 × 20²", "= 200 000 J"],
      },
      {
        title: "Voiture de 1 500 kg à 100 km/h",
        steps: ["100 km/h ≈ 27,78 m/s", "Ec = 0,5 × 1 500 × 27,78² ≈ 578 704 J"],
      },
    ],
    assumptions: [
      "Utilise la mécanique classique, précise pour des vitesses très inférieures à celle de la lumière.",
      "L’énergie de rotation (par exemple celle des roues) n’est pas incluse.",
    ],
    faqs: [
      { question: "Pourquoi la vitesse compte-t-elle davantage que la masse ?", answer: "L’énergie cinétique dépend du carré de la vitesse. Passer de 50 à 100 km/h quadruple l’énergie." },
      { question: "En quelle unité mesure-t-on l’énergie cinétique ?", answer: "En joules (J). Un joule correspond à un kilogramme mètre carré par seconde carrée." },
      { question: "L’énergie cinétique peut-elle être négative ?", answer: "Non. La masse est positive et la vitesse est élevée au carré : l’énergie cinétique est donc nulle ou positive." },
    ],
    sourcesUsedFor: ["Définition Ec = ½mv².", "Facteurs de conversion exacts pour les livres, les km/h et les mph."],
  },
  text: {
    mass: "Masse",
    massUnit: "Unité de masse",
    massUnits: { kg: "Kilogrammes (kg)", lb: "Livres (lb)" },
    velocity: "Vitesse",
    velocityUnit: "Unité de vitesse",
    velocityUnits: { "m/s": "Mètres par seconde (m/s)", "km/h": "Kilomètres par heure (km/h)", mph: "Miles par heure (mph)" },
    energy: "Énergie cinétique",
    kj: "En kilojoules",
    wh: "En wattheures",
    mps: "Vitesse en m/s",
    note: "Énergie cinétique classique (non relativiste), précise pour les vitesses de la vie courante.",
  },
};

export default fr;
