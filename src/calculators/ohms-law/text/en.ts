const text = {
  known: "I know",
  knownOptions: { VR: "Voltage and resistance", VI: "Voltage and current", IR: "Current and resistance" },
  voltage: "Voltage (V)",
  current: "Current (I)",
  resistance: "Resistance (R)",
  currentOut: "Current (I = V ÷ R)",
  resistanceOut: "Resistance (R = V ÷ I)",
  voltageOut: "Voltage (V = I × R)",
  power: "Power (P = V × I)",
  voltageShort: "Voltage",
  currentShort: "Current",
  resistanceShort: "Resistance",
  note: "Applies to ohmic (linear) components and DC circuits, or to RMS values for purely resistive AC loads.",
};
export type OhmsLawText = typeof text;
export default text;
