import Form from "next/form";

type Size = "sm" | "lg" | "xl";

const INPUT: Record<Size, string> = {
  sm: "h-9 rounded-lg pr-3 pl-9 text-sm",
  lg: "h-13 rounded-lg pr-28 pl-11 text-base shadow-sm",
  xl: "h-16 rounded-full pr-20 pl-6 text-base shadow-md sm:text-lg",
};

function SearchIcon({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 3.47 9.77l3.13 3.13a.75.75 0 1 0 1.06-1.06l-3.13-3.13A5.5 5.5 0 0 0 9 3.5ZM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
    </svg>
  );
}

/** Submits to the directory, which filters by the `q` parameter. */
export function HeaderSearch({ id, label, size = "sm" }: { id: string; label: string; size?: Size }) {
  return (
    <Form action="/calculators" role="search" aria-label={label} className="relative">
      <label htmlFor={id} className="sr-only">
        Search calculators
      </label>
      {size !== "xl" && (
        <SearchIcon className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-neutral-400 ${size === "lg" ? "left-4 size-5" : "left-3 size-4"}`} />
      )}
      <input
        id={id}
        name="q"
        type="search"
        autoComplete="off"
        placeholder={size === "lg" ? "Search calculators, e.g. salary or percent" : "Search calculators…"}
        className={`block w-full border border-neutral-300 bg-white text-ink-900 placeholder:text-neutral-500 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 focus:outline-none ${INPUT[size]}`}
      />
      {size === "lg" && (
        <button
          type="submit"
          className="focus-ring absolute top-1.5 right-1.5 bottom-1.5 rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Search
        </button>
      )}
      {size === "xl" && (
        <button
          type="submit"
          className="focus-ring absolute top-2 right-2 bottom-2 flex aspect-square items-center justify-center rounded-full bg-brand-600 text-white hover:bg-brand-700"
        >
          <span className="sr-only">Search</span>
          <SearchIcon className="size-6" />
        </button>
      )}
    </Form>
  );
}
