import type { ConverterContent } from "../../types";

const NOT_ADVICE =
  "Deze omrekentool rekent alleen eenheden om. Het is geen medisch advies en geen advies over stralingsbescherming; volg voor dosislimieten, blootstellingsbeoordeling of vragen over behandeling je stralingsdeskundige, arts of toezichthouder.";

/** Radiology converters in this language, keyed by converter id. */
export const radiologyContent: Record<string, ConverterContent> = {
  radiation: {
    title: "Stralingsdosis omrekenen",
    shortTitle: "Dosisequivalent",
    summary: "Reken het dosisequivalent van straling om tussen sievert, millisievert, microsievert, rem en millirem.",
    metaTitle: "Stralingsdosis omrekenen – Sv, mSv, µSv, rem, mrem",
    metaDescription: "Reken dosisequivalent en effectieve dosis om tussen sievert, millisievert, microsievert, rem en millirem, met de exacte 1 rem = 0,01 Sv.",
    keywords: ["sievert", "rem", "msv naar mrem", "mrem naar msv", "microsievert", "dosisequivalent", "effectieve dosis", "stralingsdosis"],
    intro: [
      "Dosisequivalent en effectieve dosis beschrijven het biologische effect van ioniserende straling op het lichaam. Dosimeterbadges, verslagen van medische beeldvorming en kaarten van achtergrondstraling geven ze in millisievert of microsievert, terwijl sommige Amerikaanse regelgeving nog rem en millirem gebruikt.",
      "De sievert is de SI-eenheid en de rem is de oudere tegenhanger: 1 rem is precies 0,01 Sv, dus 1 mSv is 100 mrem.",
    ],
    formula: {
      expression: "Sv = rem × 0,01    mSv = mrem ÷ 100",
      explanation: "De rem werd gedefinieerd als een honderdste sievert, dus elke omrekening is een exacte verhouding in machten van tien.",
    },
    assumptions: [
      NOT_ADVICE,
      "Sievert en gray zijn verschillende grootheden: de sievert bevat wegingsfactoren voor stralingssoort en weefsel, de gray niet. Gebruik voor gray en rad de omrekentool voor geabsorbeerde dosis.",
      "Dosistempo's (bijvoorbeeld µSv/h) reken je op dezelfde manier om, zolang beide kanten dezelfde tijdseenheid gebruiken.",
    ],
    faqs: [
      { question: "Hoeveel millirem is 1 millisievert?", answer: "1 mSv is precies 100 mrem, en 1 mrem is 0,01 mSv (10 µSv)." },
      { question: "Hoeveel rem zit er in een sievert?", answer: "1 Sv is precies 100 rem." },
      { question: "Kan ik sievert omrekenen naar gray?", answer: "Niet met een vaste factor. De sievert weegt de geabsorbeerde dosis in gray naar de stralingssoort en het blootgestelde weefsel, dus de verhouding hangt af van de situatie." },
    ],
    units: {
      sv: "Sievert",
      csv: "Centisievert",
      msv: "Millisievert",
      usv: "Microsievert",
      nsv: "Nanosievert",
      rem: "Rem",
      mrem: "Millirem",
      urem: "Microrem",
    },
    sourcesUsedFor: ["Omrekenfactor van de rem naar de sievert.", "Definitie van de sievert."],
  },
  "radiation-activity": {
    title: "Radioactiviteit omrekenen",
    shortTitle: "Radioactiviteit",
    summary: "Reken de activiteit van een radioactieve bron om tussen becquerel, curie, rutherford en desintegraties per seconde of minuut.",
    metaTitle: "Radioactiviteit omrekenen – Bq, MBq, GBq, Ci, mCi, µCi",
    metaDescription: "Reken radioactiviteit om tussen becquerel, kilo-, mega- en gigabecquerel, curie, millicurie, microcurie, picocurie en desintegraties per minuut.",
    keywords: ["becquerel", "curie", "mci naar mbq", "mbq naar mci", "picocurie", "radioactiviteit", "activiteit", "desintegraties per minuut"],
    intro: [
      "Activiteit is het aantal atomen in een radioactief monster dat elke seconde vervalt. Doses in de nucleaire geneeskunde worden voorgeschreven in megabecquerel of millicurie, radon in woningen wordt gerapporteerd in becquerel of picocurie per liter, en labtellers tonen vaak desintegraties per minuut.",
      "Eén becquerel is één verval per seconde. De curie, gebaseerd op de activiteit van een gram radium, is vastgelegd op precies 37 miljard becquerel.",
    ],
    formula: {
      expression: "Bq = Ci × 3,7 × 10¹⁰    1 mCi = 37 MBq",
      explanation: "De curie is gedefinieerd als precies 3,7 × 10¹⁰ Bq, en 1 dpm is één verval per minuut, oftewel 1/60 Bq.",
    },
    assumptions: [
      NOT_ADVICE,
      "Activiteit telt vervallen, geen dosis: dezelfde activiteit kan zeer verschillende doses geven, afhankelijk van het nuclide, de afstand, de afscherming en de tijd.",
      "Concentraties zoals Bq/m³ of pCi/L reken je op dezelfde manier om, zolang beide kanten dezelfde volume-eenheid gebruiken.",
    ],
    faqs: [
      { question: "Hoeveel megabecquerel zit er in een millicurie?", answer: "1 mCi is precies 37 MBq; 1 MBq is ongeveer 0,027 mCi (27,03 µCi)." },
      { question: "Hoe reken ik pCi/L om naar Bq/m³?", answer: "1 pCi is 0,037 Bq en 1 m³ is 1.000 L, dus 1 pCi/L is 37 Bq/m³. Het Amerikaanse actieniveau voor radon van 4 pCi/L is 148 Bq/m³." },
      { question: "Wat is het verschil tussen dps en dpm?", answer: "Desintegraties per seconde zijn gelijk aan becquerel; desintegraties per minuut zijn 60 keer kleiner, dus 1 Bq = 60 dpm." },
    ],
    units: {
      bq: "Becquerel",
      kbq: "Kilobecquerel",
      mbq: "Megabecquerel",
      gbq: "Gigabecquerel",
      tbq: "Terabecquerel",
      pbq: "Petabecquerel",
      kci: "Kilocurie",
      ci: "Curie",
      mci: "Millicurie",
      uci: "Microcurie",
      nci: "Nanocurie",
      pci: "Picocurie",
      rd: "Rutherford",
      dps: "Desintegraties per seconde",
      dpm: "Desintegraties per minuut",
    },
    sourcesUsedFor: ["Omrekenfactor van de curie naar de becquerel.", "Definitie van de becquerel."],
  },
  "radiation-exposure": {
    title: "Stralingsblootstelling omrekenen",
    shortTitle: "Stralingsblootstelling",
    summary: "Reken de blootstelling aan röntgen- en gammastraling om tussen röntgen, milliröntgen en coulomb per kilogram.",
    metaTitle: "Stralingsblootstelling omrekenen – R, mR, C/kg",
    metaDescription: "Reken stralingsblootstelling om tussen röntgen, milliröntgen, microröntgen en coulomb per kilogram, met de exacte 1 R = 2,58 × 10⁻⁴ C/kg.",
    keywords: ["röntgen", "milliröntgen", "coulomb per kilogram", "r naar c/kg", "stralingsblootstelling", "stralingsmeter", "mr/h"],
    intro: [
      "Blootstelling (exposie) geeft aan hoe sterk röntgen- of gammastraling lucht ioniseert: de elektrische lading die ze in elke kilogram lucht vrijmaakt. Oudere stralingsmeters en instrumenten voor de bescherming bevolking lezen af in röntgen of milliröntgen per uur.",
      "Het SI drukt blootstelling uit in coulomb per kilogram. De röntgen is vastgelegd op precies 2,58 × 10⁻⁴ C/kg.",
    ],
    formula: {
      expression: "C/kg = R × 2,58 × 10⁻⁴",
      explanation: "Eén röntgen is de blootstelling die 2,58 × 10⁻⁴ coulomb lading per kilogram droge lucht vrijmaakt.",
    },
    assumptions: [
      NOT_ADVICE,
      "Blootstelling is alleen gedefinieerd voor röntgen- en gammastraling in lucht. Het is geen geabsorbeerde dosis en geen dosisequivalent, en de omrekening naar gray of sievert hangt af van de stralingsenergie en het materiaal.",
      "Blootstellingstempo's (bijvoorbeeld mR/h) reken je op dezelfde manier om, zolang beide kanten dezelfde tijdseenheid gebruiken.",
    ],
    faqs: [
      { question: "Hoeveel coulomb per kilogram is één röntgen?", answer: "Precies 2,58 × 10⁻⁴ C/kg, oftewel 258 µC/kg. Eén milliröntgen is 0,258 µC/kg." },
      { question: "Hoeveel röntgen zit er in 1 C/kg?", answer: "Ongeveer 3.876 R, want 1 ÷ 0,000258 ≈ 3.875,97." },
      { question: "Is een röntgen hetzelfde als een rem of een rad?", answer: "Nee. Ze meten verschillende dingen. Voor gammastraling in zacht weefsel geeft 1 R ongeveer 0,0087 tot 0,0096 Gy; daarom behandelen vuistregels ze soms als vergelijkbaar, maar er is geen vaste omrekening." },
    ],
    units: {
      c_kg: "Coulomb per kilogram",
      mc_kg: "Millicoulomb per kilogram",
      uc_kg: "Microcoulomb per kilogram",
      nc_kg: "Nanocoulomb per kilogram",
      kr: "Kiloröntgen",
      r: "Röntgen",
      mr: "Milliröntgen",
      ur: "Microröntgen",
    },
    sourcesUsedFor: ["Omrekenfactor van de röntgen naar coulomb per kilogram."],
  },
  "radiation-absorbed-dose": {
    title: "Geabsorbeerde dosis omrekenen",
    shortTitle: "Geabsorbeerde dosis",
    summary: "Reken de geabsorbeerde stralingsdosis om tussen gray, centigray, milligray, rad en joule per kilogram.",
    metaTitle: "Geabsorbeerde dosis omrekenen – Gy, cGy, mGy, rad",
    metaDescription: "Reken de geabsorbeerde stralingsdosis om tussen gray, kilogray, centigray, milligray, rad, kilorad, erg per gram en joule per kilogram.",
    keywords: ["gray", "rad", "gy naar rad", "rad naar gy", "centigray", "milligray", "geabsorbeerde dosis", "kilogray"],
    intro: [
      "De geabsorbeerde dosis is de energie die ioniserende straling in elke kilogram materiaal afgeeft. Bestralingsplannen gebruiken gray en centigray, CT-dosisindexen milligray, en sterilisatie van voedsel en medische hulpmiddelen kilogray.",
      "Eén gray is één joule per kilogram. De oudere rad is precies een honderdste gray, dus 1 cGy is gelijk aan 1 rad.",
    ],
    formula: {
      expression: "Gy = rad × 0,01    1 Gy = 1 J/kg",
      explanation: "De rad werd gedefinieerd als 100 erg per gram, wat precies 0,01 J/kg is.",
    },
    assumptions: [
      NOT_ADVICE,
      "Gray meet alleen afgegeven energie. Het is geen sievert, die ook weegt naar stralingssoort en weefsel; gebruik voor sievert en rem de omrekentool voor stralingsdosis.",
    ],
    faqs: [
      { question: "Hoeveel rad zit er in een gray?", answer: "1 Gy is precies 100 rad, en 1 rad is 0,01 Gy (1 cGy)." },
      { question: "Waarom gebruiken radiotherapieverslagen centigray?", answer: "Omdat 1 cGy gelijk is aan 1 rad, kunnen klinieken met centigray vertrouwde getallen houden: een fractie van 2 Gy is 200 cGy, oftewel 200 rad." },
      { question: "Is een gray hetzelfde als een sievert?", answer: "Beide zijn joule per kilogram, maar het zijn verschillende grootheden. Een gray alfastraling heeft een veel groter biologisch effect dan een gray röntgenstraling, en daar houdt de sievert rekening mee." },
    ],
    units: {
      gy: "Gray",
      kgy: "Kilogray",
      cgy: "Centigray",
      mgy: "Milligray",
      ugy: "Microgray",
      j_kg: "Joule per kilogram",
      krad: "Kilorad",
      rad: "Rad",
      mrad: "Millirad",
      erg_g: "Erg per gram",
    },
    sourcesUsedFor: ["Omrekenfactoren van de rad en de erg per gram naar de gray.", "Definitie van de gray."],
  },
};
