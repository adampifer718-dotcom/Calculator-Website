import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoiText } from "../text/en";

const nl: CalculatorTranslation<RoiText> = {
  content: {
    title: "ROI-calculator (rendement op investering)",
    shortTitle: "ROI",
    summary: "Meet het rendement op een investering als percentage, met de nettowinst of het nettoverlies en een optioneel rendement op jaarbasis.",
    metaTitle: "ROI-calculator – Rendement op investering en op jaarbasis",
    metaDescription:
      "Bereken het rendement op een investering uit het geïnvesteerde en het teruggekregen bedrag. Zie de nettowinst of het verlies, de totale ROI en de ROI op jaarbasis.",
    keywords: ["rendement op investering", "roi berekenen", "rendement berekenen", "roi op jaarbasis", "investeringsrendement", "gemiddeld jaarlijks groeipercentage"],
    intro: [
      "Het rendement op investering (ROI) vergelijkt wat je terugkrijgt met wat je erin stopt. Het is een snelle manier om investeringen, projecten of aankopen van verschillende omvang te vergelijken.",
      "Vul in hoe lang je de investering hebt aangehouden om de ROI op jaarbasis te zien, waarmee je rendementen over verschillende periodes kunt vergelijken.",
    ],
    howToUse: [
      "Vul het totale geïnvesteerde bedrag in, inclusief de kosten die je bij de aankoop hebt betaald.",
      "Vul het teruggekregen bedrag in: de eindwaarde of het totaal dat je hebt ontvangen, inclusief je oorspronkelijke bedrag.",
      "Vul eventueel het aantal jaren in dat je de investering hebt aangehouden.",
      "Lees de totale ROI, de nettowinst of het nettoverlies en de ROI op jaarbasis af.",
    ],
    formulas: [
      {
        title: "Rendement op investering",
        expression: "ROI = (teruggekregen bedrag − geïnvesteerd bedrag) ÷ geïnvesteerd bedrag × 100",
        explanation: "Een positieve ROI is winst, een negatieve ROI is verlies.",
      },
      {
        title: "ROI op jaarbasis",
        expression: "ROI op jaarbasis = ((teruggekregen bedrag ÷ geïnvesteerd bedrag)^(1 ÷ jaren) − 1) × 100",
        explanation: "Het constante jaarlijkse percentage waarmee het geïnvesteerde bedrag over de periode zou uitgroeien tot het teruggekregen bedrag, ook wel CAGR genoemd.",
      },
    ],
    examples: [
      {
        title: "$10.000 groeit in 3 jaar naar $12.500",
        steps: ["Nettowinst = $12.500 − $10.000 = $2.500", "ROI = $2.500 ÷ $10.000 × 100 = 25%", "Op jaarbasis = (1,25^(1/3) − 1) × 100 ≈ 7,72%"],
      },
      {
        title: "$5.000 daalt naar $4.200",
        steps: ["Nettoverlies = $4.200 − $5.000 = −$800", "ROI = −$800 ÷ $5.000 × 100 = −16%"],
      },
    ],
    assumptions: [
      "Belastingen, kosten, dividenden en andere kasstromen tellen alleen mee als je ze bij de ingevulde bedragen optelt.",
      "De ROI op jaarbasis gaat uit van samengestelde groei tegen een constant percentage over de periode. Er wordt geen rekening gehouden met het moment van stortingen of opnames.",
      "Het kiezen van een valuta verandert alleen de weergave. Er wordt geen wisselkoers toegepast.",
      "Rendementen uit het verleden bieden geen garantie voor de toekomst. Deze calculator geeft geen financieel advies.",
    ],
    faqs: [
      {
        question: "Wat is een goede ROI?",
        answer:
          "Dat hangt af van het risico, de looptijd en de alternatieven die je hebt. Vergelijk bij verschillende beleggingsperiodes de ROI op jaarbasis in plaats van de totale ROI.",
      },
      {
        question: "Wat is het verschil tussen ROI en ROI op jaarbasis?",
        answer:
          "De ROI is het totale rendement over de hele periode. De ROI op jaarbasis zet dat om in een gelijkwaardig jaarlijks percentage. Een rendement van 25% over 3 jaar komt neer op ongeveer 7,72% per jaar.",
      },
      {
        question: "Moet ik kosten en dividenden meetellen?",
        answer: "Ja, voor een nauwkeurig resultaat. Tel aankoopkosten op bij het geïnvesteerde bedrag en ontvangen dividenden of rente bij het teruggekregen bedrag.",
      },
      {
        question: "Kan de ROI negatief zijn?",
        answer: "Ja. Krijg je minder terug dan je hebt geïnvesteerd, dan is de ROI negatief. De laagst mogelijke ROI is −100%, als je niets terugkrijgt.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    invested: "Geïnvesteerd bedrag",
    investedHelp: "Totale kosten van de investering.",
    finalValue: "Teruggekregen bedrag",
    finalValueHelp: "Eindwaarde of totaal ontvangen bedrag, inclusief je oorspronkelijke bedrag.",
    years: "Looptijd van de investering (optioneel)",
    yearsHelp: "Vul het aantal jaren in om de ROI op jaarbasis te zien.",
    primary: "Rendement op investering",
    gainCaption: "Totale winst ten opzichte van het geïnvesteerde bedrag.",
    lossCaption: "Totaal verlies ten opzichte van het geïnvesteerde bedrag.",
    net: "Nettowinst of -verlies",
    annualized: "ROI op jaarbasis",
    addLength: "Vul de looptijd van de investering in",
    note: "Deze ROI houdt geen rekening met belastingen, kosten of het moment van tussentijdse kasstromen, tenzij die in de bedragen zijn opgenomen.",
  },
};

export default nl;
