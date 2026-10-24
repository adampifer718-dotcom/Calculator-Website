import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarMassText } from "../text/en";

const fr: CalculatorTranslation<MolarMassText> = {
  content: {
    title: "Calculateur de masse molaire",
    shortTitle: "Masse molaire",
    summary: "Saisissez une formule chimique, avec parenthèses et hydrates, et obtenez sa masse molaire en g/mol avec la part de chaque élément dans la masse totale.",
    metaTitle: "Calculateur de masse molaire – g/mol d’une formule chimique",
    metaDescription:
      "Trouvez la masse molaire de toute formule chimique en g/mol, avec parenthèses et hydrates comme CuSO4·5H2O, plus le nombre d’atomes et le pourcentage massique.",
    keywords: ["masse molaire", "calcul masse molaire", "masse moléculaire", "g/mol", "masse molaire d’un composé", "pourcentage massique", "masse molaire hydrate"],
    intro: [
      "La masse molaire d’une substance est la masse d’une mole de celle-ci, en grammes par mole. Pour un composé, c’est simplement la somme des masses atomiques de tous les atomes de sa formule : l’eau, H2O, compte deux hydrogènes et un oxygène, soit environ 2 × 1,008 + 15,999 = 18,015 g/mol.",
      "Saisissez n’importe quelle formule et ce calculateur compte les atomes pour vous, y compris les groupes entre parenthèses ou crochets comme Ca(OH)2 ou K4[Fe(CN)6] et les hydrates comme CuSO4·5H2O. Il indique aussi la part de la masse totale apportée par chaque élément.",
    ],
    howToUse: [
      "Saisissez la formule en respectant les majuscules : Co est le cobalt, alors que CO est le monoxyde de carbone.",
      "Placez l’indice après chaque élément ou groupe entre parenthèses, par exemple Al2(SO4)3. Sans indice, la quantité est 1.",
      "Pour un hydrate, séparez les parties par ·, . ou * et placez le nombre de molécules d’eau devant, comme dans MgSO4·7H2O.",
      "Lisez la masse molaire et le tableau du nombre d’atomes, des contributions massiques et des pourcentages massiques.",
    ],
    formulas: [
      { title: "Masse molaire", expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol", explanation: "nᵢ est le nombre d’atomes de l’élément i dans la formule et Aᵣ,ᵢ sa masse atomique standard." },
      { title: "Groupes et hydrates", expression: "(X)ₖ → chaque indice à l’intérieur × k\nA·nB → atomes de A + n × atomes de B", explanation: "Le multiplicateur d’un groupe s’applique à tout son contenu, groupes imbriqués compris ; le coefficient d’un hydrate s’applique à la partie après le point." },
      { title: "Pourcentage massique", expression: "% élément i = nᵢ × Aᵣ,ᵢ ÷ M × 100", explanation: "La part de la masse molaire apportée par chaque élément." },
    ],
    examples: [
      { title: "Glucose, C6H12O6", steps: ["Carbone : 6 × 12,011 = 72,066", "Hydrogène : 12 × 1,008 = 12,096", "Oxygène : 6 × 15,999 = 95,994", "M = 72,066 + 12,096 + 95,994 = 180,156 g/mol"] },
      {
        title: "Sulfate de cuivre(II) pentahydraté, CuSO4·5H2O",
        steps: ["CuSO4 : 63,546 + 32,06 + 4 × 15,999 = 159,602", "5 H2O : 5 × (2 × 1,008 + 15,999) = 5 × 18,015 = 90,075", "M = 159,602 + 90,075 = 249,677 g/mol", "Le cuivre représente 63,546 ÷ 249,677 ≈ 25,45 % de la masse"],
      },
      { title: "Ferrocyanure de potassium, K4[Fe(CN)6]", steps: ["Potassium : 4 × 39,098 = 156,392", "Fer : 1 × 55,845 = 55,845", "(CN)6 : 6 × (12,011 + 14,007) = 156,108", "M = 156,392 + 55,845 + 156,108 = 368,345 g/mol"] },
    ],
    assumptions: [
      "Les masses atomiques sont les masses atomiques standard abrégées de l’IUPAC/CIAAW. Lorsque la masse atomique d’un élément varie dans la nature et est donnée sous forme d’intervalle, la valeur conventionnelle unique est utilisée ; le dernier chiffre peut donc différer d’autres tables.",
      "Les éléments sans masse atomique standard, comme le technétium, le prométhium, le polonium et la plupart des éléments plus lourds que le bismuth à l’exception du thorium, du protactinium et de l’uranium, sont refusés, car leur masse molaire dépend de l’isotope.",
      "Les charges, les isotopes (comme D ou ¹³C) et les symboles d’état ne sont pas pris en charge. La formule est traitée comme une unité formulaire neutre avec les abondances isotopiques naturelles ; la masse des électrons gagnés ou perdus par un ion est négligeable.",
    ],
    faqs: [
      { question: "La masse molaire est-elle la même chose que la masse moléculaire ?", answer: "Elles ont la même valeur numérique. La masse moléculaire relative n’a pas d’unité, tandis que la masse molaire s’exprime en grammes par mole. L’eau a une masse moléculaire relative de 18,015 et une masse molaire de 18,015 g/mol." },
      { question: "Comment saisir un hydrate ?", answer: "Écrivez le sel, puis un point (·, . ou *), puis le nombre de molécules d’eau et H2O, par exemple CuSO4·5H2O ou Na2CO3*10H2O. Le coefficient multiplie tout ce qui se trouve après le point." },
      { question: "Pourquoi mon manuel donne-t-il une valeur légèrement différente ?", answer: "Les tables arrondissent les masses atomiques différemment, et certaines utilisent des valeurs plus anciennes. Le chlore, par exemple, vaut 35,45 ici mais 35,453 dans des tables plus anciennes, ce qui change la dernière décimale de NaCl." },
    ],
    sourcesUsedFor: ["Les masses atomiques standard abrégées et les valeurs conventionnelles utilisées pour chaque élément."],
  },
  text: {
    formula: "Formule chimique",
    formulaHelp:
      "Les symboles des éléments sont sensibles à la casse (Co est le cobalt, CO le monoxyde de carbone). Utilisez ( ) ou [ ] pour les groupes, et ·, . ou * pour les hydrates, par exemple CuSO4·5H2O.",
    formulaPlaceholder: "p. ex. Ca(OH)2",
    errors: {
      empty: "Saisissez une formule chimique.",
      tooLong: "La formule est trop longue. Utilisez 200 caractères au maximum.",
      invalidChar: "Caractère non valide « {token} » à la position {position}. Utilisez uniquement des symboles d’éléments, des nombres, des parenthèses et des points d’hydrate.",
      lowercase: "Minuscule inattendue « {token} » à la position {position}. Les symboles des éléments commencent par une majuscule, par exemple Na ou Cl.",
      unknownElement: "Symbole d’élément inconnu « {token} » à la position {position}.",
      noStandardWeight: "{token} (position {position}) n’a pas de masse atomique standard : sa masse molaire ne peut donc pas être calculée.",
      unclosed: "Parenthèses non équilibrées : le « {token} » à la position {position} n’est jamais fermé.",
      unexpectedClose: "Parenthèses non équilibrées : le « {token} » à la position {position} n’a pas de parenthèse ouvrante correspondante.",
      mismatched: "Parenthèses incompatibles : le « {token} » à la position {position} ne correspond pas à la parenthèse qu’il ferme.",
      emptyGroup: "Le groupe entre parenthèses commençant à la position {position} est vide.",
      zeroCount: "L’indice à la position {position} vaut zéro. Les indices doivent être des nombres entiers d’au moins 1.",
      misplacedNumber: "Le nombre à la position {position} n’est rattaché à aucun élément ni groupe.",
      misplacedDot: "Le point d’hydrate à la position {position} doit se trouver entre deux parties de la formule, par exemple CuSO4·5H2O.",
      tooManyAtoms: "La formule contient trop d’atomes. Utilisez au maximum 1 000 000 atomes au total.",
    },
    molarMass: "Masse molaire",
    caption: "{formula} : somme de chaque nombre d’atomes × masse atomique standard",
    totalAtoms: "Atomes par unité formulaire",
    elements: "Éléments différents",
    massOfMole: "Masse d’une mole",
    tableCaption: "Composition par élément",
    columns: { element: "Élément", count: "Atomes", weight: "Masse atomique", mass: "Masse (g/mol)", percent: "% massique" },
    note: "Les masses atomiques sont les valeurs standard abrégées de l’IUPAC. Pour les éléments à intervalle naturel (comme H, C, N, O et S), la valeur conventionnelle unique est utilisée.",
  },
};

export default fr;
