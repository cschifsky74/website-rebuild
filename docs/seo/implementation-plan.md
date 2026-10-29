# Schifsky Companies SEO implementation plan

Started 2026-10-21 against the live Astro 4 repository (`src/`), built to `UPLOAD-TO-CLOUDFLARE-v2/` in the `website-rebuild` GitHub repo, which Cloudflare Pages publishes on push. Nothing in this plan is published until the owner commits and pushes.

Baseline (2026-10-21 build): 82 generated pages + 3 static landing pages + CMS stub. 7 service pages, 23 city pages, 18 project pages, 22 guides, 11 core pages. Sitemap lists 81 URLs. 4 pages are intentionally noindex (3 paid landing pages, /admin/).

## Status key

- confirmed: verified in current source or current rendered site
- older-retrieval: seen only in an older public copy, no longer true in source
- hypothesis: plausible, not verified
- blocked: needs account access or owner facts

## Phase 0: inventory (done)

| ID | Task | Status |
| --- | --- | --- |
| P0-1 | Page inventory from built output (`page-inventory.csv`) | done |
| P0-2 | Content map (`content-map.md`) | done |
| P0-3 | Owner input list (`owner-input-needed.md`) | done, living document |
| P0-4 | Integrations inventory: GA4 G-HG3SZ6DEMB, Google Ads AW-791054221, CallRail swap.js, Meta Pixel, Web3Forms (key is public client-side by design), Apps Script lead tracker | confirmed, unchanged |

Findings from the audit prompt, re-checked against source:

- 651-381-4233 in CTAs: older-retrieval. Current source uses 651-439-0603 everywhere; CallRail swaps numbers client-side. No change needed.
- Snow removal pages: older-retrieval. Removed earlier; 301s in `_redirects`.
- 403s / verification screen on direct fetches: hypothesis about the audit environment. Rendered site returns 200 to anonymous fetches on www; there is no Cloudflare zone, so no Bot Fight Mode exists to block AdsBot/Googlebot. Confirmed separately: the apex `schifskycompanies.com` A record points at a decommissioned server returning 503 (owner task, GoDaddy DNS).
- Pools page roles (Blaiser / Legacy): confirmed accurate in source, preserved.
- Thin project narratives (Stillwater, Hugo, Birchwood): confirmed. Fact panels and service/city links added from verified data; richer case-study narrative needs owner facts.
- City pages share FAQ language: confirmed. Shared cost/design FAQs kept; local project evidence module added; per-city questions remain an owner-input item.
- Patio service FAQ deferred on cost while guides gave figures: confirmed, reconciled to the approved $45 to $62/sq ft range.

## Phase 1: technical

| ID | Task | Status |
| --- | --- | --- |
| P1-1 | Sitemap lastmod: replace blanket build-date with real dates (guides: pubDate/updatedDate; other pages: explicit `updated` field or omitted) | done |
| P1-2 | og:image on every page (page image or site default) | done |
| P1-3 | Title length: city titles were 71 to 79 chars; shortened to under 60 | done |
| P1-4 | Meta descriptions over 160 chars trimmed where templated | done |
| P1-5 | Visible breadcrumbs + BreadcrumbList on service, city, project, guide pages | done |
| P1-6 | Project gallery alt text: replaced "photo N" with project type + city wording; per-photo captions remain owner input | done |
| P1-7 | Responsive images: 800px variants + srcset for project tiles and galleries (full-size kept for lightbox) | done |
| P1-8 | LCP: hero images not lazy-loaded; galleries, videos lazy | confirmed |
| P1-9 | Remove stale legacy stub folders from the deploy directory (redirects already cover them) | done |
| P1-10 | robots.txt explicit AdsBot allow (already staged earlier) | done |
| P1-11 | Apex domain 503 (old server) | done for root (GoDaddy 301 forwarding, HTTP + HTTPS); path/query preservation open, see `apex-domain-redirect-2026-10-21.md` |
| P1-12 | Search Console live inspection | blocked, no access |
| P1-13 | Duplicate business identity in LP schema (GeneralContractor vs site LandscapingBusiness) | done, aligned |

## Phase 2: structure and links

| ID | Task | Status |
| --- | --- | --- |
| P2-1 | Service pages: related guides module (data-driven `relatedGuides`) | done |
| P2-2 | Service pages: priority city links module | done |
| P2-3 | City pages: verified local projects (matched on project municipality) and clearly labeled nearby projects (by distance, with real city named) | done |
| P2-4 | Project pages: "Services on this project" links from category tags, city page link, related guide | done |
| P2-5 | Guides: audited links to matching service pages | confirmed |
| P2-6 | Orphan/broken link check in build verification | done |

## Phase 3 and 4: services and case studies

| ID | Task | Status |
| --- | --- | --- |
| P3-1 | Paver patios: cost FAQ reconciled with approved guide figures, links to guide and Stillwater project | done |
| P3-2 | Retaining walls: cost drivers section from approved figures (block $85 to $120, boulder $65 to $85, natural stone $120+ per sq ft of face) | done |
| P3-3 | Outdoor living: investment examples with scope boundaries (Hugo $295K full backyard, Modern Revival $235K) | done |
| P3-4 | Pergolas: link to cost guide; product claims limited to existing approved copy | done |
| P3-5 | Drainage: symptom-led intro added; solution list limited to existing approved copy | done |
| P3-6 | Pools: scope-boundary note (pool proposal vs. landscape scope) | done |
| P3-7 | Landscape design: design fee / credit language | softened 2026-10-21 (consultation free, fee explained before commitment); exact fee/credit/revision terms still owner input |
| P4-1 | All 18 projects: descriptive subtitle, fact panel (city, type, investment, scope), services performed, city link | done |
| P4-2 | Priority case studies (Stillwater, Hugo, Birchwood, Fairway): narrative expansion | blocked, owner facts (see owner-input) |

## Phase 5 and 6: cities and guides

| ID | Task | Status |
| --- | --- | --- |
| P5-1 | Priority cities (Lake Elmo, Woodbury, Stillwater, White Bear Lake, Mahtomedi, Hugo, Grant, Dellwood): local project evidence rendered | done |
| P5-2 | Cities with no local project: nearby projects labeled with actual city | done |
| P5-3 | City-specific FAQs and site considerations | blocked, owner input |
| P5-4 | New city/service pages | none created (gate not met) |
| P6-1 | Guide price reconciliation against approved figures | confirmed consistent |
| P6-2 | Guides link to service pages and real examples | confirmed |

## Cleanup batch 2 (2026-10-21, from external review)

| ID | Task | Status |
| --- | --- | --- |
| R-A02 | Overclaim cleanup on patio, pergola, design, pools, walls, drainage, two pool guides, three LPs | done, see change-log |
| R-A02 | Hugo pool/spa terminology unified; Birchwood label corrected | done (owner confirms Hugo) |
| R-A03 | Explicit related/guide overrides; principal-service fallback; drainage guide card removed | done |
| R-A03 | Drainage form option | blocked, owner decision |
| R-9 | Reviews: static review text on homepage and /reviews/; dead write-review link fixed with verified place ID | done |
| R-5 | Edina and other no-local-project pages: neutral intro, labeled mileage | done |
| R-B02 | Woodbury hub: video hero, photo mosaic, 3 project features with video, 5 service sections, investment, local FAQ | done 2026-10-22 (CityHub.astro, hubs/woodbury.js) |
| R-B03 | All 23 city pages converted to the hub component (generic builder); Lake Elmo and Stillwater hand-written sections still to come | done 2026-10-22 (generic), hand-written next |
| R-C01 | Six specialty pocket pages (porcelain first, then driveways, lake, new construction, pool landscaping, timber walls) with gallery, lightbox, parent breadcrumb, specialties cross-links, services hub grid | done 2026-10-28, see change-log and search-pockets-2026-10-28.md |
| R-C02 | Validate pocket phrases in Search Console and Keyword Planner after 4 to 6 weeks of indexing; add proof photos per owner-input-needed | pending, owner |

## Phase 7: measurement

Owner / external checklist in `owner-input-needed.md`. No analytics IDs changed.
