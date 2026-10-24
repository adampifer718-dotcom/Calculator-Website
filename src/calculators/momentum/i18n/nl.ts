import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MomentumText } from "../text/en";

const nl: CalculatorTranslation<MomentumText> = {
  content: {
    title: "Impulscalculator (p = mv)",
    shortTitle: "Impuls",
    summary: "Los p = mv op voor impuls, massa of snelheid, of bereken de stoot van een kracht en de snelheidsverandering die hij veroorzaakt.",
    metaTitle: "Impulscalculator (p = mv) – impuls en stoot J = FΔt",
    metaDescription:
      "Bereken impuls, massa of snelheid uit p = mv in metrische of Amerikaanse eenheden, met kinetische energie, of de stoot van een kracht en de Δv die volgt.",
    keywords: ["impuls berekenen", "impuls", "p = mv", "stoot", "krachtstoot", "impuls-stootstelling", "kg m/s", "snelheidsverandering"],
    intro: [
      "Impuls (hoeveelheid van beweging) geeft aan hoe moeilijk het is om een bewegend voorwerp tot stilstand te brengen. Het is massa maal snelheid, dus een langzame vrachtwagen en een snelle honkbal kunnen er allebei veel van hebben. Omdat impuls een richting heeft, kan hij negatief zijn als de beweging de andere kant op gaat.",
      "Gebruik de eerste modus om impuls, massa of snelheid uit de andere twee te vinden; het resultaat toont ook de kinetische energie. Gebruik de stootmodus om te zien wat een kracht doet die korte tijd werkt: de stoot is gelijk aan de verandering van de impuls, en met een massa erbij geeft hij de snelheidsverandering.",
    ],
    howToUse: [
      "Kies impuls (p = mv) of stoot (J = FΔt).",
      "Kies bij impuls wat je wilt vinden en vul de andere twee waarden met hun eenheden in. Gebruik een negatieve snelheid of impuls voor beweging in de tegenovergestelde richting.",
      "Vul bij stoot de gemiddelde kracht in en hoelang die werkt. Vul ook de massa in als je de snelheidsverandering wilt weten.",
      "Lees het resultaat af en de andere eenheden, waaronder lb·ft/s en de kinetische energie.",
    ],
    formulas: [
      { title: "Impuls", expression: "p = m × v", explanation: "In kg·m/s. Los op voor m = p ÷ v of v = p ÷ m." },
      { title: "Stoot", expression: "J = F × Δt = Δp", explanation: "Een gemiddelde kracht die een tijd lang werkt, verandert de impuls met precies de stoot, in N·s (hetzelfde als kg·m/s)." },
      { title: "Snelheidsverandering", expression: "Δv = J ÷ m", explanation: "De stoot gedeeld door de massa waarop hij werkt." },
      { title: "Kinetische energie", expression: "Ek = p² ÷ (2m)", explanation: "Gelijk aan ½·m·v², in joule." },
    ],
    examples: [
      {
        title: "Een honkbal van 0,145 kg met 40 m/s",
        steps: ["p = 0,145 kg × 40 m/s = 5,8 kg·m/s", "≈ 41,95 lb·ft/s; Ek = 5,8² ÷ (2 × 0,145) = 116 J"],
      },
      {
        title: "Snelheid van een schaatser van 60 kg met een impuls van 900 kg·m/s",
        steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3,6 = 54 km/h"],
      },
      {
        title: "Een trap van 250 N die 0,02 s duurt op een bal van 0,16 kg",
        steps: ["J = 250 N × 0,02 s = 5 N·s", "Δv = 5 ÷ 0,16 = 31,25 m/s"],
      },
    ],
    assumptions: [
      "Beweging en krachten liggen langs één rechte lijn; het teken geeft de richting. Pas bij beweging in twee of drie dimensies de formules per component toe.",
      "In de stootmodus is de kracht de gemiddelde kracht over het tijdsinterval. Een kracht die tijdens de botsing verandert, geeft dezelfde stoot als haar gemiddelde.",
      "De klassieke mechanica geldt; die is nauwkeurig bij snelheden ver onder de lichtsnelheid.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen impuls en kinetische energie?", answer: "Impuls (mv) is een vector en blijft bij elke botsing behouden. Kinetische energie (½mv²) heeft geen richting en wordt bij de meeste botsingen deels omgezet in warmte en geluid." },
      { question: "Is N·s hetzelfde als kg·m/s?", answer: "Ja. Een newton is een kg·m/s², dus een newtonseconde is een kg·m/s. Stoot en impuls hebben dezelfde eenheid." },
      { question: "Waarom verminderen airbags en beschermende vulling letsel?", answer: "Ze laten het afremmen langer duren. De verandering van de impuls is gelijk, dus een langere tijd betekent een kleinere gemiddelde kracht, want F = Δp ÷ Δt." },
    ],
    sourcesUsedFor: [
      "Stoot als kracht maal de tijd dat ze werkt, en de impuls-stootstelling J = Δp.",
      "Nettokracht als de snelheid waarmee de impuls verandert.",
    ],
  },
  text: {
    mode: "Berekenen",
    modes: { momentum: "Impuls (p = mv)", impulse: "Stoot (J = FΔt)" },
    solve: "Bereken",
    solveOptions: { momentum: "Impuls (p)", mass: "Massa (m)", velocity: "Snelheid (v)" },
    momentum: "Impuls (p)",
    momentumHelp: "In kilogram meter per seconde. Een negatieve waarde betekent beweging in de tegenovergestelde richting.",
    mass: "Massa (m)",
    impulseMass: "Massa (optioneel)",
    impulseMassHelp: "Laat leeg om alleen de stoot te krijgen. Met een massa wordt ook de snelheidsverandering getoond.",
    massUnit: "Eenheid van massa",
    massUnits: { kg: "Kilogram (kg)", g: "Gram (g)", lb: "Pond (lb)", t: "Ton (t)" },
    velocity: "Snelheid (v)",
    velocityHelp: "Een negatieve waarde betekent beweging in de tegenovergestelde richting.",
    velocityUnit: "Eenheid van snelheid",
    velocityUnits: { ms: "Meter per seconde (m/s)", kmh: "Kilometer per uur (km/h)", mph: "Mijl per uur (mph)", fts: "Voet per seconde (ft/s)" },
    unitHelp: "Voor de waarde die je zoekt, is dit de eenheid van het antwoord.",
    force: "Gemiddelde kracht (F)",
    forceHelp: "Een negatieve waarde betekent dat de kracht de andere kant op wijst.",
    forceUnit: "Eenheid van kracht",
    forceUnits: { N: "Newton (N)", lbf: "Pond-kracht (lbf)" },
    duration: "Tijd dat de kracht werkt (Δt)",
    zeroVelocity: "De snelheid mag niet 0 zijn als je de massa zoekt, omdat een massa in rust geen impuls heeft.",
    zeroMomentum: "De impuls mag niet 0 zijn als je de massa zoekt.",
    signMismatch: "De impuls en de snelheid moeten hetzelfde teken hebben, omdat massa positief is.",
    results: { momentum: "Impuls", mass: "Massa", velocity: "Snelheid" },
    impulse: "Stoot (J = Δp)",
    inUnit: "In {unit}",
    kineticEnergy: "Kinetische energie (p² ÷ 2m)",
    deltaV: "Snelheidsverandering (Δv = J ÷ m)",
    impulseNote: "De stoot is gelijk aan de verandering van de impuls. Dezelfde stoot kan komen van een grote kracht gedurende korte tijd of van een kleine kracht gedurende lange tijd.",
    note: "Impuls is een vector. Hier wordt hij langs één lijn gemeten, met het teken als richting.",
  },
};

export default nl;
