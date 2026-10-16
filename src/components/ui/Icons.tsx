/** Small shared icons. Directional icons mirror automatically on right-to-left pages. */
export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`shrink-0 rtl:-scale-x-100 ${className}`}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.64l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`shrink-0 ${className}`}>
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path d="M6 10.4l2.6 2.6L14.2 7.4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`shrink-0 ${className}`}>
      <path d="M10 1.8l2.47 5.1 5.6.78-4.07 3.93.99 5.57L10 14.53 5.01 17.18 6 11.61 1.93 7.68l5.6-.78L10 1.8z" />
    </svg>
  );
}
