const text = {
  panelWatts: "Panel rating",
  panelWattsHelp: "The power rating of one panel at standard test conditions (STC), printed on its label or data sheet.",
  panels: "Number of panels",
  sunHours: "Peak sun hours per day",
  sunHoursHelp: "The daily solar energy at your site expressed as hours of full sun (1 kW/m²). 4.5 is only an example; the right value depends on your location, the panel tilt and orientation, and the season.",
  losses: "System losses",
  lossesHelp: "Losses from the inverter, wiring, heat, dirt, shading and mismatch. 14% is a commonly used default.",
  annualUsage: "Annual electricity use (optional)",
  annualUsageHelp: "Your yearly consumption from your electricity bills, to see how much of it the system covers and what size would cover all of it.",
  errors: {
    losses: "System losses must be less than 100%.",
  },
  annual: "Estimated energy per year",
  caption: "{size} system × {hours} peak sun hours × {factor} after {losses} losses.",
  daily: "Energy per day",
  monthly: "Average energy per month",
  systemSize: "System size (DC)",
  specificYield: "Energy per kW installed per year",
  coverage: "Share of your annual use covered",
  sizeNeeded: "System size to cover all of your use",
  panelsNeeded: "Panels needed to cover all of your use",
  panelsMore: "Additional panels needed",
  notes: {
    estimate: "This is a simple estimate. A local solar resource tool such as NREL's PVWatts uses hourly weather data for your site and gives a better figure.",
    covered: "The system as entered produces at least as much energy in a year as you use. Output and use rarely line up hour by hour, so you may still draw some power from the grid.",
    panelsRounded: "The panel count is rounded up to whole panels of {watts}.",
  },
};
export type SolarPanelOutputText = typeof text;
export default text;
