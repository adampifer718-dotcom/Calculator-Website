import type { CalculatorDefinition } from "@/calculators/framework/types";
import { speedDistanceTimeEngine } from "./engine";

export const speedDistanceTime: CalculatorDefinition = {
  id: "speed-distance-time",
  slug: "speed-distance-time-calculator",
  status: "published",
  title: "Speed, Distance and Time Calculator",
  shortTitle: "Speed, Distance, Time",
  category: "physics",
  collections: ["education-research", "fitness-sports"],
  summary: "Find average speed, distance traveled or travel time from the other two values.",
  metaTitle: "Speed, Distance and Time Calculator",
  metaDescription: "Calculate average speed, distance or travel time from the other two values in kilometers and km/h or miles and mph, with conversions.",
  keywords: ["speed", "distance", "time", "travel time", "average speed", "velocity", "km/h", "mph"],
  popularRank: 30,
  addedOn: "2026-10-14",
  sources: [{"title": "University Physics Volume 1, section 3.1: Position, Displacement, and Average Velocity", "publisher": "OpenStax, Rice University", "url": "https://openstax.org/books/university-physics-volume-1/pages/3-1-position-displacement-and-average-velocity", "usedFor": "Definition of average speed and velocity."}],
  intro: ["Speed, distance and time are linked by one simple relationship. Know any two and you can find the third.", "The calculator works in kilometers and km/h or miles and mph, and shows conversions."],
  howToUse: ["Choose what you want to find.", "Choose metric or imperial units.", "Enter the two known values, giving time in hours and minutes.", "Read the result."],
  formulas: [
    { title: "The relationship", expression: "speed = distance ÷ time\ndistance = speed × time\ntime = distance ÷ speed", explanation: "Use consistent units, such as km and hours for km/h." },
  ],
  examples: [
    {
      title: "150 km in 2 h 30 min",
      inputs: {"solve": "speed", "units": "metric", "distance": 150, "hours": 2, "minutes": 30},
      steps: ["Time = 2.5 h", "Speed = 150 ÷ 2.5 = 60 km/h"],
      expectedPrimary: 60,
    },
    {
      title: "90 miles at 60 mph",
      inputs: {"solve": "time", "units": "imperial", "distance": 90, "speed": 60},
      steps: ["Time = 90 ÷ 60 = 1.5 h", "= 1 h 30 min"],
      expectedPrimary: "1 h 30 min",
    },
  ],
  assumptions: ["Gives the average speed over the whole trip; actual speed can vary along the way.", "Times are rounded to the nearest minute for display."],
  faqs: [
    { question: "How do I calculate average speed?", answer: "Divide the total distance by the total time. 120 km in 1.5 hours is 80 km/h." },
    { question: "How do I convert km/h to m/s?", answer: "Divide by 3.6. So 72 km/h is 20 m/s." },
    { question: "Is speed the same as velocity?", answer: "Velocity also has a direction. For travel along a route, average speed is usually what you need." },
  ],
  related: ["running-pace-calculator", "fuel-cost-calculator", "kinetic-energy-calculator"],
  updated: "2026-10-14",
  engine: speedDistanceTimeEngine,
};
