import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BodyFatText } from "../text/en";

const nl: CalculatorTranslation<BodyFatText> = {
  content: {
    title: "Vetpercentagecalculator",
    shortTitle: "Vetpercentage",
    summary: "Schat je vetpercentage uit je lengte en de omtrek van je nek, taille en heupen met de omtrekmethode van de US Navy.",
    metaTitle: "Vetpercentagecalculator – meetlintmethode van de US Navy",
    metaDescription:
      "Schat je vetpercentage met een meetlint en de omtrekformules van de US Navy, in cm of inch, met vetmassa en vetvrije massa uit je gewicht.",
    keywords: ["vetpercentage berekenen", "lichaamsvet", "navy-methode", "meetlintmethode", "omtrekmethode", "vetvrije massa", "vetmassa"],
    intro: [
      "Je vetpercentage is het deel van je lichaamsgewicht dat uit vet bestaat. Laboratoriummethoden meten het rechtstreeks, maar met een meetlint krijg je snel een schatting.",
      "Deze calculator gebruikt de omtrekmethode van de US Navy, in 1984 ontwikkeld door Hodgdon en Beckett. Hij heeft je lengte en de omtrek van je nek en taille nodig, en voor de formule voor vrouwen ook je heupomtrek. Vul je gewicht in om te zien hoeveel daarvan vetmassa is en hoeveel vetvrije massa.",
    ],
    howToUse: [
      "Kies centimeter of inch en het geslacht dat in de formule wordt gebruikt.",
      "Vul je lengte en de omtrek van je nek en taille in (en je heupomtrek voor de formule voor vrouwen).",
      "Vul eventueel je gewicht in om het te splitsen in vetmassa en vetvrije massa.",
      "Lees het geschatte vetpercentage af.",
    ],
    formulas: [
      { title: "Mannen (lengtes in inch)", expression: "%vet = 86,010 × log₁₀(taille − nek) − 70,041 × log₁₀(lengte) + 36,76", explanation: "De taille wordt rond de buik ter hoogte van de navel gemeten." },
      { title: "Vrouwen (lengtes in inch)", expression: "%vet = 163,205 × log₁₀(taille + heup − nek) − 97,684 × log₁₀(lengte) − 78,387", explanation: "De taille wordt op het smalste punt gemeten en de heupen op het breedste." },
      { title: "Centimeter", expression: "lengte (in) = lengte (cm) ÷ 2,54", explanation: "Metingen in centimeter worden eerst naar inch omgerekend voordat de formules worden toegepast." },
      { title: "Vetmassa en vetvrije massa", expression: "vetmassa = gewicht × %vet ÷ 100\nvetvrije massa = gewicht − vetmassa", explanation: "Vetvrije massa betekent hier alles behalve vet: spieren, botten, organen en water." },
    ],
    examples: [
      {
        title: "Man, 178 cm lang, nek 38 cm, taille 88 cm, gewicht 80 kg",
        steps: ["In inch: lengte 70,08, nek 14,96, taille 34,65", "86,010 × log₁₀(19,69) − 70,041 × log₁₀(70,08) + 36,76 ≈ 18,8%", "Vetmassa ≈ 80 × 0,188 = 15,0 kg; vetvrije massa ≈ 65,0 kg"],
      },
      {
        title: "Vrouw, 65 in lang, nek 13 in, taille 29 in, heup 39 in, gewicht 140 lb",
        steps: ["taille + heup − nek = 29 + 39 − 13 = 55 in", "163,205 × log₁₀(55) − 97,684 × log₁₀(65) − 78,387 ≈ 28,6%", "Vetmassa ≈ 140 × 0,2856 = 40,0 lb; vetvrije massa ≈ 100,0 lb"],
      },
    ],
    assumptions: [
      "Het resultaat is een schatting, geen medisch advies, en deze calculator is nog niet professioneel beoordeeld. Bespreek met een zorgprofessional wat je vetpercentage voor jou betekent.",
      "De formules zijn ontwikkeld bij volwassen personeel van de US Navy. Ze liggen meestal binnen ongeveer 3–4 procentpunt van laboratoriummetingen en kunnen minder nauwkeurig zijn bij heel gespierde, heel slanke of oudere mensen, en tijdens een zwangerschap.",
      "Kleine meetfouten veranderen het resultaat merkbaar, vooral bij de taille. Meet zorgvuldig en steeds op dezelfde manier.",
      "Er worden geen gezondheidscategorieën getoond, omdat voor deze pagina geen enkele indelingstabel is geverifieerd.",
    ],
    faqs: [
      { question: "Hoe nauwkeurig is de Navy-methode?", answer: "Bij de meeste volwassenen ligt de uitkomst binnen enkele procentpunten van methoden zoals onderwaterweging, maar individuele fouten kunnen groter zijn. De methode is het meest geschikt om veranderingen in de tijd te volgen met dezelfde meettechniek." },
      { question: "Waarom gebruikt de formule voor vrouwen de heupen?", answer: "Vrouwen hebben meestal meer vet rond de heupen en dijen, dus het toevoegen van de heupomtrek maakte de formule voor vrouwen nauwkeuriger." },
      { question: "Waarom verlaagt de lengte de schatting?", answer: "Een langer persoon met dezelfde taille en nek heeft naar verhouding minder omvang voor zijn of haar postuur, dus de formule trekt een term op basis van de lengte af." },
    ],
    sourcesUsedFor: [
      "De omtrekmethode voor mannen, op basis van nek- en buikomtrek en lengte, en de nauwkeurigheid ervan vergeleken met onderwaterweging.",
      "Achtergrond bij de meetlintmethode van het leger en de plaatsen waar nek, taille en heupen worden gemeten.",
    ],
  },
  text: {
    unit: "Meeteenheid",
    units: { cm: "Centimeter (cm)", in: "Inch (in)" },
    sex: "Geslacht in de formule",
    sexHelp: "De methode heeft aparte formules voor mannen en vrouwen; die voor vrouwen gebruikt ook de heupomtrek.",
    sexes: { male: "Man", female: "Vrouw" },
    height: "Lengte",
    heightHelp: "Staande lengte zonder schoenen.",
    neck: "Nekomtrek",
    neckHelp: "Net onder het strottenhoofd (adamsappel), met het meetlint licht schuin naar voren omlaag.",
    waist: "Tailleomtrek",
    waistHelp: "Mannen: rond de buik ter hoogte van de navel. Vrouwen: op het smalste punt van de taille.",
    hip: "Heupomtrek",
    hipHelp: "Rond het breedste deel van de heupen en billen.",
    weight: "Lichaamsgewicht",
    weightHelp: "Optioneel. Wordt gebruikt om je gewicht te splitsen in vetmassa en vetvrije massa.",
    weightUnit: "Eenheid van gewicht",
    weightUnits: { kg: "Kilogram (kg)", lb: "Pond (lb)" },
    bodyFat: "Geschat vetpercentage",
    caption: "{method}; lengte {height}, nek {neck}, taille {waist}.",
    captionHip: "{method}; lengte {height}, nek {neck}, taille {waist}, heup {hip}.",
    method: "Methode",
    methodName: "Omtrekmethode van de US Navy (Hodgdon en Beckett, 1984)",
    methodShort: "Navy-methode",
    fatMass: "Vetmassa",
    leanMass: "Vetvrije massa (alles behalve vet)",
    errors: {
      range: "Vul een waarde in tussen {min} en {max} {unit}.",
      waistNeck: "Voor deze formule moet de taille groter zijn dan de nek.",
      logArgument: "Taille + heup − nek moet groter zijn dan 0.",
      outOfRange: "Deze metingen geven een schatting van {value}, buiten het bereik dat de formule kan beschrijven. Controleer de metingen en de eenheid.",
    },
    notes: {
      estimate: "Een schatting op basis van metingen met een meetlint. Vergeleken met laboratoriummethoden wijken omtrekformules meestal ongeveer 3–4 procentpunt af, en meer bij heel slanke of heel gespierde mensen.",
      measure: "Meet op de blote huid, ontspannen en zonder je buik in te houden, en neem het gemiddelde van twee of drie metingen.",
      noCategories: "Hier worden geen gezondheidscategorieën gegeven; vraag een zorgprofessional hoe je je resultaat moet interpreteren.",
      extreme: "Dit resultaat ligt dicht bij de grens van waarvoor de formule is ontwikkeld, dus het is minder betrouwbaar.",
    },
  },
};

export default nl;
