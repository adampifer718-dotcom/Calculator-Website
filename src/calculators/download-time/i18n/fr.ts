import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DownloadTimeText } from "../text/en";

const forms = (one: string, other: string, many: string) => ({ zero: one, one, two: other, few: other, many, other });

const fr: CalculatorTranslation<DownloadTimeText> = {
  content: {
    title: "Calculateur de temps de téléchargement",
    shortTitle: "Temps de téléchargement",
    summary: "Estimez le temps de téléchargement ou d’envoi d’un fichier à partir de sa taille et du débit de votre connexion.",
    metaTitle: "Calculateur de temps de téléchargement – Taille et débit",
    metaDescription:
      "Estimez la durée d’un téléchargement ou d’un envoi selon la taille du fichier en MB, GB, GiB ou TB et le débit en Mbit/s ou Gbit/s, avec surcoût protocolaire.",
    keywords: ["temps de téléchargement", "durée de téléchargement", "temps de transfert", "taille de fichier", "débit internet", "mbps", "bande passante", "combien de temps pour télécharger"],
    intro: [
      "Le temps de téléchargement est la quantité de données divisée par le débit auquel elles circulent. La difficulté vient des unités : les abonnements internet sont vendus en mégabits par seconde, alors que les fichiers se mesurent en mégaoctets ou en gigaoctets, et un octet vaut 8 bits.",
      "Saisissez la taille du fichier et le débit de la connexion dans les unités dont vous disposez. Le calculateur convertit les deux, tient compte d’un éventuel surcoût protocolaire et affiche la durée en jours, heures, minutes et secondes.",
    ],
    howToUse: [
      "Saisissez la taille du fichier et choisissez son unité. Utilisez GiB ou MiB si la taille provient d’un système qui compte en puissances de 1 024.",
      "Saisissez le débit de la connexion et son unité. La plupart des abonnements et des tests de débit indiquent des Mbit/s.",
      "Si vous le souhaitez, saisissez un pourcentage de surcoût protocolaire pour tenir compte du débit perdu par le réseau.",
      "Lisez la durée estimée, le total en secondes et le débit effectif.",
    ],
    formulas: [
      {
        title: "Temps de téléchargement",
        expression: "durée = (taille en octets × 8) ÷ débit effectif en bit/s",
        explanation: "Multiplier par 8 convertit les octets en bits, pour que les deux membres utilisent la même unité.",
      },
      {
        title: "Débit effectif",
        expression: "débit effectif = débit × (1 − surcoût ÷ 100)",
        explanation: "Le surcoût est la part de la ligne occupée par les en-têtes et le trafic de contrôle plutôt que par les données du fichier.",
      },
      {
        title: "Préfixes",
        expression: "1 GB = 10⁹ octets ; 1 GiB = 2³⁰ = 1 073 741 824 octets",
        explanation: "Les préfixes décimaux progressent par 1 000 ; les préfixes binaires par 1 024.",
      },
    ],
    examples: [
      {
        title: "4,7 GB à 50 Mbit/s",
        steps: ["4,7 GB = 4,7 × 10⁹ × 8 = 37 600 Mbit", "37 600 ÷ 50 = 752 secondes", "752 s = 12 minutes et 32 secondes"],
      },
      {
        title: "2 GiB à 100 Mbit/s avec 10 % de surcoût",
        steps: [
          "2 GiB = 2 × 1 073 741 824 × 8 ≈ 17 180 Mbit",
          "Débit effectif = 100 × 0,9 = 90 Mbit/s",
          "17 180 ÷ 90 ≈ 190,89 s, soit environ 3 minutes et 11 secondes",
        ],
      },
      {
        title: "Sauvegarde de 1,5 TB sur une connexion à 1 Gbit/s",
        steps: ["1,5 TB = 1,5 × 10¹² × 8 = 12 × 10¹² bits", "12 × 10¹² ÷ 10⁹ = 12 000 secondes", "12 000 s = 3 heures et 20 minutes"],
      },
    ],
    assumptions: [
      "La connexion garde un débit constant pendant tout le transfert. Les débits réels varient selon le signal Wi-Fi, la congestion du réseau et les limites du serveur.",
      "Le surcoût protocolaire est un pourcentage unique que vous choisissez ; la valeur par défaut de 0 % donne la durée minimale théorique.",
      "Les kbit/s, Mbit/s et Gbit/s utilisent des puissances de 1 000. MB/s signifie mégaoctets (8 000 000 bits) par seconde.",
      "Les durées de 10 secondes ou plus sont arrondies à la seconde la plus proche.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre Mbps et MB/s ?",
        answer: "Mbps (Mbit/s) compte des mégabits ; MB/s compte des mégaoctets. Un octet vaut 8 bits : un abonnement à 200 Mbit/s télécharge donc au plus 25 MB par seconde.",
      },
      {
        question: "Pourquoi mon ordinateur indique-t-il une taille inférieure à celle de l’étiquette ?",
        answer: "Beaucoup de systèmes d’exploitation divisent par 1 024 plutôt que par 1 000, tout en écrivant GB. Un disque de 500 GB contient 500 × 10⁹ octets, soit environ 465,66 GiB.",
      },
      {
        question: "Quel surcoût prévoir ?",
        answer: "Pour une connexion filaire, 3 à 10 % est une marge raisonnable pour les en-têtes de paquets et les accusés de réception. Un Wi-Fi chargé ou des transferts longue distance peuvent perdre davantage.",
      },
    ],
    sourcesUsedFor: [
      "Les préfixes binaires CEI kibi, mébi, gibi et tébi (puissances de 1 024) et ce qui les distingue des préfixes décimaux du SI.",
      "L’expression des débits de connexion en mégabits par seconde (Mbps).",
    ],
  },
  text: {
    size: "Taille du fichier",
    sizeUnit: "Unité de taille",
    sizeUnits: {
      B: "Octets (B)",
      kB: "Kilooctets (kB, 1 000 B)",
      MB: "Mégaoctets (MB)",
      GB: "Gigaoctets (GB)",
      TB: "Téraoctets (TB)",
      KiB: "Kibioctets (KiB, 1 024 B)",
      MiB: "Mébioctets (MiB)",
      GiB: "Gibioctets (GiB)",
      TiB: "Tébioctets (TiB)",
    },
    speed: "Débit de la connexion",
    speedUnit: "Unité de débit",
    speedUnits: {
      kbps: "Kilobits par seconde (kbit/s)",
      Mbps: "Mégabits par seconde (Mbit/s, Mbps)",
      Gbps: "Gigabits par seconde (Gbit/s)",
      MBps: "Mégaoctets par seconde (MB/s)",
    },
    overhead: "Surcoût protocolaire",
    overheadHelp: "Part du débit perdue en en-têtes de paquets, retransmissions et autre trafic. Laissez 0 pour la durée idéale ; 5 à 10 % est une marge courante.",
    time: "Temps de téléchargement",
    caption: "{size} à {speed}.",
    units: {
      days: forms("{n} jour", "{n} jours", "{n} de jours"),
      hours: forms("{n} heure", "{n} heures", "{n} d’heures"),
      minutes: forms("{n} minute", "{n} minutes", "{n} de minutes"),
      seconds: forms("{n} seconde", "{n} secondes", "{n} de secondes"),
    },
    secondsDecimal: "{n} secondes",
    separator: ", ",
    totalSeconds: "Durée totale en secondes",
    effectiveSpeed: "Débit effectif",
    sizeInBits: "Taille du fichier en mégabits",
    notes: {
      bits: "Les débits de connexion sont généralement exprimés en bits par seconde, et les tailles de fichiers en octets. Un octet vaut 8 bits : 100 Mbit/s transfère donc au plus 12,5 MB par seconde.",
      prefixes: "kB, MB, GB et TB utilisent des puissances de 1 000 ; KiB, MiB, GiB et TiB des puissances de 1 024. Les systèmes d’exploitation affichent souvent les tailles binaires avec les symboles décimaux.",
      real: "Les téléchargements réels sont souvent plus lents que le débit annoncé, à cause du Wi-Fi, de la congestion du réseau et des limites propres au serveur.",
    },
  },
};

export default fr;
