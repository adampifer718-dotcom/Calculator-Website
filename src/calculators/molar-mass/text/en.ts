const text = {
  formula: "Chemical formula",
  formulaHelp:
    "Element symbols are case-sensitive (Co is cobalt, CO is carbon monoxide). Use ( ) or [ ] for groups, and ·, . or * for hydrates, e.g. CuSO4·5H2O.",
  formulaPlaceholder: "e.g. Ca(OH)2",
  errors: {
    empty: "Enter a chemical formula.",
    tooLong: "The formula is too long. Use at most 200 characters.",
    invalidChar: "Invalid character “{token}” at position {position}. Use element symbols, numbers, brackets and hydrate dots only.",
    lowercase: "Unexpected lowercase letter “{token}” at position {position}. Element symbols start with a capital letter, e.g. Na or Cl.",
    unknownElement: "Unknown element symbol “{token}” at position {position}.",
    noStandardWeight: "{token} (position {position}) has no standard atomic weight, so its molar mass cannot be calculated.",
    unclosed: "Unbalanced brackets: the “{token}” at position {position} is never closed.",
    unexpectedClose: "Unbalanced brackets: the “{token}” at position {position} has no matching opening bracket.",
    mismatched: "Mismatched brackets: the “{token}” at position {position} does not match the bracket it closes.",
    emptyGroup: "The bracket group starting at position {position} is empty.",
    zeroCount: "The count at position {position} is zero. Counts must be whole numbers of at least 1.",
    misplacedNumber: "The number at position {position} is not attached to an element or group.",
    misplacedDot: "The hydrate dot at position {position} must sit between two parts of the formula, e.g. CuSO4·5H2O.",
    tooManyAtoms: "The formula has too many atoms. Use at most 1,000,000 atoms in total.",
  },
  molarMass: "Molar mass",
  caption: "{formula}: sum of each atom count × standard atomic weight",
  totalAtoms: "Atoms per formula unit",
  elements: "Different elements",
  massOfMole: "Mass of one mole",
  tableCaption: "Composition by element",
  columns: { element: "Element", count: "Atoms", weight: "Atomic weight", mass: "Mass (g/mol)", percent: "Mass %" },
  note: "Atomic weights are the IUPAC abridged standard values. For elements with a natural range (such as H, C, N, O and S), the conventional single value is used.",
};
export type MolarMassText = typeof text;
export default text;
