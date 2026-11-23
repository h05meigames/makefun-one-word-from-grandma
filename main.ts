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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
