const text = {
  units: "Units",
  unitOptions: { us: "Miles, MPG and price per US gallon", metric: "Kilometers, L/100 km and price per liter" },
  distance: "Trip distance",
  efficiency: "Fuel economy",
  efficiencyHelp: "Miles per gallon, or liters per 100 km.",
  price: "Fuel price per gallon or liter",
  cost: "Fuel cost",
  fuel: "Fuel used",
  perKm: "Cost per kilometer",
  perMile: "Cost per mile",
  gallons: "US gal",
};
export type FuelCostText = typeof text;
export default text;
