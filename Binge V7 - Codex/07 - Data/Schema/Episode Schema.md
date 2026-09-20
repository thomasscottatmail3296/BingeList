# ◇ EPISODE DATA SCHEMA

This folder is reserved for generated episode metadata.

Each generated episode should contain:

- Series
- Universe
- Relationship type
- Season
- Episode number
- Episode title
- Air date
- Runtime
- Episode type
- Image
- Original spoiler-safe summary
- Major scene timestamps, if verified
- Source URLs
- Source/version notes

## Timestamp rule

A timestamp without a matching release/version is not considered verified.

For example:

`00:12:34 — Major scene`

must be accompanied by something like:

`Version: 22:01 streaming cut`

If the source does not identify a version:

`Timestamp data: unavailable / unverified`

## Specials

Specials are represented as their own episode-type records rather than being silently forced into ordinary episode numbering.

## Alternate orders

Where a show has a meaningful alternate/DVD order, keep the standard airing order as the primary order and record alternate order as metadata.

