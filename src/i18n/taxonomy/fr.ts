import type { TaxonomyText } from "./types";

/** French (France) category and industry collection texts. */
const fr: TaxonomyText = {
  categories: {
    biology: {
      name: "Biologie",
      description: "Taux de croissance, populations et grandeurs de laboratoire pour les sciences de la vie.",
      metaTitle: "Calculateurs de biologie",
      metaDescription: "Calculateurs de biologie gratuits pour la croissance d’une population, le temps de doublement et d’autres grandeurs, avec formule et exemples détaillés.",
    },
    chemistry: {
      name: "Chimie",
      description: "Calculs de concentration, de dilution et de solutions pour le laboratoire et la salle de classe.",
      metaTitle: "Calculateurs de chimie",
      metaDescription: "Calculateurs de chimie gratuits pour la molarité, la dilution et la concentration des solutions, avec formules, unités et exemples détaillés.",
    },
    construction: {
      name: "Construction",
      description: "Outils de surface et de mesure pour les travaux à la maison et les chantiers.",
      metaTitle: "Calculateurs pour la construction",
      metaDescription: "Calculateurs de construction gratuits, dont un calcul de surface pour rectangles, cercles et triangles en pieds, pouces, yards ou mètres.",
    },
    conversion: {
      name: "Conversion",
      description: "Convertisseurs d’unités fondés sur des facteurs de conversion exacts et publiés.",
      metaTitle: "Calculateurs de conversion d’unités",
      metaDescription: "Convertisseurs d’unités gratuits pour les longueurs, les masses et les températures, avec des facteurs SI exacts, des formules et des tables de conversion.",
    },
    ecology: {
      name: "Écologie",
      description: "Estimations d’eau, d’énergie et de ressources pour une maison et un jardin plus verts.",
      metaTitle: "Calculateurs d’écologie et d’environnement",
      metaDescription: "Calculateurs d’écologie gratuits pour la récupération d’eau de pluie et d’autres estimations de ressources, avec hypothèses claires et exemples.",
    },
    "everyday-life": {
      name: "Vie quotidienne",
      description: "Des réponses rapides pour les pourboires, les remises, le carburant, les notes et les autres calculs du quotidien.",
      metaTitle: "Calculateurs pour la vie quotidienne",
      metaDescription: "Calculateurs du quotidien gratuits pour le pourboire et le partage d’addition, les remises, le coût du carburant et les notes, formule à l’appui.",
    },
    finance: {
      name: "Finance",
      description: "Paie, prêts, intérêts, rendements, taxes et marges commerciales, avec des formules transparentes.",
      metaTitle: "Calculateurs financiers",
      metaDescription: "Calculateurs financiers gratuits : salaire et taux horaire, prêts, intérêts composés, ROI, taxe sur les ventes, marge bénéficiaire et seuil de rentabilité.",
    },
    food: {
      name: "Cuisine",
      description: "Les calculs de cuisine pour adapter des recettes et planifier des repas.",
      metaTitle: "Calculateurs pour la cuisine",
      metaDescription: "Calculateurs de cuisine gratuits, dont un outil qui adapte les quantités d’ingrédients d’une recette à n’importe quel nombre de portions.",
    },
    health: {
      name: "Santé",
      description: "Indicateurs de santé généraux, avec des plages et des limites clairement indiquées. Ne remplace pas un avis médical.",
      metaTitle: "Calculateurs de santé",
      metaDescription: "Calculateurs de santé gratuits pour l’IMC et le métabolisme de base (MB), en unités métriques ou impériales, avec des limites clairement énoncées.",
    },
    math: {
      name: "Mathématiques",
      description: "Pourcentages, racines, puissances, logarithmes, géométrie et écriture des nombres, avec la formule derrière chaque réponse.",
      metaTitle: "Calculateurs de mathématiques",
      metaDescription: "Calculateurs de maths gratuits : pourcentages, logarithmes, puissances, racines carrées, pente, circonférence, chiffres significatifs et plus encore.",
    },
    physics: {
      name: "Physique",
      description: "Calculs de mouvement, d’énergie et d’électricité en unités SI.",
      metaTitle: "Calculateurs de physique",
      metaDescription: "Calculateurs de physique gratuits pour la vitesse, la distance et le temps, l’énergie cinétique et la loi d’Ohm, avec formules et gestion des unités.",
    },
    sports: {
      name: "Sport",
      description: "Chiffres d’entraînement et de performance pour les coureurs, les cyclistes et les athlètes.",
      metaTitle: "Calculateurs pour le sport",
      metaDescription: "Calculateurs de sport gratuits, dont un calculateur d’allure de course pour l’allure, la vitesse et le temps final sur les distances courantes.",
    },
    statistics: {
      name: "Statistiques",
      description: "Statistiques descriptives, valeurs p et intervalles de confiance, avec toutes les hypothèses énoncées.",
      metaTitle: "Calculateurs de statistiques",
      metaDescription: "Calculateurs de statistiques gratuits : moyenne, médiane et mode, écart type, valeurs p et intervalles de confiance, avec les formules.",
    },
    other: {
      name: "Autres",
      description: "Des outils utiles qui n’entrent pas ailleurs, comme le coût de l’énergie à la maison.",
      metaTitle: "Autres calculateurs",
      metaDescription: "Calculateurs divers gratuits, dont un calculateur du coût de l’électricité consommée par vos appareils.",
    },
  },
  collections: {
    business: {
      name: "Commerce et entrepreneuriat",
      description: "Prix, marges, seuil de rentabilité et rendements pour gérer et développer une entreprise.",
      metaTitle: "Calculateurs pour l’entreprise et l’entrepreneuriat",
      metaDescription: "Calculateurs pour créateurs d’entreprise et PME : marge bénéficiaire, seuil de rentabilité, ROI, taxe sur les ventes, remises et variation en pourcentage.",
    },
    "accounting-finance": {
      name: "Comptabilité et finance",
      description: "Intérêts, prêts, rendements et conversions de paie pour les métiers de la finance et de la comptabilité.",
      metaTitle: "Calculateurs de comptabilité et de finance",
      metaDescription: "Calculateurs pour la comptabilité et la finance : mensualités de prêt, intérêts composés, ROI, marge, taxe sur les ventes et conversions de salaire.",
    },
    "hr-payroll": {
      name: "RH, paie et emploi",
      description: "Convertissez salaires, taux horaires et périodes de paie pour les offres d’emploi, les budgets et les contrôles de paie.",
      metaTitle: "Calculateurs RH, paie et emploi",
      metaDescription: "Calculateurs pour les RH et la paie : salaire en taux horaire, taux horaire en salaire et toutes les périodes de paie, selon votre propre emploi du temps.",
    },
    "marketing-ecommerce": {
      name: "Marketing digital et e-commerce",
      description: "Rendement des campagnes, remises, marges et statistiques de conversion pour les vendeurs en ligne et les marketeurs.",
      metaTitle: "Calculateurs pour le marketing digital et l’e-commerce",
      metaDescription: "Calculateurs pour marketeurs et boutiques en ligne : ROI, remises, taxe sur les ventes, marge, variation en pourcentage et intervalles de confiance.",
    },
    "real-estate": {
      name: "Immobilier",
      description: "Surface habitable, mensualités de prêt immobilier et rendement locatif pour vos décisions immobilières.",
      metaTitle: "Calculateurs pour l’immobilier",
      metaDescription: "Calculateurs immobiliers : calcul de surface, mensualités de prêt et de crédit immobilier, ROI et récupération d’eau de pluie pour un bien.",
    },
    "construction-engineering": {
      name: "Construction et génie civil",
      description: "Surfaces, triangles rectangles, pentes et conversions d’unités pour le chantier et la conception.",
      metaTitle: "Calculateurs pour la construction et le génie civil",
      metaDescription: "Calculateurs pour la construction et le génie civil : calcul de surface, théorème de Pythagore, pente, circonférence et conversion d’unités.",
    },
    "education-research": {
      name: "Enseignement et recherche",
      description: "Outils de mathématiques, de statistiques et de sciences pour les élèves, les enseignants et les chercheurs.",
      metaTitle: "Calculateurs pour l’enseignement et la recherche",
      metaDescription: "Calculateurs pour étudiants et chercheurs : statistiques, valeurs p, logarithmes, chiffres significatifs, formules de chimie et de physique.",
    },
    healthcare: {
      name: "Santé et professions médicales",
      description: "Indicateurs de santé généraux et calculs de laboratoire. Faites toujours appel au jugement clinique et aux recommandations locales.",
      metaTitle: "Calculateurs pour la santé",
      metaDescription: "Calculateurs pour la santé et le laboratoire : IMC, métabolisme de base, molarité, dilution et valeurs p, avec sources et limites énoncées.",
    },
    "agriculture-gardening": {
      name: "Agriculture et jardinage",
      description: "Estimations de surface, d’eau et de croissance pour les exploitations, les parcelles et les jardins.",
      metaTitle: "Calculateurs pour l’agriculture et le jardinage",
      metaDescription: "Calculateurs pour agriculteurs et jardiniers : calcul de surface, récupération d’eau de pluie, temps de doublement d’une population et conversion d’unités.",
    },
    "food-hospitality": {
      name: "Restauration et hôtellerie",
      description: "Adaptation de recettes, pourboires, prix et marges pour les cuisines, les restaurants et les hôtes.",
      metaTitle: "Calculateurs pour la restauration et l’hôtellerie",
      metaDescription: "Calculateurs pour cuisines et restaurants : adaptation de recettes, pourboire et partage d’addition, marge, remises et conversion de température.",
    },
    "manufacturing-operations": {
      name: "Industrie et opérations",
      description: "Conversions d’unités, volumes de rentabilité, coûts énergétiques et géométrie pour la production.",
      metaTitle: "Calculateurs pour l’industrie et les opérations",
      metaDescription: "Calculateurs pour l’industrie et les opérations : seuil de rentabilité, conversions d’unités, coût de l’électricité, loi d’Ohm et circonférence.",
    },
    "software-data": {
      name: "Logiciel, informatique et données",
      description: "Outils de statistiques, de logarithmes et de notation pour les ingénieurs et les analystes de données.",
      metaTitle: "Calculateurs pour le logiciel, l’informatique et les données",
      metaDescription: "Calculateurs pour ingénieurs et analystes : écart type, moyenne et médiane, valeurs p, intervalles de confiance, logarithmes et puissances.",
    },
    "environment-energy": {
      name: "Environnement et énergie",
      description: "Consommation d’électricité, récupération d’eau et coût du carburant pour des choix plus durables.",
      metaTitle: "Calculateurs pour l’environnement et l’énergie",
      metaDescription: "Calculateurs pour l’énergie et l’environnement : coût de l’électricité, récupération d’eau de pluie, coût du carburant et énergie cinétique.",
    },
    "fitness-sports": {
      name: "Fitness et sport",
      description: "Allure, mesures corporelles et besoins énergétiques pour vos objectifs d’entraînement et de forme.",
      metaTitle: "Calculateurs pour le fitness et le sport",
      metaDescription: "Calculateurs pour le fitness et le sport : allure de course, IMC, métabolisme de base, vitesse, distance et temps, avec des formules claires.",
    },
    "personal-finance": {
      name: "Finances personnelles et foyer",
      description: "Les décisions d’argent du quotidien : paie, prêts, épargne, achats, factures et dépenses du foyer.",
      metaTitle: "Calculateurs de finances personnelles et pour le foyer",
      metaDescription: "Calculateurs pour le foyer : paie, prêts, intérêts composés, remises, pourboires, taxe sur les ventes, coût du carburant et de l’électricité.",
    },
  },
};

export default fr;
