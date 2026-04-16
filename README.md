# NoteNextra

Static note sharing site with minimum care

This site is powered by

- [Next.js](https://nextjs.org/)
- [Nextra](https://nextra.site/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## Deployment

### Deploying to Vercel [standalone]

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTrance-0%2FNotechondria)

_Warning: This project is not suitable for free Vercel plan. There is insufficient memory for the build process._

### Deploying to Cloudflare Pages [standalone]

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button?paid=true)](https://deploy.workers.cloudflare.com/?url=https://github.com/Trance-0/Notechondria)

### Deploying as separated docker services [standalone]

Considering the memory usage for this project, it is better to deploy it as separated docker services.

```bash
docker-compose up -d -f docker/docker-compose.yaml
```

### Deploying to Cloudflare Workers [modular builds]

For the modular layout, each course (e.g. `Math4202`, `CSE332S`) is built and deployed as its **own** Cloudflare Pages project, and an nginx reverse proxy stitches them back together under a single domain. This keeps per-build memory usage low enough to run on the free Pages tier.

#### 1. Prepare the per-course meta files

Each subdirectory under [./distribute](distribute/) (e.g. [distribute/Math4202/_meta.js](distribute/Math4202/_meta.js)) holds a version of the root `_meta.js` where the active course is marked as `type: 'page'` and every other course becomes an external `href` link back to the root domain. When you add a new course, regenerate these files once with:

```bash
python ./distribute/create_meta.py
```

See [distribute/create_meta.py](distribute/create_meta.py) for the transformation logic.

#### 2. Configure a Cloudflare Pages project per course

For each course, create a Pages project (e.g. `notenextra-math4202`) and set the build settings as follows:

| Field | Value |
| --- | --- |
| Build command | `npm run build:distribute` |
| Output directory | `out` |
| Environment variable `KEEP_PAGES` | the course slug, e.g. `Math4202` |
| Environment variable `BASE_PATH` | `/Math4202` (matches the URL prefix the nginx router will use) |
| Node version | `>=20` |

The `build:distribute` script (see [package.json](package.json)) runs [distribute/prebuild.sh](distribute/prebuild.sh), which:

1. Copies `./distribute/$KEEP_PAGES/_meta.js` over `./content/_meta.js`.
2. Deletes every other `content/<course>/` and `public/<course>/` directory (except `Swap`, which is always ignored).
3. Replaces the root [next.config.mjs](next.config.mjs) with [distribute/next.config.mjs](distribute/next.config.mjs), which switches Next.js to `output: 'export'`, enables `trailingSlash`, unoptimizes images, and reads `BASE_PATH` / `assetPrefix` from the environment.

After `next build` finishes, the `postbuild` script runs `next-sitemap` and generates a Pagefind index at `out/_pagefind`.

#### 3. Route everything through nginx

Deploy [distribute/nginx.conf](distribute/nginx.conf) on a front-end host (or a Worker equivalent). It:

- Maps each `/<Course>/` prefix to the matching `notenextra-<course>.pages.dev` origin via `proxy_pass`.
- Falls back to a default course site (currently `notenextra-cse332s.pages.dev`) for `/`.
- Proxies `/_pagefind*` requests to whichever upstream the referer belongs to, so search indices resolve correctly across sub-sites.

When you add a new course, add a matching `location ^~ /<Course>/` block and, if it belongs to a new subject cluster, a new `upstream` entry.

### Deploying to GitHub Pages [modular builds]

GitHub Pages only hosts a single site per repo, so the modular layout targets **one course per deployment** (typically on a dedicated branch or fork) using the same `./distribute` prebuild pipeline described above.

#### 1. Enable Pages

In the repo settings, set **Pages → Build and deployment → Source** to `GitHub Actions`.

#### 2. Pick the course to publish

Decide which course slug this deployment should host (e.g. `Math4202`). The final URL will be `https://<user>.github.io/<repo>/<Course>/`, so both `KEEP_PAGES` and `BASE_PATH` must reflect that.

#### 3. Add a deploy workflow

Create [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) with the following outline (adapt `KEEP_PAGES` / `BASE_PATH` to your target course and repo name):

```yaml
name: Deploy course to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch: {}

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      KEEP_PAGES: Math4202
      BASE_PATH: /NoteNextra-origin/Math4202
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build:distribute
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Because `distribute/next.config.mjs` reads `BASE_PATH` and applies it to both `basePath` and `assetPrefix`, setting it to `/<repo>/<Course>` is enough to make assets, links, and the Pagefind index resolve correctly under the GitHub Pages URL. To publish multiple courses, fan this workflow out into a matrix over course slugs and push each build to a separate Pages site (e.g. one per fork/branch), then combine them behind the same nginx config from the Cloudflare section above.

> **Note:** The repo is mirrored from Gitea nightly by [.github/workflows/sync-from-gitea.yml](.github/workflows/sync-from-gitea.yml), which force-pushes `main` but preserves `.github/workflows/`. Keep the deploy workflow under that directory so it survives each sync.

### Snippets

Update dependencies

```bash
npx npm-check-updates -u
```

### MCP access to notes

This repository includes a minimal MCP server that exposes the existing `content/` notes as a knowledge base for AI tools over stdio.

```bash
npm install
npm run mcp:notes
```

The server exposes:

- `list_notes`
- `read_note`
- `search_notes`
