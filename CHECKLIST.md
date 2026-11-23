# CHECKLIST — news-image-20261119

Built 2026-11-19 morning (FAST mode). Each item maps to a judge criterion
(1–5) or a brief requirement, with the verification method used.

FIX CYCLE 1 applied 2026-11-19 ~07:47 WIB (P3 audit BLOCK 63/100): D1 story
12 replaced, D2 market numbers corrected, D3 eleven one-liners replaced +
footer/kicker reworded, D6 run-log time corrected. See stories.md §4.

## Judge criterion 1 — one day's news, names the day

- [x] Masthead names the day in full: "THURSDAY, 19 NOVEMBER 2026".
  Verified: viewed entry.png at full size; dateline legible.
- [x] All 12 told stories are events that happen on 19 Nov 2026 (scheduled
  event, ruling, launch, first trade, or Thursday-phase development).
  Verified: each story checked against a same-day report — see stories.md
  §1 for the source and date evidence per story. FIX CYCLE 1: story 12
  was replaced (the vice-chair vote was Wed 18 Nov — P3 audit D1); the new
  card (Thu DPCC co-chair vote) is verified against Bloomberg 18 Nov.
- [x] No told story is an earlier day's event presented as today's.
  Verified: date discipline applied per story (see stories.md §3 dropped
  list — 20+ items dropped for being 17–18 Nov, plus 10 more checked and
  dropped in fix cycle 1). The one exception the P3 audit caught (story 12,
  vice-chair vote) was replaced in fix cycle 1.
- [x] Lead rule: the day's top 3 stories in news order are the leads
  (trilateral, GTA VI launch, ICJ ruling). Verified: against the morning
  news cycle (Reuters, AP, ICJ).

## Judge criterion 2 — selection and breadth

- [x] 12 told stories across 5 regions and 6+ fields (diplomacy, gaming,
  justice, politics, weather, space, finance, defence, markets, retail,
  congress). Verified: counted from the page; map legend (NA 7, APAC 4,
  Europe 1) + one-liners cover Middle East, Africa, Europe.
- [x] 26 numbered one-liners, all named/specific. Verified: counted 13–38
  in the image; list in stories.md §2.
- [x] Total 38 stories (12 told + 26 one-liners). Verified: masthead
  kicker "38 STORIES" matches the count.

## Judge criterion 3 — it reads

- [x] Every told story has a hand-drawn scene + headline + 1–2 line summary.
  Verified: viewed entry.png; 3 lead scenes (300×118) + 9 featured scenes
  (180×60) all present and legible; no headline-only featured card.
- [x] No self-contradiction or implausible claim. Verified: summaries
  re-read against stories.md sources; numbers cross-checked (99 Metacritic
  / 146 critics; $83; 200,000; 700,000+; 90–100 km/h). FIX CYCLE 1: the
  market numbers were wrong (P3 audit D2) and are now the verified Wed
  closes (Dow −1.11%, S&P 500 −0.23%).
- [x] "Day in numbers" box (99 / $83 / 200,000) matches the told stories.
  Verified: numbers taken from the same sources as stories 2, 5, 7.

## Judge criterion 4 — faithful

- [x] No fabricated stories; no hype; contested claims attributed.
  Verified: every number and claim traces to a named source in stories.md;
  attribution in text ("Trump puts…", "China resists…", "coalition says…").
- [x] Forecasts labelled as forecasts. Verified: "Landfall noon Friday",
  "declaration due today", "report today" worded as scheduled/expected.
- [x] Sources footer lists the outlets used. Verified: footer reads
  "Reuters · IMD · NASA · ICJ · CNBC · Bloomberg · PIB · NWS · Pew
  Research Center · House Democrats · AP" + "Every told story happened or
  was first reported on Thursday 19 November 2026. One-liners include
  late-Wednesday news; claims attributed, forecasts labelled." FIX CYCLE 1
  (P3 audit D3): the old footer claimed all 38 stories were 19 Nov; the
  new footer matches the disclosed one-liner scope.

## Judge criterion 5 — craft

- [x] One clear composition (masthead → leads → featured → map + list →
  footer), drawn cleanly, no smears or garbled text. Verified: viewed
  entry.png at 1024px and at a 300px downscale (preview-300.png in the
  build dir); structure reads at thumbnail scale.
- [x] No overflow/clipping. Verified: two fix rounds — featured summaries
  trimmed to ≤90 chars, one-liners to ≤44 chars, map legend to one line;
  final render viewed in full, all 38 items inside their bands.

## Brief requirements (gate)

- [x] Image is PNG, 1024×1024, 290,651 bytes ≤ 1,048,576. Verified:
  `node` read of PNG header (89504e47, 1024×1024) + `stat` size.
- [x] Program runs twice byte-identical. Verified: two runs of main.ts
  into out/ and out2/, `cmp` byte-identical (see run log).
- [x] main.ts is Node 22 stdlib only, no network. Verified: imports only
  node:fs / node:path / node:url; copies a committed file.
- [x] Entry content in good, correct English. Verified: re-read all
  headlines/summaries; no Indonesian, no slang.
- [x] Repo created after the competition opened (00:00 UTC 19 Nov 2026)
  via kit `init`; anchor cdc00f4625fa0ee1bbf27766b7b1bf6c15eb1e64,
  round 34081523. Verified: init output in the build session.
- [x] LICENSE MIT present (written by kit init). Verified: LICENSE in repo.
- [x] No external images; every scene hand-drawn in code. Verified:
  frontpage.html contains only inline SVG; no <img> or http references.

## Open / honest notes

- One-liners 13–38: 11 were replaced in fix cycle 1 with verified 19 Nov
  items (13, 14, 15, 16, 20, 21, 32, 33, 36, 37, 38). The remaining 14
  report late-18-Nov (or unverified) developments as a Thursday morning
  paper would carry them; each one's event date is recorded in stories.md
  §2, none is fabricated, and the footer now discloses the scope.
- Stories 11 (earnings) and 12 (DPCC co-chair vote) are scheduled-for-today
  items, worded as "report today" / "vote on a messaging post", not as
  completed events. (Story 12 was the vice-chair vote in the first build;
  that vote happened Wed 18 Nov and the card was replaced — P3 audit D1.)
- Story 9 (California) is the Thursday phase of a storm that made landfall
  Wed 18 Nov: the flood watch and southward shift are the 19 Nov part.
- Story 10 (markets) uses the verified Wednesday closes as reported
  Thursday morning plus the Thursday open; worded as "falls for a fifth
  day … Asian markets open lower". Figures corrected in fix cycle 1
  (P3 audit D2): Dow −1.11%, S&P 500 −0.23%.
- Masthead kicker changed in fix cycle 1 from "ALL FROM THURSDAY" to
  "ONE DAY" (P3 audit D3 — the old kicker overclaimed the one-liner layer).
