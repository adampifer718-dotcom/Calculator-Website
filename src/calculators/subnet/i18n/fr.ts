import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SubnetText } from "../text/en";

const fr: CalculatorTranslation<SubnetText> = {
  content: {
    title: "Calculateur de sous-réseau IP",
    shortTitle: "Sous-réseau IP",
    summary: "Trouvez l’adresse réseau, l’adresse de diffusion, la plage d’hôtes utilisables, les masques et le type d’adresse de toute adresse IPv4 avec son préfixe.",
    metaTitle: "Calculateur de sous-réseau IP – CIDR IPv4, masque et hôtes",
    metaDescription: "Saisissez une adresse IPv4 avec un préfixe CIDR ou un masque et obtenez réseau, diffusion, premier et dernier hôte, hôtes utilisables et masque inverse.",
    keywords: ["calcul sous-réseau", "calculateur IP", "calcul CIDR", "sous-réseau IPv4", "masque de sous-réseau", "masque inverse", "adresse réseau", "adresse de diffusion"],
    intro: [
      "Une adresse IPv4 est un nombre de 32 bits écrit en quatre parties de 0 à 255. La longueur de préfixe, par exemple /24, indique combien de ces bits désignent le réseau ; les bits restants numérotent les hôtes qu’il contient. Un masque de sous-réseau comme 255.255.255.0 donne la même information écrite sous forme d’adresse.",
      "Ce calculateur prend une adresse et un préfixe ou un masque, et détermine l’adresse réseau, l’adresse de diffusion, la plage d’adresses d’hôtes attribuables et leur nombre. Il affiche aussi le masque inverse (wildcard) utilisé dans les listes de contrôle d’accès et la configuration des routeurs, et indique si l’adresse est privée, publique ou à usage spécial.",
    ],
    howToUse: [
      "Saisissez une adresse IPv4, par exemple 192.168.1.10. Vous pouvez ajouter le préfixe après une barre oblique, comme 192.168.1.10/24.",
      "Si vous n’avez pas saisi de barre oblique, choisissez une longueur de préfixe ou passez au masque de sous-réseau et saisissez le masque.",
      "Lisez l’adresse réseau, puis l’adresse de diffusion, la plage d’hôtes, le nombre d’hôtes utilisables et les masques.",
    ],
    formulas: [
      { title: "Masque de sous-réseau", expression: "masque = 2³² − 2³²⁻ᵖ", explanation: "p est la longueur de préfixe : les p premiers bits valent 1 et les autres 0. Pour /24, cela donne 255.255.255.0." },
      { title: "Réseau et diffusion", expression: "réseau = adresse AND masque ; diffusion = réseau OR masque inverse", explanation: "Le masque inverse est le masque dont chaque bit est inversé (NOT masque), par exemple 0.0.0.255 pour /24." },
      { title: "Hôtes utilisables", expression: "hôtes = 2³²⁻ᵖ − 2", explanation: "Les adresses de réseau et de diffusion ne peuvent pas être attribuées à des hôtes. Un lien point à point en /31 a 2 adresses utilisables (RFC 3021) et un /32 en a 1." },
    ],
    examples: [
      {
        title: "Réseau domestique : 192.168.1.10/24",
        steps: [
          "Masque pour /24 = 255.255.255.0, masque inverse = 0.0.0.255",
          "Réseau = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0 ; diffusion = 192.168.1.255",
          "Hôtes utilisables = 2⁸ − 2 = 254, de 192.168.1.1 à 192.168.1.254 ; l’adresse est privée (RFC 1918)",
        ],
      },
      {
        title: "10.45.200.17 avec le masque 255.255.240.0",
        steps: [
          "255.255.240.0 compte 8 + 8 + 4 = 20 bits à 1 : le préfixe est donc /20",
          "Troisième partie : 200 AND 240 = 192, donc le réseau est 10.45.192.0 et la diffusion 10.45.207.255",
          "Hôtes utilisables = 2¹² − 2 = 4 094, de 10.45.192.1 à 10.45.207.254",
        ],
      },
      {
        title: "Petit bloc de bureau : 172.20.5.130/27",
        steps: [
          "Masque pour /27 = 255.255.255.224, soit des blocs de 32 adresses",
          "130 AND 224 = 128, donc le réseau est 172.20.5.128 et la diffusion 172.20.5.159",
          "Hôtes utilisables = 2⁵ − 2 = 30, de 172.20.5.129 à 172.20.5.158",
        ],
      },
    ],
    assumptions: [
      "IPv4 uniquement. Les adresses IPv6 ne sont pas acceptées.",
      "Les parties de l’adresse doivent être écrites en décimal simple, sans zéros initiaux, car certains systèmes lisent une partie comme 010 en octal.",
      "Les mentions « privée » et « à usage spécial » décrivent l’adresse saisie, d’après les blocs à usage spécial de l’IANA. Son accessibilité dépend aussi du routage et des pare-feu de votre réseau.",
    ],
    faqs: [
      { question: "Pourquoi retire-t-on deux adresses du nombre d’hôtes ?", answer: "Dans un sous-réseau ordinaire, la première adresse identifie le réseau lui-même et la dernière est l’adresse de diffusion, qui atteint tous les hôtes. Aucune des deux ne peut être attribuée à un appareil : un /24 compte donc 256 adresses mais 254 hôtes utilisables." },
      { question: "Qu’est-ce qu’un masque inverse ?", answer: "C’est le masque de sous-réseau dont chaque bit est inversé : 255.255.255.0 devient 0.0.0.255. Les listes de contrôle d’accès des routeurs et certains protocoles de routage l’utilisent pour indiquer quels bits d’une adresse peuvent varier." },
      { question: "Les classes d’adresses A, B et C sont-elles encore utilisées ?", answer: "Pas pour le routage. L’adressage sans classe (CIDR) les a remplacées dans les années 1990 : n’importe quelle longueur de préfixe peut donc être utilisée avec n’importe quelle adresse. La classe n’est affichée que parce que des documents anciens et certains examens y font encore référence." },
    ],
    sourcesUsedFor: [
      "Les trois blocs IPv4 privés 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16.",
      "Le fait de considérer les deux adresses d’un réseau /31 comme utilisables, sans diffusion dirigée.",
      "La notation par longueur de préfixe (CIDR), qui a remplacé les classes d’adresses historiques.",
      "Les autres blocs à usage spécial, comme les adresses de bouclage, de lien local, partagées et de documentation.",
    ],
  },
  text: {
    address: "Adresse IPv4",
    addressHelp: "Quatre nombres de 0 à 255 séparés par des points, comme 192.168.1.10. Vous pouvez ajouter la longueur de préfixe après une barre oblique, comme 192.168.1.10/24.",
    maskType: "Indiquer la taille du réseau par",
    maskTypes: { prefix: "Longueur de préfixe (CIDR)", mask: "Masque de sous-réseau" },
    prefix: "Longueur de préfixe",
    mask: "Masque de sous-réseau",
    maskHelp: "Notation pointée, comme 255.255.255.0. Les bits à 1 doivent être contigus à partir de la gauche.",
    errors: {
      address: "Saisissez une adresse IPv4 sous la forme de quatre nombres de 0 à 255 séparés par des points, comme 192.168.1.10.",
      octet: "Chaque partie de l’adresse doit être un nombre entier de 0 à 255 ; « {octet} » ne l’est pas.",
      leadingZero: "Écrivez « {octet} » sans zéros initiaux. Certains systèmes lisent les zéros initiaux comme de l’octal.",
      prefix: "La longueur de préfixe après la barre oblique doit être un nombre entier de 0 à 32.",
      mask: "Saisissez un masque de sous-réseau sous la forme de quatre nombres de 0 à 255 séparés par des points, comme 255.255.255.0.",
      maskContiguous: "Ce masque n’est pas valide : tous ses bits à 1 doivent précéder ses bits à 0 (par exemple 255.255.240.0, et non 255.0.255.0).",
    },
    network: "Adresse réseau",
    caption: "{address} dans un réseau /{prefix}.",
    cidr: "Réseau en notation CIDR",
    broadcast: "Adresse de diffusion",
    broadcastNone: "Aucune (pas de diffusion dirigée avec cette longueur de préfixe)",
    firstHost: "Premier hôte utilisable",
    lastHost: "Dernier hôte utilisable",
    usableHosts: "Adresses d’hôtes utilisables",
    totalAddresses: "Nombre total d’adresses du réseau",
    subnetMask: "Masque de sous-réseau",
    wildcard: "Masque inverse (wildcard)",
    prefixLength: "Longueur de préfixe",
    binaryMask: "Masque de sous-réseau en binaire",
    addressClass: "Classe d’adresse historique",
    classes: {
      A: "Classe A",
      B: "Classe B",
      C: "Classe C",
      D: "Classe D (multidiffusion)",
      E: "Classe E (réservée)",
    },
    scope: "Type d’adresse",
    scopes: {
      private: "Privée (RFC 1918)",
      public: "Publique (routable mondialement)",
      loopback: "Bouclage (127.0.0.0/8)",
      linkLocal: "Lien local (169.254.0.0/16)",
      shared: "Espace d’adresses partagé pour le NAT des opérateurs (100.64.0.0/10)",
      thisNetwork: "« Ce réseau » (0.0.0.0/8)",
      documentation: "Réservée à la documentation",
      benchmarking: "Réservée aux tests de performance réseau (198.18.0.0/15)",
      ietf: "Attributions de protocoles de l’IETF (192.0.0.0/24)",
      multicast: "Multidiffusion (224.0.0.0/4)",
      reserved: "Réservée (240.0.0.0/4)",
      broadcast: "Diffusion limitée (255.255.255.255)",
    },
    notes: {
      slashUsed: "La longueur de préfixe saisie après la barre oblique dans l’adresse a été utilisée.",
      p31: "Un réseau /31 n’a ni adresse réseau ni adresse de diffusion : les deux adresses peuvent être utilisées sur un lien point à point (RFC 3021).",
      p32: "Un /32 désigne une seule adresse d’hôte.",
      classful: "Les classes d’adresses sont historiques. Depuis le CIDR (RFC 4632), seule la longueur de préfixe fixe la taille du réseau.",
      private: "Les adresses privées peuvent être utilisées librement à l’intérieur d’un réseau, mais ne sont pas routées sur l’internet public ; elles y accèdent généralement par NAT.",
    },
  },
};

export default fr;
