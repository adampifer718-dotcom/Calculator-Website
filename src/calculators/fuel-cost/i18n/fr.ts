import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FuelCostText } from "../text/en";

const fr: CalculatorTranslation<FuelCostText> = {
  content: {
    title: "Calculateur de coût de carburant",
    shortTitle: "Coût de carburant",
    summary: "Estimez le carburant consommé et le coût d’un trajet à partir de la distance, de la consommation et du prix du carburant.",
    metaTitle: "Calculateur de coût de carburant – Budget essence d’un trajet",
    metaDescription:
      "Calculez le coût en carburant d’un trajet à partir de la distance, de la consommation et du prix du carburant, en miles et MPG ou en kilomètres et litres aux 100 km.",
    keywords: ["coût carburant trajet", "calcul consommation essence", "prix essence trajet", "L/100 km", "budget carburant", "gazole", "road trip"],
    intro: [
      "Calculez la quantité de carburant nécessaire pour un trajet et son coût. Le calcul fonctionne en miles par gallon ou en litres aux 100 kilomètres.",
      "Utilisez la consommation réelle de votre voiture pour obtenir la meilleure estimation.",
    ],
    howToUse: [
      "Choisissez les unités américaines ou métriques.",
      "Saisissez la distance du trajet.",
      "Saisissez la consommation et le prix du carburant.",
      "Consultez le carburant consommé et le coût.",
    ],
    formulas: [
      {
        title: "Unités américaines",
        expression: "gallons = miles ÷ MPG\ncoût = gallons × prix par gallon",
        explanation: "MPG signifie miles par gallon.",
      },
      {
        title: "Unités métriques",
        expression: "litres = km × (L/100 km) ÷ 100\ncoût = litres × prix par litre",
        explanation: "Plus la valeur en L/100 km est basse, plus le véhicule est économe.",
      },
    ],
    examples: [
      {
        title: "300 miles à 30 MPG, 3,50 $US le gallon",
        steps: ["300 ÷ 30 = 10 gallons", "10 × 3,50 $US = 35,00 $US"],
      },
      {
        title: "500 km à 6,5 L/100 km, 1,80 € le litre",
        steps: ["500 × 6,5 ÷ 100 = 32,5 L", "32,5 × 1,80 € = 58,50 €"],
      },
    ],
    assumptions: [
      "La consommation varie selon la vitesse, la charge, le relief et la météo.",
      "Les MPG sont calculés avec des gallons américains.",
      "Le choix d’une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Comment calculer le coût en carburant d’un trajet ?",
        answer: "Divisez la distance par vos MPG pour obtenir le nombre de gallons, puis multipliez par le prix au gallon.",
      },
      {
        question: "Comment convertir des MPG en L/100 km ?",
        answer: "Divisez 235,215 par la valeur en MPG (gallons américains). 30 MPG correspondent à environ 7,84 L/100 km.",
      },
      { question: "Faut-il calculer l’aller-retour ?", answer: "Oui : doublez la distance pour un trajet aller-retour." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    units: "Unités",
    unitOptions: { us: "Miles, MPG et prix par gallon américain", metric: "Kilomètres, L/100 km et prix au litre" },
    distance: "Distance du trajet",
    efficiency: "Consommation",
    efficiencyHelp: "Miles par gallon, ou litres aux 100 km.",
    price: "Prix du carburant par gallon ou par litre",
    cost: "Coût du carburant",
    fuel: "Carburant consommé",
    perKm: "Coût par kilomètre",
    perMile: "Coût par mile",
    gallons: "gal US",
  },
};

export default fr;
