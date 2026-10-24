const text = {
  mode: "Calculate",
  modes: { pace: "Pace from distance and time", time: "Time from distance and pace" },
  distance: "Distance",
  unit: "Distance unit",
  units: { m: "Metres (m)", yd: "Yards (yd)" },
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  timeZero: "Enter a time greater than 0.",
  paceMinutes: "Pace: minutes",
  paceSeconds: "Pace: seconds",
  paceUnit: "Pace per",
  paceUnits: { m: "100 m", yd: "100 yd" },
  paceZero: "Enter a pace greater than 0.",
  pace: "Pace per 100 {unit}",
  time: "Total time",
  caption: "{distance} in {time}.",
  pace100m: "Pace per 100 m",
  pace100yd: "Pace per 100 yd",
  speedMs: "Speed (m/s)",
  speedKmh: "Speed (km/h)",
  distanceM: "Distance in metres",
  table: {
    caption: "Projected times at the same even pace",
    distance: "Distance",
    time: "Time",
  },
  notes: {
    even: "Projected times assume the same pace for the whole distance. Longer swims are usually slower per 100, and turns differ between 25 m, 50 m and 25 yd pools.",
  },
};
export type SwimPaceText = typeof text;
export default text;
