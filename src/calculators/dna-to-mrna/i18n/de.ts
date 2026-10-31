import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaToMrnaText } from "../text/en";

const leftover = {
  zero: "{n} Basen am Ende bilden kein vollständiges Codon und werden nicht translatiert.",
  one: "{n} Base am Ende bildet kein vollständiges Codon und wird nicht translatiert.",
  two: "{n} Basen am Ende bilden kein vollständiges Codon und werden nicht translatiert.",
  few: "{n} Basen am Ende bilden kein vollständiges Codon und werden nicht translatiert.",
  many: "{n} Basen am Ende bilden kein vollständiges Codon und werden nicht translatiert.",
  other: "{n} Basen am Ende bilden kein vollständiges Codon und werden nicht translatiert.",
};

const de: CalculatorTranslation<DnaToMrnaText> = {
  content: {
    title: "Rechner für DNA in mRNA und Protein",
    shortTitle: "DNA in mRNA",
    summary: "Transkribieren Sie eine DNA-Sequenz in mRNA und übersetzen Sie sie mit dem Standard-Code in ein Protein – mit Gegenstrang und GC-Gehalt.",
    metaTitle: "Rechner für DNA in mRNA – Transkription und Translation",
    metaDescription: "Wandeln Sie einen codierenden oder codogenen DNA-Strang in mRNA und dann in ein Protein im Ein- und Dreibuchstabencode um – mit Standard-Code und GC-Gehalt.",
    keywords: ["DNA in mRNA", "Transkription", "Translation", "Codon", "genetischer Code", "revers komplementär", "Proteinsequenz", "Aminosäuren", "GC-Gehalt"],
    intro: [
      "Ein Gen wird in Boten-RNA (mRNA) umgeschrieben (Transkription), und die mRNA wird in Schritten von je drei Basen gelesen, um ein Protein aufzubauen (Translation). Dieses Werkzeug führt beide Schritte für eine eingefügte DNA-Sequenz aus und verwendet dabei den genetischen Standard-Code, den die meisten Organismen gemeinsam haben.",
      "Die mRNA hat dieselbe Sequenz wie der codierende Strang (Sense-Strang), nur mit Uracil (U) statt Thymin (T). Haben Sie stattdessen den codogenen Strang (Matrizen- oder Antisense-Strang), ist die mRNA dessen reverses Komplement. Sie erhalten außerdem den komplementären DNA-Strang, das Protein im Ein- und Dreibuchstabencode, die Anzahl der Codons und den GC-Gehalt.",
    ],
    howToUse: [
      "Fügen Sie die DNA-Sequenz ein. Groß- und Kleinschreibung funktionieren beide; Leerzeichen, Zeilenumbrüche und Positionsnummern aus einer Sequenzdatei werden übersprungen.",
      "Geben Sie an, ob die Sequenz der codierende oder der codogene Strang ist. Beide werden 5′→3′ gelesen, wie Sequenzen üblicherweise geschrieben werden.",
      "Wählen Sie, wo die Translation beginnt: bei der ersten Base oder beim ersten AUG-Startcodon der mRNA.",
      "Wählen Sie, ob die Translation am ersten Stoppcodon endet oder weiterliest und jeden Stopp mit * markiert.",
    ],
    formulas: [
      {
        title: "Transkription (codierender Strang)",
        expression: "mRNA = codierender Strang mit T → U",
        explanation: "Die mRNA wird am codogenen Strang gebildet und stimmt daher Base für Base mit dem codierenden Strang überein, nur verwendet RNA U statt T.",
      },
      {
        title: "Transkription (codogener Strang)",
        expression: "mRNA = reverses Komplement des codogenen Strangs, mit T → U",
        explanation: "Jede Base wird gepaart (A–U, T–A, C–G, G–C) und das Ergebnis umgekehrt, sodass es 5′→3′ gelesen wird.",
      },
      {
        title: "Translation",
        expression: "Codon (3 Basen) → Aminosäure, vom Start bis zum ersten UAA, UAG oder UGA",
        explanation: "Die Codons werden im genetischen Standard-Code (NCBI-Translationstabelle 1) nachgeschlagen. AUG codiert für Methionin und ist das übliche Startcodon.",
      },
      {
        title: "GC-Gehalt",
        expression: "GC % = (G + C) ÷ Basen insgesamt × 100",
        explanation: "Der Anteil der Basen in der DNA, die Guanin oder Cytosin sind. Er ist für beide Stränge gleich.",
      },
    ],
    examples: [
      {
        title: "Ein codierender Strang, translatiert ab dem ersten AUG",
        steps: [
          "T durch U ersetzen: GCAUGCCGUGGAAAUAGC.",
          "Das erste AUG beginnt bei Base 3, das Leseraster ist also AUG CCG UGG AAA UAG, und eine Base (C) bleibt übrig.",
          "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = Stopp.",
          "Protein: MPWK (Met-Pro-Trp-Lys).",
        ],
      },
      {
        title: "Ein codogener Strang",
        steps: [
          "Reverses Komplement von TCACTTAGCCAT: ATGGCTAAGTGA.",
          "T durch U ersetzen: AUG GCU AAG UGA.",
          "AUG = Met, GCU = Ala, AAG = Lys, UGA = Stopp, ergibt MAK.",
        ],
      },
      {
        title: "Über Stoppcodons hinweg lesen",
        steps: [
          "Großbuchstaben, Leerzeichen entfernt und T → U: AUG UAA CAG UGG UAG.",
          "AUG = Met, UAA = Stopp, CAG = Gln, UGG = Trp, UAG = Stopp.",
          "Beim Weiterlesen wird das Protein als M*QW* angezeigt.",
        ],
      },
    ],
    assumptions: [
      "Es wird der genetische Standard-Code (NCBI-Translationstabelle 1) verwendet. Mitochondrien und einige Mikroben nutzen andere Codes, in denen einige Codons etwas anderes bedeuten.",
      "Die Sequenz wird als ein durchgehender codierender Bereich behandelt. Introns, Spleißen, RNA-Editing und andere Prozessierung in echten Genen werden nicht modelliert.",
      "Beim Start am ersten AUG wird nur AUG als Startcodon verwendet; die seltenen alternativen Startcodons werden nicht berücksichtigt.",
      "Beide Stränge werden 5′→3′ eingegeben und angezeigt. Der komplementäre Strang wird als reverses Komplement angezeigt, damit er ebenfalls 5′→3′ gelesen wird.",
    ],
    faqs: [
      {
        question: "Welchen Strang soll ich wählen?",
        answer: "Die meisten Datenbanken führen den codierenden Strang (Sense-Strang), dessen Sequenz bis auf U statt T der mRNA entspricht. Wählen Sie den codogenen Strang (Antisense-Strang) nur, wenn Ihre Sequenz der Strang ist, den die RNA-Polymerase abliest, also der zur mRNA komplementäre Strang.",
      },
      {
        question: "Warum endet das Protein zu früh?",
        answer: "Die Translation endet am ersten Stoppcodon (UAA, UAG oder UGA) im Leseraster. Haben Sie ein längeres Protein erwartet, prüfen Sie, ob Sie den richtigen Strang und Startpunkt gewählt haben, oder schalten Sie auf Weiterlesen um, um zu sehen, wo die Stopps liegen.",
      },
      {
        question: "Was sind die übrig gebliebenen Basen am Ende?",
        answer: "Codons sind drei Basen lang. Ist die Anzahl der Basen nach dem Start kein Vielfaches von drei, können die letzten ein oder zwei Basen kein Codon bilden und werden daher nicht translatiert.",
      },
    ],
    sourcesUsedFor: [
      "Die Codontabelle: welche Aminosäure jedes der 64 Codons codiert, und die Stoppcodons UAA, UAG und UGA.",
      "Transkription vom codogenen Strang, die Übereinstimmung der mRNA mit dem codierenden Strang (U statt T) und das Lesen der Codons von einem Startcodon bis zu einem Stoppcodon.",
    ],
  },
  text: {
    sequence: "DNA-Sequenz",
    sequenceHelp: "Die Buchstaben A, C, G und T, groß oder klein geschrieben. Leerzeichen, Zeilenumbrüche und Positionsnummern werden ignoriert.",
    strand: "Die Sequenz ist …",
    strands: {
      coding: "der codierende Strang (Sense), 5′→3′",
      template: "der codogene Strang (Matrize, Antisense), 5′→3′",
    },
    frame: "Translation beginnen bei",
    frames: {
      first: "der ersten Base",
      aug: "dem ersten AUG (Startcodon)",
    },
    stops: "Bei einem Stoppcodon",
    stopModes: {
      stop: "Translation beenden",
      readThrough: "Weiterlesen und mit * markieren",
    },
    errors: {
      invalidChar: "„{char}“ (Zeichen {position}) ist keine DNA-Base. Verwenden Sie nur A, C, G und T.",
      empty: "Geben Sie mindestens eine Base ein (A, C, G oder T).",
      tooLong: "Geben Sie höchstens {max} Basen ein.",
      noAug: "Die mRNA enthält kein AUG-Startcodon. Wählen Sie „der ersten Base“, um sie trotzdem zu translatieren.",
    },
    result: "mRNA (5′→3′)",
    caption: "In Codons gruppiert ab dem Beginn des Leserasters.",
    complement: "Komplementärer DNA-Strang (5′→3′)",
    proteinOne: "Protein (Einbuchstabencode)",
    proteinThree: "Protein (Dreibuchstabencode)",
    noProtein: "(kein vollständiges Codon translatiert)",
    length: "Länge der mRNA",
    bases: "Basen",
    codonsInFrame: "Vollständige Codons im Leseraster",
    codonsTranslated: "Translatierte Codons",
    aminoAcids: "Aminosäuren im Protein",
    gc: "GC-Gehalt",
    notes: {
      stopped: "Die Translation endete bei Codon {codon} ({stop}), einem Stoppcodon. Das Protein oben endet davor.",
      noStop: "Vor dem Ende der Sequenz wurde kein Stoppcodon erreicht, daher ist das Protein möglicherweise unvollständig.",
      readThrough: "Stoppcodons wurden überlesen und als * angezeigt (Ter im Dreibuchstabencode).",
      augStart: "Das erste AUG beginnt bei Base {position} der mRNA. Die Basen davor werden nicht translatiert.",
      leftover,
      template: "Die mRNA ist das reverse Komplement des eingegebenen codogenen Strangs, mit U statt T.",
      general: "Hier wird der genetische Standard-Code (NCBI-Tabelle 1) verwendet; Introns, Spleißen und alternative Startcodons werden nicht berücksichtigt. Echte Gene können einen anderen Code oder eine Prozessierung erfordern.",
    },
  },
};

export default de;
