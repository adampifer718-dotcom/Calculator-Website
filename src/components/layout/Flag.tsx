import type { Locale } from "@/i18n/config";

/*
 * Small inline SVG flags for the language selector. Emoji flags are not drawn
 * on Windows (it shows the two regional letters instead), so the flags are
 * vector shapes that look the same on every system. Decorative only: the
 * language name next to each flag is the accessible label.
 */

function UnitedStates() {
  const stripes = Array.from({ length: 7 }, (_, i) => <rect key={i} y={(i * 2 * 20) / 13} width="30" height={20 / 13} fill="#B22234" />);
  const stars = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      if (row % 2 === 1 && col === 5) continue;
      stars.push(<circle key={`${row}-${col}`} cx={1.1 + col * 2 + (row % 2) * 1} cy={1.15 + row * 2} r="0.42" fill="#fff" />);
    }
  }
  return (
    <>
      <rect width="30" height="20" fill="#fff" />
      {stripes}
      <rect width="12" height={(7 * 20) / 13} fill="#3C3B6E" />
      {stars}
    </>
  );
}

function Pakistan() {
  return (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect x="7.5" width="22.5" height="20" fill="#01411C" />
      <circle cx="19.5" cy="10" r="5.6" fill="#fff" />
      <circle cx="21" cy="8.8" r="5" fill="#01411C" />
      <path d="M22.6 6.1l.62 1.5 1.6.1-1.24 1.03.4 1.57-1.38-.87-1.37.87.39-1.57-1.24-1.03 1.6-.1z" fill="#fff" />
    </>
  );
}

function Spain() {
  return (
    <>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
      <rect x="7" y="7.5" width="3.4" height="5" rx="0.8" fill="#AA151B" opacity="0.85" />
    </>
  );
}

function France() {
  return (
    <>
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </>
  );
}

function Germany() {
  return (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </>
  );
}

/** Saudi Arabia: green field with a stylised white inscription line and sword. */
function SaudiArabia() {
  return (
    <>
      <rect width="30" height="20" fill="#006C35" />
      <path
        d="M8 8.2c.6-.9 1.2.5 1.9-.3s.9.6 1.7-.2.9.7 1.8-.1.8.6 1.7-.2.9.7 1.8-.1.8.6 1.7-.2.9.6 1.6-.1.9.4 1.5-.3"
        fill="none"
        stroke="#fff"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path d="M9 13.2h11.2l1.6-.6-1.6-.6H9z" fill="#fff" />
      <rect x="8.1" y="12.3" width="1" height="1.8" rx="0.3" fill="#fff" />
    </>
  );
}

function Italy() {
  return (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </>
  );
}

/** Portugal: green and red field (2:3) with a simplified armillary sphere and shield on the boundary. */
function Portugal() {
  return (
    <>
      <rect width="12" height="20" fill="#046A38" />
      <rect x="12" width="18" height="20" fill="#DA291C" />
      <circle cx="12" cy="10" r="4.6" fill="none" stroke="#FFE000" strokeWidth="1.2" />
      <path d="M7.6 10h8.8M12 5.6v8.8" stroke="#FFE000" strokeWidth="0.7" />
      <path d="M9.9 7.6h4.2v3.4a2.1 2.1 0 0 1-4.2 0z" fill="#fff" stroke="#DA291C" strokeWidth="0.6" />
      <path d="M11.3 8.6h1.4v1.9h-1.4z" fill="#003399" />
    </>
  );
}

function Netherlands() {
  return (
    <>
      <rect width="30" height="6.67" fill="#AE1C28" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#21468B" />
    </>
  );
}

const FLAGS: Record<Locale, () => React.ReactElement> = {
  en: UnitedStates,
  ur: Pakistan,
  es: Spain,
  fr: France,
  de: Germany,
  ar: SaudiArabia,
  it: Italy,
  pt: Portugal,
  nl: Netherlands,
};

export function Flag({ locale, size = "md" }: { locale: Locale; size?: "sm" | "md" }) {
  const Shape = FLAGS[locale];
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 overflow-hidden rounded-[4px] shadow-[0_0_0_1px_rgb(30_36_51/0.12)] ${size === "sm" ? "h-[15px] w-[22px]" : "h-5 w-[30px]"}`}
    >
      <svg viewBox="0 0 30 20" preserveAspectRatio="none" className="block size-full">
        <Shape />
      </svg>
    </span>
  );
}
