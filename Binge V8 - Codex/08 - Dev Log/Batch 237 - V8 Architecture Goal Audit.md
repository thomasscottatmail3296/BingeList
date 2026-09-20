# Batch 237 — V8 Architecture Goal Audit

## Scope / Goals
- Re-anchor active V8 work to the older continuation prompt's **main architectural goal**, without treating its old batch/pick-off state as authoritative.
- Treat the vault as a functioning Obsidian database/library rather than a generic Markdown folder.
- Preserve the existing high-level architecture while improving integrity, navigation, maintainability, and relationship structure.
- Re-inspect the actual V8 tree before applying any of the older prompt's proposed cleanups.

## Guiding Architecture
The verified V8 direction is:
- Folders provide structural media organization.
- Markdown links provide relationships.
- Frontmatter provides metadata.
- Tags provide broad classification/status.
- Franchise pages provide universe/collection relationships.
- Physical TV/movie/documentary separation remains useful.
- Universe relationships should not be replaced by indiscriminate physical nesting.
- Episode folders are now the V8 convention: every existing SxxExx episode note has its own folder, ready for later file/content enrichment.

## BEFORE — V8 Baseline
```text
Binge V8 - Codex/
├── 00 - Directory/
├── 01 - TV Shows/
├── 02 - Movies/
├── 03 - Documentaries/
├── 04 - Franchises/
├── 05 - Templates/
├── 06 - Sources/
├── 07 - Data/
├── 08 - Dev Log/
├── 99 - Inbox/
├── fonts/
├── V6_BUILD_MANIFEST.json
├── summaries.txt
└── update.py
```

The current V8 tree contains 3,562 files and 3,533 Markdown files before this Dev Log entry.

## Actual V8 Audit Findings

### Confirmed as already addressed in V8
- The active working copy is correctly isolated under `Binge V8 - Codex`; V7 remains the immutable source.
- Every one of the 2,606 existing SxxExx episode notes is now inside a dedicated episode folder.
- The old continuation prompt's `99 - Later - Undefined` concern is already reflected in V8 as `99 - Inbox`.
- The old documentary misclassification candidates `Marvel Animation`, `Superwog`, and `Superwog - Son of a Donkey` are no longer present under V8's `03 - Documentaries`.
- The old Supernatural duplicate-folder hypothesis is no longer present in the V8 tree: only one `Supernatural - The Animation` folder exists.
- `Family Guy.md` exists canonically inside `01 - TV Shows/Family Guy/`; there is no separate root-level `01 - TV Shows/Family Guy.md`.
- Trainwreck documentary naming is already represented as `Trainwreck - Poop Cruise`, consistent with the Trainwreck collection architecture.
- Recovered franchise hubs for Marvel, DC, Avatar, Mario, Scream, The Incredibles, How to Train Your Dragon, Star Trek, Toy Story, and The Simpsons are already represented in the V8 franchise layer.

### Remaining architecture/integrity work identified
1. **Navigation freshness:** `Vault Navigation.md` is a compact technical index but still contains legacy/stale entries and duplicated Supernatural presentation. It should be rebuilt against the actual V8 tree rather than manually patched piecemeal.
2. **Encoding/name audit:** V8 still contains a bounded set of visibly corrupted filename encodings, including `SPY ├ù FAMILY` and several `ΓÇ...` / `├...` forms. These must be handled as a dependency-aware rename project, not blind global replacements.
3. **Path-reference audit after episode migration:** the 2,606 episode notes were moved without changing their contents. Any explicit path links, generated indexes, scripts, or frontmatter references that depended on the pre-V8 paths need a targeted audit.
4. **Source/data architecture:** `06 - Sources` and `07 - Data` should be evaluated for logical substructure, but historical source records must remain preserved.
5. **Obsidian configuration:** `.obsidian`, templates, scripts, and generated navigation must be treated as dependencies of the vault.
6. **Universe architecture:** existing Universe Map entries marked as `hub not yet materialized` remain intentionally unmaterialized unless V8 evidence supports creating them.

## Proposed AFTER Direction
```text
Binge V8 - Codex/
├── 00 - Directory/        ← human dashboard + technical navigation + universe maps
├── 01 - TV Shows/         ← series → season → episode → episode files
├── 02 - Movies/           ← movie hierarchy
├── 03 - Documentaries/    ← verified documentary media
├── 04 - Franchises/       ← universe / franchise / collection relationships
├── 05 - Templates/        ← canonical templates
├── 06 - Sources/          ← preserved source and provider records
├── 07 - Data/             ← schema/system/generated data as justified
├── 08 - Dev Log/          ← persistent batch history
├── 99 - Inbox/            ← unresolved/backlog/source watchlists
└── fonts/                 ← retained until asset dependency audit permits relocation
```

This is a direction, not a command to flatten or blindly move existing material.

## Dependency / Safety Gate
No mass renames or large structural moves were performed in this audit. The visible encoding anomalies are not being renamed until incoming links, hard-coded paths, scripts, frontmatter, and Obsidian configuration can be checked.

## Validation
- V8 root exists.
- V7 remains untouched.
- Episode-folder migration remains intact.
- No speculative universe hubs were added.
- No media content was deleted.
- No legacy historical source records were deleted.
- Existing manifest baseline before this entry: 3,562 files / 3,533 Markdown / 0 empty Markdown / 0 paths over 240 characters / 0 double-space paths.

## Added Features
- This batch establishes the V8 architecture charter derived from the older continuation prompt's main goal.
- It separates already-resolved legacy findings from still-open V8 integrity work so future batches do not repeat obsolete cleanup.

## Known Issues
- Global wikilink metrics remain inherited audit values until a post-migration path-aware scan is completed.
- Encoding anomalies remain unresolved pending dependency verification.
- Technical navigation still needs a tree-driven rebuild.

## Next Plans
1. Perform the V8 path-aware wikilink/reference audit caused by the episode-folder migration.
2. Rebuild technical Vault Navigation from verified V8 paths.
3. Then tackle dependency-safe filename/encoding normalization.
4. Continue with Sources/Data architecture only after references are understood.
5. Leave episode-folder enrichment until the structural/integrity passes are complete.

## Archive / Package
`Binge V8 - Codex` — Batch 237
