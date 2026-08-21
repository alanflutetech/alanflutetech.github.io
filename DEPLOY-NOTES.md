# Deploying these changes

Everything here is a plain static file. Upload through the GitHub web UI the same
way you have been, keeping the folder structure exactly as shown.

## Files to add or replace

```
index.html                          replace
404.html                            replace
css/site.css                        NEW  — the whole design system now lives here
js/site.js                          NEW  — nav, mobile menu, reveal on scroll
robots.txt                          NEW
sitemap.xml                         NEW
img/og-image.jpg                    NEW  — the preview image for shared links
img/webp/BrannenGoldFlute.webp      replace — 1.56 MB → 84 KB
img/webp/AlanWardShop.webp          replace — 200 KB → 45 KB
img/webp/contact-clarinet.webp      replace — 18.4 MB → 72 KB
```

Uploading a file to the same path replaces it. GitHub Pages usually rebuilds
within a minute; hard-refresh (Cmd-Shift-R) to see the new images.

## Files to delete

None of these are referenced by the site any more. Deleting them is optional —
nothing breaks if they stay, they simply sit unused in the repository.

```
css/custom.css          styled the old Bootstrap theme
css/theme.css           280 KB, never linked
css/theme.min.css       replaced by css/site.css
js/aos.js               animation library, no longer used
js/aos.cjs.js
js/aos.esm.js
js/bootstrap*.js        ~2 MB, never referenced by any page
js/bootstrap*.js.map
fonts/                  the Inter web fonts — nothing loads them
```

Your unused photography (`img/GoldFlutes.jpg`, `img/webp/AlanWardLizzo.webp`,
and so on) has been left exactly where it was.

## What to check once it's live

1. **The three CTAs go to Calendly** — nav, hero, and the contact section.
2. **The email links open your mail app** — services card two, About, contact,
   footer, and the mail-in paragraph in Process.
3. **The menu on your phone** — tap the two-line icon at top right.
4. **The link preview** — paste alanward.tech into iMessage or a Slack message;
   it should now show the gold flute image and a real description instead of a
   bare URL.

## For Stage Two

The design system is now one file (`css/site.css`) rather than a block of CSS
buried inside `index.html`. A new page — `/services/`, `/process/`, `/work/` —
only needs to link that stylesheet and `js/site.js`, and it will inherit the
palette, typography, spacing, nav, mobile menu, and footer automatically.
There's a `.simple-page` block in the stylesheet already; `404.html` is the
working example of a second page built on it.

## Two things still worth fixing when you have the material

- **Testimonials.** The section still carries a single unattributed video. Two or
  three short quotes with a name, instrument, and role would do more for trust
  than anything else left on the page.
- **Recent work.** Your Instagram and TikTok bench footage is the strongest
  evidence you have, and none of it is on the site. A quiet three-image strip
  would fit the existing layout without a new design.
