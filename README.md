# Portafolio — Bryam Aragón Zabala

Sitio estático (HTML + CSS + JS puro, sin frameworks ni build step) listo para publicar en GitHub Pages.

## Estructura

```
index.html          → todo el contenido, secciones y atributos data-i18n
css/styles.css       → estilos (tokens de color/tipografía al inicio del archivo)
js/i18n.js            → diccionario ES/EN, detección de idioma y botón de cambio
js/script.js         → GSAP (animaciones), canvas de red, ticker, typewriter, nav, menú móvil
assets/img/          → pon aquí tus fotos y capturas de proyectos
assets/docs/         → pon aquí tu CV en PDF (nombrado CV-Bryam-Aragon-Zabala.pdf)
```

## Nuevo: animaciones e idioma

- **Animaciones profesionales con GSAP + ScrollTrigger** (vía CDN, sin necesidad de build):
  entrada escalonada del hero, revelado de cada sección al hacer scroll con stagger de sus
  elementos, botones "magnéticos" que siguen el cursor, tarjetas con inclinación 3D sutil,
  y parallax del fondo del hero con el mouse.
- **Fondo animado que se mueve solo**: una red de nodos en canvas en el hero (tema IoT/sensores,
  coherente con tu proyecto), y un ticker de estado tipo terminal justo debajo del menú
  ("procesando tickets…", "desplegando endpoints…", etc.), en loop continuo.
- **Todas las animaciones respetan `prefers-reduced-motion`**: si el usuario tiene el sistema
  configurado para reducir movimiento, el sitio muestra el contenido directamente sin animar.
- **Selector de idioma ES/EN** en la barra de navegación: traduce todo el contenido del sitio
  (textos, badges, tags, typewriter, ticker) sin recargar la página, recuerda la elección del
  usuario (`localStorage`) y detecta el idioma del navegador en la primera visita.
- El sitio sigue funcionando sin JavaScript (contenido visible igual, sin animaciones) y sin
  conexión al CDN de GSAP (usa una animación CSS de respaldo para la entrada del hero).

## Antes de publicar — pendientes marcados en el código

Busca estos puntos en `index.html` (todos están comentados con `<!-- -->`):

1. **Foto de perfil**: en la sección "Acerca de mí", reemplaza el `<span class="avatar-placeholder">`
   por `<img src="assets/img/foto.jpg" alt="Bryam Aragón">` con tu foto dentro de `assets/img/`.
2. **CV en PDF**: agrega tu hoja de vida en `assets/docs/CV-Bryam-Aragon-Zabala.pdf` (el botón
   "Descargar CV" del hero ya apunta ahí).
3. **Enlaces reales**: reemplaza los `href="#"` de GitHub y LinkedIn (aparecen dos veces: en el
   hero y en la sección de Contacto).
4. **Captura del proyecto IoT**: reemplaza el placeholder de `project-card__media` por una imagen
   o gif real del proyecto en funcionamiento.
5. **Repositorio del proyecto**: cambia el `href="#"` de "Ver repositorio →" por la URL real.
6. **Segundo proyecto**: la rúbrica pide varios proyectos que muestren distintas habilidades.
   Duplica el bloque `<article class="project-card">` (busca `project-card--placeholder` como
   referencia de ubicación) y cuéntame de un proyecto de frontend o móvil, por ejemplo.
7. **Traducción de contenido nuevo**: si agregas texto nuevo (por ejemplo, el segundo proyecto),
   dale un `data-i18n="tu_clave"` único y agrega esa misma clave con su texto en español e inglés
   dentro de `js/i18n.js` (objetos `es: {...}` y `en: {...}`).

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `tu-usuario.github.io` (así queda en la raíz
   de tu dominio) o cualquier otro nombre, ej. `portafolio`.
2. Sube estos archivos manteniendo la misma estructura de carpetas:
   ```
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source → Deploy from a branch → main / (root)** → Save.
4. Tu sitio quedará publicado en:
   - `https://tu-usuario.github.io/` si el repo se llama `tu-usuario.github.io`, o
   - `https://tu-usuario.github.io/tu-repo/` si tiene otro nombre.

## Personalización rápida

- **Colores**: todos definidos como variables al inicio de `css/styles.css` (bloque `:root`).
- **Textos de "Acerca de mí" y roles del typewriter**: edítalos directo en `index.html` y en el
  array `roles` al inicio de `js/script.js`.
- **Formulario de contacto**: no incluí uno porque GitHub Pages no ejecuta backend. Si más adelante
  quieres un formulario funcional, puedes integrar un servicio gratuito como Formspree sin tocar
  el resto del diseño.

## Accesibilidad y rendimiento

- El movimiento respeta `prefers-reduced-motion`.
- Los enlaces y botones tienen estado de foco visible para navegación por teclado.
- No hay dependencias externas salvo Google Fonts; el sitio carga rápido incluso en conexiones lentas.
