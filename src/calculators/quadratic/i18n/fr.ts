import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuadraticText } from "../text/en";

const fr: CalculatorTranslation<QuadraticText> = {
  content: {
    title: "Calculateur d’équation du second degré",
    shortTitle: "Équation du second degré",
    summary: "Résolvez ax² + bx + c = 0 et obtenez les racines réelles ou complexes, le discriminant, le sommet et l’axe de symétrie.",
    metaTitle: "Calculateur d’équation du second degré – Racines, sommet",
    metaDescription:
      "Résolvez toute équation ax² + bx + c = 0 : racines réelles ou complexes, discriminant et son interprétation, sommet et axe de symétrie de la parabole.",
    keywords: ["équation du second degré", "équation quadratique", "discriminant", "delta", "racines", "sommet", "parabole", "racines complexes", "résoudre une équation", "algèbre"],
    intro: [
      "Une équation du second degré s’écrit ax² + bx + c = 0, avec a non nul. Sa courbe représentative est une parabole, et les racines sont les points où cette parabole coupe l’axe des abscisses.",
      "Saisissez les trois coefficients pour obtenir les deux racines d’un coup. Lorsque la parabole ne touche jamais l’axe des abscisses, le calculateur donne à la place le couple de racines complexes. Il indique aussi le discriminant, le sommet et l’axe de symétrie.",
    ],
    howToUse: [
      "Réarrangez votre équation pour qu’un des deux membres soit égal à 0 : par exemple, 3x² = 7x + 6 devient 3x² − 7x − 6 = 0.",
      "Saisissez a, b et c. N’oubliez pas les signes moins, et mettez 0 pour tout terme absent.",
      "Lisez les racines. Les racines réelles sont classées de la plus grande à la plus petite ; les racines complexes s’affichent sous la forme partie réelle ± partie imaginaire.",
      "Servez-vous du discriminant, du sommet et de l’axe de symétrie pour esquisser la parabole ou vérifier vos calculs.",
    ],
    formulas: [
      { title: "Formule de résolution", expression: "x = (−b ± √(b² − 4ac)) ÷ 2a", explanation: "Donne les deux racines. Le ± produit une racine avec + et une autre avec −." },
      { title: "Discriminant", expression: "D = b² − 4ac", explanation: "D > 0 donne deux racines réelles, D = 0 une racine double, et D < 0 deux racines complexes conjuguées." },
      {
        title: "Forme stable utilisée pour le calcul",
        expression: "q = −½(b + sgn(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q",
        explanation: "Algébriquement identique à la formule de résolution, mais elle évite de soustraire deux nombres presque égaux, ce qui fait perdre de la précision quand b² est bien plus grand que 4ac.",
      },
      { title: "Racines complexes", expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i", explanation: "Utilisée quand D < 0 ; i est l’unité imaginaire, avec i² = −1." },
      { title: "Sommet et axe", expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  axe : x = h", explanation: "Le sommet (h, k) est le point où la parabole change de sens. k est la valeur de ax² + bx + c en x = h." },
      { title: "Somme et produit des racines", expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a", explanation: "Ce sont les relations de Viète. Elles restent valables pour les racines complexes." },
    ],
    examples: [
      {
        title: "Deux racines réelles : 3x² − 7x − 6 = 0",
        steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, donc x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 et x₂ = −4 ÷ 6 ≈ −0,6667"],
      },
      {
        title: "Une racine double : 4x² + 12x + 9 = 0",
        steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1,5", "La parabole touche tout juste l’axe des abscisses en son sommet (−1,5 ; 0)."],
      },
      {
        title: "Racines complexes : x² − 2x + 10 = 0",
        steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Partie réelle : −(−2) ÷ 2 = 1", "Partie imaginaire : √36 ÷ 2 = 3, donc x = 1 ± 3i"],
      },
    ],
    assumptions: [
      "Les coefficients sont des nombres réels. Les équations à coefficients complexes ne sont pas prises en charge.",
      "Les résultats sont affichés avec 10 chiffres significatifs. Un discriminant nul à une infime erreur d’arrondi près est considéré comme exactement nul, et la racine double est alors indiquée.",
      "Les coefficients très grands ou très petits sont traités en virgule flottante double précision : les derniers chiffres de résultats extrêmes peuvent donc différer d’un calcul exact.",
    ],
    faqs: [
      {
        question: "Et si a vaut 0 ?",
        answer: "Il n’y a alors plus de terme en x² et l’équation est du premier degré : bx + c = 0, dont l’unique solution est x = −c ÷ b. Le calculateur exige un a non nul, car la formule de résolution diviserait par zéro.",
      },
      {
        question: "Que signifie un discriminant négatif ?",
        answer: "La parabole ne coupe jamais l’axe des abscisses : il n’y a donc aucune solution réelle. Les deux solutions sont des nombres complexes qui ne diffèrent que par le signe de leur partie imaginaire.",
      },
      {
        question: "Pourquoi le calculateur n’applique-t-il pas directement la formule du manuel ?",
        answer: "Quand b² est bien plus grand que 4ac, −b + √D soustrait deux nombres presque égaux et perd des chiffres. La forme stable calcule d’abord la plus grande racine, puis obtient la plus petite à partir du produit des racines, c ÷ a, ce qui conserve toute la précision.",
      },
    ],
    sourcesUsedFor: ["La formule de résolution et la façon dont le discriminant prédit le nombre et la nature des solutions."],
  },
  text: {
    a: "Coefficient a",
    aHelp: "Le nombre devant x². Il ne peut pas valoir 0.",
    b: "Coefficient b",
    bHelp: "Le nombre devant x. Mettez 0 s’il n’y a pas de terme en x.",
    c: "Constante c",
    cHelp: "Le nombre sans x. Mettez 0 s’il n’y en a pas.",
    aZero: "Le coefficient a ne peut pas valoir 0. Avec a = 0, l’équation est du premier degré et non du second.",
    roots: "Racines",
    twoRoots: "x₁ = {x1} ; x₂ = {x2}",
    oneRoot: "x = {x} (racine double)",
    complexRoots: "x = {re} ± {im}i",
    imaginaryRoots: "x = ±{im}i",
    discriminant: "Discriminant (b² − 4ac)",
    meaning: "Signification du discriminant",
    meanings: {
      positive: "Positif : deux racines réelles distinctes",
      zero: "Nul : une racine réelle double",
      negative: "Négatif : aucune racine réelle, deux racines complexes conjuguées",
    },
    vertex: "Sommet (h, k)",
    vertexValue: "({h} ; {k})",
    axis: "Axe de symétrie",
    axisValue: "x = {h}",
    sum: "Somme des racines (−b/a)",
    product: "Produit des racines (c/a)",
    opensUp: "La parabole est tournée vers le haut : le sommet est donc son point le plus bas.",
    opensDown: "La parabole est tournée vers le bas : le sommet est donc son point le plus haut.",
  },
};

export default fr;
