import type { TaxonomyText } from "./types";

/** Italian category and industry collection texts. */
const it: TaxonomyText = {
  categories: {
    biology: {
      name: "Biologia",
      description: "Tassi di crescita, popolazioni e quantità di laboratorio per le scienze della vita.",
      metaTitle: "Calcolatori di biologia",
      metaDescription: "Calcolatori di biologia gratuiti per la crescita delle popolazioni, il tempo di raddoppio e altre grandezze delle scienze della vita, con formula ed esempi.",
    },
    chemistry: {
      name: "Chimica",
      description: "Calcoli di concentrazione, diluizione e soluzioni per il laboratorio e la classe.",
      metaTitle: "Calcolatori di chimica",
      metaDescription: "Calcolatori di chimica gratuiti per molarità, diluizione delle soluzioni e concentrazione, con formule, unità di misura ed esempi svolti.",
    },
    construction: {
      name: "Edilizia",
      description: "Strumenti per superfici e misure per lavori in casa e cantieri.",
      metaTitle: "Calcolatori per l'edilizia",
      metaDescription: "Calcolatori per l'edilizia gratuiti, come quello della superficie di rettangoli, cerchi e triangoli in piedi, pollici, iarde o metri.",
    },
    conversion: {
      name: "Conversione",
      description: "Convertitori di unità basati su fattori di conversione esatti e pubblicati.",
      metaTitle: "Calcolatori di conversione di unità",
      metaDescription: "Convertitori di unità gratuiti per lunghezza, massa e temperatura con fattori di conversione SI esatti, formule e tabelle di conversione.",
    },
    ecology: {
      name: "Ecologia",
      description: "Stime di acqua, energia e risorse per case e giardini più sostenibili.",
      metaTitle: "Calcolatori di ecologia e ambiente",
      metaDescription: "Calcolatori di ecologia gratuiti per la raccolta dell'acqua piovana e altre stime sulle risorse, con ipotesi chiare ed esempi svolti.",
    },
    "everyday-life": {
      name: "Vita quotidiana",
      description: "Risposte rapide per mance, sconti, carburante, voti e altri conti di tutti i giorni.",
      metaTitle: "Calcolatori per la vita quotidiana",
      metaDescription: "Calcolatori gratuiti per tutti i giorni: mance e divisione del conto, sconti, costo del carburante e voti degli esami, con la formula in vista.",
    },
    finance: {
      name: "Finanza",
      description: "Retribuzioni, prestiti, interessi, rendimenti, imposte e margini aziendali con formule trasparenti.",
      metaTitle: "Calcolatori finanziari",
      metaDescription: "Calcolatori finanziari gratuiti per stipendio e paga oraria, prestiti, interesse composto, ROI, imposta sulle vendite, margine di profitto e pareggio.",
    },
    food: {
      name: "Cucina",
      description: "Calcoli di cucina per adattare le ricette e pianificare i pasti.",
      metaTitle: "Calcolatori di cucina e alimentazione",
      metaDescription: "Calcolatori di cucina gratuiti, come uno strumento che adatta le quantità degli ingredienti di una ricetta a qualsiasi numero di porzioni.",
    },
    health: {
      name: "Salute",
      description: "Indicatori generali di salute con intervalli e limiti chiari. Non sostituiscono il parere del medico.",
      metaTitle: "Calcolatori per la salute",
      metaDescription: "Calcolatori per la salute gratuiti di IMC (BMI) e metabolismo basale (BMR), con unità metriche e imperiali e limiti indicati con chiarezza.",
    },
    math: {
      name: "Matematica",
      description: "Percentuali, radici, potenze, logaritmi, geometria e formattazione dei numeri, con la formula dietro ogni risposta.",
      metaTitle: "Calcolatori di matematica",
      metaDescription: "Calcolatori di matematica gratuiti per percentuali, logaritmi, potenze, radici quadrate, pendenza, circonferenza, cifre significative e altro.",
    },
    physics: {
      name: "Fisica",
      description: "Calcoli di moto, energia ed elettricità con unità SI.",
      metaTitle: "Calcolatori di fisica",
      metaDescription: "Calcolatori di fisica gratuiti per velocità, distanza e tempo, energia cinetica e legge di Ohm, con formule e gestione delle unità.",
    },
    sports: {
      name: "Sport",
      description: "Dati di allenamento e prestazione per runner, ciclisti e atleti.",
      metaTitle: "Calcolatori per lo sport",
      metaDescription: "Calcolatori per lo sport gratuiti, come quello del passo di corsa per calcolare passo, velocità e tempi finali sulle distanze di gara più comuni.",
    },
    statistics: {
      name: "Statistica",
      description: "Statistica descrittiva, valori p e intervalli di confidenza con tutte le ipotesi dichiarate.",
      metaTitle: "Calcolatori di statistica",
      metaDescription: "Calcolatori di statistica gratuiti per media, mediana e moda, deviazione standard, valori p e intervalli di confidenza, con formule.",
    },
    other: {
      name: "Altro",
      description: "Strumenti utili che non rientrano in altre categorie, come il costo dell'energia in casa.",
      metaTitle: "Altri calcolatori",
      metaDescription: "Calcolatori gratuiti di vario tipo, come un calcolatore del costo dell'elettricità di elettrodomestici e dispositivi.",
    },
  },
  collections: {
    business: {
      name: "Business e imprenditoria",
      description: "Prezzi, margini, punto di pareggio e rendimenti per gestire e far crescere un'attività.",
      metaTitle: "Calcolatori per business e imprenditoria",
      metaDescription: "Calcolatori per imprenditori e piccole imprese: margine di profitto, punto di pareggio, ROI, imposta sulle vendite, sconti e variazione percentuale.",
    },
    "accounting-finance": {
      name: "Contabilità e finanza",
      description: "Interessi, prestiti, rendimenti e conversioni delle retribuzioni per il lavoro in finanza e contabilità.",
      metaTitle: "Calcolatori di contabilità e finanza",
      metaDescription: "Calcolatori di contabilità e finanza: rate dei prestiti, interesse composto, ROI, margine di profitto, imposta sulle vendite e conversioni dello stipendio.",
    },
    "hr-payroll": {
      name: "Risorse umane, paghe e lavoro",
      description: "Converti tra stipendi, paghe orarie e periodi di pagamento per offerte, budget e controlli delle buste paga.",
      metaTitle: "Calcolatori per risorse umane, paghe e lavoro",
      metaDescription: "Calcolatori per HR e paghe: da stipendio a paga oraria, da paga oraria a stipendio e tutti i periodi di pagamento comuni, in base al tuo orario.",
    },
    "marketing-ecommerce": {
      name: "Marketing digitale ed e-commerce",
      description: "Rendimento delle campagne, sconti, margini e statistiche di conversione per venditori online e marketer.",
      metaTitle: "Calcolatori di marketing digitale ed e-commerce",
      metaDescription: "Calcolatori per marketer e negozi online: ROI, sconti, imposta sulle vendite, margine di profitto, variazione percentuale e intervalli di confidenza.",
    },
    "real-estate": {
      name: "Immobiliare",
      description: "Superficie, rate di prestiti tipo mutuo e rendimento degli investimenti per le decisioni immobiliari.",
      metaTitle: "Calcolatori per il settore immobiliare",
      metaDescription: "Calcolatori per il settore immobiliare: superficie, rate di prestiti e mutui, ROI e raccolta dell'acqua piovana per gli immobili.",
    },
    "construction-engineering": {
      name: "Edilizia e ingegneria civile",
      description: "Superfici, triangoli rettangoli, pendenze e conversioni di unità per cantiere e progettazione.",
      metaTitle: "Calcolatori di edilizia e ingegneria civile",
      metaDescription: "Calcolatori per edilizia e ingegneria civile: superficie, teorema di Pitagora, pendenza, circonferenza e conversione di unità.",
    },
    "education-research": {
      name: "Istruzione e ricerca accademica",
      description: "Strumenti di matematica, statistica e scienze per studenti, insegnanti e ricercatori.",
      metaTitle: "Calcolatori per istruzione e ricerca",
      metaDescription: "Calcolatori per studenti e ricercatori: statistica, valori p, logaritmi, cifre significative e formule di chimica e fisica.",
    },
    healthcare: {
      name: "Sanità e professionisti medici",
      description: "Indicatori generali di salute e calcoli di laboratorio. Applica sempre il giudizio clinico e le linee guida locali.",
      metaTitle: "Calcolatori per la sanità",
      metaDescription: "Calcolatori per ambito sanitario e di laboratorio: IMC, metabolismo basale, molarità, diluizione e valori p, con fonti e limiti indicati.",
    },
    "agriculture-gardening": {
      name: "Agricoltura e giardinaggio",
      description: "Stime di superficie, acqua e crescita per aziende agricole, orti e giardini.",
      metaTitle: "Calcolatori di agricoltura e giardinaggio",
      metaDescription: "Calcolatori per coltivatori e giardinieri: superficie, raccolta dell'acqua piovana, tempo di raddoppio delle popolazioni e conversione di unità.",
    },
    "food-hospitality": {
      name: "Ristorazione e ospitalità",
      description: "Adattamento delle ricette, mance, prezzi e margini per cucine, ristoranti e padroni di casa.",
      metaTitle: "Calcolatori per ristorazione e ospitalità",
      metaDescription: "Calcolatori per cucine e ristoranti: adattamento delle ricette, mance e divisione del conto, margine di profitto, sconti e conversione di temperatura.",
    },
    "manufacturing-operations": {
      name: "Produzione e operations",
      description: "Conversioni di unità, volumi di pareggio, costi energetici e geometria per la produzione.",
      metaTitle: "Calcolatori per produzione e operations",
      metaDescription: "Calcolatori per produzione e operations: punto di pareggio, conversioni di unità, costo dell'elettricità, legge di Ohm e circonferenza.",
    },
    "software-data": {
      name: "Software, IT e dati",
      description: "Strumenti di statistica, logaritmi e notazione per ingegneri e analisti di dati.",
      metaTitle: "Calcolatori per software, IT e dati",
      metaDescription: "Calcolatori per ingegneri e analisti: deviazione standard, media e mediana, valori p, intervalli di confidenza, logaritmi e potenze.",
    },
    "environment-energy": {
      name: "Ambiente ed energia",
      description: "Consumo elettrico, raccolta dell'acqua e costi del carburante per scelte sostenibili.",
      metaTitle: "Calcolatori per ambiente ed energia",
      metaDescription: "Calcolatori per energia e ambiente: costo dell'elettricità, raccolta dell'acqua piovana, costo del carburante ed energia cinetica.",
    },
    "fitness-sports": {
      name: "Fitness e sport",
      description: "Passo, misure corporee e fabbisogno energetico per i tuoi obiettivi di allenamento e forma fisica.",
      metaTitle: "Calcolatori per fitness e sport",
      metaDescription: "Calcolatori per fitness e sport: passo di corsa, IMC, metabolismo basale e velocità, distanza e tempo, con formule chiare.",
    },
    "personal-finance": {
      name: "Finanza personale e famiglia",
      description: "Decisioni economiche di tutti i giorni: retribuzione, prestiti, risparmi, acquisti, bollette e spese di casa.",
      metaTitle: "Calcolatori di finanza personale e familiare",
      metaDescription: "Calcolatori per la casa: retribuzione, prestiti, interesse composto, sconti, mance, imposta sulle vendite e costi di carburante ed elettricità.",
    },
  },
};

export default it;
