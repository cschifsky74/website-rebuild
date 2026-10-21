# Apex domain fix record: schifskycompanies.com (2026-10-21)

Scope: make the bare domain `schifskycompanies.com` reachable and send it to `https://www.schifskycompanies.com`. Nameservers unchanged (ns23/ns24.domaincontrol.com). No email, verification or subdomain records touched.

## Root cause

The apex `A` record pointed at `146.190.242.206`, a decommissioned DigitalOcean server. Its nginx was still answering but returned `503 Service Unavailable` on every request, and it had no valid certificate for the domain, so `https://schifskycompanies.com` failed the TLS handshake. `www` was never affected (CNAME to `website-rebuild.pages.dev`, Cloudflare Pages, 200). Google Ads checks the exact final URL in the ad; any ad or link using the bare domain hit the dead server, which is the "website unavailable" report.

## DNS baseline before the change (authoritative, via dns.google)

| Host | Type | TTL | Value |
| --- | --- | --- | --- |
| @ | A | 600 | 146.190.242.206 (dead DigitalOcean nginx, 503) |
| www | CNAME | 600 | website-rebuild.pages.dev |
| @ | MX | 3600 | 0 mx1-usg2.ppe-hosted.com, 0 mx2-usg2.ppe-hosted.com, 0 mx3-usg2.ppe-hosted.com |
| @ | TXT | 3600 | v=spf1 include:_spf-usg2.ppe-hosted.com include:secureserver.net ~all |
| @ | TXT | 3600 | NETORGFT4333934.onmicrosoft.com |
| @ | TXT | 3600 | google-site-verification=gXgVJ8_oPyS1uB3ekvD8O-wTax4iIt0jM9W4exjMi7o |
| @ | TXT | 3600 | google-site-verification=RFUHDaGk6s4M_EKOSerpH9e-4AZCxT416FBNW56Ev8c |
| _dmarc | TXT | 3600 | v=DMARC1; p=none; |
| @ | NS | 3600 | ns23.domaincontrol.com, ns24.domaincontrol.com |
| lp | A | 600 | 35.215.92.170 |
| autodiscover | CNAME | 3600 | autodiscover.outlook.com |
| email | CNAME | 3600 | email.secureserver.net |
| lyncdiscover | CNAME | 3600 | webdir.online.lync.com |
| msoid | CNAME | 3600 | clientconfig.microsoftonline-p.net |
| pay | CNAME | 3600 | paylinks.commerce.godaddy.com |
| sip | CNAME | 3600 | sipdir.online.lync.com |
| tracking | CNAME | 3600 | api.elasticemail.com |
| _domainconnect | CNAME | 3600 | _domainconnect.gd.domaincontrol.com |
| _sip._tls | SRV | 3600 | 100 1 443 sipdir.online.lync.com |
| _sipfederationtls._tcp | SRV | 3600 | 100 1 5061 sipfed.online.lync.com |

## Change made (one setting)

GoDaddy > Domain Portfolio > schifskycompanies.com > DNS > Forwarding > Domain > Add Forwarding:

- Protocol: `https://`
- Destination: `www.schifskycompanies.com`
- Forward type: Permanent (301)
- GoDaddy applies its own certificate to the apex for HTTPS forwarding (took under 2 hours to activate).

Effect on DNS: GoDaddy replaced the single apex `A` record with its forwarding service addresses. After the change the apex resolves to `15.197.225.128` and `3.33.251.168` (TTL 3600; GoDaddy manages these and may rotate them). Every other record above re-queried identical after the change.

## Live verification (httpstatus.io plus a real Chrome load, 2026-10-21 ~17:09 UTC)

| URL | Before | After |
| --- | --- | --- |
| http://schifskycompanies.com/ | 503 | 301 -> https://www.schifskycompanies.com -> 200 |
| https://schifskycompanies.com/ | TLS error | 301 -> https://www.schifskycompanies.com -> 200 (valid cert, no browser warning) |
| http://schifskycompanies.com/paver-patios/ | 503 | 404 (GoDaddy forwarder, `Server: awselb/2.0`) |
| https://schifskycompanies.com/paver-patios/?utm_source=test | TLS error | 404 |
| http://schifskycompanies.com/?x=1 | 503 | 301 -> https://www.schifskycompanies.com (query string dropped) |
| http://www.schifskycompanies.com/ | 301 -> 200 | 301 -> 200 (unchanged) |
| https://www.schifskycompanies.com/ | 200 | 200 (unchanged) |
| https://www.schifskycompanies.com/paver-patios/ | 200 | 200 (unchanged) |
| https://www.schifskycompanies.com/fiberglass-pools/ | 200 | 200 (unchanged) |

## Open item: path and query preservation

GoDaddy domain forwarding redirects the root only. Requests for any path on the bare domain return 404 from GoDaddy's forwarder, and query strings on the root are dropped. The homepage and HTTPS criteria are met; the "preserve paths and query strings" criterion is not. Options that keep the nameservers at GoDaddy:

1. Free redirect host (Vercel or Netlify): a one-file project with a splat 301 to `https://www.schifskycompanies.com/:path` (query strings pass through), apex `A` record pointed at that host, certificate issued automatically. Requires the owner to create the account; configuration can then be done in the browser.
2. Fix nginx on the old DigitalOcean server (`146.190.242.206`): a `return 301 https://www.schifskycompanies.com$request_uri;` server block plus a certificate. Requires DigitalOcean / SSH access and keeps paying for the droplet.
3. Move DNS to Cloudflare (nameserver change, explicitly out of scope for this task): apex CNAME-flattened to the Pages project plus one redirect rule. Cleanest long term, owner decision.

Until one of these is in place, every ad, email signature, print piece and directory listing should use `https://www.schifskycompanies.com/...` URLs. Those have worked throughout.

## Rollback

1. GoDaddy > schifskycompanies.com > DNS > Forwarding > Domain: delete the entry for `https://www.schifskycompanies.com` (Permanent 301).
2. GoDaddy > DNS Records: if the apex `A` record does not reappear on its own, add `A  @  146.190.242.206  TTL 600` to restore the exact pre-change state (which was the broken 503 server), or point it at a working host instead.
3. Nothing else changed; no other record needs to be restored.
