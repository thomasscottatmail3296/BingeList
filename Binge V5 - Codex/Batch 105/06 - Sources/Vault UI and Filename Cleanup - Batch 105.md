---
title: "Vault UI and Filename Cleanup — Batch 105"
type: report
status: "completed"
---

# ◇ VAULT UI AND FILENAME CLEANUP — BATCH 105

## Filename repair
- Source archive: Binge.zip
- Mojibake filenames detected: 157
- Filenames repaired from their own YAML `title` values: 157
- Collisions requiring manual review: 0

## Citation artifact cleanup
- Markdown/text files changed: 3
- Literal citation/url marker occurrences removed: 8

## Nerd Font / style layer
- Added `.obsidian/snippets/Binge-Vault-Nerd-Glyph-Fallback.css`
- Updated `.obsidian/styles.css` for glyph fallback, table-safe logos and collapsible details.
- Existing bundled Nerd Font files were reused; no duplicate font assets added.

## Provider logos
- Provider registry table converted to table-safe HTML `<img>` embeds.
- Inline/table logos capped at 32×32; shared assets retain the 128×128 maximum.

## Dropdown / status layer
- Status plugin now tolerates UTF-8 BOM, CRLF and missing frontmatter.
- Added a visible status-bar dropdown using the canonical three values:
  1. `Not Watched`
  2. `Watched`
  3. `In Progress of Watching`
- Existing command/ribbon control remains available.

## Validation
- Archive entry count: 3580
- ZIP integrity: testzip passed
- Duplicate archive entries: 0
- Remaining mojibake filename markers: 0
