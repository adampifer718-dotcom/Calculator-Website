import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SavingsGoalText } from "../text/en";

const nl: CalculatorTranslation<SavingsGoalText> = {
  content: {
    title: "Spaardoelcalculator",
    shortTitle: "Spaardoel",
    summary: "Bereken de maandelijkse inleg die nodig is om een spaardoel op een gekozen moment te halen, rekening houdend met wat je al hebt gespaard en het rendement daarop.",
    metaTitle: "Spaardoelcalculator – Benodigde maandelijkse inleg",
    metaDescription:
      "Bereken hoeveel je per maand moet sparen om een doel binnen een bepaalde tijd te halen, met je huidige spaargeld, een verwacht jaarrendement en maandelijkse rente-op-rente.",
    keywords: ["spaardoel", "hoeveel per maand sparen", "maandelijks sparen", "spaardoel berekenen", "sparen voor een doel", "toekomstige waarde", "spaarplan"],
    intro: [
      "Sparen voor een aanbetaling, een auto of een noodfonds is makkelijker met een maandbedrag als doel. Deze calculator berekent de periodieke inleg die je van wat je nu hebt naar je doel brengt binnen de termijn die je kiest.",
      "Hij houdt rekening met de groei van zowel je huidige spaargeld als je nieuwe inleg, tegen een vast jaarrendement met maandelijkse rente-op-rente. Bij een rendement van 0% verdeelt hij simpelweg het resterende bedrag over de maanden.",
    ],
    howToUse: [
      "Kies de valuta van de bedragen.",
      "Vul het doelbedrag in en wat je er al voor hebt gespaard.",
      "Vul het jaarrendement in dat je verwacht, zoals de rente op je spaarrekening.",
      "Vul in hoeveel jaar je hebt; decimalen zoals 2,5 zijn toegestaan.",
      "Lees de maandelijkse inleg af, het totaal dat je inlegt en hoeveel er uit groei komt.",
    ],
    formulas: [
      { title: "Maandelijkse inleg", expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)", explanation: "FV is het doel, PV het huidige spaargeld, i = jaarrendement ÷ 12 als decimaal en n het aantal maanden. De inleg vindt plaats aan het eind van elke maand." },
      { title: "Geen rendement", expression: "PMT = (FV − PV) ÷ n", explanation: "Zonder groei wordt het resterende bedrag gelijk over de maanden verdeeld." },
      { title: "Groei van het huidige spaargeld", expression: "PV × (1 + i)^n", explanation: "Haalt dit op zichzelf al het doel, dan is geen inleg nodig." },
    ],
    examples: [
      {
        title: "$15.000 in 4 jaar, beginnend met $1.000 tegen 4,5%",
        steps: ["i = 0,045 ÷ 12 = 0,00375; n = 48", "1.000 × 1,00375^48 ≈ $1.196,81", "PMT = (15.000 − 1.196,81) × 0,00375 ÷ (1,00375^48 − 1) ≈ $263,00"],
      },
      {
        title: "$30.000 in 10 jaar, beginnend bij nul tegen 6%",
        steps: ["i = 0,005; n = 120", "PMT = 30.000 × 0,005 ÷ (1,005^120 − 1)", "≈ $183,06 per maand; de inleg is samen ongeveer $21.967"],
      },
      {
        title: "$6.000 in 2 jaar, beginnend met $1.200 zonder rente",
        steps: ["n = 24 maanden", "PMT = (6.000 − 1.200) ÷ 24 = $200"],
      },
    ],
    assumptions: [
      "Het jaarrendement is constant en wordt maandelijks bijgeschreven tegen het jaarpercentage ÷ 12. Werkelijke rendementen schommelen en beleggingen kunnen in waarde dalen.",
      "De inleg is elke maand gelijk en vindt plaats aan het eind van de maand. Belastingen, kosten en inflatie zijn niet meegenomen.",
      "De termijn wordt afgerond op de dichtstbijzijnde hele maand.",
      "Dit is een schatting, geen financieel advies, en is niet door professionals gecontroleerd.",
    ],
    faqs: [
      {
        question: "Waarom is de maandelijkse inleg lager dan het doel gedeeld door het aantal maanden?",
        answer: "Je huidige spaargeld en elke inleg leveren rendement op zolang ze blijven staan, dus een deel van het doel wordt gedekt door groei. Hoe hoger het rendement en hoe langer de termijn, hoe meer de groei helpt.",
      },
      {
        question: "Welk rendement moet ik invullen?",
        answer: "Gebruik voor een spaarrekening de jaarlijkse rente. Gebruik voor beleggingen een voorzichtige schatting voor de lange termijn en onthoud dat rendement niet gegarandeerd is. Vul je 0% in, dan zie je de benodigde inleg zonder enige groei.",
      },
      {
        question: "Wat als ik aan het begin van elke maand inleg?",
        answer: "Dan levert elke inleg een maand extra rendement op, dus de benodigde inleg is iets lager: ongeveer de uitkomst hier gedeeld door (1 + i), waarbij i de maandrente is.",
      },
    ],
    sourcesUsedFor: ["De toekomstige waarde van een gewone annuïteit en de daaruit afgeleide spaarbetaling (sinking fund)."],
  },
  text: {
    goal: "Spaardoel",
    goalHelp: "Het bedrag dat je aan het eind wilt hebben.",
    current: "Huidig spaargeld",
    currentHelp: "Wat je al opzij hebt gezet voor dit doel. Vul 0 in als je vanaf nul begint.",
    rate: "Jaarrendement",
    rateHelp: "Verwachte jaarlijkse rente of beleggingsopbrengst, maandelijks bijgeschreven. Gebruik 0% voor contant geld zonder rente.",
    years: "Tijd om het doel te halen",
    yearsHelp: "In jaren; decimalen zijn toegestaan (1,5 = 18 maanden).",
    yearsSuffix: "jaar",
    tooShort: "Gebruik minstens één maand (ongeveer 0,05 jaar).",
    deposit: "Benodigde maandelijkse inleg",
    caption: "Ingelegd aan het eind van elke maand gedurende {months} tegen {rate} per jaar, plus {current} die al gespaard is, om {goal} te bereiken.",
    months: { zero: "{n} maanden", one: "{n} maand", two: "{n} maanden", few: "{n} maanden", many: "{n} maanden", other: "{n} maanden" },
    totalDeposits: "Totale inleg",
    growth: "Behaalde groei",
    currentGrows: "Huidig spaargeld aan het eind",
    endBalance: "Eindsaldo",
    numberOfDeposits: "Aantal maandelijkse inleggen",
    notes: {
      reached: "Je huidige spaargeld haalt naar verwachting op zichzelf al het doel, dus extra inleg is niet nodig.",
      constant: "Er wordt aangenomen dat het rendement elke maand gelijk is. Werkelijke rendementen schommelen, en belastingen, kosten en inflatie zijn niet meegenomen.",
    },
  },
};

export default nl;
