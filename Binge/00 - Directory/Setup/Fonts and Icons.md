---
title: "◇ SETUP — FONTS & ICONS"
---

# ◇ SETUP — FONTS & ICONS

This vault uses monochrome Unicode and Nerd Font glyphs. It remains readable without Nerd Fonts, but JetBrains Mono Nerd Font gives the intended appearance.

## Included fonts

The vault includes these supplied files in `fonts/`:

- `JetBrainsMonoNerdFont-Bold.ttf`
- `JetBrainsMonoNerdFont-BoldItalic.ttf`
- `JetBrainsMonoNerdFont-ExtraBold.ttf`

## Android — recommended method

1. Open **Obsidian Settings**.
2. Open **Community Plugins**.
3. Install **Custom Font Loader**.
4. Enable it.
5. Load the included JetBrains Mono Nerd Font files from the vault's `fonts/` directory.
6. Apply the font where appropriate.
7. Restart Obsidian if necessary.

No system-wide Android font modification is required for this vault.

## Windows

1. Open the `.ttf` files from `fonts/`.
2. Choose **Install** or **Install for all users**.
3. Restart Obsidian.
4. Select the installed font in Obsidian's appearance/font settings if desired.

## Linux

Copy the supplied fonts to `~/.local/share/fonts/`, then run:

```bash
fc-cache -fv
```

Restart Obsidian.

## macOS

Open the `.ttf` files with Font Book, install them, then restart Obsidian.

## Glyph fallback

The vault deliberately uses simple monochrome Unicode alongside Nerd Font glyphs. If a glyph is unavailable it may appear as `□`; the surrounding text and links remain usable.

## Glyph test

```text
◇  ◆  ▾  ▸  ├  └  →  ←  □  ✓
󰈙  󰕷  󰎆  󰋲  󰜎  󰚭  󰘧  󰛡
```

The first row is the guaranteed readability fallback. The second row tests Nerd Font icon support.

## Obsidian font configuration

If desired, set the vault/interface font to JetBrains Mono Nerd Font while retaining a normal fallback. Do not sacrifice readability for icon rendering.
