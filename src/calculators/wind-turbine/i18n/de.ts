import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WindTurbineText } from "../text/en";

const de: CalculatorTranslation<WindTurbineText> = {
  content: {
    title: "Windkraftrechner",
    shortTitle: "Windkraftleistung",
    summary: "Schätzen Sie die Leistung einer Windkraftanlage aus Rotordurchmesser, Windgeschwindigkeit, Luftdichte und Leistungsbeiwert – mit einem groben Jahresertrag.",
    metaTitle: "Windkraftrechner – Leistung in kW und Ertrag in kWh",
    metaDescription: "Leistung einer Windkraftanlage aus Rotordurchmesser, Wind, Luftdichte und Leistungsbeiwert – mit Betz-Limit und geschätztem Jahresertrag in kWh.",
    keywords: ["Windkraftanlage Leistung berechnen", "Windleistung Formel", "Windrad Ertrag", "Rotorfläche", "Leistungsbeiwert", "Betz-Limit", "Kapazitätsfaktor", "Windenergie kWh"],
    intro: [
      "Eine Windkraftanlage wandelt einen Teil der Bewegungsenergie der Luft in Strom um. Die verfügbare Leistung hängt davon ab, wie viel Luft durch den von den Rotorblättern überstrichenen Kreis strömt, wie dicht diese Luft ist und vor allem, wie schnell sie sich bewegt: Die Leistung wächst mit der dritten Potenz der Windgeschwindigkeit, doppelte Geschwindigkeit ergibt also die achtfache Leistung.",
      "Geben Sie den Rotordurchmesser, die Windgeschwindigkeit und den Leistungsbeiwert der Anlage ein, um ihre Leistung zu schätzen. Sie können das Ergebnis außerdem auf die Nennleistung des Generators begrenzen und einen Kapazitätsfaktor für einen groben Jahresertrag angeben.",
    ],
    howToUse: [
      "Geben Sie den Rotordurchmesser in Metern oder Fuß ein.",
      "Geben Sie die Windgeschwindigkeit auf Nabenhöhe ein und wählen Sie die Einheit.",
      "Behalten Sie die Standard-Luftdichte von 1,225 kg/m³ bei oder geben Sie einen Wert für Ihre Höhe und Temperatur ein.",
      "Geben Sie den Leistungsbeiwert Cp ein. 0,40 ist ein angemessener Wert für eine gute moderne Anlage; er kann das Betz-Limit von etwa 0,593 nicht überschreiten.",
      "Geben Sie bei Bedarf die Nennleistung ein, um die Leistung zu begrenzen, und einen Kapazitätsfaktor, um den Ertrag über ein Jahr zu schätzen.",
    ],
    formulas: [
      { title: "Rotorfläche", expression: "A = π × (D ÷ 2)²", explanation: "D ist der Rotordurchmesser. Ein 80-m-Rotor überstreicht etwa 5.027 m²." },
      { title: "Leistung der Anlage", expression: "P = ½ × ρ × A × v³ × Cp", explanation: "ρ ist die Luftdichte in kg/m³, v die Windgeschwindigkeit in m/s und Cp der Leistungsbeiwert. Das Ergebnis ist in Watt." },
      { title: "Betz-Limit", expression: "Cp ≤ 16/27 ≈ 0,593", explanation: "Ein idealer Rotor kann höchstens 16/27 der Leistung des durchströmenden Windes nutzen. Reale Anlagen nutzen weniger, typischerweise selbst im besten Betriebspunkt deutlich unter 0,5." },
      { title: "Jahresertrag (grob)", expression: "E = P × 8.760 h × Kapazitätsfaktor", explanation: "P ist die Leistung, begrenzt auf die Nennleistung, falls angegeben. Der Kapazitätsfaktor berücksichtigt die Zeiten mit schwächerem Wind." },
    ],
    examples: [
      {
        title: "80-m-Rotor bei 10 m/s Wind",
        steps: ["A = π × 40² ≈ 5.026,55 m²", "P = 0,5 × 1,225 × 5.026,55 × 10³ × 0,40 ≈ 1.231.504 W", "Leistung ≈ 1.231,50 kW, etwa 1,23 MW"],
      },
      {
        title: "Kleine 10-ft-Anlage bei einer Brise von 12 mph",
        steps: ["D = 10 × 0,3048 = 3,048 m, also A ≈ 7,297 m²", "v = 12 × 0,44704 = 5,364 m/s", "P = 0,5 × 1,225 × 7,297 × 5,364³ × 0,35 ≈ 241 W, etwa 0,24 kW"],
      },
      {
        title: "100-m-Rotor mit 2.500 kW Nennleistung, 12 m/s Wind, 35 % Kapazitätsfaktor",
        steps: [
          "A = π × 50² ≈ 7.853,98 m²",
          "Rotorleistung = 0,5 × 1,225 × 7.853,98 × 12³ × 0,45 ≈ 3.740,69 kW, mehr als die Nennleistung von 2.500 kW",
          "Die Leistung wird auf 2.500 kW begrenzt",
          "Jahresertrag ≈ 2.500 × 8.760 × 0,35 = 7.665.000 kWh",
        ],
      },
    ],
    assumptions: [
      "Die Windgeschwindigkeit wird als konstant und über den Rotor gleichmäßig angenommen. Echter Wind schwankt von Sekunde zu Sekunde und mit der Höhe, und weil die Leistung von der dritten Potenz der Geschwindigkeit abhängt, ist die mittlere Leistung höher als die Leistung bei der mittleren Geschwindigkeit.",
      "Der Leistungsbeiwert wird als konstant behandelt. In Wirklichkeit ändert er sich mit der Windgeschwindigkeit, und jede Anlage hat ihre eigene Leistungskennlinie, Einschalt- und Abschaltgeschwindigkeit.",
      "Der Jahresertrag ist eine grobe Schätzung nach der obigen Formel, kein Standortgutachten. Für die Planung einer echten Anlage braucht man gemessene Winddaten und die Leistungskennlinie des Herstellers.",
      "Verluste in Generator, Getriebe und Elektrik gelten als im eingegebenen Leistungsbeiwert enthalten.",
    ],
    faqs: [
      { question: "Was ist das Betz-Limit?", answer: "Es ist der theoretisch größte Anteil der Windleistung, den ein Rotor entnehmen kann: 16/27 oder etwa 59,3 %. Würde ein Rotor die Luft vollständig abbremsen, könnte keine Luft mehr nachströmen; deshalb muss im Wind hinter der Anlage immer etwas Energie verbleiben." },
      { question: "Warum ist die Windgeschwindigkeit so wichtig?", answer: "Die Leistung des Windes wächst mit der dritten Potenz der Geschwindigkeit. Ein Standort mit durchschnittlich 7 m/s bietet etwa 31 % mehr Leistung ((7 ÷ 6,4)³ ≈ 1,31) als einer mit 6,4 m/s – kleine Unterschiede bei Standort und Turmhöhe machen also viel aus." },
      { question: "Welchen Kapazitätsfaktor sollte ich verwenden?", answer: "Er hängt stark vom Standort, von der Turmhöhe und von der Anlage ab, einen einzigen richtigen Wert gibt es daher nicht. Verwenden Sie gemessene Winddaten für Ihren Standort oder veröffentlichte Werte vergleichbarer Anlagen in Ihrer Region. Kleine Anlagen an geschützten Stellen erreichen oft deutlich niedrigere Werte als große Anlagen an offenen, windreichen Standorten." },
    ],
    sourcesUsedFor: [
      "Die Leistung des Windes P = ½ρAv³, der Leistungsbeiwert und das Betz-Limit von 16/27.",
      "Die Luftdichte der Internationalen Standardatmosphäre auf Meereshöhe von 1,225 kg/m³.",
    ],
  },
  text: {
    diameter: "Rotordurchmesser",
    diameterHelp: "Der Durchmesser des von den Blattspitzen überstrichenen Kreises (zweimal die Blattlänge plus die Nabe).",
    diameterUnit: "Einheit des Durchmessers",
    diameterUnits: { m: "Meter (m)", ft: "Fuß (ft)" },
    speed: "Windgeschwindigkeit",
    speedHelp: "Die Windgeschwindigkeit auf Nabenhöhe. Die Leistung steigt mit der dritten Potenz der Geschwindigkeit, schon kleine Änderungen wirken sich also stark aus.",
    speedUnit: "Einheit der Geschwindigkeit",
    speedUnits: { ms: "Meter pro Sekunde (m/s)", kmh: "Kilometer pro Stunde (km/h)", mph: "Meilen pro Stunde (mph)", kn: "Knoten (kn)" },
    density: "Luftdichte",
    densityHelp: "1,225 kg/m³ ist der Wert der Internationalen Standardatmosphäre auf Meereshöhe bei 15 °C. In der Höhe und bei Hitze ist die Luft dünner.",
    cp: "Leistungsbeiwert (Cp)",
    cpHelp: "Der Anteil der Windleistung, den der Rotor in Leistung umsetzt. 0,40 ist ein vernünftiger Wert für eine gute moderne Anlage; das theoretische Maximum ist 16/27 ≈ 0,593 (das Betz-Limit).",
    ratedPower: "Nennleistung (optional)",
    ratedPowerHelp: "Die Typenschildleistung des Generators. Wenn angegeben, wird die Leistung auf diesen Wert begrenzt.",
    capacityFactor: "Kapazitätsfaktor (optional)",
    capacityFactorHelp: "Die mittlere Leistung über ein Jahr in Prozent der für die Schätzung verwendeten Leistung. Leer lassen, um den Jahresertrag auszulassen.",
    errors: {
      betz: "Der Leistungsbeiwert kann nicht größer als 16/27 ≈ 0,5926 sein (das Betz-Limit). Kein Rotor kann einen größeren Anteil der Windleistung nutzen.",
    },
    power: "Leistung der Windkraftanlage",
    caption: "Rotorfläche {area}, Wind {speed}, Cp {cp}.",
    powerW: "Leistung in Watt",
    aeroPower: "Rotorleistung vor der Begrenzung auf die Nennleistung",
    windPower: "Leistung des Windes durch die Rotorfläche (Cp = 1)",
    betzPower: "Höchste Leistung, die ein Rotor nutzen könnte (Betz-Limit)",
    sweptArea: "Rotorfläche",
    speedMs: "Windgeschwindigkeit in m/s",
    annualEnergy: "Jahresertrag, grobe Schätzung",
    annualEnergyMwh: "Jahresertrag in MWh",
    notes: {
      capped: "Der Rotor könnte bei dieser Windgeschwindigkeit mehr als die Nennleistung liefern, daher wird die Leistung auf die Nennleistung von {rated} begrenzt.",
      annual: "Der Jahresertrag ist eine grobe Schätzung: die obige Leistung × 8.760 Stunden × Kapazitätsfaktor. Der tatsächliche Ertrag hängt davon ab, wie sich die Windgeschwindigkeit über das Jahr verteilt, sowie von der Leistungskennlinie der Anlage, Stillstandszeiten und Verlusten.",
      single: "Dies ist die Leistung bei einer einzigen konstanten Windgeschwindigkeit. Echter Wind ändert sich ständig, und Anlagen liefern unterhalb ihrer Einschaltgeschwindigkeit nichts und schalten oberhalb ihrer Abschaltgeschwindigkeit ab.",
    },
  },
};

export default de;
