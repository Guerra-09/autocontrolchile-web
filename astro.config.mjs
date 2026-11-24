// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages sirve el sitio en https://guerra-09.github.io/autocontrolchile-web/.
// Si más adelante se conecta el dominio autocontrolchile.cl, cambiar `site` a
// 'https://autocontrolchile.cl', borrar `base` y agregar public/CNAME.
export default defineConfig({
  site: 'https://guerra-09.github.io',
  base: '/autocontrolchile-web',
  trailingSlash: 'ignore',
});
