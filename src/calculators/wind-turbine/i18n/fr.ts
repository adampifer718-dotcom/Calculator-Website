import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WindTurbineText } from "../text/en";

const fr: CalculatorTranslation<WindTurbineText> = {
  content: {
    title: "Calculateur de puissance d’éolienne",
    shortTitle: "Puissance d’éolienne",
    summary: "Estimez la puissance produite par une éolienne à partir du diamètre du rotor, de la vitesse du vent, de la masse volumique de l’air et du coefficient de puissance, avec une estimation approximative de l’énergie annuelle.",
    metaTitle: "Calculateur de puissance d’éolienne – kW et kWh annuels",
    metaDescription: "Puissance d’une éolienne selon le diamètre du rotor, le vent, la densité de l’air et le Cp, comparée à la limite de Betz, avec les kWh annuels estimés.",
    keywords: ["puissance éolienne", "calcul éolienne", "formule puissance du vent", "surface balayée", "coefficient de puissance", "limite de Betz", "facteur de charge", "production éolienne kWh"],
    intro: [
      "Une éolienne convertit une partie de l’énergie cinétique de l’air en mouvement en électricité. La puissance disponible dépend de la quantité d’air qui traverse le cercle balayé par les pales, de la masse volumique de cet air et surtout de sa vitesse : la puissance croît avec le cube de la vitesse du vent, si bien qu’un vent deux fois plus rapide donne huit fois plus de puissance.",
      "Saisissez le diamètre du rotor, la vitesse du vent et le coefficient de puissance de l’éolienne pour estimer sa production. Vous pouvez aussi plafonner le résultat à la puissance nominale de la génératrice et ajouter un facteur de charge pour obtenir une estimation approximative de l’énergie annuelle.",
    ],
    howToUse: [
      "Saisissez le diamètre du rotor en mètres ou en pieds.",
      "Saisissez la vitesse du vent à hauteur du moyeu et choisissez son unité.",
      "Gardez la masse volumique standard de l’air de 1,225 kg/m³, ou saisissez une valeur adaptée à votre altitude et à votre température.",
      "Saisissez le coefficient de puissance Cp. 0,40 est une valeur raisonnable pour une bonne éolienne moderne ; il ne peut pas dépasser la limite de Betz d’environ 0,593.",
      "Saisissez éventuellement la puissance nominale pour plafonner la production, et un facteur de charge pour estimer l’énergie sur une année.",
    ],
    formulas: [
      { title: "Surface balayée", expression: "A = π × (D ÷ 2)²", explanation: "D est le diamètre du rotor. Un rotor de 80 m balaie environ 5 027 m²." },
      { title: "Puissance de l’éolienne", expression: "P = ½ × ρ × A × v³ × Cp", explanation: "ρ est la masse volumique de l’air en kg/m³, v la vitesse du vent en m/s et Cp le coefficient de puissance. Le résultat est en watts." },
      { title: "Limite de Betz", expression: "Cp ≤ 16/27 ≈ 0,593", explanation: "Un rotor idéal peut capter au plus 16/27 de la puissance du vent qui le traverse. Les éoliennes réelles en captent moins, généralement nettement moins de 0,5, même à leur point de fonctionnement optimal." },
      { title: "Énergie annuelle (approximative)", expression: "E = P × 8 760 h × facteur de charge", explanation: "P est la production, plafonnée à la puissance nominale si elle est indiquée. Le facteur de charge tient compte des périodes où le vent est plus faible." },
    ],
    examples: [
      {
        title: "Rotor de 80 m dans un vent de 10 m/s",
        steps: ["A = π × 40² ≈ 5 026,55 m²", "P = 0,5 × 1,225 × 5 026,55 × 10³ × 0,40 ≈ 1 231 504 W", "Production ≈ 1 231,50 kW, soit environ 1,23 MW"],
      },
      {
        title: "Petite éolienne de 10 ft dans une brise de 12 mph",
        steps: ["D = 10 × 0,3048 = 3,048 m, donc A ≈ 7,297 m²", "v = 12 × 0,44704 = 5,364 m/s", "P = 0,5 × 1,225 × 7,297 × 5,364³ × 0,35 ≈ 241 W, soit environ 0,24 kW"],
      },
      {
        title: "Rotor de 100 m de 2 500 kW nominaux, vent de 12 m/s, facteur de charge de 35 %",
        steps: [
          "A = π × 50² ≈ 7 853,98 m²",
          "Puissance du rotor = 0,5 × 1,225 × 7 853,98 × 12³ × 0,45 ≈ 3 740,69 kW, au-delà de la puissance nominale de 2 500 kW",
          "La production est plafonnée à 2 500 kW",
          "Énergie annuelle ≈ 2 500 × 8 760 × 0,35 = 7 665 000 kWh",
        ],
      },
    ],
    assumptions: [
      "La vitesse du vent est supposée constante et uniforme sur tout le rotor. Le vent réel varie d’une seconde à l’autre et avec la hauteur, et comme la puissance dépend du cube de la vitesse, la puissance moyenne est supérieure à la puissance calculée à la vitesse moyenne.",
      "Le coefficient de puissance est considéré comme constant. En réalité, il varie avec la vitesse du vent, et chaque éolienne a sa propre courbe de puissance, sa vitesse de démarrage et sa vitesse de coupure.",
      "L’énergie annuelle est une estimation approximative fondée sur la formule ci-dessus, et non une étude de site. Un projet d’installation réel nécessite des mesures de vent et la courbe de puissance du fabricant.",
      "Les pertes de la génératrice, du multiplicateur et du système électrique sont supposées incluses dans le coefficient de puissance que vous saisissez.",
    ],
    faqs: [
      { question: "Qu’est-ce que la limite de Betz ?", answer: "C’est la part maximale théorique de la puissance du vent qu’un rotor peut extraire : 16/27, soit environ 59,3 %. Si un rotor arrêtait complètement l’air, plus aucun air ne pourrait le traverser ; une partie de l’énergie doit donc toujours rester dans le vent qui quitte l’éolienne." },
      { question: "Pourquoi la vitesse du vent compte-t-elle autant ?", answer: "La puissance du vent croît avec le cube de la vitesse. Un site où le vent moyen est de 7 m/s dispose d’environ 31 % de puissance en plus ((7 ÷ 6,4)³ ≈ 1,31) qu’un site à 6,4 m/s ; de petites différences d’emplacement et de hauteur de mât ont donc un effet important." },
      { question: "Quel facteur de charge utiliser ?", answer: "Il dépend fortement du site, de la hauteur du mât et de l’éolienne : il n’existe donc pas de valeur juste unique. Utilisez des mesures de vent sur votre site, ou les chiffres publiés pour des éoliennes similaires dans votre région. Les petites éoliennes placées dans des endroits abrités atteignent souvent des valeurs bien plus faibles que les grandes éoliennes installées sur des sites dégagés et venteux." },
    ],
    sourcesUsedFor: [
      "La puissance du vent, P = ½ρAv³, le coefficient de puissance et la limite de Betz de 16/27.",
      "La masse volumique de l’air au niveau de la mer de l’atmosphère type internationale, 1,225 kg/m³.",
    ],
  },
  text: {
    diameter: "Diamètre du rotor",
    diameterHelp: "Le diamètre du cercle balayé par l’extrémité des pales (deux fois la longueur d’une pale plus le moyeu).",
    diameterUnit: "Unité de diamètre",
    diameterUnits: { m: "Mètres (m)", ft: "Pieds (ft)" },
    speed: "Vitesse du vent",
    speedHelp: "La vitesse du vent à hauteur du moyeu. La puissance augmente avec le cube de la vitesse : un petit écart compte beaucoup.",
    speedUnit: "Unité de vitesse",
    speedUnits: { ms: "Mètres par seconde (m/s)", kmh: "Kilomètres par heure (km/h)", mph: "Miles par heure (mph)", kn: "Nœuds (kn)" },
    density: "Masse volumique de l’air",
    densityHelp: "1,225 kg/m³ est la valeur de l’atmosphère type internationale au niveau de la mer et à 15 °C. L’air est moins dense en altitude et par temps chaud.",
    cp: "Coefficient de puissance (Cp)",
    cpHelp: "La part de la puissance du vent que le rotor convertit en production. 0,40 est une valeur raisonnable pour une bonne éolienne moderne ; le maximum théorique est 16/27 ≈ 0,593 (la limite de Betz).",
    ratedPower: "Puissance nominale (facultatif)",
    ratedPowerHelp: "La puissance indiquée sur la plaque signalétique de la génératrice. Si elle est renseignée, la production est plafonnée à cette valeur.",
    capacityFactor: "Facteur de charge (facultatif)",
    capacityFactorHelp: "La production moyenne sur une année, en pourcentage de la puissance utilisée pour l’estimation. Laissez vide pour ne pas calculer l’énergie annuelle.",
    errors: {
      betz: "Le coefficient de puissance ne peut pas dépasser 16/27 ≈ 0,5926 (la limite de Betz). Aucun rotor ne peut capter une plus grande part de la puissance du vent.",
    },
    power: "Puissance produite par l’éolienne",
    caption: "Surface balayée {area}, vent {speed}, Cp {cp}.",
    powerW: "Puissance en watts",
    aeroPower: "Puissance du rotor avant plafonnement à la puissance nominale",
    windPower: "Puissance du vent traversant la surface balayée (Cp = 1)",
    betzPower: "Puissance maximale captable par un rotor (limite de Betz)",
    sweptArea: "Surface balayée",
    speedMs: "Vitesse du vent en m/s",
    annualEnergy: "Énergie annuelle, estimation approximative",
    annualEnergyMwh: "Énergie annuelle en MWh",
    notes: {
      capped: "À cette vitesse de vent, le rotor pourrait produire davantage que la puissance nominale : la production est donc plafonnée à la puissance nominale de {rated}.",
      annual: "L’énergie annuelle est une estimation approximative : la puissance ci-dessus × 8 760 heures × le facteur de charge. La production réelle dépend des variations du vent au cours de l’année, de la courbe de puissance de l’éolienne, des arrêts et des pertes.",
      single: "Il s’agit de la production à une seule vitesse de vent constante. Le vent réel change sans cesse, et les éoliennes ne produisent rien en dessous de leur vitesse de démarrage et s’arrêtent au-dessus de leur vitesse de coupure.",
    },
  },
};

export default fr;
