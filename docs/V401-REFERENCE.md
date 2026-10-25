# ShopDesk Academy v5.0.0 reference

Academy is an independent browser training simulation. It has no desktop bridge, native-app control, licensing backend, customer database, or business-cloud connection. All business records are fictional; learning progress and the current fictional exercise are stored only in this browser. Completing or exiting an exercise clears its practice records. Local storage may be unavailable or cleared by the browser; practice still works in memory.

## Source inspection history

Academy v5.0.0 updates the website's version labels and curriculum metadata. Its existing simulator workflows are preserved. This version-label update does not claim a new inspection of customer application packages.

The original simulator source inspection used [customer release ID 414951633](https://api.github.com/repos/rentarouboy/shopdesk_web/releases/414951633), published 16 October 2026, with five assets. The public GitHub API was checked during that inspection. The following hashes record those original inspected artifacts; they are historical evidence, not hashes for a new customer release:

| Artifact | SHA-256 |
| --- | --- |
| Windows Portable | `be45e560a8784c38cbe02d83d28eb1112cbdf4a5f9aeecb2e2c05f8d1c778d2d` |
| Android APK | `ab7bc386854a1bb6156f81df1fcb173a8dd78bedb017bbbdc4190e64ff22b4e0` |
| shopdesk-release.json | `55d773afe8f6f57a205557bb97b18b2ca94f0de2d6ff992f049ff03d080215fd` |

The original inspection used staged Windows and Android source identified by the official package inspection report, rather than assuming the maintained top-level package matched the published application. The inspection recorded that the staged compiled renderer matched its official package, and the corresponding packaged-UI QA screenshots were reviewed. No customer application is launched, rebuilt, modified or republished by this Academy version update.

## Control mapping

| Area | Verified source component | Academy control and exercise |
| --- | --- | --- |
| Navigation and business types | `app/shop-app.tsx`, `lib/shop-navigation.ts` | Original order and IDs retained; Help and Check for Updates added; eleven business contexts |
| Products/categories | `app/shop-app.tsx` | **Categories / Inventory** remains the actual menu. Products is a section within it, not an invented top-level menu |
| Quick sales | `app/quick-sales.tsx`, DailySalesView | Search product name/SKU/barcode, select a product row, enter quantity, save, then Generate Bill |
| Receipt settings | `app/quick-bill-settings.tsx` | A4, 80mm, 58mm and compact formats; system printer explanation; no simulated native silent-print integration |
| Supplier payments | `app/supplier-account.tsx`, `lib/supplier-accounts.ts` | Suppliers → Account / payments, or Shop Orders → Payments → Record payment; order-linked balances/history |
| Sales returns/exchanges | `app/shop-returns.tsx`, `lib/shop-returns.ts` | Stock History → Sales Return → original transaction, product, quantity, condition, optional replacement, reason and confirmation |
| Purchase returns | Same return components | Stock History → Purchase Return → original order, received quantity, settlement and reason; replacements add stock only on receipt |
| Device permissions | `app/master-command.tsx`, `lib/device-permissions.ts` | Settings → Master Command, shown only in an explicitly fictional Master-role exercise; regular-device levels, separate actions and authorization guidance |
| Help/updates | `app/shop-release-ui.tsx` | Help → Take Me There; Check for Updates uses a fixed up-to-date 5.0.0 training result, with no installer/download request |
| Backups | SettingsView | Export backup / Import legacy backup, using fictional training data only |

The other existing source-aligned inventory, stock history, credit, service, order, expense, capital, note, report, theme and import lessons remain available. All 66 previous question IDs and 22 previous lesson IDs are retained. The upgrade adds twelve questions and seven lessons, for 78 questions and 29 lessons. Guided steps declare stable IDs, pages, targets and expected actions. Native dropdowns and text fields keep their normal editing behavior; A correct click or selection advances automatically. One Enter validates the active text field and advances. Reading steps wait for an inline Got it / Continue acknowledgement. Required interactions cannot be skipped. Previous restores the exercise state.

## Deliberate training scope

The focused return exercises use one selected invoice/order line and one optional replacement product. The installed application supports broader multi-line transactions. Master permissions operate on a fictional training till, never on a real device, license or account. Real platform installation/update, printers, scanners, cloud synchronization and authorization are outside this browser simulation. The original CAT PNG and the ten simulator themes are preserved.

Progress uses the versioned `shopdesk-academy:learning:v1` storage key. It preserves completed IDs when revisiting and can resume the current target, including migration of an older validated-but-unconfirmed action without replaying the write. Appearance and language preferences have separate Academy keys. No existing ShopDesk storage key is accessed.
