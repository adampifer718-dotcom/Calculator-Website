import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaterFootprintText } from "../text/en";

const people = "{n} personnes";
const person = "{n} personne";

const fr: CalculatorTranslation<WaterFootprintText> = {
  content: {
    title: "Calculateur de consommation d’eau de douche",
    shortTitle: "Consommation d’eau de douche",
    summary: "Estimez la quantité d’eau consommée chaque année par les douches de votre foyer, l’énergie et le coût nécessaires pour la chauffer, et l’économie d’un pommeau à débit réduit.",
    metaTitle: "Consommation d’eau de douche – Litres, gallons et kWh",
    metaDescription:
      "Estimez l’eau consommée par vos douches chaque année selon le débit, la durée et la fréquence, avec l’énergie et le coût de chauffage, et l’économie d’un pommeau économe.",
    keywords: ["consommation d’eau douche", "litres par douche", "pommeau de douche économique", "débit pommeau de douche", "coût énergie douche", "économie d’eau", "WaterSense", "empreinte eau"],
    intro: [
      "Les douches font partie des plus gros postes de consommation d’eau dans la plupart des logements et, comme l’eau est chauffée, elles pèsent aussi sensiblement sur la facture d’énergie. Leur consommation ne dépend que de quelques éléments : le débit du pommeau, la durée de chaque douche et la fréquence des douches.",
      "Saisissez ces valeurs pour estimer l’eau utilisée par douche, par semaine et par an. Ajoutez les températures de l’eau et votre prix de l’énergie pour estimer l’énergie et le coût de son chauffage, et saisissez un second débit pour voir ce qu’un autre pommeau ferait économiser.",
    ],
    howToUse: [
      "Saisissez le débit de votre pommeau en gallons US ou en litres par minute. Si vous ne le connaissez pas, chronométrez le remplissage d’un seau de volume connu et divisez.",
      "Saisissez la durée d’une douche typique, le nombre de douches par personne et par semaine, et le nombre de personnes.",
      "Saisissez éventuellement le débit d’un pommeau que vous envisagez, pour voir les économies.",
      "Pour estimer l’énergie, laissez l’option énergie activée et saisissez les températures d’arrivée et de douche, le rendement du chauffe-eau et, si vous le souhaitez, votre prix par kWh.",
    ],
    formulas: [
      {
        title: "Eau par an",
        expression: "V(an) = débit × minutes × douches par semaine × personnes × 52,1775",
        explanation: "52,1775 est le nombre de semaines d’une année grégorienne moyenne (365,2425 ÷ 7). Le résultat est dans l’unité du débit : gallons ou litres.",
      },
      {
        title: "Énergie de chauffage",
        expression: "E (kWh) = V (L) × 1 kg/L × 4,186 kJ/(kg·K) × (T(douche) − T(arrivée)) ÷ 3 600 ÷ rendement",
        explanation: "4,186 kJ réchauffent 1 kg d’eau de 1 °C, et 3 600 kJ font 1 kWh. Le rendement est saisi en pourcentage et utilisé sous forme de fraction.",
      },
      {
        title: "Économies",
        expression: "économie = V(actuel) − V(nouveau)",
        explanation: "L’énergie et le coût économisés découlent de l’eau économisée avec la même formule.",
      },
    ],
    examples: [
      {
        title: "Une personne, douches quotidiennes de 8 minutes à 2,5 gpm",
        steps: ["Par douche = 2,5 × 8 = 20 gal", "Par semaine = 20 × 7 = 140 gal", "Par an = 140 × 52,1775 = 7 304,85 gal, soit environ 27 652 L"],
      },
      {
        title: "Trois personnes, 9 L/min, passage à un pommeau de 6 L/min",
        steps: [
          "Par semaine = 9 × 6 × 5 × 3 = 810 L, donc par an = 810 × 52,1775 ≈ 42 263,78 L",
          "Énergie de chauffage = 42 263,78 × 4,186 × (38 − 15) ÷ 3 600 ÷ 0,90 ≈ 1 256 kWh par an",
          "À 6 L/min : 540 × 52,1775 ≈ 28 175,85 L, soit une économie d’environ 14 088 L et 419 kWh par an",
        ],
      },
      {
        title: "Deux personnes, douches de 10 minutes, chauffe-eau en °F et prix de l’énergie",
        steps: [
          "Par an = 2,5 × 10 × 7 × 2 × 52,1775 = 18 262,125 gal ≈ 69 130 L",
          "Élévation de température = (100 − 55) × 5/9 = 25 K, donc énergie ≈ 69 130 × 4,186 × 25 ÷ 3 600 ÷ 0,90 ≈ 2 233 kWh, pour un coût d’environ 357 $US par an",
          "Un pommeau de 1,8 gpm économise environ 5 113 gal et environ 100 $US par an",
        ],
      },
    ],
    assumptions: [
      "Le débit est considéré comme constant pendant toute la douche. Le débit réel dépend de la pression de l’eau et de l’ouverture du robinet : un débit mesuré vaut donc mieux que le débit nominal.",
      "Une année compte 52,1775 semaines (365,2425 ÷ 7). Les semaines d’absence et les variations saisonnières des habitudes ne sont pas modélisées.",
      "L’estimation d’énergie chauffe toute l’eau de la douche de la température d’arrivée à la température de douche. Elle ignore les pertes de chaleur des canalisations et du ballon de stockage : la consommation réelle est donc généralement un peu plus élevée.",
      "Les redevances d’eau et d’assainissement ne sont pas incluses dans le coût ; seule l’énergie de chauffage est chiffrée.",
    ],
    faqs: [
      {
        question: "Combien d’eau consomme un pommeau de douche ?",
        answer: "Aux États-Unis, les pommeaux neufs peuvent consommer au plus 2,5 gallons (environ 9,5 litres) par minute. Les pommeaux portant le label WaterSense de l’EPA consomment 2,0 gallons par minute ou moins. Les anciens pommeaux peuvent consommer davantage : mesurer le vôtre est le meilleur moyen de le savoir.",
      },
      {
        question: "Comment mesurer le débit de ma douche ?",
        answer: "Placez un seau de volume connu sous la douche réglée comme d’habitude et chronométrez son remplissage. Divisez le volume par le temps en minutes ; par exemple, 10 litres en 75 secondes donnent 10 ÷ 1,25 = 8 L/min.",
      },
      {
        question: "Qu’est-ce qui économise le plus : une douche plus courte ou un pommeau économe ?",
        answer: "Les deux réduisent la consommation proportionnellement. Passer de 10 à 8 minutes économise 20 %, autant que passer de 2,5 à 2,0 gpm. Le calculateur montre l’effet de chacun : vous pouvez donc essayer les deux.",
      },
    ],
    sourcesUsedFor: [
      "Le maximum WaterSense de 2,0 gallons par minute et le débit maximal fédéral de 2,5 gpm pour les pommeaux de douche.",
      "La consommation d’eau maximale fédérale de 2,5 gallons par minute pour les pommeaux de douche.",
      "La capacité thermique massique de l’eau, 1 cal/(g·°C) = 4,186 J/(g·°C).",
    ],
  },
  text: {
    flow: "Débit du pommeau",
    flowHelp: "2,5 gallons US par minute (environ 9,5 L/min) est le maximum fédéral américain pour les pommeaux neufs ; les pommeaux labellisés WaterSense consomment 2,0 gpm (environ 7,6 L/min) ou moins. Vous pouvez mesurer le vôtre en chronométrant le remplissage d’un seau.",
    flowUnit: "Unité de débit",
    flowUnits: { gpm: "Gallons US par minute (gpm)", lpm: "Litres par minute (L/min)" },
    minutes: "Minutes par douche",
    showersPerWeek: "Douches par semaine et par personne",
    people: "Nombre de personnes",
    newFlow: "Nouveau débit à comparer (facultatif)",
    newFlowHelp: "Le débit d’un pommeau que vous envisagez, dans la même unité que ci-dessus.",
    energy: "Estimer l’énergie de chauffage de l’eau",
    energyOptions: { yes: "Oui", no: "Non" },
    tempUnit: "Unité de température",
    tempUnits: { C: "Celsius (°C)", F: "Fahrenheit (°F)" },
    inletTemp: "Température de l’eau froide à l’arrivée",
    inletTempHelp: "La température de l’eau qui entre dans le chauffe-eau. 15 °C (59 °F) est un exemple typique ; elle varie selon le climat et la saison.",
    showerTemp: "Température de la douche",
    showerTempHelp: "La température de l’eau mitigée au pommeau. 38 °C (environ 100 °F) correspond à une douche confortable typique.",
    efficiency: "Rendement du chauffe-eau",
    efficiencyHelp: "La part de l’énergie consommée qui se retrouve sous forme de chaleur dans l’eau. 90 % est un exemple ; les anciens chauffe-eau au gaz sont souvent moins performants et les pompes à chaleur peuvent dépasser largement 100 %.",
    price: "Prix de l’énergie par kWh (facultatif)",
    priceHelp: "Votre prix par kWh d’électricité, ou de gaz converti en kWh, pour le coût annuel.",
    errors: {
      showerAboveInlet: "La température de la douche doit être supérieure à la température d’arrivée.",
      inletRange: "Saisissez une température d’arrivée comprise entre 0 °C (32 °F) et 40 °C (104 °F).",
      showerRange: "Saisissez une température de douche de 60 °C (140 °F) au maximum.",
    },
    annual: "Eau de douche par an",
    caption: "{flow} × {minutes} min × {showers} douches par semaine × {people} × {weeks} semaines par an.",
    annualOther: "Eau de douche par an dans d’autres unités",
    perWeek: "Eau de douche par semaine",
    perShower: "Eau par douche",
    energyYear: "Énergie de chauffage de l’eau par an",
    costYear: "Coût du chauffage de l’eau par an",
    newAnnual: "Eau par an avec le nouveau débit",
    waterSaved: "Eau économisée par an",
    energySaved: "Énergie économisée par an",
    costSaved: "Coût économisé par an",
    peopleCount: { zero: person, one: person, two: people, few: people, many: "{n} de personnes", other: people },
    notes: {
      weeks: "Une année est comptée comme 52,1775 semaines (365,2425 jours ÷ 7, l’année grégorienne moyenne).",
      energy: "Énergie de chauffage = litres × 1 kg/L × 4,186 kJ/(kg·K) × élévation de température ÷ 3 600 ÷ rendement. Les pertes de chaleur des canalisations et du ballon ne sont pas incluses.",
      moreWater: "Le nouveau débit est supérieur au débit actuel : les économies sont donc négatives, il consommerait plus d’eau.",
    },
  },
};

export default fr;
