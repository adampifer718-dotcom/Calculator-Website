import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { IdealGasLawText } from "../text/en";

const fr: CalculatorTranslation<IdealGasLawText> = {
  content: {
    title: "Calculateur de loi des gaz parfaits",
    shortTitle: "Loi des gaz parfaits",
    summary: "Résolvez PV = nRT pour la pression, le volume, la quantité de matière ou la température, avec conversion d’unités intégrée.",
    metaTitle: "Calculateur de loi des gaz parfaits – Résoudre PV = nRT",
    metaDescription: "Résolvez PV = nRT pour la pression, le volume, la quantité de gaz ou la température. Combinez Pa, kPa, bar, atm, mmHg, litres, m³, kelvins, °C et °F.",
    keywords: ["loi des gaz parfaits", "pv=nrt", "constante des gaz parfaits", "pression", "moles", "kelvin", "lois des gaz", "chimie"],
    intro: [
      "La loi des gaz parfaits relie quatre grandeurs d’un gaz : la pression, le volume, la quantité de matière en moles et la température absolue. En connaissant trois d’entre elles, on trouve la quatrième.",
      "Choisissez la valeur à calculer et saisissez les trois autres dans les unités dont vous disposez : le calculateur convertit tout en unités SI, résout PV = nRT et reconvertit la réponse.",
    ],
    howToUse: [
      "Choisissez la valeur à trouver : pression, volume, quantité de matière ou température.",
      "Saisissez les trois valeurs connues et choisissez une unité pour chacune.",
      "Choisissez l’unité de la réponse dans la liste d’unités correspondante.",
      "Lisez le résultat, la même valeur dans d’autres unités et le volume molaire.",
    ],
    formulas: [
      { title: "Loi des gaz parfaits", expression: "P × V = n × R × T", explanation: "P en pascals, V en mètres cubes, n en moles et T en kelvins." },
      { title: "Constante des gaz parfaits", expression: "R = Nₐ × k = 8,31446261815324 J/(mol·K)", explanation: "Valeur exacte depuis la redéfinition du SI de 2019, car Nₐ et k sont fixés." },
      { title: "Kelvin", expression: "T(K) = T(°C) + 273,15 = (T(°F) − 32) × 5/9 + 273,15", explanation: "La loi exige une température absolue : les degrés Celsius et Fahrenheit sont donc convertis d’abord." },
    ],
    examples: [
      { title: "Pression de 2 mol dans un réservoir de 50 L à 25 °C", steps: ["T = 25 + 273,15 = 298,15 K et V = 0,05 m³", "P = 2 × 8,314463 × 298,15 ÷ 0,05 ≈ 99 158 Pa", "≈ 99,158 kPa"] },
      { title: "Volume de 1 mol à 0 °C et 1 atm", steps: ["T = 273,15 K et P = 101 325 Pa", "V = 1 × 8,314463 × 273,15 ÷ 101 325 ≈ 0,022414 m³", "≈ 22,414 L"] },
      { title: "Température de 0,5 mol dans 10 L à 200 kPa", steps: ["T = 200 000 × 0,01 ÷ (0,5 × 8,314463) ≈ 481,09 K", "481,09 − 273,15 ≈ 207,94 °C"] },
    ],
    assumptions: [
      "Le gaz est considéré comme parfait : ses molécules n’occupent aucun volume et ne s’attirent pas.",
      "Les gaz réels s’en écartent nettement à haute pression, à basse température et près de leur point de condensation. Utilisez alors une équation d’état comme celle de van der Waals.",
      "La pression est une pression absolue, pas une pression relative. Ajoutez d’abord la pression atmosphérique à la lecture d’un manomètre.",
    ],
    faqs: [
      { question: "Pourquoi la température doit-elle être en kelvins ?", answer: "La loi est proportionnelle à la température absolue. À 0 °C, un gaz possède encore beaucoup d’énergie thermique : des valeurs en Celsius ou en Fahrenheit donneraient des résultats faux. Le calculateur les convertit pour vous." },
      { question: "Quelle valeur de R faut-il utiliser ?", answer: "En unités SI, R = 8,314462618 J/(mol·K). Avec des litres et des atmosphères, elle vaut environ 0,082057 L·atm/(mol·K). Cet outil travaille toujours en SI en interne, vous n’avez donc pas à choisir." },
      { question: "Qu’est-ce que le volume molaire d’un gaz ?", answer: "C’est le volume occupé par une mole. Pour un gaz parfait à 0 °C et 1 atm, il vaut environ 22,414 L ; à 25 °C et 1 bar, environ 24,79 L." },
    ],
    sourcesUsedFor: [
      "Valeur exacte de la constante molaire des gaz R = Nₐk = 8,314462618… J/(mol·K) et de la constante d’Avogadro.",
      "La loi des gaz parfaits et ses limites à basse température et à haute pression.",
    ],
  },
  text: {
    solve: "Trouver",
    solveOptions: { P: "Pression (P)", V: "Volume (V)", n: "Quantité de matière (n)", T: "Température (T)" },
    pressure: "Pression (P)",
    pressureUnit: "Unité de pression",
    pressureUnits: { Pa: "Pascals (Pa)", kPa: "Kilopascals (kPa)", bar: "Bar (bar)", atm: "Atmosphères normales (atm)", mmHg: "Millimètres de mercure (mmHg)" },
    volume: "Volume (V)",
    volumeUnit: "Unité de volume",
    volumeUnits: { L: "Litres (L)", mL: "Millilitres (mL)", m3: "Mètres cubes (m³)" },
    moles: "Quantité de gaz (n)",
    temperature: "Température (T)",
    temperatureUnit: "Unité de température",
    temperatureUnits: { K: "Kelvins (K)", C: "Degrés Celsius (°C)", F: "Degrés Fahrenheit (°F)" },
    unitHelp: "Pour la valeur recherchée, c’est l’unité de la réponse.",
    belowAbsoluteZero: "La température doit être supérieure au zéro absolu (0 K = −273,15 °C = −459,67 °F).",
    results: { P: "Pression", V: "Volume", n: "Quantité de gaz", T: "Température" },
    inUnit: "En {unit}",
    molecules: "Nombre de molécules (n × Nₐ)",
    molarVolume: "Volume molaire (V ÷ n)",
    note: "Utilise R = 8,31446261815324 J/(mol·K). Les gaz réels s’écartent de ce modèle idéal à haute pression et à basse température, surtout près de la condensation.",
  },
};

export default fr;
