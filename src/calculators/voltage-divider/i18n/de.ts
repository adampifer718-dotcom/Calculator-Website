import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VoltageDividerText } from "../text/en";

const de: CalculatorTranslation<VoltageDividerText> = {
  content: {
    title: "Spannungsteilerrechner",
    shortTitle: "Spannungsteiler",
    summary: "Ermitteln Sie die Ausgangsspannung eines Spannungsteilers aus zwei Widerständen oder den Widerstand für eine Zielspannung – mit Strom, Leistung, Lasteinfluss und nächstem E24-Wert.",
    metaTitle: "Spannungsteilerrechner – Vout, R1, R2 und Last",
    metaDescription: "Berechnen Sie die Ausgangsspannung eines Spannungsteilers oder lösen Sie nach R1 oder R2 auf – mit Strom, Verlustleistung, belasteter Spannung und nächstem E24-Wert.",
    keywords: ["Spannungsteiler berechnen", "Widerstandsteiler", "Vout Formel", "Spannungsteiler Formel", "R1 R2 Rechner", "Teilerverhältnis", "belasteter Spannungsteiler", "E24-Reihe"],
    intro: [
      "Ein Spannungsteiler besteht aus zwei in Reihe geschalteten Widerständen an einer Spannung. Der Punkt zwischen ihnen liegt auf einem festen Bruchteil der Eingangsspannung, der allein vom Verhältnis der Widerstände bestimmt wird. Spannungsteiler dienen dazu, ein Signal für den Eingang eines Mikrocontrollers herunterzuskalieren, einen Arbeitspunkt einzustellen oder eine Referenz zu erzeugen.",
      "Dieser Rechner ermittelt die Ausgangsspannung aus beiden Widerständen oder den Widerstand, den Sie für eine Zielspannung brauchen. Außerdem zeigt er den Strom durch den Teiler, die Verlustleistung jedes Widerstands, was beim Anschließen einer Last geschieht, und den nächstgelegenen Normwert der E24-Reihe.",
    ],
    howToUse: [
      "Wählen Sie, wonach aufgelöst werden soll: die Ausgangsspannung, den unteren Widerstand R2 oder den oberen Widerstand R1.",
      "Geben Sie die Eingangsspannung und die bekannten Werte ein und wählen Sie für jeden Widerstand Ω, kΩ oder MΩ.",
      "Geben Sie optional den am Ausgang angeschlossenen Lastwiderstand ein, um zu sehen, wie stark er die Spannung herunterzieht.",
      "Lesen Sie das Ergebnis, den Teilerstrom und die Leistung ab und, wenn nach einem Widerstand aufgelöst wird, den nächsten E24-Wert und die Ausgangsspannung, die er ergäbe.",
    ],
    formulas: [
      {
        title: "Unbelastete Ausgangsspannung",
        expression: "Vout = Vin × R2 ÷ (R1 + R2)",
        explanation: "R1 ist der obere Widerstand (Eingang zu Ausgang) und R2 der untere (Ausgang zu Masse).",
      },
      {
        title: "Auflösen nach einem Widerstand",
        expression: "R2 = R1 × Vout ÷ (Vin − Vout)\nR1 = R2 × (Vin − Vout) ÷ Vout",
        explanation: "Umgestellt aus der Teilergleichung. Vout muss zwischen 0 und Vin liegen.",
      },
      {
        title: "Strom und Leistung",
        expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2",
        explanation: "Durch beide Widerstände fließt derselbe Strom, solange am Ausgang nichts angeschlossen ist.",
      },
      {
        title: "Belastete Ausgangsspannung",
        expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,belastet = Vin × R2′ ÷ (R1 + R2′)",
        explanation: "Eine Last RL liegt parallel zu R2, was den wirksamen unteren Widerstand und damit die Ausgangsspannung senkt.",
      },
    ],
    examples: [
      {
        title: "12 V an 10 kΩ und 4,7 kΩ",
        steps: ["Vout = 12 × 4,7 ÷ (10 + 4,7) = 56,4 ÷ 14,7", "Vout ≈ 3,8367 V", "I = 12 V ÷ 14,7 kΩ ≈ 0,8163 mA"],
      },
      {
        title: "R2 für 3,3 V aus 5 V mit R1 = 10 kΩ",
        steps: ["R2 = 10 kΩ × 3,3 ÷ (5 − 3,3) = 33 ÷ 1,7 kΩ", "R2 ≈ 19,4118 kΩ", "Der nächste E24-Wert ist 20 kΩ und ergibt 5 × 20 ÷ 30 ≈ 3,3333 V (1,01 % zu hoch)"],
      },
      {
        title: "R1 für 2,5 V aus 9 V mit R2 = 1 kΩ und 10 kΩ Last",
        steps: ["R1 = 1 kΩ × (9 − 2,5) ÷ 2,5 = 2,6 kΩ", "Mit der Last: R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0,9091 kΩ", "Belastete Vout = 9 × 0,9091 ÷ (2,6 + 0,9091) ≈ 2,3316 V, etwa 6,74 % niedriger"],
      },
    ],
    assumptions: [
      "Die Widerstände sind ideal und exakt. Reale Widerstände haben eine Toleranz (5 % bei E24-Bauteilen), daher kann die tatsächliche Ausgangsspannung vom berechneten Wert abweichen.",
      "Ohne Lastwiderstand wird der Teiler als unbelastet behandelt. Alles, was am Ausgang angeschlossen ist, auch ein Voltmeter, zieht Strom und senkt die Spannung; ist die Last mindestens 10-mal so groß wie der Ausgangswiderstand des Teilers, bleibt der Fehler klein.",
      "Ein unbelasteter Spannungsteiler ist keine Stromversorgung. Seine Ausgangsspannung bricht unter Last ein, und er zieht ständig Strom; verwenden Sie zur Versorgung einer Schaltung einen Spannungsregler.",
      "Die Eingangsspannung ist eine konstante Gleichspannung. Frequenzeffekte wie Streukapazitäten werden nicht modelliert.",
    ],
    faqs: [
      {
        question: "Welcher Widerstand ist R1 und welcher R2?",
        answer: "R1 verbindet den Eingang mit dem Ausgangspunkt, R2 den Ausgangspunkt mit Masse. Die Ausgangsspannung wird über R2 abgegriffen, daher ergibt ein größerer R2 eine höhere Ausgangsspannung.",
      },
      {
        question: "Warum ist meine gemessene Spannung niedriger als berechnet?",
        answer: "Alles, was am Ausgang angeschlossen ist, wirkt wie ein Widerstand parallel zu R2 und senkt die Ausgangsspannung. Geben Sie seinen Widerstand als Last ein, um die Wirkung zu sehen, oder verwenden Sie kleinere Teilerwiderstände, damit die Last weniger ins Gewicht fällt.",
      },
      {
        question: "Wie wähle ich die Größe der Widerstände?",
        answer: "Das Verhältnis bestimmt die Spannung, die Größe den Strom. Kleine Widerstände verschwenden mehr Leistung, sind aber unempfindlicher gegen Belastung; große sparen Leistung, reagieren aber empfindlich auf die Last und auf Leckströme am Eingang. Vergleichen Sie die Leistungswerte mit der Belastbarkeit der Widerstände.",
      },
    ],
    sourcesUsedFor: [
      "Die Spannungsteilerregel Vout = Vin × R2 ÷ (R1 + R2) und wie ein Lastwiderstand die Ausgangsspannung senkt.",
      "Die E24-Reihe mit 24 Vorzugswerten für Widerstände pro Dekade, aus der der nächste Normwert gewählt wird.",
    ],
  },
  text: {
    solve: "Auflösen nach",
    solveOptions: { vout: "Ausgangsspannung (Vout)", r2: "Unterer Widerstand (R2)", r1: "Oberer Widerstand (R1)" },
    vin: "Eingangsspannung (Vin)",
    vout: "Gewünschte Ausgangsspannung (Vout)",
    r1: "Oberer Widerstand (R1)",
    r1Help: "Der Widerstand zwischen Eingang und Ausgangsknoten.",
    r2: "Unterer Widerstand (R2)",
    r2Help: "Der Widerstand zwischen Ausgangsknoten und Masse.",
    load: "Lastwiderstand (RL, optional)",
    loadHelp: "Der Widerstand dessen, was am Ausgang angeschlossen ist. Er liegt parallel zu R2 und zieht die Ausgangsspannung herunter. Für einen unbelasteten Teiler leer lassen.",
    unit: "Einheit",
    units: { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" },
    errors: {
      voutRange: "Die Ausgangsspannung muss größer als 0 und kleiner als die Eingangsspannung sein.",
    },
    voutResult: "Ausgangsspannung (unbelastet)",
    r2Result: "Unterer Widerstand R2",
    r1Result: "Oberer Widerstand R1",
    captionVout: "{vin} an R1 = {r1} und R2 = {r2}.",
    captionR: "Ergibt {vout} aus {vin} mit {known}.",
    knownR1: "R1 = {r}",
    knownR2: "R2 = {r}",
    ratio: "Teilerverhältnis (Vout ÷ Vin)",
    current: "Teilerstrom (unbelastet)",
    p1: "Leistung in R1",
    p2: "Leistung in R2",
    rTotal: "Gesamtwiderstand (R1 + R2)",
    rOut: "Ausgangswiderstand (R1 ∥ R2)",
    vLoaded: "Ausgangsspannung mit Last",
    drop: "Spannungsabfall durch die Last",
    loadCurrent: "Strom durch die Last",
    e24: "Nächster E24-Wert",
    e24Vout: "Ausgangsspannung mit dem E24-Wert",
    e24Error: "Änderung der Ausgangsspannung mit dem E24-Wert",
    notes: {
      unloaded: "Diese Werte gelten für einen unbelasteten Teiler. Alles, was am Ausgang angeschlossen ist, zieht Strom und senkt Vout; geben Sie einen Lastwiderstand ein, um zu sehen, wie stark.",
      loaded: "Mit der Last wirken R2 und RL parallel wie {r}, und die Ausgangsspannung sinkt um {drop}.",
      heavyLoad: "Die Last ist kleiner als das 10-Fache des Ausgangswiderstands des Teilers und verändert die Ausgangsspannung daher merklich. Verwenden Sie kleinere Teilerwiderstände oder einen Puffer, wenn die Spannung stabil bleiben muss.",
      supply: "Ein Spannungsteiler ist keine Stromversorgung: Seine Ausgangsspannung ändert sich mit der Last, und er verschwendet ständig Leistung. Verwenden Sie zur Versorgung einer Schaltung einen Regler.",
      e24: "E24 ist die Normreihe mit 24 Vorzugswerten pro Dekade bei 5 % Toleranz. Der nächste Wert wird nach der kleinsten absoluten Abweichung gewählt.",
    },
  },
};

export default de;
