import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasserRatingText } from "../text/en";

const nl: CalculatorTranslation<PasserRatingText> = {
  content: {
    title: "NFL-passerratingcalculator",
    shortTitle: "Passer rating",
    summary: "Bereken de NFL-passer rating van een quarterback uit passpogingen, geslaagde passes, yards, touchdowns en intercepties, met de vier componenten en de NCAA-efficiëntie.",
    metaTitle: "Passer rating berekenen – NFL-quarterbackrating en NCAA",
    metaDescription:
      "Bereken de NFL-passer rating (0 tot 158,3) uit de passstatistieken van een quarterback, met alle vier de componenten en de NCAA-passefficiëntie.",
    keywords: ["passer rating", "quarterback rating", "qb rating berekenen", "nfl passer rating formule", "158,3", "ncaa passing efficiency", "american football statistiek"],
    intro: [
      "De passer rating is sinds 1973 de officiële maatstaf van de NFL voor het passspel van een quarterback. Hij combineert vier verhoudingen: het percentage geslaagde passes, yards per poging, touchdowns per poging en intercepties per poging. Elk deel is tot een bereik beperkt, zodat de rating loopt van 0 tot een perfecte 158,3.",
      "Vul de passstatistieken van een wedstrijd, seizoen of carrière in om de rating te krijgen, de waarde van elke component en het aandeel pogingen dat een geslaagde pass, touchdown of interceptie was. De calculator toont ook de NCAA-passefficiëntie, die het universiteitsfootball op een andere schaal gebruikt.",
    ],
    howToUse: [
      "Vul het aantal passpogingen, geslaagde passes en passyards in. Yards kunnen negatief zijn.",
      "Vul het aantal touchdownpasses en intercepties in.",
      "Lees de passer rating af en bekijk de componententabel om te zien welke delen hun grens bereiken.",
    ],
    formulas: [
      {
        title: "De vier componenten",
        expression: "a = (Cmp ÷ Att − 0,3) × 5\nb = (Yds ÷ Att − 3) × 0,25\nc = TD ÷ Att × 20\nd = 2,375 − INT ÷ Att × 25",
        explanation: "Elke component wordt tussen 0 en 2,375 begrensd voordat ze worden opgeteld.",
      },
      { title: "Passer rating", expression: "rating = (a + b + c + d) ÷ 6 × 100", explanation: "Met elke component op 2,375 is de rating 9,5 ÷ 6 × 100 ≈ 158,3, het maximum." },
      { title: "NCAA-passefficiëntie", expression: "(8,4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att", explanation: "De formule van het universiteitsfootball. Die heeft geen grenzen, dus kan ver boven 200 of onder 0 uitkomen." },
    ],
    examples: [
      {
        title: "23 van 34 voor 287 yards, 2 TD, 1 INT",
        steps: ["a = (23 ÷ 34 − 0,3) × 5 ≈ 1,8824; b = (287 ÷ 34 − 3) × 0,25 ≈ 1,3603", "c = 2 ÷ 34 × 20 ≈ 1,1765; d = 2,375 − 1 ÷ 34 × 25 ≈ 1,6397", "Rating = 6,0588 ÷ 6 × 100 ≈ 101,0"],
      },
      {
        title: "30 van 41 voor 402 yards, 5 TD, 0 INT",
        steps: ["a ≈ 2,1585 en c ≈ 2,4390 liggen boven 2,375, dus elk telt als 2,375", "b ≈ 1,7012; d = 2,375", "Rating = (2,375 + 1,7012 + 2,375 + 2,375) ÷ 6 × 100 ≈ 143,5"],
      },
      {
        title: "12 van 28 voor 96 yards, 0 TD, 3 INT",
        steps: ["a ≈ 0,6429; b ≈ 0,1071; c = 0", "d = 2,375 − 3 ÷ 28 × 25 ≈ −0,3036, dus telt als 0", "Rating = 0,75 ÷ 6 × 100 = 12,5"],
      },
    ],
    assumptions: [
      "De calculator gebruikt de NFL-formule zoals gepubliceerd. Het universiteitsfootball gebruikt de aparte NCAA-efficiëntieformule die onder de rating staat.",
      "De rating meet alleen het passspel. Sacks, loopspel, fumbles, de wedstrijdsituatie en de kwaliteit van de ontvangers en tegenstanders tellen niet mee.",
      "Door de grenzen van 0 tot 2,375 hebben zeer hoge of zeer lage cijfers op één onderdeel op een gegeven moment geen invloed meer op de rating, dus twee heel verschillende passlijnen kunnen dezelfde rating hebben.",
      "De weergegeven rating is afgerond op één decimaal, zoals in de officiële statistieken.",
    ],
    faqs: [
      { question: "Wat is een perfecte passer rating?", answer: "158,3. Daarvoor zijn nodig: minstens 77,5% geslaagde passes, minstens 12,5 yards per poging, touchdowns bij minstens 11,875% van de pogingen en geen intercepties, zodat elke component 2,375 bereikt." },
      { question: "Wat is een goede passer rating?", answer: "De formule is zo ontworpen dat 66,7 overeenkwam met een gemiddelde passer uit de jaren zestig. Het passspel is sindsdien efficiënter geworden, dus het competitiegemiddelde ligt nu rond 90 en een rating boven 100 geldt doorgaans als zeer goed." },
      { question: "Is de passer rating hetzelfde als QBR?", answer: "Nee. De passer rating gebruikt alleen de vijf getallen uit de statistieken. Total QBR van ESPN is een aparte, eigen maatstaf die ook de wedstrijdcontext, het loopspel en sacks meeneemt." },
    ],
    sourcesUsedFor: [
      "De vier NFL-componenten, hun grenzen van 0 tot 2,375, de schaling ÷ 6 × 100 en het maximum van 158,3.",
      "De NCAA-formule voor passefficiëntie (8,4 × yards + 330 × TD + 100 × geslaagde passes − 200 × INT) ÷ pogingen.",
    ],
  },
  text: {
    attempts: "Passpogingen",
    completions: "Geslaagde passes",
    yards: "Passyards",
    yardsHelp: "Totaal aantal passyards; dit kan negatief zijn.",
    touchdowns: "Touchdownpasses",
    interceptions: "Intercepties",
    errors: {
      completions: "Het aantal geslaagde passes kan niet groter zijn dan het aantal pogingen.",
      touchdowns: "Het aantal touchdownpasses kan niet groter zijn dan het aantal geslaagde passes.",
      interceptions: "Het aantal intercepties kan niet groter zijn dan het aantal mislukte passes (pogingen min geslaagde passes).",
    },
    rating: "NFL-passer rating",
    caption: "{cmp} van {att} voor {yds} yards, {td} TD, {int} INT.",
    ncaa: "NCAA-passefficiëntie",
    completionPct: "Percentage geslaagde passes",
    yardsPerAttempt: "Yards per poging",
    tdPct: "Touchdownpercentage",
    intPct: "Interceptiepercentage",
    table: {
      caption: "Componenten van de passer rating (elk begrensd op 0–2,375)",
      component: "Component",
      raw: "Voor de begrenzing",
      used: "Gebruikt",
    },
    components: {
      a: "a: geslaagde passes per poging",
      b: "b: yards per poging",
      c: "c: touchdowns per poging",
      d: "d: intercepties per poging",
    },
    notes: {
      clamped: "Minstens één component bereikte de grens van 0 of 2,375, dus betere (of slechtere) cijfers op dat onderdeel veranderen de rating niet meer.",
      perfect: "Dit is een perfecte passer rating van 158,3, het hoogste wat de NFL-formule toelaat.",
      scale: "De NFL- en NCAA-ratings gebruiken verschillende schalen en zijn niet met elkaar te vergelijken.",
    },
  },
};

export default nl;
