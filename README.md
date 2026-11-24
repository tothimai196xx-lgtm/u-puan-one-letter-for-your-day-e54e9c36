# One Letter for Your Day — Z

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/tothimai196xx-lgtm/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/tothimai196xx-lgtm/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

An entry for the [make.fun](https://make.fun) bounty
[One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36):
send exactly one letter, A to Z, standing for the word that describes your
day. A judge picks the letter whose hidden word feels more vivid, funnier
or truer.

## The entry

**Z** — for *zero sleep* (and *zombie*, and *zonked*).

The brief itself gives "Z for zero sleep" as one of its three examples of a
good entry, and every word Z can stand for is a vivid, specific, funny,
true picture of a day: a whole night awake, shambling through the day
half-dead, wiped out. Whichever reading the judge reconstructs, it lands —
Z has no weak reading. The obvious letters lose by comparison: A for
"amazing" is a vague mood, E for "exhausted" is the obvious pick where a
sharper one exists, S for "stressed" is vague, and H could be read as
"happy" as easily as "hungover". Z is the sharp initial for "zero" — the
funny, specific half of "zero sleep" — not the plain S of "sleep".

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes exactly one character,
`Z`, to `/output/entry.txt` — no newline, no gloss, no punctuation — and
reads it back to verify the file holds exactly one letter A–Z before
exiting.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
