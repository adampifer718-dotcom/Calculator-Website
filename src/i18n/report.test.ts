import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { expect, it } from "vitest";
import { translationReport } from "./report";

const FILE = path.join(process.cwd(), "docs/translation-report.md");

it("docs/translation-report.md is up to date (npm run i18n:report regenerates it)", () => {
  const report = translationReport();
  if (process.env.UPDATE_REPORT) writeFileSync(FILE, report);
  expect(readFileSync(FILE, "utf8")).toBe(report);
});
