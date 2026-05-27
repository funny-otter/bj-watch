# BJ.WATCH reference implementation brief

Source inspected: `/home/chad/projects/bryan-johnson-kb/references/Bryan Johnson Watcher.html`.
Old project inspected for reusable content/data: `/home/chad/projects/bryan-johnson-kb`.

This is an implementation brief for a fresh BJ.WATCH build. It is not a redesign of the old BJKB Astro pages. Treat the bundled reference page as the visual/interaction source of truth; treat old BJKB only as a source-aware content pool.

## 1. Overall app shell

Reference title: `BJ Watcher · Terminal`.

Visual language:
- Dark terminal dashboard, not a magazine/wiki layout.
- Fonts: `JetBrains Mono` for UI/chrome/numbers; `IBM Plex Sans` for readable body copy.
- Core palette from reference CSS:
  - `--bg: #07100f`
  - `--panel: #0c1817`
  - `--panel-2: #10211f`
  - `--line: #1b302d`
  - `--line-2: #264540`
  - `--ink: #d5efdf`
  - `--ink-2: #8fb6a6`
  - `--ink-3: #5f8074`
  - `--ink-4: #3e574f`
  - `--teal: #41e0b5`
  - `--teal-d: #2d9d80`
  - `--amber: #e8c462`
  - `--red: #e07565`
- Rectangular panels, 1px borders, no rounded card system, no large hero imagery.
- Headings are small uppercase terminal labels; page headings render like `▶ LATEST SIGNAL`.

Layout:
- Root `.app`: CSS grid, `grid-template-columns: 212px 1fr`, full-height, dark background.
- Left sidebar `.side`: fixed-width terminal nav panel.
- Main `.main`: scrollable content column.
- Sticky topbar `.topbar`: breadcrumb plus live timestamp.
- Mobile behavior: under ~760px, sidebar becomes off-canvas; `.menu-btn` toggles `.app.menu-open`; `.scrim` closes it.

## 2. Sidebar/navigation structure

Sidebar exact structure:
- `.brand`
  - `.row`
    - `.logo-box` square outline with animated filled square pseudo-element.
    - `.ttl`: `BJ.WATCH`
  - `.ver`: `v0.4 · auto-updated daily` + line break + `tracking since Jan 2024`
- Nav groups:
  1. `// feed`
     - `.nav-item.active[data-tab="overview"]`: prefix `$`, label `overview`, `.badge` `8`
  2. `// protocols`
     - `.nav-item[data-tab="health"]`: prefix `~/`, label `health`, badge `5`
     - `.nav-item[data-tab="longevity"]`: prefix `~/`, label `longevity`, badge `5`
     - `.nav-item[data-tab="nutrition"]`: prefix `~/`, label `nutrition`, badge `5`
     - `.nav-item[data-tab="sleep"]`: prefix `~/`, label `sleep`, badge `5`
  3. `// reference`
     - `.nav-item[data-tab="concepts"]`: prefix `~/`, label `concepts`, badge `12`
  4. `// signal`
     - `.nav-item[data-tab="metrics"]`: prefix `$`, label `metrics`, badge `1`
     - `.nav-item[data-tab="changelog"]`: prefix `$`, label `changelog`, badge `12`
- `.stat-mini` below nav:
  - key `POSTS / 30D`
  - value `128 ↑12%`
  - detail `avg 4.3/day`

Interaction:
- Nav items switch active tab by toggling `.nav-item.active` and `.page.active` against matching `data-tab` / `data-page`.
- Breadcrumb current segment `#crumb` updates using this map:
  - `overview -> overview`
  - `health -> ~/health`
  - `longevity -> ~/longevity`
  - `nutrition -> ~/nutrition`
  - `sleep -> ~/sleep`
  - `concepts -> ~/concepts`
  - `metrics -> $metrics`
  - `changelog -> $changelog`
- On tab switch, scroll `.main` to top.

## 3. Topbar

Reference structure:
- `.topbar`
  - mobile `.menu-btn` button with hamburger SVG, hidden on desktop.
  - `.crumb`: `~/ / bj.watch / <current>` with `.sep` separators and `.cur#crumb` current segment.
  - `.right` aligned to the far right:
    - pulse dot + `live`
    - timestamp, e.g. `2026.05.24 · 06:14 PT`

Keep this terse; do not replace with a conventional navbar.

## 4. Page inventory and section structure

All main views are sibling `<section class="page" data-page="...">` nodes. The active view also has `.active`.

Pages in reference:
1. `overview` / title `Latest signal`
2. `health` / title `Health protocol`
3. `longevity` / title `Longevity protocol`
4. `nutrition` / title `Nutrition protocol`
5. `sleep` / title `Sleep protocol`
6. `concepts` / title `Concepts · glossary`
7. `metrics` / title `Posting telemetry`
8. `changelog` / title `Changelog`

Each page starts with:
- `.head-row`
  - `h1` uppercase, visually prefixed by CSS `▶ `
  - `.meta` small status/count text
- Most content pages then use `.lead` body copy with teal emphasized words.

## 5. Overview page: Latest signal

Purpose: latest public signal/feed, not a generic knowledge homepage.

Header:
- `h1`: `Latest signal`
- `.meta`: `last update 2m ago · 8 entries` in the reference; in production use real last update/count.

Filters:
- `.filters`
- `.filt.on`: `all`
- `.filt`: `biomarkers`, `sleep`, `nutrition`, `training`, `protocols`, `experiments`
- CSS prepends `# ` via `.filt::before`.

Main layout:
- `.ov-grid`: two columns, `1fr 280px`, gap 18px.
- Under max-width 1100px, switch to one column and hide `.ov-side`.

Feed table:
- `.feed-table`
- `.feed-head`: four columns exactly: `time`, `tag`, `content`, `engagement`
- `.feed-row`: grid columns `56px 80px 1fr 130px`
  - `.time`: e.g. `06:14<br>today`
  - `.tag` plus optional topic class: `.health`, `.nutrition`, `.sleep`, `.train`; default teal for other tags.
  - `.text`: IBM Plex Sans; numeric highlights wrapped in `.n`.
  - `.eng`: two stacked engagement items, replies then likes, each with small SVG icon and `<b>` count.

Right sidebar `.ov-side`:
- `.ov-card` `Topic mix · 7d`
  - `.topic-list` rows with label, percent, and tiny progress bar.
- `.ov-card` `Activity · 20w heatmap`
  - `.heat#heat`, 20 columns x 7 rows of small squares.
- `.ov-card` `Next watch`
  - short watch item with teal strong title and small monospace ETA line.

Implementation note: use old BJKB `src/data/signals.mjs` as a safer real-content seed for feed/watch content. Do not copy the reference's fabricated-looking metrics as facts unless backed by source data.

## 6. Protocol pages: required structure

There are four protocol pages: health, longevity, nutrition, sleep. They all share the same exact structural pattern.

Critical requirement: the protocol page is NOT a combined bucket table. Implement it as:
1. Header + lead.
2. Habits list/table FIRST.
3. Then a separate two-column `.two` area with:
   - left `.panel`: `Long-term objectives`
   - right `.panel`: `Forbidden`

Reference protocol skeleton:

```html
<section class="page" data-page="health">
  <div class="head-row"><h1>Health protocol</h1><span class="meta">...</span></div>
  <p class="lead">...</p>

  <div class="habit-list" id="health-habits-wrap">
    <div class="habit-head"><span>idx</span><span>time</span><span>habit</span></div>
    <!-- render .habit rows here -->
  </div>

  <div class="two">
    <div class="panel">
      <h3>Long-term objectives</h3>
      <div class="obj"><span class="target">...</span><span class="text">...</span></div>
    </div>
    <div class="panel">
      <h3>Forbidden</h3>
      <div class="dont">...</div>
    </div>
  </div>
</section>
```

Habit list visual details:
- `.habit-list`: bordered panel background.
- `.habit-head`: grid columns `36px 70px 1fr`; labels `idx`, `time`, `habit`.
- `.habit`: same grid columns; hover background.
- `.habit .id`: display `[01]`, `[02]`, etc. In generated rows use bracketed, zero-padded IDs to match reference.
- `.h-time`: time label plus `.h-dose-inline` on next line.
- Habit copy block:
  - `.h-title`: title, IBM Plex Sans, 14px, semibold.
  - `.h-desc`: description text.
  - `.h-why`: rationale text prefixed by CSS `// why`.

Reference habit data shape:
```js
{ t: "Morning sunlight", d: "10 minutes...", w: "Anchors circadian rhythm...", time: "morning", dose: "10 min", compl: 100 }
```
`compl` exists in data but the current reference renderer does not show a completion column. Do not add a completion column unless explicitly requested.

Long-term objectives panel:
- `.two`: grid columns `1fr 1fr`, gap 14px, margin-top 24px; stacks to one column below 1000px.
- `.panel h3`: uppercase teal, CSS prepends `// `.
- `.obj`: grid columns `140px 1fr`; `.target` small muted text; `.text` IBM Plex Sans with important values in `<strong>`.

Forbidden panel:
- `.dont`: list row with red `FORBID` badge produced by `.dont::before`.
- The `.dont` text is the forbidden item only; do not create an extra table header here.

## 7. Reference protocol content and production adaptation

Reference prototype has 5 habits per protocol, 4 objectives, 5 forbidden items. Use that count as the visual target, but replace or qualify content using old BJKB source-aware data.

Old BJKB reusable seed: `/home/chad/projects/bryan-johnson-kb/src/data/protocols.mjs`.
- `protocolCategories[]` contains `health`, `longevity`, `nutrition`, `sleep` with:
  - `title`
  - `lede`
  - `confidence`
  - `sourcePaths`
  - `sections.habits`
  - `sections.longterm`
  - `sections.donts`
  - cards/concept links
- The old component `/src/components/ProtocolDossier.astro` already separates habits, objectives, and forbidden panels in roughly the right order. It can be mined for data-mapping logic, but do not copy its extra right-side analysis rail unless the new design asks for it.

Recommended first implementation content:
- Use the four protocol categories from `protocols.mjs`.
- For habit rows, use `sections.habits` as source-aware copy. If there are fewer than 5 rows, render available rows and allow future data to fill to 5; do not invent exact dose/metric targets.
- For objectives, use `sections.longterm`.
- For forbidden, use `sections.donts`.
- Show source trails unobtrusively only where useful; do not let citations break the reference's terminal density.

Keep/translate these guardrails from old content:
- This site summarizes Bryan Johnson/Blueprint claims and public protocol signals; it is not medical advice.
- Exact sleep score, REM, HRV, ApoB, calorie, macro, drug, supplement, and intervention numbers need current source verification.
- Experimental/N=1 claims should be visually distinguishable from foundational habits.

## 8. Changelog page and two-tab interface

Reference changelog structure:
- Page: `<section class="page" data-page="changelog">`
- Header:
  - `h1`: `Changelog`
  - `.meta`: `protocol updates + site updates`
- Lead:
  - `Two streams. Protocol updates are changes Bryan announced about his routine. Site changelog tracks what we changed on this tracker.`
- Inner tabs:
  - `.filters#clog-tabs`
  - `.filt.on[data-c="protocol"]`: `protocol updates · 7`
  - `.filt[data-c="site"]`: `site changelog · 5`
- Content containers:
  - `<div data-clog="protocol">` visible by default.
  - `<div data-clog="site" style="display:none">` hidden by default.

Protocol changelog table:
- `.clog`
- `.clog-head`: columns `date`, `kind`, `change`
- `.row`: same grid columns `90px 70px 1fr`
  - `.d`: date, e.g. `2026.05.22`
  - `.v`: kind, e.g. `+ ADD`, `~ UPD`, `- RM`
  - `.t`: change text, with inline `.add` or `.rm` span for colored verb.

Site changelog table:
- Same `.clog` and `.row` structure.
- Header columns are `date`, `ver`, `change`.
- `.v` contains version labels like `v0.4`, `v0.3`, `v0.2`, `v0.1`.

Interaction:
```js
document.querySelectorAll("#clog-tabs .filt").forEach(t => {
  t.addEventListener("click", () => {
    document.querySelectorAll("#clog-tabs .filt").forEach(x => x.classList.remove("on"));
    t.classList.add("on");
    document.querySelectorAll("[data-clog]").forEach(el => {
      el.style.display = el.dataset.clog === t.dataset.c ? "" : "none";
    });
  });
});
```

Production data guidance:
- Protocol updates should come from curated signal/update data, not site deployment notes.
- Site changelog should record actual BJ.WATCH implementation/content changes.
- Old BJKB has update content under `src/content/updates/` and curated activity/signals in `src/data/signals.mjs`; adapt only source-backed, public-facing updates.

## 9. Concepts page

Reference structure:
- Header: `Concepts · glossary`, meta `12 entries · updated weekly`.
- Lead: reference layer for recurring feed terms.
- Filters: `.filters#concept-filters`, data attributes `data-f`:
  - `all`, `health`, `longevity`, `nutrition`, `sleep`, `training`, `biomarkers`, `experiments`
- Grid: `.concept-grid#concept-grid`, two columns desktop, one column mobile.

Concept card structure generated by JS:
- `<article class="concept">`
  - `.top`
    - `.term`: term name, CSS prepends `> `.
    - `.right`: optional `.badge` plus mention count text like `47 × mentioned`.
  - `.short`: concise definition.
  - `.voice`: Bryan/framing summary, CSS prepends `// IN SUMMARY`.
  - `.why`: starts with `<b>Why</b>` then explanatory value.
  - `.tags`: multiple `.ctag`, CSS prepends `#`.

Old BJKB reusable seed:
- `src/data/protocols.mjs` exports `conceptEntries[]` with source-aware concepts.
- `src/content/knowledge/*.md` contains richer pages. Use these for definitions/sources.
- Do not copy the reference's unsupported mention counts unless the new app derives counts from actual feed/source data.

## 10. Metrics page

Reference structure:
- Header: `Posting telemetry`, meta `cadence · topics · engagement`.
- First `.chart-card`: `Daily posts`, range subtitle, day/wk/mo switcher, y-axis, bar chart, x-axis labels, and four summary stats.
- `.metrics-grid`: two `.chart-card` panels:
  1. `Topic mix · 30d`: stacked `.topicbar` with percent labels and `.topic-legend`.
  2. `Engagement · 30d`: four `.gstat` cells: replies/post, likes/post, reposts/post, followers.

Implementation guidance:
- Build the visual shell, but leave metrics as clearly labeled placeholders until real tweet ingestion metrics exist.
- Old BJKB `src/data/signals.mjs` has `curatedActivity` and `sourceCounts`; use that for initial activity/source counters if needed.
- Avoid presenting reference numbers like `128 posts`, `38k likes/post`, or `3.4M followers` as real unless verified.

## 11. Minimal content/data to copy or adapt from old BJKB

Copy/adapt as source-aware seeds:
- `src/data/signals.mjs`
  - `curatedSignals`: use for Overview feed rows, but map to the terminal table shape and source-aware summaries.
  - `watchQueue`: use for Overview `Next watch`.
  - `curatedActivity`: use for Metrics activity/chart placeholders if no live feed ingestion is ready.
  - `sourceCounts`: useful for internal/source telemetry, not necessarily visible in v1.
- `src/data/protocols.mjs`
  - `protocolCategories`: use for Health/Longevity/Nutrition/Sleep page titles, ledes, habits, objectives, forbidden items, confidence, and source paths.
  - `conceptEntries`: use as initial Concepts page data.
- `src/content/knowledge/*.md`
  - Use to enrich concept definitions and source trails.
- `src/content/updates/*.md`
  - Use to seed the Protocol updates changelog when the update is actually about protocol/signal changes.

Do not copy as visual implementation:
- Old BJKB page layouts (`src/pages/*.astro`) as the new UI shell.
- Old wiki/card-heavy dashboard components unless they are only being mined for content mapping.
- Old `ProtocolDossier.astro` right-side analysis rail; the reference protocol page is simpler: habits first, then two panels.
- Any old content that is private, low-signal, duplicate, or not public-facing.

Leave as reference placeholders until backed by real data:
- Engagement counts, follower counts, likes/replies/reposts, topic percentages.
- Exact daily post counts and heatmap intensity.
- Exact protocol dose/metric targets from the bundled reference unless source-backed.
- Mention counts on concepts.
- Prototype changelog entries such as plasma exchange, rapamycin removal, EVOO supplier, marine collagen, or 10,000-lux wake light unless confirmed in old source data/current wiki.

## 12. Class/component checklist for builder

Implement components around these reference classes/names:
- App shell: `.app`, `.scrim`, `.side`, `.brand`, `.logo-box`, `.ttl`, `.ver`, `.nav-group`, `.nav-label`, `.nav-item`, `.prefix`, `.badge`, `.stat-mini`, `.main`, `.topbar`, `.menu-btn`, `.crumb`, `.right`, `.pulse`, `.ok`.
- Pages: `.page`, `.page.active`, `.head-row`, `.meta`, `.lead`, `.filters`, `.filt`, `.filt.on`.
- Overview: `.ov-grid`, `.feed-table`, `.feed-head`, `.feed-row`, `.time`, `.tag`, `.text`, `.n`, `.eng`, `.eico`, `.ov-side`, `.ov-card`, `.topic-list`, `.topic-row`, `.bar-bg`, `.heat`.
- Protocols: `.habit-list`, `.habit-head`, `.habit`, `.id`, `.h-time`, `.h-dose-inline`, `.h-title`, `.h-desc`, `.h-why`, `.two`, `.panel`, `.obj`, `.target`, `.dont`.
- Metrics: `.chart-card`, `.chart-wrap`, `.y-axis`, `.y-grid`, `.chart`, `.bar`, `.bar.weekend`, `.chart-x`, `.chart-summary`, `.csum`, `.metrics-grid`, `.topicbar`, `.topic-legend`, `.legend-i`, `.gstat`.
- Changelog: `.clog`, `.clog-head`, `.clog .row`, `.d`, `.v`, `.t`, `.add`, `.rm`, `[data-clog]`, `#clog-tabs`.
- Concepts: `.concept-grid`, `.concept`, `.top`, `.term`, `.right`, `.short`, `.voice`, `.why`, `.tags`, `.ctag`, `.badge.disc`, `#concept-filters`.

## 13. Acceptance checks

A builder implementation should pass these checks:
- Sidebar tabs match the reference nav groups and labels.
- Topbar breadcrumb updates for each tab.
- Overview starts with feed rows, not old BJKB hero cards.
- Each protocol page renders habit list/table first, followed by two separate panels for `Long-term objectives` and `Forbidden`.
- No combined habits/objectives/forbidden bucket table exists.
- Changelog has an inner two-tab interface: `protocol updates` and `site changelog`, with only one stream visible at a time.
- Placeholder/unsupported reference numbers are visibly not treated as verified facts.
- Source-aware content from old BJKB is adapted into the new terminal structure without copying the old visual design.
