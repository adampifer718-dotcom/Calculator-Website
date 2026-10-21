import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GpaText } from "../text/en";

const nl: CalculatorTranslation<GpaText> = {
  content: {
    title: "GPA-calculator",
    shortTitle: "GPA",
    summary: "Bereken een naar studiepunten gewogen grade point average (GPA) uit lettercijfers of gradepunten, en werk je cumulatieve GPA bij.",
    metaTitle: "GPA-calculator – GPA per periode en cumulatief",
    metaDescription:
      "Bereken je GPA voor een periode uit lettercijfers en studiepunten op een schaal van 4,0 of 4,3, en combineer die met je huidige GPA tot een nieuwe cumulatieve GPA.",
    keywords: ["gpa", "grade point average", "gpa berekenen", "cumulatieve gpa", "semester-gpa", "schaal van 4,0", "studiepunten"],
    intro: [
      "Je grade point average (GPA) weegt de gradepunten van elk vak naar het aantal studiepunten, zodat een vak van 4 studiepunten zwaarder telt dan een vak van 2.",
      "Zet je vakken met cijfers en studiepunten op een rij om de GPA van deze periode te zien. Vul je huidige GPA en behaalde studiepunten in om je nieuwe cumulatieve GPA te zien.",
    ],
    howToUse: [
      "Kies de schaal van 4,0 of 4,3 die je school gebruikt (ze verschillen alleen in de waarde van A+).",
      "Vul per regel één vak in met cijfer en studiepunten, bijvoorbeeld “Biologie B+ 3”.",
      "Vul eventueel je huidige cumulatieve GPA in en het aantal studiepunten waarop die is gebaseerd.",
      "Lees de GPA van de periode, de nieuwe cumulatieve GPA en de tabel per vak af.",
    ],
    formulas: [
      {
        title: "GPA per periode",
        expression: "GPA = Σ(gradepunten × studiepunten) ÷ Σ studiepunten",
        explanation: "De kwaliteitspunten van een vak zijn de gradepunten vermenigvuldigd met de studiepunten.",
      },
      {
        title: "Cumulatieve GPA",
        expression: "nieuwe GPA = (huidige GPA × huidige studiepunten + kwaliteitspunten periode) ÷ (huidige studiepunten + studiepunten periode)",
        explanation: "Combineert je resultaten tot nu toe met de nieuwe periode, gewogen naar studiepunten.",
      },
      {
        title: "Lettercijfers (schaal van 4,0)",
        expression: "A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0",
        explanation: "De gangbare Amerikaanse schaal. Op de schaal van 4,3 is A+ = 4,3.",
      },
    ],
    examples: [
      {
        title: "Vier vakken op een schaal van 4,0",
        steps: ["Kwaliteitspunten: 4,0 × 3 + 3,3 × 4 + 3,7 × 3 + 2,0 × 2 = 40,3", "Studiepunten: 3 + 4 + 3 + 2 = 12", "GPA = 40,3 ÷ 12 ≈ 3,36"],
      },
      {
        title: "Nieuwe periode bij een GPA van 3,2 over 45 studiepunten",
        steps: ["Periode: (4,0 × 4 + 3,0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3,57", "Cumulatief: (3,2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3,25"],
      },
    ],
    assumptions: [
      "Lettercijfers volgen de gangbare Amerikaanse 4-puntsschaal; scholen met andere schalen, plussen of een zwaardere weging voor honoursvakken kunnen afwijken.",
      "Laat vakken met alleen voldaan/niet voldaan en vakken waarvoor je je hebt afgemeld weg, omdat die meestal niet meetellen voor de GPA.",
      "De uitkomsten worden voor de weergave op twee decimalen afgerond; je school kan anders afronden of afkappen.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen de schaal van 4,0 en die van 4,3?",
        answer: "Alleen de A+: sommige scholen geven die 4,0, andere 4,3. Alle andere cijfers hebben dezelfde punten.",
      },
      {
        question: "Kan ik percentages of cijfers in getallen invullen?",
        answer: "Vul in plaats van een letter direct de gradepunten in (bijvoorbeeld 3,5). Hoe percentages naar gradepunten worden omgezet, hangt af van het beleid van je school.",
      },
      {
        question: "Waarom verandert een vak met meer studiepunten mijn GPA sterker?",
        answer:
          "De GPA wordt gewogen naar studiepunten, dus elk studiepunt telt even zwaar. Een A voor 4 studiepunten levert twee keer zoveel kwaliteitspunten op als een A voor 2 studiepunten, en trekt je GPA dus verder richting 4,0, al is het niet precies twee keer zo ver.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    scale: "Cijferschaal",
    scales: { "4.0": "Schaal van 4,0 (A+ = 4,0)", "4.3": "Schaal van 4,3 (A+ = 4,3)" },
    courses: "Vakken",
    coursesHelp: "Eén vak per regel: eventueel een naam, dan het cijfer (een letter zoals B+ of gradepunten zoals 3,3) en dan de studiepunten.",
    defaultCourses: "Wiskunde A 4\nScheikunde B+ 4\nGeschiedenis A- 3\nKunst C 2",
    priorGpa: "Huidige cumulatieve GPA",
    priorGpaHelp: "Optioneel. Laat beide vakjes leeg om alleen deze periode te zien.",
    priorCredits: "Al behaalde studiepunten",
    errors: {
      empty: "Vul minstens één vak in.",
      tooMany: "Vul hoogstens {max} vakken in.",
      line: "Regel {line}: schrijf een cijfer en de studiepunten, bijvoorbeeld “Biologie B+ 3”.",
      grade: "Regel {line}: “{grade}” is geen cijfer op deze schaal.",
      credits: "Regel {line}: het aantal studiepunten moet groter zijn dan 0.",
      priorBoth: "Vul zowel je huidige GPA als de bijbehorende studiepunten in, of geen van beide.",
      priorRange: "Vul een GPA in tussen 0 en {max} op deze schaal.",
    },
    gpa: "GPA van deze periode",
    caption: "{credits} studiepunten en {points} kwaliteitspunten.",
    cumulative: "Nieuwe cumulatieve GPA",
    totalCredits: "Studiepunten deze periode",
    qualityPoints: "Kwaliteitspunten",
    tableCaption: "Vakken",
    columns: { course: "Vak", points: "Gradepunten", credits: "Studiepunten", quality: "Kwaliteitspunten" },
    unnamed: "Vak {line}",
    note: "Lettercijfers volgen de gangbare Amerikaanse 4-puntsschaal (A− = 3,7, B+ = 3,3 … D− = 0,7, F = 0). Controleer de schaal van je school; sommige scholen wegen honours- of AP-vakken anders.",
  },
};

export default nl;
