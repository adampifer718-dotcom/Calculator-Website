import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PizzaSizeText } from "../text/en";

const fr: CalculatorTranslation<PizzaSizeText> = {
  content: {
    title: "Calculateur de taille de pizza",
    shortTitle: "Taille de pizza",
    summary: "Comparez deux pizzas selon leur surface et leur prix au pouce carré ou au centimètre carré pour trouver la meilleure affaire.",
    metaTitle: "Calculateur de taille de pizza – Prix au cm² ou au pouce²",
    metaDescription:
      "Comparez deux pizzas selon leur surface et leur prix au pouce carré ou au cm², voyez la plus avantageuse et combien de petites valent une grande.",
    keywords: ["taille de pizza", "surface d’une pizza", "prix au cm²", "comparer des pizzas", "grande ou moyenne pizza", "pizza la plus rentable", "diamètre pizza"],
    intro: [
      "Les tailles de pizza sont désignées par leur diamètre, mais ce que l’on mange, c’est une surface, et la surface augmente comme le carré du diamètre. Une pizza de 16 pouces n’est qu’un tiers plus large qu’une pizza de 12 pouces, mais elle contient presque 78 % de pizza en plus.",
      "Saisissez le diamètre et le prix de deux pizzas pour voir la surface de chacune, le prix par unité de surface et celle qui vous en donne le plus pour votre argent.",
    ],
    howToUse: [
      "Choisissez si les diamètres sont en pouces ou en centimètres.",
      "Saisissez le diamètre et le prix de la pizza A.",
      "Saisissez le diamètre et le prix de la pizza B.",
      "Lisez quelle pizza est la plus avantageuse, le prix au pouce carré ou au centimètre carré, et la comparaison des tailles.",
    ],
    formulas: [
      { title: "Surface", expression: "A = π × d² ÷ 4", explanation: "d est le diamètre. C’est la même chose que π × r², avec le rayon r = d ÷ 2." },
      { title: "Prix par unité de surface", expression: "prix ÷ A", explanation: "La valeur la plus basse correspond à la meilleure affaire." },
      { title: "Rapport des tailles", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "Combien de pizzas A ont la même surface qu’une pizza B." },
    ],
    examples: [
      {
        title: "12 pouces à 12,99 $US contre 16 pouces à 18,99 $US",
        steps: [
          "A : π × 12² ÷ 4 ≈ 113,10 in², donc 12,99 $US ÷ 113,10 ≈ 0,1149 $US par in²",
          "B : π × 16² ÷ 4 ≈ 201,06 in², donc 18,99 $US ÷ 201,06 ≈ 0,0944 $US par in²",
          "(16 ÷ 12)² ≈ 1,778 : B contient donc environ 77,78 % de pizza en plus",
        ],
      },
      {
        title: "30 cm à 9,50 € contre 40 cm à 17,90 €",
        steps: [
          "A : π × 30² ÷ 4 ≈ 706,86 cm², donc 9,50 € ÷ 706,86 ≈ 0,0134 € par cm²",
          "B : π × 40² ÷ 4 ≈ 1 256,64 cm², donc 17,90 € ÷ 1 256,64 ≈ 0,0142 € par cm²",
          "Ici, c’est la plus petite pizza qui est la moins chère au centimètre carré",
        ],
      },
    ],
    assumptions: [
      "Les pizzas sont rondes et le diamètre correspond à la largeur totale, croûte comprise.",
      "Les deux pizzas ont la même épaisseur et la même garniture : la surface est donc une bonne mesure de la quantité de nourriture.",
      "Le choix d’une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Pourquoi une pizza à peine plus grande a-t-elle une surface tellement plus importante ?",
        answer: "La surface dépend du carré du diamètre. Passer de 10 à 14 pouces, c’est 40 % de largeur en plus, mais la surface double presque, car 1,4² = 1,96.",
      },
      {
        question: "Deux pizzas moyennes valent-elles mieux qu’une grande ?",
        answer: "Comparez les surfaces. Deux pizzas de 12 pouces font environ 226 in² au total, alors qu’une seule pizza de 18 pouces fait environ 254 in² : la grande seule est donc plus grande.",
      },
      {
        question: "Faut-il compter la croûte ?",
        answer: "Ce calculateur la compte, car les tailles sont vendues selon le diamètre total. Si vous laissez la croûte, retranchez deux fois sa largeur du diamètre de chaque pizza avant de le saisir.",
      },
    ],
    sourcesUsedFor: ["L’aire d’un disque, A = πr², et sa forme exprimée avec le diamètre."],
  },
  text: {
    unit: "Unité du diamètre",
    units: { in: "Pouces (in)", cm: "Centimètres (cm)" },
    diameterA: "Diamètre de la pizza A",
    priceA: "Prix de la pizza A",
    diameterB: "Diamètre de la pizza B",
    priceB: "Prix de la pizza B",
    diameterHelp: "Mesuré en passant par le centre, d’un bord à l’autre.",
    result: "Meilleure affaire",
    aBetter: "La pizza A est la plus avantageuse",
    bBetter: "La pizza B est la plus avantageuse",
    same: "Les deux pizzas sont aussi avantageuses l’une que l’autre",
    caption: "La pizza A coûte {a} et la pizza B coûte {b}.",
    perArea: "{price} par {unit}",
    areaA: "Surface de la pizza A",
    areaB: "Surface de la pizza B",
    pricePerAreaA: "Prix de la pizza A par {unit}",
    pricePerAreaB: "Prix de la pizza B par {unit}",
    aPerB: "Nombre de pizzas A équivalant à une pizza B en surface",
    moreA: "Pizza en plus dans A par rapport à B",
    moreB: "Pizza en plus dans B par rapport à A",
    sameSize: "Les deux pizzas ont la même surface",
    sameSizeValue: "Même taille",
    note: "Compare la surface ronde totale, croûte comprise. L’épaisseur et la garniture sont supposées identiques.",
  },
};

export default fr;
