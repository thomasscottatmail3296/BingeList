---
title: "Batch 109 — Doctor Who Link Integrity"
type: dev-log
batch: 109
status: complete
previous_batch: 108
---

# Batch 109 — Doctor Who Link Integrity

## Scope

Resolve the remaining path-link warnings after filename normalization, with special attention to the Doctor Who era split.

## Changes

- Repaired the 2005 revival Series 2 index so it points to its 13 regular episodes plus *The Runaway Bride*.
- Preserved the separate 2025+ Era Season 02 index and episode identity space.
- Added the missing New Who Season 00 index for the 2023 specials.
- Corrected Doctor Who episode links whose on-disk filenames use safe underscore substitutions for punctuation.
- Corrected Classic Who, Rick and Morty, Supernatural: The Animation, and The Winchesters folder-depth links.
- Converted non-media suggestions and universe labels from broken wikilinks to plain text where no note exists.

## Validation

- 3,365 Markdown files scanned.
- Validator errors: 0.
- Validator warnings: 0.
- Remaining repeated-space filename paths: 0.
- Mojibake scan: clean.
- Source V4 copy remains unchanged.
