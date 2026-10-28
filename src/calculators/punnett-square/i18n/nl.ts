import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PunnettText } from "../text/en";

const nl: CalculatorTranslation<PunnettText> = {
  content: {
    title: "Punnett-vierkantcalculator",
    shortTitle: "Punnett-vierkant",
    summary: "Kruis twee ouders voor één of twee genen en krijg het Punnett-vierkant, de genotype- en fenotypeverhouding en de kans op elk kenmerk.",
    metaTitle: "Punnett-vierkantcalculator – genotype en fenotype",
    metaDescription:
      "Vul twee ouderlijke genotypen in, zoals AaBb × AaBb, om het Punnett-vierkant te maken en de genotype- en fenotypeverhouding en de kans op elk kenmerk te zien.",
    keywords: ["punnett-vierkant", "kruisingsschema", "monohybride kruising", "dihybride kruising", "genotypeverhouding", "fenotypeverhouding", "erfelijkheid Mendel", "9:3:3:1"],
    intro: [
      "Een Punnett-vierkant zet alle gameten die de ene ouder kan maken langs de ene kant en alle gameten van de andere ouder langs de andere kant. Elk vakje in het rooster is één even waarschijnlijke combinatie, dus door vakjes te tellen krijg je het verwachte aandeel van elk genotype bij de nakomelingen.",
      "Deze calculator werkt met één gen (een monohybride kruising zoals Aa × aa) of twee genen (een dihybride kruising zoals AaBb × AaBb). Hij tekent het rooster en zet het om in genotypeverhoudingen, fenotypeverhoudingen en de kans op elke combinatie van kenmerken.",
    ],
    howToUse: [
      "Kies een letter voor elk gen. Schrijf het dominante allel met een hoofdletter en het recessieve allel met een kleine letter.",
      "Typ het genotype van ouder 1, bijvoorbeeld Aa voor één gen of AaBb voor twee genen.",
      "Typ het genotype van ouder 2 met dezelfde letters, bijvoorbeeld aa of Aabb.",
      "Lees de fenotypeverhouding af en bekijk daarna het rooster en de tabellen met elk genotype en de kans erop.",
    ],
    formulas: [
      { title: "Gameten", expression: "gameten per ouder = 2ⁿ bij n genen", explanation: "Elke gameet draagt één allel van elk gen. Met twee genen maakt een ouder zoals AaBb de gameten AB, Ab, aB en ab in gelijke delen." },
      { title: "Kans op een genotype", expression: "P = vakjes met dat genotype ÷ totaal aantal vakjes", explanation: "Een kruising met één gen heeft 4 vakjes en een kruising met twee genen 16, allemaal even waarschijnlijk." },
      { title: "Productregel", expression: "P(A_ en B_) = P(A_) × P(B_)", explanation: "Bij onafhankelijke overerving gedragen de genen zich los van elkaar. Bij AaBb × AaBb vertoont 3/4 × 3/4 = 9/16 van de nakomelingen beide dominante kenmerken." },
    ],
    examples: [
      {
        title: "Twee heterozygote ouders, één gen",
        steps: ["Elke ouder maakt evenveel A- als a-gameten.", "Het rooster geeft AA, Aa, Aa en aa: een genotypeverhouding van 1 : 2 : 1.", "AA en Aa vertonen allebei het dominante kenmerk, dus de fenotypeverhouding is 3 : 1 (75% en 25%)."],
      },
      {
        title: "Een klassieke dihybride kruising",
        steps: ["Elke ouder maakt vier gameten: AB, Ab, aB en ab.", "Het rooster van 4 × 4 heeft 16 vakjes en 9 verschillende genotypen.", "Gegroepeerd naar kenmerken: 9 A_B_, 3 A_bb, 3 aaB_ en 1 aabb, dus de verhouding is 9 : 3 : 3 : 1."],
      },
      {
        title: "Terugkruising met een dubbel recessieve ouder",
        steps: ["Ouder 2 kan alleen ab-gameten maken, dus elke nakomeling vertoont de allelen die hij van ouder 1 kreeg.", "De vier gameten van ouder 1 zijn even waarschijnlijk, dus de vier fenotypen verschijnen in een verhouding van 1 : 1 : 1 : 1, elk 25%."],
      },
    ],
    assumptions: [
      "Volledige dominantie: één dominant allel is genoeg om het dominante kenmerk te tonen. Onvolledige dominantie, codominantie en meerdere allelen (zoals bij de ABO-bloedgroepen) worden niet gemodelleerd.",
      "Bij twee genen wordt aangenomen dat ze onafhankelijk overerven. Gekoppelde genen op hetzelfde chromosoom volgen deze verhoudingen niet.",
      "Elk gen heeft precies twee allelen en is niet geslachtsgebonden. Elke combinatie van gameten heeft naar aanname dezelfde overlevingskans.",
      "De resultaten zijn kansen per nakomeling. Bij een klein aantal nakomelingen kan de verhouding puur door toeval afwijken van de verwachte.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen de genotype- en de fenotypeverhouding?", answer: "De genotypeverhouding telt de combinaties van allelen, zoals AA : Aa : aa = 1 : 2 : 1. De fenotypeverhouding telt de zichtbare kenmerken. Bij volledige dominantie zien AA en Aa er hetzelfde uit, dus dezelfde kruising geeft een fenotypeverhouding van 3 : 1." },
      { question: "Waarom toont het rooster bij sommige ouders twee keer dezelfde gameet?", answer: "Een ouder zoals AA maakt alleen A-gameten, maar het rooster houdt één rij of kolom per allel aan, zodat elk vakje dezelfde kans heeft. Dubbele kopjes betekenen gewoon dat die gameet twee keer zo waarschijnlijk is." },
      { question: "Kan ik drie genen invullen?", answer: "Hier niet. Een kruising met drie genen heeft 64 vakjes nodig, en het is eenvoudiger om de kansen per gen te vermenigvuldigen met de productregel. Reken elk gen apart door met de calculator en vermenigvuldig de kansen die je nodig hebt." },
    ],
    sourcesUsedFor: ["Dominantie, segregatie, onafhankelijke overerving en de verhouding 9 : 3 : 3 : 1 bij een dihybride kruising."],
  },
  text: {
    parent1: "Genotype van ouder 1",
    parent2: "Genotype van ouder 2",
    parentHelp: "Eén of twee genen, twee letters per gen: een hoofdletter voor het dominante allel, een kleine letter voor het recessieve. Voorbeelden: Aa, AaBb, AABb.",
    parent2Help: "Gebruik dezelfde genletters als bij ouder 1, bijv. aa of aabb.",
    errors: {
      invalidChar: "“{token}” is niet toegestaan. Gebruik alleen letters, zoals Aa of AaBb.",
      length: "Vul één gen in (2 letters, bijv. Aa) of twee genen (4 letters, bijv. AaBb).",
      pairMismatch: "“{token}” mengt twee genen. Elk gen schrijf je als twee vormen van dezelfde letter, zoals Aa, AA of aa.",
      duplicateGene: "Het gen {token} komt twee keer voor. Gebruik voor elk gen een andere letter, bijv. AaBb.",
      geneCount: "Beide ouders moeten hetzelfde aantal genen hebben.",
      geneMismatch: "Gebruik dezelfde genletters als bij ouder 1 ({genes}).",
    },
    listSeparator: ", ",
    dominantTrait: "dominant {gene}",
    recessiveTrait: "recessief {gene}",
    phenotypeRatio: "Fenotypeverhouding",
    caption: "In de volgorde {order} (een liggend streepje betekent elk van beide allelen)",
    genotypeRatio: "Genotypeverhouding",
    genotypeOrder: "Genotypen in die volgorde",
    genotypeCount: "Verschillende genotypen",
    phenotypeCount: "Verschillende fenotypen",
    probabilityOf: "Kans op nakomelingen met {phenotype}",
    fraction: "{count} van {total}",
    gridCaption: "Punnett-vierkant: gameten van ouder 1 langs de zijkant, van ouder 2 langs de bovenkant",
    gridCorner: "Ouder 1 ↓ · Ouder 2 →",
    genotypeTable: "Genotypen van de nakomelingen",
    phenotypeTable: "Fenotypen van de nakomelingen",
    columns: { genotype: "Genotype", phenotype: "Fenotype", description: "Zichtbare kenmerken", cells: "Vakjes", probability: "Kans" },
    singlePhenotype: "Alle nakomelingen uit deze kruising vertonen dezelfde kenmerken.",
    linkageNote: "Aangenomen wordt dat de twee genen onafhankelijk overerven, zoals genen op verschillende chromosomen doen. Genen die dicht bij elkaar op één chromosoom liggen, worden vaak samen overgeërfd, wat deze verhoudingen verandert.",
    note: "Gaat uit van volledige dominantie: één dominant allel is genoeg om het dominante kenmerk te tonen. De verhoudingen zijn kansen per nakomeling, dus echte nesten of gezinnen kunnen door toeval afwijken.",
  },
};

export default nl;
