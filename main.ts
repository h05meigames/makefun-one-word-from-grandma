// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
//
// The task: exactly one word — the single word grandma would text about AI.
// "Contraption" is the word: it is what a grandma calls any unfamiliar
// machine she does not quite trust, warm and a little baffled, tied to
// machines rather than any subject, and fresher than the obvious "robot".
//
// Node 22, standard library only. Writes the word to /output/entry.txt
// with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Contraption";

// Gate (mirrors the competition gate): the entry must be UTF-8 text of
// 1 to 30 characters, not only white space. Count code points, not UTF-16
// units, so multi-byte characters are measured the way the gate counts.
if ([...word].length < 1 || [...word].length > 30 || word.trim().length === 0) {
  throw new Error(
    `entry word must be 1-30 characters, got ${[...word].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
