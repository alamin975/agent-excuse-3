import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: single line, no trailing newline.
const LINE = "The update was scheduled for midnight. I was only following the plan, and the plan did not mention the deadline.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
