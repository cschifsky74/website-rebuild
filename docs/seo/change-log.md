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
