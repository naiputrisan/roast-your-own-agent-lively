import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my agent what time it was. It called twelve tools, read three docs, and answered: probably Tuesday.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
