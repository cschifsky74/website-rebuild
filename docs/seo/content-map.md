# Content map: one destination per intent

Principle: every search intent has exactly one primary page. Supporting pages link up to it; it links down to its proof (projects) and sideways to its planning guide. No new city/service combination pages were created in this pass (publication gate in `implementation-plan.md` not met for any candidate).

## Primary destinations

| Intent | Primary page | Proof (projects) | Planning guide(s) |
| --- | --- | --- | --- |
| Hire a Twin Cities landscape design-build firm | `/` and `/custom-landscape-design/` | Crown Jewel, Hamptons, Scandia, Hugo, Grant, Woodbury Poolside | Full backyard cost; paver patio cost |
| Paver patio installation | `/paver-patios/` | Stillwater (Room to Gather), Hamptons, Birchwood, Scandia | Paver patio cost; concrete vs paver; porcelain pavers; 4 suburb patio cost guides |
| Retaining walls | `/retaining-walls-twin-cities/` | Birchwood Village, Dellwood, Scandia | Retaining wall cost; full backyard cost |
| Outdoor kitchens, fire features, outdoor rooms | `/outdoor-living/` | Hugo, Modern Revival, Hamptons, Crown Jewel | Outdoor kitchen cost; fire pit vs fireplace; full backyard cost |
| Aluminum / louvered pergola | `/aluminum-pergola-builder-minnesota/` | Life on the Fairway, Woodbury Poolside, Hugo | Pergola cost |
| Yard drainage and grading | `/landscape-drainage-in-lake-elmo/` (URL kept; page covers the metro) | From the Ground Up, Birchwood, Scandia, Grant | Retaining wall cost (slope context) |
| Pool plus backyard | `/fiberglass-pools/` (URL kept; covers fiberglass and vinyl) | Sustainable Modern, Hamptons, Fairway, Still Waters, Home Resort, Modern on the Green | Inground pool cost; plunge pool cost; fiberglass vs vinyl |
| "Landscapers in {city}" | one city page per community (23) | local projects where they exist, otherwise nearest completed projects labeled with their real city | n/a |
| "How much does X cost in MN" | the matching guide in `/blog/` | linked inline from each guide | n/a |

## Linking rules implemented in templates

- Service page → related projects (`relatedProjects`), planning guides (`relatedGuides`), priority city pages (`priorityCities`), cost context block (`costContext`), breadcrumbs.
- City page → services grid, verified local projects (`projectMatch` on project municipality), or nearest projects with miles and real city when no local project exists, breadcrumbs to the service-area directory on `/services/#areas`.
- Project page → services performed (from category tags), city page only when a page for that exact city exists (Birchwood Village links to the White Bear Lake *area* page with that label), two planning guides, similar projects, breadcrumbs.
- Guide → inline links to the matching service, city pages and example projects; breadcrumbs.
- Hub pages: `/services/` links all 7 services and all 23 city pages; `/portfolio/` links all 18 projects with crawlable anchors (filters are progressive enhancement).

## Overlaps noted, not consolidated (needs Search Console data)

- Four suburb paver-cost guides (Woodbury, Lake Elmo, Stillwater, White Bear Lake) vs. the Twin Cities paver cost guide. They carry the same price range by design (no invented local premiums). Keep for now; revisit with query data.
- Five 2025 "Minneapolis" guides (lawn care, maintenance, full-service, trends, contractor) describe services not actively sold. Candidates for rewrite or 301 to a newer guide once traffic is known.
- `/landscape-drainage-in-lake-elmo/` slug is narrower than its content. Preserved; any migration needs a redirect map and monitoring.
