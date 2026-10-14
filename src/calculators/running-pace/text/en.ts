const text = {
  race: "Distance",
  races: { "5k": "5K", "10k": "10K", half: "Half marathon", marathon: "Marathon", custom: "Custom distance" },
  distance: "Custom distance",
  unit: "Unit",
  units: { km: "Kilometers", mi: "Miles" },
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  timeZero: "Enter a finish time greater than zero.",
  perKm: "Pace per kilometer",
  caption: "Finish time {time} over {km} km.",
  perMile: "Pace per mile",
  speed: "Average speed",
  speedMph: "Average speed (mph)",
};
export type RunningPaceText = typeof text;
export default text;
