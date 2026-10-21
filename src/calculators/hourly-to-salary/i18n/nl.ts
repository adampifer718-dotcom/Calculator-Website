import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HourlyToSalaryText } from "../text/en";

const nl: CalculatorTranslation<HourlyToSalaryText> = {
  content: {
    title: "Calculator uurloon naar jaarsalaris",
    shortTitle: "Uurloon naar salaris",
    summary: "Zet een uurloon om in bruto jaar-, maand-, tweewekelijks, week- en dagloon voor jouw werkrooster.",
    metaTitle: "Uurloon naar jaarsalaris – jaar-, maand- en weekloon",
    metaDescription:
      "Reken een uurloon om naar een jaarsalaris en bekijk het bruto maand-, halfmaand-, tweewekelijks, week- en dagloon op basis van je uren en betaalde weken.",
    keywords: ["uurloon", "salaris", "loon", "jaarsalaris", "jaarinkomen", "maandloon", "inkomen", "per uur"],
    intro: [
      "Met deze calculator zie je wat een uurloon oplevert over een heel jaar en per gangbare betaalperiode.",
      "Handig om een baan met uurloon te vergelijken met een baan met vast salaris, of om na te gaan hoe parttime uren of onbetaalde weken je bruto jaarinkomen veranderen.",
    ],
    howToUse: [
      "Vul je uurloon in vóór belastingen en inhoudingen.",
      "Stel je betaalde uren per week en betaalde weken per jaar in.",
      "Stel je aantal werkdagen per week in voor een nauwkeurig dagbedrag.",
      "Lees het equivalente jaarsalaris en de uitsplitsing per betaalperiode af.",
    ],
    formulas: [
      {
        title: "Jaarsalaris",
        expression: "jaarloon = uurloon × uren per week × weken per jaar",
        explanation: "Door met betaalde weken te vermenigvuldigen in plaats van kalenderweken, kun je onbetaald verlof buiten beschouwing laten.",
      },
      {
        title: "Andere betaalperioden",
        expression:
          "maand = jaar ÷ 12\nhalve maand = jaar ÷ 24\ntwee weken = jaar ÷ 26\nweek = jaar ÷ weken per jaar\ndag = jaar ÷ (werkdagen per week × weken per jaar)",
        explanation: "Elke periode deelt hetzelfde jaarbedrag, zodat de bedragen onderling consistent blijven.",
      },
    ],
    examples: [
      { title: "$ 25 per uur, voltijds", steps: ["Uren per jaar = 40 × 52 = 2080", "Jaarloon = $ 25 × 2080 = $ 52.000"] },
      {
        title: "$ 18,50 per uur, 30 uur per week, 50 betaalde weken",
        steps: ["Uren per jaar = 30 × 50 = 1500", "Jaarloon = $ 18,50 × 1500 = $ 27.750"],
      },
      {
        title: "$ 40 per uur, 37,5 uur per week, 48 betaalde weken",
        steps: ["Uren per jaar = 37,5 × 48 = 1800", "Jaarloon = $ 40 × 1800 = $ 72.000"],
      },
    ],
    assumptions: [
      "De uitkomsten zijn brutobedragen vóór belastingen en inhoudingen. Het nettoloon wordt niet geschat.",
      "Elk betaald uur wordt tegen hetzelfde tarief betaald. Overwerktoeslagen, fooien, bonussen en ploegentoeslagen zijn niet meegerekend.",
      "Maand-, halfmaand- en tweewekelijkse bedragen delen het jaartotaal door 12, 24 en 26.",
      "Het kiezen van een valuta verandert alleen de weergave. Er wordt geen wisselkoers toegepast.",
      "De uitkomsten worden voor de weergave afgerond. De berekeningen gebruiken volledige precisie.",
    ],
    faqs: [
      {
        question: "Hoeveel is $ 20 per uur per jaar?",
        answer: "Bij 40 uur per week gedurende 52 weken is $ 20 per uur gelijk aan $ 20 × 2080 = $ 41.600 per jaar bruto.",
      },
      {
        question: "Hoeveel werkuren zitten er in een jaar?",
        answer: "Een voltijds rooster van 40 uur per week gedurende 52 weken geeft 2080 betaalde uren. Pas de uren per week of de betaalde weken aan je eigen situatie aan.",
      },
      {
        question: "Hoe houd ik rekening met onbetaalde vakantie?",
        answer: "Verlaag het aantal betaalde weken per jaar. Bij twee onbetaalde weken vul je bijvoorbeeld 50 weken in.",
      },
      {
        question: "Waarom is het maandbedrag niet gelijk aan vier weken loon?",
        answer:
          "Een maand is gemiddeld langer dan vier weken. Het maandloon is het jaartotaal gedeeld door 12, wat bij 52 weken per jaar neerkomt op ongeveer 4,33 weken loon.",
      },
      {
        question: "Is dit mijn nettoloon?",
        answer: "Nee. Dit zijn brutobedragen vóór inkomstenbelasting en andere inhoudingen, die deze calculator niet schat.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    hourlyRate: "Uurloon",
    hourlyRateHelp: "Brutoloon per uur, vóór belastingen en inhoudingen.",
    primary: "Equivalent jaarsalaris",
    caption: "Brutoloon per jaar bij het ingevulde uurloon en rooster.",
    monthly: "Brutomaandloon",
    annualHours: "Betaalde uren per jaar",
  },
};

export default nl;
