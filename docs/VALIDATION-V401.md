# Academy v4.0.1 validation

This upgrade continues the Academy working tree based on `6f91b4524d20567c6e56f0a920bd666555508ddd`. It preserves the published responsive implementation and compact-toolbar refinements. The customer Windows/Android application, licensing, hosting services and historical releases were not modified. See [the source reference](V401-REFERENCE.md) for verified release evidence and the simulation's boundaries.

## Checks

| Check | Result |
| --- | --- |
| Static/build validation | 78 Questions, 29 Lessons, 28 feature areas, 822 messages in each of five languages; native JavaScript syntax passed |
| Unit tests | 28 passed, including six learning-engine and seven v4.0.1 transaction tests |
| Full browser curriculum | All 107 Questions/Lessons completed in English, Tamil, Malayalam, Telugu and Hindi: 535 complete workflows |
| Browser regression groups | 546 unique checks across the five language runs; wrong actions, invalid inputs, search, navigation, temporary-record cleanup and browser errors checked |
| Responsive suite | 386 checks passed at 1440, 1280, 1024, 768, 430, 390 and 360px; every Question/Lesson completed at 360px |
| Learning suite | 11 groups passed: Enter gating/repeat prevention, focused Hint/Previous on reading steps, reload/resume, completed-course persistence, level filtering and six new workflows at seven widths |
| CAT artwork | Original PNG SHA-256 unchanged; 29 route/viewport/reduced-motion checks passed |
| Preserved simulator | Ten independent themes, shell dimensions, search, credit history, report filtering, barcodes, dialog focus and expanded guided practice verified |
| Final review | Academy-only paths, legacy IDs, reference-source hashes, temporary-artifact exclusion, sensitive-content scan and Git whitespace checks passed |

The full browser suite was divided into independent language runs using `TEST_LANGUAGES`. Each run also performed the shared navigation, multilingual-screen and responsive checks. A Telugu attempt exhausted temporary browser storage while recording a failure screenshot; its final successful run was performed independently after the parallel browsers closed. Test screenshots and detailed JSON logs remain in ignored `.qa/` files.

Regression fixes include keeping guided dialogs in the visible workspace after confirming a step, translating new return-history entries, respecting focused controls when Enter is pressed on a reading step, reconciling the order table after a purchase return, matching receipt formats to v4.0.1, and assigning combined lessons their most advanced included level.

## Changed files

| Area | Files |
| --- | --- |
| Dashboard and appearance | `index.html`, `css/learning.css`, `js/academy-ui.js` |
| Guide, keyboard and persistence | `js/app.js`, `js/guide.js`, `js/i18n.js`, `js/progress.js` |
| Curriculum and languages | `data/schema.js`, `data/questions/catalog.js`, `data/questions/v401.js`, `data/lessons/catalog.js`, `data/i18n/v401-messages.js`, `data/i18n/en.json`, `data/i18n/ta.json`, `data/i18n/ml.json`, `data/i18n/te.json`, `data/i18n/hi.json` |
| Fictional simulator | `simulator/forms.js`, `simulator/model.js`, `simulator/pages.js`, `simulator/render.js`, `simulator/ui.js`, `simulator/v401-model.js`, `simulator/v401-ui.js` |
| Checks and tests | `package.json`, `scripts/check.mjs`, `tests/browser.mjs`, `tests/responsive.mjs`, `tests/workflow.mjs`, `tests/learning.test.mjs`, `tests/v401-model.test.mjs`, `tests/v401-browser.mjs` |
| Documentation | `README.md`, `docs/V401-REFERENCE.md`, `docs/VALIDATION-V401.md` |

## Limits

Browser checks use Chrome viewport emulation, including a shortened viewport for an on-screen keyboard; they are not physical Android-device certification. Academy transactions use fictional records and local browser progress. They cannot control the installed ShopDesk application, authorize real devices, operate native printers or install updates. Return exercises deliberately cover one selected transaction line and an optional replacement product. No remaining reproducible website bug was identified by these checks.

Publication is verified separately against the resulting Git commit: the existing GitHub Pages build must report that commit, the published runtime files must match it, and live browser smoke checks must pass.
