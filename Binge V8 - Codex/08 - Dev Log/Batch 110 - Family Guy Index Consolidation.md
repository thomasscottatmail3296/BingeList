---
title: "Batch 110 — Family Guy Index Consolidation"
type: dev-log
batch: 110
status: complete
previous_batch: 109
---

# Batch 110 — Family Guy Index Consolidation

## Scope

Resolve the duplicate Family Guy index without deleting historical information.

## Finding

`01 - TV Shows/Family Guy/Family Guy.md` is the canonical structured series index: it links seasons, carries series metadata, and is referenced by episode notes. The root-level `01 - TV Shows/Family Guy.md` is a legacy watch-tracking stub with overlapping title identity and no unique relationships.

## Change

Moved the legacy stub to `06 - Sources/Archive/Family Guy Legacy Index.md`. The canonical structured index remains in the Family Guy media folder, and no content was deleted.

## Validation

- Validator errors: 0.
- Validator warnings: 0.
- Family Guy now has one active media index and one preserved archived legacy record.
