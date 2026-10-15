const text = {
  numbers: "Whole numbers",
  numbersHelp: "Enter 2 to 20 positive whole numbers, separated by commas, spaces or new lines.",
  errors: {
    empty: "Enter at least two numbers.",
    tooMany: "Enter at most {max} numbers.",
    notNumber: "“{token}” is not a number. Separate values with commas, spaces or new lines.",
    tooLarge: "“{token}” is too large.",
  },
  needTwo: "Enter at least two numbers.",
  maxCount: "Enter at most {max} numbers.",
  notWhole: "{value} is not a whole number. Enter whole numbers only.",
  notPositive: "{value} is not positive. Every number must be at least 1.",
  tooBig: "{value} is too large. Each number can be at most {max}.",
  gcf: "Greatest common factor (GCF)",
  gcfCaption: "Also called the greatest common divisor (GCD) or highest common factor (HCF).",
  lcm: "Least common multiple (LCM)",
  lcmDigits: "Digits in the LCM",
  coprime: "The GCF is 1, so these numbers have no common factor other than 1 (they are coprime).",
  factorTable: "Prime factorization",
  numberColumn: "Number",
  factorsColumn: "Prime factors",
  noPrimeFactors: "1 (no prime factors)",
  isPrime: "{factors} (prime)",
};
export type GcfLcmText = typeof text;
export default text;
