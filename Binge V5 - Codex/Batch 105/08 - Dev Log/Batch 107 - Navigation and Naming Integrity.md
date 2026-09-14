---
title: "Batch 107 — Navigation and Naming Integrity"
type: dev-log
batch: 107
status: complete
previous_batch: 106
---

# Batch 107 — Navigation and Naming Integrity

## Scope

Repair the technical navigation index and apply verified naming/classification corrections left after Batch 106.

## Changes

- Renamed `99 - Later - Undefined` to `99 - Inbox`.
- Renamed the residual Supernatural: The Animation index filename to match its canonical folder.
- Normalized the explicitly duplicated-spacing `Rick and Morty - The Anime` folder, index, metadata, and links.
- Renamed the Son of a Donkey index to its canonical production title and corrected its category from Documentary to TV.
- Renamed the documentary folder to `Trainwreck - Poop Cruise`, with frontmatter and source title updated to **Trainwreck: Poop Cruise**.
- Reclassified `Trainwreck Collection` as a franchise collection and moved it under `04 - Franchises`.
- Rebuilt the stale `Vault Navigation.md` entries for current TV, movie, documentary, and franchise paths; removed mojibake links.
- Preserved all media notes, source records, and historical batch records.

## Validation

- Source copy remains intact in `Binge V4`.
- Batch 105 contains 3,390 files after the changes, including this log and the reusable validator.
- No file was deleted; changes were moves, renames, and metadata/navigation repairs.
- A link-integrity scan follows this batch.
- The reusable validator reports legacy unresolved path-link candidates as warnings because this vault mixes folder-relative and vault-root link conventions; the repaired navigation index itself validates with zero broken links.

## Known follow-ups

- Normalize remaining intentional double-space title conventions only after a complete alias/frontmatter audit.
- Add a repeatable pre-package validator for links, filenames, frontmatter, and structural invariants.
