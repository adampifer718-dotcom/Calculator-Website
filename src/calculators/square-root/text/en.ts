const text = {
  kind: "Root",
  kinds: { square: "Square root (√x)", cube: "Cube root (∛x)" },
  value: "Number (x)",
  negative: "Negative numbers have no real square root.",
  squareRoot: "Square root",
  cubeRoot: "Cube root",
  perfectSquare: "Perfect square?",
  perfectCube: "Perfect cube?",
  yes: "Yes",
  no: "No",
  checkSquare: "Check: root²",
  checkCube: "Check: root³",
  principalNote: "−{root} is also a square root; the calculator shows the principal (positive) root.",
};
export type SquareRootText = typeof text;
export default text;
