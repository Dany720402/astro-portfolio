//import { defineConfig } from "astro/config";
//import tailwind from "@astrojs/tailwind";

// https://astro.build/config
//export default defineConfig({
//  integrations: [tailwind()],
//});

import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/astro-portfolio/', // Remplacez "nom-du-repo" par le nom de votre dépôt
  output: 'static',
});
