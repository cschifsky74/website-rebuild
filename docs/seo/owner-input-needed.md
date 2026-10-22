# Owner input needed

Facts that would unlock the next content batch. Nothing below has been guessed or rendered on the site. Each item names the page it affects. Answer in any format; a few words per line is enough.

## A. Business policies (affects /custom-landscape-design/, all service FAQs, landing pages)

1. Design fee: amount or range, how many revision rounds it includes, and whether it is credited 100% to the install. The site and landing pages now say "credited toward your installation" (the "100%" was removed 2026-10-21 pending your confirmation; one word restores it).
2. Minimum project size you want to quote (if any).
3. Workmanship warranty: length and what it covers. Several pages say "workmanship warranty" with no term.
4. Typical lead time from signed design agreement to construction start, by season.
5. Who is the day-to-day point of contact once a job starts (title), so the "dedicated project leader" language is accurate.
5a. Pergola: which brand and model do you install (the page now defers to "the manufacturer's care guide" and "published load rating"; naming the product lets us cite the real numbers).
5b. Drainage-only jobs: do you want those leads? If yes, we add "Drainage / grading" to the project-type dropdown on the forms and route it through the lead sheet.
6. Financing: confirm Lyon Financial is still the partner and whether "no equity or appraisals required" is still their offer.

## B. Project facts for case studies (affects /projects/... pages)

For each project, anything you can confirm from job records. Leave blank where unknown; blanks stay off the site.

| Project | Need |
| --- | --- |
| Room to Gather (Stillwater) | patio square footage, paver product/pattern, stoop scope, what the $45K included, build duration, year |
| Gather Round the Fire (Hugo) | is the water feature a plunge pool or a spa/hot tub? (site now says "plunge pool" everywhere; if it is a pool, the project should also be tagged as a pool project); confirm stone fireplace, outdoor kitchen (grill + kamado), pergola, water sphere; year; any homeowner quote we may publish |
| Terraced on White Bear Lake (Birchwood Village) | was the wall engineered / permitted; wall heights; stone type; driveway material; year |
| Life on the Fairway (Woodbury) | pool type (fiberglass/vinyl), pergola product, putting green scope, year |
| Woodbury Poolside | pool type, pergola product, cabana scope |
| The Sustainable Modern (Shakopee) | pool type, paver product (porcelain?), wall system, year completed |
| Still Waters (Mahtomedi) | pool size (the plunge pool guide calls it compact; confirm), year |
| Carved in Stone (Dellwood) | wall system (block, boulder, both), length/height, year |
| From the Ground Up (Lake Elmo) | does this project include drainage/grading work? It is currently cited on the drainage page because of the new-construction grading shown in photos |
| Poolside on the Hill (Woodbury, Shuck) | confirm $120K is the landscape/hardscape scope (pool by Blaiser excluded), year, auto-cover yes/no, lighting included |
| The Backyard Barn (Stillwater, Stensland) | confirm what the $40K covered (deck? turf? plantings?), who built the pool deck, year |
| All projects | one line per gallery photo describing what is shown (we currently use "view N of M" alt text) |

## C. City pages (affects 23 /landscape-design-build-services-in-... pages)

7. For Lake Elmo, Woodbury, Stillwater, White Bear Lake, Mahtomedi, Hugo, Grant, Dellwood: one or two genuine site considerations you run into there (soils, lakeshore review, HOA review, access), with no regulatory specifics unless you can point to the city source.
8. Any approved local testimonials by city.
9. Which west-metro and Wisconsin cities you actively want to sell in next season. Pages you do not want to pursue can be de-emphasized.

## D. Accounts and external tasks

10. GoDaddy DNS: done 2026-10-21. The bare domain now 301s to `https://www.schifskycompanies.com` (root only). Decide how to preserve paths on the bare domain (options in `apex-domain-redirect-2026-10-21.md`) and shut down the old DigitalOcean droplet if it is still billed.
11. Google Search Console: add me as a user (or export Performance and Pages reports for the last 3 and 12 months). Needed to decide the guide consolidations in `content-map.md`.
12. Google Business Profile: confirm categories, hours (site says Mon-Fri 7am-5pm), service list, and that the website link is `https://www.schifskycompanies.com/`.
13. Web3Forms dashboard: confirm the destination address for the access key is `support@schifskycompanies.com`; check the submissions log if any lead emails are still missing.
14. Zapier: turn off the old "Contact Form Submission" Zap (errored daily since Sept 27; no longer used).
15. Review process: who asks for Google reviews and when; we will not fabricate or incentivize.

## E. Decisions

16. Years in business now computes from the 1989 founding year at build time (currently 37). Confirm 1989 is the founding year you want cited.
17. Keep or retire the five 2025 "Minneapolis" guides (lawn care, maintenance, full-service, trends, contractor)? They describe services the site no longer sells.
18. Should the drainage page move from `/landscape-drainage-in-lake-elmo/` to a metro-wide slug? Not recommended until Search Console shows what it ranks for.
