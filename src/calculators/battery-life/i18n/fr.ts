import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BatteryLifeText } from "../text/en";

const fr: CalculatorTranslation<BatteryLifeText> = {
  content: {
    title: "Calculateur d’autonomie de batterie",
    shortTitle: "Autonomie de batterie",
    summary: "Estimez combien de temps une batterie peut alimenter un appareil à partir de sa capacité en mAh, Ah ou Wh et de la charge en mA, A ou W.",
    metaTitle: "Calculateur d’autonomie de batterie – Durée en mAh, Ah ou Wh",
    metaDescription: "Estimez l’autonomie d’une batterie selon sa capacité (mAh, Ah ou Wh) et la consommation (mA, A ou W), avec la profondeur de décharge, la durée et l’énergie.",
    keywords: ["autonomie batterie", "calcul autonomie batterie", "mAh en heures", "capacité batterie", "wattheures", "ampères-heures", "profondeur de décharge", "durée d’une batterie"],
    intro: [
      "La capacité d’une batterie indique la quantité de charge (en milliampères-heures ou en ampères-heures) ou d’énergie (en wattheures) qu’elle stocke. Diviser la part de cette capacité réellement utilisable par ce que consomme l’appareil donne une première estimation de son autonomie.",
      "Ce calculateur accepte une capacité en mAh, Ah ou Wh et une charge en mA, A ou W. Lorsque l’une est une charge électrique et l’autre une puissance, il utilise la tension de la batterie pour passer de l’une à l’autre. Utilisez-le pour dimensionner une batterie pour un capteur, une lampe de camping, une batterie externe ou une alimentation de secours.",
    ],
    howToUse: [
      "Saisissez la capacité de la batterie et choisissez mAh, Ah ou Wh.",
      "Saisissez la tension nominale de la batterie. Elle est nécessaire lorsqu’une valeur est en mAh ou Ah et l’autre en W ou Wh, et elle permet d’afficher l’énergie.",
      "Saisissez la consommation moyenne de l’appareil en mA, A ou W.",
      "Réglez la capacité utilisable (80 % par défaut) et lisez l’autonomie en heures et minutes, en heures décimales et en jours.",
    ],
    formulas: [
      { title: "Autonomie à partir de la charge", expression: "t (h) = capacité (mAh) ÷ consommation (mA) × fraction utilisable", explanation: "Les ampères-heures et les ampères fonctionnent de la même façon. La fraction utilisable est la profondeur de décharge, par exemple 0,8." },
      { title: "Autonomie à partir de l’énergie", expression: "t (h) = énergie (Wh) ÷ consommation (W) × fraction utilisable", explanation: "À utiliser lorsque la capacité est en wattheures et la consommation en watts." },
      { title: "De la charge à l’énergie", expression: "Wh = mAh × V ÷ 1000", explanation: "V est la tension nominale de la batterie. De même, une consommation en watts correspond à un courant de W ÷ V ampères." },
    ],
    examples: [
      {
        title: "Élément de 3 000 mAh alimentant un appareil de 150 mA",
        steps: ["Autonomie idéale = 3 000 ÷ 150 = 20 h", "Autonomie utilisable = 20 × 0,80 = 16 h", "Énergie = 3 000 × 3,7 ÷ 1000 = 11,1 Wh"],
      },
      {
        title: "Batterie au plomb de 100 Ah et 12 V alimentant une charge de 45 W jusqu’à 50 %",
        steps: ["Énergie = 100 Ah × 12 V = 1 200 Wh", "Énergie utilisable = 1 200 × 0,50 = 600 Wh", "Autonomie = 600 ÷ 45 ≈ 13,33 h = 13 h 20 min"],
      },
      {
        title: "Batterie d’ordinateur portable de 74 Wh avec une consommation moyenne de 18 W",
        steps: ["Énergie utilisable = 74 × 0,90 = 66,6 Wh", "Autonomie = 66,6 ÷ 18 = 3,7 h", "0,7 h × 60 = 42 min, soit environ 3 h 42 min"],
      },
    ],
    assumptions: [
      "La consommation est constante. Pour un appareil qui alterne veille et activité, saisissez son courant ou sa puissance moyens.",
      "La capacité réelle diminue par temps froid, avec le vieillissement de la batterie et à fort courant de décharge (l’effet Peukert, plus marqué sur les batteries au plomb). Ces effets ne sont pas modélisés : les fortes consommations tiendront donc moins longtemps qu’indiqué.",
      "Les conversions utilisent la tension nominale, bien que la tension baisse pendant la décharge, et les pertes des convertisseurs ou onduleurs ne sont pas incluses, sauf si vous réduisez la capacité utilisable pour en tenir compte.",
    ],
    faqs: [
      { question: "Quelle capacité utilisable saisir ?", answer: "Les batteries lithium-ion peuvent souvent utiliser 80 à 90 % de leur capacité nominale, tandis que les batteries au plomb durent plus longtemps si elles ne sont régulièrement déchargées qu’à environ 50 %. Si vous ne savez pas, 80 % est un point de départ prudent pour les petits appareils électroniques." },
      { question: "Pourquoi faut-il la tension ?", answer: "Les milliampères-heures mesurent une charge électrique, tandis que les watts et les wattheures mesurent une puissance et une énergie. Passer des uns aux autres nécessite la tension : les wattheures valent les ampères-heures multipliés par les volts. Si la capacité est en mAh et la consommation en mA, la tension n’est pas nécessaire pour l’autonomie." },
      { question: "Pourquoi ma batterie externe fournit-elle moins que ce que sa capacité en mAh laisse penser ?", answer: "Les batteries externes sont annoncées à la tension interne de leurs éléments, environ 3,7 V, mais la sortie USB est de 5 V ou plus, et le convertisseur de tension perd une partie de l’énergie sous forme de chaleur. Comparez en wattheures et réduisez la capacité utilisable pour tenir compte de ces pertes." },
    ],
    sourcesUsedFor: [
      "L’énergie d’une batterie en wattheures, égale aux volts × ampères-heures.",
      "La conversion d’une capacité en milliampères-heures en ampères-heures, en divisant par 1 000 avant de multiplier par la tension.",
      "La baisse de la capacité utilisable à fort courant de décharge (l’effet Peukert), que ce calculateur ne modélise pas.",
    ],
  },
  text: {
    capacity: "Capacité de la batterie",
    capacityUnit: "Unité de capacité",
    capacityUnits: { mAh: "Milliampères-heures (mAh)", Ah: "Ampères-heures (Ah)", Wh: "Wattheures (Wh)" },
    voltage: "Tension de la batterie",
    voltageHelp: "La tension nominale, par exemple 3,7 V pour un élément lithium-ion ou 12 V pour une batterie au plomb. Nécessaire lorsque la capacité et la consommation utilisent des unités différentes (charge et puissance), et pour afficher l’énergie.",
    load: "Consommation de l’appareil",
    loadUnit: "Unité de consommation",
    loadUnits: { mA: "Milliampères (mA)", A: "Ampères (A)", W: "Watts (W)" },
    depth: "Capacité utilisable (profondeur de décharge)",
    depthHelp: "La part de la capacité nominale réellement utilisable. 80 % est une marge courante pour les pertes et pour protéger la batterie ; utilisez 100 % pour la valeur idéale.",
    errors: {
      voltageNeeded: "Saisissez la tension de la batterie pour convertir entre charge (mAh ou Ah) et puissance ou énergie (W ou Wh).",
    },
    runtime: "Autonomie estimée (h:mm)",
    runtimeText: "{h}:{mm}",
    caption: "Batterie de {capacity} alimentant une charge de {load}, en utilisant {depth} de sa capacité.",
    hours: "Autonomie en heures",
    days: "Autonomie en jours",
    energy: "Énergie nominale",
    usableEnergy: "Énergie utilisable",
    current: "Courant consommé",
    power: "Puissance consommée",
    notes: {
      constant: "Le calcul suppose une consommation constante. Un appareil qui se met en veille puis se réveille consomme un courant moyen : utilisez cette moyenne.",
      peukert: "La capacité réelle diminue par temps froid, avec le vieillissement de la batterie et à fort courant de décharge (l’effet Peukert, non modélisé ici) : attendez-vous à une autonomie plus courte avec de fortes consommations.",
      conversion: "La tension a servi à convertir entre charge et énergie (Wh = Ah × V) ; cela ne tient pas compte de la baisse de tension pendant la décharge.",
    },
  },
};

export default fr;
