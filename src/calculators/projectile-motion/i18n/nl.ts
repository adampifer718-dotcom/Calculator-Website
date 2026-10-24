import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProjectileMotionText } from "../text/en";

const nl: CalculatorTranslation<ProjectileMotionText> = {
  content: {
    title: "Calculator voor de schuine worp",
    shortTitle: "Schuine worp",
    summary: "Bereken de worpafstand, vluchttijd, maximale hoogte en inslagsnelheid van een gelanceerd voorwerp, vanaf elke hoogte, op de aarde, de maan of Mars.",
    metaTitle: "Schuine worp berekenen – worpafstand, hoogte en vluchttijd",
    metaDescription:
      "Vul beginsnelheid, hoek en lanceerhoogte in voor worpafstand, vluchttijd, maximale hoogte en inslagsnelheid, met een tabel van posities. Zonder luchtweerstand.",
    keywords: ["schuine worp", "kogelbaan", "worpafstand", "vluchttijd", "maximale hoogte", "lanceerhoek", "kinematica", "parabool"],
    intro: [
      "Een gegooide bal, een getrapte voetbal of een waterstraal volgen eenmaal in de lucht bijna dezelfde kromme: ze blijven met een constante snelheid zijwaarts bewegen terwijl de zwaartekracht ze met een constante versnelling omlaag trekt. Het resultaat is een parabool.",
      "Geef de beginsnelheid, de hoek boven de horizontaal en de hoogte boven de grond waar het voorwerp landt. De calculator berekent hoe ver het voorwerp komt, hoelang het in de lucht blijft, hoe hoog het komt en hoe snel het bij de landing gaat, en geeft de positie op tien momenten van de vlucht.",
    ],
    howToUse: [
      "Vul de beginsnelheid in en kies de eenheid.",
      "Vul de lanceerhoek in graden boven de horizontaal in, van 0° (vlak) tot 90° (recht omhoog).",
      "Vul de lanceerhoogte boven de landingsgrond in en kies meter of voet voor hoogtes en afstanden.",
      "Kies de aarde, de maan, Mars of je eigen waarde voor de zwaartekracht en lees dan de worpafstand en de andere resultaten af.",
    ],
    formulas: [
      { title: "Snelheidscomponenten", expression: "vₓ = v·cos θ, v_y = v·sin θ", explanation: "De horizontale component blijft constant; de verticale component verandert elke seconde met g." },
      { title: "Vluchttijd", expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g", explanation: "De positieve wortel van h + v_y·t − ½·g·t² = 0, waarin de lanceerhoogte h is meegenomen." },
      { title: "Worpafstand en top", expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_top = v_y ÷ g", explanation: "De horizontale afstand, het hoogste punt boven de grond en het moment waarop dat wordt bereikt." },
      { title: "Inslag", expression: "v_inslag = √(vₓ² + v_y² + 2·g·h), hoek = atan(√(v_y² + 2·g·h) ÷ vₓ)", explanation: "De snelheid en de hoek onder de horizontaal waarmee het voorwerp de grond raakt." },
    ],
    examples: [
      {
        title: "Een bal die vanaf de grond met 25 m/s onder 35° wordt getrapt",
        steps: ["vₓ = 25 cos 35° ≈ 20,479 m/s, v_y = 25 sin 35° ≈ 14,339 m/s", "T = 2 × 14,339 ÷ 9,80665 ≈ 2,924 s", "R = 20,479 × 2,924 ≈ 59,89 m; top ≈ 10,48 m"],
      },
      {
        title: "Een worp met 15 m/s onder 20°, losgelaten op 1,8 m boven de grond",
        steps: ["vₓ ≈ 14,095 m/s, v_y ≈ 5,130 m/s", "T = (5,130 + √(5,130² + 2 × 9,80665 × 1,8)) ÷ 9,80665 ≈ 1,324 s", "R = 14,095 × 1,324 ≈ 18,66 m; hij landt met ongeveer 16,13 m/s"],
      },
      {
        title: "Een golfslag met 40 m/s onder 45° op de maan",
        steps: ["Op vlakke grond is R = v² sin(2θ) ÷ g = 1.600 × 1 ÷ 1,62", "R ≈ 987,65 m, ongeveer zes keer verder dan op aarde", "Vluchttijd ≈ 34,92 s"],
      },
    ],
    assumptions: [
      "Luchtweerstand, wind, spin en lift worden genegeerd. Echte banen zijn korter en lager, en een echt projectiel landt steiler dan dit model voorspelt.",
      "De zwaartekracht is constant en wijst recht omlaag, en de grond is vlak en horizontaal. Dat klopt goed voor alledaagse afstanden, niet voor ballistiek over grote afstanden.",
      "Voor de aarde wordt de standaardzwaartekracht gebruikt, 9,80665 m/s² (per definitie exact). De werkelijke zwaartekracht varieert met ongeveer ±0,3% met breedtegraad en hoogte. De waarden voor de maan en Mars zijn de gemiddelde oppervlaktewaarden van NASA.",
      "De lanceerhoogte wordt gemeten boven het landingspunt. Een landing boven het lanceerpunt valt erbuiten.",
    ],
    faqs: [
      { question: "Welke hoek geeft de grootste worpafstand?", answer: "Vanaf de grond en zonder luchtweerstand geeft 45° de maximale worpafstand. Een lancering vanaf een hoogte verschuift de beste hoek tot onder 45°, en luchtweerstand verlaagt hem in de praktijk nog verder." },
      { question: "Maakt de massa van het voorwerp uit?", answer: "Niet zonder luchtweerstand: elk voorwerp valt met dezelfde versnelling g, dus de baan hangt alleen af van snelheid, hoek, hoogte en zwaartekracht." },
      { question: "Waarom is de inslagsnelheid groter dan de beginsnelheid als ik vanaf een hoogte begin?", answer: "Het voorwerp valt verder dan het gestegen is, dus de zwaartekracht voegt verticale snelheid toe. De horizontale snelheid verandert nooit, dus de inslaghoek is steiler dan de lanceerhoek." },
    ],
    sourcesUsedFor: [
      "Het opsplitsen van de beweging in onafhankelijke horizontale en verticale delen; worpafstand, vluchttijd, maximale hoogte en inslagsnelheid zonder luchtweerstand.",
      "Zwaartekracht aan het maanoppervlak, 1,62 m/s².",
      "Gemiddelde zwaartekracht aan het oppervlak van Mars, 3,73 m/s².",
    ],
  },
  text: {
    speed: "Beginsnelheid",
    speedUnit: "Eenheid van snelheid",
    speedUnits: { ms: "Meter per seconde (m/s)", kmh: "Kilometer per uur (km/h)", mph: "Mijl per uur (mph)", fts: "Voet per seconde (ft/s)" },
    angle: "Lanceerhoek",
    angleHelp: "Gemeten vanaf de horizontaal: 0° is een vlakke worp, 90° is recht omhoog.",
    height: "Lanceerhoogte",
    heightHelp: "Hoogte boven de grond waar het projectiel landt. Gebruik 0 voor een lancering vanaf de grond.",
    lengthUnit: "Lengte-eenheid",
    lengthUnitHelp: "Gebruikt voor de lanceerhoogte en voor de afstanden en hoogtes in de resultaten.",
    lengthUnits: { m: "Meter (m)", ft: "Voet (ft)" },
    gravity: "Zwaartekracht",
    gravityOptions: {
      earth: "Aarde, standaard (9,80665 m/s²)",
      moon: "Maan (1,62 m/s²)",
      mars: "Mars (3,73 m/s²)",
      custom: "Eigen waarde",
    },
    customGravity: "Eigen zwaartekracht",
    customGravityHelp: "Neerwaartse versnelling in meter per seconde kwadraat.",
    flatLaunch: "Een vlakke lancering vanaf de grond komt nooit los van de grond. Vergroot de hoek of de lanceerhoogte.",
    range: "Horizontale worpafstand",
    caption: "Horizontale afstand van het lanceerpunt tot waar het voorwerp de grond raakt.",
    flightTime: "Vluchttijd",
    maxHeight: "Maximale hoogte boven de grond",
    apexTime: "Tijd tot het hoogste punt",
    impactSpeed: "Inslagsnelheid",
    impactAngle: "Inslaghoek (onder de horizontaal)",
    components: "Componenten van de beginsnelheid (horizontaal, verticaal)",
    componentsText: "{vx}, {vy}",
    tableCaption: "Positie tijdens de vlucht",
    tableColumns: { time: "Tijd", x: "Horizontale afstand", y: "Hoogte" },
    verticalNote: "Bij 90° gaat het projectiel recht omhoog en komt het terug op het lanceerpunt, dus de worpafstand is 0.",
    note: "Luchtweerstand wordt genegeerd. Echte banen zijn korter en lager, omdat de luchtweerstand het projectiel afremt, vooral bij hoge snelheden.",
  },
};

export default nl;
