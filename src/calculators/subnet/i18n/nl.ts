import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SubnetText } from "../text/en";

const nl: CalculatorTranslation<SubnetText> = {
  content: {
    title: "IP-subnetcalculator",
    shortTitle: "IP-subnet",
    summary:
      "Vind het netwerk- en broadcastadres, het bruikbare hostbereik, de maskers en het adrestype van elk IPv4-adres met prefix.",
    metaTitle: "IP-subnetcalculator – IPv4-CIDR, masker en hostbereik",
    metaDescription:
      "Vul een IPv4-adres in met een CIDR-prefix of subnetmasker en krijg het netwerk- en broadcastadres, de eerste en laatste host, bruikbare hosts en het wildcardmasker.",
    keywords: ["subnetcalculator", "IP-subnet berekenen", "CIDR-calculator", "IPv4-subnet", "subnetmasker", "wildcardmasker", "netwerkadres", "broadcastadres"],
    intro: [
      "Een IPv4-adres is een getal van 32 bits, geschreven als vier delen van 0 tot 255. De prefixlengte, zoals /24, geeft aan hoeveel van die bits het netwerk aanduiden; de rest nummert de hosts daarbinnen. Een subnetmasker zoals 255.255.255.0 is dezelfde informatie, geschreven als adres.",
      "Deze calculator neemt een adres en een prefix of masker en berekent het netwerkadres, het broadcastadres, het bereik van hostadressen dat je kunt toewijzen en hoeveel dat er zijn. Hij toont ook het wildcardmasker dat in access lists en routerconfiguraties wordt gebruikt, en of het adres privé, publiek of voor speciaal gebruik is.",
    ],
    howToUse: [
      "Typ een IPv4-adres, bijvoorbeeld 192.168.1.10. Je kunt de prefix na een schuine streep toevoegen, zoals 192.168.1.10/24.",
      "Heb je geen schuine streep getypt, kies dan een prefixlengte of schakel over naar subnetmasker en typ het masker.",
      "Lees het netwerkadres af, en daarna het broadcastadres, het hostbereik, het aantal bruikbare hosts en de maskers.",
    ],
    formulas: [
      {
        title: "Subnetmasker",
        expression: "masker = 2³² − 2³²⁻ᵖ",
        explanation: "p is de prefixlengte: de eerste p bits zijn 1 en de rest is 0. Voor /24 is dat 255.255.255.0.",
      },
      {
        title: "Netwerk en broadcast",
        expression: "netwerk = adres AND masker; broadcast = netwerk OR wildcard",
        explanation: "Het wildcardmasker is het masker met elke bit omgedraaid (NOT masker), bijvoorbeeld 0.0.0.255 voor /24.",
      },
      {
        title: "Bruikbare hosts",
        expression: "hosts = 2³²⁻ᵖ − 2",
        explanation: "Het netwerk- en het broadcastadres kunnen niet aan hosts worden gegeven. Een point-to-pointverbinding met /31 heeft 2 bruikbare adressen (RFC 3021) en een /32 heeft er 1.",
      },
    ],
    examples: [
      {
        title: "Thuisnetwerk: 192.168.1.10/24",
        steps: [
          "Masker voor /24 = 255.255.255.0, wildcard = 0.0.0.255",
          "Netwerk = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0; broadcast = 192.168.1.255",
          "Bruikbare hosts = 2⁸ − 2 = 254, van 192.168.1.1 tot 192.168.1.254; het adres is privé (RFC 1918)",
        ],
      },
      {
        title: "10.45.200.17 met masker 255.255.240.0",
        steps: [
          "255.255.240.0 heeft 8 + 8 + 4 = 20 enen, dus de prefix is /20",
          "Derde deel: 200 AND 240 = 192, dus het netwerk is 10.45.192.0 en de broadcast 10.45.207.255",
          "Bruikbare hosts = 2¹² − 2 = 4.094, van 10.45.192.1 tot 10.45.207.254",
        ],
      },
      {
        title: "Klein kantoorblok: 172.20.5.130/27",
        steps: [
          "Masker voor /27 = 255.255.255.224, dus blokken van 32 adressen",
          "130 AND 224 = 128, dus het netwerk is 172.20.5.128 en de broadcast 172.20.5.159",
          "Bruikbare hosts = 2⁵ − 2 = 30, van 172.20.5.129 tot 172.20.5.158",
        ],
      },
    ],
    assumptions: [
      "Alleen IPv4. IPv6-adressen worden niet geaccepteerd.",
      "Adresdelen moeten als gewone decimale getallen zonder voorloopnullen worden geschreven, omdat sommige systemen een deel zoals 010 als octaal lezen.",
      "De labels privé en speciaal gebruik beschrijven het adres dat je hebt getypt, op basis van de IANA-blokken voor speciaal gebruik. Of het bereikbaar is, hangt ook af van de routering en firewalls van je netwerk.",
    ],
    faqs: [
      {
        question: "Waarom worden er twee adressen van het aantal hosts afgetrokken?",
        answer:
          "In een gewoon subnet identificeert het eerste adres het netwerk zelf en is het laatste het broadcastadres dat alle hosts bereikt. Geen van beide kan aan een apparaat worden toegewezen, dus een /24 heeft 256 adressen maar 254 bruikbare hosts.",
      },
      {
        question: "Wat is een wildcardmasker?",
        answer:
          "Dat is het subnetmasker met elke bit omgekeerd: 255.255.255.0 wordt 0.0.0.255. Access lists op routers en sommige routeringsprotocollen gebruiken het om aan te geven welke bits van een adres mogen variëren.",
      },
      {
        question: "Worden adresklassen A, B en C nog gebruikt?",
        answer:
          "Niet voor routering. Klasseloze adressering (CIDR) heeft ze in de jaren negentig vervangen, dus elke prefixlengte kan met elk adres worden gebruikt. De klasse wordt alleen getoond omdat ouder materiaal en sommige examens er nog naar verwijzen.",
      },
    ],
    sourcesUsedFor: [
      "De drie private IPv4-blokken 10.0.0.0/8, 172.16.0.0/12 en 192.168.0.0/16.",
      "Beide adressen van een /31-netwerk als bruikbaar behandelen, zonder directed broadcast.",
      "De notatie met prefixlengte (CIDR), die de historische adresklassen heeft vervangen.",
      "De overige blokken voor speciaal gebruik, zoals loopback-, link-local-, gedeelde en documentatieadressen.",
    ],
  },
  text: {
    address: "IPv4-adres",
    addressHelp:
      "Vier getallen van 0 tot 255, gescheiden door punten, zoals 192.168.1.10. Je kunt de prefixlengte na een schuine streep toevoegen, zoals 192.168.1.10/24.",
    maskType: "Geef de netwerkgrootte op als",
    maskTypes: { prefix: "Prefixlengte (CIDR)", mask: "Subnetmasker" },
    prefix: "Prefixlengte",
    mask: "Subnetmasker",
    maskHelp: "In puntnotatie, zoals 255.255.255.0. De 1-bits moeten vanaf links aaneengesloten zijn.",
    errors: {
      address: "Vul een IPv4-adres in als vier getallen van 0 tot 255, gescheiden door punten, zoals 192.168.1.10.",
      octet: "Elk deel van het adres moet een geheel getal van 0 tot 255 zijn; “{octet}” is dat niet.",
      leadingZero: "Schrijf “{octet}” zonder voorloopnullen. Sommige systemen lezen voorloopnullen als octaal.",
      prefix: "De prefixlengte na de schuine streep moet een geheel getal van 0 tot 32 zijn.",
      mask: "Vul een subnetmasker in als vier getallen van 0 tot 255, gescheiden door punten, zoals 255.255.255.0.",
      maskContiguous: "Dit masker is ongeldig: alle 1-bits moeten vóór de 0-bits komen (bijvoorbeeld 255.255.240.0, niet 255.0.255.0).",
    },
    network: "Netwerkadres",
    caption: "{address} in een /{prefix}-netwerk.",
    cidr: "Netwerk in CIDR-notatie",
    broadcast: "Broadcastadres",
    broadcastNone: "Geen (geen directed broadcast bij deze prefixlengte)",
    firstHost: "Eerste bruikbare host",
    lastHost: "Laatste bruikbare host",
    usableHosts: "Bruikbare hostadressen",
    totalAddresses: "Totaal aantal adressen in het netwerk",
    subnetMask: "Subnetmasker",
    wildcard: "Wildcardmasker",
    prefixLength: "Prefixlengte",
    binaryMask: "Subnetmasker in binair",
    addressClass: "Historische adresklasse",
    classes: {
      A: "Klasse A",
      B: "Klasse B",
      C: "Klasse C",
      D: "Klasse D (multicast)",
      E: "Klasse E (gereserveerd)",
    },
    scope: "Adrestype",
    scopes: {
      private: "Privé (RFC 1918)",
      public: "Publiek (wereldwijd routeerbaar)",
      loopback: "Loopback (127.0.0.0/8)",
      linkLocal: "Link-local (169.254.0.0/16)",
      shared: "Gedeelde adresruimte voor carrier-grade NAT (100.64.0.0/10)",
      thisNetwork: "“Dit netwerk” (0.0.0.0/8)",
      documentation: "Gereserveerd voor documentatie",
      benchmarking: "Gereserveerd voor netwerkbenchmarks (198.18.0.0/15)",
      ietf: "IETF-protocoltoewijzingen (192.0.0.0/24)",
      multicast: "Multicast (224.0.0.0/4)",
      reserved: "Gereserveerd (240.0.0.0/4)",
      broadcast: "Beperkte broadcast (255.255.255.255)",
    },
    notes: {
      slashUsed: "De prefixlengte die na de schuine streep in het adres is getypt, is gebruikt.",
      p31: "Een /31-netwerk heeft geen netwerk- of broadcastadres: beide adressen kunnen op een point-to-pointverbinding worden gebruikt (RFC 3021).",
      p32: "Een /32 beschrijft één enkel hostadres.",
      classful: "Adresklassen zijn historisch. Sinds CIDR (RFC 4632) bepaalt alleen de prefixlengte de grootte van het netwerk.",
      private: "Privéadressen kun je vrij gebruiken binnen een netwerk, maar ze worden niet op het publieke internet gerouteerd; ze bereiken het meestal via NAT.",
    },
  },
};

export default nl;
