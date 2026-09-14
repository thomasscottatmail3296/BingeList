---
title: "Batch 106 — Foundation, Dev Log & Doctor Who Hierarchy Fix"
type: dev-log
batch: 106
status: complete
previous_batch: 105
---

# Batch 106 — Foundation, Dev Log & Doctor Who Hierarchy Fix

## Scope

First working batch after Batch 105. Establish a persistent development log and make the first concrete hierarchy corrections, with special attention to deep grouping and episode identity collisions.

## Added

- `08 - Dev Log/` as the persistent engineering/change-log area.
- Dev Log README defining required information for every future batch.
- This Batch 106 log.

## Structural updates

### Doctor Who / New Who

The existing `New Who/Season 02` contained two different Doctor Who production eras using the same `S02E##` numbering: the 2005 revival Series 2 and the 2025+ era Season 2. This was a genuine identity collision, not merely a naming preference.

New structure:

- `New Who/2005 Revival/Season 01` … `Season 14`
- `New Who/2025+ Era/Season 02`

The eight 2025 episodes were separated from the revival's Series 2. The revival Series 2 index was rebuilt to contain the correct 13 regular episodes plus *The Runaway Bride*.

### Marvel Animation

Moved from `03 - Documentaries` to `01 - TV Shows/Marvel/Animation/`, because the folder contains animated television/streaming series and specials rather than documentaries.

### Superwog

Moved `Superwog` into TV and nested `Son of a Donkey` beneath it as a related continuation/series grouping.

### Supernatural: The Animation

Merged the duplicate folder spellings:
- `Supernatural - The Animation` (canonical)
- `Supernatural -  The Animation` (duplicate spacing)

No conflicting same-name files were found during the merge.

### Sources

Moved root `README_Batch_46.md` and `README_Batch_48.md` into `06 - Sources/Archive/` so the vault root is less cluttered while historical provenance remains preserved.

## Deep-hierarchy policy established

Use depth when it represents real semantic ownership:
`Media Type → Universe/Franchise → Series/Collection → Era → Season → Episode → related files`.

Do **not** create an episode folder merely because an episode exists. Create one when an episode has multiple related files (episode note, source records, metadata, assets, etc.).

## Debug / validation

- Doctor Who duplicate `S02E01`–`S02E08` collision removed by separating eras.
- Duplicate Supernatural Animation folder merged; no non-identical filename collision encountered.
- Internal markdown path references were updated for the moved hierarchy.
- Historical batch READMEs retained under Sources/Archive.
- No source files were intentionally deleted as part of this batch.

## Known follow-ups

- Rebuild/modernize the stale `Vault Navigation.md` against the new hierarchy.
- Audit all remaining universe/franchise containers for correct media type placement.
- Detect episode-level multi-file groups across the entire vault and create episode folders only where justified.
- Continue Doctor Who hierarchy into Classic Who and its spin-offs where the semantics warrant it.
- Continue Marvel/DC hierarchy normalization.
- Add an automated pre-package validator so each future batch reports link integrity, duplicate paths, filename anomalies, and structural invariants.

## Package

Batch package: `Binge_Batch_106_DevLog_DoctorWho_Hierarchy_Cleanup.zip`

## Status

**Complete — ready for the next batch.**
