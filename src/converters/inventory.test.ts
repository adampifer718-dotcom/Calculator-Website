import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { expect, it } from "vitest";
import { converterInventory } from "./inventory";

const FILE = path.join(process.cwd(), "docs/unit-converters.md");

it("docs/unit-converters.md is up to date (npm run converters:report regenerates it)", () => {
  const report = converterInventory();
  if (process.env.UPDATE_REPORT) writeFileSync(FILE, report);
  expect(readFileSync(FILE, "utf8")).toBe(report);
});
