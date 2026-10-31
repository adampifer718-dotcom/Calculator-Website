import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FeedConversionRatioText } from "../text/en";

const nl: CalculatorTranslation<FeedConversionRatioText> = {
  content: {
    title: "Voederconversiecalculator",
    shortTitle: "Voederconversie",
    summary: "Bereken de voederconversie (FCR) van vee, pluimvee of vis uit het verbruikte voer en de gewichtstoename, met een voor uitval gecorrigeerde voederconversie en de voerkosten per eenheid groei.",
    metaTitle: "Voederconversiecalculator – FCR voor vee en vis",
    metaDescription:
      "Bereken de voederconversie als voeropname ÷ groei in levend gewicht, gecorrigeerd voor uitval, met voerefficiëntie, groei per dier en voerkosten per kg.",
    keywords: ["voederconversie", "fcr", "voerefficiëntie", "veehouderij", "pluimvee", "aquacultuur", "gewichtstoename", "voerkosten"],
    intro: [
      "De voederconversie (FCR) geeft aan hoeveel voer dieren nodig hebben om één eenheid levend gewicht aan te zetten. Een voederconversie van 2 betekent 2 kg voer per kilogram groei, of 2 lb per pond: de eenheid valt weg zolang voer en gewicht dezelfde eenheid gebruiken. Een lagere voederconversie betekent dat het voer efficiënter in groei wordt omgezet.",
      "Vul het voer in dat over een periode is gebruikt en het totale levend gewicht van de groep aan het begin en het eind. Zijn er dieren gestorven of afgevoerd, tel dan hun gewicht erbij op voor de voor uitval gecorrigeerde voederconversie, waarin hun voer niet als verspild meetelt. Met een voerprijs en een aantal dieren krijg je ook de voerkosten per eenheid groei en de groei per dier.",
    ],
    howToUse: [
      "Kies kilogram of pond en gebruik die eenheid voor het voer en alle gewichten.",
      "Vul de totale voeropname over de periode in en het gezamenlijke levend gewicht van de groep aan het begin en aan het eind.",
      "Zijn er in de periode dieren gestorven of afgevoerd, vul dan hun gezamenlijke gewicht in voor de voor uitval gecorrigeerde voederconversie.",
      "Vul eventueel de voerprijs per kg of lb en het aantal dieren in.",
    ],
    formulas: [
      { title: "Groei in levend gewicht", expression: "groei = eindgewicht − begingewicht + gewicht van afgevoerde dieren", explanation: "Laat het afgevoerde gewicht leeg voor de eenvoudige groei van de dieren die er nog zijn." },
      { title: "Voederconversie", expression: "FCR = voeropname ÷ groei in levend gewicht", explanation: "Voer en gewichten gebruiken dezelfde eenheid, dus de verhouding heeft geen eenheid." },
      { title: "Voerefficiëntie", expression: "voerefficiëntie = groei ÷ voer × 100%", explanation: "Het omgekeerde van de voederconversie, als percentage." },
      { title: "Voerkosten per eenheid groei", expression: "kosten per kg (of lb) groei = voer × prijs ÷ groei = FCR × prijs", explanation: "De voerkosten van elke geproduceerde eenheid levend gewicht." },
    ],
    examples: [
      {
        title: "Een groep varkens over een groeiperiode",
        steps: ["Groei: 2.850 − 900 = 1.950 kg.", "FCR: 4.200 ÷ 1.950 ≈ 2,15.", "Voerefficiëntie: 1.950 ÷ 4.200 ≈ 46,4%."],
      },
      {
        title: "Een koppel vleeskuikens met uitval en voerprijs",
        steps: [
          "Groei inclusief afgevoerde dieren: 4.510 − 1.080 + 160 = 3.590 kg.",
          "Voor uitval gecorrigeerde FCR: 5.300 ÷ 3.590 ≈ 1,48 (zonder de afgevoerde dieren: 5.300 ÷ 3.430 ≈ 1,55).",
          "Voerkosten per kg groei: 5.300 × $0,21 ÷ 3.590 ≈ $0,31.",
        ],
      },
      {
        title: "Lammeren gewogen in pond",
        steps: ["Groei: 612 − 410 = 202 lb.", "FCR: 380 ÷ 202 ≈ 1,88 lb voer per lb groei."],
      },
    ],
    assumptions: [
      "Voer en alle gewichten staan in dezelfde eenheid, en het voercijfer is wat de dieren werkelijk hebben gegeten (of het geleverde voer min wat over is of verspild, als je het zo bijhoudt).",
      "De gewichten zijn totale levende gewichten van de groep. Geslacht gewicht of karkasgewicht geeft een andere verhouding.",
      "De voor uitval gecorrigeerde voederconversie telt het gewicht van gestorven of afgevoerde dieren bij de groei op. Sommige producenten registreren dit anders, bijvoorbeeld met het gewicht bij de start of zonder uitgeselecteerde dieren, dus controleer de methode voordat je cijfers vergelijkt.",
      "Er worden geen referentiewaarden gegeven, omdat gangbare voederconversies sterk verschillen tussen diersoorten, leeftijden, rassen, rantsoenen en registratiemethoden.",
    ],
    faqs: [
      { question: "Is een lagere of hogere voederconversie beter?", answer: "Lager. Een voederconversie van 1,5 betekent 1,5 eenheden voer per eenheid groei, 2,0 betekent 2 eenheden. De voerefficiëntie, het omgekeerde, werkt andersom: hoger is beter." },
      { question: "Waarom het gewicht van gestorven dieren meetellen?", answer: "Die dieren hebben voer gegeten en zijn gegroeid voordat ze stierven of werden afgevoerd. Laat je hun gewicht weg, dan lijkt het voer minder efficiënt dan het was, en vermeng je uitvalverliezen met de voederconversie. Door beide cijfers te tonen, blijven de twee effecten gescheiden." },
      { question: "Maakt de eenheid uit?", answer: "Nee, zolang voer en gewichten dezelfde eenheid gebruiken. De voederconversie is een verhouding, dus 2,15 kg/kg is hetzelfde als 2,15 lb/lb. Alleen de voerkosten per eenheid groei hangen van de eenheid af, omdat de prijs per kg of per lb is." },
    ],
    sourcesUsedFor: [
      "FCR = totaal gevoerd voer ÷ gewichtstoename, in dezelfde eenheid, waarbij lagere waarden efficiëntere groei betekenen.",
      "Voederconversie als het voergewicht dat nodig is voor één eenheid groei, en de voerkosten per eenheid groei.",
    ],
  },
  text: {
    unit: "Massa-eenheid",
    units: { kg: "Kilogram (kg)", lb: "Pond (lb)" },
    feed: "Voeropname",
    feedHelp: "Totaal voer dat de groep in de periode heeft gegeten, in de gekozen eenheid.",
    initial: "Totaal levend gewicht aan het begin",
    initialHelp: "Gezamenlijk gewicht van de dieren aan het begin van de periode.",
    final: "Totaal levend gewicht aan het eind",
    finalHelp: "Gezamenlijk gewicht van de dieren die er aan het eind van de periode nog zijn.",
    removed: "Gewicht van gestorven of afgevoerde dieren",
    removedHelp: "Optioneel. Hun gewicht toen ze stierven of de groep verlieten. Als je het optelt, krijg je de voor uitval gecorrigeerde voederconversie.",
    price: "Voerprijs per massa-eenheid",
    priceHelp: "Optioneel. De prijs van 1 kg of 1 lb voer, in de hierboven gekozen massa-eenheid. Gebruikt voor de voerkosten per eenheid groei.",
    head: "Aantal dieren",
    headHelp: "Optioneel. Gebruikt voor de groei per dier.",
    errors: {
      noGain: "De groei in levend gewicht is nul of negatief, dus de voederconversie kan niet worden berekend. Controleer de gewichten.",
    },
    result: "Voederconversie (FCR)",
    resultAdjusted: "Voederconversie (FCR), gecorrigeerd voor uitval",
    caption: "Voeropname ÷ groei in levend gewicht",
    unadjusted: "FCR zonder de afgevoerde dieren",
    unadjustedNone: "Niet zinvol (geen groei bij de overgebleven dieren)",
    efficiency: "Voerefficiëntie (groei ÷ voer)",
    gain: "Totale groei in levend gewicht",
    gainUnadjusted: "Groei van alleen de overgebleven dieren",
    gainPerHead: "Groei per dier",
    feedCost: "Totale voerkosten",
    costPerGain: "Voerkosten per {unit} groei",
    notes: {
      meaning: "Een voederconversie van {fcr} betekent {fcr} {unit} voer per {unit} groei in levend gewicht. Lager is efficiënter.",
      adjusted: "Het gewicht van de afgevoerde dieren wordt bij de groei opgeteld, zodat hun voer niet als verspild meetelt. Het ongecorrigeerde cijfer staat erbij ter vergelijking.",
      general: "Gangbare waarden verschillen sterk per diersoort, leeftijd, ras, rantsoen en de manier waarop voer en gewichten worden gemeten, dus vergelijk voederconversies alleen als ze op dezelfde manier zijn gemeten.",
    },
  },
};

export default nl;
