# Northstar Evaluation Firm

Astro website with Home and About pages, the supplied copy, and the supplied palette: `#0D0221`, `#0F084B`, `#26408B`, `#A6CFD5`, `#C2E7D9`.

## Run locally

Use Node.js 22.12+ and npm 9.6.5+.

```sh
npm ci
npm run dev
```

Open http://localhost:4321/northstar.github.io/.

```sh
npm run build
npm run preview
```

The static site is generated in `docs/`. The configured GitHub Pages URL is https://northstar-enterprise.github.io/northstar.github.io/ because this repository name differs from the organization's account name. Update `site` and `base` in `astro.config.mjs` if using a custom domain.

## Complete the supplied content

Copy `.env.example` to `.env` and supply:

- `PUBLIC_CONTACT_ENDPOINT`: an HTTPS form handler that accepts POST fields `name`, `email`, `company`, `topic`, and `details`. The submit button is deliberately disabled until a real handler is configured. No submissions are saved or sent by this static site itself.
- `PUBLIC_JERRY_LINKEDIN` and `PUBLIC_ELLIOT_LINKEDIN`: optional overrides for the supplied profile URLs already included in the About page.
- `PUBLIC_JERRY_PHOTO` and `PUBLIC_ELLIOT_PHOTO`: photo URLs. Local images can go in `public/`; include the `/northstar.github.io/` base in their URLs.

Rebuild after changing these values. The supplied LinkedIn profile photos are stored locally in `public/team/`. Elliot’s available photo is 96 × 96 pixels; replace it with a higher-resolution original when available. LinkedIn links are rendered only when configured. Every tool has a monochrome logo. SpaceClaim uses the Ansys company mark and UniSim uses the Honeywell company mark. The technical illustration is decorative SVG, not a photograph of a real engineering project.

Editorial bracket notes and the sentence “I need to rephrase all of this” are excluded from displayed content. The four supplied service statements are preserved verbatim, since the request says not to generate additional copy.

## GitHub Pages

The `docs/` folder contains ready-to-serve HTML, CSS, and SVG files. No Node.js server is required on GitHub Pages. In repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/docs**, and Save. The `.nojekyll` file preserves Astro’s `_astro` asset directory.

After changing the Astro source or public environment values, run `npm run build` and commit the updated `docs/` files together with the source.

## Additional logo sources

- MATLAB and Java: https://github.com/devicons/devicon (MIT).
- Onshape: https://github.com/homarr-labs/dashboard-icons (logo rights belong to the respective brand).
- Simulink: https://commons.wikimedia.org/wiki/File:Simulink_Logo_(non-wordmark).png
- Honeywell: https://commons.wikimedia.org/wiki/File:Honeywell_logo.svg

Logo files retain their source artwork; CSS alpha masks display them in the site’s light-blue color. Brand marks identify the listed tools.
