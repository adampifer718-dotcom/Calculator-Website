import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { passwordEntropyEngine, makePasswordEntropyEngine } from "./engine";

export const passwordEntropy = defineCalculator({
  id: "password-entropy",
  slug: "password-entropy-calculator",
  status: "published",
  title: "Password Entropy Calculator",
  shortTitle: "Password Entropy",
  category: "other",
  collections: ["software-data"],
  summary: "Estimate the entropy in bits of a randomly generated password or passphrase and how long an attacker would need to guess it.",
  metaTitle: "Password Entropy Calculator – Bits and Time to Guess",
  metaDescription: "Work out the entropy in bits of a random password or Diceware passphrase from its length and character set, and the average time to guess it.",
  keywords: ["password entropy", "password strength calculator", "passphrase entropy", "diceware", "bits of entropy", "brute force time", "password length", "character set"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "NIST SP 800-63B-4: Digital Identity Guidelines, Authentication and Authenticator Management",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://csrc.nist.gov/pubs/sp/800/63/b/4/final",
      usedFor: "Current US guidance on passwords, which favors length and screening against known breached passwords over composition rules.",
    },
    {
      title: "EFF Dice-Generated Passphrases (word lists)",
      publisher: "Electronic Frontier Foundation (EFF)",
      url: "https://eff.org/wordlist",
      usedFor: "The 7,776-word list size (6⁵, five dice rolls per word) used as the passphrase default.",
    },
  ],
  expertReview: { area: "safety", status: "pending" },
  intro: [
    "Entropy measures how unpredictable a secret is. A password chosen at random from a pool of N possible characters gains log₂(N) bits for each character, and every extra bit doubles the number of guesses an attacker may need.",
    "This calculator works only from the structure of a password: its length and the kinds of characters, or the number of words and the size of the word list. It never asks for, receives or analyzes a real password, so please do not type yours anywhere on this page.",
  ],
  howToUse: [
    "Choose a random-character password or a random-word passphrase.",
    "For characters, enter the length and choose the character sets, or enter a custom pool size.",
    "For a passphrase, enter the number of words and the word list size (7,776 for a Diceware list).",
    "Adjust the attacker's guesses per second if you like, then read the entropy, the number of combinations and the guessing times.",
  ],
  formulas: [
    { title: "Entropy of a random password", expression: "H = L × log₂(N)", explanation: "L is the number of characters and N the pool size, for example 26 + 26 + 10 + 32 = 94 for all four sets." },
    { title: "Entropy of a passphrase", expression: "H = W × log₂(K)", explanation: "W is the number of words and K the size of the word list. Each Diceware word adds log₂(7,776) ≈ 12.92 bits." },
    { title: "Average time to guess", expression: "t = 2ᴴ ÷ 2 ÷ g", explanation: "2ᴴ is the number of combinations and g the guesses per second. On average half of them must be tried." },
  ],
  examples: [
    {
      title: "16 random characters from all four sets",
      inputs: { mode: "random", length: 16, poolMode: "sets", lower: "yes", upper: "yes", digits: "yes", symbols: "yes", symbolCount: 32, guessRate: 1e10 },
      steps: [
        "Pool = 26 + 26 + 10 + 32 = 94 characters",
        "Entropy = 16 × log₂(94) ≈ 16 × 6.5546 ≈ 104.87 bits",
        "Average time at 10¹⁰ guesses per second ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5.89 × 10¹³ years",
      ],
      expectedPrimary: 104.8734216268422,
    },
    {
      title: "Six-word Diceware passphrase",
      inputs: { mode: "passphrase", words: 6, wordList: 7776, guessRate: 1e10 },
      steps: ["Entropy = 6 × log₂(7,776) ≈ 6 × 12.925 ≈ 77.55 bits", "Combinations = 7,776⁶ ≈ 2.21 × 10²³", "Average time ≈ 350,270 years at 10¹⁰ guesses per second"],
      expectedPrimary: 77.54887502163469,
    },
    {
      title: "8 random lowercase letters",
      inputs: { mode: "random", length: 8, poolMode: "sets", lower: "yes", upper: "no", digits: "no", symbols: "no", symbolCount: 32, guessRate: 1e10 },
      steps: ["Entropy = 8 × log₂(26) ≈ 37.60 bits", "Combinations = 26⁸ = 208,827,064,576", "Average time ≈ 208,827,064,576 ÷ 2 ÷ 10¹⁰ ≈ 10 seconds"],
      expectedPrimary: 37.603517745128734,
    },
  ],
  assumptions: [
    "Every character or word is chosen independently and uniformly at random, as a password manager or dice would. Passwords chosen by people are far more predictable than these numbers suggest.",
    "The guessing rate is an assumption you can change. Real rates range from a few guesses per second against an online login with rate limits to many billions per second against stolen, weakly hashed passwords.",
    "Entropy does not cover other risks, such as phishing, reuse of the same password on several sites, or a password that has already leaked.",
    "This is an estimate for comparison, not security advice or a guarantee, and it has not been professionally reviewed.",
  ],
  faqs: [
    { question: "How many bits of entropy is enough?", answer: "There is no single threshold, because it depends on how the password is stored and who might attack it. As a rough guide, each bit doubles the work, so a random password of 16 or more characters, or a passphrase of six or more Diceware words, is far beyond practical brute force at the default rate." },
    { question: "Why does this page not let me check my own password?", answer: "Entropy describes how a password was generated, not the characters it ended up with. A password such as Summer2025! looks varied but is easy to guess because people choose it. Typing a real password into any website is also a risk, so this page never asks for one." },
    { question: "Is a long passphrase better than a short complex password?", answer: "Often, yes. Six random words from a 7,776-word list give about 77.5 bits, more than 12 random characters from letters and digits (about 71.5 bits), and they are easier to remember and type. What matters is that the words are picked at random, not chosen as a phrase." },
  ],
  related: ["permutations-combinations-calculator", "exponent-calculator", "log-calculator"],
  updated: "2026-10-24",
  engine: passwordEntropyEngine,
  text,
  makeEngine: makePasswordEntropyEngine,
  translations,
});
