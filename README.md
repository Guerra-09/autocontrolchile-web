# Autocontrol Chile — sitio web

Rediseño de [autocontrolchile.cl](https://autocontrolchile.cl/) hecho con [Astro](https://astro.build/).
Sitio estático: se publica solo en GitHub Pages con cada push a `main`.

## Desarrollo

Requiere Node 24 (`nvm use`).

```bash
npm install
npm run dev      # http://localhost:4321/autocontrolchile-web/
npm run build    # genera dist/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Teléfono, WhatsApp, email, dirección, horarios, logos de clientes | `src/data/sitio.ts` |
| Servicios (textos, fotos, menú, páginas `/servicios/...`) | `src/data/servicios.ts` |
| Portada | `src/pages/index.astro` |
| Página de cada servicio (plantilla) | `src/pages/servicios/[slug].astro` |
| Menú, pie, botón de WhatsApp, modo claro/oscuro | `src/layouts/Base.astro` |
| Colores de ambos temas | `src/styles/global.css` |
| Fotos | `public/img/` |

Para agregar un servicio basta con sumar un objeto a `servicios.ts` (y su foto en
`public/img/`): aparece solo en el menú, en la portada y con su propia página.

## Formulario de contacto

GitHub Pages no tiene servidor, así que el formulario arma el mensaje y abre
WhatsApp con el texto listo. Si más adelante se quiere recibir por email, se puede
conectar a un servicio como Formspree.

## Dominio propio

Hoy se publica en `https://guerra-09.github.io/autocontrolchile-web/`. Para usar
`autocontrolchile.cl`:

1. En `astro.config.mjs`, poner `site: 'https://autocontrolchile.cl'` y borrar `base`.
2. Crear `public/CNAME` con el texto `autocontrolchile.cl`.
3. En el DNS del dominio, apuntar a GitHub Pages (registros A a las IP de GitHub o
   un CNAME a `guerra-09.github.io`) y activar el dominio en Settings › Pages.
