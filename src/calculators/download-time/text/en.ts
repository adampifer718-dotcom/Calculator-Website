const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const text = {
  size: "File size",
  sizeUnit: "Size unit",
  sizeUnits: {
    B: "Bytes (B)",
    kB: "Kilobytes (kB, 1,000 B)",
    MB: "Megabytes (MB)",
    GB: "Gigabytes (GB)",
    TB: "Terabytes (TB)",
    KiB: "Kibibytes (KiB, 1,024 B)",
    MiB: "Mebibytes (MiB)",
    GiB: "Gibibytes (GiB)",
    TiB: "Tebibytes (TiB)",
  },
  speed: "Connection speed",
  speedUnit: "Speed unit",
  speedUnits: {
    kbps: "Kilobits per second (kbit/s)",
    Mbps: "Megabits per second (Mbit/s, Mbps)",
    Gbps: "Gigabits per second (Gbit/s)",
    MBps: "Megabytes per second (MB/s)",
  },
  overhead: "Protocol overhead",
  overheadHelp: "Share of the speed lost to packet headers, retransmissions and other traffic. Leave at 0 for the ideal time; 5–10% is a common allowance.",
  time: "Download time",
  caption: "{size} at {speed}.",
  units: {
    days: forms("{n} day", "{n} days"),
    hours: forms("{n} hour", "{n} hours"),
    minutes: forms("{n} minute", "{n} minutes"),
    seconds: forms("{n} second", "{n} seconds"),
  },
  /** Used for times under 10 seconds, shown with decimals. */
  secondsDecimal: "{n} seconds",
  separator: ", ",
  totalSeconds: "Total time in seconds",
  effectiveSpeed: "Effective speed",
  sizeInBits: "File size in megabits",
  notes: {
    bits: "Connection speeds are usually quoted in bits per second, file sizes in bytes. One byte is 8 bits, so 100 Mbit/s moves at most 12.5 MB each second.",
    prefixes: "kB, MB, GB and TB use powers of 1,000; KiB, MiB, GiB and TiB use powers of 1,024. Operating systems often label binary sizes with the decimal symbols.",
    real: "Real downloads are often slower than the advertised speed because of Wi-Fi, network congestion and the server's own limits.",
  },
};
export type DownloadTimeText = typeof text;
export default text;
