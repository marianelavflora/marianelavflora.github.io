# marianelavflora.github.io

MaVi Flora's portfolio site — plain HTML/CSS/JS, no build step, ready for
GitHub Pages.

## Structure

- `index.html` — all page content/sections
- `css/style.css` — all styling
- `js/main.js` — rotating title, running cat, mobile nav
- `projects/` — drop project/hackathon/gamejam photos here (see `projects/README.md`)
- `assets/cv/MaViFlora_CV.pdf` — downloadable CV linked from the header

## To customize

- **Projects & Achievements**: edit the placeholder cards in the `#projects`
  section of `index.html` — swap titles, tags, dates, descriptions, and
  media (see `projects/README.md`).
- **Certifications**: edit `#certifications` in `index.html` — 3 empty slots
  are ready for more certs.
- **Music**: the YouTube playlist in `#music` is an `iframe`; change the video IDs in its `src` (and in the "Open it on YouTube" link) to swap songs.
- **Colors**: main tokens live at the top of `css/style.css` under `:root`.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:

```bash
npx serve .
```

## Deploying

Push to the `main` branch of this repo (`marianelavflora.github.io`) — GitHub
Pages serves it automatically since it's a user-page repo.
