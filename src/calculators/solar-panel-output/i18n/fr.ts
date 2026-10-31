import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SolarPanelOutputText } from "../text/en";

const fr: CalculatorTranslation<SolarPanelOutputText> = {
  content: {
    title: "Calculateur de production de panneaux solaires",
    shortTitle: "Production solaire",
    summary: "Estimez combien de kilowattheures un ensemble de panneaux solaires produit par jour, par mois et par an, et quelle taille d’installation couvrirait votre consommation d’électricité.",
    metaTitle: "Production de panneaux solaires – kWh par jour et par an",
    metaDescription:
      "Estimez la production solaire en kWh par jour, mois et an selon la puissance des panneaux, les heures de plein soleil et les pertes, et dimensionnez le système.",
    keywords: ["calcul panneaux solaires", "production panneau solaire", "kWh solaire par an", "heures de plein soleil", "taille installation solaire", "combien de panneaux solaires", "pertes système photovoltaïque", "estimation énergie solaire"],
    intro: [
      "La puissance nominale d’un panneau solaire indique ce qu’il produit dans les conditions d’essai standard : un ensoleillement de 1 000 watts par mètre carré à une température de cellule de 25 °C. La production réelle dépend de la quantité de lumière solaire qui atteint vraiment les panneaux au cours d’une journée, généralement résumée en heures de plein soleil, et des pertes dans le reste de l’installation.",
      "Saisissez la puissance d’un panneau, le nombre de panneaux, vos heures de plein soleil et les pertes du système pour estimer l’énergie produite par jour, par mois et par an. Ajoutez votre consommation annuelle d’électricité pour voir la part couverte par l’installation et le nombre de panneaux qui la couvriraient entièrement.",
    ],
    howToUse: [
      "Saisissez la puissance d’un panneau en watts, indiquée sur son étiquette ou sa fiche technique, et le nombre de panneaux.",
      "Saisissez les heures de plein soleil de votre site. La valeur par défaut de 4,5 n’est qu’un exemple : cherchez une valeur pour votre lieu, ou utilisez un outil de ressource solaire.",
      "Gardez les 14 % de pertes par défaut, ou saisissez votre propre estimation des pertes liées à l’onduleur, au câblage, à la chaleur, à la saleté et à l’ombrage.",
      "Saisissez éventuellement votre consommation annuelle d’électricité en kWh, d’après vos factures, pour voir la part couverte et la taille d’installation nécessaire.",
    ],
    formulas: [
      {
        title: "Énergie quotidienne",
        expression: "E(jour) = puissance (W) × panneaux ÷ 1 000 × heures de plein soleil × (1 − pertes ÷ 100)",
        explanation: "Puissance × panneaux ÷ 1 000 donne la taille de l’installation en kW. En multipliant par les heures de plein soleil, on obtient les kWh à pleine puissance nominale, et le facteur de pertes les ramène à ce qui arrive dans votre logement.",
      },
      {
        title: "Énergie annuelle et mensuelle",
        expression: "E(an) = E(jour) × 365 ;  E(mois) = E(an) ÷ 12",
        explanation: "Le chiffre mensuel est une moyenne. La production réelle est plus élevée en été et plus faible en hiver.",
      },
      {
        title: "Taille d’installation pour votre consommation",
        expression: "taille (kW) = consommation annuelle ÷ (365 × heures de plein soleil × (1 − pertes ÷ 100))",
        explanation: "Le nombre de panneaux nécessaires vaut cette taille × 1 000 ÷ puissance d’un panneau, arrondi au panneau entier supérieur.",
      },
    ],
    examples: [
      {
        title: "Dix panneaux de 400 W avec 4,5 heures de plein soleil",
        steps: ["Taille de l’installation = 400 × 10 ÷ 1 000 = 4 kW", "Énergie quotidienne = 4 × 4,5 × (1 − 0,14) = 15,48 kWh", "Énergie annuelle = 15,48 × 365 = 5 650,2 kWh"],
      },
      {
        title: "Seize panneaux de 350 W, 5,2 heures de soleil, 11 000 kWh consommés par an",
        steps: [
          "Taille de l’installation = 350 × 16 ÷ 1 000 = 5,6 kW",
          "Énergie quotidienne = 5,6 × 5,2 × 0,86 = 25,0432 kWh, soit 25,0432 × 365 ≈ 9 140,77 kWh par an",
          "Part couverte = 9 140,77 ÷ 11 000 ≈ 83,1 %",
          "Taille nécessaire = 11 000 ÷ (365 × 5,2 × 0,86) ≈ 6,74 kW, soit 6 739 ÷ 350 ≈ 19,25, arrondi à 20 panneaux",
        ],
      },
      {
        title: "Six panneaux de 450 W dans une région plus nuageuse, avec 10 % de pertes",
        steps: ["Taille de l’installation = 450 × 6 ÷ 1 000 = 2,7 kW", "Énergie quotidienne = 2,7 × 3,2 × 0,90 = 7,776 kWh", "Énergie annuelle = 7,776 × 365 = 2 838,24 kWh"],
      },
    ],
    assumptions: [
      "Les heures de plein soleil dépendent de votre lieu, de l’inclinaison et de l’orientation des panneaux, de l’ombrage et de la saison. La valeur saisie est utilisée comme moyenne sur toute l’année. Pour une estimation réelle, utilisez un outil local de ressource solaire comme PVWatts du NREL.",
      "Les 14 % de pertes par défaut sont une valeur couramment utilisée qui couvre notamment l’onduleur, le câblage, l’encrassement, la dispersion entre panneaux et la disponibilité. Votre installation peut perdre plus ou moins.",
      "La production des panneaux baisse aussi lorsque les cellules sont chaudes, et lentement avec l’âge. Ces effets ne sont pris en compte que dans la mesure où ils font partie du chiffre de pertes saisi.",
      "La part de consommation couverte compare uniquement des totaux annuels. Elle ne tient compte ni du moment où l’énergie est produite et consommée, ni du stockage par batterie, ni des règles d’injection sur le réseau.",
    ],
    faqs: [
      {
        question: "Que sont les heures de plein soleil ?",
        answer: "Elles expriment l’énergie solaire d’une journée en nombre d’heures d’ensoleillement maximal à 1 000 W/m² qui fourniraient la même énergie. Un site qui reçoit 5 kWh par mètre carré dans la journée a 5 heures de plein soleil, même si le soleil est levé bien plus longtemps.",
      },
      {
        question: "Pourquoi la production est-elle inférieure à puissance × heures ?",
        answer: "La puissance des panneaux est mesurée dans des conditions de laboratoire idéales. En service, de l’énergie se perd dans l’onduleur et le câblage, à cause de la chaleur, de la poussière et de l’ombrage, et du fait de petites différences entre panneaux. Le pourcentage de pertes regroupe tous ces effets.",
      },
      {
        question: "De combien de panneaux ai-je besoin ?",
        answer: "Saisissez votre consommation annuelle d’électricité. Le calculateur la divise par l’énergie que produit en un an un kW de panneaux avec vos heures de soleil et vos pertes, puis convertit cette taille en panneaux entiers de la puissance saisie.",
      },
    ],
    sourcesUsedFor: ["Le modèle PVWatts et ses pertes totales du système de 14 % par défaut."],
  },
  text: {
    panelWatts: "Puissance d’un panneau",
    panelWattsHelp: "La puissance nominale d’un panneau dans les conditions d’essai standard (STC), indiquée sur son étiquette ou sa fiche technique.",
    panels: "Nombre de panneaux",
    sunHours: "Heures de plein soleil par jour",
    sunHoursHelp: "L’énergie solaire quotidienne de votre site exprimée en heures de plein soleil (1 kW/m²). 4,5 n’est qu’un exemple ; la bonne valeur dépend de votre lieu, de l’inclinaison et de l’orientation des panneaux, et de la saison.",
    losses: "Pertes du système",
    lossesHelp: "Pertes dues à l’onduleur, au câblage, à la chaleur, à la saleté, à l’ombrage et à la dispersion entre panneaux. 14 % est une valeur par défaut couramment utilisée.",
    annualUsage: "Consommation annuelle d’électricité (facultatif)",
    annualUsageHelp: "Votre consommation annuelle d’après vos factures d’électricité, pour voir quelle part l’installation en couvre et quelle taille la couvrirait entièrement.",
    errors: {
      losses: "Les pertes du système doivent être inférieures à 100 %.",
    },
    annual: "Énergie estimée par an",
    caption: "Installation de {size} × {hours} heures de plein soleil × {factor} après {losses} de pertes.",
    daily: "Énergie par jour",
    monthly: "Énergie moyenne par mois",
    systemSize: "Taille de l’installation (CC)",
    specificYield: "Énergie par kW installé et par an",
    coverage: "Part de votre consommation annuelle couverte",
    sizeNeeded: "Taille d’installation pour couvrir toute votre consommation",
    panelsNeeded: "Panneaux nécessaires pour couvrir toute votre consommation",
    panelsMore: "Panneaux supplémentaires nécessaires",
    notes: {
      estimate: "Il s’agit d’une estimation simple. Un outil local de ressource solaire comme PVWatts du NREL utilise des données météo horaires pour votre site et donne un chiffre plus juste.",
      covered: "L’installation telle que saisie produit en un an au moins autant d’énergie que vous en consommez. Production et consommation coïncident rarement heure par heure : vous pourriez donc encore tirer de l’électricité du réseau.",
      panelsRounded: "Le nombre de panneaux est arrondi au nombre entier supérieur de panneaux de {watts}.",
    },
  },
};

export default fr;
