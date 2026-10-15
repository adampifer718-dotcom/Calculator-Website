import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BudgetRuleText } from "../text/en";

const de: CalculatorTranslation<BudgetRuleText> = {
  content: {
    title: "50/30/20-Budgetrechner",
    shortTitle: "50/30/20-Budget",
    summary: "Teilen Sie Ihr monatliches Nettoeinkommen mit der 50/30/20-Regel oder einer anderen einfachen Aufteilung in Bedarf, Wünsche und Sparen auf.",
    metaTitle: "50/30/20-Budgetrechner – Bedarf, Wünsche, Sparen",
    metaDescription: "Teilen Sie Ihr Nettoeinkommen nach der 50/30/20-, 70/20/10- oder 80/20-Regel oder einer eigenen Aufteilung auf und sehen Sie jeden Topf pro Monat und Jahr.",
    keywords: ["50/30/20-Regel", "Budgetrechner", "Haushaltsbudget", "Bedarf Wünsche Sparen", "70/20/10-Regel", "80/20-Regel", "monatliches Budget", "Nettoeinkommen aufteilen"],
    intro: [
      "Eine Prozentregel ist ein schneller Einstieg ins Budget, ohne Dutzende Kategorien zu erfassen. Die bekannteste ist 50/30/20: die Hälfte des Nettoeinkommens für den Bedarf, 30 % für Wünsche und 20 % für Sparen und Schuldenabbau.",
      "Geben Sie Ihr monatliches Einkommen nach Steuern ein und wählen Sie eine Regel oder legen Sie eigene drei Prozentsätze fest. Der Rechner zeigt, wie viel jeden Monat und über ein Jahr in jeden Topf fließt.",
    ],
    howToUse: [
      "Wählen Sie die Währung für die Beträge.",
      "Geben Sie Ihr monatliches Nettoeinkommen ein: den Betrag, der nach Steuern auf Ihrem Konto ankommt.",
      "Wählen Sie eine Budgetregel oder „Eigene Aufteilung“ und geben Sie drei Prozentsätze ein, die zusammen 100 % ergeben.",
      "Lesen Sie den Betrag für jeden Topf pro Monat und pro Jahr ab.",
    ],
    formulas: [
      { title: "Betrag pro Topf", expression: "Topf = Einkommen × Anteil ÷ 100", explanation: "Bei der 50/30/20-Regel sind die Anteile 50 % für den Bedarf, 30 % für Wünsche und 20 % für Sparen." },
      { title: "Jahresbetrag", expression: "jährlich = monatlich × 12", explanation: "Jeder Monatsbetrag über zwölf Monate." },
      { title: "Eigene Aufteilung", expression: "Bedarf % + Wünsche % + Sparen % = 100 %", explanation: "Ihre eigenen Anteile müssen das gesamte Einkommen abdecken, nicht mehr und nicht weniger." },
    ],
    examples: [
      {
        title: "3.850 $ pro Monat mit der 50/30/20-Regel",
        steps: ["Bedarf = 3.850 × 50 % = 1.925 $", "Wünsche = 3.850 × 30 % = 1.155 $", "Sparen = 3.850 × 20 % = 770 $"],
      },
      {
        title: "5.200 $ pro Monat mit der 70/20/10-Regel",
        steps: ["Ausgaben = 5.200 × 70 % = 3.640 $", "Sparen = 5.200 × 20 % = 1.040 $", "Schuldentilgung oder Spenden = 5.200 × 10 % = 520 $"],
      },
      {
        title: "2.900 $ pro Monat mit einer eigenen Aufteilung 55/25/20",
        steps: ["55 + 25 + 20 = 100 %", "Bedarf = 2.900 × 55 % = 1.595 $", "Wünsche = 725 $; Sparen = 580 $"],
      },
    ],
    assumptions: [
      "Diese Aufteilungen sind Faustregeln, keine Finanzberatung. Sie berücksichtigen weder Ihre Schulden noch Ihren Wohnort oder Ihre Ziele.",
      "Einkommen bedeutet Nettolohn nach Steuern und Abzügen. Wird Altersvorsorge bereits vom Lohn einbehalten, können Sie sie dem Spartopf zurechnen.",
      "Die 50/30/20-Aufteilung wird gemeinhin Elizabeth Warren und Amelia Warren Tyagi und ihrem Buch „All Your Worth“ von 2005 zugeschrieben. Die Aufteilungen 70/20/10 und 80/20 sind informelle Varianten ohne einzelne Quelle.",
      "Mindestraten für Schulden zählen meist zum Bedarf; alles, was über die Mindestrate hinaus gezahlt wird, gehört zu Sparen und Schuldenabbau.",
    ],
    faqs: [
      {
        question: "Was zählt zum Bedarf?",
        answer: "Bedarf sind Rechnungen, die Sie kaum einstellen könnten: Miete oder Hypothek, Nebenkosten, Grundnahrungsmittel, Versicherungen, der Weg zur Arbeit und Mindestraten für Kredite. Essen gehen, Streamingdienste, Reisen und Hobbys sind Wünsche.",
      },
      {
        question: "Was, wenn mein Bedarf mehr als 50 % ausmacht?",
        answer: "Das ist üblich, wo Wohnen teuer ist. Verwenden Sie eine eigene Aufteilung, die Ihre echten Kosten abbildet, und suchen Sie nach Wegen, den Bedarf mit der Zeit zu senken oder das Einkommen zu erhöhen. Die Regel ist ein Ziel, keine Prüfung, die man besteht oder nicht.",
      },
      {
        question: "Soll ich das Brutto- oder das Nettoeinkommen verwenden?",
        answer: "Verwenden Sie das Nettoeinkommen, also den Betrag nach Steuern. Die Regel ist für das Geld gedacht, das Ihnen jeden Monat tatsächlich zum Ausgeben und Sparen bleibt.",
      },
    ],
    sourcesUsedFor: [
      "Was ein Budget ist und warum das Einkommen gegen Ausgaben und Sparen geplant wird.",
      "Der Ursprung der 50/30/20-Regel im Buch „All Your Worth“ von Elizabeth Warren und Amelia Warren Tyagi.",
    ],
  },
  text: {
    income: "Monatliches Nettoeinkommen",
    incomeHelp: "Ihr Lohn nach Einkommensteuer und anderen Abzügen, für einen Monat.",
    rule: "Budgetregel",
    rules: {
      "50-30-20": "50/30/20 (Bedarf, Wünsche, Sparen)",
      "70-20-10": "70/20/10 (Ausgaben, Sparen, Schulden oder Spenden)",
      "80-20": "80/20 (Ausgaben, Sparen)",
      custom: "Eigene Aufteilung",
    },
    needsPct: "Bedarf",
    wantsPct: "Wünsche",
    savingsPct: "Sparen und Schuldentilgung",
    customHelp: "Die drei Prozentsätze müssen zusammen 100 % ergeben.",
    sumError: "Die drei Prozentsätze ergeben zusammen {sum}. Ändern Sie sie so, dass die Summe 100 % beträgt.",
    buckets: {
      needs: "Bedarf",
      wants: "Wünsche",
      savings: "Sparen und zusätzliche Schuldentilgung",
      spending: "Laufende Ausgaben (Bedarf und Wünsche)",
      savingsOnly: "Sparen",
      extra: "Schuldentilgung oder Spenden",
    },
    primaryCaption: "{percent} von {income} pro Monat für diesen Topf (Regel: {rule}).",
    ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "eigene Aufteilung" },
    yearlyIncome: "Jährliches Nettoeinkommen",
    tableCaption: "Monats- und Jahresbeträge für jeden Topf",
    tableColumns: { bucket: "Topf", share: "Anteil", monthly: "Pro Monat", yearly: "Pro Jahr" },
    notes: {
      thumb: "Budgetregeln sind grobe Ausgangspunkte, keine Beratung. Passen Sie die Aufteilung an Ihre eigenen Kosten und Ziele an.",
      needs: "Bedarf sind Kosten, die Sie zahlen müssen, etwa Wohnen, Nebenkosten, Lebensmittel, Versicherungen und Mindestraten für Schulden. Wünsche sind alles, worauf Sie verzichten könnten.",
    },
  },
};

export default de;
