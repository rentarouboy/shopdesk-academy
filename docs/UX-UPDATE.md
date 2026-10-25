# Continuous guidance and feature categories

This Academy-only UX update continues commit `3a38fd4d0c0fa19a6ea7fd254a219716aa3befdc`. It changes the guide interaction and library presentation. All 78 Questions, 29 Lessons, step IDs, existing workflows, fictional demo records, ten simulator themes and original CAT artwork remain intact. No customer ShopDesk application, licensing service, production backend or historical application release is changed. The Academy now displays v5.0.0 throughout; that version-label update preserves these behaviors.

## Continuous guidance

A valid highlighted click updates the fictional simulator and advances exactly one step. Dropdowns and checkboxes validate on their natural change event. Text inputs validate and advance with one Enter; Tab does not silently complete a text-entry step. Invalid values, wrong actions, incomplete forms and failed saves remain on the current step.

The next target is opened, scrolled into view, focused and outlined in yellow using the existing reveal/render/spotlight functions. Instructions follow the highlighted control; secondary Previous, Hint, Restart and Exit controls remain available. Reading steps wait for an inline **Got it / Continue** acknowledgement or Enter on the explanation. There is no extra Next Step confirmation after a successful interaction.

Step stamps reject stale events, a brief transition guard blocks rapid duplicate actions, repeated Enter events are ignored, and a fast valid text entry can finish after the current transition without a second Enter. Field commits are discarded if their originating control or step has been replaced. Validation and fictional form saves retain the existing model rules.

The versioned local learning-storage format and completed IDs are unchanged. Resuming an old pending-confirmation snapshot consumes that already-applied action once, without applying its mutation again, and restores the next target. A final pending action records completion and clears temporary practice data normally. Previous retains the preceding state snapshot.

## Feature library

Questions and Lessons share `js/library.js`: a compact grid of the verified sidebar's major feature areas and a native, responsive category dialog. Products, categories and inventory share **Categories / Inventory**; returns live under **Stock History**; supplier payments under **Suppliers**; and device permissions, backup and import training under **Settings**. A mixed lesson can appear in both relevant parent areas without duplicating its progress record.

Only category bubbles appear by default. Opening a category renders its matching existing exercises, with difficulty, duration and completion status. Choosing an exercise closes the popup and starts the highlighted trail directly. Global search and level filters narrow the matching categories and their popup content. Popup language controls update the same five-language preference used by the Academy. Native modal focus containment, Escape, Close and Back restore keyboard focus to the category, or to search if filtering removed it. Light/dark appearance and reduced-motion preferences are respected.

## Verification

- `npm run build`: curriculum, static assets, all five translation dictionaries and native JavaScript syntax.
- `npm test`: 34 unit/model/library tests, including automatic advancement, stale-step rejection and legacy pending-progress migration.
- `npm run test:browser`: every Question and Lesson in all five languages, plus existing navigation, validation, search and cleanup checks.
- `npm run test:responsive`: seven widths (1440, 1280, 1024, 768, 430, 390 and 360px), all simulator pages/forms, multilingual mobile workflows and every exercise at 360px.
- `npm run test:learning`: the preserved keyboard/resume/appearance suite and six transaction/settings workflows at all seven widths, adapted to category selection and automatic advancement.
- `npm run test:ux`: category membership, native focus wrap, Escape/Back, translated popups, compact search/levels, duplicate events, one-Enter input including fast entry, failed saves, old progress, reading acknowledgement and visible mobile low-stock/sales/payment/return targets.

Detailed result logs and screenshots stay in ignored `.qa/` files. Publication is checked against the resulting commit using the existing Pages deployment, exact published runtime-file comparisons and live browser regression checks. Browser viewport emulation is used; physical device certification and native app control are outside this website task.

### Validation outcome — 17 October 2026

The preserved full regression reports completed successfully after the earlier session interruption: 546 browser checks (including all 107 exercises in all five languages), 386 responsive checks, 11 learning/workflow groups and 29 CAT checks. All report zero browser errors. Final verification after the fast-entry and popup focus fixes passed all 23 focused UX groups, all 34 unit tests, build/static/translation/syntax checks, and two expanded guided-workspace checks at 1440px and 360px. The preservation and sensitive-content audit passed for all changed files; temporary QA artifacts are excluded.

## Changed files

`README.md`, `css/learning.css`, `index.html`, `package.json`, `js/app.js`, `js/guide.js`, `js/library.js`, `simulator/render.js`, `scripts/check.mjs`, `data/i18n/ux-messages.js`, the five language JSON dictionaries, `tests/workflow.mjs`, `tests/browser.mjs`, `tests/responsive.mjs`, `tests/v401-browser.mjs`, `tests/learning.test.mjs`, `tests/library.test.mjs`, `tests/ux-browser.mjs`, `docs/V401-REFERENCE.md` and this report.
