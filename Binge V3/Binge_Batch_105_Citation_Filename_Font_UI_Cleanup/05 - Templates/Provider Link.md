---
title: "Provider Link Template"
type: template
status: "active"
---

# Provider Link Template

Use one shared provider image asset. Prefer the HTML image form inside Markdown tables because it is more reliable across Obsidian table rendering contexts.

◇ HUMAN-READABLE LINK
[Provider Name](https://example.com)

◇ WITH SHARED LOGO
<span class="provider-link"><img class="provider-logo inline" src="../07 - Data/Provider Logos/provider.svg" alt="Provider Name provider logo"> [Provider Name](https://example.com)</span>

◇ TABLE-SAFE LOGO
<img class="provider-logo inline" src="Provider Logos/provider.svg" alt="Provider Name provider logo">

◇ DROPDOWN / COLLAPSIBLE SECTION
<details>
<summary>◇ Provider availability</summary>

- Availability: unverified/current check required
- Pricing: unverified/current check required

</details>

◇ IMAGE RULES
- Maximum provider-logo dimensions: 128×128 pixels.
- Inline/table display is capped at 32×32 pixels.
- Prefer one shared image asset per provider.
- Keep provider names as text so links remain understandable if images are disabled.
- Record image source and retrieval date in the provider/source note.

◇ PLATFORM SECTIONS
## Free
- Provider Name — availability: unverified/current check required

## Torrent — Legal and Non-Legal
- Legal: document only where a lawful distribution is known.
- Non-Legal: category/status may be documented, but no piracy-site links or instructions are included.

## Paid
- Provider Name — AUD price: unverified/current check required — billing: unverified
