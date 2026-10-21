import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConcreteText } from "../text/en";

const it: CalculatorTranslation<ConcreteText> = {
  content: {
    title: "Calcolatore del calcestruzzo",
    shortTitle: "Calcestruzzo",
    summary: "Calcola quanto calcestruzzo ordinare per solette, plinti, pilastri circolari e tubi cavi, con un margine facoltativo per lo sfrido.",
    metaTitle: "Calcolatore del calcestruzzo – Volume di solette e pilastri",
    metaDescription:
      "Calcola il volume di calcestruzzo per solette, plinti, pilastri e tubi in metri cubi, iarde cubiche, piedi cubi e litri, con un margine per lo sfrido.",
    keywords: ["calcolatore calcestruzzo", "metri cubi di calcestruzzo", "volume calcestruzzo", "calcestruzzo per soletta", "calcestruzzo per plinti", "calcestruzzo per pilastri", "calcestruzzo preconfezionato"],
    intro: [
      "Il calcestruzzo si ordina a volume. Inserisci le dimensioni di una soletta, di un plinto, di un pilastro circolare o di un tubo cavo per vedere quanto te ne serve, nelle unità usate dai fornitori.",
      "Un margine facoltativo per lo sfrido copre le perdite, il terreno irregolare e le casseforme che si deformano verso l'esterno, così da non restare a corto al momento della consegna.",
    ],
    howToUse: [
      "Scegli la forma e le unità metriche o statunitensi.",
      "Inserisci le dimensioni: i lati lunghi in metri o piedi, lo spessore e i diametri in centimetri o pollici.",
      "Inserisci quanti elementi identici devi gettare.",
      "Imposta il margine per lo sfrido (di solito tra il 5 e il 10%) e leggi il volume da ordinare.",
    ],
    formulas: [
      { title: "Soletta o plinto", expression: "V = lunghezza × larghezza × spessore", explanation: "Un blocco rettangolare. Prima converti tutte le dimensioni nella stessa unità." },
      { title: "Pilastro circolare", expression: "V = π × (diametro ÷ 2)² × altezza", explanation: "Un cilindro, come un pilastro gettato in una cassaforma tubolare di cartone." },
      { title: "Tubo cavo", expression: "V = π × ((esterno ÷ 2)² − (interno ÷ 2)²) × altezza", explanation: "Il cilindro esterno meno il nucleo cavo." },
      { title: "Con lo sfrido", expression: "Ordine = V × numero di elementi × (1 + % di sfrido ÷ 100)", explanation: "1 yd³ = 0,764555 m³ e 1 m³ = 1000 L." },
    ],
    examples: [
      {
        title: "Soletta per un patio di 4 m × 3 m, spessore 10 cm, sfrido del 10%",
        steps: ["V = 4 m × 3 m × 0,10 m = 1,2 m³", "Con il 10% di sfrido: 1,2 × 1,10 = 1,32 m³"],
      },
      {
        title: "Pavimento di un garage di 10 ft × 10 ft, spessore 4 in, senza sfrido",
        steps: ["V = 10 ft × 10 ft × 4/12 ft = 33,33 ft³", "33,33 ft³ ÷ 27 = 1,235 yd³"],
      },
    ],
    assumptions: [
      "Le forme sono rettangoli e cilindri ideali; misura le casseforme reali, perché terreno e casseforme raramente sono perfettamente piani o dritti.",
      "Il margine per lo sfrido è una percentuale del volume esatto; non tiene conto delle armature, che occupano una piccola quantità di calcestruzzo.",
      "È solo una stima del volume, non una consulenza tecnica né un calcolo strutturale. Spessore, armature e classe di resistenza del calcestruzzo devono rispettare le norme locali o il progetto di un ingegnere.",
    ],
    faqs: [
      {
        question: "Quanto calcestruzzo in più devo ordinare?",
        answer: "Tra il 5 e il 10% è un margine abituale per solette su terreno preparato; scavi irregolari possono richiederne di più. Restare senza calcestruzzo a metà getto crea giunti deboli, quindi i fornitori consigliano di solito di arrotondare per eccesso.",
      },
      { question: "Quanti piedi cubi ci sono in una iarda cubica?", answer: "27, perché una iarda misura 3 piedi e 3 × 3 × 3 = 27. Una iarda cubica corrisponde a circa 0,765 metri cubi." },
      { question: "Posso usarlo per i sacchi di calcestruzzo premiscelato?", answer: "Sì: dividi il volume per la resa indicata sul sacco, che varia secondo il prodotto, e arrotonda per eccesso." },
    ],
    sourcesUsedFor: ["Fattori di conversione esatti tra piedi, pollici, metri, iarde cubiche e metri cubi."],
  },
  text: {
    shape: "Forma",
    shapes: { slab: "Soletta o plinto", column: "Pilastro circolare", tube: "Tubo cavo" },
    units: "Unità",
    unitSystems: { metric: "Metriche (m, cm)", imperial: "USA (ft, in)" },
    length: "Lunghezza",
    width: "Larghezza",
    thickness: "Spessore",
    diameter: "Diametro",
    outerDiameter: "Diametro esterno",
    innerDiameter: "Diametro interno",
    height: "Altezza",
    quantity: "Numero di elementi identici",
    waste: "Margine per lo sfrido",
    wasteHelp: "Margine per perdite, terreno irregolare e scavo in eccesso. Di solito tra il 5 e il 10%; usa 0 per il volume esatto.",
    errors: { inner: "Il diametro interno deve essere minore di quello esterno." },
    volume: "Calcestruzzo da ordinare",
    caption: "{exact} senza il margine del {waste} per lo sfrido.",
    exact: "Volume esatto (senza sfrido)",
    inCubicMetres: "In metri cubi",
    inCubicYards: "In iarde cubiche",
    inCubicFeet: "In piedi cubi",
    inLitres: "In litri",
    notes: {
      order: "Il calcestruzzo preconfezionato si vende al metro cubo o alla iarda cubica; arrotonda per eccesso fino all'incremento minimo del fornitore.",
      structural: "Questo stima solo il volume. Spessore della soletta, armature, resistenza dell'impasto e dimensioni dei plinti devono seguire le norme edilizie locali o il progetto di un ingegnere.",
    },
  },
};

export default it;
