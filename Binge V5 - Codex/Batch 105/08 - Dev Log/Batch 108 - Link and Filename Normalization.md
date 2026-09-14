---
title: "Batch 108 — Link and Filename Normalization"
type: dev-log
batch: 108
status: complete
previous_batch: 107
---

# Batch 108 — Link and Filename Normalization

## Scope

Reduce legacy path-link ambiguity and finish the explicitly identified double-space filename cleanup.

## Changes

- Repaired 212 uniquely resolvable legacy path-link occurrences across 11 Markdown files.
- Left ambiguous links unchanged rather than guessing between duplicate targets.
- Normalized all remaining filenames containing repeated spaces around hyphens, including documentary, Trainwreck, Marvel-special, Minecraft, and inbox titles.
- Updated the Trainwreck collection member links after the documentary renames.

## Validation

- 3,362 Markdown files scanned.
- Validator errors: 0.
- Remaining warnings: 136 legacy/ambiguous path-link candidates requiring semantic review, not automatic rewriting.
- Remaining double-space path names: 0.
- Source V4 copy remains unchanged.

## Next priority

Audit the remaining 136 warnings by family (Doctor Who, episode-season links, and franchise references) and repair only links whose intended target is unambiguous.
