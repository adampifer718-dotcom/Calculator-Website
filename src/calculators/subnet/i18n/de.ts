import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SubnetText } from "../text/en";

const de: CalculatorTranslation<SubnetText> = {
  content: {
    title: "IP-Subnetzrechner",
    shortTitle: "IP-Subnetz",
    summary: "Ermitteln Sie Netz- und Broadcast-Adresse, nutzbaren Hostbereich, Masken und Adresstyp für jede IPv4-Adresse und jedes Präfix.",
    metaTitle: "IP-Subnetzrechner – IPv4-CIDR, Maske und Hostbereich",
    metaDescription: "Geben Sie eine IPv4-Adresse mit CIDR-Präfix oder Subnetzmaske ein und erhalten Sie Netzadresse, Broadcast, ersten und letzten Host, nutzbare Hosts und Wildcard-Maske.",
    keywords: ["Subnetzrechner", "IP-Subnetz berechnen", "CIDR-Rechner", "IPv4-Subnetz", "Subnetzmaske", "Wildcard-Maske", "Netzadresse", "Broadcast-Adresse", "nutzbare Hosts"],
    intro: [
      "Eine IPv4-Adresse ist eine 32-Bit-Zahl, geschrieben als vier Teile von 0 bis 255. Die Präfixlänge, etwa /24, gibt an, wie viele dieser Bits das Netz bezeichnen; die übrigen nummerieren die Hosts darin. Eine Subnetzmaske wie 255.255.255.0 ist dieselbe Information in Adressform.",
      "Dieser Rechner nimmt eine Adresse und ein Präfix oder eine Maske und ermittelt die Netzadresse, die Broadcast-Adresse, den Bereich zuweisbarer Hostadressen und deren Anzahl. Außerdem zeigt er die Wildcard-Maske, die in Zugriffslisten und Routerkonfigurationen verwendet wird, und ob die Adresse privat, öffentlich oder für besondere Zwecke reserviert ist.",
    ],
    howToUse: [
      "Geben Sie eine IPv4-Adresse ein, zum Beispiel 192.168.1.10. Sie können das Präfix nach einem Schrägstrich anfügen, etwa 192.168.1.10/24.",
      "Wenn Sie keinen Schrägstrich eingegeben haben, wählen Sie eine Präfixlänge oder wechseln Sie zur Subnetzmaske und geben Sie die Maske ein.",
      "Lesen Sie die Netzadresse ab, dann Broadcast-Adresse, Hostbereich, Anzahl nutzbarer Hosts und Masken.",
    ],
    formulas: [
      { title: "Subnetzmaske", expression: "Maske = 2³² − 2³²⁻ᵖ", explanation: "p ist die Präfixlänge: Die ersten p Bits sind 1, die übrigen 0. Für /24 ergibt das 255.255.255.0." },
      { title: "Netz und Broadcast", expression: "Netz = Adresse AND Maske; Broadcast = Netz OR Wildcard", explanation: "Die Wildcard-Maske ist die Maske mit allen Bits umgekehrt (NOT Maske), zum Beispiel 0.0.0.255 für /24." },
      { title: "Nutzbare Hosts", expression: "Hosts = 2³²⁻ᵖ − 2", explanation: "Netz- und Broadcast-Adresse können keinen Hosts zugewiesen werden. Eine /31-Punkt-zu-Punkt-Verbindung hat 2 nutzbare Adressen (RFC 3021), ein /32 hat 1." },
    ],
    examples: [
      {
        title: "Heimnetz: 192.168.1.10/24",
        steps: [
          "Maske für /24 = 255.255.255.0, Wildcard = 0.0.0.255",
          "Netz = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0; Broadcast = 192.168.1.255",
          "Nutzbare Hosts = 2⁸ − 2 = 254, von 192.168.1.1 bis 192.168.1.254; die Adresse ist privat (RFC 1918)",
        ],
      },
      {
        title: "10.45.200.17 mit Maske 255.255.240.0",
        steps: [
          "255.255.240.0 hat 8 + 8 + 4 = 20 Einsen, das Präfix ist also /20",
          "Dritter Teil: 200 AND 240 = 192, also ist das Netz 10.45.192.0 und der Broadcast 10.45.207.255",
          "Nutzbare Hosts = 2¹² − 2 = 4.094, von 10.45.192.1 bis 10.45.207.254",
        ],
      },
      {
        title: "Kleines Büronetz: 172.20.5.130/27",
        steps: [
          "Maske für /27 = 255.255.255.224, also Blöcke von 32 Adressen",
          "130 AND 224 = 128, also ist das Netz 172.20.5.128 und der Broadcast 172.20.5.159",
          "Nutzbare Hosts = 2⁵ − 2 = 30, von 172.20.5.129 bis 172.20.5.158",
        ],
      },
    ],
    assumptions: [
      "Nur IPv4. IPv6-Adressen werden nicht akzeptiert.",
      "Adressteile müssen schlicht dezimal ohne führende Nullen geschrieben werden, weil manche Systeme einen Teil wie 010 als Oktalzahl lesen.",
      "Die Bezeichnungen „privat“ und „besonderer Zweck“ beschreiben die eingegebene Adresse anhand der IANA-Blöcke für besondere Zwecke. Ob sie erreichbar ist, hängt außerdem vom Routing und den Firewalls Ihres Netzes ab.",
    ],
    faqs: [
      { question: "Warum werden zwei Adressen von der Hostanzahl abgezogen?", answer: "In einem gewöhnlichen Subnetz bezeichnet die erste Adresse das Netz selbst, und die letzte ist die Broadcast-Adresse, die alle Hosts erreicht. Keine von beiden kann einem Gerät zugewiesen werden, daher hat ein /24 zwar 256 Adressen, aber nur 254 nutzbare Hosts." },
      { question: "Was ist eine Wildcard-Maske?", answer: "Die Subnetzmaske mit allen Bits umgekehrt: Aus 255.255.255.0 wird 0.0.0.255. Router-Zugriffslisten und manche Routingprotokolle geben damit an, welche Bits einer Adresse variieren dürfen." },
      { question: "Werden die Adressklassen A, B und C noch verwendet?", answer: "Nicht für das Routing. Klassenlose Adressierung (CIDR) hat sie in den 1990er-Jahren abgelöst, sodass jede Präfixlänge mit jeder Adresse verwendet werden kann. Die Klasse wird nur angezeigt, weil ältere Unterlagen und manche Prüfungen sie noch erwähnen." },
    ],
    sourcesUsedFor: [
      "Die drei privaten IPv4-Blöcke 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16.",
      "Die Behandlung beider Adressen eines /31-Netzes als nutzbar, ohne gerichteten Broadcast.",
      "Die Präfixlängen-Schreibweise (CIDR), die die historischen Adressklassen abgelöst hat.",
      "Die übrigen Blöcke für besondere Zwecke, etwa Loopback-, Link-Local-, Shared- und Dokumentationsadressen.",
    ],
  },
  text: {
    address: "IPv4-Adresse",
    addressHelp: "Vier Zahlen von 0 bis 255, durch Punkte getrennt, etwa 192.168.1.10. Sie können die Präfixlänge nach einem Schrägstrich anfügen, etwa 192.168.1.10/24.",
    maskType: "Netzgröße angeben als",
    maskTypes: { prefix: "Präfixlänge (CIDR)", mask: "Subnetzmaske" },
    prefix: "Präfixlänge",
    mask: "Subnetzmaske",
    maskHelp: "In Punktschreibweise, etwa 255.255.255.0. Die 1-Bits müssen von links lückenlos aufeinanderfolgen.",
    errors: {
      address: "Geben Sie eine IPv4-Adresse als vier Zahlen von 0 bis 255 ein, durch Punkte getrennt, etwa 192.168.1.10.",
      octet: "Jeder Teil der Adresse muss eine ganze Zahl von 0 bis 255 sein; „{octet}“ ist es nicht.",
      leadingZero: "Schreiben Sie „{octet}“ ohne führende Nullen. Manche Systeme lesen führende Nullen als Oktalzahl.",
      prefix: "Die Präfixlänge nach dem Schrägstrich muss eine ganze Zahl von 0 bis 32 sein.",
      mask: "Geben Sie eine Subnetzmaske als vier Zahlen von 0 bis 255 ein, durch Punkte getrennt, etwa 255.255.255.0.",
      maskContiguous: "Diese Maske ist ungültig: Alle 1-Bits müssen vor den 0-Bits stehen (zum Beispiel 255.255.240.0, nicht 255.0.255.0).",
    },
    network: "Netzadresse",
    caption: "{address} in einem /{prefix}-Netz.",
    cidr: "Netz in CIDR-Schreibweise",
    broadcast: "Broadcast-Adresse",
    broadcastNone: "Keine (bei dieser Präfixlänge kein gerichteter Broadcast)",
    firstHost: "Erster nutzbarer Host",
    lastHost: "Letzter nutzbarer Host",
    usableHosts: "Nutzbare Hostadressen",
    totalAddresses: "Adressen im Netz insgesamt",
    subnetMask: "Subnetzmaske",
    wildcard: "Wildcard-Maske",
    prefixLength: "Präfixlänge",
    binaryMask: "Subnetzmaske in Binärform",
    addressClass: "Historische Adressklasse",
    classes: {
      A: "Klasse A",
      B: "Klasse B",
      C: "Klasse C",
      D: "Klasse D (Multicast)",
      E: "Klasse E (reserviert)",
    },
    scope: "Adresstyp",
    scopes: {
      private: "Privat (RFC 1918)",
      public: "Öffentlich (global routbar)",
      loopback: "Loopback (127.0.0.0/8)",
      linkLocal: "Link-Local (169.254.0.0/16)",
      shared: "Gemeinsamer Adressraum für Carrier-Grade-NAT (100.64.0.0/10)",
      thisNetwork: "„Dieses Netz“ (0.0.0.0/8)",
      documentation: "Für Dokumentation reserviert",
      benchmarking: "Für Netzwerk-Benchmarks reserviert (198.18.0.0/15)",
      ietf: "IETF-Protokollzuweisungen (192.0.0.0/24)",
      multicast: "Multicast (224.0.0.0/4)",
      reserved: "Reserviert (240.0.0.0/4)",
      broadcast: "Begrenzter Broadcast (255.255.255.255)",
    },
    notes: {
      slashUsed: "Es wurde die nach dem Schrägstrich in der Adresse eingegebene Präfixlänge verwendet.",
      p31: "Ein /31-Netz hat keine Netz- oder Broadcast-Adresse: Beide Adressen können auf einer Punkt-zu-Punkt-Verbindung genutzt werden (RFC 3021).",
      p32: "Ein /32 beschreibt eine einzelne Hostadresse.",
      classful: "Adressklassen sind historisch. Seit CIDR (RFC 4632) bestimmt allein die Präfixlänge die Netzgröße.",
      private: "Private Adressen können innerhalb eines Netzes frei verwendet werden, werden aber im öffentlichen Internet nicht geroutet; sie erreichen es meist über NAT.",
    },
  },
};

export default de;
