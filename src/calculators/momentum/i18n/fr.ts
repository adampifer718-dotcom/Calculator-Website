import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MomentumText } from "../text/en";

const fr: CalculatorTranslation<MomentumText> = {
  content: {
    title: "Calculateur de quantité de mouvement",
    shortTitle: "Quantité de mouvement",
    summary: "Résolvez p = mv pour la quantité de mouvement, la masse ou la vitesse, ou calculez l’impulsion d’une force et la variation de vitesse qu’elle produit.",
    metaTitle: "Quantité de mouvement – p = mv et impulsion J = FΔt",
    metaDescription: "Trouvez la quantité de mouvement, la masse ou la vitesse avec p = mv en unités métriques ou américaines, avec l’énergie cinétique, ou l’impulsion et le Δv.",
    keywords: ["quantité de mouvement", "p = mv", "impulsion", "théorème de l’impulsion", "kg·m/s", "newton-seconde", "variation de vitesse", "dynamique"],
    intro: [
      "La quantité de mouvement mesure la difficulté à arrêter un objet en mouvement. C’est la masse multipliée par la vitesse : un camion lent et une balle de baseball rapide peuvent donc tous deux en avoir beaucoup. Comme elle a une direction, la quantité de mouvement peut être négative lorsque le mouvement se fait dans l’autre sens.",
      "Utilisez le premier mode pour trouver la quantité de mouvement, la masse ou la vitesse à partir des deux autres ; le résultat indique aussi l’énergie cinétique. Utilisez le mode impulsion pour voir l’effet d’une force qui agit pendant un court instant : l’impulsion est égale à la variation de la quantité de mouvement et, avec une masse, elle donne la variation de vitesse.",
    ],
    howToUse: [
      "Choisissez quantité de mouvement (p = mv) ou impulsion (J = FΔt).",
      "Pour la quantité de mouvement, choisissez la valeur à trouver et saisissez les deux autres avec leurs unités. Utilisez une vitesse ou une quantité de mouvement négative pour un mouvement dans le sens opposé.",
      "Pour l’impulsion, saisissez la force moyenne et sa durée d’action. Ajoutez la masse si vous voulez la variation de vitesse.",
      "Lisez le résultat et ses autres unités, dont les lb·ft/s et l’énergie cinétique.",
    ],
    formulas: [
      { title: "Quantité de mouvement", expression: "p = m × v", explanation: "En kg·m/s. Résolvez pour m = p ÷ v ou v = p ÷ m." },
      { title: "Impulsion", expression: "J = F × Δt = Δp", explanation: "Une force moyenne qui agit pendant une durée modifie la quantité de mouvement exactement de la valeur de l’impulsion, en N·s (équivalent aux kg·m/s)." },
      { title: "Variation de vitesse", expression: "Δv = J ÷ m", explanation: "L’impulsion divisée par la masse sur laquelle elle agit." },
      { title: "Énergie cinétique", expression: "KE = p² ÷ (2m)", explanation: "Équivalent à ½·m·v², en joules." },
    ],
    examples: [
      {
        title: "Une balle de baseball de 0,145 kg à 40 m/s",
        steps: ["p = 0,145 kg × 40 m/s = 5,8 kg·m/s", "≈ 41,95 lb·ft/s ; KE = 5,8² ÷ (2 × 0,145) = 116 J"],
      },
      {
        title: "Vitesse d’un patineur de 60 kg ayant une quantité de mouvement de 900 kg·m/s",
        steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3,6 = 54 km/h"],
      },
      {
        title: "Un coup de pied de 250 N pendant 0,02 s sur un ballon de 0,16 kg",
        steps: ["J = 250 N × 0,02 s = 5 N·s", "Δv = 5 ÷ 0,16 = 31,25 m/s"],
      },
    ],
    assumptions: [
      "Le mouvement et les forces sont dirigés le long d’une seule droite ; le signe indique le sens. Pour un mouvement en deux ou trois dimensions, appliquez les formules à chaque composante.",
      "En mode impulsion, la force est la force moyenne sur l’intervalle de temps. Une force qui varie pendant l’impact donne la même impulsion que sa moyenne.",
      "La mécanique classique s’applique, ce qui est précis pour des vitesses très inférieures à celle de la lumière.",
    ],
    faqs: [
      { question: "Quelle est la différence entre quantité de mouvement et énergie cinétique ?", answer: "La quantité de mouvement (mv) est un vecteur et se conserve dans toute collision. L’énergie cinétique (½mv²) n’a pas de direction et se transforme en partie en chaleur et en son dans la plupart des collisions." },
      { question: "Le N·s est-il identique au kg·m/s ?", answer: "Oui. Un newton vaut un kg·m/s², donc un newton-seconde vaut un kg·m/s. L’impulsion et la quantité de mouvement ont la même unité." },
      { question: "Pourquoi les airbags et les rembourrages réduisent-ils les blessures ?", answer: "Ils allongent la durée de l’arrêt. La variation de quantité de mouvement est la même, donc une durée plus longue signifie une force moyenne plus faible, puisque F = Δp ÷ Δt." },
    ],
    sourcesUsedFor: [
      "L’impulsion comme produit de la force par sa durée d’action, et le théorème de l’impulsion J = Δp.",
      "La force nette comme taux de variation de la quantité de mouvement.",
    ],
  },
  text: {
    mode: "Calculer",
    modes: { momentum: "Quantité de mouvement (p = mv)", impulse: "Impulsion (J = FΔt)" },
    solve: "Trouver",
    solveOptions: { momentum: "Quantité de mouvement (p)", mass: "Masse (m)", velocity: "Vitesse (v)" },
    momentum: "Quantité de mouvement (p)",
    momentumHelp: "En kilogrammes-mètres par seconde. Une valeur négative signifie un mouvement dans le sens opposé.",
    mass: "Masse (m)",
    impulseMass: "Masse (facultative)",
    impulseMassHelp: "Laissez vide pour n’obtenir que l’impulsion. Avec une masse, la variation de vitesse est aussi affichée.",
    massUnit: "Unité de masse",
    massUnits: { kg: "Kilogrammes (kg)", g: "Grammes (g)", lb: "Livres (lb)", t: "Tonnes (t)" },
    velocity: "Vitesse (v)",
    velocityHelp: "Une valeur négative signifie un mouvement dans le sens opposé.",
    velocityUnit: "Unité de vitesse",
    velocityUnits: { ms: "Mètres par seconde (m/s)", kmh: "Kilomètres par heure (km/h)", mph: "Miles par heure (mph)", fts: "Pieds par seconde (ft/s)" },
    unitHelp: "Pour la valeur recherchée, c’est l’unité de la réponse.",
    force: "Force moyenne (F)",
    forceHelp: "Une valeur négative signifie que la force est dirigée dans le sens opposé.",
    forceUnit: "Unité de force",
    forceUnits: { N: "Newtons (N)", lbf: "Livres-force (lbf)" },
    duration: "Durée d’action de la force (Δt)",
    zeroVelocity: "La vitesse ne peut pas valoir 0 pour trouver la masse, car une masse au repos n’a pas de quantité de mouvement.",
    zeroMomentum: "La quantité de mouvement ne peut pas valoir 0 pour trouver la masse.",
    signMismatch: "La quantité de mouvement et la vitesse doivent avoir le même signe, car la masse est positive.",
    results: { momentum: "Quantité de mouvement", mass: "Masse", velocity: "Vitesse" },
    impulse: "Impulsion (J = Δp)",
    inUnit: "En {unit}",
    kineticEnergy: "Énergie cinétique (p² ÷ 2m)",
    deltaV: "Variation de vitesse (Δv = J ÷ m)",
    impulseNote: "L’impulsion est égale à la variation de la quantité de mouvement. La même impulsion peut provenir d’une grande force pendant peu de temps ou d’une petite force pendant longtemps.",
    note: "La quantité de mouvement est un vecteur. Elle est mesurée ici le long d’une seule droite, le signe indiquant le sens.",
  },
};

export default fr;
