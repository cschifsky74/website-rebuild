# Change log: Woodbury hub (2026-10-22)

Target: `/landscape-design-build-services-in-woodbury-mn/` (URL, title and canonical unchanged). Staged, not live until pushed.

- New picture-first city hub rendered by `src/components/CityHub.astro` when a city record carries `hub` (data in `src/data/hubs/woodbury.js`). Other 22 city pages unchanged.
- Hero: full-bleed drone video of Woodbury Poolside cut from the owner's DJI clips (Aug 26, 2026), three shots with crossfades, 19 s loop. Files: `/video/woodbury-hero-1080.mp4` (10.5 MB), `-720.mp4` (4.2 MB), `-540.mp4` (2.3 MB, Save-Data / slow connections), poster `/img/woodbury-hero-poster.jpg`. Reduced-motion users get the poster.
- Photo mosaic: 12 tiles from the three Woodbury galleries, each linking to its project; descriptive alt text.
- Three project features: Life on the Fairway (YouTube PCdiVuy38Tk), The Modern Revival (YouTube 9SEenS3GOIQ), Woodbury Poolside (photos). Copy limited to the published project stories and what the galleries show; investment labeled as complete-project totals.
- Five service sections with Woodbury photos: patios/hardscape, pools, outdoor living + pergolas, walls + grading, 3D design; each links to its service page and a guide. Retaining walls in Woodbury are evidenced by The Modern Revival gallery (block walls, photos 06 to 09).
- Investment block (approved ranges, three Woodbury totals, consultation/design fee/quote steps, four guide links), two Google reviews, nearby-area chips, Woodbury-specific FAQ (7, in FAQPage JSON-LD).
- Removed the earlier claim of work "across Prestwick, Stonemill Farms, Dancing Waters and Eagle Valley"; only Prestwick is documented.
- Page: about 2,200 words, 39 images, 2 embedded videos plus the hero video; 0 broken links; JSON-LD parses; sitemap lastmod 2026-10-22; og:image is the hero poster.
- Mobile: layout verified by CSS review only (the sandbox cannot run a headless browser and the preview panel cannot emulate 390 px). Check the live page on a phone after pushing; the hero crops the 16:9 drone video to the centre on portrait screens.

---

# Change log: nav tweak (2026-10-22)

- Careers removed from the header navigation. A "Join Our Team" band (both open roles plus a "See Open Positions & Apply" button) added to the bottom of /contact/ with anchor `#careers`. The /careers/ page, its URL, form and sitemap entry are unchanged; it is still linked from /contact/ so it is not orphaned. Open roles now live in `src/data/careers.js` and feed both pages.

---

# Change log: cleanup batch 2 (2026-10-21, afternoon)

Status: built and staged in `website-rebuild/UPLOAD-TO-CLOUDFLARE-v2/`. Not published until the owner commits and pushes. Responds to the external review of Batch 1 (sections 3, 5 and 9 of that document). No URLs, redirects, analytics IDs or forms changed.

## Copy corrections (overclaims)

| Page | Before | After |
| --- | --- | --- |
| /paver-patios/ | "finish the edges so nothing shifts... still looks new after a decade" | edge restraint keeps the field tight; holds up well through many winters; settled pavers can be reset |
| /paver-patios/ | "the difference between a patio you repair in a few years and one you simply enjoy" | soil, grade and drainage play a part; movable pavers can be reset without replacing the patio |
| /paver-patios/ FAQ | "Will it heave or crack? Not when it's built right." | designed to tolerate freeze-thaw; no Minnesota surface is immune to ground movement; pavers can be lifted and reset (visible text and FAQ JSON-LD share the same data) |
| /paver-patios/ | permeable pavers "ideal for low spots" | good where water must be managed on site and the soil below drains well enough |
| /aluminum-pergola-builder-minnesota/ | "Zero Maintenance", "maintenance-free" (5 places), "virtually no upkeep" | "low maintenance"; occasional wash, keep gutters clear, follow the manufacturer's care guide |
| /aluminum-pergola-builder-minnesota/ FAQ | snow loads: "Yes... rated to handle our winters" | ratings vary by brand, model, span and configuration; we show the published rating for the model before purchase |
| /aluminum-pergola-builder-minnesota/ FAQ | louvers in winter: "They do. The louvers operate year-round" | motors are year-round, but ice can lock louvers; do not force frozen louvers; model-specific winter guidance at handoff |
| /custom-landscape-design/ | "getting it exactly right while changes are still free" | changes are a few clicks on screen instead of a change order in the ground |
| /custom-landscape-design/ FAQ | design fee "credited 100% toward your installation" | consultation free; design fee explained with what it covers, revision rounds and how it is credited, before commitment (the "100%" figure is an owner-input item) |
| /free-design-consultation/, both fall-offer LPs | "credited 100%" | "credited toward your installation" (same reason) |
| /fiberglass-pools/ | "finished, cohesive space from day one", "finished and beautiful the day the water goes in" | landscape planned and scheduled with the pool rather than left for later |
| /fiberglass-pools/ Monaco | "deep end built for a diving board" | 8 ft deep end; diving-board use depends on shell, board and local code, confirmed per configuration (tag "Diving pool" kept per owner) |
| /fiberglass-pools/ | "Every shell comes with a lifetime structural warranty" | Latham's limited lifetime structural warranty; written terms provided with the proposal |
| /retaining-walls-twin-cities/ FAQ | "walls over roughly four feet typically need engineering and a permit" | depends on the city; code height usually measured from the bottom of the footing, not the priced face; surcharge loads can trigger engineering lower |
| /landscape-drainage-in-lake-elmo/ | "one of the highest-return projects... can prevent a flooded basement and protect the single biggest investment you own" | modest project compared with repairing water damage; protects lawn, plantings, patios and walls |
| /landscape-drainage-in-lake-elmo/ | "verify the system carries water away cleanly - even in a heavy rain" | check that water moves as designed at the next good rain |
| Pool cost guide, plunge pool guide | "the day the water goes in, the whole backyard is finished" | planned and scheduled with the pool instead of left for a later year |

## Consistency fixes

- Hugo (Gather Round the Fire): "plunge spa" on /outdoor-living/, the outdoor kitchen guide and both fall-offer LPs changed to "plunge pool" to match the homepage and the project video note. Which term is correct is an owner question (see owner-input B). Project tags unchanged pending that answer.
- Birchwood Village (Terraced on White Bear Lake): type label now "Retaining walls, stairs, driveway & landscape design" and badge "Retaining walls & driveway" instead of the tag-derived "Patio & retaining walls". The hardscape service link stays (driveway). Implemented as optional `typeLabel` / `shortType` overrides on the project record.
- Related content: projects accept explicit `related` and `guides` overrides (used on Birchwood: Dellwood, Sustainable Modern, Modern Revival; and Hugo: outdoor-living-led projects plus the kitchen and fire-feature guides). The automatic fallback now ranks by the project's principal service, then shared tags, then city, instead of returning the first three category matches.
- Drainage page: the retaining-wall cost guide card is removed (no drainage guide exists; the section is omitted rather than filled with a weak match). "From the Ground Up" stays as the related project because its story documents grading work.
- City pages without a local project (Edina and others): the "We have not published a project in X yet" sentence replaced with a neutral introduction; mileage is kept and labeled "straight-line from city center to city center".

## Reviews

- The Featurable widget renders only a rating badge (4.9, 78 reviews on 2026-10-21) and a hidden JSON block; no review text was visible on the homepage or /reviews/. Added `src/data/reviews.js` (10 Google reviews, verbatim, captured from the widget feed) and `ReviewCards.astro`. Homepage shows three excerpted cards (pool backyard, patio and fire pit, retaining walls); /reviews/ shows all ten in full. The live badge remains under the cards. One em dash in a customer's review was rendered as a comma to keep the site's no-em-dash rule; wording untouched.
- No review or rating schema added by the site; the widget keeps its own.
- The "Leave a Google Review" button on /reviews/ pointed at `placeid=REPLACE_WITH_PLACE_ID` (a dead link, live). Fixed with the verified place ID `ChIJJzmb29O3slIRGJKwUg-CdSI` (confirmed on Google Maps as Schifsky Companies, 3520 Lavern Ave N).

## Verification (2026-10-21 build)

- 82 pages, no errors; 0 em dashes; 0 broken internal links; 150 JSON-LD blocks parse.
- Stale phrases ("credited 100%", "plunge spa", "Zero Maintenance", "looks new after a decade", "highest-return", "day the water goes in"): 0 in built HTML.
- Pergola FAQ wording identical in visible HTML and FAQ JSON-LD.

## Rollback

All changes are in source. Check out the previous commit of `UPLOAD-TO-CLOUDFLARE-v2/` and push.

---

# Change log: SEO implementation batch 1 (2026-10-21)

Status: built and staged in `website-rebuild/UPLOAD-TO-CLOUDFLARE-v2/`. Not published; goes live when the owner commits and pushes. No URLs removed, no redirects changed, no analytics IDs changed, all forms unchanged.

## Files changed (source)

| File | Change |
| --- | --- |
| `src/layouts/Base.astro` | `og:image` + `twitter:image` on every page (page image or `/img/og-default.jpg`), `og:type` prop |
| `src/components/Breadcrumbs.astro` (new) | visible breadcrumb nav + BreadcrumbList JSON-LD |
| `src/data/images.js` (new) | `srcsetFor()` helper: 800w variant + 1600w original for project photos |
| `src/data/text.js` (new) | `metaDesc()` trims long descriptions at a sentence boundary for the meta tag only |
| `src/data/site.js` | `yearsInBusiness` computed from 1989; `updated` dates on projects; `CAT_SERVICE`, `CAT_GUIDE`, `CITY_PAGE` relationship maps; `projectTypeLabel()` / `projectShortType()`; `pergolas` category (Fairway, Hugo, Woodbury Poolside); Dellwood story softened ("hold up for decades" removed) |
| `src/data/servicePages.js` | `relatedGuides`, `priorityCities`, `costContext` (approved figures only) on 6 service pages; patio cost FAQ reconciled with the guide; drainage lead/body rewritten symptom-first (no new solution claims); absolute longevity wording softened; years computed; `updated` dates; retaining walls title shortened |
| `src/data/cities.js` | titles shortened (71 to 79 chars → about 50); descriptions under 160; `coords` for nearby-project distance; shared cost FAQ now cites approved Twin Cities ranges with a guide link; years computed; `updated` dates |
| `src/pages/[slug].astro` | breadcrumbs on service/city/guide; service cost-context block, planning-guide cards, priority-city links; city nearby-projects module (real city + miles) when no local project; srcset/alt on all project tiles; og image per page kind |
| `src/pages/projects/[slug].astro` | descriptive subtitle and shorter title; fact panel (location, type, investment, scope note); services-on-this-project links; city page card (Birchwood → White Bear Lake *area*, labeled); two planning guides; similar projects; breadcrumbs; alt text no longer "photo N"; srcset; `fetchpriority="high"` on hero |
| `src/pages/index.astro` | service blurbs under the 7 service links; homepage grid now a balanced set (estate pool, slope/walls, outdoor living, patio-only, pool + pergola, modern full backyard) with type badges; dynamic years; srcset |
| `src/pages/services.astro` | service-area directory (`#areas`) listing all 23 city pages |
| `src/pages/portfolio.astro`, `about.astro`, `reviews.astro`, `financing.astro`, `showroom.astro`, `careers.astro`, `blog/index.astro` | srcset/alt or meta description trimming; dynamic years |
| `src/pages/sitemap.xml.js` | real `lastmod` (guide dates, `updated` fields); no blanket build timestamp; core routes listed without lastmod |
| `public/robots.txt` | explicit AdsBot-Google / AdsBot-Google-Mobile allow (staged earlier) |
| `public/free-design-consultation/index.html` | schema entity aligned to `LandscapingBusiness`; dead WordPress logo URL replaced |
| `public/img/projects/**/*-800.jpg` (184 files, 19 MB) | responsive variants |
| `public/img/og-default.jpg` | 1200x630 social default |

## Verification (2026-10-21 build)

- Build: 82 pages, no errors.
- Internal links: 0 broken (all `href` targets exist or are covered by `_redirects`).
- Orphans: none; every indexable page is linked from at least one other page.
- Sitemap: 81 URLs = 81 indexable pages; 70 with real lastmod.
- noindex: only `/admin/` and the three paid landing pages, unchanged.
- JSON-LD: all blocks parse; BreadcrumbList on 70 pages (services, cities, projects, guides); no rating/review markup added.
- Meta: 0 descriptions over 165 chars on indexable pages; titles under 70 except guide headlines (question-form titles kept on purpose for answer-engine citation; see note).
- Em dashes: 0 in built HTML.
- Tracking: GA4, Google Ads, Meta Pixel, CallRail present on sampled pages; forms unchanged.
- Legacy stub folders (`boulder-retaining-walls-lake-elmo`, `snow-and-ice-removal-services`, `projects/woodbury-modern`, `projects/woodbury-teagarden-pool`) removed from the deploy folder; their 301s remain in `_redirects`.

## Not done / blocked (see owner-input-needed.md)

- Apex domain 503 (GoDaddy DNS, owner).
- Search Console inspection and query data (no access).
- Case-study narrative expansion for Stillwater, Hugo, Birchwood, Fairway (needs project facts).
- Per-photo alt text (needs captions).
- City-specific site considerations and testimonials.
- Design fee / warranty / lead-time policy language.

## Notes

- Guide titles such as "How Much Does a Retaining Wall Cost in the Twin Cities? [2026 Data]" exceed 70 characters. They are left as-is: the full question is the ranking target and is already being quoted by answer engines; the brand suffix is dropped on long headlines to keep them tighter.
- Nearby-project modules show the closest completed projects by straight-line distance with the real city and approximate miles. They never present a project as located in the page's city.

## Rollback

All changes are in source. To roll back, check out the previous commit of `UPLOAD-TO-CLOUDFLARE-v2/` in the `website-rebuild` repo and push; no database or external configuration changed.
