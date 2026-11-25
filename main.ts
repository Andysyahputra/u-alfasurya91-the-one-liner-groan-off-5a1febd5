// The One-Liner Groan-Off — writes one original one-line dad joke.
// Setup: a dad tells his kids the fridge light stays on because it is
// scared of the dark. Twist: the kids take him literally and leave the
// door open to comfort it — the dad-logic defeats itself.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my kids the fridge light stays on because it's scared of the dark, so now they leave the door open to comfort it.";

const TEXT = JOKE + "\n";

// Gate guard: the entry must be UTF-8 text of 1-140 characters, a single
// line, and not only whitespace. Refuse to write anything invalid rather
// than submitting a gate-failing entry.
const lines = TEXT.split("\n");
if (lines.length !== 2 || lines[1] !== "") {
  throw new Error("entry must be exactly one line");
}
if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`entry length ${TEXT.length} is outside the 1-140 gate`);
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
