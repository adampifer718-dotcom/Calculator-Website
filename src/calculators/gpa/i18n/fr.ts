import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GpaText } from "../text/en";

const fr: CalculatorTranslation<GpaText> = {
  content: {
    title: "Calculateur de GPA",
    shortTitle: "GPA",
    summary: "Calculez une moyenne pondérée par les crédits (GPA) à partir de notes en lettres ou de points, et mettez à jour votre GPA cumulé.",
    metaTitle: "Calculateur de GPA – Moyenne semestrielle et cumulée",
    metaDescription:
      "Calculez le GPA de votre semestre à partir des notes en lettres et des crédits sur une échelle de 4,0 ou 4,3, puis combinez-le à votre GPA actuel.",
    keywords: ["calcul gpa", "gpa", "grade point average", "moyenne américaine", "gpa cumulé", "échelle 4.0", "conversion note gpa"],
    intro: [
      "Le grade point average (GPA), la moyenne utilisée dans les universités américaines, pondère les points de chaque cours par ses crédits : un cours de 4 crédits compte davantage qu’un cours de 2 crédits.",
      "Listez vos cours avec leurs notes et leurs crédits pour obtenir le GPA du semestre. Ajoutez votre GPA actuel et les crédits déjà validés pour connaître votre nouveau GPA cumulé.",
    ],
    howToUse: [
      "Choisissez l’échelle de 4,0 ou de 4,3 utilisée par votre établissement (elles ne diffèrent que par la valeur du A+).",
      "Saisissez un cours par ligne avec sa note et ses crédits, par exemple « Biologie B+ 3 ».",
      "Si vous le souhaitez, saisissez votre GPA cumulé actuel et les crédits correspondants.",
      "Consultez le GPA du semestre, le nouveau GPA cumulé et le tableau détaillé par cours.",
    ],
    formulas: [
      { title: "GPA du semestre", expression: "GPA = Σ(points de la note × crédits) ÷ Σ crédits", explanation: "Les points pondérés (quality points) d’un cours sont ses points de note multipliés par ses crédits." },
      { title: "GPA cumulé", expression: "Nouveau GPA = (GPA actuel × crédits actuels + points pondérés du semestre) ÷ (crédits actuels + crédits du semestre)", explanation: "Combine votre parcours jusqu’ici avec le nouveau semestre, en pondérant par les crédits." },
      { title: "Notes en lettres (échelle de 4,0)", expression: "A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0", explanation: "L’échelle américaine courante. Sur l’échelle de 4,3, A+ = 4,3." },
    ],
    examples: [
      {
        title: "Quatre cours sur une échelle de 4,0",
        steps: ["Points pondérés : 4,0 × 3 + 3,3 × 4 + 3,7 × 3 + 2,0 × 2 = 40,3", "Crédits : 3 + 4 + 3 + 2 = 12", "GPA = 40,3 ÷ 12 ≈ 3,36"],
      },
      {
        title: "Nouveau semestre ajouté à un GPA de 3,2 sur 45 crédits",
        steps: ["Semestre : (4,0 × 4 + 3,0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3,57", "Cumulé : (3,2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3,25"],
      },
    ],
    assumptions: [
      "Les notes en lettres suivent l’échelle américaine courante sur 4 points ; les établissements qui utilisent d’autres échelles, des plus et des moins ou une pondération des cours avancés (honors) peuvent différer.",
      "Les cours validés sans note (pass/fail) et les cours abandonnés doivent être exclus, car ils ne comptent généralement pas dans le GPA.",
      "Les résultats sont arrondis à deux décimales pour l’affichage ; votre établissement peut arrondir ou tronquer différemment.",
    ],
    faqs: [
      { question: "Quelle est la différence entre les échelles de 4,0 et de 4,3 ?", answer: "Seul le A+ change : certains établissements lui attribuent 4,0, d’autres 4,3. Toutes les autres notes ont les mêmes points." },
      { question: "Puis-je saisir des pourcentages ou des notes chiffrées ?", answer: "Saisissez directement les points de la note (par exemple 3,5) au lieu d’une lettre. La conversion des pourcentages en points dépend de la politique de votre établissement." },
      { question: "Pourquoi un cours avec plus de crédits influence-t-il davantage mon GPA ?", answer: "Le GPA est pondéré par les crédits : chaque heure de crédit compte autant. Un A dans un cours de 4 crédits rapporte deux fois plus de points de qualité qu’un A dans un cours de 2 crédits : il rapproche davantage votre GPA de 4,0, sans que l’effet soit exactement doublé." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    scale: "Échelle de notation",
    scales: { "4.0": "Échelle de 4,0 (A+ = 4,0)", "4.3": "Échelle de 4,3 (A+ = 4,3)" },
    courses: "Cours",
    coursesHelp: "Un cours par ligne : un nom facultatif, puis la note (une lettre comme B+ ou des points comme 3,3), puis les crédits.",
    defaultCourses: "Mathématiques A 4\nChimie B+ 4\nHistoire A- 3\nArts plastiques C 2",
    priorGpa: "GPA cumulé actuel",
    priorGpaHelp: "Facultatif. Laissez les deux champs vides pour ne voir que ce semestre.",
    priorCredits: "Crédits déjà validés",
    errors: {
      empty: "Saisissez au moins un cours.",
      tooMany: "Saisissez au maximum {max} cours.",
      line: "Ligne {line} : indiquez une note et les crédits, par exemple « Biologie B+ 3 ».",
      grade: "Ligne {line} : « {grade} » n’est pas une note de cette échelle.",
      credits: "Ligne {line} : les crédits doivent être supérieurs à 0.",
      priorBoth: "Saisissez à la fois votre GPA actuel et les crédits correspondants, ou aucun des deux.",
      priorRange: "Saisissez un GPA compris entre 0 et {max} sur cette échelle.",
    },
    gpa: "GPA du semestre",
    caption: "{credits} crédits et {points} points pondérés.",
    cumulative: "Nouveau GPA cumulé",
    totalCredits: "Crédits du semestre",
    qualityPoints: "Points pondérés",
    tableCaption: "Cours",
    columns: { course: "Cours", points: "Points de la note", credits: "Crédits", quality: "Points pondérés" },
    unnamed: "Cours {line}",
    note: "Les notes en lettres suivent l’échelle américaine courante sur 4 points (A− = 3,7, B+ = 3,3 … D− = 0,7, F = 0). Vérifiez l’échelle de votre établissement ; certains pondèrent différemment les cours honors ou AP.",
  },
};

export default fr;
