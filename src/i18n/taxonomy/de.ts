import type { TaxonomyText } from "./types";

/** German category and industry collection names, descriptions and metadata. */
const de: TaxonomyText = {
  categories: {
    biology: {
      name: "Biologie",
      description: "Wachstumsraten, Populationen und Laborgrößen für die Arbeit in den Lebenswissenschaften.",
      metaTitle: "Biologie-Rechner",
      metaDescription:
        "Kostenlose Biologie-Rechner für Populationswachstum, Verdopplungszeit und weitere Größen der Lebenswissenschaften – jeweils mit Formel und Rechenbeispielen.",
    },
    chemistry: {
      name: "Chemie",
      description: "Konzentrations-, Verdünnungs- und Lösungsberechnungen für Labor und Unterricht.",
      metaTitle: "Chemie-Rechner",
      metaDescription:
        "Kostenlose Chemie-Rechner für Molarität, Verdünnung von Lösungen und Konzentration – mit Formeln, Einheiten und Rechenbeispielen.",
    },
    construction: {
      name: "Bauwesen",
      description: "Flächen- und Messwerkzeuge für Heimwerkerprojekte und Bauarbeiten.",
      metaTitle: "Rechner für Bau und Handwerk",
      metaDescription:
        "Kostenlose Bau-Rechner, darunter die Flächenberechnung für Rechtecke, Kreise und Dreiecke in Fuß, Zoll, Yard oder Metern.",
    },
    conversion: {
      name: "Umrechnungen",
      description: "Einheitenumrechner auf Grundlage exakter, veröffentlichter Umrechnungsfaktoren.",
      metaTitle: "Einheitenumrechner",
      metaDescription:
        "Kostenlose Einheitenumrechner für Länge, Masse und Temperatur mit exakten SI-Umrechnungsfaktoren, Formeln und Umrechnungstabellen.",
    },
    ecology: {
      name: "Ökologie",
      description: "Schätzungen zu Wasser, Energie und Ressourcen für ein umweltfreundlicheres Zuhause und einen grüneren Garten.",
      metaTitle: "Rechner für Ökologie und Umwelt",
      metaDescription:
        "Kostenlose Ökologie-Rechner zur Regenwassernutzung und für weitere Ressourcenschätzungen – mit klaren Annahmen und Rechenbeispielen.",
    },
    "everyday-life": {
      name: "Haushalt & Alltag",
      description: "Schnelle Antworten zu Trinkgeld, Rabatten, Spritkosten, Noten und anderen alltäglichen Rechnungen.",
      metaTitle: "Rechner für den Alltag",
      metaDescription:
        "Kostenlose Alltagsrechner für Trinkgeld und Rechnungsteilung, Rabatte, Spritkosten und Prüfungsnoten – jeweils mit sichtbarer Formel.",
    },
    finance: {
      name: "Finanzen",
      description: "Lohn, Kredite, Zinsen, Renditen, Steuern und Unternehmensmargen mit nachvollziehbaren Formeln.",
      metaTitle: "Finanzrechner",
      metaDescription:
        "Kostenlose Finanzrechner für Gehalt und Stundenlohn, Kredite, Zinseszins, ROI, Umsatzsteuer, Gewinnmarge und Break-even-Punkt.",
    },
    food: {
      name: "Essen & Kochen",
      description: "Küchenmathematik zum Umrechnen von Rezepten und Planen von Mahlzeiten.",
      metaTitle: "Rechner für Essen und Kochen",
      metaDescription:
        "Kostenlose Küchenrechner, darunter ein Rezeptumrechner, der die Zutatenmengen an jede beliebige Portionenzahl anpasst.",
    },
    health: {
      name: "Gesundheit",
      description: "Allgemeine Gesundheitswerte mit klaren Bereichen und Grenzen. Kein Ersatz für ärztlichen Rat.",
      metaTitle: "Gesundheitsrechner",
      metaDescription:
        "Kostenlose Gesundheitsrechner für BMI und Grundumsatz (BMR) – mit metrischen und imperialen Einheiten und klar benannten Grenzen.",
    },
    math: {
      name: "Mathematik",
      description: "Prozente, Wurzeln, Potenzen, Logarithmen, Geometrie und Zahlenformate – mit der Formel hinter jedem Ergebnis.",
      metaTitle: "Mathe-Rechner",
      metaDescription:
        "Kostenlose Mathe-Rechner für Prozente, Logarithmen, Potenzen, Quadratwurzeln, Steigung, Kreisumfang, signifikante Stellen und mehr.",
    },
    physics: {
      name: "Physik",
      description: "Berechnungen zu Bewegung, Energie und Elektrizität in SI-Einheiten.",
      metaTitle: "Physik-Rechner",
      metaDescription:
        "Kostenlose Physik-Rechner für Geschwindigkeit, Strecke und Zeit, kinetische Energie und das ohmsche Gesetz – mit Formeln und Einheiten.",
    },
    sports: {
      name: "Sport",
      description: "Trainings- und Leistungswerte für Läufer, Radfahrer und Sportler.",
      metaTitle: "Sport-Rechner",
      metaDescription:
        "Kostenlose Sport-Rechner, darunter ein Pace-Rechner für Tempo, Geschwindigkeit und Zielzeiten über gängige Wettkampfdistanzen.",
    },
    statistics: {
      name: "Statistik",
      description: "Deskriptive Statistik, p-Werte und Konfidenzintervalle – mit allen Annahmen offengelegt.",
      metaTitle: "Statistik-Rechner",
      metaDescription:
        "Kostenlose Statistik-Rechner für Mittelwert, Median und Modus, Standardabweichung, p-Werte und Konfidenzintervalle – mit Formeln.",
    },
    other: {
      name: "Sonstiges",
      description: "Nützliche Tools, die sonst nirgends richtig hineinpassen, etwa zu Energiekosten im Haushalt.",
      metaTitle: "Sonstige Rechner",
      metaDescription:
        "Kostenlose sonstige Rechner, darunter ein Stromkostenrechner für Haushaltsgeräte und elektronische Geräte.",
    },
  },
  collections: {
    business: {
      name: "Unternehmen & Gründung",
      description: "Preise, Margen, Break-even und Renditen für die Führung und das Wachstum eines Unternehmens.",
      metaTitle: "Rechner für Unternehmen und Gründer",
      metaDescription:
        "Rechner für Gründer und kleine Unternehmen: Gewinnmarge, Break-even-Punkt, ROI, Umsatzsteuer, Rabatte und prozentuale Veränderung.",
    },
    "accounting-finance": {
      name: "Buchhaltung & Finanzen",
      description: "Zinsen, Kredite, Renditen und Lohnumrechnungen für Finanz- und Buchhaltungsaufgaben.",
      metaTitle: "Rechner für Buchhaltung und Finanzen",
      metaDescription:
        "Rechner für Buchhaltung und Finanzen: Kreditraten, Zinseszins, ROI, Gewinnmarge, Umsatzsteuer und Gehaltsumrechnungen.",
    },
    "hr-payroll": {
      name: "Personal, Lohn & Beschäftigung",
      description: "Rechnen Sie zwischen Gehältern, Stundenlöhnen und Abrechnungszeiträumen um – für Angebote, Budgets und Lohnprüfungen.",
      metaTitle: "Rechner für Personal, Lohn und Beschäftigung",
      metaDescription:
        "Rechner für Personal und Lohnabrechnung: Gehalt in Stundenlohn, Stundenlohn in Gehalt und alle gängigen Zeiträume nach Ihrem Arbeitszeitmodell.",
    },
    "marketing-ecommerce": {
      name: "Online-Marketing & E-Commerce",
      description: "Kampagnenrenditen, Rabatte, Margen und Konversionsstatistiken für Onlinehändler und Marketingfachleute.",
      metaTitle: "Rechner für Online-Marketing und E-Commerce",
      metaDescription:
        "Rechner für Marketing und Onlineshops: ROI, Rabatte, Umsatzsteuer, Gewinnmarge, prozentuale Veränderung und Konfidenzintervalle.",
    },
    "real-estate": {
      name: "Immobilien",
      description: "Wohnfläche, Kreditraten für Baufinanzierungen und Investitionsrenditen für Immobilienentscheidungen.",
      metaTitle: "Rechner für Immobilien",
      metaDescription:
        "Rechner für Immobilien: Flächenberechnung, Kredit- und Hypothekenraten, ROI und Regenwassernutzung für Grundstücke und Gebäude.",
    },
    "construction-engineering": {
      name: "Bau- & Ingenieurwesen",
      description: "Flächen, rechtwinklige Dreiecke, Steigungen und Einheitenumrechnungen für Baustelle und Planung.",
      metaTitle: "Rechner für Bau- und Ingenieurwesen",
      metaDescription:
        "Rechner für Bau- und Ingenieurwesen: Flächenberechnung, Satz des Pythagoras, Steigung, Kreisumfang und Einheitenumrechnung.",
    },
    "education-research": {
      name: "Bildung & Forschung",
      description: "Werkzeuge für Mathematik, Statistik und Naturwissenschaften für Lernende, Lehrkräfte und Forschende.",
      metaTitle: "Rechner für Bildung und Forschung",
      metaDescription:
        "Rechner für Studierende und Forschende: Statistik, p-Werte, Logarithmen, signifikante Stellen sowie Formeln aus Chemie und Physik.",
    },
    healthcare: {
      name: "Gesundheitswesen & Medizin",
      description: "Allgemeine Gesundheitswerte und Laborrechnungen. Wenden Sie stets klinisches Urteilsvermögen und lokale Leitlinien an.",
      metaTitle: "Rechner für das Gesundheitswesen",
      metaDescription:
        "Rechner für Gesundheitswesen und Labor: BMI, Grundumsatz, Molarität, Verdünnung und p-Werte – mit Quellen und klar benannten Grenzen.",
    },
    "agriculture-gardening": {
      name: "Landwirtschaft & Garten",
      description: "Schätzungen zu Fläche, Wasser und Wachstum für Höfe, Parzellen und Gärten.",
      metaTitle: "Rechner für Landwirtschaft und Garten",
      metaDescription:
        "Rechner für Landwirte und Gärtner: Flächenberechnung, Regenwassernutzung, Verdopplungszeit von Populationen und Einheitenumrechnung.",
    },
    "food-hospitality": {
      name: "Gastronomie & Gastgewerbe",
      description: "Rezeptumrechnung, Trinkgeld, Preise und Margen für Küchen, Restaurants und Gastgeber.",
      metaTitle: "Rechner für Gastronomie und Gastgewerbe",
      metaDescription:
        "Rechner für Küche und Restaurant: Rezeptumrechner, Trinkgeld und Rechnungsteilung, Gewinnmarge, Rabatte und Temperaturumrechnung.",
    },
    "manufacturing-operations": {
      name: "Produktion & Betrieb",
      description: "Einheitenumrechnungen, Break-even-Mengen, Energiekosten und Geometrie für die Produktion.",
      metaTitle: "Rechner für Produktion und Betrieb",
      metaDescription:
        "Rechner für Produktion und Betrieb: Break-even-Punkt, Einheitenumrechnung, Stromkosten, ohmsches Gesetz und Kreisumfang.",
    },
    "software-data": {
      name: "Software, IT & Daten",
      description: "Statistik, Logarithmen und Notationswerkzeuge für Entwickler und Datenanalysten.",
      metaTitle: "Rechner für Software, IT und Daten",
      metaDescription:
        "Rechner für Entwickler und Analysten: Standardabweichung, Mittelwert und Median, p-Werte, Konfidenzintervalle, Logarithmen und Potenzen.",
    },
    "environment-energy": {
      name: "Umwelt & Energie",
      description: "Stromverbrauch, Regenwassernutzung und Spritkosten für nachhaltige Entscheidungen.",
      metaTitle: "Rechner für Umwelt und Energie",
      metaDescription:
        "Rechner für Energie und Umwelt: Stromkosten, Regenwassernutzung, Spritkosten und kinetische Energie.",
    },
    "fitness-sports": {
      name: "Fitness & Sport",
      description: "Tempo, Körperwerte und Energiebedarf für Training und Fitnessziele.",
      metaTitle: "Rechner für Fitness und Sport",
      metaDescription:
        "Rechner für Fitness und Sport: Lauftempo, BMI, Grundumsatz sowie Geschwindigkeit, Strecke und Zeit – mit klaren Formeln.",
    },
    "personal-finance": {
      name: "Private Finanzen & Haushalt",
      description: "Alltägliche Geldentscheidungen: Lohn, Kredite, Sparen, Einkaufen, Rechnungen und Haushaltskosten.",
      metaTitle: "Rechner für private Finanzen und Haushalt",
      metaDescription:
        "Haushaltsrechner für Lohn, Kredite, Zinseszins, Rabatte, Trinkgeld, Umsatzsteuer sowie Sprit- und Stromkosten.",
    },
  },
};

export default de;
