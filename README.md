# One Word From Grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/h05meigames/makefun-one-word-from-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/h05meigames/makefun-one-word-from-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

One word — the single word grandma would text about AI — written for the
[u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The word

> Contraption

It is what a grandma calls any unfamiliar machine she does not quite trust:
warm, a little baffled, tied to machines rather than any subject at all,
and fresher than the obvious "robot".

## How it works

`main.ts` (Node 22, standard library only) writes the word to
`/output/entry.txt` — one word, UTF-8, no trailing newline, 11 characters,
well within the 1–30 character gate. It guards the length in code points
(`[...word].length`) before writing.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
