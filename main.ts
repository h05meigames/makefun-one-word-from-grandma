// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
//
// The task: exactly one word — the single word grandma would text about AI.
// "Contraption" is the word: it is what a grandma calls any unfamiliar
// machine she does not quite trust, warm and a little baffled, tied to
// machines rather than any subject, and fresher than the obvious "robot".
//
// Node 22, standard library only. Writes the word to /output/entry.txt
// with no trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const word = "Contraption";

// Gate (mirrors the competition gate): the entry must be UTF-8 text of
// 1 to 30 characters, not only white space. Count code points, not UTF-16
// units, so multi-byte characters are measured the way the gate counts.
// Defect fixed in this revision: the old guard only checked length, so a
// value such as "Hello World!" or "abc123" would have passed even though
// the bounty requires exactly ONE word of letters only. Reject any
// non-letter character (including internal whitespace, digits, hyphens
// and punctuation) before writing anything.
if (!/^[A-Za-z]+$/.test(word)) {
  throw new Error(
    `entry word must be a single word of letters only, got ${JSON.stringify(word)}`,
  );
}
if ([...word].length < 1 || [...word].length > 30 || word.trim().length === 0) {
  throw new Error(
    `entry word must be 1-30 characters, got ${[...word].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");

// Read-back check: the file on disk must be byte-identical to the word —
// exactly one word, no trailing newline, nothing appended.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== word) {
  throw new Error(
    `output mismatch: expected ${JSON.stringify(word)}, got ${JSON.stringify(written)}`,
  );
}
