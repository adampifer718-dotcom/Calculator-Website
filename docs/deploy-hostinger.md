# Deploying to Hostinger (Business web hosting)

This site is a Next.js **server** app, not a set of static files. It needs a running Node.js process for:
- language routing (`src/proxy.ts`);
- redirects (www → non-www, old category URLs);
- real 404 responses.

Hostinger's **Business** web hosting plan runs Node.js web apps, including Next.js, from hPanel. Use that option. Do **not** upload files to `public_html`, because a static upload would break routing.

## Security status

The site runs on **Next.js 16.4.6**. The earlier security notice on 16.4.0 (blocker 6 in `docs/launch-checklist.md`) is resolved. `npm audit --omit=dev` reports 0 vulnerabilities, and the build passes on the first attempt. Full results are in section 9.7 of the checklist.

## hPanel settings

1. **Add the app.** In hPanel go to **Websites → Add website → Node.js web app**, choose **Import from GitHub**, and authorize Hostinger's GitHub app for `adampifer718-dotcom/calculator-website`.
2. **Choose the branch** `claude/magical-planck-oou76v`, or `main` once it exists and the work is merged.
3. **Fill in the build settings.** Hostinger usually detects Next.js and pre-fills them; check each one:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Node.js version | **22** (the repo pins it in `.nvmrc`; `package.json` requires ≥ 20.9) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `.next` |
| Start command / entry file | leave blank (Hostinger runs `next start`), or `npm run start`. `next start` reads Hostinger's `PORT` variable automatically. |

4. **Set the environment variable** `NEXT_PUBLIC_SITE_URL=https://hourlytosalarycalculator.net`.
   - It is read at **build** time, so set it before the first build.
   - Production builds already default to this domain, so this only makes it explicit.
   - Never set it to a temporary Hostinger URL. That URL would end up in every canonical link, the sitemap and robots.txt.
5. **Deploy.** The first build generates about 2,600 pages and takes a few minutes; the local build took about 3 minutes.

## Domain and HTTPS

1. **Domain:** connect `hourlytosalarycalculator.net` to the Node.js app in hPanel, and add `www.hourlytosalarycalculator.net` as well. The app itself permanently redirects `www` to the bare domain, which is the canonical one.
2. **DNS (the domain is registered at Websouls):**
   1. In hPanel, add `hourlytosalarycalculator.net` to the Node.js app and note the nameservers hPanel shows (usually `ns1.dns-parking.com` and `ns2.dns-parking.com`). If hPanel shows different values, use those.
   2. In the Websouls client area, go to **My Domains → hourlytosalarycalculator.net → Manage → Nameservers**. Choose custom nameservers, replace the old ones with Hostinger's two, and save.
   3. Wait for propagation: usually a few hours, at most 24–48 hours.
   - The domain stays registered (and auto-renewing) at Websouls; only the nameservers change.
   - Any email hosted on Websouls for this domain stops working after the switch until it is set up again at Hostinger.
   - The alternative is to keep Websouls DNS and add the A/CNAME records hPanel shows instead of changing nameservers.
3. **HTTPS:** enable the free SSL certificate for both the bare and `www` hosts.

## Check after deploying

Open each of these and confirm it works:
- `https://hourlytosalarycalculator.net/` loads, with language switching (e.g. `/es`, `/ar`, which is right-to-left).
- `https://www.hourlytosalarycalculator.net/anything` redirects (308) to `https://hourlytosalarycalculator.net/anything`.
- `https://hourlytosalarycalculator.net/calculators/not-a-page` returns a real 404.
- `/sitemap.xml` and `/robots.txt` use `https://hourlytosalarycalculator.net` URLs.
- A calculator page, a converter page and a collection page render.

To run the same SEO audit used in testing against the live site:

```
node scripts/seo-audit.mjs https://hourlytosalarycalculator.net https://hourlytosalarycalculator.net
```

## Plan limits to keep in mind

- **Build output size:** about 3.1 GB and about 36,000 files, mostly prerendered HTML and RSC data for 9 languages. Check that the plan's disk and file-count (inode) limits allow it.
- **Node.js websites:** Business allows 5 Node.js websites and a shared process limit. Hostinger manages the process, so do not add PM2 or cluster mode.
- **Request timeout:** requests time out after 120 seconds. Pages are prerendered, so this is not expected to matter.

Hostinger's docs: [pointing a domain to Hostinger](https://www.hostinger.com/in/tutorials/how-to-point-domain-to-hostinger/), [where to find nameservers](https://support.hostinger.com/dns/where-can-i-find-nameservers), [Node.js web apps](https://docs.hostinger.com/node.js/overview), [Next.js settings](https://docs.hostinger.com/node.js/overview-1/next), [creating an app](https://docs.hostinger.com/node.js/creating-an-app), [plan limits](https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/).
