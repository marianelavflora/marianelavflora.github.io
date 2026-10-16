# marianelavflora.github.io

MaVi Flora's portfolio site, live at [mavi.dev.ar](https://mavi.dev.ar).

Built with [Astro](https://astro.build): the content lives in small data files,
Astro turns them into one plain static HTML page at build time, and a GitHub
Action publishes it to GitHub Pages.

## Structure

```
src/
  data/            ← the content: edit these to update the site
    projects.yaml        03 Projects & Achievements (flip cards)
    experience.yaml      04 Experience (jobs + volunteering)
    stack.yaml           05 Stack & Toolbox
    life.yaml            06 A Little Bit of Me
    certifications.yaml  07 Certifications
  i18n/
    ui.ts          ← nav, section titles and labels (English + Spanish)
    index.ts         date formatting and EN/ES helpers
  components/      one .astro file per section (Hero, Projects, ...)
  layouts/         the <head> and page shell
  pages/index.astro  puts the sections together
  scripts/         browser JS: rotating title, cat, flip cards, EN/ES toggle, CV preview
  styles/style.css all styling (colour tokens at the top, under :root)
  content.config.ts  the shape each data file must follow (checked on every build)
public/            copied as-is: images, CV PDF, CNAME
```

## Updating content

Every text can be a single string (same in both languages) or `{ en, es }`.

- **Add a project:** add an entry to `src/data/projects.yaml`. Cards are sorted
  newest first by `date` (`YYYY-MM`), so it lands in the right spot on its own.
  Put its photo in `public/assets/img/projects/` and reference it as
  `/assets/img/projects/your-photo.jpg`. No photo yet? Use `emoji:` instead and
  the card shows a "photo coming soon" placeholder. `hidden: true` keeps an
  entry without showing it.
- **Add a job, volunteering or cert:** same idea in `experience.yaml` or
  `certifications.yaml`. Date labels ("June 2025 – Present") and their Spanish
  versions are generated from `start`/`end`.
- **Change a section title or label:** `src/i18n/ui.ts`.
- **Music:** the YouTube video ids are at the top of `src/components/Music.astro`.
- **Colors:** tokens at the top of `src/styles/style.css` under `:root`.

If a data file has a mistake (missing field, wrong date format), the build
stops and tells you which entry and field is wrong.

## Running locally

Needs [Node.js](https://nodejs.org) 22.22 or newer (the current LTS is fine).

```bash
npm install      # once
npm run dev      # live preview at http://localhost:4321, reloads as you edit
npm run build    # production build into dist/
npm run preview  # serve the dist/ build locally
```

## Deploying

Push to `main`. The **Deploy to GitHub Pages** workflow
(`.github/workflows/deploy.yml`) builds the site and publishes `dist/`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**. The custom domain (`mavi.dev.ar`) stays configured there.
