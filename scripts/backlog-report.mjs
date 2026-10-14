// Writes docs/calculator-backlog.md from the typed backlog.
import { writeFileSync } from "node:fs";
import { renderBacklogMarkdown } from "../src/calculators/backlog-report.ts";

const target = new URL("../docs/calculator-backlog.md", import.meta.url);
writeFileSync(target, renderBacklogMarkdown() + "\n");
console.log(`Wrote ${target.pathname}`);
