import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VoltageDividerText } from "../text/en";

const nl: CalculatorTranslation<VoltageDividerText> = {
  content: {
    title: "Spanningsdelercalculator",
    shortTitle: "Spanningsdeler",
    summary: "Bereken de uitgangsspanning van een spanningsdeler met twee weerstanden, of de weerstand voor een gewenste spanning, met stroom, vermogen, belastingseffect en de dichtstbijzijnde E24-waarde.",
    metaTitle: "Spanningsdelercalculator – Vout, R1, R2 en belasting",
    metaDescription:
      "Bereken de uitgangsspanning van een resistieve spanningsdeler, of los R1 of R2 op, met stroom, weerstandsvermogen, de belaste uitgang en de dichtstbijzijnde E24-waarde.",
    keywords: ["spanningsdeler", "weerstandsdeler", "vout formule", "spanningsdeler berekenen", "r1 r2 berekenen", "delingsverhouding", "belaste spanningsdeler", "e24-reeks"],
    intro: [
      "Een spanningsdeler bestaat uit twee weerstanden in serie over een spanning. Het punt tussen beide ligt op een vaste fractie van de ingangsspanning, die alleen wordt bepaald door de verhouding van de weerstanden. Spanningsdelers worden gebruikt om een signaal te verlagen voor de ingang van een microcontroller, een instelpunt te maken of een referentie te vormen.",
      "Deze calculator berekent de uitgangsspanning uit beide weerstanden, of de weerstand die je nodig hebt voor een gewenste uitgang. Hij toont ook de stroom door de deler, het vermogen dat elke weerstand dissipeert, wat er gebeurt als er een belasting wordt aangesloten, en de dichtstbijzijnde standaardwaarde uit de E24-reeks.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen: de uitgangsspanning, de onderste weerstand R2 of de bovenste weerstand R1.",
      "Vul de ingangsspanning en de bekende waarden in, en kies voor elke weerstand Ω, kΩ of MΩ.",
      "Vul eventueel de belastingsweerstand in die over de uitgang is aangesloten, om te zien hoeveel die de spanning omlaag trekt.",
      "Lees het resultaat af, de stroom en het vermogen in de deler en, als je een weerstand berekent, de dichtstbijzijnde E24-waarde en de uitgang die die zou geven.",
    ],
    formulas: [
      { title: "Onbelaste uitgang", expression: "Vout = Vin × R2 ÷ (R1 + R2)", explanation: "R1 is de bovenste weerstand (van ingang naar uitgang) en R2 de onderste (van uitgang naar massa)." },
      { title: "Een weerstand berekenen", expression: "R2 = R1 × Vout ÷ (Vin − Vout)\nR1 = R2 × (Vin − Vout) ÷ Vout", explanation: "Omgewerkt uit de vergelijking van de spanningsdeler. Vout moet tussen 0 en Vin liggen." },
      { title: "Stroom en vermogen", expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2", explanation: "Door beide weerstanden loopt dezelfde stroom als er niets op de uitgang is aangesloten." },
      { title: "Belaste uitgang", expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,belast = Vin × R2′ ÷ (R1 + R2′)", explanation: "Een belasting RL staat parallel aan R2, wat de effectieve onderste weerstand en dus de uitgang verlaagt." },
    ],
    examples: [
      {
        title: "12 V over 10 kΩ en 4,7 kΩ",
        steps: ["Vout = 12 × 4,7 ÷ (10 + 4,7) = 56,4 ÷ 14,7", "Vout ≈ 3,8367 V", "I = 12 V ÷ 14,7 kΩ ≈ 0,8163 mA"],
      },
      {
        title: "R2 voor 3,3 V uit 5 V met R1 = 10 kΩ",
        steps: ["R2 = 10 kΩ × 3,3 ÷ (5 − 3,3) = 33 ÷ 1,7 kΩ", "R2 ≈ 19,4118 kΩ", "De dichtstbijzijnde E24-waarde is 20 kΩ, wat 5 × 20 ÷ 30 ≈ 3,3333 V geeft (1,01% te hoog)"],
      },
      {
        title: "R1 voor 2,5 V uit 9 V met R2 = 1 kΩ en een belasting van 10 kΩ",
        steps: ["R1 = 1 kΩ × (9 − 2,5) ÷ 2,5 = 2,6 kΩ", "Met de belasting is R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0,9091 kΩ", "Belaste Vout = 9 × 0,9091 ÷ (2,6 + 0,9091) ≈ 2,3316 V, ongeveer 6,74% lager"],
      },
    ],
    assumptions: [
      "De weerstanden zijn ideaal en exact. Echte weerstanden hebben een tolerantie (5% voor E24-onderdelen), dus de werkelijke uitgang kan afwijken van de berekende waarde.",
      "Zonder belastingsweerstand wordt de deler als onbelast behandeld. Alles wat op de uitgang is aangesloten, ook een voltmeter, trekt stroom en verlaagt de spanning; houd de belasting minstens 10 keer zo groot als de uitgangsweerstand van de deler om de fout klein te houden.",
      "Een spanningsdeler is geen voeding. De uitgang zakt onder belasting in en hij verbruikt voortdurend stroom, dus gebruik een spanningsregelaar om een schakeling te voeden.",
      "De ingang is een constante gelijkspanning. Frequentie-effecten zoals strooicapaciteit worden niet gemodelleerd.",
    ],
    faqs: [
      { question: "Welke weerstand is R1 en welke R2?", answer: "R1 verbindt de ingang met het uitgangspunt en R2 verbindt het uitgangspunt met massa. De uitgang wordt over R2 genomen, dus een grotere R2 geeft een hogere uitgang." },
      { question: "Waarom is mijn gemeten spanning lager dan berekend?", answer: "Wat er ook op de uitgang is aangesloten, werkt als een weerstand parallel aan R2, wat de uitgang verlaagt. Vul de weerstand ervan in als belasting om het effect te zien, of gebruik kleinere weerstanden in de deler zodat de belasting minder uitmaakt." },
      { question: "Hoe kies ik de grootte van de weerstanden?", answer: "De verhouding bepaalt de spanning, de grootte bepaalt de stroom. Kleine weerstanden verspillen meer vermogen maar zijn minder gevoelig voor belasting; grote besparen vermogen maar zijn gevoelig voor de belasting en voor lekstroom aan de ingang. Vergelijk de vermogenscijfers met de specificaties van de weerstanden." },
    ],
    sourcesUsedFor: [
      "De relatie van de spanningsdeler Vout = Vin × R2 ÷ (R1 + R2) en hoe een belastingsweerstand de uitgang verlaagt.",
      "De E24-reeks van 24 voorkeurswaarden per decade voor weerstanden, gebruikt voor de dichtstbijzijnde standaardwaarde.",
    ],
  },
  text: {
    solve: "Berekenen",
    solveOptions: { vout: "Uitgangsspanning (Vout)", r2: "Onderste weerstand (R2)", r1: "Bovenste weerstand (R1)" },
    vin: "Ingangsspanning (Vin)",
    vout: "Gewenste uitgangsspanning (Vout)",
    r1: "Bovenste weerstand (R1)",
    r1Help: "De weerstand tussen de ingang en het uitgangsknooppunt.",
    r2: "Onderste weerstand (R2)",
    r2Help: "De weerstand tussen het uitgangsknooppunt en massa.",
    load: "Belastingsweerstand (RL, optioneel)",
    loadHelp: "De weerstand van wat er op de uitgang is aangesloten. Die staat parallel aan R2 en trekt de uitgang omlaag. Laat leeg voor een onbelaste deler.",
    unit: "Eenheid",
    units: { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" },
    errors: {
      voutRange: "De uitgangsspanning moet groter zijn dan 0 en kleiner dan de ingangsspanning.",
    },
    voutResult: "Uitgangsspanning (onbelast)",
    r2Result: "Onderste weerstand R2",
    r1Result: "Bovenste weerstand R1",
    captionVout: "{vin} over R1 = {r1} en R2 = {r2}.",
    captionR: "Geeft {vout} uit {vin} met {known}.",
    knownR1: "R1 = {r}",
    knownR2: "R2 = {r}",
    ratio: "Delingsverhouding (Vout ÷ Vin)",
    current: "Stroom door de deler (onbelast)",
    p1: "Vermogen in R1",
    p2: "Vermogen in R2",
    rTotal: "Totale weerstand (R1 + R2)",
    rOut: "Uitgangsweerstand (R1 ∥ R2)",
    vLoaded: "Uitgangsspanning met de belasting",
    drop: "Daling door de belasting",
    loadCurrent: "Stroom door de belasting",
    e24: "Dichtstbijzijnde E24-waarde",
    e24Vout: "Uitgangsspanning met de E24-waarde",
    e24Error: "Verandering van de uitgang met de E24-waarde",
    notes: {
      unloaded: "Deze cijfers gelden voor een onbelaste deler. Alles wat op de uitgang is aangesloten, trekt stroom en verlaagt Vout; vul een belastingsweerstand in om te zien hoeveel.",
      loaded: "Met de belasting werken R2 en RL parallel als {r} en daalt de uitgang met {drop}.",
      heavyLoad: "De belasting is minder dan 10 keer de uitgangsweerstand van de deler, dus die verandert de uitgang merkbaar. Gebruik kleinere weerstanden in de deler of een buffer als de spanning stabiel moet blijven.",
      supply: "Een spanningsdeler is geen voeding: de uitgang verandert met de belasting en hij verspilt voortdurend vermogen. Gebruik een regelaar om een schakeling te voeden.",
      e24: "E24 is de standaardreeks van 24 voorkeurswaarden per decade met 5% tolerantie. De dichtstbijzijnde waarde wordt gekozen op het kleinste absolute verschil.",
    },
  },
};

export default nl;
