import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { IdealGasLawText } from "../text/en";

const de: CalculatorTranslation<IdealGasLawText> = {
  content: {
    title: "Rechner für das ideale Gasgesetz",
    shortTitle: "Ideales Gasgesetz",
    summary: "Lösen Sie pV = nRT nach Druck, Volumen, Stoffmenge oder Temperatur – mit integrierter Einheitenumrechnung.",
    metaTitle: "Rechner für das ideale Gasgesetz – pV = nRT lösen",
    metaDescription: "Lösen Sie pV = nRT nach Druck, Volumen, Stoffmenge oder Temperatur. Pa, kPa, bar, atm, mmHg, Liter, m³, Kelvin, °C und °F frei kombinierbar.",
    keywords: ["ideales Gasgesetz", "pV=nRT", "allgemeine Gasgleichung", "Gaskonstante", "Druck berechnen", "Stoffmenge Gas", "Kelvin", "Gasgesetze", "Chemie"],
    intro: [
      "Das ideale Gasgesetz verknüpft vier Größen eines Gases: Druck, Volumen, Stoffmenge in Mol und absolute Temperatur. Kennen Sie drei davon, können Sie die vierte berechnen.",
      "Wählen Sie den gesuchten Wert und geben Sie die anderen drei in beliebigen Einheiten ein. Der Rechner wandelt alles in SI-Einheiten um, löst pV = nRT und rechnet das Ergebnis zurück.",
    ],
    howToUse: [
      "Wählen Sie, was Sie berechnen möchten: Druck, Volumen, Stoffmenge oder Temperatur.",
      "Geben Sie die drei bekannten Werte ein und wählen Sie für jeden eine Einheit.",
      "Legen Sie in der passenden Einheitenliste fest, in welcher Einheit das Ergebnis erscheinen soll.",
      "Lesen Sie das Ergebnis, denselben Wert in anderen Einheiten und das molare Volumen ab.",
    ],
    formulas: [
      { title: "Ideales Gasgesetz", expression: "p × V = n × R × T", explanation: "p in Pascal, V in Kubikmetern, n in Mol und T in Kelvin." },
      {
        title: "Gaskonstante",
        expression: "R = Nₐ × k = 8,31446261815324 J/(mol·K)",
        explanation: "Seit der Neudefinition des SI 2019 exakt, da Nₐ und k festgelegt sind.",
      },
      {
        title: "Kelvin",
        expression: "T(K) = T(°C) + 273,15 = (T(°F) − 32) × 5/9 + 273,15",
        explanation: "Das Gesetz benötigt die absolute Temperatur, daher werden Celsius und Fahrenheit zuerst umgerechnet.",
      },
    ],
    examples: [
      {
        title: "Druck von 2 mol in einem 50-L-Behälter bei 25 °C",
        steps: ["T = 25 + 273,15 = 298,15 K und V = 0,05 m³", "p = 2 × 8,314463 × 298,15 ÷ 0,05 ≈ 99.158 Pa", "≈ 99,158 kPa"],
      },
      {
        title: "Volumen von 1 mol bei 0 °C und 1 atm",
        steps: ["T = 273,15 K und p = 101.325 Pa", "V = 1 × 8,314463 × 273,15 ÷ 101.325 ≈ 0,022414 m³", "≈ 22,414 L"],
      },
      {
        title: "Temperatur von 0,5 mol in 10 L bei 200 kPa",
        steps: ["T = 200.000 × 0,01 ÷ (0,5 × 8,314463) ≈ 481,09 K", "481,09 − 273,15 ≈ 207,94 °C"],
      },
    ],
    assumptions: [
      "Das Gas wird als ideal betrachtet: Seine Moleküle nehmen keinen Raum ein und ziehen sich nicht gegenseitig an.",
      "Reale Gase weichen bei hohem Druck, bei niedriger Temperatur und in der Nähe ihres Kondensationspunkts deutlich ab. Verwenden Sie für diese Fälle eine Zustandsgleichung wie die Van-der-Waals-Gleichung.",
      "Der Druck ist der absolute Druck, nicht der Überdruck. Addieren Sie zu einem Überdruckwert zuerst den Luftdruck.",
    ],
    faqs: [
      {
        question: "Warum muss die Temperatur in Kelvin angegeben werden?",
        answer: "Das Gesetz ist proportional zur absoluten Temperatur. Bei 0 °C besitzt ein Gas noch reichlich Wärmeenergie, daher würden Celsius- oder Fahrenheitwerte falsche Ergebnisse liefern. Der Rechner rechnet sie für Sie um.",
      },
      {
        question: "Welchen Wert von R sollte ich verwenden?",
        answer: "In SI-Einheiten gilt R = 8,314462618 J/(mol·K). Mit Litern und Atmosphären sind es etwa 0,082057 L·atm/(mol·K). Dieses Werkzeug rechnet intern immer in SI-Einheiten, Sie müssen also nichts auswählen.",
      },
      {
        question: "Was ist das molare Volumen eines Gases?",
        answer: "Das Volumen, das ein Mol einnimmt. Für ein ideales Gas bei 0 °C und 1 atm sind es etwa 22,414 L, bei 25 °C und 1 bar etwa 24,79 L.",
      },
    ],
    sourcesUsedFor: [
      "Exakter Wert der molaren Gaskonstante R = Nₐk = 8,314462618… J/(mol·K) und der Avogadro-Konstante.",
      "Das ideale Gasgesetz und seine Grenzen bei niedriger Temperatur und hohem Druck.",
    ],
  },
  text: {
    solve: "Gesuchter Wert",
    solveOptions: { P: "Druck (p)", V: "Volumen (V)", n: "Stoffmenge (n)", T: "Temperatur (T)" },
    pressure: "Druck (p)",
    pressureUnit: "Druckeinheit",
    pressureUnits: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      bar: "Bar (bar)",
      atm: "Physikalische Atmosphären (atm)",
      mmHg: "Millimeter Quecksilbersäule (mmHg)",
    },
    volume: "Volumen (V)",
    volumeUnit: "Volumeneinheit",
    volumeUnits: { L: "Liter (L)", mL: "Milliliter (mL)", m3: "Kubikmeter (m³)" },
    moles: "Stoffmenge des Gases (n)",
    temperature: "Temperatur (T)",
    temperatureUnit: "Temperatureinheit",
    temperatureUnits: { K: "Kelvin (K)", C: "Grad Celsius (°C)", F: "Grad Fahrenheit (°F)" },
    unitHelp: "Beim gesuchten Wert ist dies die Einheit des Ergebnisses.",
    belowAbsoluteZero: "Die Temperatur muss über dem absoluten Nullpunkt liegen (0 K = −273,15 °C = −459,67 °F).",
    results: { P: "Druck", V: "Volumen", n: "Stoffmenge des Gases", T: "Temperatur" },
    inUnit: "In {unit}",
    molecules: "Anzahl der Moleküle (n × Nₐ)",
    molarVolume: "Molares Volumen (V ÷ n)",
    note: "Verwendet R = 8,31446261815324 J/(mol·K). Reale Gase weichen bei hohem Druck und niedriger Temperatur von diesem idealen Modell ab, besonders in der Nähe der Kondensation.",
  },
};

export default de;
