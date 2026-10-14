# lexozbedra.github.io

Personal portfolio of Viktoriia Rudnikova – live at **https://lexozbedra.github.io**

Multi-page static site: Home, About, CV.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com) for pages
- [Tailwind CSS](https://tailwindcss.com) v4 with colour tokens in `src/index.css` (light and dark theme)
- [Motion](https://motion.dev) for the hero animation
- Fonts: Bricolage Grotesque and Newsreader, self-hosted via [Fontsource](https://fontsource.org)
- Deployed to GitHub Pages with GitHub Actions

## Run locally

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Where to edit

| What | Where |
| --- | --- |
| Name, email, links | `src/data/site.ts` |
| Experience, education, skills | `src/data/cv.ts` |
| About text | `src/pages/About.tsx` |
| Home page | `src/pages/Home.tsx`, hero animation in `src/components/Pipeline.tsx` |
| Colours and fonts | `src/index.css` |

## How routing works on GitHub Pages

GitHub Pages serves static files only, so after the build `scripts/postbuild.mjs` copies `index.html`
into `about/` and `cv/` (and to `404.html`). That way direct links like `/cv/` return 200 and React Router takes over.
When you add a new page, add the route in `src/App.tsx` **and** the path in `scripts/postbuild.mjs`.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Print the CV

Open `/cv/` and press **Save as PDF** (or Cmd/Ctrl+P). A print stylesheet hides the navigation and switches to a light theme.
