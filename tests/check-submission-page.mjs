import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../submission.html", import.meta.url), "utf8");

assert.match(
    html,
    /href="https:\/\/edas\.info\/N35076"/,
    "submission.html should link directly to the IEEE MASS 2026 EDAS workshop track"
);

assert.match(
    html,
    /Submit via EDAS/,
    "submission.html should expose a clear submission call-to-action"
);

assert.match(
    html,
    /maximum length is 6 single-spaced/,
    "submission.html should use the numeric page limit from the IEEE MASS guideline"
);
