# Batch 236 — V8 Seed and Episode Folder Migration

## Scope / Goals
- Create the new active working version `Binge V8 - Codex` as a copy of the authoritative V7 state.
- Keep V7 immutable as the reference/source version.
- Establish the new episode-folder convention across the existing episode-note population.

## Structural Changes
- Added repository-root folder `Binge V8 - Codex`.
- Copied the V7 directory structure and existing content by reusing the existing Git tree/blob objects.
- Moved all 2,606 existing `SxxExx` episode Markdown notes under `01 - TV Shows` into a dedicated folder named after each episode.
- Episode notes retain their original filenames and blob contents.
- No episode metadata was invented and no media was added.

## Metadata / Schema Changes
- V8 manifest records V7 as the source version.
- `latest_batch` is now 236.
- Integrity counts are carried forward from the verified V7 baseline.
- Episode-folder structure is now the V8 working convention.

## Fixes / Debug Results
- V7 source tree was inspected from commit `7b3c51d3c74cf882bfc7a29e5d057dcd59cc1dc3`.
- The V7 tree contained 3,561 files, including 2,606 episode Markdown notes matching the existing SxxExx convention.
- V5, V6, and V7 source content was not modified.

## Validation / Audit Results
- V8 copy retains the V7 file population.
- Episode migration moves existing blobs rather than rewriting their contents.
- Episode folders are represented by their contained episode notes.
- Empty Markdown files remain 0.
- Double-space filename/path baseline remains 0.
- Paths over 240 characters remain 0 at the starting V8 migration audit; final recursive validation is performed before commit.

## Added Features
- Dedicated folder for every existing SxxExx episode note, ready for later enrichment with related files.

## Known Issues
- Existing wikilink statistics are carried forward from V7 and require a later targeted audit after path migration.
- No speculative universe hubs or new media were materialized.
- Additional episode-level enrichment is intentionally deferred until the structural/integrity passes are complete.

## Next Plans
- Validate V8 navigation and path references after the episode-folder migration.
- Continue the next evidence-backed V8 integrity block.
- Later populate episode folders with related files/content once the structural passes are complete.

## Archive / Package
`Binge V8 - Codex` — Batch 236
