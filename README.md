# Alianzas Valderrama — sitio web (estático)

Sitio de una sola página (HTML + CSS + JS), optimizado para publicación en hosting estático y para buscadores y redes sociales.

## Estructura del proyecto

```
├── index.html              # Página principal
├── robots.txt              # Directrices para rastreadores (ajustar dominio)
├── sitemap.xml             # Mapa del sitio (ajustar dominio)
├── package.json            # Scripts npm (preview y pruebas)
├── tools/
│   └── check-site.mjs      # Comprueba que existan archivos locales referenciados
└── assets/
    ├── css/
    │   ├── main.css        # Estilos (variables de color y tipografía en :root)
    │   └── all.min.css     # Font Awesome (iconos; fuentes en ../webfonts/)
    ├── js/
    │   └── main.js         # Interacción (menú, servicios, modal, animaciones)
    ├── img/                # Imágenes y logotipos (local)
    ├── video/              # Vídeo del hero (local)
    └── webfonts/           # WOFF2/TTF para Font Awesome
```

## Recursos locales

- **Tipografía:** cuerpo y títulos vía `--font-body` y `--font-heading` (sistemas Georgia / system-ui). No se cargan fuentes desde Google u otros CDNs.
- **Imágenes y vídeo:** rutas bajo `assets/img/` y `assets/video/`.
- **Iconos:** Font Awesome servido desde `assets/css/` y `assets/webfonts/`.
- **Fondo CTA:** imagen local (`portada02.png`) con degradado encima; se eliminó la dependencia de Unsplash.

## Antes de publicar (SEO y marca)

1. **Dominio:** busque en el proyecto `tudominio.com` y reemplácelo por su URL real (con `https://`) en:
   - `index.html` (canonical, Open Graph, Twitter Card, JSON-LD)
   - `robots.txt` (línea `Sitemap:`)
   - `sitemap.xml` (`<loc>`)
2. **Imagen social:** `og:image` y `twitter:image` apuntan a `.../assets/img/portada01.png`. Puede sustituirla por un PNG/JPG 1200×630 orientado a compartir en redes.
3. **Google Search Console:** verifique la propiedad del dominio y envíe `sitemap.xml`.
4. **WhatsApp:** el enlace flotante usa `wa.me`; actualice el número en `index.html` si corresponde.

## Comandos

| Comando        | Descripción |
|----------------|-------------|
| `npm install`  | Opcional; no hay dependencias obligatorias. |
| `npm start`    | Sirve la carpeta del proyecto en `http://localhost:8080` (requiere Node y `npx`). |
| `npm test`     | Verifica que las rutas locales de `index.html` y `assets/css/main.css` existan. |

## Publicación sugerida (estática)

Cualquier servicio que sirva archivos estáticos funciona, por ejemplo:

- **Netlify** o **Vercel:** arrastre la carpeta del proyecto o conecte el repositorio Git; directorio de publicación: raíz del repo.
- **GitHub Pages:** suba el contenido a la rama `gh-pages` o use *Actions*; la raíz debe contener `index.html`.
- **Hosting tradicional (cPanel, FTP):** suba `index.html`, `robots.txt`, `sitemap.xml` y la carpeta `assets/` completa.

Tras el despliegue, confirme que `https://su-dominio.com/robots.txt` y `https://su-dominio.com/sitemap.xml` responden correctamente.

## Buenas prácticas aplicadas

- Metadatos de descripción, robots, tema, Open Graph y Twitter Card.
- Datos estructurados JSON-LD (`ProfessionalService`).
- `lang="es-CO"` y textos alternativos en logotipos principales.
- Recursos críticos bajo rutas relativas `assets/...` para despliegue portable.
- Comprobación automática básica de rutas con `npm test`.
