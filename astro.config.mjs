import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Vitrine du livre de marque AVQN. Sortie statique servie par nginx.
// Le site consomme brand/ via les exports générés (dogfood).
export default defineConfig({
  site: "https://styleguide.avqn.ch",
  output: "static",
  build: { format: "directory" },
  redirects: { "/da-image": "/media/photo" },
  vite: { plugins: [tailwindcss()] },
});
