import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { downloadTimeEngine, makeDownloadTimeEngine } from "./engine";

export const downloadTime = defineCalculator({
  id: "download-time",
  slug: "download-time-calculator",
  status: "published",
  title: "Download Time Calculator",
  shortTitle: "Download Time",
  category: "other",
  collections: ["software-data"],
  summary: "Estimate how long a file takes to download or upload from its size and your connection speed.",
  metaTitle: "Download Time Calculator – File Size and Speed",
  metaDescription: "Estimate download or upload time from file size in MB, GB, GiB or TB and connection speed in Mbit/s or Gbit/s, with optional protocol overhead.",
  keywords: ["download time", "upload time", "transfer time", "file size", "mbps", "internet speed", "bandwidth", "how long to download"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prefixes for binary multiples",
      publisher: "NIST Reference on Constants, Units and Uncertainty",
      url: "https://www.physics.nist.gov/cgi-bin/cuu/Info/Units/binary.html",
      usedFor: "The IEC binary prefixes kibi, mebi, gibi and tebi (powers of 1,024) and how they differ from the decimal SI prefixes.",
    },
    {
      title: "Broadband Speed Guide",
      publisher: "Federal Communications Commission",
      url: "https://fcc.gov/consumers/guides/broadband-speed-guide",
      usedFor: "Connection speeds being quoted in megabits per second (Mbps).",
    },
  ],
  intro: [
    "Download time is the amount of data divided by the speed it moves at. The catch is units: internet plans are sold in megabits per second, while files are measured in megabytes or gigabytes, and a byte is 8 bits.",
    "Enter the file size and connection speed in the units you have. The calculator converts both, allows for any protocol overhead, and shows the time in days, hours, minutes and seconds.",
  ],
  howToUse: [
    "Enter the file size and choose its unit. Use GiB or MiB if the size comes from a system that counts in powers of 1,024.",
    "Enter the connection speed and its unit. Most plans and speed tests report Mbit/s.",
    "Optionally enter a protocol overhead percentage to allow for speed lost to networking.",
    "Read the estimated time, the total in seconds and the effective speed.",
  ],
  formulas: [
    { title: "Download time", expression: "time = (size in bytes × 8) ÷ effective speed in bit/s", explanation: "Multiplying by 8 turns bytes into bits so both sides use the same unit." },
    { title: "Effective speed", expression: "effective speed = speed × (1 − overhead ÷ 100)", explanation: "Overhead is the share of the line used by headers and control traffic rather than file data." },
    { title: "Prefixes", expression: "1 GB = 10⁹ bytes; 1 GiB = 2³⁰ = 1,073,741,824 bytes", explanation: "Decimal prefixes step by 1,000; binary prefixes step by 1,024." },
  ],
  examples: [
    {
      title: "4.7 GB at 50 Mbit/s",
      inputs: { size: 4.7, sizeUnit: "GB", speed: 50, speedUnit: "Mbps", overhead: 0 },
      steps: ["4.7 GB = 4.7 × 10⁹ × 8 = 37,600 Mbit", "37,600 ÷ 50 = 752 seconds", "752 s = 12 minutes and 32 seconds"],
      expectedPrimary: "12 minutes, 32 seconds",
    },
    {
      title: "2 GiB at 100 Mbit/s with 10% overhead",
      inputs: { size: 2, sizeUnit: "GiB", speed: 100, speedUnit: "Mbps", overhead: 10 },
      steps: ["2 GiB = 2 × 1,073,741,824 × 8 ≈ 17,180 Mbit", "Effective speed = 100 × 0.9 = 90 Mbit/s", "17,180 ÷ 90 ≈ 190.89 s, about 3 minutes and 11 seconds"],
      expectedPrimary: "3 minutes, 11 seconds",
    },
    {
      title: "1.5 TB backup over 1 Gbit/s",
      inputs: { size: 1.5, sizeUnit: "TB", speed: 1, speedUnit: "Gbps", overhead: 0 },
      steps: ["1.5 TB = 1.5 × 10¹² × 8 = 12 × 10¹² bits", "12 × 10¹² ÷ 10⁹ = 12,000 seconds", "12,000 s = 3 hours and 20 minutes"],
      expectedPrimary: "3 hours, 20 minutes",
    },
  ],
  assumptions: [
    "The connection runs at a steady speed for the whole transfer. Real speeds vary with Wi-Fi signal, network congestion and the server's limits.",
    "Protocol overhead is a single percentage you choose; the default 0% gives the theoretical minimum time.",
    "kbit/s, Mbit/s and Gbit/s use powers of 1,000. MB/s means megabytes (8,000,000 bits) per second.",
    "Times of 10 seconds or more are rounded to the nearest second.",
  ],
  faqs: [
    { question: "What is the difference between Mbps and MB/s?", answer: "Mbps (Mbit/s) counts megabits; MB/s counts megabytes. One byte is 8 bits, so a 200 Mbit/s plan downloads at most 25 MB each second." },
    { question: "Why does my computer say a file is smaller than the label?", answer: "Many operating systems divide by 1,024 rather than 1,000 but still write GB. A 500 GB drive holds 500 × 10⁹ bytes, which is about 465.66 GiB." },
    { question: "How much overhead should I allow?", answer: "For a wired connection, 3–10% is a reasonable allowance for packet headers and acknowledgments. Busy Wi-Fi or long-distance transfers can lose more." },
  ],
  related: ["data-storage-converter", "speed-distance-time-calculator", "scientific-notation-calculator"],
  updated: "2026-10-15",
  engine: downloadTimeEngine,
  text,
  makeEngine: makeDownloadTimeEngine,
  translations,
});
