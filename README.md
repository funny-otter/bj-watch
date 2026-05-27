# BJ.WATCH

Fresh terminal-dashboard implementation for tracking public Bryan Johnson / Blueprint signals.

Source references:
- Visual reference: `/home/chad/projects/bryan-johnson-kb/references/Bryan Johnson Watcher.html`
- Content seed only: `/home/chad/projects/bryan-johnson-kb/src/data/`

## Run

```bash
npm install
npm run dev
```

Open the local Vite URL printed by the dev server.

## Build/check

```bash
npm run build
npm run check
```

`npm run check` runs the structural test suite and the production Vite build so route/tab structure, bundling, and asset output are verified without adding extra framework tooling.

## Implementation notes

- This is a clean Vite/static project, not an iteration of the old BJKB Astro UI.
- The UI preserves the reference terminal system: dark shell, fixed sidebar, sticky topbar, dense panels, 1px teal grid lines, compact uppercase labels.
- Protocol sections are deliberately separated: Habits table first (`idx | time | habit`), then distinct Long-term objectives and Forbidden panels. There is no combined Habits/Longterm/Don'ts bucket table.
- Changelog has exactly two inner UI tabs: protocol updates and site changelog.
- Unsupported prototype numbers are labeled as derived/placeholders rather than presented as verified facts.
