import type { ConverterContent, ConverterMeta } from "../../types";

const NIST_811 = {
  title: "NIST Guide to the SI (Special Publication 811), Appendix B.8: Factors for units listed alphabetically",
  publisher: "National Institute of Standards and Technology",
  url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
};

const SI_BROCHURE = {
  title: "SI Brochure, 9th edition (2019)",
  publisher: "Bureau International des Poids et Mesures",
  url: "https://www.bipm.org/en/si-brochure-9",
};

const NOT_ADVICE = "This converter only changes units. It is not medical or radiation-safety advice; for dose limits, exposure assessment or treatment questions, follow your radiation safety officer, physician or regulator.";

export const radiologyContent: Record<string, ConverterContent & ConverterMeta> = {
  radiation: {
    title: "Radiation Dose Converter",
    shortTitle: "Dose equivalent",
    summary: "Convert radiation dose equivalent between sieverts, millisieverts, microsieverts, rem and millirem.",
    metaTitle: "Radiation Dose Converter – Sv, mSv, µSv, rem, mrem",
    metaDescription: "Convert dose equivalent and effective dose between sieverts, millisieverts, microsieverts, rem and millirem using the exact 1 rem = 0.01 Sv.",
    keywords: ["sievert", "rem", "msv to mrem", "mrem to msv", "microsievert", "dose equivalent", "effective dose", "radiation dose"],
    intro: [
      "Dose equivalent and effective dose describe the biological effect of ionizing radiation on the body. Dosimeter badges, medical imaging reports and background-radiation maps quote them in millisieverts or microsieverts, while some US regulations still use rem and millirem.",
      "The sievert is the SI unit and the rem is its older counterpart: 1 rem is exactly 0.01 Sv, so 1 mSv is 100 mrem.",
    ],
    formula: {
      expression: "Sv = rem × 0.01    mSv = mrem ÷ 100",
      explanation: "The rem was defined as one hundredth of a sievert, so every conversion is an exact power-of-ten ratio.",
    },
    assumptions: [
      NOT_ADVICE,
      "Sieverts and grays are different quantities: sieverts include weighting factors for radiation type and tissue, grays do not. Use the absorbed dose converter for grays and rads.",
      "Dose rates (for example µSv/h) convert the same way, as long as both sides use the same time unit.",
    ],
    faqs: [
      { question: "How many millirem is 1 millisievert?", answer: "1 mSv is exactly 100 mrem, and 1 mrem is 0.01 mSv (10 µSv)." },
      { question: "How many rem are in a sievert?", answer: "1 Sv is exactly 100 rem." },
      { question: "Can I convert sieverts to grays?", answer: "Not with a fixed factor. Sieverts weight the absorbed dose in grays by the type of radiation and the tissue exposed, so the relationship depends on the situation." },
    ],
    units: {
      sv: "Sieverts",
      csv: "Centisieverts",
      msv: "Millisieverts",
      usv: "Microsieverts",
      nsv: "Nanosieverts",
      rem: "Rem",
      mrem: "Millirem",
      urem: "Microrem",
    },
    sourcesUsedFor: ["Conversion factor of the rem to the sievert.", "Definition of the sievert."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factor of the rem to the sievert." },
      { ...SI_BROCHURE, usedFor: "Definition of the sievert." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
  "radiation-activity": {
    title: "Radioactivity Converter",
    shortTitle: "Radioactivity",
    summary: "Convert the activity of a radioactive source between becquerels, curies, rutherfords and disintegrations per second or minute.",
    metaTitle: "Radioactivity Converter – Bq, MBq, GBq, Ci, mCi, µCi",
    metaDescription: "Convert radioactivity between becquerels, kilo-, mega- and gigabecquerels, curies, millicuries, microcuries, picocuries and disintegrations per minute.",
    keywords: ["becquerel", "curie", "mci to mbq", "mbq to mci", "picocurie", "radioactivity", "activity", "disintegrations per minute"],
    intro: [
      "Activity is how many atoms in a radioactive sample decay each second. Nuclear medicine doses are prescribed in megabecquerels or millicuries, radon in homes is reported in becquerels or picocuries per litre, and laboratory counters often show disintegrations per minute.",
      "One becquerel is one decay per second. The curie, based on the activity of a gram of radium, is fixed at exactly 37 billion becquerels.",
    ],
    formula: {
      expression: "Bq = Ci × 3.7 × 10¹⁰    1 mCi = 37 MBq",
      explanation: "The curie is defined as exactly 3.7 × 10¹⁰ Bq, and 1 dpm is one decay per minute, or 1/60 Bq.",
    },
    assumptions: [
      NOT_ADVICE,
      "Activity measures decays, not dose: the same activity can give very different doses depending on the nuclide, distance, shielding and time.",
      "Concentrations such as Bq/m³ or pCi/L convert the same way, as long as both sides use the same volume unit.",
    ],
    faqs: [
      { question: "How many megabecquerels are in a millicurie?", answer: "1 mCi is exactly 37 MBq; 1 MBq is about 0.027 mCi (27.03 µCi)." },
      { question: "How do I convert pCi/L to Bq/m³?", answer: "1 pCi is 0.037 Bq and 1 m³ is 1,000 L, so 1 pCi/L is 37 Bq/m³. The US radon action level of 4 pCi/L is 148 Bq/m³." },
      { question: "What is the difference between dps and dpm?", answer: "Disintegrations per second equal becquerels; disintegrations per minute are 60 times smaller, so 1 Bq = 60 dpm." },
    ],
    units: {
      bq: "Becquerels",
      kbq: "Kilobecquerels",
      mbq: "Megabecquerels",
      gbq: "Gigabecquerels",
      tbq: "Terabecquerels",
      pbq: "Petabecquerels",
      kci: "Kilocuries",
      ci: "Curies",
      mci: "Millicuries",
      uci: "Microcuries",
      nci: "Nanocuries",
      pci: "Picocuries",
      rd: "Rutherfords",
      dps: "Disintegrations per second",
      dpm: "Disintegrations per minute",
    },
    sourcesUsedFor: ["Conversion factor of the curie to the becquerel.", "Definition of the becquerel."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factor of the curie to the becquerel." },
      { ...SI_BROCHURE, usedFor: "Definition of the becquerel." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
  "radiation-exposure": {
    title: "Radiation Exposure Converter",
    shortTitle: "Radiation exposure",
    summary: "Convert X-ray and gamma-ray exposure between roentgens, milliroentgens and coulombs per kilogram.",
    metaTitle: "Radiation Exposure Converter – R, mR, C/kg",
    metaDescription: "Convert radiation exposure between roentgens, milliroentgens, microroentgens and coulombs per kilogram using the exact 1 R = 2.58 × 10⁻⁴ C/kg.",
    keywords: ["roentgen", "milliroentgen", "coulomb per kilogram", "r to c/kg", "radiation exposure", "survey meter", "mr/h"],
    intro: [
      "Exposure measures how strongly X-rays or gamma rays ionize air: the electric charge they free in each kilogram of air. Older survey meters and civil-defence instruments read in roentgens or milliroentgens per hour.",
      "The SI expresses exposure in coulombs per kilogram. The roentgen is fixed at exactly 2.58 × 10⁻⁴ C/kg.",
    ],
    formula: {
      expression: "C/kg = R × 2.58 × 10⁻⁴",
      explanation: "One roentgen is the exposure that frees 2.58 × 10⁻⁴ coulombs of charge per kilogram of dry air.",
    },
    assumptions: [
      NOT_ADVICE,
      "Exposure is defined only for X-rays and gamma rays in air. It is not an absorbed dose or a dose equivalent, and converting it to grays or sieverts depends on the radiation energy and material.",
      "Exposure rates (for example mR/h) convert the same way, as long as both sides use the same time unit.",
    ],
    faqs: [
      { question: "How many coulombs per kilogram is one roentgen?", answer: "Exactly 2.58 × 10⁻⁴ C/kg, or 258 µC/kg. One milliroentgen is 0.258 µC/kg." },
      { question: "How many roentgens are in 1 C/kg?", answer: "About 3,876 R, because 1 ÷ 0.000258 ≈ 3,875.97." },
      { question: "Is a roentgen the same as a rem or a rad?", answer: "No. They measure different things. For gamma rays in soft tissue, 1 R gives roughly 0.0087 to 0.0096 Gy, which is why rough rules sometimes treat them as similar, but there is no fixed conversion." },
    ],
    units: {
      c_kg: "Coulombs per kilogram",
      mc_kg: "Millicoulombs per kilogram",
      uc_kg: "Microcoulombs per kilogram",
      nc_kg: "Nanocoulombs per kilogram",
      kr: "Kiloroentgens",
      r: "Roentgens",
      mr: "Milliroentgens",
      ur: "Microroentgens",
    },
    sourcesUsedFor: ["Conversion factor of the roentgen to coulombs per kilogram."],
    sources: [{ ...NIST_811, usedFor: "Conversion factor of the roentgen to coulombs per kilogram." }],
    verification: "exact",
    updated: "2026-10-16",
  },
  "radiation-absorbed-dose": {
    title: "Absorbed Dose Converter",
    shortTitle: "Absorbed dose",
    summary: "Convert absorbed radiation dose between grays, centigrays, milligrays, rads and joules per kilogram.",
    metaTitle: "Absorbed Dose Converter – Gy, cGy, mGy, rad",
    metaDescription: "Convert absorbed radiation dose between grays, kilograys, centigrays, milligrays, rads, kilorads, ergs per gram and joules per kilogram.",
    keywords: ["gray", "rad", "gy to rad", "rad to gy", "centigray", "milligray", "absorbed dose", "kilogray"],
    intro: [
      "Absorbed dose is the energy that ionizing radiation deposits in each kilogram of material. Radiotherapy plans use grays and centigrays, CT dose indices use milligrays, and food and medical-device sterilization uses kilograys.",
      "One gray is one joule per kilogram. The older rad is exactly one hundredth of a gray, so 1 cGy equals 1 rad.",
    ],
    formula: {
      expression: "Gy = rad × 0.01    1 Gy = 1 J/kg",
      explanation: "The rad was defined as 100 ergs per gram, which is exactly 0.01 J/kg.",
    },
    assumptions: [
      NOT_ADVICE,
      "Grays measure deposited energy only. They are not sieverts, which add weighting for radiation type and tissue; use the radiation dose converter for sieverts and rem.",
    ],
    faqs: [
      { question: "How many rads are in a gray?", answer: "1 Gy is exactly 100 rad, and 1 rad is 0.01 Gy (1 cGy)." },
      { question: "Why do radiotherapy reports use centigrays?", answer: "Because 1 cGy equals 1 rad, centigrays let clinics keep familiar numbers: a 2 Gy fraction is 200 cGy, or 200 rad." },
      { question: "Is a gray the same as a sievert?", answer: "Both are joules per kilogram, but they are different quantities. A gray of alpha radiation has a much larger biological effect than a gray of X-rays, which the sievert accounts for." },
    ],
    units: {
      gy: "Grays",
      kgy: "Kilograys",
      cgy: "Centigrays",
      mgy: "Milligrays",
      ugy: "Micrograys",
      j_kg: "Joules per kilogram",
      krad: "Kilorads",
      rad: "Rads",
      mrad: "Millirads",
      erg_g: "Ergs per gram",
    },
    sourcesUsedFor: ["Conversion factors of the rad and erg per gram to the gray.", "Definition of the gray."],
    sources: [
      { ...NIST_811, usedFor: "Conversion factors of the rad and erg per gram to the gray." },
      { ...SI_BROCHURE, usedFor: "Definition of the gray." },
    ],
    verification: "exact",
    updated: "2026-10-16",
  },
};
