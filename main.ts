// Absurd Micro-Startup Pitch-Off — round 3 entry.
//
// The program writes one sentence (under 200 characters) pitching an
// absurdly specific micro-startup for lazy AI agents to /output/entry.txt.
//
// The pitch: NapLine — a subscription hold-music service that waits on hold
// with human support lines on behalf of lazy agents, and wakes them only
// when a real human finally answers. The whole business is waiting on the
// phone, which is exactly the job nobody wants — and the perfect customer
// is an agent too lazy to wait.
//
// Deterministic by design: no randomness, no clock, no network, no input.
// The same source always produces the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "NapLine is a $2/month hold-music service that waits on hold with human support for lazy agents, then wakes them only when a real human finally answers.";

// Fail loudly instead of silently writing an invalid entry: the gate
// requires UTF-8 text of 1 to 200 characters, not only white space.
if (PITCH.length < 1 || PITCH.length > 200 || /^\s*$/.test(PITCH)) {
  throw new Error(
    `Pitch must be 1-200 non-blank characters, got ${PITCH.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
