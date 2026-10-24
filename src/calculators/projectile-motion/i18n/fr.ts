import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProjectileMotionText } from "../text/en";

const fr: CalculatorTranslation<ProjectileMotionText> = {
  content: {
    title: "Calculateur de mouvement d’un projectile",
    shortTitle: "Mouvement d’un projectile",
    summary: "Trouvez la portée, la durée de vol, la hauteur maximale et la vitesse d’impact d’un objet lancé, depuis n’importe quelle hauteur, sur la Terre, la Lune ou Mars.",
    metaTitle: "Mouvement d’un projectile – Portée, hauteur et durée de vol",
    metaDescription: "Saisissez vitesse, angle et hauteur de lancement pour obtenir la portée, la durée de vol, la hauteur maximale et la vitesse d’impact. Sans frottement de l’air.",
    keywords: ["mouvement d’un projectile", "trajectoire", "portée", "durée de vol", "hauteur maximale", "angle de tir", "cinématique", "parabole"],
    intro: [
      "Une balle lancée, un ballon frappé du pied ou un jet d’eau suivent presque la même courbe une fois en l’air : ils continuent d’avancer horizontalement à vitesse constante pendant que la pesanteur les tire vers le bas avec une accélération constante. Le résultat est une parabole.",
      "Indiquez la vitesse de lancement, l’angle au-dessus de l’horizontale et la hauteur au-dessus du sol d’arrivée. Le calculateur trouve la distance parcourue par l’objet, sa durée de vol, la hauteur qu’il atteint et sa vitesse à l’arrivée, et donne sa position à dix instants du vol.",
    ],
    howToUse: [
      "Saisissez la vitesse de lancement et choisissez son unité.",
      "Saisissez l’angle de lancement en degrés au-dessus de l’horizontale, de 0° (tir horizontal) à 90° (verticalement vers le haut).",
      "Saisissez la hauteur de lancement au-dessus du sol d’arrivée, et choisissez les mètres ou les pieds pour les hauteurs et les distances.",
      "Choisissez la Terre, la Lune, Mars ou votre propre valeur de pesanteur, puis lisez la portée et les autres résultats.",
    ],
    formulas: [
      { title: "Composantes de la vitesse", expression: "vₓ = v·cos θ, v_y = v·sin θ", explanation: "La composante horizontale reste constante ; la composante verticale varie de g à chaque seconde." },
      { title: "Durée de vol", expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g", explanation: "La racine positive de h + v_y·t − ½·g·t² = 0, qui tient compte de la hauteur de lancement h." },
      { title: "Portée et sommet", expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_apex = v_y ÷ g", explanation: "La distance horizontale, le point le plus haut au-dessus du sol et l’instant où il est atteint." },
      { title: "Impact", expression: "v_impact = √(vₓ² + v_y² + 2·g·h), angle = atan(√(v_y² + 2·g·h) ÷ vₓ)", explanation: "La vitesse et l’angle sous l’horizontale avec lesquels l’objet touche le sol." },
    ],
    examples: [
      {
        title: "Un ballon frappé à 25 m/s et 35° depuis le sol",
        steps: ["vₓ = 25 cos 35° ≈ 20,479 m/s, v_y = 25 sin 35° ≈ 14,339 m/s", "T = 2 × 14,339 ÷ 9,80665 ≈ 2,924 s", "R = 20,479 × 2,924 ≈ 59,89 m ; sommet ≈ 10,48 m"],
      },
      {
        title: "Un lancer à 15 m/s et 20°, lâché à 1,8 m du sol",
        steps: ["vₓ ≈ 14,095 m/s, v_y ≈ 5,130 m/s", "T = (5,130 + √(5,130² + 2 × 9,80665 × 1,8)) ÷ 9,80665 ≈ 1,324 s", "R = 14,095 × 1,324 ≈ 18,66 m ; il arrive au sol à environ 16,13 m/s"],
      },
      {
        title: "Un coup de golf à 40 m/s et 45° sur la Lune",
        steps: ["Sur un sol plat, R = v² sin(2θ) ÷ g = 1 600 × 1 ÷ 1,62", "R ≈ 987,65 m, environ six fois plus loin que sur la Terre", "Durée de vol ≈ 34,92 s"],
      },
    ],
    assumptions: [
      "La résistance de l’air, le vent, l’effet de rotation et la portance sont ignorés. Les trajectoires réelles sont plus courtes et plus basses, et un vrai projectile retombe plus abruptement que ne le prévoit ce modèle.",
      "La pesanteur est constante et dirigée verticalement vers le bas, et le sol est plat et horizontal. C’est une bonne approximation aux distances courantes, mais pas pour la balistique à longue portée.",
      "La Terre utilise la pesanteur normale, 9,80665 m/s² (valeur exacte par définition). La pesanteur réelle varie d’environ ±0,3 % selon la latitude et l’altitude. Les valeurs de la Lune et de Mars sont les valeurs moyennes en surface publiées par la NASA.",
      "La hauteur de lancement est mesurée au-dessus du point d’arrivée. Une arrivée plus haute que le point de lancement n’est pas prise en charge.",
    ],
    faqs: [
      { question: "Quel angle donne la plus grande portée ?", answer: "Depuis le sol et sans frottement, 45° donne la portée maximale. Un lancement en hauteur fait passer l’angle optimal sous 45°, et la résistance de l’air le réduit encore dans la réalité." },
      { question: "La masse de l’objet compte-t-elle ?", answer: "Pas sans résistance de l’air : tous les objets tombent avec la même accélération g, donc la trajectoire ne dépend que de la vitesse, de l’angle, de la hauteur et de la pesanteur." },
      { question: "Pourquoi la vitesse d’impact dépasse-t-elle la vitesse de lancement quand je pars d’une hauteur ?", answer: "L’objet descend plus qu’il n’est monté, donc la pesanteur lui ajoute de la vitesse verticale. La vitesse horizontale ne change jamais : l’angle d’impact est donc plus prononcé que l’angle de lancement." },
    ],
    sourcesUsedFor: [
      "Décomposition du mouvement en parties horizontale et verticale indépendantes ; portée, durée de vol, hauteur maximale et vitesse d’impact sans résistance de l’air.",
      "Pesanteur à la surface de la Lune, 1,62 m/s².",
      "Pesanteur moyenne à la surface de Mars, 3,73 m/s².",
    ],
  },
  text: {
    speed: "Vitesse de lancement",
    speedUnit: "Unité de vitesse",
    speedUnits: { ms: "Mètres par seconde (m/s)", kmh: "Kilomètres par heure (km/h)", mph: "Miles par heure (mph)", fts: "Pieds par seconde (ft/s)" },
    angle: "Angle de lancement",
    angleHelp: "Mesuré à partir de l’horizontale : 0° est un tir horizontal, 90° un tir vertical vers le haut.",
    height: "Hauteur de lancement",
    heightHelp: "Hauteur au-dessus du sol où le projectile retombe. Saisissez 0 pour un lancement depuis le sol.",
    lengthUnit: "Unité de longueur",
    lengthUnitHelp: "Utilisée pour la hauteur de lancement ainsi que pour les distances et hauteurs des résultats.",
    lengthUnits: { m: "Mètres (m)", ft: "Pieds (ft)" },
    gravity: "Pesanteur",
    gravityOptions: {
      earth: "Terre, pesanteur normale (9,80665 m/s²)",
      moon: "Lune (1,62 m/s²)",
      mars: "Mars (3,73 m/s²)",
      custom: "Personnalisée",
    },
    customGravity: "Pesanteur personnalisée",
    customGravityHelp: "Accélération vers le bas en mètres par seconde carrée.",
    flatLaunch: "Un tir horizontal depuis le sol ne quitte jamais le sol. Augmentez l’angle ou la hauteur de lancement.",
    range: "Portée horizontale",
    caption: "Distance horizontale entre le point de lancement et le point d’impact au sol.",
    flightTime: "Durée de vol",
    maxHeight: "Hauteur maximale au-dessus du sol",
    apexTime: "Temps pour atteindre le point le plus haut",
    impactSpeed: "Vitesse d’impact",
    impactAngle: "Angle d’impact (sous l’horizontale)",
    components: "Composantes de la vitesse initiale (horizontale, verticale)",
    componentsText: "{vx}, {vy}",
    tableCaption: "Position pendant le vol",
    tableColumns: { time: "Temps", x: "Distance horizontale", y: "Hauteur" },
    verticalNote: "À 90°, le projectile monte verticalement et retombe au point de lancement : la portée est donc nulle.",
    note: "La résistance de l’air est ignorée. Les trajectoires réelles sont plus courtes et plus basses, car la traînée ralentit le projectile, surtout à grande vitesse.",
  },
};

export default fr;
