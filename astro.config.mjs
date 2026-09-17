import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://northstar-enterprise.github.io', base: '/northstar.github.io', trailingSlash: 'always', output: 'static', outDir: './docs' });
