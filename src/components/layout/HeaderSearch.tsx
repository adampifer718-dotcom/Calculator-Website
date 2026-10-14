import Form from "next/form";

/** Submits to the directory, which filters by the `q` parameter. */
export function HeaderSearch({ id, label, size = "sm" }: { id: string; label: string; size?: "sm" | "lg" }) {
  const large = size === "lg";
  return (
    <Form action="/calculators" role="search" aria-label={label} className="relative">
      <label htmlFor={id} className="sr-only">
        Search calculators
      </label>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400 ${large ? "left-4 size-5" : "left-3 size-4"}`}
      >
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 3.47 9.77l3.13 3.13a.75.75 0 1 0 1.06-1.06l-3.13-3.13A5.5 5.5 0 0 0 9 3.5ZM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
      </svg>
      <input
        id={id}
        name="q"
        type="search"
        autoComplete="off"
        placeholder={large ? "Search calculators, e.g. salary or percent" : "Search calculators"}
        className={`block w-full rounded-lg border border-slate-300 bg-white text-navy-900 placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none ${
          large ? "h-13 pr-28 pl-11 text-base shadow-sm" : "h-9 pr-3 pl-9 text-sm"
        }`}
      />
      {large && (
        <button
          type="submit"
          className="focus-ring absolute top-1.5 right-1.5 bottom-1.5 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Search
        </button>
      )}
    </Form>
  );
}
