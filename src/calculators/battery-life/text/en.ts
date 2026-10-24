const text = {
  capacity: "Battery capacity",
  capacityUnit: "Capacity unit",
  capacityUnits: { mAh: "Milliamp-hours (mAh)", Ah: "Amp-hours (Ah)", Wh: "Watt-hours (Wh)" },
  voltage: "Battery voltage",
  voltageHelp: "The nominal voltage, such as 3.7 V for a lithium-ion cell or 12 V for a lead-acid battery. Needed when the capacity and the load use different units (charge and power), and to show the energy.",
  load: "Device load",
  loadUnit: "Load unit",
  loadUnits: { mA: "Milliamps (mA)", A: "Amps (A)", W: "Watts (W)" },
  depth: "Usable capacity (depth of discharge)",
  depthHelp: "The share of the rated capacity you can actually use. 80% is a common allowance for losses and to protect the battery; use 100% for the ideal figure.",
  errors: {
    voltageNeeded: "Enter the battery voltage to convert between charge (mAh or Ah) and power or energy (W or Wh).",
  },
  runtime: "Estimated runtime (h:mm)",
  runtimeText: "{h}:{mm}",
  caption: "{capacity} battery powering a {load} load, using {depth} of its capacity.",
  hours: "Runtime in hours",
  days: "Runtime in days",
  energy: "Rated energy",
  usableEnergy: "Usable energy",
  current: "Load current",
  power: "Load power",
  notes: {
    constant: "This assumes a constant load. A device that sleeps and wakes up draws an average current; use that average.",
    peukert: "Real capacity falls in the cold, as the battery ages and at high discharge currents (the Peukert effect, not modelled here), so expect less runtime under heavy loads.",
    conversion: "The voltage was used to convert between charge and energy (Wh = Ah × V); this ignores the voltage dropping as the battery discharges.",
  },
};
export type BatteryLifeText = typeof text;
export default text;
