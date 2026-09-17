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

The static site is generated in `dist/`. The configured GitHub Pages URL is https://northstar-enterprise.github.io/northstar.github.io/ because this repository name differs from the organization's account name. Update `site` and `base` in `astro.config.mjs` if using a custom domain.

## Complete the supplied content

Copy `.env.example` to `.env` and supply:

- `PUBLIC_CONTACT_ENDPOINT`: an HTTPS form handler that accepts POST fields `name`, `email`, `company`, `topic`, and `details`. The submit button is deliberately disabled until a real handler is configured. No submissions are saved or sent by this static site itself.
- `PUBLIC_JERRY_LINKEDIN` and `PUBLIC_ELLIOT_LINKEDIN`: actual profile URLs.
- `PUBLIC_JERRY_PHOTO` and `PUBLIC_ELLIOT_PHOTO`: photo URLs. Local images can go in `public/`; include the `/northstar.github.io/` base in their URLs.

Rebuild after changing these values. Abstract artwork marks the photo positions until photographs are provided. LinkedIn links are rendered only when configured. Tools with available Simple Icons use their brand marks; the remaining tools use their supplied names pending official logo assets. The technical illustration is decorative SVG, not a photograph of a real engineering project.

Editorial bracket notes and the sentence “I need to rephrase all of this” are excluded from displayed content. The four supplied service statements are preserved verbatim, since the request says not to generate additional copy.
