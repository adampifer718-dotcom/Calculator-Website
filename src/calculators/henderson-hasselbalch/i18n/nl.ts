import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HendersonHasselbalchText } from "../text/en";

const nl: CalculatorTranslation<HendersonHasselbalchText> = {
  content: {
    title: "Buffer-pH-calculator (Henderson–Hasselbalch)",
    shortTitle: "Buffer-pH",
    summary: "Bereken de pH van een buffer uit de concentraties van zuur en base, of de base-zuurverhouding en de baseconcentratie die nodig zijn voor een gewenste pH.",
    metaTitle: "Buffer-pH-calculator – Henderson–Hasselbalch-vergelijking",
    metaDescription:
      "Bereken met pH = pKa + log([A⁻]/[HA]) de pH van een buffer, de base-zuurverhouding voor een gewenste pH of de nodige baseconcentratie, met vaste pKa's.",
    keywords: ["henderson-hasselbalch", "buffer pH berekenen", "bufferoplossing", "pKa", "geconjugeerde base", "acetaatbuffer", "fosfaatbuffer", "trisbuffer"],
    intro: [
      "Een buffer is een mengsel van een zwak zuur HA en de geconjugeerde base A⁻. Hij houdt de pH redelijk stabiel als er kleine hoeveelheden sterk zuur of sterke base bij komen, omdat elke vorm er één van neutraliseert. De vergelijking van Henderson–Hasselbalch verbindt de pH van de buffer met de pKa van het zuur en de verhouding tussen de twee vormen.",
      "Gebruik deze calculator om de pH te vinden van een buffer die je hebt gemaakt, de base-zuurverhouding die een gewenste pH geeft, of hoe geconcentreerd de basevorm moet zijn bij een gegeven zuurconcentratie. Er zijn voorinstellingen voor acetaat-, bicarbonaat-, fosfaat-, tris- en ammoniumbuffers.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen: de pH, de verhouding of de baseconcentratie.",
      "Kies een bufferpaar uit de lijst, of kies Overig en typ de pKa.",
      "Vul de concentraties in mol/L in (e-notatie zoals 5e-3 werkt) of de gewenste pH.",
      "Lees het resultaat af en controleer of de pH binnen het werkzame bereik pKa ± 1 ligt.",
    ],
    formulas: [
      { title: "Vergelijking van Henderson–Hasselbalch", expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])", explanation: "Als de twee vormen gelijk zijn, is de logterm 0 en geldt pH = pKa." },
      { title: "Verhouding voor een gewenste pH", expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)", explanation: "Elke pH-eenheid boven de pKa vermenigvuldigt de verhouding met 10." },
      { title: "Werkzaam bereik", expression: "pKa − 1 ≤ pH ≤ pKa + 1", explanation: "Binnen dit bereik is geen van beide vormen meer dan 10 keer zo groot als de andere, dus de buffer kan zowel toegevoegd zuur als toegevoegde base opvangen." },
    ],
    examples: [
      {
        title: "Acetaatbuffer met meer base dan zuur",
        steps: ["Verhouding = 0,15 ÷ 0,10 = 1,5", "pH = 4,76 + log₁₀(1,5) = 4,76 + 0,1761", "pH ≈ 4,936"],
      },
      {
        title: "Fosfaatbuffer bij pH 7,40",
        steps: ["pH − pKa = 7,40 − 7,21 = 0,19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0,19 ≈ 1,549"],
      },
      {
        title: "Benodigde trisbase voor pH 7,8",
        steps: ["Verhouding = 10^(7,8 − 8,07) = 10^−0,27 ≈ 0,5370", "[trisbase] = 0,05 mol/L × 0,5370 ≈ 0,02685 mol/L"],
      },
    ],
    assumptions: [
      "Concentraties worden gebruikt in plaats van activiteiten. In geconcentreerde of zoutrijke oplossingen kan de werkelijke pH enkele tienden afwijken.",
      "Beide vormen moeten aanwezig zijn in concentraties die veel groter zijn dan de H⁺- en OH⁻-concentratie, dus zeer verdunde buffers en pH-waarden ver van de pKa zijn minder nauwkeurig.",
      "De vooraf ingestelde pKa-waarden gelden bij 25 °C. De pKa verandert met de temperatuur en de ionsterkte, wat vooral bij Tris uitmaakt. Controleer de pH van een echte buffer met een gekalibreerde pH-meter.",
      "Bij zuren met meerdere pKa-waarden (zoals fosforzuur en koolzuur) wordt alleen het gekozen paar meegenomen.",
    ],
    faqs: [
      { question: "Waarom is het bruikbare bereik pKa ± 1?", answer: "Op één pH-eenheid van de pKa is de ene vorm tien keer zo groot als de andere. Daarbuiten heeft de buffer nog maar heel weinig van één vorm over, dus kan hij in die richting niet veel toegevoegd zuur of base meer opvangen." },
      { question: "Welke buffer kies ik voor een bepaalde pH?", answer: "Kies een paar met een pKa dicht bij de pH die je nodig hebt, het liefst binnen ongeveer een halve eenheid. Voor pH 7,4 past fosfaat (pKa 7,21) bijvoorbeeld beter dan acetaat (pKa 4,76)." },
      { question: "Kan ik mol gebruiken in plaats van concentraties?", answer: "Ja. Beide vormen zitten in hetzelfde volume, dus de verhouding in mol is gelijk aan de verhouding van de concentraties. Vul in beide velden de hoeveelheden in mol in; de pH blijft hetzelfde." },
    ],
    sourcesUsedFor: [
      "De vergelijking van Henderson–Hasselbalch, de voorwaarden voor het gebruik ervan en de buffercapaciteit.",
      "pKa-waarden van gangbare bufferstoffen bij 25 °C.",
    ],
  },
  text: {
    solve: "Berekenen",
    solves: {
      ph: "pH van de buffer uit concentraties",
      ratio: "Base-zuurverhouding voor een gewenste pH",
      base: "Baseconcentratie voor een gewenste pH",
    },
    acid: "Paar zwak zuur / geconjugeerde base",
    acids: {
      acetic: "Azijnzuur / acetaat (pKa {pka})",
      carbonic: "Koolzuur / bicarbonaat, eerste stap (pKa {pka})",
      phosphate: "Diwaterstoffosfaat / waterstoffosfaat (pKa {pka})",
      tris: "Tris-H⁺ / trisbase (pKa {pka})",
      ammonium: "Ammonium / ammoniak (pKa {pka})",
      custom: "Overig (vul de pKa in)",
    },
    pka: "pKa van het zwakke zuur",
    pkaHelp: "−log₁₀ van de zuurconstante Ka, bij de temperatuur van je buffer.",
    base: "Concentratie geconjugeerde base [A⁻]",
    acidConc: "Concentratie zwak zuur [HA]",
    concentrationHelp: "In mol/L. E-notatie zoals 5e-3 wordt geaccepteerd.",
    targetPh: "Gewenste pH",
    targetPhHelp: "Tussen 0 en 14. Buffers werken het best binnen 1 eenheid van de pKa.",
    errors: {
      notNumber: "Vul een positief getal in, zoals 0,1 of 1e-3.",
      notPositive: "De concentratie moet groter zijn dan 0.",
      tooConcentrated: "Vul hoogstens {max} mol/L in.",
    },
    molar: "{value} mol/L",
    results: { ph: "pH van de buffer", ratio: "Verhouding [A⁻] ÷ [HA]", base: "Concentratie geconjugeerde base [A⁻]" },
    captions: {
      ph: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
      ratio: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
      base: "[A⁻] = [HA] × 10^(pH − pKa)",
    },
    ratio: "Verhouding [A⁻] ÷ [HA]",
    phUsed: "Gewenste pH",
    pkaUsed: "Gebruikte pKa",
    range: "Werkzaam bufferbereik (pKa ± 1)",
    rangeText: "pH {low} tot {high}",
    baseShare: "Aandeel van de buffer in de basevorm",
    notes: {
      insideRange: "De pH ligt binnen 1 eenheid van de pKa, waar de buffer pH-veranderingen goed tegengaat.",
      outsideRange: "De pH ligt meer dan 1 eenheid van de pKa af. De ene vorm van het paar is dan meer dan 10 keer zo groot als de andere, dus de buffer heeft in één richting weinig capaciteit over. Een paar met een pKa dichter bij de gewenste pH werkt meestal beter.",
      tooMuchBase: "De benodigde baseconcentratie is hoger dan 20 mol/L, wat niet praktisch is. Verlaag de zuurconcentratie of kies een paar met een pKa dichter bij de gewenste pH.",
      extreme: "De pH ligt buiten 0–14. De vergelijking van Henderson–Hasselbalch is zo ver van de pKa niet betrouwbaar.",
      general: "De vergelijking gebruikt concentraties in plaats van activiteiten en gaat ervan uit dat beide vormen ruim boven de H⁺- en OH⁻-concentratie aanwezig zijn. De vermelde pKa-waarden gelden bij 25 °C; de pKa verandert met de temperatuur en de ionsterkte, vooral bij Tris.",
    },
  },
};

export default nl;
