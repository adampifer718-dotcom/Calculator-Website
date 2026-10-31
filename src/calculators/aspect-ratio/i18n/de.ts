import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AspectRatioText } from "../text/en";

const de: CalculatorTranslation<AspectRatioText> = {
  content: {
    title: "Seitenverhältnisrechner",
    shortTitle: "Seitenverhältnis",
    summary: "Ermitteln Sie das Seitenverhältnis eines Bildes oder Bildschirms, skalieren Sie ohne Verzerrung auf ein Verhältnis oder berechnen Sie Breite und Höhe aus der Diagonale.",
    metaTitle: "Seitenverhältnisrechner – Kürzen, Skalieren, Bildschirm",
    metaDescription: "Kürzen Sie Breite × Höhe auf das Seitenverhältnis, finden Sie das nächste gängige Format, skalieren Sie auf ganze Pixel oder nutzen Sie die Bildschirmdiagonale.",
    keywords: ["Seitenverhältnis berechnen", "16:9 Rechner", "Bild skalieren Seitenverhältnis", "Bildschirmgröße berechnen", "21:9 Verhältnis", "Breite Höhe Verhältnis", "Fernseher Maße aus Diagonale", "Auflösung Seitenverhältnis"],
    intro: [
      "Ein Seitenverhältnis beschreibt die Form eines Bildes oder Bildschirms: seine Breite im Vergleich zur Höhe, geschrieben B:H. Ein Video mit 1920 × 1080 und eines mit 3840 × 2160 sind unterschiedlich groß, haben aber dieselbe 16:9-Form, sodass sich das eine ohne Verzerrung auf das andere skalieren lässt.",
      "Dieser Rechner erledigt drei Aufgaben. Er kürzt Breite und Höhe auf das kleinste ganzzahlige Verhältnis und vergleicht es mit gängigen Formaten; er berechnet die fehlende Seite, wenn Sie auf ein Verhältnis skalieren; und er wandelt die Diagonale eines Bildschirms in Breite, Höhe und Fläche um. Für allgemeine Verhältnisse beliebiger Größen nutzen Sie den Verhältnisrechner.",
    ],
    howToUse: [
      "Wählen Sie, was Sie tun möchten.",
      "Um ein Verhältnis zu ermitteln, geben Sie Breite und Höhe in derselben Einheit ein, meist in Pixeln. Dezimalzahlen werden vor dem Kürzen auf ganze Zahlen hochskaliert.",
      "Zum Skalieren geben Sie das Verhältnis ein (zum Beispiel 16 und 9), wählen, ob Sie die neue Breite oder die neue Höhe kennen, und geben sie ein. Die andere Seite wird exakt und auf ganze Pixel gerundet angezeigt.",
      "Für einen Bildschirm geben Sie die Diagonale in Zoll oder Zentimetern und das Verhältnis ein. Breite, Höhe und Fläche werden in beiden Einheiten angezeigt.",
    ],
    formulas: [
      {
        title: "Gekürztes Verhältnis",
        expression: "B:H = (Breite ÷ g) : (Höhe ÷ g), g = ggT(Breite, Höhe)",
        explanation: "g ist der größte gemeinsame Teiler, ermittelt mit dem euklidischen Algorithmus. Dezimale Maße werden zuerst mit einer Zehnerpotenz zu ganzen Zahlen multipliziert.",
      },
      {
        title: "Skalieren",
        expression: "neue Höhe = neue Breite × H ÷ B;  neue Breite = neue Höhe × B ÷ H",
        explanation: "Dasselbe Verhältnis beizubehalten bedeutet, beide Seiten mit demselben Faktor zu skalieren.",
      },
      {
        title: "Bildschirmgröße",
        expression: "Breite = d × B ÷ √(B² + H²);  Höhe = d × H ÷ √(B² + H²)",
        explanation: "Die Diagonale d ist die Hypotenuse eines rechtwinkligen Dreiecks, dessen Seiten im Verhältnis B:H stehen. Die Fläche ist Breite × Höhe.",
      },
      {
        title: "Abweichung von einem gängigen Verhältnis",
        expression: "Abweichung = (Breite ÷ Höhe) ÷ (Bg ÷ Hg) − 1",
        explanation: "Als Prozentsatz angezeigt. Das nächste gängige Verhältnis ist das mit der kleinsten Abweichung.",
      },
    ],
    examples: [
      {
        title: "Ein Ultrawide-Monitor mit 2560 × 1080 Pixeln",
        steps: ["ggT(2560, 1080) = 40", "2560 ÷ 40 = 64 und 1080 ÷ 40 = 27, das Verhältnis ist also 64:27", "64 ÷ 27 ≈ 2,3704: 1,59 % breiter als „21:9“ (2,3333) und 0,82 % schmaler als 2,39:1, das nächste gängige Verhältnis"],
      },
      {
        title: "Eine 4:3-Folie auf eine Höhe von 900 Pixeln skalieren",
        steps: ["Neue Breite = 900 × 4 ÷ 3 = 1.200", "Beide Seiten sind bereits ganze Zahlen, daher ist kein Runden nötig"],
      },
      {
        title: "Ein 81-cm-Bildschirm mit 4:3",
        steps: ["√(4² + 3²) = 5", "Breite = 81 × 4 ÷ 5 = 64,8 cm; Höhe = 81 × 3 ÷ 5 = 48,6 cm", "Fläche = 64,8 × 48,6 = 3.149,28 cm²"],
      },
    ],
    assumptions: [
      "Breite und Höhe haben dieselbe Einheit und beschreiben quadratische Pixel. Manche älteren Videoformate verwenden nicht quadratische Pixel, sodass gespeicherte Größe und angezeigte Form voneinander abweichen.",
      "Die Liste gängiger Verhältnisse dient nur dem Vergleich. Insbesondere „21:9“ ist eine Marketingbezeichnung: Bildschirme mit 2560 × 1080 haben 64:27, und Kino-Breitbild wird oft mit 2,39:1 angegeben.",
      "Die Diagonale eines Bildschirms wird über das sichtbare Bild gemessen. Rahmen, Einfassungen und die Krümmung gebogener Bildschirme sind nicht enthalten.",
    ],
    faqs: [
      {
        question: "Warum ist 1366 × 768 nicht genau 16:9?",
        answer: "1366 × 768 lässt sich auf 683:384 kürzen, etwa 1,7786:1, was weniger als 0,05 % von 16:9 (1,7778:1) abweicht. Die Hersteller haben die Breite auf eine handliche Zahl gerundet, daher wird das Format als 16:9 verkauft, obwohl das gekürzte Verhältnis es nicht ist.",
      },
      {
        question: "Wie bleibt das Verhältnis beim Skalieren exakt?",
        answer: "Wählen Sie eine Breite, die ein Vielfaches des Breitenanteils des Verhältnisses ist. Bei 16:9 ergibt jede Breite, die ein Vielfaches von 16 ist, etwa 1280 oder 1920, eine ganzzahlige Höhe. Andere Breiten müssen gerundet werden, was die Form minimal verändert.",
      },
      {
        question: "Zeigt ein größerer 21:9-Bildschirm mehr als ein 16:9-Bildschirm mit derselben Diagonale?",
        answer: "Nicht unbedingt. Bei gleicher Diagonale ist ein breiterer Bildschirm niedriger, und seine Fläche ist kleiner. Nutzen Sie den Modus Bildschirmgröße für beide Formate und vergleichen Sie Höhe und Fläche.",
      },
    ],
    sourcesUsedFor: [
      "Dass „21:9“ eine Marketingbezeichnung für Ultrawide-Bildschirme ist, deren tatsächliches Verhältnis 64:27 (etwa 2,37:1) beträgt, zum Beispiel 2560 × 1080.",
      "Auflösungen von Ultrawide-Bildschirmen und ihre exakten Verhältnisse, etwa 2560 × 1080 (64:27).",
      "Breite und Höhe eines Bildschirms aus Diagonale und Seitenverhältnis mit dem Satz des Pythagoras.",
    ],
  },
  text: {
    mode: "Was möchten Sie tun?",
    modes: {
      simplify: "Verhältnis eines Formats ermitteln",
      resize: "Auf ein Verhältnis skalieren",
      screen: "Bildschirmgröße aus der Diagonale",
    },
    width: "Breite",
    height: "Höhe",
    sizeHelp: "In Pixeln oder einer anderen Einheit, solange beide dieselbe verwenden. Dezimalzahlen sind erlaubt.",
    ratioWidth: "Verhältnis Breite (B)",
    ratioHeight: "Verhältnis Höhe (H)",
    ratioHelp: "Für 16:9 geben Sie 16 und 9 ein. Dezimale Verhältnisse wie 2,39:1 funktionieren ebenfalls.",
    knownSide: "Welche neue Seite kennen Sie?",
    knownSides: { width: "Die neue Breite", height: "Die neue Höhe" },
    newSize: "Neues Maß",
    newSizeHelp: "Die gewünschte Breite oder Höhe, meist in Pixeln.",
    diagonal: "Bildschirmdiagonale",
    lengthUnit: "Längeneinheit",
    lengthUnits: { in: "Zoll (in)", cm: "Zentimeter (cm)" },
    errors: {
      tooPrecise: "Verwenden Sie höchstens 6 Nachkommastellen, damit sich das Verhältnis exakt kürzen lässt.",
      tooLarge: "Diese Werte sind zu groß, um sie exakt zu kürzen. Verwenden Sie kleinere Zahlen.",
    },
    ratioText: "{w}:{h}",
    sizeText: "{w} × {h}",
    sizeUnitText: "{w} × {h} {unit}",
    primaryRatio: "Gekürztes Seitenverhältnis",
    primaryResize: "Neues Format (ganze Pixel)",
    primaryScreen: "Bildschirmbreite × -höhe",
    captionSimplify: "{w} × {h} lässt sich durch Teilen beider Seiten durch {gcd} auf {ratio} kürzen.",
    captionResize: "Bei gleicher Form {ratio}: {side} von {size}.",
    captionScreen: "Eine Diagonale von {diagonal} {unit} bei {ratio}.",
    sides: { width: "eine Breite", height: "eine Höhe" },
    decimalRatio: "Dezimales Verhältnis (Breite ÷ Höhe)",
    decimalSuffix: ":1",
    nearest: "Nächstes gängiges Verhältnis",
    difference: "Abweichung vom nächsten gängigen Verhältnis",
    orientation: "Ausrichtung",
    orientations: { landscape: "Querformat (breiter als hoch)", portrait: "Hochformat (höher als breit)", square: "Quadratisch" },
    pixels: "Pixel insgesamt (falls das Maß in Pixeln angegeben ist)",
    inputRatio: "Verhältnis vollständig gekürzt",
    exactWidth: "Exakte Breite",
    exactHeight: "Exakte Höhe",
    roundedWidth: "Breite auf ganze Pixel gerundet",
    roundedHeight: "Höhe auf ganze Pixel gerundet",
    roundedRatio: "Dezimales Verhältnis nach dem Runden",
    screenWidth: "Breite",
    screenHeight: "Höhe",
    screenArea: "Bildschirmfläche",
    otherWidth: "Breite in {unit}",
    otherHeight: "Höhe in {unit}",
    otherArea: "Fläche in {unit}",
    table: {
      caption: "Gängige Seitenverhältnisse im Vergleich mit Ihrem",
      ratio: "Verhältnis",
      decimal: "Dezimal (B ÷ H)",
      difference: "Ihr Verhältnis im Vergleich",
    },
    notes: {
      marketing: "„21:9“ ist eine Marketingbezeichnung. Ultrawide-Monitore wie 2560 × 1080 haben tatsächlich 64:27 (etwa 2,37:1), und 3440 × 1440 hat 43:18 (etwa 2,39:1).",
      rounding: "Das Runden auf ganze Pixel verändert die Form minimal. Breiten, die Vielfache von {w} sind, oder Höhen, die Vielfache von {h} sind, halten das Verhältnis exakt.",
      roundingSimple: "Das Runden auf ganze Pixel verändert die Form minimal.",
      diagonal: "Bildschirmgrößen werden diagonal über das sichtbare Bild gemessen. Der Rahmen ist nicht enthalten, und gebogene Bildschirme werden entlang der Krümmung gemessen.",
      difference: "Die Abweichung vergleicht Ihr dezimales Verhältnis mit jedem gängigen Verhältnis: Ein positiver Wert bedeutet, dass Ihr Format breiter ist.",
    },
  },
};

export default de;
