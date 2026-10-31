import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaToMrnaText } from "../text/en";

const leftover = "{n} basen aan het eind vormen geen volledig codon en worden niet vertaald.";

const nl: CalculatorTranslation<DnaToMrnaText> = {
  content: {
    title: "DNA-naar-mRNA- en eiwitvertaler",
    shortTitle: "DNA naar mRNA",
    summary: "Transcribeer een DNA-sequentie naar mRNA en vertaal die met de standaard genetische code naar een eiwit, met de complementaire streng en het GC-gehalte.",
    metaTitle: "DNA naar mRNA – transcriberen en vertalen naar eiwit",
    metaDescription:
      "Zet een coderende of template-DNA-streng om in mRNA en daarna in een eiwit in één- en drieletter­code met de standaard genetische code, plus het GC-gehalte.",
    keywords: ["dna naar mrna", "transcriptie", "translatie", "codon", "genetische code", "reverse complement", "eiwitsequentie", "aminozuren"],
    intro: [
      "Een gen wordt overgeschreven naar messenger-RNA (transcriptie), en het mRNA wordt per drie basen gelezen om een eiwit op te bouwen (translatie). Deze tool doet beide stappen voor een DNA-sequentie die je plakt, met de standaard genetische code die de meeste organismen delen.",
      "Het mRNA heeft dezelfde sequentie als de coderende (sense) streng, met uracil (U) in plaats van thymine (T). Heb je in plaats daarvan de template- (antisense) streng, dan is het mRNA daarvan het reverse complement. Je krijgt ook de complementaire DNA-streng, het eiwit in één- en drielettercode, het aantal codons en het GC-gehalte.",
    ],
    howToUse: [
      "Plak de DNA-sequentie. Hoofd- en kleine letters werken allebei, en spaties, regeleinden en positienummers uit een sequentiebestand worden overgeslagen.",
      "Geef aan of de sequentie de coderende streng of de template-streng is. Beide worden 5′→3′ gelezen, zoals sequenties gewoonlijk worden geschreven.",
      "Kies waar de translatie begint: bij de eerste base of bij het eerste AUG-startcodon in het mRNA.",
      "Kies of de translatie stopt bij het eerste stopcodon, of doorleest en elke stop markeert met *.",
    ],
    formulas: [
      { title: "Transcriptie (coderende streng)", expression: "mRNA = coderende streng met T → U", explanation: "Het mRNA wordt gevormd tegenover de template-streng, dus komt base voor base overeen met de coderende streng, behalve dat RNA U gebruikt in plaats van T." },
      { title: "Transcriptie (template-streng)", expression: "mRNA = reverse complement van de template, met T → U", explanation: "Elke base wordt gepaard (A–U, T–A, C–G, G–C) en het resultaat wordt omgedraaid zodat het 5′→3′ leest." },
      { title: "Translatie", expression: "codon (3 basen) → aminozuur, vanaf de start tot de eerste UAA, UAG of UGA", explanation: "Codons worden opgezocht in de standaard genetische code (NCBI-translatietabel 1). AUG codeert voor methionine en is het gebruikelijke startcodon." },
      { title: "GC-gehalte", expression: "GC % = (G + C) ÷ totaal aantal basen × 100", explanation: "Het aandeel basen in het DNA dat guanine of cytosine is. Het is voor beide strengen gelijk." },
    ],
    examples: [
      {
        title: "Een coderende streng, vertaald vanaf het eerste AUG",
        steps: [
          "Vervang T door U: GCAUGCCGUGGAAAUAGC.",
          "Het eerste AUG begint bij base 3, dus het leesraam is AUG CCG UGG AAA UAG, met één base (C) over.",
          "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = stop.",
          "Eiwit: MPWK (Met-Pro-Trp-Lys).",
        ],
      },
      {
        title: "Een template-streng",
        steps: [
          "Reverse complement van TCACTTAGCCAT: ATGGCTAAGTGA.",
          "Vervang T door U: AUG GCU AAG UGA.",
          "AUG = Met, GCU = Ala, AAG = Lys, UGA = stop, dus MAK.",
        ],
      },
      {
        title: "Doorlezen bij stopcodons",
        steps: [
          "Hoofdletters, spaties verwijderd en T → U: AUG UAA CAG UGG UAG.",
          "AUG = Met, UAA = stop, CAG = Gln, UGG = Trp, UAG = stop.",
          "Met doorlezen wordt het eiwit weergegeven als M*QW*.",
        ],
      },
    ],
    assumptions: [
      "De standaard genetische code (NCBI-translatietabel 1) wordt gebruikt. Mitochondriën en sommige microben gebruiken andere codes, waarin enkele codons iets anders betekenen.",
      "De sequentie wordt behandeld als één doorlopend coderend gebied. Introns, splicing, RNA-editing en andere bewerkingen in echte genen worden niet gemodelleerd.",
      "Als je bij het eerste AUG begint, geldt alleen AUG als startcodon; de zeldzame alternatieve startcodons worden genegeerd.",
      "Beide strengen worden 5′→3′ ingevoerd en weergegeven. De complementaire streng wordt getoond als reverse complement, zodat die ook 5′→3′ leest.",
    ],
    faqs: [
      { question: "Welke streng moet ik kiezen?", answer: "De meeste databases geven de coderende (sense) streng, waarvan de sequentie overeenkomt met het mRNA, op U in plaats van T na. Kies de template- (antisense) streng alleen als jouw sequentie de streng is die het RNA-polymerase afleest, de streng die complementair is aan het mRNA." },
      { question: "Waarom stopt het eiwit vroeg?", answer: "De translatie eindigt bij het eerste stopcodon (UAA, UAG of UGA) in het leesraam. Verwachtte je een langer eiwit, controleer dan of je de juiste streng en het juiste startpunt hebt gekozen, of schakel over op doorlezen om te zien waar de stops zitten." },
      { question: "Wat zijn de basen die aan het eind overblijven?", answer: "Codons zijn drie basen lang. Is het aantal basen na de start geen veelvoud van drie, dan kunnen de laatste één of twee basen geen codon vormen en worden ze niet vertaald." },
    ],
    sourcesUsedFor: [
      "De codontabel: welk aminozuur elk van de 64 codons codeert, en de stopcodons UAA, UAG en UGA.",
      "Transcriptie vanaf de template-streng, het mRNA dat overeenkomt met de coderende streng met U voor T, en het lezen van codons van een startcodon tot een stopcodon.",
    ],
  },
  text: {
    sequence: "DNA-sequentie",
    sequenceHelp: "De letters A, C, G en T, in hoofd- of kleine letters. Spaties, regeleinden en positienummers worden genegeerd.",
    strand: "De sequentie is de…",
    strands: {
      coding: "Coderende (sense) streng, 5′→3′",
      template: "Template- (antisense) streng, 5′→3′",
    },
    frame: "Begin met vertalen bij",
    frames: {
      first: "De eerste base",
      aug: "Het eerste AUG (startcodon)",
    },
    stops: "Bij een stopcodon",
    stopModes: {
      stop: "Stoppen met vertalen",
      readThrough: "Doorlezen en markeren met *",
    },
    errors: {
      invalidChar: "„{char}” (teken {position}) is geen DNA-base. Gebruik alleen A, C, G en T.",
      empty: "Vul minstens één base in (A, C, G of T).",
      tooLong: "Vul hoogstens {max} basen in.",
      noAug: "Het mRNA bevat geen AUG-startcodon. Kies „De eerste base” om het toch te vertalen.",
    },
    result: "mRNA (5′→3′)",
    caption: "Gegroepeerd in codons vanaf het begin van het leesraam.",
    complement: "Complementaire DNA-streng (5′→3′)",
    proteinOne: "Eiwit (eenlettercode)",
    proteinThree: "Eiwit (drielettercode)",
    noProtein: "(geen volledig codon vertaald)",
    length: "Lengte van het mRNA",
    bases: "basen",
    codonsInFrame: "Volledige codons in het leesraam",
    codonsTranslated: "Vertaalde codons",
    aminoAcids: "Aminozuren in het eiwit",
    gc: "GC-gehalte",
    notes: {
      stopped: "De translatie stopte bij codon {codon} ({stop}), een stopcodon. Het eiwit hierboven eindigt daarvoor.",
      noStop: "Er is geen stopcodon bereikt voor het einde van de sequentie, dus het eiwit is mogelijk onvolledig.",
      readThrough: "Stopcodons zijn doorgelezen en worden weergegeven als * (Ter in de drielettercode).",
      augStart: "Het eerste AUG begint bij base {position} van het mRNA. De basen daarvoor worden niet vertaald.",
      leftover: {
        zero: leftover,
        one: "{n} base aan het eind vormt geen volledig codon en wordt niet vertaald.",
        two: leftover,
        few: leftover,
        many: leftover,
        other: leftover,
      },
      template: "Het mRNA is het reverse complement van de template-streng die je hebt ingevoerd, met U in plaats van T.",
      general: "Dit gebruikt de standaard genetische code (NCBI-tabel 1) en negeert introns, splicing en alternatieve startcodons. Echte genen kunnen een andere code of verdere bewerking vereisen.",
    },
  },
};

export default nl;
