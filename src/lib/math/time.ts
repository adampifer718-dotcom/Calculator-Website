/** Formats seconds as "m:ss" or "h:mm:ss", rounding to the nearest second first. */
export function formatClock(totalSeconds: number): string {
  const rounded = Math.round(totalSeconds);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
}

/** Formats hours as "2 h 30 min", rounding to the nearest minute. */
export function formatHoursText(hours: number): string {
  const minutes = Math.round(hours * 60);
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h.toLocaleString("en-US")} h` : `${h.toLocaleString("en-US")} h ${m} min`;
}
