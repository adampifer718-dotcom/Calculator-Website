import { searchEntries } from "@/calculators/registry";

/**
 * Static search index for autocomplete, prerendered at build time. Loaded
 * on demand when a search box is focused, so pages don't carry it inline.
 */
export function GET() {
  return Response.json(searchEntries());
}
