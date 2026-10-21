import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConcreteText } from "../text/en";

const de: CalculatorTranslation<ConcreteText> = {
  content: {
    title: "Betonrechner",
    shortTitle: "Beton",
    summary: "Schätzen Sie, wie viel Beton Sie für Platten, Fundamente, runde Säulen und Hohlzylinder bestellen müssen – auf Wunsch mit Zuschlag für Verluste.",
    metaTitle: "Betonrechner – Betonmenge für Platte, Säule und Rohr",
    metaDescription:
      "Berechnen Sie die Betonmenge für Platten, Fundamente, Säulen und Hohlzylinder in m³, Kubikyards, Kubikfuß oder Litern, optional mit Verlustzuschlag.",
    keywords: ["Betonrechner", "Beton berechnen", "Betonmenge", "Kubikmeter Beton", "Bodenplatte", "Fundament berechnen", "Transportbeton", "Säule betonieren"],
    intro: [
      "Beton wird nach Volumen bestellt. Geben Sie die Maße einer Platte, eines Fundaments, einer runden Säule oder eines Hohlzylinders ein, um die benötigte Menge in den Einheiten der Lieferanten zu sehen.",
      "Ein optionaler Verlustzuschlag deckt verschütteten Beton, unebenen Untergrund und sich nach außen wölbende Schalungen ab, damit die Lieferung nicht zu knapp ausfällt.",
    ],
    howToUse: [
      "Wählen Sie die Form und metrische oder US-Einheiten.",
      "Geben Sie die Maße ein: lange Seiten in Metern oder Fuß, Dicke und Durchmesser in Zentimetern oder Zoll.",
      "Geben Sie an, wie viele gleiche Bauteile Sie betonieren.",
      "Legen Sie den Verlustzuschlag fest (üblich sind 5–10 %) und lesen Sie die zu bestellende Menge ab.",
    ],
    formulas: [
      { title: "Platte oder Fundament", expression: "V = Länge × Breite × Dicke", explanation: "Ein rechteckiger Block. Rechnen Sie zuerst alle Maße in dieselbe Einheit um." },
      { title: "Runde Säule", expression: "V = π × (Durchmesser ÷ 2)² × Höhe", explanation: "Ein Zylinder, etwa eine in einem Schalungsrohr aus Pappe gegossene Säule." },
      { title: "Hohlzylinder", expression: "V = π × ((außen ÷ 2)² − (innen ÷ 2)²) × Höhe", explanation: "Der äußere Zylinder abzüglich des hohlen Kerns." },
      { title: "Mit Verlustzuschlag", expression: "Bestellmenge = V × Anzahl der Bauteile × (1 + Verlust % ÷ 100)", explanation: "1 yd³ = 0,764555 m³ und 1 m³ = 1.000 L." },
    ],
    examples: [
      {
        title: "Terrassenplatte 4 m × 3 m, 10 cm dick, 10 % Verlust",
        steps: ["V = 4 m × 3 m × 0,10 m = 1,2 m³", "Mit 10 % Verlust: 1,2 × 1,10 = 1,32 m³"],
      },
      {
        title: "Garagenplatte 10 ft × 10 ft, 4 in dick, ohne Verlust",
        steps: ["V = 10 ft × 10 ft × 4/12 ft = 33,33 ft³", "33,33 ft³ ÷ 27 = 1,235 yd³"],
      },
    ],
    assumptions: [
      "Die Formen sind ideale Quader und Zylinder; messen Sie die tatsächlichen Schalungen, denn Untergrund und Schalung sind selten vollkommen eben oder gerade.",
      "Der Verlustzuschlag ist ein Prozentsatz des exakten Volumens; die Bewehrung, die eine geringe Menge Beton verdrängt, wird nicht berücksichtigt.",
      "Dies ist nur eine Volumenschätzung, keine Ingenieurberatung und keine Tragwerksplanung. Dicke, Bewehrung und Betonfestigkeit müssen den örtlichen Vorschriften oder den Vorgaben eines Statikers entsprechen.",
    ],
    faqs: [
      { question: "Wie viel Beton sollte ich zusätzlich bestellen?", answer: "5–10 % sind ein üblicher Zuschlag für Platten auf vorbereitetem Untergrund; unebene Baugruben können mehr erfordern. Geht der Beton mitten beim Gießen aus, entstehen schwache Fugen, daher empfehlen Lieferanten meist aufzurunden." },
      { question: "Wie viele Kubikfuß hat ein Kubikyard?", answer: "27, denn ein Yard sind 3 Fuß und 3 × 3 × 3 = 27. Ein Kubikyard entspricht etwa 0,765 Kubikmetern." },
      { question: "Kann ich den Rechner für Sackware (Fertigbeton) verwenden?", answer: "Ja: Teilen Sie das Volumen durch die auf dem Sack angegebene Ergiebigkeit, die je nach Produkt unterschiedlich ist, und runden Sie auf." },
    ],
    sourcesUsedFor: ["Exakte Umrechnungsfaktoren zwischen Fuß, Zoll, Metern, Kubikyards und Kubikmetern."],
  },
  text: {
    shape: "Form",
    shapes: { slab: "Platte oder Fundament", column: "Runde Säule", tube: "Hohlzylinder" },
    units: "Einheiten",
    unitSystems: { metric: "Metrisch (m, cm)", imperial: "US (ft, in)" },
    length: "Länge",
    width: "Breite",
    thickness: "Dicke",
    diameter: "Durchmesser",
    outerDiameter: "Außendurchmesser",
    innerDiameter: "Innendurchmesser",
    height: "Höhe",
    quantity: "Anzahl gleicher Bauteile",
    waste: "Zuschlag für Verluste",
    wasteHelp: "Reserve für verschütteten Beton, unebenen Untergrund und zu tiefen Aushub. Üblich sind 5–10 %; geben Sie 0 für das exakte Volumen ein.",
    errors: { inner: "Der Innendurchmesser muss kleiner als der Außendurchmesser sein." },
    volume: "Zu bestellende Betonmenge",
    caption: "{exact} ohne den Verlustzuschlag von {waste}.",
    exact: "Exaktes Volumen (ohne Verlust)",
    inCubicMetres: "In Kubikmetern",
    inCubicYards: "In Kubikyards",
    inCubicFeet: "In Kubikfuß",
    inLitres: "In Litern",
    notes: {
      order: "Transportbeton wird nach Kubikmeter oder Kubikyard verkauft; runden Sie auf die kleinste Liefereinheit des Lieferanten auf.",
      structural: "Hier wird nur das Volumen geschätzt. Plattendicke, Bewehrung, Betonfestigkeit und Fundamentgrößen müssen der örtlichen Bauordnung oder der Planung eines Statikers entsprechen.",
    },
  },
};

export default de;
