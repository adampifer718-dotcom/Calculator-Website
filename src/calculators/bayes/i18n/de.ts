import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BayesText } from "../text/en";

const de: CalculatorTranslation<BayesText> = {
  content: {
    title: "Rechner für den Satz von Bayes",
    shortTitle: "Satz von Bayes",
    summary: "Aktualisieren Sie eine A-priori-Wahrscheinlichkeit mit neuen Hinweisen und sehen Sie das Ergebnis als natürliche Häufigkeiten von 10.000 Fällen.",
    metaTitle: "Satz von Bayes – A-posteriori-Wahrscheinlichkeit P(A|B)",
    metaDescription: "Berechnen Sie P(A|B) aus A-priori-Wahrscheinlichkeit, Likelihood und Fehlalarmrate – mit P(B), P(A|nicht B) und Positiven von 10.000 Fällen.",
    keywords: ["Satz von Bayes", "Bayes-Formel", "A-posteriori-Wahrscheinlichkeit", "bedingte Wahrscheinlichkeit", "positiver Vorhersagewert", "falsch positiv", "Sensitivität", "Prävalenz"],
    intro: [
      "Der Satz von Bayes sagt Ihnen, wie sehr Sie etwas glauben sollten, nachdem Sie einen Hinweis gesehen haben. Er kombiniert, wie wahrscheinlich die Annahme von vornherein war (die A-priori-Wahrscheinlichkeit), damit, wie viel häufiger der Hinweis auftritt, wenn die Annahme zutrifft, als wenn sie nicht zutrifft.",
      "Das klassische Beispiel ist ein Screeningtest. Selbst ein Test, der die meisten Fälle erkennt, kann mehr Fehlalarme als echte Positive liefern, wenn die Erkrankung selten ist. Geben Sie drei Prozentwerte ein, um die aktualisierte Wahrscheinlichkeit und eine Aufschlüsselung von 10.000 gedachten Fällen zu erhalten, mit der sich das Ergebnis leicht von Hand prüfen lässt.",
    ],
    howToUse: [
      "Geben Sie die A-priori-Wahrscheinlichkeit P(A) ein: wie häufig A ist, bevor Sie den Hinweis betrachten, etwa die Prävalenz einer Erkrankung.",
      "Geben Sie P(B | A) ein: wie oft der Hinweis auftritt, wenn A zutrifft, etwa die Sensitivität eines Tests.",
      "Geben Sie P(B | nicht A) ein: wie oft der Hinweis trotzdem auftritt, wenn A nicht zutrifft, etwa die Falsch-positiv-Rate.",
      "Lesen Sie P(A | B) ab und sehen Sie dann in der Tabelle mit 10.000 Fällen, woher die positiven Ergebnisse stammen.",
    ],
    formulas: [
      { title: "Satz von Bayes", expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)", explanation: "Die A-posteriori-Wahrscheinlichkeit ist der Anteil aller Fälle mit B, die auch A aufweisen." },
      { title: "Totale Wahrscheinlichkeit", expression: "P(B) = P(B | A) · P(A) + P(B | nicht A) · (1 − P(A))", explanation: "B kann mit A auftreten (richtig Positive) oder ohne A (falsch Positive)." },
      { title: "Negatives Ergebnis", expression: "P(A | nicht B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))", explanation: "Die Wahrscheinlichkeit, dass A dennoch zutrifft, wenn B nicht beobachtet wird (falsch Negative unter allen Negativen)." },
    ],
    examples: [
      {
        title: "Ein Screeningtest für eine Erkrankung, die 2 % der Menschen betrifft",
        steps: ["Von 10.000 Menschen haben 200 die Erkrankung, und 95 % davon werden positiv getestet: 190 richtig Positive.", "Von den 9.800 Menschen ohne Erkrankung werden 8 % positiv getestet: 784 falsch Positive.", "P(A | B) = 190 ÷ (190 + 784) ≈ 19,51 %"],
      },
      {
        title: "Ein Wort, das auf Spam-E-Mails hinweist",
        steps: ["P(B) = 0,30 × 0,40 + 0,02 × 0,60 = 0,132", "P(A | B) = 0,12 ÷ 0,132 ≈ 90,91 %"],
      },
      {
        title: "Eine sehr seltene Erkrankung und ein genauer Test",
        steps: ["Von 10.000 Menschen: 9,9 richtig Positive und 99,9 falsch Positive.", "P(A | B) = 9,9 ÷ 109,8 ≈ 9,02 %, obwohl der Test in 99 % der Fälle richtig liegt."],
      },
    ],
    assumptions: [
      "Die drei Prozentwerte werden als exakt angenommen. In der Praxis sind Sensitivität und Falsch-positiv-Rate eines Tests Schätzwerte, und die A-priori-Wahrscheinlichkeit hängt davon ab, wer getestet wird.",
      "Die A-priori-Wahrscheinlichkeit sollte die Gruppe beschreiben, aus der der Fall stammt. Wer wegen Symptomen getestet wird, hat eine höhere A-priori-Wahrscheinlichkeit als eine zufällig ausgewählte Person aus der Bevölkerung.",
      "Die diagnostischen Beispiele veranschaulichen nur die Rechnung. Die Deutung eines echten medizinischen Testergebnisses erfordert eine Ärztin oder einen Arzt, die Symptome, Vorgeschichte und Folgetests einbeziehen können.",
    ],
    faqs: [
      { question: "Warum ist P(A | B) so niedrig, obwohl der Test genau ist?", answer: "Wenn A selten ist, stehen den wenigen echten Fällen sehr viele Menschen ohne A gegenüber, und selbst eine kleine Falsch-positiv-Rate in dieser großen Gruppe erzeugt mehr Fehlalarme als richtig Positive." },
      { question: "Wie entsprechen Sensitivität und Spezifität den Eingaben?", answer: "Die Sensitivität ist P(B | A). Die Fehlalarmrate P(B | nicht A) ist 100 % minus die Spezifität; eine Spezifität von 97 % bedeutet also eine Fehlalarmrate von 3 %." },
      { question: "Was zeigt die Tabelle mit 10.000 Fällen?", answer: "Sie übersetzt die Wahrscheinlichkeiten in erwartete Anzahlen richtig Positiver, falsch Positiver, falsch Negativer und richtig Negativer. P(A | B) ist die Zahl der richtig Positiven geteilt durch alle Positiven." },
    ],
    sourcesUsedFor: [
      "Wie Sensitivität, Falsch-positiv-Rate und Prävalenz über eine Vierfeldertafel zu Vorhersagewerten kombiniert werden.",
      "Bedingte Wahrscheinlichkeiten, abgelesen aus einer Tabelle von Häufigkeiten.",
    ],
  },
  text: {
    prior: "A-priori-Wahrscheinlichkeit P(A)",
    priorHelp: "Wie wahrscheinlich A vor jedem Hinweis ist, zum Beispiel wie häufig eine Erkrankung in der getesteten Gruppe ist.",
    likelihood: "Likelihood P(B | A)",
    likelihoodHelp: "Wie oft der Hinweis B auftritt, wenn A zutrifft, zum Beispiel die Sensitivität eines Tests (Richtig-positiv-Rate).",
    falseAlarm: "Fehlalarmrate P(B | nicht A)",
    falseAlarmHelp: "Wie oft B auftritt, wenn A nicht zutrifft, zum Beispiel die Falsch-positiv-Rate eines Tests (100 % minus seine Spezifität).",
    zeroEvidence: "Mit diesen Werten kann der Hinweis B nie auftreten (P(B) = 0), daher ist P(A | B) nicht definiert. Erhöhen Sie P(A) oder eine der Raten über 0 %.",
    posterior: "A-posteriori-Wahrscheinlichkeit P(A | B)",
    caption: "Die Wahrscheinlichkeit, dass A zutrifft, nachdem B beobachtet wurde.",
    pB: "Gesamtwahrscheinlichkeit des Hinweises P(B)",
    pNotAGivenB: "P(nicht A | B)",
    pAGivenNotB: "P(A | nicht B)",
    undefinedNotB: "Nicht definiert: B tritt immer auf, „nicht B“ kommt also nie vor",
    tableCaption: "Von 10.000 Fällen",
    tableColumns: { outcome: "Ergebnis", cases: "Fälle" },
    rows: {
      tp: "Richtig positiv (A und B)",
      fp: "Falsch positiv (nicht A, aber B)",
      fn: "Falsch negativ (A, aber nicht B)",
      tn: "Richtig negativ (weder A noch B)",
    },
    liftNote: "Die Beobachtung von B vervielfacht die Chancen für A um den Faktor {ratio} (das Likelihood-Verhältnis P(B | A) ÷ P(B | nicht A)).",
    rareNote: "Ist A selten, können die meisten Fälle mit B selbst bei einem genauen Test Fehlalarme sein.",
    note: "Die Angaben von 10.000 Fällen sind erwartete Anzahlen und können Dezimalstellen haben.",
  },
};

export default de;
