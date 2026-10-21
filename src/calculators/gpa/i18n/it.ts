import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GpaText } from "../text/en";

const it: CalculatorTranslation<GpaText> = {
  content: {
    title: "Calcolatore della media GPA",
    shortTitle: "GPA",
    summary: "Calcola una media dei voti (GPA) ponderata per crediti a partire da voti in lettere o punti voto e aggiorna il tuo GPA cumulativo.",
    metaTitle: "Calcolatore GPA – Media del semestre e cumulativa",
    metaDescription:
      "Calcola il GPA del semestre da voti in lettere e crediti su scala 4.0 o 4.3, poi combinalo con il GPA attuale per ottenere il nuovo GPA cumulativo.",
    keywords: ["gpa", "media dei voti", "gpa universitario", "gpa cumulativo", "gpa semestrale", "scala 4.0", "crediti"],
    intro: [
      "La media dei voti (GPA, grade point average) pondera i punti voto di ogni corso in base ai suoi crediti, quindi un corso da 4 crediti conta più di uno da 2.",
      "Elenca i tuoi corsi con voti e crediti per vedere il GPA di questo semestre. Aggiungi il GPA attuale e i crediti già completati per vedere il nuovo GPA cumulativo.",
    ],
    howToUse: [
      "Scegli la scala 4.0 o 4.3 usata dalla tua scuola (differiscono solo per il valore di A+).",
      "Inserisci un corso per riga con voto e crediti, ad esempio «Biologia B+ 3».",
      "Se vuoi, inserisci il tuo GPA cumulativo attuale e i crediti a cui si riferisce.",
      "Leggi il GPA del semestre, il nuovo GPA cumulativo e la tabella per corso.",
    ],
    formulas: [
      { title: "GPA del semestre", expression: "GPA = Σ(punti voto × crediti) ÷ Σ crediti", explanation: "I quality point di ogni corso sono i suoi punti voto moltiplicati per i crediti." },
      { title: "GPA cumulativo", expression: "Nuovo GPA = (GPA attuale × crediti attuali + quality point del semestre) ÷ (crediti attuali + crediti del semestre)", explanation: "Combina il percorso fin qui con il nuovo semestre, ponderando per i crediti." },
      { title: "Voti in lettere (scala 4.0)", expression: "A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0", explanation: "La scala statunitense più comune. Sulla scala 4.3, A+ = 4,3." },
    ],
    examples: [
      {
        title: "Quattro corsi su scala 4.0",
        steps: ["Quality point: 4,0 × 3 + 3,3 × 4 + 3,7 × 3 + 2,0 × 2 = 40,3", "Crediti: 3 + 4 + 3 + 2 = 12", "GPA = 40,3 ÷ 12 ≈ 3,36"],
      },
      {
        title: "Nuovo semestre aggiunto a un GPA di 3,2 su 45 crediti",
        steps: ["Semestre: (4,0 × 4 + 3,0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3,57", "Cumulativo: (3,2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3,25"],
      },
    ],
    assumptions: [
      "I voti in lettere seguono la comune scala statunitense a 4 punti; le scuole che usano altre scale, i più o una ponderazione per i corsi avanzati possono differire.",
      "I corsi con esito pass/fail e quelli abbandonati vanno esclusi, perché di solito non contano per il GPA.",
      "I risultati sono arrotondati a due decimali per la visualizzazione; la tua scuola potrebbe arrotondare o troncare in modo diverso.",
    ],
    faqs: [
      { question: "Qual è la differenza tra la scala 4.0 e la scala 4.3?", answer: "Solo A+: alcune scuole le assegnano 4,0, altre 4,3. Tutti gli altri voti valgono gli stessi punti." },
      { question: "Posso inserire percentuali o voti numerici?", answer: "Inserisci direttamente i punti voto (ad esempio 3,5) al posto della lettera. La conversione delle percentuali in punti voto dipende dalle regole della tua scuola." },
      { question: "Perché un corso con più crediti cambia di più il mio GPA?", answer: "Il GPA è ponderato per crediti, quindi ogni credito conta allo stesso modo. Una A in un corso da 4 crediti aggiunge il doppio dei quality point di una A da 2 crediti, quindi avvicina di più il GPA a 4,0, anche se non esattamente del doppio." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    scale: "Scala dei voti",
    scales: { "4.0": "Scala 4.0 (A+ = 4,0)", "4.3": "Scala 4.3 (A+ = 4,3)" },
    courses: "Corsi",
    coursesHelp: "Un corso per riga: un nome facoltativo, poi il voto (una lettera come B+ o i punti voto come 3,3), poi i crediti.",
    defaultCourses: "Analisi A 4\nChimica B+ 4\nStoria A- 3\nArte C 2",
    priorGpa: "GPA cumulativo attuale",
    priorGpaHelp: "Facoltativo. Lascia vuote entrambe le caselle per vedere solo questo semestre.",
    priorCredits: "Crediti già completati",
    errors: {
      empty: "Inserisci almeno un corso.",
      tooMany: "Inserisci al massimo {max} corsi.",
      line: "Riga {line}: scrivi un voto e i crediti, ad esempio «Biologia B+ 3».",
      grade: "Riga {line}: «{grade}» non è un voto di questa scala.",
      credits: "Riga {line}: i crediti devono essere maggiori di 0.",
      priorBoth: "Inserisci sia il GPA attuale sia i crediti a cui si riferisce, oppure nessuno dei due.",
      priorRange: "Inserisci un GPA tra 0 e {max} su questa scala.",
    },
    gpa: "GPA del semestre",
    caption: "{credits} crediti e {points} quality point.",
    cumulative: "Nuovo GPA cumulativo",
    totalCredits: "Crediti di questo semestre",
    qualityPoints: "Quality point",
    tableCaption: "Corsi",
    columns: { course: "Corso", points: "Punti voto", credits: "Crediti", quality: "Quality point" },
    unnamed: "Corso {line}",
    note: "I voti in lettere usano la comune scala statunitense a 4 punti (A− = 3,7, B+ = 3,3 … D− = 0,7, F = 0). Verifica la scala della tua scuola; alcune ponderano diversamente i corsi honors o AP.",
  },
};

export default it;
