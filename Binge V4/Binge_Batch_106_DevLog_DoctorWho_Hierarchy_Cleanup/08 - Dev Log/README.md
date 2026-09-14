---
title: "Binge Vault — Development Log"
type: system
---

# Binge Vault — Development Log

This folder is the persistent engineering/change history for the vault. Every rebuild or cleanup batch gets a numbered log.

## Batch policy

Each batch log records:
- scope and goals
- structural changes and moves
- metadata/schema changes
- fixes and bug/debug results
- validation/audit results
- added features
- known issues
- next plans
- archive/package name

## Batch numbering

The source vault was last reported as **Batch 105**. The first new package in this working line is therefore **Batch 106**.

## Design rule

Prefer deep semantic hierarchy where it improves clarity:
`Media Type → Universe/Franchise → Series/Collection → Era → Season/Series → Episode → related files`

Episode folders are created when an episode has multiple related files; a single episode note can remain directly inside its season when no extra grouping is needed.
