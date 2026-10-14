import type { PayConverterText } from "./en";

/** French (France) strings for the homepage pay converter. */
const fr: PayConverterText = {
  amount: "Votre rémunération",
  amountHelp: "Montant brut, avant impôts et retenues.",
  period: "Période de paie",
  periodHelp: "Fréquence à laquelle vous percevez le montant ci-dessus.",
  primary: "Salaire annuel estimé",
  caption: "Rémunération brute annuelle, convertie depuis la période de paie « {period} ».",
  hourly: "Taux horaire",
  monthly: "Salaire mensuel",
  perMinute: "Gain par minute",
  timeToEarn: "Temps nécessaire pour gagner {target}",
  unreachable: "Impossible à atteindre avec une rémunération nulle",
  hoursMinutes: "{h} h {m} min",
  higherCaption: "Rémunération à des taux horaires plus élevés",
  higherColumns: { rate: "Taux horaire", weekly: "Hebdomadaire", monthly: "Mensuel", annual: "Annuel" },
};

export default fr;
