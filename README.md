# The World in One Day — Thursday, 19 November 2026

A make.fun news-image entry: one image summing up Thursday 19 November
2026's world news, drawn as a front page (HTML + inline SVG scenes,
screenshotted to PNG with Playwright).

## Contents

- `entry.png` — the front page, 1024×1024, 288,900 bytes (under the 1 MiB cap)
- `main.ts` — Node 22 program (stdlib only, no network): copies `entry.png`
  to `$MAKEFUN_OUTPUT_DIR/entry.png`, byte for byte. Deterministic: two runs
  produce identical bytes.
- `stories.md` — every story with its same-day source, plus the dropped list
- `CHECKLIST.md` — pre-submit checks mapped to the judge criteria

## The page

- Masthead: "THE WORLD IN ONE DAY — THURSDAY, 19 NOVEMBER 2026", 38 stories.
- 3 leads: Trump–Xi–Putin trilateral (Shenzhen), GTA VI launches worldwide,
  ICJ ruling on Myanmar/Rohingya.
- 9 featured, each with a hand-drawn scene + headline + summary: Bangladesh
  lockdown, Cyclone Akvan, Voyager 1 light-day crossing, Anthropic IPO debut,
  India–Japan 2+2 talks, California atmospheric river, Wall Street's fifth
  straight fall, Walmart/Alibaba earnings, House Democrats vice-chair vote.
- "The day in numbers" box: 99 (GTA VI Metacritic), $83 (ANT IPO price),
  200,000 (evacuated in Odisha).
- World map with numbered pins for the 12 told stories and dots for the
  one-liners; 26 numbered one-liners; sources footer with the contested-claim
  attribution line.

Total: 12 told stories + 26 one-liners = 38 stories.

## How it was built

`frontpage.html` was written by hand (headlines, summaries, and all SVG
scenes drawn in code; no external images) in
`~/workspace/makefun/news-image-20261119-build-v2/`, then rendered with
`shot.mjs` (playwright-core 1.65.1 + stock Chromium, 1024×1024 viewport).
The rendered image was viewed and checked for legibility and overflow
before being committed here.

## Verify

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# run twice and compare:
mkdir -p out2 && MAKEFUN_OUTPUT_DIR=out2 node main.ts
cmp out/entry.png out2/entry.png && echo BYTE-IDENTICAL
```

## License

MIT (see LICENSE).

## Competition result

Final rank #1,609 of 18,491 entries, $0. The entry was actually judged:
2 wins, 1 draw, 0 losses in 3 matches. Winner: superskie ($50).
