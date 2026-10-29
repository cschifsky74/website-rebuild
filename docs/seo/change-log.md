# Change log: six specialty "pocket" pages (2026-10-28)

Owner priority: own "porcelain paver patio installer" first, then driveways, lake homes, new construction, pool landscaping and timber wall replacement (Latham model pages skipped by owner decision). Research record: `search-pockets-2026-10-28.md`.

Fact correction first: owner confirmed the Woodbury Shuck project (Poolside on the Hill) used porcelain and The Sustainable Modern (Bukacek) did not. `site.js` story/intro/blurb and the Woodbury hub copy updated accordingly; the porcelain guide cover and proof paragraph now point at Poolside on the Hill instead of the Modern Makeover photo.

New pages (all `kind: service`, data in `src/data/pocketPages.js`, spread into `servicePages`; each has `parent` for a four-level breadcrumb, a photo gallery with lightbox, FAQ schema, lead forms, reviews, related projects and guides):

| URL | Parent | Proof used |
| --- | --- | --- |
| /porcelain-paver-patios-minnesota/ | paver patios | Poolside on the Hill (porcelain deck), $55 to $77 per sq ft and brand list from the 2026 porcelain guide, showroom samples |
| /paver-driveways-minnesota/ | paver patios | Birchwood driveway photo; no driveway price quoted (none approved), factors only |
| /lake-home-landscaping-minnesota/ | landscape design | Birchwood ($400K), Sustainable Modern ($380K, lake setbacks per Bukacek review), Doherty review; general shoreland rule language, hedged by city/county |
| /new-construction-landscaping-minnesota/ | landscape design | From the Ground Up ($75K), Life on the Prairie ($140K), The Crown Jewel ($689K, TVLS design) |
| /pool-landscaping-minnesota/ | swimming pools | Poolside on the Hill, Backyard Barn, Home Resort, Still Waters, Woodbury Poolside, Hamptons; "$75,000 to $150,000" reconciles the existing "from about $75,000" hub figure with the $40K and $230K examples |
| /timber-retaining-wall-replacement-minnesota/ | retaining walls | Doherty review (wood walls and stairs, WI lake home), Birchwood, Dellwood, Sustainable Modern walls; approved wall prices |

Template changes (`src/pages/[slug].astro`): optional `gallery` module reusing the hub mosaic styles and a new shared `Lightbox.astro` (extracted from CityHub, which now imports it); optional `specialties` link-card module (`a.opt-link` CSS); breadcrumb includes the parent service when `page.parent` is set.

Cross-links: nav dropdown gains Porcelain Paver Patios; /services/ gains a Specialties grid (7 cards incl. plunge pools) and the ItemList schema includes them; specialties blocks added to the patios, walls, pools, plunge, design and outdoor living pages; inline links from the patios cost copy (porcelain), walls cost copy (timber), pools cost copy (pool landscaping); generic city hub service copy links porcelain, pool landscaping and timber replacement; guide links added in the paver patio cost guide, retaining wall cost guide (new timber paragraph), pool landscaping guide, walkout guide and timeline guide.

Verification: 96 pages built, 0 em dashes, 0 broken internal links or images, all JSON-LD parses, all six URLs in sitemap.xml, titles 55 to 68 characters. Visual check of the porcelain page (hero, gallery, options, cost box, reviews) and the services Specialties grid in the preview panel.

# Change log: homepage project tile badge removed (2026-10-28)

Owner request: the small type badge in the top-left corner of the six homepage project tiles felt busy. Removed `<div class="cap-type">` from `src/pages/index.astro` and the dead `.tile .cap-type` rule from `global.css`. Tiles keep the project name, city and scope caption. No other page used the badge (confirmed 0 matches in the built output). Build 90 pages, 0 em dashes, staged to `UPLOAD-TO-CLOUDFLARE-v2/`.

# Change log: drainage and pergola pages (organic performers) (2026-10-28)

Owner reports Search Console shows /landscape-drainage-in-lake-elmo/ and /aluminum-pergola-builder-minnesota/ among the top five pages with no paid traffic behind them.

- URLs unchanged on purpose (the "lake-elmo" slug is part of what ranks; renaming would reset it).
- Service template: optional `ctaLabel` and `formHeading` per page; optional `reviewNames`/`reviewsHeading` renders real Google reviews on a service page.
- Drainage page: hero CTA "Get a Free Drainage Assessment", form heading "Get a Free Yard Drainage Assessment", two reviews (Kathy Boudreau's is a drainage job: "fixing the rain drain off issue").
- Pergola page: CTA "Get a Free Pergola Quote", two reviews.
- All 23 city hubs: walls section renamed "Retaining Walls, Grading and Drainage", copy covers standing water, regrading, drain tile and French drains, and the section's guide link now points to the drainage page (23 new internal links). Woodbury hub walls copy gained a drainage paragraph with the link.
- Still needed from Search Console (owner): the query lists for both pages, to tune titles, H1s and FAQs to the exact phrases, and to decide whether a yard-drainage cost guide and a dedicated boulder-wall page are worth writing.

---

# Change log: guide cross-references on service and city pages (2026-10-28)

- Service pages: `relatedGuides` expanded to 4 to 6 per page under a new "Plan Before You Build / {Service} Guides and Costs" heading. Design: full backyard cost, timeline, contractor, walkout, paver cost, pool cost. Patios: paver cost, concrete vs paver, porcelain, fire pit vs fireplace, walkout, timeline. Walls: wall cost, walkout, full backyard, timeline, contractor. Outdoor living: kitchen cost, fire pit vs fireplace, pergola cost, full backyard, pool landscaping, timeline. Pools: pool rules, pool cost, pool landscaping, fiberglass vs vinyl, plunge cost, timeline. Plunge: plunge cost, pool rules, pool landscaping, pool cost, fiberglass vs vinyl. Pergolas: pergola cost, kitchen cost, fire pit vs fireplace, pool landscaping, full backyard. Drainage: walkout, wall cost, full backyard, timeline.
- City hubs: new "Planning Guides for {City} Homeowners" module (6 cards) after the investment block. Woodbury, Lake Elmo, Stillwater and White Bear Lake lead with their own paver cost guide; other cities lead with the Twin Cities paver guide; all include timeline, walkout, full backyard cost, pool rules and the contractor guide. Woodbury also shows the 2025 Woodbury landscape design post.
- Result: every guide except the five 2025 Minneapolis lawn-care/maintenance/trends posts is now linked from at least one service or city page (those five describe services not sold and remain a retire-or-rewrite decision, owner-input item 17).
- Build: 90 pages, 0 broken links, JSON-LD parses, 0 em dashes.

---

# Change log: search-term insights applied (2026-10-28)

Source: Google Ads search terms reports for Oct 14 to 28 (pool and landscaping campaigns). Ad-account changes are the owner's; these are the site changes.

- New service page `/plunge-pools-minnesota/`: Latham Enchantment 9.17 card with dimensions and the approved price range ($85,000 to $130,000 installed), plunge pool sizes and prices block ($150,000 to $260,000 complete), heater and auto cover reasoning, process, options, Still Waters video, related projects (Still Waters, Sustainable Modern, Poolside on the Hill), six FAQs with FAQ schema, lead forms top and bottom (source "Plunge Pools"). Not in the header nav; linked from the pools page, the plunge pool cost guide, the inground pool cost guide and the pool landscaping guide. In the sitemap.
- Pools page: models section retitled "Pool Sizes and Prices: Our Three Most-Installed Fiberglass Pools"; each model card now shows a pool price line from the approved figures (Corinthian 16 around $130,000; Monaco around $130,000 and up; Enchantment $85,000 to $130,000), with the intro stating the price is for the pool itself and the backyard around it is quoted from the design. Meta description now names Latham and "pool sizes and prices". Model card template gained an optional `price` field; `modelsIntro`/`modelsNote` accept HTML.
- Correction: the Hugo (Gather Round the Fire) water feature is a spa, not a plunge pool (confirmed from gallery photos 06 and 13). All site copy now says "spa": homepage video note, outdoor living cost context and video note, outdoor kitchen guide, Hugo city text, both fall-offer landing pages. Hugo removed from the plunge page's slides and related projects. Owner-input item updated as resolved.
- Desktop file `Schifsky-Google-Ads-Negative-Keywords.txt`: suggested negatives (competitor names, maintenance intent, retail/DIY, irrelevant and out-of-area terms) in a paste-ready list, plus a note to check location targeting is "presence".
- Build: 90 pages, 0 broken links, JSON-LD parses, 0 em dashes.

---

# Change log: forms audit, city only (2026-10-28)

Owner rule: every form asks for the city and nothing more specific (no ZIP, no street address).

- LeadForm (service pages, city hubs, guides): ZIP field removed; City is a full-width required field. Shared submit handler no longer validates ZIP; the tracker payload sends `zip: ''` so the lead sheet columns are unchanged.
- Contact page: City added as a required field; validated and sent to the tracker.
- Showroom visit form: City added as a required field; validated and sent to the tracker.
- Careers application: optional "City You Live In" added (not a lead form, so not required).
- Three static landing pages (free-design-consultation, Woodbury and Lake Elmo fall offers): ZIP field and its validation removed; City field now full width (prefilled with the page's city on the offer pages, as before).
- Build: 89 pages, all 13 forms carry a city field, 0 ZIP fields remain, 0 broken links.

---

# Change log: four top-of-funnel guides, contractor guide refresh, Idea Board offer (2026-10-28)

New guides (all with FAQ schema, owner byline, project links, cover photo, shorter `seoTitle` for the <title>):
- `/walkout-basement-backyard-ideas-minnesota/` : walkout and sloped-lot design (terraces, walls, steps, drainage), costs from the approved ranges, examples Birchwood, Modern Revival, Poolside on the Hill, Dellwood, Sustainable Modern.
- `/can-i-put-a-pool-in-my-yard-minnesota-pool-rules/` : permits, fences, setbacks, hard-surface and shoreland limits, wells and septic, energy-code cover and heater rules, survey and fill rules. Every specific number is attributed to a linked city document (Minnetonka and Chanhassen verified by reading the pages; Shorewood, Shoreview, West St. Paul, St. Michael, Brooklyn Center, Inver Grove Heights, Prior Lake, Eureka, Ham Lake from the published handouts as surfaced in search). City table links East Metro cities to their building departments; Mahtomedi permits route through White Bear Lake.
- `/when-to-start-a-landscaping-project-in-minnesota-timeline/` : month-by-month calendar, why winter is design season, construction durations by project type (typical ranges, owner to confirm), planting windows, three real timelines.
- `/landscaping-around-a-pool-in-minnesota/` : zone-4 plant list (grasses, shrubs, perennials, screening) with hardiness zones, what to keep away from the water, deck sizing and materials, sun/wind/shade, privacy, fire and lighting, heater and auto cover. Warranty language on boxwood/arborvitae winter burn matches the warranty document.

Refreshed: `/finding-the-right-landscaping-contractor-in-minneapolis-for-your-dream-outdoor-space/` (URL kept, `updatedDate: 2026-10-28`): rewritten as a Twin Cities hiring guide with MN DLI licensing and red-flag guidance, a question list, what a comparable quote contains, landscaper vs design-build vs landscape architect, FAQ schema.

Idea Board offer: every guide now ends with a lead form headed "Get a Free Idea Board for Your Yard" (LeadForm with new `tag`, `buttonLabel`, `successText` props). Source label "Guide: {slug}", subject "New Lead - Idea Board (guide: {slug})", same Web3Forms, tracker, GA4 and Meta Lead wiring. The in-article "Get a Free Quote" button now scrolls to this form. LeadForm trust line corrected from "5.0 on Google" to "4.9 on Google".

Linking: service pages' related guides updated (design: timeline + contractor; walls: walkout; pools: pool rules + pool landscaping; drainage: walkout). City hub pool and wall sections link the new guides (25+ inbound pages each). Guides hub lists the new four first.

Owner to confirm: construction durations in the timeline guide; that the Idea Board is a service you want to deliver (the form promises a reply within one business day with a link to send photos).

Build: 89 pages, 0 broken links, JSON-LD parses, 0 em dashes.

---

# Change log: unlisted warranty page (2026-10-26)

- `/client-warranty/` : the Schifsky material and craftsmanship warranty, transcribed from the owner's PDF (3 pages) with a download button for the PDF itself (`/client-warranty/Schifsky-Warranty.pdf`).
- Unlisted: not in the header, footer, sitemap or any internal link; `<meta name="robots" content="noindex, nofollow">` on the page, and `public/_headers` sends `X-Robots-Tag: noindex, nofollow` for the page and the PDF on Cloudflare Pages. `Base.astro` gained a `noindex` prop for pages like this.
- Transcription is faithful to the PDF; only typos and punctuation were tidied (e.g. "scratch" to "scratched"). The PDF footer reads "3520 Laverne Ave N." (the site uses Lavern); the owner may want to fix the PDF.

---

# Change log: city hubs, unique content pass (2026-10-22)

Problem measured before this pass: on the 22 auto-generated city hubs only 13 to 19% of the words were unique to the page (Woodbury: 80%).

- Shared service copy trimmed to one sentence per service (photos carry the sections); one review instead of two on generated pages.
- New `src/data/cityLocal.js`: two hand-written "Working in {City}" paragraphs for each of the 22 cities, built from checkable geography (named lakes, neighborhoods, terrain, lot types) and what that means for grading, walls, pools, access and review. No claims of past work in a city; those come only from project records. Rendered under the hero with the city's existing intro paragraphs.
- Computed sentences and FAQs that are true by construction: straight-line distance from the Lake Elmo office, the city's published projects (linked) or the three nearest with miles. Two new FAQs per city ("How far is Schifsky from X?", "Have you built projects in or near X?") added to the visible FAQ and the FAQPage schema (5 questions per city).
- Grammar: "What a Backyard Costs in {City}" avoids "a Edina"; "a project in {City}" wording throughout.
- Fix: The Home Resort story said "Blazer"; now "Blaiser Pools". Video iframe titles name the project's real city.
- Result: unique words per generated page now 31 to 41% (340 to 730 words), Sunfish Lake 55%, Woodbury 83%. The remaining shared text is real site content (project stories that repeat where the same nearest projects apply, cost ranges, promise band, lead form), not filler.
- Build: 84 pages, 0 broken links, JSON-LD parses, 0 em dashes.

---

# Change log: all 23 city pages on the hub format (2026-10-22)

- `src/data/hubs/generic.js` builds a hub for every city that has no hand-written one (Woodbury keeps its own). Same URLs, titles, descriptions and FAQ schema as before.
- Hero: 3-photo crossfade slideshow (local project hero first when the city has one; otherwise Crown Jewel, Woodbury Poolside, Hugo). Only Woodbury has a drone video so far; Hugo, Lake Elmo (Lavern showroom) and Birchwood footage exists in the owner's folders if more video heroes are wanted.
- Intro block under the hero carries each city's unique paragraphs from cities.js (unchanged text), so the per-city content that existed before is still on the page.
- Mosaic: shared highlight reel. Featured: the city's own projects (Lake Elmo 3, Stillwater 2, Woodbury 4, Dellwood/Grant/Hugo/Hudson/Mahtomedi 1 each) or, for the 14 cities without a published project, the three nearest completed projects labeled with their real city and straight-line miles, under a note that says so. Grant's `projectMatch` now includes its published project (Where Lawn Meets Prairie).
- Services: five short location-neutral sections (3D design first) with the portfolio photos; investment: approved ranges with local projects linked as examples when they exist, otherwise the guides; two Google reviews; six nearest city pages as chips; each city's FAQ (unique first question + shared) and the promise band unchanged.
- Lead form now on every city page (`CITY_LEADFORM_ALL = true`); the hero CTA scrolls to it. Source label is "{City} City Page", same tracker/email routing.
- Lightbox on all photos; project/city captions only in the lightbox.
- Build: 84 pages, 0 broken links, JSON-LD parses, 0 em dashes. Duplicate-content note: the shared modules are the same across cities by design (like a site-wide footer); the unique copy per city is the intro, the featured projects and the first FAQ. Priority cities (Lake Elmo, Stillwater, Mahtomedi, Hugo) can get hand-written service sections and local FAQs on the same component when the owner facts arrive.

---

# Change log: two new projects (2026-10-22)

- `/projects/woodbury-poolside-on-the-hill/` "Poolside on the Hill", Woodbury, MN, $120K (owner-supplied; fact panel notes the figure is landscape and hardscape around a pool installed by Blaiser Pools). 9 photos from the Shuck folder (4 drone, 5 ground). Tags: pools, patios, retaining, landscape. Related projects set explicitly.
- `/projects/stillwater-backyard-barn/` "The Backyard Barn", Stillwater, MN, $40K (owner-supplied; fact panel notes "landscape scope around the pool as built"). 11 photos from the Stensland folder. Tags: pools, landscape. Story describes only what the photos show (turf strip, boulder and rock beds, plantings, lawn); deck material and pool installer not stated.
- Project fact panel accepts an optional `scopeNote` that replaces the default "complete project as built" line.
- Woodbury hub: fourth featured project (Poolside on the Hill), pools copy updated, a "landscape around a new pool: from about $75,000" row with the $120K example (figure matches the pools page), FAQ answer updated. Stillwater city page and portfolio pick the new projects up automatically; sitemap includes both.
- Build: 84 pages, 0 broken links, JSON-LD parses, 0 em dashes.

---

# Change log: Woodbury hub, round 5 (2026-10-22)

- Service sections reordered: Landscape Design in 3D (with the Sustainable Modern renderings) now leads, followed by patios, pools, outdoor living, walls.
- Hero lead sentence and the mosaic intro sentence removed (both fields are optional in the component now).

---

# Change log: Woodbury hub, round 4 (2026-10-22)

- Investment block simplified: three range rows (patio, complete backyard, pool plus backyard) with the per-square-foot line removed; the Woodbury examples are now links to their project pages inside each row (Modern Revival $235K, Woodbury Poolside $425K, Life on the Fairway $430K) and the patio row links the Woodbury patio cost guide. The separate row of guide links at the bottom is gone; a one-line financing note remains. Rows stack cleanly on mobile.
- Top mosaic: project/city overlays removed (caption still appears in the lightbox).
- 3D design section now shows two renderings from the owner's design package for The Sustainable Modern (Shakopee) next to the finished pool photo, so visitors see render-to-reality. Files: `/img/projects/shakopee-sustainable-modern/shakopee-sustainable-modern-render-02.jpg` and `-render-03.jpg` (plus `-800` variants), exported from "Bukacek Slideshow v3.pdf". Lightbox captions label them as 3D design renderings.

---

# Change log: Woodbury hub, round 3 (2026-10-22)

- Mobile hero kicker ("Pools · Paver Patios · ...") was clipped on the right because the global mobile rule sets it to `white-space:nowrap`; the hub now lets it wrap.
- Service sections lead with the photos on every screen size: one large 16:9 photo, two smaller below, then the heading and copy (desktop: photos left, text right). The first-photo span rule now targets the link wrapper, which is why the live round-2 build showed three equal tiles.
- Project/city caption overlays removed from service photos; the caption still appears in the lightbox.
- Services intro no longer says the photos are Woodbury lots.

---

# Change log: Woodbury hub, round 2 (2026-10-22, after owner's mobile review)

- Mobile hero text overflowed the screen (the hero section is a flex container and its `.wrap` sized to content). Fixed with `width:100%` on the wrap; buttons go full-width under 600 px. Hero eyebrow and lead shortened.
- Opening mosaic is now a shared highlight reel (`src/data/highlights.js`, 12 best photos across 10 projects) instead of Woodbury-only tiles, so the same layout works for cities with few or no local photos. Every tile is captioned with its real project and city, and alt text names the city, so no photo is implied to be in Woodbury.
- Featured project stories: the two paragraphs moved into a collapsed "About this project" panel (HTML `<details>`, still in the page source for search engines) under a one-line tagline. "Drone footage in the header" removed from the Woodbury Poolside kicker.
- Lightbox: every photo on the page (38) opens full size with caption, "View project" link, prev/next, swipe, Esc and tap-outside to close. Cmd/Ctrl-click still goes to the project page.
- Service sections now use the strongest photos across cities (Stillwater, Maple Plain, Lake Elmo, Shakopee, Hugo, Birchwood Village, Dellwood plus the Woodbury ones), each with a project · city caption on hover (always visible on touch screens). Copy adjusted so the text matches the photos.
- SEO note for the owner: the local text that matters (H1, intro, three Woodbury project stories, service sections, investment, FAQs) is unchanged in the HTML; the reel swap trades 12 Woodbury alt texts for 12 captioned portfolio photos, a small effect, and the collapsed paragraphs are still indexed.

---

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
