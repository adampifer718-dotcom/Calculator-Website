const text = {
  mass: "Mass",
  massUnit: "Mass unit",
  massUnits: { kg: "Kilograms (kg)", lb: "Pounds (lb)" },
  velocity: "Speed",
  velocityUnit: "Speed unit",
  velocityUnits: { "m/s": "Meters per second (m/s)", "km/h": "Kilometers per hour (km/h)", mph: "Miles per hour (mph)" },
  energy: "Kinetic energy",
  kj: "In kilojoules",
  wh: "In watt-hours",
  mps: "Speed in m/s",
  note: "Classical (non-relativistic) kinetic energy, accurate for everyday speeds.",
};
export type KineticEnergyText = typeof text;
export default text;
