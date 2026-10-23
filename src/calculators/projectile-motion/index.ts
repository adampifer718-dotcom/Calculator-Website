import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { projectileMotionEngine, makeProjectileMotionEngine } from "./engine";

export const projectileMotion = defineCalculator({
  id: "projectile-motion",
  slug: "projectile-motion-calculator",
  status: "published",
  title: "Projectile Motion Calculator",
  shortTitle: "Projectile motion",
  category: "physics",
  collections: ["education-research", "fitness-sports"],
  summary: "Find the range, flight time, peak height and impact speed of a launched object, from any height, on Earth, the Moon or Mars.",
  metaTitle: "Projectile Motion Calculator – Range, Height & Flight Time",
  metaDescription: "Enter launch speed, angle and height to get the range, time of flight, maximum height and impact speed, with a table of positions. No air drag.",
  keywords: ["projectile motion", "trajectory", "range", "time of flight", "maximum height", "launch angle", "kinematics", "parabola"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "University Physics Volume 1, 4.3 Projectile Motion",
      publisher: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion",
      usedFor: "Splitting the motion into independent horizontal and vertical parts; range, time of flight, maximum height and impact velocity without air resistance.",
    },
    {
      title: "Moon Fact Sheet",
      publisher: "NASA Space Science Data Coordinated Archive (NSSDCA)",
      url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html",
      usedFor: "Lunar surface gravity, 1.62 m/s².",
    },
    {
      title: "Mars Fact Sheet",
      publisher: "NASA Space Science Data Coordinated Archive (NSSDCA)",
      url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html?embed=true",
      usedFor: "Mean surface gravity of Mars, 3.73 m/s².",
    },
  ],
  intro: [
    "A thrown ball, a kicked football or a jet of water all follow nearly the same curve once they are in the air: they keep moving sideways at a steady speed while gravity pulls them down at a steady rate. The result is a parabola.",
    "Give the launch speed, the angle above horizontal and the height above the landing ground. The calculator finds how far the object travels, how long it stays up, how high it climbs and how fast it is going when it lands, and lists its position at ten moments of the flight.",
  ],
  howToUse: [
    "Enter the launch speed and choose its unit.",
    "Enter the launch angle in degrees above horizontal, from 0° (level) to 90° (straight up).",
    "Enter the launch height above the landing ground, and choose meters or feet for heights and distances.",
    "Choose Earth, the Moon, Mars or your own gravity value, then read the range and the other results.",
  ],
  formulas: [
    { title: "Velocity components", expression: "vₓ = v·cos θ, v_y = v·sin θ", explanation: "The horizontal part stays constant; the vertical part changes by g every second." },
    { title: "Time of flight", expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g", explanation: "The positive root of h + v_y·t − ½·g·t² = 0, which includes the launch height h." },
    { title: "Range and peak", expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_apex = v_y ÷ g", explanation: "Horizontal distance, the highest point above the ground, and when it is reached." },
    { title: "Impact", expression: "v_impact = √(vₓ² + v_y² + 2·g·h), angle = atan(√(v_y² + 2·g·h) ÷ vₓ)", explanation: "Speed and the angle below horizontal at which the object hits the ground." },
  ],
  examples: [
    {
      title: "A ball kicked at 25 m/s and 35° from the ground",
      inputs: { speed: 25, speedUnit: "ms", angle: 35, height: 0, lengthUnit: "m", gravity: "earth" },
      steps: ["vₓ = 25 cos 35° ≈ 20.479 m/s, v_y = 25 sin 35° ≈ 14.339 m/s", "T = 2 × 14.339 ÷ 9.80665 ≈ 2.924 s", "R = 20.479 × 2.924 ≈ 59.89 m; peak ≈ 10.48 m"],
      expectedPrimary: 59.88873753944443,
    },
    {
      title: "A throw at 15 m/s and 20° released 1.8 m above the ground",
      inputs: { speed: 15, speedUnit: "ms", angle: 20, height: 1.8, lengthUnit: "m", gravity: "earth" },
      steps: ["vₓ ≈ 14.095 m/s, v_y ≈ 5.130 m/s", "T = (5.130 + √(5.130² + 2 × 9.80665 × 1.8)) ÷ 9.80665 ≈ 1.324 s", "R = 14.095 × 1.324 ≈ 18.66 m; it lands at about 16.13 m/s"],
      expectedPrimary: 18.657105651686706,
    },
    {
      title: "A golf shot at 40 m/s and 45° on the Moon",
      inputs: { speed: 40, speedUnit: "ms", angle: 45, height: 0, lengthUnit: "m", gravity: "moon" },
      steps: ["On level ground R = v² sin(2θ) ÷ g = 1,600 × 1 ÷ 1.62", "R ≈ 987.65 m, about six times farther than on Earth", "Time of flight ≈ 34.92 s"],
      expectedPrimary: 987.6543209876542,
    },
  ],
  assumptions: [
    "Air resistance, wind, spin and lift are ignored. Real trajectories are shorter and lower, and a real projectile lands more steeply than this model predicts.",
    "Gravity is constant and points straight down, and the ground is flat and level. This holds well for everyday distances, not for long-range ballistics.",
    "Earth uses standard gravity, 9.80665 m/s² (exact by definition). Actual gravity varies by about ±0.3% with latitude and altitude. Moon and Mars values are NASA's mean surface figures.",
    "The launch height is measured above the landing point. A landing above the launch point is not covered.",
  ],
  faqs: [
    { question: "What angle gives the longest range?", answer: "From ground level and without drag, 45° gives the maximum range. Launching from a height moves the best angle below 45°, and air drag in real life lowers it further." },
    { question: "Does the mass of the object matter?", answer: "Not without air resistance: every object falls with the same acceleration g, so the path depends only on speed, angle, height and gravity." },
    { question: "Why is the impact speed larger than the launch speed when I start from a height?", answer: "The object falls farther than it rose, so gravity adds vertical speed. The horizontal speed never changes, so the impact angle is steeper than the launch angle." },
  ],
  related: ["acceleration-calculator", "kinetic-energy-calculator", "speed-distance-time-calculator"],
  updated: "2026-10-22",
  engine: projectileMotionEngine,
  text,
  makeEngine: makeProjectileMotionEngine,
  translations,
});
