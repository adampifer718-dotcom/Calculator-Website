import type { TaxonomyText } from "./types";

/** Dutch category and industry collection texts. */
const nl: TaxonomyText = {
  categories: {
    biology: {
      name: "Biologie",
      description: "Groeisnelheden, populaties en laboratoriumhoeveelheden voor de levenswetenschappen.",
      metaTitle: "Biologie-calculators",
      metaDescription: "Gratis biologie-calculators voor populatiegroei, verdubbelingstijd en andere grootheden uit de levenswetenschappen, met formule en uitgewerkte voorbeelden.",
    },
    chemistry: {
      name: "Scheikunde",
      description: "Berekeningen voor concentraties, verdunningen en oplossingen in het lab en de klas.",
      metaTitle: "Scheikunde-calculators",
      metaDescription: "Gratis scheikunde-calculators voor molariteit, het verdunnen van oplossingen en concentraties, met formules, eenheden en uitgewerkte voorbeelden.",
    },
    construction: {
      name: "Bouw",
      description: "Oppervlakte- en meettools voor klussen in huis en bouwprojecten.",
      metaTitle: "Bouwcalculators",
      metaDescription: "Gratis bouwcalculators, zoals de oppervlakte van rechthoeken, cirkels en driehoeken in voet, inch, yard of meter.",
    },
    conversion: {
      name: "Omrekenen",
      description: "Eenhedenomrekeners op basis van exacte, gepubliceerde omrekenfactoren.",
      metaTitle: "Eenheden omrekenen: calculators",
      metaDescription: "Gratis eenhedenomrekeners voor lengte, massa en temperatuur met exacte SI-omrekenfactoren, formules en omrekentabellen.",
    },
    ecology: {
      name: "Ecologie",
      description: "Schattingen van water, energie en grondstoffen voor een duurzamer huis en een groenere tuin.",
      metaTitle: "Calculators voor ecologie en milieu",
      metaDescription: "Gratis ecologie-calculators voor het opvangen van regenwater en andere schattingen van hulpbronnen, met duidelijke aannames en uitgewerkte voorbeelden.",
    },
    "everyday-life": {
      name: "Dagelijks leven",
      description: "Snelle antwoorden voor fooien, kortingen, brandstof, cijfers en andere dagelijkse sommen.",
      metaTitle: "Calculators voor het dagelijks leven",
      metaDescription: "Gratis calculators voor alledag: fooi en de rekening delen, kortingen, brandstofkosten en toetscijfers, steeds met de formule erbij.",
    },
    finance: {
      name: "Financiën",
      description: "Loon, leningen, rente, rendement, belastingen en bedrijfsmarges met transparante formules.",
      metaTitle: "Financiële calculators",
      metaDescription: "Gratis financiële calculators voor salaris en uurloon, leningen, samengestelde rente, ROI, btw, winstmarge en break-evenpunt.",
    },
    food: {
      name: "Eten en koken",
      description: "Keukenrekenwerk om recepten om te rekenen en maaltijden te plannen.",
      metaTitle: "Calculators voor eten en koken",
      metaDescription: "Gratis calculators voor eten en koken, zoals een receptomrekenaar die de hoeveelheden ingrediënten aanpast aan elk aantal porties.",
    },
    health: {
      name: "Gezondheid",
      description: "Algemene gezondheidsmaten met duidelijke bereiken en beperkingen. Geen vervanging voor medisch advies.",
      metaTitle: "Gezondheidscalculators",
      metaDescription: "Gratis gezondheidscalculators voor BMI en ruststofwisseling (BMR), met metrische en imperiale eenheden en duidelijk vermelde beperkingen.",
    },
    math: {
      name: "Wiskunde",
      description: "Procenten, wortels, machten, logaritmen, meetkunde en getalnotatie, met de formule achter elk antwoord.",
      metaTitle: "Wiskundecalculators",
      metaDescription: "Gratis wiskundecalculators voor procenten, logaritmen, machten, vierkantswortels, helling, omtrek, significante cijfers en meer.",
    },
    physics: {
      name: "Natuurkunde",
      description: "Berekeningen voor beweging, energie en elektriciteit in SI-eenheden.",
      metaTitle: "Natuurkundecalculators",
      metaDescription: "Gratis natuurkundecalculators voor snelheid, afstand en tijd, kinetische energie en de wet van Ohm, met formules en eenheden.",
    },
    sports: {
      name: "Sport",
      description: "Trainings- en prestatiecijfers voor hardlopers, wielrenners en andere sporters.",
      metaTitle: "Sportcalculators",
      metaDescription: "Gratis sportcalculators, zoals een tempocalculator voor hardlopen die tempo, snelheid en eindtijden over gangbare wedstrijdafstanden berekent.",
    },
    statistics: {
      name: "Statistiek",
      description: "Beschrijvende statistiek, p-waarden en betrouwbaarheidsintervallen, met alle aannames vermeld.",
      metaTitle: "Statistiekcalculators",
      metaDescription: "Gratis statistiekcalculators voor gemiddelde, mediaan en modus, standaardafwijking, p-waarden en betrouwbaarheidsintervallen, met formules.",
    },
    other: {
      name: "Overig",
      description: "Handige tools die nergens anders goed passen, zoals de energiekosten van je huishouden.",
      metaTitle: "Overige calculators",
      metaDescription: "Diverse gratis calculators, waaronder een calculator voor de stroomkosten van huishoudelijke apparaten en andere toestellen.",
    },
  },
  collections: {
    business: {
      name: "Ondernemen en bedrijfsvoering",
      description: "Prijzen, marges, break-evenpunt en rendement voor het runnen en laten groeien van een bedrijf.",
      metaTitle: "Calculators voor ondernemers en bedrijven",
      metaDescription: "Calculators voor ondernemers en kleine bedrijven: winstmarge, break-evenpunt, ROI, btw, kortingen en procentuele verandering.",
    },
    "accounting-finance": {
      name: "Boekhouding en financiën",
      description: "Rente, leningen, rendement en looncijfers omrekenen voor financieel en boekhoudkundig werk.",
      metaTitle: "Calculators voor boekhouding en financiën",
      metaDescription: "Calculators voor boekhouding en financiën: aflossingen van leningen, samengestelde rente, ROI, winstmarge, btw en salarisomrekeningen.",
    },
    "hr-payroll": {
      name: "HR, salarisadministratie en werk",
      description: "Reken salarissen, uurlonen en betaalperioden om voor aanbiedingen, begrotingen en loncontroles.",
      metaTitle: "Calculators voor HR en salarisadministratie",
      metaDescription: "Calculators voor HR en salarisadministratie: van salaris naar uurloon, van uurloon naar salaris en alle gangbare betaalperioden, op basis van je eigen rooster.",
    },
    "marketing-ecommerce": {
      name: "Online marketing en e-commerce",
      description: "Campagnerendement, kortingen, marges en conversiestatistieken voor webwinkels en marketeers.",
      metaTitle: "Calculators voor online marketing en e-commerce",
      metaDescription: "Calculators voor marketeers en webwinkels: ROI, kortingen, btw, winstmarge, procentuele verandering en betrouwbaarheidsintervallen.",
    },
    "real-estate": {
      name: "Vastgoed en woningen",
      description: "Vloeroppervlak, maandlasten van hypotheekachtige leningen en beleggingsrendement voor vastgoedbeslissingen.",
      metaTitle: "Calculators voor vastgoed en woningen",
      metaDescription: "Calculators voor vastgoed: vloeroppervlak, maandlasten van leningen en hypotheken, ROI en regenwateropvang voor woningen en panden.",
    },
    "construction-engineering": {
      name: "Bouw en civiele techniek",
      description: "Oppervlakten, rechthoekige driehoeken, hellingen en eenheden omrekenen voor bouwplaats en ontwerp.",
      metaTitle: "Calculators voor bouw en civiele techniek",
      metaDescription: "Calculators voor bouw en civiele techniek: vloeroppervlak, stelling van Pythagoras, helling, omtrek en eenheden omrekenen.",
    },
    "education-research": {
      name: "Onderwijs en wetenschappelijk onderzoek",
      description: "Tools voor wiskunde, statistiek en natuurwetenschappen voor leerlingen, studenten, docenten en onderzoekers.",
      metaTitle: "Calculators voor onderwijs en onderzoek",
      metaDescription: "Calculators voor studenten en onderzoekers: statistiek, p-waarden, logaritmen, significante cijfers en formules uit scheikunde en natuurkunde.",
    },
    healthcare: {
      name: "Zorg en medische professionals",
      description: "Algemene gezondheidsmaten en laboratoriumberekeningen. Gebruik altijd je klinisch oordeel en de lokale richtlijnen.",
      metaTitle: "Calculators voor de zorg",
      metaDescription: "Calculators voor zorg en laboratorium: BMI, BMR, molariteit, verdunning en p-waarden, met bronnen en vermelde beperkingen.",
    },
    "agriculture-gardening": {
      name: "Landbouw en tuinieren",
      description: "Schattingen van oppervlakte, water en groei voor boerderijen, percelen en tuinen.",
      metaTitle: "Calculators voor landbouw en tuinieren",
      metaDescription: "Calculators voor telers en tuiniers: oppervlakte, regenwateropvang, verdubbelingstijd van populaties en eenheden omrekenen.",
    },
    "food-hospitality": {
      name: "Horeca en gastvrijheid",
      description: "Recepten omrekenen, fooien, prijzen en marges voor keukens, restaurants en gastheren.",
      metaTitle: "Calculators voor horeca en gastvrijheid",
      metaDescription: "Calculators voor keukens en restaurants: receptomrekenaar, fooi en rekening delen, winstmarge, kortingen en temperatuur omrekenen.",
    },
    "manufacturing-operations": {
      name: "Productie en operations",
      description: "Eenheden omrekenen, break-evenvolumes, energiekosten en meetkunde voor productiewerk.",
      metaTitle: "Calculators voor productie en operations",
      metaDescription: "Calculators voor productie en operations: break-evenpunt, eenheden omrekenen, stroomkosten, de wet van Ohm en omtrek.",
    },
    "software-data": {
      name: "Software, IT en data",
      description: "Tools voor statistiek, logaritmen en notatie voor engineers en data-analisten.",
      metaTitle: "Calculators voor software, IT en data",
      metaDescription: "Calculators voor engineers en analisten: standaardafwijking, gemiddelde en mediaan, p-waarden, betrouwbaarheidsintervallen, logaritmen en machten.",
    },
    "environment-energy": {
      name: "Milieu en energie",
      description: "Stroomverbruik, wateropvang en brandstofkosten voor duurzame keuzes.",
      metaTitle: "Calculators voor milieu en energie",
      metaDescription: "Calculators voor energie en milieu: stroomkosten, regenwateropvang, brandstofkosten en kinetische energie.",
    },
    "fitness-sports": {
      name: "Fitness en sport",
      description: "Tempo, lichaamsmaten en energiebehoefte voor je trainings- en fitnessdoelen.",
      metaTitle: "Calculators voor fitness en sport",
      metaDescription: "Calculators voor fitness en sport: hardlooptempo, BMI, BMR en snelheid, afstand en tijd, met duidelijke formules.",
    },
    "personal-finance": {
      name: "Persoonlijke financiën en huishouden",
      description: "Dagelijkse geldzaken: loon, leningen, sparen, winkelen, rekeningen en huishoudkosten.",
      metaTitle: "Calculators voor persoonlijke financiën en huishouden",
      metaDescription: "Calculators voor het huishouden: loon, leningen, samengestelde rente, kortingen, fooien, btw en kosten van brandstof en stroom.",
    },
  },
};

export default nl;
