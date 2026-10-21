import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeConverterText } from "../text/en";

const it: CalculatorTranslation<VolumeConverterText> = {
  content: {
    title: "Convertitore di volume",
    shortTitle: "Volume",
    summary: "Converti tra litri, millilitri, metri cubi, galloni USA e imperiali, quarti, pinte, tazze, once fluide, cucchiai e piedi cubi.",
    metaTitle: "Convertitore di volume – Litri, galloni, tazze e altro",
    metaDescription:
      "Converti volumi tra litri, millilitri, metri cubi, galloni USA e imperiali, quarti, pinte, tazze, once fluide, cucchiaini, cucchiai e piedi cubi.",
    keywords: ["volume", "litri in galloni", "galloni in litri", "ml in tazze", "once fluide", "piedi cubi", "gallone imperiale"],
    intro: [
      "Converti qualsiasi volume tra 15 unità metriche, statunitensi e imperiali. La tabella mostra il valore in tutte le unità contemporaneamente.",
      "Le unità statunitensi e imperiali hanno gli stessi nomi ma misure diverse: un gallone imperiale è circa il 20% più grande di un gallone USA e una pinta imperiale vale 20 once fluide invece di 16.",
    ],
    howToUse: [
      "Inserisci il valore.",
      "Scegli l'unità di partenza e quella desiderata.",
      "Leggi il risultato, oppure usa la tabella per confrontare tutte le unità.",
    ],
    formulas: [
      {
        title: "Conversione tramite i litri",
        expression: "risultato = valore × (litri per unità di partenza) ÷ (litri per unità di arrivo)",
        explanation: "Ogni unità è definita come un numero fisso di litri.",
      },
      {
        title: "Fattori principali",
        expression:
          "1 gal USA = 231 in³ = 3,785411784 L\n1 gal USA = 4 qt = 8 pt = 16 tazze = 128 fl oz\n1 fl oz USA = 2 cucchiai = 6 cucchiaini\n1 gal imp = 4,54609 L = 160 fl oz imp",
        explanation: "Esatti per definizione. Un piede cubo vale 28,316846592 L.",
      },
    ],
    examples: [
      { title: "1 gallone USA in litri", steps: ["1 gallone USA = 231 in³ × 0,016387064 L/in³", "= 3,785411784 L"] },
      { title: "500 millilitri in tazze USA", steps: ["1 tazza USA = 236,5882365 mL", "500 ÷ 236,5882365 ≈ 2,113 tazze"] },
    ],
    assumptions: [
      "Le unità USA sono le misure consuetudinarie per liquidi; pinte e quarti per aridi statunitensi, leggermente più grandi, non sono inclusi.",
      "Cucchiai e tazze hanno le misure consuetudinarie USA; la tazza metrica (250 mL) e il cucchiaio (15 mL, o 20 mL in Australia) sono leggermente diversi.",
      "I risultati sono arrotondati a 10 cifre significative nella visualizzazione.",
    ],
    faqs: [
      { question: "Quanti litri ci sono in un gallone?", answer: "Un gallone USA vale 3,785 litri; un gallone imperiale (britannico) vale 4,546 litri." },
      {
        question: "Quanti millilitri ci sono in una tazza?",
        answer: "Una tazza consuetudinaria USA vale 236,6 mL, la tazza delle etichette nutrizionali USA 240 mL e la tazza metrica 250 mL.",
      },
      {
        question: "Perché le pinte britanniche e statunitensi sono diverse?",
        answer: "Entrambi i sistemi dividono il proprio gallone in 8 pinte, ma il gallone imperiale è più grande, quindi una pinta imperiale vale 568 mL e una pinta USA 473 mL.",
      },
    ],
    sourcesUsedFor: [
      "Definizioni esatte del gallone USA (231 pollici cubi) e dei suoi sottomultipli, e del gallone imperiale (4,54609 litri).",
    ],
  },
  text: {
    value: "Valore",
    from: "Da",
    to: "A",
    unitNames: {
      ml: "Millilitri",
      l: "Litri",
      m3: "Metri cubi",
      tsp: "Cucchiaini USA",
      tbsp: "Cucchiai USA",
      floz: "Once fluide USA",
      cup: "Tazze USA",
      pt: "Pinte USA",
      qt: "Quarti USA",
      gal: "Galloni USA",
      impfloz: "Once fluide imperiali",
      imppt: "Pinte imperiali",
      impgal: "Galloni imperiali",
      in3: "Pollici cubi",
      ft3: "Piedi cubi",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in tutte le unità di volume",
    tableUnit: "Unità",
    tableValue: "Valore",
    note: "Le unità USA e imperiali sono diverse: un gallone USA vale 3,785 L, un gallone imperiale 4,546 L. I risultati sono mostrati con 10 cifre significative.",
  },
};

export default it;
