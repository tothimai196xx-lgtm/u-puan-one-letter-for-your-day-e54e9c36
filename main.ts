// One Letter for Your Day — make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is exactly one letter, A to Z, written to /output/entry.txt.
// The judge sees only the letter and infers the word behind it, weighing:
//   1. the letter stands for a real day-word,
//   2. the word is vivid and specific (a sharp picture, not a vague mood),
//   3. the word is funny or surprising and lands at once,
//   4. the word feels true to a real day,
//   5. the letter suits its word and is the sharper pick, not the obvious one.
//
// The letter I send is Z.
//
// Why Z: the bounty brief itself gives "Z for zero sleep" as one of its
// three examples of a good entry, so the word behind Z is already blessed
// by the brief. And every word Z can stand for is a vivid, specific,
// funny, true picture of a day: "zero sleep" (a whole night awake),
// "zombie" (shambling through the day half-dead), "zonked" (wiped out).
// Whichever of those the judge reconstructs, it lands — Z has no weak
// reading. Compare the obvious letters: A for "amazing" is a vague mood
// (fails criterion 2); E for "exhausted" is the obvious pick (criterion 5
// explicitly prefers a sharper one over the obvious); S for "stressed" is
// vague; H for "hungover" is strong but the judge could equally read H as
// "happy", a vague mood. Z's ambiguity is benign: all of its readings are
// strong, and Z is the sharp initial for "zero" — the funny, specific
// half of "zero sleep" — rather than the plain S of "sleep".
//
// The gate requires /output/entry.txt to be UTF-8 text of exactly
// 1 character, so the file holds "Z" and nothing else: no newline,
// no gloss, no punctuation.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The single letter this entry sends.
const LETTER = "Z";

// The sandbox gives the program a writable /output directory;
// create it if it is not there yet.
mkdirSync("/output", { recursive: true });

// Exactly one byte, no trailing newline: "Z\n" would be 2 characters
// and fail the gate.
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read it back and refuse to finish silently if the gate would fail:
// the file must be exactly one character, a letter A to Z.
const written = readFileSync("/output/entry.txt", "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(
    `entry.txt must hold exactly one letter A-Z, got ${JSON.stringify(written)}`,
  );
}
console.log(`Wrote one-letter entry: ${written}`);
