# Unslop pass (November 25, 2026)

Done with the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0. Built new in wave 2, then audited against `references/signs.md` before shipping.

## Audit

Light slop on the first build. Signs found and fixed:

- Three equal speaker cards side by side, each a large grey silhouette (`src/pages/index.astro`, Speakers)
- The "You're registered" confirmation showing before anyone registered (`display: grid` beat the `hidden` attribute)
- On phones the broadcast still squeezed to 16:10, with the lower third covering the slide and unreadable tiles (`src/components/Broadcast.astro`)
- No other signs: no pill above the headline, no gradients, glows or blobs, no uppercase tracked labels, no emoji, weights 400 to 600, no looping motion

## Direction

- Product: a registration page for a free one-hour bookkeeping workshop, for owners of small agencies and studios
- Character: calm, exact, on time
- World: a broadcast control room; a shared slide, speaker tiles, lower thirds, timecodes
- Moments: the broadcast still in the hero, with the five-day calendar on the slide and the one bar that matters in red
- Signature: the on-air tally, a small dot that is grey before the session and red only while it's live, plus timecode mono for the running order

## Changes

- Layout: speakers became a list of rows with small square portraits and bios at reading width, instead of three equal cards
- Details: the registered state hides until a successful submit
- Visuals: on phones the still drops the tiles and lower third and shows the slide on its own, so the calendar stays readable
- Color: ink ramp throughout, primary buttons ink, red reserved for the tally, the key bar and the agenda numbers

screenshot-2: Running order with timecodes
screenshot-3: Registration form
