import type { ConverterContent, ConverterMeta } from "../../types";

const NIST_811 = {
  title: "NIST Guide to the SI (Special Publication 811), Appendix B.8: Factors for units listed alphabetically",
  publisher: "National Institute of Standards and Technology",
  url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
};

const SI_BROCHURE = {
  title: "The International System of Units (SI Brochure), 9th edition",
  publisher: "Bureau International des Poids et Mesures (BIPM)",
  url: "https://www.bipm.org/en/si-brochure-9",
};

const CGS_NOTE = "CGS units (gilbert, oersted, maxwell, gauss) are converted with their defining correspondences to SI units, which involve 4π where the CGS system is unrationalized.";

export const magnetismContent: Record<string, ConverterContent & ConverterMeta> = {
  "magnetomotive-force": {
    title: "Magnetomotive Force Converter",
    shortTitle: "Magnetomotive force",
    summary: "Convert magnetomotive force between ampere-turns, amperes, gilberts and abampere-turns.",
    metaTitle: "Magnetomotive Force Converter – At, A, Gb",
    metaDescription: "Convert magnetomotive force between ampere-turns, amperes, kiloampere-turns, gilberts and abampere-turns for coils, electromagnets and magnetic circuits.",
    keywords: ["magnetomotive force", "ampere turn", "gilbert", "mmf", "gilbert to ampere turn", "magnetic circuit", "coil"],
    intro: [
      "Magnetomotive force (mmf) is what drives magnetic flux around a magnetic circuit, much as voltage drives current. For a coil it is simply the current times the number of turns, so a 200-turn coil carrying 2 A provides 400 ampere-turns.",
      "Older texts and some magnet data use the CGS unit gilbert. One gilbert is 10/(4π), about 0.796, ampere-turns.",
    ],
    formula: {
      expression: "F = N × I\n1 Gb = 10 ÷ (4π) At ≈ 0.795775 At",
      explanation: "N is the number of turns and I the current; turns have no unit, so the SI unit of mmf is the ampere.",
    },
    assumptions: [
      "Ampere-turns and amperes are the same SI unit; the name ampere-turn just reminds you that turns were counted.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "How many ampere-turns is one gilbert?", answer: "About 0.795775 At. In the other direction, 1 At is about 1.256637 Gb (4π/10)." },
      { question: "What is the mmf of a coil?", answer: "Multiply the current by the number of turns. 500 turns carrying 0.3 A give 150 ampere-turns." },
      { question: "How is magnetomotive force related to field strength?", answer: "Field strength H is mmf per unit length of the magnetic path, so 150 At spread over 0.1 m of core is 1,500 A/m." },
    ],
    units: {
      a: "Amperes",
      ma: "Milliamperes",
      ka: "Kiloamperes",
      at: "Ampere-turns",
      mat: "Milliampere-turns",
      kat: "Kiloampere-turns",
      gilbert: "Gilberts",
      abat: "Abampere-turns",
    },
    sourcesUsedFor: ["Conversion factors for the gilbert and abampere.", "The ampere as the SI unit of magnetomotive force."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factors for the gilbert and abampere." },
      { ...SI_BROCHURE, usedFor: "The ampere as the SI unit of magnetomotive force." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
  "magnetic-field-strength": {
    title: "Magnetic Field Strength Converter",
    shortTitle: "Magnetic field strength",
    summary: "Convert magnetic field strength (H) between amperes per metre, ampere-turns per inch or centimetre, and oersteds.",
    metaTitle: "Magnetic Field Strength Converter – A/m, Oe, kOe",
    metaDescription: "Convert magnetic field strength H between A/m, kA/m, A/cm, ampere-turns per inch, oersteds and kilo-oersteds. Gauss and tesla are in the flux density converter.",
    keywords: ["magnetic field strength", "oersted to a/m", "a/m to oersted", "koe to ka/m", "h field", "coercivity", "ampere turns per inch"],
    intro: [
      "Magnetic field strength, written H, describes the magnetising effect of currents. It is what a coil produces per metre of its length, and it is how magnet makers quote coercivity, for example a neodymium magnet with about 950 kA/m (about 12 kOe).",
      "The SI unit is the ampere per metre. The CGS unit is the oersted, and 1 Oe is 1000/(4π), about 79.58, A/m.",
    ],
    formula: {
      expression: "H = N × I ÷ l\n1 Oe = 1000 ÷ (4π) A/m ≈ 79.5775 A/m",
      explanation: "N × I is the coil's ampere-turns and l is the length of the magnetic path in metres.",
    },
    assumptions: [
      "H (field strength) and B (flux density) are different quantities, so gauss and tesla are not offered here. In vacuum, and only there, 1 Oe of H goes with 1 G of B in CGS units, which is why the two are often mixed up; inside iron or a magnet the ratio B/H depends on the material.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "How many A/m is one oersted?", answer: "About 79.5775 A/m. In the other direction, 1 kA/m is about 12.566 Oe (4π)." },
      { question: "Is an oersted the same as a gauss?", answer: "No. The oersted measures field strength H and the gauss measures flux density B. Only in vacuum (and, closely, in air) does a field of 1 Oe produce a flux density of 1 G in CGS units. Use the magnetic flux density converter for gauss and tesla." },
      { question: "How do I convert kOe to kA/m for magnet coercivity?", answer: "Multiply by about 79.58. A coercivity of 12 kOe is about 955 kA/m." },
    ],
    units: {
      a_m: "Amperes per metre",
      ma_m: "Milliamperes per metre",
      ka_m: "Kiloamperes per metre",
      a_cm: "Amperes per centimetre",
      a_mm: "Amperes per millimetre",
      at_m: "Ampere-turns per metre",
      at_cm: "Ampere-turns per centimetre",
      at_in: "Ampere-turns per inch",
      oe: "Oersteds",
      koe: "Kilo-oersteds",
      moe: "Milli-oersteds",
      gb_cm: "Gilberts per centimetre",
    },
    sourcesUsedFor: ["Conversion factor for the oersted.", "The ampere per metre as the SI unit of magnetic field strength."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factor for the oersted." },
      { ...SI_BROCHURE, usedFor: "The ampere per metre as the SI unit of magnetic field strength." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
  "magnetic-flux": {
    title: "Magnetic Flux Converter",
    shortTitle: "Magnetic flux",
    summary: "Convert magnetic flux between webers, milliwebers, microwebers, volt-seconds, maxwells and lines.",
    metaTitle: "Magnetic Flux Converter – Wb, mWb, µWb, Mx",
    metaDescription: "Convert magnetic flux between webers, milliwebers, microwebers, nanowebers, volt-seconds, tesla square metres, maxwells, kilomaxwells and lines.",
    keywords: ["magnetic flux", "weber", "maxwell", "weber to maxwell", "volt second", "flux linkage", "fluxmeter"],
    intro: [
      "Magnetic flux is the total amount of magnetic field passing through a surface: flux density times area. It is what a fluxmeter and search coil measure, and what changes when a transformer or generator induces a voltage.",
      "The SI unit is the weber, which equals one volt-second. The CGS unit is the maxwell, also called a line, and 1 Wb is exactly 100,000,000 Mx.",
    ],
    formula: {
      expression: "Φ = B × A\n1 Wb = 1 V·s = 1 T·m² = 10⁸ Mx",
      explanation: "B is flux density in tesla and A is the area in square metres, for a field at right angles to the surface.",
    },
    assumptions: [
      "Values are flux through a surface, not flux density; to convert tesla or gauss, use the magnetic flux density converter.",
      "1 maxwell = 10⁻⁸ Wb exactly by the definitions of the CGS and SI units; a line is the same as a maxwell.",
    ],
    faqs: [
      { question: "How many maxwells are in a weber?", answer: "Exactly 100,000,000 (10⁸). One maxwell is 10 nWb." },
      { question: "Why is a weber equal to a volt-second?", answer: "By Faraday's law, a flux changing by 1 Wb each second through a single turn induces 1 V." },
      { question: "How do I get flux from flux density?", answer: "Multiply by the area. A field of 0.5 T through 20 cm² (0.002 m²) is 1 mWb, or 100,000 Mx." },
    ],
    units: {
      wb: "Webers",
      mwb: "Milliwebers",
      uwb: "Microwebers",
      nwb: "Nanowebers",
      v_s: "Volt-seconds",
      t_m2: "Tesla square metres",
      mx: "Maxwells",
      kmx: "Kilomaxwells",
      g_cm2: "Gauss square centimetres",
      line: "Lines",
    },
    sourcesUsedFor: ["Conversion factor for the maxwell.", "The weber as the SI unit of magnetic flux."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factor for the maxwell." },
      { ...SI_BROCHURE, usedFor: "The weber as the SI unit of magnetic flux." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
  "magnetic-flux-density": {
    title: "Magnetic Flux Density Converter",
    shortTitle: "Magnetic flux density",
    summary: "Convert magnetic flux density (B) between tesla, millitesla, microtesla, gauss, milligauss, gamma and lines per square inch.",
    metaTitle: "Magnetic Flux Density Converter – T, mT, G, mG",
    metaDescription: "Convert magnetic flux density B between tesla, mT, µT, nT, gauss, kilogauss, milligauss, gamma and lines per square inch. Oersteds are converted separately.",
    keywords: ["magnetic flux density", "tesla to gauss", "gauss to tesla", "milligauss", "microtesla", "magnetic field", "gamma nT"],
    intro: [
      "Magnetic flux density, written B, is what people usually mean by the strength of a magnetic field. Gaussmeters and phone magnetometers read it, MRI scanners are rated by it (1.5 T or 3 T), and EMF meters show it in milligauss or microtesla.",
      "The SI unit is the tesla and the CGS unit is the gauss: 1 T is exactly 10,000 G. The Earth's field at the surface is roughly 25–65 µT, or 0.25–0.65 G.",
    ],
    formula: {
      expression: "1 T = 1 Wb/m² = 10,000 G\n1 G = 1 Mx/cm² = 100 µT",
      explanation: "Flux density is magnetic flux per unit area at right angles to the field.",
    },
    assumptions: [
      "B (flux density) and H (field strength) are different quantities, so oersteds and A/m are not offered here. Only in vacuum, in CGS units, does 1 G of B correspond to 1 Oe of H; in magnetic materials the ratio depends on the material's permeability.",
      "The gamma (γ) used in geophysics is exactly 1 nT.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "How many gauss are in a tesla?", answer: "Exactly 10,000. One gauss is 100 µT, and one milligauss is 0.1 µT (100 nT)." },
      { question: "How strong is the Earth's magnetic field?", answer: "About 25 to 65 µT at the surface depending on location, which is 0.25 to 0.65 G." },
      { question: "Can I convert gauss to oersted?", answer: "Not in general, because they measure different things. In vacuum or air in CGS units, a field of 1 Oe gives a flux density of 1 G; inside iron or a magnet the values differ. Use the magnetic field strength converter for oersteds." },
    ],
    units: {
      t: "Teslas",
      mt: "Milliteslas",
      ut: "Microteslas",
      nt: "Nanoteslas",
      wb_m2: "Webers per square metre",
      gauss: "Gauss",
      kgauss: "Kilogauss",
      mgauss: "Milligauss",
      gamma: "Gammas",
      mx_cm2: "Maxwells per square centimetre",
      line_in2: "Lines per square inch",
      kline_in2: "Kilolines per square inch",
    },
    sourcesUsedFor: ["Conversion factors for the gauss, gamma and maxwell.", "The tesla as the SI unit of magnetic flux density."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factors for the gauss, gamma and maxwell." },
      { ...SI_BROCHURE, usedFor: "The tesla as the SI unit of magnetic flux density." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
};
