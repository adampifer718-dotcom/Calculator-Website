import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FertilizerText } from "../text/en";

const de: CalculatorTranslation<FertilizerText> = {
  content: {
    title: "Düngerrechner (N-P-K)",
    shortTitle: "Dünger (N-P-K)",
    summary: "Berechnen Sie, wie viel eines N-P-K-Düngers Sie ausbringen müssen, um eine gewünschte Menge Stickstoff, Phosphat oder Kali auf Rasen, Beet oder Feld zu geben.",
    metaTitle: "Düngerrechner (N-P-K) – Düngermenge für eine Gabe",
    metaDescription: "Ermitteln Sie die Düngermenge aus dem N-P-K-Gehalt, der Nährstoffgabe pro Fläche und der Fläche – mit dem gelieferten Stickstoff, Phosphat und Kali.",
    keywords: ["Düngerrechner", "NPK-Rechner", "Düngermenge berechnen", "kg N pro Hektar", "Stickstoffdüngung", "P2O5 in P", "K2O in K", "wie viel Dünger"],
    intro: [
      "Auf Düngersäcken stehen drei Zahlen, etwa 10-10-10 oder 46-0-0. Sie geben die Gewichtsprozente an Stickstoff (N), Phosphat (P₂O₅) und Kali (K₂O) an. Bodenuntersuchungen und Anbauempfehlungen nennen meist eine Nährstoffmenge pro Fläche, nicht eine Produktmenge, daher müssen Sie das eine in das andere umrechnen.",
      "Geben Sie den Nährstoffgehalt des Produkts ein, wählen Sie den Nährstoff, auf den sich Ihre Empfehlung bezieht, und geben Sie die Gabe und die Fläche ein. Der Rechner liefert die auszubringende Produktmenge und die Mengen aller drei Nährstoffe, die sie enthält, einschließlich elementarem Phosphor und Kalium.",
    ],
    howToUse: [
      "Geben Sie die drei Zahlen des Nährstoffgehalts vom Sack ein, zum Beispiel 10, 20 und 10 für ein Produkt 10-20-10.",
      "Wählen Sie den Nährstoff, auf den sich die empfohlene Gabe bezieht: Stickstoff, Phosphat (P₂O₅) oder Kali (K₂O).",
      "Geben Sie die empfohlene Gabe und ihre Einheit ein, zum Beispiel 1 lb pro 1.000 ft² oder 120 kg pro Hektar.",
      "Geben Sie die Fläche und ihre Einheit ein. Die Produktmenge wird bei Gaben in Pfund in Pfund und bei metrischen Gaben in Kilogramm angezeigt.",
    ],
    formulas: [
      {
        title: "Benötigte Produktmenge",
        expression: "Produkt = Gabe × Fläche ÷ (Gehalt % ÷ 100)",
        explanation: "Der Gehalt in % ist die Zahl auf dem Sack für den gewählten Nährstoff. Gabe und Fläche werden zuerst in eine gemeinsame Einheit umgerechnet.",
      },
      {
        title: "Gelieferte Nährstoffe",
        expression: "N = Produkt × N%;  P₂O₅ = Produkt × P₂O₅%;  K₂O = Produkt × K₂O%",
        explanation: "Jeder Prozentsatz ist die entsprechende Zahl des Nährstoffgehalts ÷ 100.",
      },
      {
        title: "Elementarer Phosphor und elementares Kalium",
        expression: "P = P₂O₅ × 0,4364;  K = K₂O × 0,8302",
        explanation: "Die Faktoren sind die Massenanteile 2P ÷ P₂O₅ und 2K ÷ K₂O, berechnet aus den Standardatomgewichten (P 30,973762, K 39,0983, O 15,999).",
      },
    ],
    examples: [
      {
        title: "10-10-10 auf 5.000 ft² Rasen mit 1 lb N pro 1.000 ft²",
        steps: ["Benötigter Stickstoff = 1 × 5.000 ÷ 1.000 = 5 lb", "Produkt = 5 ÷ 0,10 = 50 lb 10-10-10", "Es liefert außerdem 5 lb P₂O₅ (≈ 2,18 lb P) und 5 lb K₂O (≈ 4,15 lb K)"],
      },
      {
        title: "Harnstoff (46-0-0) mit 120 kg N pro Hektar auf 2,5 ha",
        steps: ["Benötigter Stickstoff = 120 × 2,5 = 300 kg", "Produkt = 300 ÷ 0,46 ≈ 652,17 kg Harnstoff"],
      },
      {
        title: "15-30-15 mit 6 g Phosphat pro m² auf einem Beet von 25 m²",
        steps: ["Benötigtes Phosphat = 6 × 25 = 150 g", "Produkt = 150 ÷ 0,30 = 500 g = 0,5 kg", "Es liefert außerdem 75 g N und 75 g K₂O"],
      },
    ],
    assumptions: [
      "Dies ist nur eine Rechnung. Richten Sie die Gabe nach einer Bodenuntersuchung und örtlichen Empfehlungen und beachten Sie das Produktetikett sowie örtliche Vorschriften zu Düngereinsatz, Zeitpunkt und Abschwemmung.",
      "Der Nährstoffgehalt gilt als garantierter Gewichtsanteil von N, P₂O₅ und K₂O, wie auf dem Etikett angegeben. Bei Flüssigprodukten, deren Gehalt nach Gewicht angegeben ist, zählt ihr Gewicht, nicht ihr Volumen.",
      "Die Mengen setzen eine gleichmäßige Verteilung über die gesamte Fläche voraus. Streuereinstellung und Überlappung beeinflussen, was tatsächlich ausgebracht wird.",
    ],
    faqs: [
      {
        question: "Warum werden Phosphor und Kalium als P₂O₅ und K₂O angegeben?",
        answer: "Das ist eine alte Kennzeichnungskonvention. Der Nährstoffgehalt gibt Phosphor als Oxid P₂O₅ und Kalium als K₂O an, auch wenn das Produkt diese Oxide als solche nicht enthält. Multiplizieren Sie mit etwa 0,436 bzw. 0,830, um die elementaren Mengen zu erhalten.",
      },
      {
        question: "Was, wenn sich meine Empfehlung auf mehrere Nährstoffe bezieht?",
        answer: "Berechnen Sie die Produktmenge für den Nährstoff, den Sie am dringendsten brauchen, und prüfen Sie dann die übrigen Nährstoffe, die sie liefert. Sind diese zu hoch oder zu niedrig, passt ein Produkt mit anderem Verhältnis oder je ein eigenes Produkt pro Nährstoff möglicherweise besser.",
      },
      {
        question: "Wie rechne ich lb pro Acre in kg pro Hektar um?",
        answer: "1 lb pro Acre sind etwa 1,121 kg pro Hektar, denn ein Pfund sind 0,45359237 kg und ein Acre etwa 0,4047 ha. Sie können die Gabe in beiden Einheiten eingeben; der Rechner rechnet sie für Sie um.",
      },
    ],
    sourcesUsedFor: [
      "Das Lesen des Nährstoffgehalts als Gewichtsprozent N, P₂O₅ und K₂O und das Teilen der Nährstoffgabe durch den Anteil.",
      "Der Nährstoffgehalt als garantiertes N-P₂O₅-K₂O und die Umrechnungsfaktoren von P₂O₅ in P und von K₂O in K.",
      "Die Atomgewichte von Phosphor, Kalium und Sauerstoff zur Berechnung der Faktoren von Oxid zu Element.",
    ],
  },
  text: {
    gradeN: "Gehalt: Stickstoff (N)",
    gradeNHelp: "Die erste Zahl auf dem Sack, in Gewichtsprozent. Bei 10-20-10 ist es 10.",
    gradeP: "Gehalt: Phosphat (P₂O₅)",
    gradePHelp: "Die zweite Zahl auf dem Sack. Etiketten geben Phosphor als Phosphat (P₂O₅) an, nicht als elementares P.",
    gradeK: "Gehalt: Kali (K₂O)",
    gradeKHelp: "Die dritte Zahl auf dem Sack. Etiketten geben Kalium als Kali (K₂O) an, nicht als elementares K.",
    nutrient: "Nährstoff, auf den sich die Gabe bezieht",
    nutrients: { N: "Stickstoff (N)", P2O5: "Phosphat (P₂O₅)", K2O: "Kali (K₂O)" },
    rate: "Gewünschte Nährstoffgabe",
    rateHelp: "Die Menge des gewählten Nährstoffs pro Flächeneinheit, meist aus einer Bodenuntersuchung oder einer örtlichen Empfehlung.",
    rateUnit: "Einheit der Gabe",
    rateUnits: { lb1000ft2: "lb pro 1.000 ft²", lbAcre: "lb pro Acre", kgHa: "kg pro Hektar", gM2: "g pro m²" },
    area: "Zu düngende Fläche",
    areaUnit: "Flächeneinheit",
    areaUnits: { ft2: "Quadratfuß (ft²)", m2: "Quadratmeter (m²)", acre: "Acres", ha: "Hektar (ha)" },
    areaSymbols: { ft2: "ft²", m2: "m²", acre: "Acres", ha: "ha" },
    errors: {
      zeroGrade: "Dieses Produkt enthält nichts vom gewählten Nährstoff. Wählen Sie einen anderen Nährstoff oder ein Produkt mit einer Zahl über null dafür.",
      gradeSum: "Die drei Zahlen des Nährstoffgehalts ergeben zusammen mehr als 100 %. Prüfen Sie das Etikett.",
    },
    product: "Benötigte Düngermenge",
    caption: "{rate} {nutrient} ÷ {grade} im Produkt {label}, auf {area}.",
    productOther: "Benötigte Produktmenge in anderen Einheiten",
    productRate: "Produktmenge pro Fläche",
    applied: {
      N: "Ausgebrachter Stickstoff (N)",
      P2O5: "Ausgebrachtes Phosphat (P₂O₅)",
      K2O: "Ausgebrachtes Kali (K₂O)",
      P: "Ausgebrachter elementarer Phosphor (P)",
      K: "Ausgebrachtes elementares Kalium (K)",
    },
    notes: {
      others: "Dieselbe Produktmenge liefert auch die anderen Nährstoffe ihres Gehalts, siehe unten. Entsprechen die erreichten Gaben nicht Ihrem Bedarf, verwenden Sie je ein eigenes Produkt pro Nährstoff.",
      elemental: "Die elementaren Mengen verwenden P = P₂O₅ × {p} und K = K₂O × {k}, aus den Standardatomgewichten.",
    },
  },
};

export default de;
