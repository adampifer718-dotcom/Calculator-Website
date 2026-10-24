import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CarCo2Text } from "../text/en";

const it: CalculatorTranslation<CarCo2Text> = {
  content: {
    title: "Calcolatore delle emissioni di CO₂ dell'auto",
    shortTitle: "Emissioni di CO₂ dell'auto",
    summary:
      "Stima la CO₂ allo scarico di un'auto a benzina o diesel a partire dalla distanza e dai consumi o dal carburante utilizzato, per viaggio e per anno.",
    metaTitle: "Calcolatore emissioni CO₂ auto – Impronta di carbonio",
    metaDescription:
      "Stima la CO₂ allo scarico di un viaggio in auto a benzina o diesel da distanza e consumi in mpg o L/100 km, con i fattori US EPA e i totali per km, miglio e anno.",
    keywords: [
      "emissioni CO2 auto",
      "impronta di carbonio auto",
      "CO2 per km",
      "CO2 per litro di benzina",
      "CO2 diesel per litro",
      "emissioni veicolo",
      "emissioni carburante",
    ],
    intro: [
      "Bruciando il carburante, il suo carbonio si trasforma in anidride carbonica. Poiché quasi tutto il carbonio della benzina o del gasolio finisce in CO₂, le emissioni allo scarico di un'auto dipendono soprattutto da quanto carburante consuma, qualunque siano la marca e il modello.",
      "Questo calcolatore ricava il carburante consumato dalla distanza e dai consumi della tua auto (oppure usa direttamente la quantità di carburante) e lo moltiplica per il fattore di emissione dell'EPA statunitense. Un gallone di benzina produce circa 8,9 kg di CO₂, più di quanto pesi il carburante stesso, perché la maggior parte della massa proviene dall'ossigeno dell'aria.",
    ],
    howToUse: [
      "Scegli se partire dalla distanza e dai consumi oppure dalla quantità di carburante usata.",
      "Inserisci la distanza e i consumi della tua auto in mpg (USA o UK), L/100 km o km/L, oppure il carburante usato.",
      "Scegli benzina, diesel o un fattore di emissione personalizzato in kg di CO₂ per litro.",
      "Se vuoi, inserisci quante volte all'anno fai il viaggio per vedere il totale annuo.",
    ],
    formulas: [
      { title: "CO₂ emessa", expression: "CO₂ = carburante usato × fattore di emissione", explanation: "Con il carburante in litri e il fattore in kg di CO₂ per litro." },
      {
        title: "Carburante usato",
        expression: "carburante = distanza ÷ mpg × litri per gallone, oppure distanza × L/100 km ÷ 100",
        explanation:
          "1 gallone USA = 3,785411784 L, 1 gallone imperiale = 4,54609 L e 1 miglio = 1,609344 km esatti. Per i km/L, carburante = distanza ÷ km/L.",
      },
      {
        title: "Fattori EPA per litro",
        expression: "benzina 8,887 ÷ 3,785411784 ≈ 2,3477 kg/L; diesel 10,180 ÷ 3,785411784 ≈ 2,6893 kg/L",
        explanation: "I valori dell'EPA per gallone convertiti esattamente in litri.",
      },
    ],
    examples: [
      {
        title: "Un viaggio di 250 miglia a 30 mpg con un'auto a benzina",
        steps: ["Carburante = 250 ÷ 30 = 8,333 galloni USA", "CO₂ = 8,333 × 8,887 kg ≈ 74,06 kg", "Sono circa 296 g di CO₂ per miglio"],
      },
      {
        title: "400 km con un'auto diesel che consuma 6,5 L/100 km",
        steps: ["Carburante = 400 × 6,5 ÷ 100 = 26 L", "Fattore = 10,180 ÷ 3,785411784 ≈ 2,6893 kg CO₂/L", "CO₂ = 26 × 2,6893 ≈ 69,92 kg, circa 174,8 g per km"],
      },
      {
        title: "Un pieno di 45 L di benzina, ripetuto 52 volte all'anno",
        steps: ["CO₂ per pieno = 45 × 2,3477 ≈ 105,65 kg", "All'anno = 105,65 × 52 ≈ 5.494 kg, circa 5,49 tonnellate"],
      },
    ],
    assumptions: [
      "Viene contata solo la CO₂ allo scarico. Metano e protossido di azoto dei gas di scarico, perdite di refrigerante e le emissioni a monte per estrarre, raffinare e trasportare il carburante non sono inclusi, quindi l'impronta complessiva è maggiore.",
      "I fattori per benzina e diesel sono quelli dell'EPA statunitense. I carburanti miscelati con etanolo o biodiesel, e quelli di altri paesi, possono differire leggermente; usa un fattore personalizzato se ne hai uno migliore.",
      "Le auto elettriche non rientrano in questo calcolatore: non emettono nulla allo scarico e la loro impronta dipende dal mix elettrico del luogo in cui vengono ricaricate.",
      "Il risultato è affidabile quanto i consumi che inserisci. I consumi reali sono spesso peggiori dei valori di omologazione, soprattutto con il freddo, ad alta velocità e sui tragitti brevi.",
    ],
    faqs: [
      {
        question: "Come può un gallone di benzina produrre più CO₂ del proprio peso?",
        answer:
          "Ogni atomo di carbonio del carburante si lega a due atomi di ossigeno dell'aria. L'ossigeno è più pesante del carbonio, quindi la CO₂ pesa circa 3,7 volte il carbonio che contiene (44 ÷ 12): un gallone USA di benzina pesa circa 2,8 kg ma produce quasi 8,9 kg di CO₂.",
      },
      {
        question: "Perché il diesel ha un fattore più alto della benzina?",
        answer:
          "Il gasolio è più denso e contiene più carbonio per litro, quindi bruciarne un litro libera più CO₂. Le auto diesel spesso consumano meno carburante per lo stesso viaggio, il che può compensare il fattore più alto.",
      },
      {
        question: "Sono incluse le emissioni per produrre l'auto o il carburante?",
        answer:
          "No. Il calcolo copre solo la CO₂ che esce dallo scarico durante la guida. La produzione dell'auto e la produzione e distribuzione del carburante aggiungono altre emissioni, che richiedono una valutazione del ciclo di vita completa.",
      },
    ],
    sourcesUsedFor: ["I fattori di emissione allo scarico di 8.887 g di CO₂ per gallone di benzina e 10.180 g di CO₂ per gallone di gasolio."],
  },
  text: {
    method: "Ricava il carburante da",
    methodOptions: { distance: "Distanza e consumi", fuel: "Carburante usato" },
    distance: "Distanza percorsa",
    distanceUnit: "Unità di distanza",
    distanceUnits: { km: "Chilometri (km)", mi: "Miglia (mi)" },
    economy: "Consumo di carburante",
    economyHelp: "Per un risultato più realistico usa il dato del computer di bordo o delle ricevute del carburante.",
    economyUnit: "Unità dei consumi",
    economyUnits: {
      mpgUs: "Miglia per gallone USA (mpg US)",
      mpgUk: "Miglia per gallone imperiale (mpg UK)",
      l100km: "Litri per 100 km (L/100 km)",
      kmL: "Chilometri per litro (km/L)",
    },
    fuelAmount: "Carburante usato",
    fuelUnit: "Unità del carburante",
    fuelUnits: { L: "Litri (L)", galUs: "Galloni USA", galUk: "Galloni imperiali" },
    fuelType: "Carburante",
    fuelTypes: { gasoline: "Benzina", diesel: "Diesel", custom: "Fattore di emissione personalizzato" },
    customFactor: "Fattore di emissione",
    customFactorHelp: "Chilogrammi di CO₂ liberati bruciando un litro del carburante.",
    trips: "Viaggi all'anno (facoltativo)",
    tripsHelp:
      "Quante volte all'anno fai questo viaggio, per ottenere un totale annuo. Per un anno di guida, inserisci la distanza annua e 1 viaggio.",
    co2: "CO₂ emessa",
    caption: "{fuel} di carburante × {factor}.",
    perKm: "CO₂ per chilometro",
    perMile: "CO₂ per miglio",
    fuelL: "Carburante usato",
    fuelGal: "Carburante usato in galloni USA",
    factor: "Fattore di emissione usato",
    annual: "CO₂ all'anno",
    annualTonnes: "CO₂ all'anno in tonnellate",
    gallonsUs: "gal USA",
    notes: {
      tailpipe:
        "Questa è solo la CO₂ allo scarico. Metano, protossido di azoto, refrigeranti del climatizzatore e le emissioni per produrre e distribuire il carburante non sono inclusi.",
      electric: "Le auto elettriche non sono considerate: non hanno emissioni allo scarico e la loro impronta dipende da come viene prodotta l'elettricità.",
      custom: "Con un fattore personalizzato, il risultato è preciso quanto il fattore che hai inserito.",
    },
  },
};

export default it;
