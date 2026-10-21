import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PizzaSizeText } from "../text/en";

const it: CalculatorTranslation<PizzaSizeText> = {
  content: {
    title: "Calcolatore delle dimensioni della pizza",
    shortTitle: "Dimensioni pizza",
    summary: "Confronta due pizze per superficie e per prezzo al pollice quadrato o al centimetro quadrato e trova l'affare migliore.",
    metaTitle: "Calcolatore dimensioni pizza – Prezzo per superficie",
    metaDescription:
      "Confronta due formati di pizza per superficie e prezzo al pollice quadrato o al cm², scopri quale conviene e quante pizze piccole equivalgono a una grande.",
    keywords: [
      "dimensioni pizza",
      "superficie della pizza",
      "prezzo al centimetro quadrato",
      "confronto pizze",
      "pizza grande o media",
      "quale pizza conviene",
      "offerta pizza",
    ],
    intro: [
      "Le pizze si vendono in base al diametro, ma quello che mangi è la superficie, e la superficie cresce con il quadrato del diametro. Una pizza da 16 pollici è larga solo un terzo in più di una da 12, ma contiene quasi il 78 % di pizza in più.",
      "Inserisci diametro e prezzo di due pizze per vedere la superficie di ciascuna, il prezzo per unità quadrata e quale ti dà di più per i tuoi soldi.",
    ],
    howToUse: [
      "Scegli se i diametri sono in pollici o in centimetri.",
      "Inserisci diametro e prezzo della pizza A.",
      "Inserisci diametro e prezzo della pizza B.",
      "Leggi quale pizza conviene di più, il prezzo al pollice quadrato o al centimetro quadrato e come si confrontano le dimensioni.",
    ],
    formulas: [
      { title: "Superficie", expression: "A = π × d² ÷ 4", explanation: "d è il diametro. Equivale a π × r² con il raggio r = d ÷ 2." },
      { title: "Prezzo per superficie", expression: "prezzo ÷ A", explanation: "Il valore più basso è quello più conveniente." },
      { title: "Rapporto tra le dimensioni", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "Quante pizze A hanno la stessa superficie di una pizza B." },
    ],
    examples: [
      {
        title: "12 pollici a $12,99 contro 16 pollici a $18,99",
        steps: [
          "A: π × 12² ÷ 4 ≈ 113,10 in², quindi $12,99 ÷ 113,10 ≈ $0,1149 per in²",
          "B: π × 16² ÷ 4 ≈ 201,06 in², quindi $18,99 ÷ 201,06 ≈ $0,0944 per in²",
          "(16 ÷ 12)² ≈ 1,778, quindi B contiene circa il 77,78 % di pizza in più",
        ],
      },
      {
        title: "30 cm a 9,50 € contro 40 cm a 17,90 €",
        steps: [
          "A: π × 30² ÷ 4 ≈ 706,86 cm², quindi 9,50 € ÷ 706,86 ≈ 0,0134 € per cm²",
          "B: π × 40² ÷ 4 ≈ 1.256,64 cm², quindi 17,90 € ÷ 1.256,64 ≈ 0,0142 € per cm²",
          "In questo caso la pizza più piccola costa meno al centimetro quadrato",
        ],
      },
    ],
    assumptions: [
      "Le pizze sono rotonde e il diametro è la larghezza totale, cornicione compreso.",
      "Le due pizze hanno lo stesso spessore e gli stessi ingredienti, quindi la superficie è una misura corretta di quanto cibo ricevi.",
      "La scelta della valuta cambia solo il formato.",
    ],
    faqs: [
      {
        question: "Perché una pizza appena più grande ha così tanta superficie in più?",
        answer: "La superficie dipende dal quadrato del diametro. Passare da 10 a 14 pollici significa il 40 % in più di larghezza, ma quasi il doppio della superficie, perché 1,4² = 1,96.",
      },
      {
        question: "Due pizze medie sono meglio di una grande?",
        answer:
          "Confronta le superfici. Due pizze da 12 pollici fanno circa 226 in² in tutto, mentre una da 18 pollici ne ha circa 254, quindi la grande è più grande.",
      },
      {
        question: "Devo contare il cornicione?",
        answer:
          "Questo calcolatore lo conta, perché i formati si vendono in base al diametro totale. Se non mangi il cornicione, togli due volte la sua larghezza dal diametro di ogni pizza prima di inserirlo.",
      },
    ],
    sourcesUsedFor: ["La superficie del cerchio, A = πr², e la sua forma in funzione del diametro."],
  },
  text: {
    unit: "Unità del diametro",
    units: { in: "Pollici (in)", cm: "Centimetri (cm)" },
    diameterA: "Diametro della pizza A",
    priceA: "Prezzo della pizza A",
    diameterB: "Diametro della pizza B",
    priceB: "Prezzo della pizza B",
    diameterHelp: "Misurato passando per il centro, da bordo a bordo.",
    result: "Più conveniente",
    aBetter: "La pizza A è più conveniente",
    bBetter: "La pizza B è più conveniente",
    same: "Le due pizze sono ugualmente convenienti",
    caption: "La pizza A costa {a} e la pizza B costa {b}.",
    perArea: "{price} per {unit}",
    areaA: "Superficie della pizza A",
    areaB: "Superficie della pizza B",
    pricePerAreaA: "Prezzo della pizza A per {unit}",
    pricePerAreaB: "Prezzo della pizza B per {unit}",
    aPerB: "Numero di pizze A che equivalgono in superficie a una pizza B",
    moreA: "Pizza in più in A rispetto a B",
    moreB: "Pizza in più in B rispetto ad A",
    sameSize: "Le due pizze hanno la stessa superficie",
    sameSizeValue: "Stessa dimensione",
    note: "Confronta l'intera superficie rotonda, cornicione compreso. Si presume che spessore e ingredienti siano gli stessi.",
  },
};

export default it;
