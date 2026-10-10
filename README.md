# ShopDesk Academy

Learn ShopDesk by using it. A standalone, buildless training website for GitHub Pages.

The Academy provides 60 searchable questions, 20 interactive lessons, and 20 feature areas. Shop Orders has 21 focused workflows for multiple products, separate suppliers, partial deliveries, cumulative receiving, payments, balances, low-stock recommendations, and order history.

## Run locally

Requires Node.js 20 or later. There are no production dependencies to install.

```sh
npm start
```

Open `http://127.0.0.1:4188/shopdesk-academy/`. This project path deliberately matches a GitHub Pages deployment.

```sh
npm run build
npm test
```

`build` validates static assets, content structure, feature coverage, and translation completeness. No compilation is needed. To run the browser checks, install Playwright as a development dependency in your own checkout, use an existing Chrome installation, and run `npm run test:browser`. Set `CHROME_PATH` if Chrome is installed elsewhere. Set `BASE_URL` to test a published deployment.

## How practice works

- **Explore:** navigate screens and open forms; all data-entry controls are read-only or disabled. Saving cannot create records.
- **Guided practice:** only the current step's field accepts input. Real clicks, selections and valid field values advance the guide. Wrong actions and empty fields do not advance it.
- **Previous:** restores a snapshot of the preceding step, including its screen and form.
- **Restart / Exit / Completion:** rebuild the clean fictional demo state and discard temporary records. Multi-part lessons also start each exercise from a clean demo state.
- **Languages:** English, Tamil, Malayalam, Telugu and Hindi translate navigation, catalogs, instructions, forms, settings, validation and success. Sample business names and source-file column names retain their original values.
- **PC Gaming:** the session workflow appears only in the relevant training workspace. It is absent from ordinary retail navigation.

All practice records exist in JavaScript memory. The site has no backend, authentication, database, business-data storage, or connection to any ShopDesk service. Reloading also resets practice. The optional demo backup download contains fictional Academy data.

## Imports

The Import Assistant uses included fictional samples to teach detection, preview, suggested mapping, correction, validation, confirmation and import. JSON, CSV, XLS, XLSX, XML and TXT are the formats supported by ShopDesk; the Academy demonstrates their workflow using bundled rows rather than reading uploaded files.

Opening stock belongs to the **new-product import**. Existing products are not overwritten. Historical invoices use exact saved product identities and reconciled amounts; importing them does not deduct current stock again.

## Project layout

```text
index.html                 Academy shell and CAT loading screen
assets/                    Original Academy-only SVG illustrations
css/                       Responsive Academy and midnight simulator styles
data/schema.js             Feature labels, fields, settings and themes
data/questions/catalog.js  Questions, steps, targets and validation rules
data/lessons/catalog.js    Structured learning paths
data/import-samples.js     Fictional import fixtures
data/i18n/                 Five complete translation dictionaries
js/app.js                  Navigation and event wiring
js/guide.js                Action-driven guidance and snapshots
simulator/model.js         Demo state, validation, receiving and reset
simulator/render.js        The shared simulator for both modes
scripts/                   Local server and static validation
tests/                     Model and real-browser regression checks
```

## Add a question

Add a record to `data/questions/catalog.js` with a unique ID, feature, title, keywords, description, starting screen, completion message and an array of steps. Each step has an action, target, instruction, label and optional validation rule. Use existing actions or extend the simulator's event handler. Add the new message to **all five** JSON dictionaries, then run the checks and browser workflow.

Do not add timed completion or a generic Next button. Each step should correspond to an action performed in the simulator.

## Source alignment

Only end-user interface labels and behavior were inspected. The Academy implementation and CAT illustrations were written separately. The simulator follows the source's five-language set, settings sections, ten appearance themes, customer contact fields, credit workflows, supplier-per-order organization, and cumulative received-stock rules.

`saveOrder` applies `received total - previously applied total`, validates payments, and prevents removal of received product lines. Sample invoices retain current stock. Source application files were not modified or included in this repository.

## GitHub Pages

Publish from the default branch's repository root using GitHub Pages. `.nojekyll` ensures the static files are served directly. All runtime asset paths are relative, including ES modules and translation fetches, so the website works below a project URL. No secrets or build variables are required.

## Accessibility

Semantic landmarks, labeled fields, native buttons and selects, visible focus, a skip link, keyboard-accessible navigation, progress announcements, and reduced-motion styling are included. On narrow screens, the application keeps its desktop structure inside a horizontally scrollable simulator; the page itself stays within the viewport.
