import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasswordEntropyText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const de: CalculatorTranslation<PasswordEntropyText> = {
  content: {
    title: "Passwort-Entropie-Rechner",
    shortTitle: "Passwort-Entropie",
    summary: "Schätzen Sie die Entropie in Bit eines zufällig erzeugten Passworts oder einer Passphrase und wie lange ein Angreifer bräuchte, um es zu erraten.",
    metaTitle: "Passwort-Entropie-Rechner – Bits und Zeit zum Erraten",
    metaDescription: "Berechnen Sie die Entropie in Bit eines zufälligen Passworts oder einer Diceware-Passphrase aus Länge und Zeichenvorrat, dazu die mittlere Zeit zum Erraten.",
    keywords: ["Passwort-Entropie", "Passwortstärke berechnen", "Passphrase Entropie", "Diceware", "Entropie in Bit", "Brute-Force-Dauer", "Passwortlänge", "Zeichenvorrat"],
    intro: [
      "Die Entropie misst, wie unvorhersehbar ein Geheimnis ist. Ein Passwort, das zufällig aus einem Vorrat von N möglichen Zeichen gewählt wird, gewinnt pro Zeichen log₂(N) Bit, und jedes zusätzliche Bit verdoppelt die Zahl der Versuche, die ein Angreifer brauchen kann.",
      "Dieser Rechner arbeitet nur mit der Struktur eines Passworts: seiner Länge und den Zeichenarten oder der Anzahl der Wörter und der Größe der Wortliste. Er fragt nie nach einem echten Passwort, empfängt oder analysiert keines – bitte geben Sie Ihres nirgendwo auf dieser Seite ein.",
    ],
    howToUse: [
      "Wählen Sie ein Passwort aus zufälligen Zeichen oder eine Passphrase aus zufälligen Wörtern.",
      "Bei Zeichen geben Sie die Länge ein und wählen die Zeichensätze oder geben eine eigene Vorratsgröße ein.",
      "Bei einer Passphrase geben Sie die Anzahl der Wörter und die Größe der Wortliste ein (7.776 für eine Diceware-Liste).",
      "Passen Sie bei Bedarf die Versuche des Angreifers pro Sekunde an und lesen Sie dann Entropie, Anzahl der Kombinationen und Ratezeiten ab.",
    ],
    formulas: [
      { title: "Entropie eines zufälligen Passworts", expression: "H = L × log₂(N)", explanation: "L ist die Anzahl der Zeichen und N die Vorratsgröße, zum Beispiel 26 + 26 + 10 + 32 = 94 für alle vier Zeichensätze." },
      { title: "Entropie einer Passphrase", expression: "H = W × log₂(K)", explanation: "W ist die Anzahl der Wörter und K die Größe der Wortliste. Jedes Diceware-Wort fügt log₂(7.776) ≈ 12,92 Bit hinzu." },
      { title: "Mittlere Zeit zum Erraten", expression: "t = 2ᴴ ÷ 2 ÷ g", explanation: "2ᴴ ist die Anzahl der Kombinationen und g die Versuche pro Sekunde. Im Mittel muss die Hälfte davon ausprobiert werden." },
    ],
    examples: [
      {
        title: "16 zufällige Zeichen aus allen vier Zeichensätzen",
        steps: [
          "Vorrat = 26 + 26 + 10 + 32 = 94 Zeichen",
          "Entropie = 16 × log₂(94) ≈ 16 × 6,5546 ≈ 104,87 Bit",
          "Mittlere Zeit bei 10¹⁰ Versuchen pro Sekunde ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5,89 × 10¹³ Jahre",
        ],
      },
      {
        title: "Diceware-Passphrase aus sechs Wörtern",
        steps: ["Entropie = 6 × log₂(7.776) ≈ 6 × 12,925 ≈ 77,55 Bit", "Kombinationen = 7.776⁶ ≈ 2,21 × 10²³", "Mittlere Zeit ≈ 350.270 Jahre bei 10¹⁰ Versuchen pro Sekunde"],
      },
      {
        title: "8 zufällige Kleinbuchstaben",
        steps: ["Entropie = 8 × log₂(26) ≈ 37,60 Bit", "Kombinationen = 26⁸ = 208.827.064.576", "Mittlere Zeit ≈ 208.827.064.576 ÷ 2 ÷ 10¹⁰ ≈ 10 Sekunden"],
      },
    ],
    assumptions: [
      "Jedes Zeichen oder Wort wird unabhängig und gleichverteilt zufällig gewählt, wie es ein Passwortmanager oder Würfel tun. Von Menschen gewählte Passwörter sind weit vorhersehbarer, als diese Zahlen vermuten lassen.",
      "Die Rate der Versuche ist eine Annahme, die Sie ändern können. Reale Raten reichen von wenigen Versuchen pro Sekunde gegen eine Online-Anmeldung mit Begrenzung bis zu vielen Milliarden pro Sekunde gegen gestohlene, schwach gehashte Passwörter.",
      "Die Entropie deckt andere Risiken nicht ab, etwa Phishing, die Wiederverwendung desselben Passworts auf mehreren Websites oder ein bereits geleaktes Passwort.",
      "Dies ist eine Schätzung zum Vergleich, keine Sicherheitsberatung und keine Garantie, und sie wurde nicht fachlich geprüft.",
    ],
    faqs: [
      { question: "Wie viele Bit Entropie sind genug?", answer: "Eine einzige Schwelle gibt es nicht, denn es hängt davon ab, wie das Passwort gespeichert ist und wer es angreifen könnte. Als grobe Orientierung verdoppelt jedes Bit den Aufwand; ein zufälliges Passwort mit 16 oder mehr Zeichen oder eine Passphrase aus sechs oder mehr Diceware-Wörtern liegt bei der voreingestellten Rate weit jenseits praktikabler Brute-Force-Angriffe." },
      { question: "Warum kann ich auf dieser Seite nicht mein eigenes Passwort prüfen?", answer: "Die Entropie beschreibt, wie ein Passwort erzeugt wurde, nicht die Zeichen, die am Ende darin stehen. Ein Passwort wie Summer2025! wirkt abwechslungsreich, ist aber leicht zu erraten, weil Menschen so etwas wählen. Ein echtes Passwort in eine Website einzugeben ist zudem ein Risiko, daher fragt diese Seite nie danach." },
      { question: "Ist eine lange Passphrase besser als ein kurzes komplexes Passwort?", answer: "Oft ja. Sechs zufällige Wörter aus einer Liste mit 7.776 Wörtern ergeben etwa 77,5 Bit, mehr als 12 zufällige Zeichen aus Buchstaben und Ziffern (etwa 71,5 Bit), und sie sind leichter zu merken und zu tippen. Entscheidend ist, dass die Wörter zufällig gezogen und nicht als Satz ausgedacht werden." },
    ],
    sourcesUsedFor: [
      "Aktuelle US-Richtlinien zu Passwörtern, die Länge und den Abgleich mit bekannten geleakten Passwörtern gegenüber Zusammensetzungsregeln bevorzugen.",
      "Die Größe der Wortliste von 7.776 Wörtern (6⁵, fünf Würfe pro Wort) als Voreinstellung für Passphrasen.",
    ],
  },
  text: {
    mode: "Passwortart",
    modes: { random: "Zufällige Zeichen", passphrase: "Zufällige Wörter (Passphrase)" },
    length: "Länge (Zeichen)",
    poolMode: "Zeichenvorrat",
    poolModes: { sets: "Zeichensätze wählen", custom: "Eigene Vorratsgröße" },
    lower: "Kleinbuchstaben a–z (26)",
    upper: "Großbuchstaben A–Z (26)",
    digits: "Ziffern 0–9 (10)",
    symbols: "Sonderzeichen",
    yesNo: { yes: "Einbeziehen", no: "Ausschließen" },
    symbolCount: "Anzahl möglicher Sonderzeichen",
    symbolCountHelp: "32 umfasst alle druckbaren ASCII-Sonderzeichen einer US-Tastatur, etwa ! ? # und @. Verwenden Sie eine kleinere Zahl, wenn nur einige Sonderzeichen erlaubt sind.",
    customPool: "Vorratsgröße (mögliche Zeichen)",
    customPoolHelp: "Wie viele verschiedene Zeichen an jeder Stelle stehen können.",
    words: "Anzahl der Wörter",
    wordList: "Größe der Wortliste",
    wordListHelp: "7.776 ist die Größe einer Diceware-Wortliste, ausgelegt auf fünf Würfe mit einem sechsseitigen Würfel pro Wort.",
    guessRate: "Versuche des Angreifers pro Sekunde",
    guessRateHelp: "Eine Annahme über den Angreifer. 10¹⁰ (10 Milliarden) pro Sekunde entspricht einem schnellen Offline-Angriff auf ein schwach gehashtes Passwort; Online-Angriffe sind weit langsamer.",
    errors: {
      noSets: "Beziehen Sie mindestens einen Zeichensatz ein.",
    },
    entropy: "Entropie",
    bits: "Bit",
    captionRandom: "{length}, zufällig aus einem Vorrat von {pool} Zeichen gewählt.",
    captionPassphrase: "{words}, zufällig aus einer Liste von {list} Wörtern gewählt.",
    lengthCount: forms("{n} Zeichen", "{n} Zeichen"),
    wordCount: forms("{n} Wort", "{n} Wörter"),
    combinations: "Mögliche Kombinationen",
    poolSize: "Vorratsgröße pro Stelle",
    bitsPerItem: "Entropie pro Zeichen oder Wort",
    averageTime: "Mittlere Zeit zum Erraten",
    worstTime: "Zeit, um alle Kombinationen auszuprobieren",
    duration: {
      lessThanSecond: "Weniger als 1 Sekunde",
      seconds: forms("{n} Sekunde", "{n} Sekunden"),
      minutes: forms("{n} Minute", "{n} Minuten"),
      hours: forms("{n} Stunde", "{n} Stunden"),
      days: forms("{n} Tag", "{n} Tage"),
      years: forms("{n} Jahr", "{n} Jahre"),
    },
    notes: {
      random: "Diese Werte gelten nur, wenn jedes Zeichen oder Wort wirklich zufällig gewählt wird, zum Beispiel von einem Passwortmanager oder mit Würfeln. Selbst ausgedachte Passwörter, Namen, Daten und gängige Ersetzungen haben weit weniger Entropie.",
      average: "Im Mittel findet ein Angreifer das Passwort, nachdem er die Hälfte der Kombinationen ausprobiert hat.",
      notCollected: "Diese Seite fragt nie nach Ihrem Passwort. Sie arbeitet nur mit der Länge und den Arten von Zeichen oder Wörtern.",
      zero: "Bei nur einer möglichen Wahl pro Stelle gibt es keine Unsicherheit, die Entropie beträgt also 0 Bit.",
    },
  },
};

export default de;
