import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RaceTimePredictorText } from "../text/en";

const de: CalculatorTranslation<RaceTimePredictorText> = {
  content: {
    title: "Laufzeitrechner",
    shortTitle: "Laufzeit",
    summary: "Sagen Sie Ihre Endzeit für eine Meile, 5 km, 10 km, Halbmarathon, Marathon oder jede andere Strecke aus einem aktuellen Wettkampf voraus – mit der Ausdauerformel von Riegel.",
    metaTitle: "Laufzeitrechner – 5 km bis Marathon (Riegel-Formel)",
    metaDescription: "Sagen Sie Endzeit und Pace aus einem aktuellen Ergebnis mit der Riegel-Formel T₂ = T₁ × (D₂/D₁)^1,06 voraus – für 5 km, 10 km, Halbmarathon und Marathon.",
    keywords: ["Laufzeit berechnen", "Marathonzeit berechnen", "Riegel-Formel", "Halbmarathon Zeit vorhersagen", "5 km bis Marathon", "Wettkampfzeit Prognose", "Zielzeit Laufen"],
    intro: [
      "Wenn Sie wissen, wie schnell Sie einen Wettkampf gelaufen sind, können Sie abschätzen, wie schnell Sie einen anderen laufen könnten. Läufer werden mit zunehmender Strecke etwas langsamer, und 1981 zeigte der Ingenieur Peter Riegel, dass Weltrekordzeiten über viele Distanzen einem einfachen Potenzgesetz folgen.",
      "Geben Sie einen aktuellen Wettkampf und Ihre Endzeit ein, wählen Sie die Strecke, die Sie laufen möchten, und dieses Werkzeug sagt Ihre Zeit und Pace mit der Riegel-Formel voraus. Es listet außerdem Prognosen für alle Standardstrecken von der Meile bis zum Marathon.",
    ],
    howToUse: [
      "Wählen Sie die Strecke eines aktuellen Wettkampfs, den Sie mit voller Anstrengung gelaufen sind, oder geben Sie eine eigene Strecke in km oder Meilen ein.",
      "Geben Sie Ihre Endzeit in Stunden, Minuten und Sekunden ein.",
      "Wählen Sie die Strecke, für die Sie eine Prognose möchten.",
      "Lassen Sie den Ermüdungsexponenten bei 1,06, es sei denn, Sie wissen, dass Sie auf langen Strecken stärker (versuchen Sie 1,08) oder weniger stark nachlassen.",
      "Lesen Sie die prognostizierte Zeit, die dafür nötige Pace und die Tabelle mit Prognosen für andere Strecken ab.",
    ],
    formulas: [
      { title: "Riegel-Formel", expression: "T₂ = T₁ × (D₂ ÷ D₁)^k", explanation: "T₁ ist Ihre Zeit über die Strecke D₁, T₂ die prognostizierte Zeit über D₂. Mit k = 1,06 vervielfacht eine Verdopplung der Strecke die Zeit um 2^1,06 ≈ 2,085." },
      { title: "Pace", expression: "Pace pro km = T₂ ÷ D₂ (km)\nPace pro Meile = Pace pro km × 1,609344", explanation: "Die durchschnittliche Pace, die für die prognostizierte Zeit nötig ist." },
    ],
    examples: [
      { title: "Von 50:00 über 10 km auf einen Halbmarathon", steps: ["T₁ = 3.000 s, D₂ ÷ D₁ = 21,0975 ÷ 10 = 2,10975", "T₂ = 3.000 × 2,10975^1,06 ≈ 6.619 s", "6.619 s = 1:50:19, eine Pace von etwa 5:14 pro km"] },
      { title: "Von 22:30 über 5 km auf einen Marathon", steps: ["T₁ = 1.350 s, D₂ ÷ D₁ = 42,195 ÷ 5 = 8,439", "T₂ = 1.350 × 8,439^1,06 ≈ 12.948 s = 3:35:48", "Der Marathon ist mehr als viermal so lang wie 5 km, betrachten Sie das Ergebnis daher als optimistisch"] },
      { title: "Von 1:45:00 im Halbmarathon auf 10 km, mit k = 1,08", steps: ["T₁ = 6.300 s, D₂ ÷ D₁ = 10 ÷ 21,0975 ≈ 0,474", "T₂ = 6.300 × 0,474^1,08 ≈ 2.813 s", "2.813 s = 0:46:53"] },
    ],
    assumptions: [
      "Sie sind für die Zielstrecke gleich gut trainiert. Eine schnelle 5-km-Zeit bedeutet nicht, dass Sie ohne genügend lange Läufe die Ausdauer für einen Marathon haben.",
      "Prognosen sind weniger genau für Strecken, die mehr als etwa viermal länger oder kürzer sind als Ihr Wettkampf, sowie für Läufe von mehr als etwa 4 Stunden, wo sie meist zu schnell ausfallen.",
      "Beide Wettkämpfe finden auf ähnlichen, flachen Strecken bei ähnlichem Wetter statt. Steigungen, Hitze, Wind und Höhenlage werden nicht berücksichtigt.",
    ],
    faqs: [
      { question: "Warum ist der Exponent 1,06?", answer: "Riegel hat den Exponenten an Weltrekordzeiten angepasst und für das Laufen etwa 1,06 gefunden. Ein Wert von 1 würde bedeuten, dass Sie auf jeder Strecke dieselbe Pace halten könnten; jeder Wert über 1 bedeutet, dass Sie mit längerer Strecke langsamer werden." },
      { question: "Welchen Wettkampf sollte ich als Eingabe verwenden?", answer: "Verwenden Sie einen aktuellen Wettkampf, den Sie mit voller Anstrengung gelaufen sind, idealerweise einen, dessen Strecke näher an der Zielstrecke liegt. Ein Halbmarathon sagt einen Marathon besser voraus als eine Meile." },
      { question: "Warum ist mein tatsächlicher Marathon langsamer als prognostiziert?", answer: "Der Marathon hängt stark von Ausdauertraining, Verpflegung und Renneinteilung ab, die ein kurzer Wettkampf nicht prüft. Viele Läufer sind langsamer, als die Formel vorhersagt, daher verwenden manche Trainer für den Marathon einen höheren Exponenten wie 1,07 bis 1,08." },
    ],
    sourcesUsedFor: ["Die Ausdauergleichung T = a·D^b für den Zusammenhang von Zeit und Strecke, mit einem Exponenten von etwa 1,06 für das Laufen."],
  },
  text: {
    knownRace: "Strecke des aktuellen Wettkampfs",
    targetRace: "Strecke für die Prognose",
    races: { mile: "1 Meile", "5k": "5 km", "10k": "10 km", half: "Halbmarathon (21,0975 km)", marathon: "Marathon (42,195 km)", custom: "Eigene Strecke" },
    knownDistance: "Strecke des aktuellen Wettkampfs",
    targetDistance: "Strecke für die Prognose",
    unit: "Längeneinheit",
    units: { km: "Kilometer (km)", mi: "Meilen (mi)" },
    hours: "Endzeit: Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    exponent: "Ermüdungsexponent (k)",
    exponentHelp: "Riegels Wert für das Laufen ist 1,06. Ein höherer Wert geht davon aus, dass Sie mit wachsender Strecke stärker langsamer werden.",
    timeZero: "Geben Sie eine Endzeit größer als null ein.",
    predicted: "Prognostizierte Endzeit",
    caption: "{time} über {known} → {target}, k = {k}",
    perKm: "Prognostizierte Pace pro Kilometer",
    perMile: "Prognostizierte Pace pro Meile",
    speed: "Durchschnittsgeschwindigkeit",
    tableCaption: "Prognosen für Standardstrecken",
    columns: { distance: "Strecke", time: "Prognostizierte Zeit", perKm: "Pace /km", perMile: "Pace /mi" },
    tableRaces: { mile: "1 Meile", "5k": "5 km", "10k": "10 km", half: "Halbmarathon", marathon: "Marathon" },
    notes: {
      far: "Die Zielstrecke ist mehr als viermal länger oder kürzer als Ihr Wettkampf, daher ist die Prognose weniger zuverlässig.",
      long: "Die prognostizierte Zeit liegt über etwa 4 Stunden, wo die Formel meist zu optimistisch ist.",
      same: "Beide Strecken sind gleich, daher entspricht die Prognose Ihrer Endzeit.",
      training: "Setzt voraus, dass Sie für die Zielstrecke gleich gut trainiert sind, zum Beispiel mit genügend langen Läufen für einen Marathon.",
    },
  },
};

export default de;
