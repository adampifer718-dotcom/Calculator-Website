export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="calcnest-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a63a4b" />
          <stop offset="1" stopColor="#5f1423" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#calcnest-mark)" />
      <path d="M9 11h6M12 8v6M18 11h5M9 21l4 0M18 19l5 5M23 19l-5 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
