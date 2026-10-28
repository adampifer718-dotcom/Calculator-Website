import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SubnetText } from "../text/en";

const it: CalculatorTranslation<SubnetText> = {
  content: {
    title: "Calcolatore di subnet IP",
    shortTitle: "Subnet IP",
    summary:
      "Trova gli indirizzi di rete e di broadcast, l'intervallo di host utilizzabili, le maschere e il tipo di indirizzo di qualsiasi indirizzo IPv4 con prefisso.",
    metaTitle: "Calcolatore di subnet IP – CIDR IPv4, maschera e host",
    metaDescription:
      "Inserisci un indirizzo IPv4 con prefisso CIDR o subnet mask per ottenere rete, broadcast, primo e ultimo host, host utilizzabili e wildcard mask.",
    keywords: [
      "calcolo subnet",
      "subnet mask",
      "calcolatore CIDR",
      "sottorete IPv4",
      "wildcard mask",
      "indirizzo di rete",
      "indirizzo di broadcast",
      "host utilizzabili",
    ],
    intro: [
      "Un indirizzo IPv4 è un numero a 32 bit scritto in quattro parti da 0 a 255. La lunghezza del prefisso, per esempio /24, indica quanti di quei bit identificano la rete; i restanti numerano gli host al suo interno. Una subnet mask come 255.255.255.0 è la stessa informazione scritta in forma di indirizzo.",
      "Questo calcolatore prende un indirizzo e un prefisso o una maschera e ricava l'indirizzo di rete, l'indirizzo di broadcast, l'intervallo di indirizzi assegnabili agli host e quanti sono. Mostra anche la wildcard mask usata nelle access list e nelle configurazioni dei router, e se l'indirizzo è privato, pubblico o a uso speciale.",
    ],
    howToUse: [
      "Scrivi un indirizzo IPv4, per esempio 192.168.1.10. Puoi aggiungere il prefisso dopo una barra, come in 192.168.1.10/24.",
      "Se non hai scritto la barra, scegli una lunghezza del prefisso oppure passa a subnet mask e scrivi la maschera.",
      "Leggi l'indirizzo di rete, poi l'indirizzo di broadcast, l'intervallo di host, il numero di host utilizzabili e le maschere.",
    ],
    formulas: [
      {
        title: "Subnet mask",
        expression: "maschera = 2³² − 2³²⁻ᵖ",
        explanation: "p è la lunghezza del prefisso: i primi p bit valgono 1 e gli altri 0. Per /24 si ottiene 255.255.255.0.",
      },
      {
        title: "Rete e broadcast",
        expression: "rete = indirizzo AND maschera; broadcast = rete OR wildcard",
        explanation: "La wildcard mask è la maschera con tutti i bit invertiti (NOT maschera), per esempio 0.0.0.255 per /24.",
      },
      {
        title: "Host utilizzabili",
        expression: "host = 2³²⁻ᵖ − 2",
        explanation:
          "Gli indirizzi di rete e di broadcast non si possono assegnare agli host. Un collegamento punto-punto /31 ha 2 indirizzi utilizzabili (RFC 3021) e un /32 ne ha 1.",
      },
    ],
    examples: [
      {
        title: "Rete domestica: 192.168.1.10/24",
        steps: [
          "Maschera per /24 = 255.255.255.0, wildcard = 0.0.0.255",
          "Rete = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0; broadcast = 192.168.1.255",
          "Host utilizzabili = 2⁸ − 2 = 254, da 192.168.1.1 a 192.168.1.254; l'indirizzo è privato (RFC 1918)",
        ],
      },
      {
        title: "10.45.200.17 con maschera 255.255.240.0",
        steps: [
          "255.255.240.0 ha 8 + 8 + 4 = 20 bit a uno, quindi il prefisso è /20",
          "Terza parte: 200 AND 240 = 192, quindi la rete è 10.45.192.0 e il broadcast 10.45.207.255",
          "Host utilizzabili = 2¹² − 2 = 4.094, da 10.45.192.1 a 10.45.207.254",
        ],
      },
      {
        title: "Blocco per un piccolo ufficio: 172.20.5.130/27",
        steps: [
          "Maschera per /27 = 255.255.255.224, quindi blocchi da 32 indirizzi",
          "130 AND 224 = 128, quindi la rete è 172.20.5.128 e il broadcast 172.20.5.159",
          "Host utilizzabili = 2⁵ − 2 = 30, da 172.20.5.129 a 172.20.5.158",
        ],
      },
    ],
    assumptions: [
      "Solo IPv4. Gli indirizzi IPv6 non sono accettati.",
      "Le parti dell'indirizzo vanno scritte in decimale semplice senza zeri iniziali, perché alcuni sistemi leggono una parte come 010 in ottale.",
      "Le etichette privato e a uso speciale descrivono l'indirizzo che hai scritto, in base ai blocchi a uso speciale dell'IANA. La sua raggiungibilità dipende anche dall'instradamento e dai firewall della tua rete.",
    ],
    faqs: [
      {
        question: "Perché si sottraggono due indirizzi dal numero di host?",
        answer:
          "In una sottorete normale il primo indirizzo identifica la rete stessa e l'ultimo è l'indirizzo di broadcast che raggiunge tutti gli host. Nessuno dei due può essere assegnato a un dispositivo, quindi una /24 ha 256 indirizzi ma 254 host utilizzabili.",
      },
      {
        question: "Che cos'è una wildcard mask?",
        answer:
          "È la subnet mask con tutti i bit invertiti: 255.255.255.0 diventa 0.0.0.255. Le access list dei router e alcuni protocolli di instradamento la usano per indicare quali bit di un indirizzo possono variare.",
      },
      {
        question: "Le classi di indirizzi A, B e C si usano ancora?",
        answer:
          "Non per l'instradamento. L'indirizzamento senza classi (CIDR) le ha sostituite negli anni '90, quindi qualsiasi lunghezza di prefisso può essere usata con qualsiasi indirizzo. La classe viene mostrata solo perché materiali più vecchi e alcuni esami vi fanno ancora riferimento.",
      },
    ],
    sourcesUsedFor: [
      "I tre blocchi IPv4 privati 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16.",
      "Il trattamento di entrambi gli indirizzi di una rete /31 come utilizzabili, senza broadcast diretto.",
      "La notazione con lunghezza del prefisso (CIDR), che ha sostituito le storiche classi di indirizzi.",
      "Gli altri blocchi a uso speciale, come gli indirizzi di loopback, link-local, condivisi e di documentazione.",
    ],
  },
  text: {
    address: "Indirizzo IPv4",
    addressHelp:
      "Quattro numeri da 0 a 255 separati da punti, come 192.168.1.10. Puoi aggiungere la lunghezza del prefisso dopo una barra, come in 192.168.1.10/24.",
    maskType: "Indica la dimensione della rete come",
    maskTypes: { prefix: "Lunghezza del prefisso (CIDR)", mask: "Subnet mask" },
    prefix: "Lunghezza del prefisso",
    mask: "Subnet mask",
    maskHelp: "In notazione puntata, come 255.255.255.0. I bit a 1 devono essere contigui a partire da sinistra.",
    errors: {
      address: "Inserisci un indirizzo IPv4 come quattro numeri da 0 a 255 separati da punti, come 192.168.1.10.",
      octet: "Ogni parte dell'indirizzo deve essere un numero intero da 0 a 255; “{octet}” non lo è.",
      leadingZero: "Scrivi “{octet}” senza zeri iniziali. Alcuni sistemi leggono gli zeri iniziali come ottale.",
      prefix: "La lunghezza del prefisso dopo la barra deve essere un numero intero da 0 a 32.",
      mask: "Inserisci una subnet mask come quattro numeri da 0 a 255 separati da punti, come 255.255.255.0.",
      maskContiguous:
        "Questa maschera non è valida: tutti i suoi bit a 1 devono precedere i bit a 0 (per esempio 255.255.240.0, non 255.0.255.0).",
    },
    network: "Indirizzo di rete",
    caption: "{address} in una rete /{prefix}.",
    cidr: "Rete in notazione CIDR",
    broadcast: "Indirizzo di broadcast",
    broadcastNone: "Nessuno (nessun broadcast diretto con questa lunghezza del prefisso)",
    firstHost: "Primo host utilizzabile",
    lastHost: "Ultimo host utilizzabile",
    usableHosts: "Indirizzi host utilizzabili",
    totalAddresses: "Indirizzi totali nella rete",
    subnetMask: "Subnet mask",
    wildcard: "Wildcard mask",
    prefixLength: "Lunghezza del prefisso",
    binaryMask: "Subnet mask in binario",
    addressClass: "Classe storica dell'indirizzo",
    classes: {
      A: "Classe A",
      B: "Classe B",
      C: "Classe C",
      D: "Classe D (multicast)",
      E: "Classe E (riservata)",
    },
    scope: "Tipo di indirizzo",
    scopes: {
      private: "Privato (RFC 1918)",
      public: "Pubblico (instradabile globalmente)",
      loopback: "Loopback (127.0.0.0/8)",
      linkLocal: "Link-local (169.254.0.0/16)",
      shared: "Spazio di indirizzi condiviso per il NAT carrier-grade (100.64.0.0/10)",
      thisNetwork: "“Questa rete” (0.0.0.0/8)",
      documentation: "Riservato alla documentazione",
      benchmarking: "Riservato ai test di prestazioni di rete (198.18.0.0/15)",
      ietf: "Assegnazioni per protocolli IETF (192.0.0.0/24)",
      multicast: "Multicast (224.0.0.0/4)",
      reserved: "Riservato (240.0.0.0/4)",
      broadcast: "Broadcast limitato (255.255.255.255)",
    },
    notes: {
      slashUsed: "È stata usata la lunghezza del prefisso scritta dopo la barra nell'indirizzo.",
      p31: "Una rete /31 non ha indirizzo di rete né di broadcast: entrambi gli indirizzi si possono usare su un collegamento punto-punto (RFC 3021).",
      p32: "Un /32 indica un singolo indirizzo host.",
      classful: "Le classi di indirizzi sono storiche. Dal CIDR (RFC 4632) in poi, la dimensione della rete è stabilita solo dalla lunghezza del prefisso.",
      private:
        "Gli indirizzi privati si possono usare liberamente all'interno di una rete ma non vengono instradati sull'internet pubblica; di solito la raggiungono tramite NAT.",
    },
  },
};

export default it;
