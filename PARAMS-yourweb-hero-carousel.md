# YOURWEB HERO CAROUSEL - Parametros

Tag:

```html
<yourweb-hero-carousel></yourweb-hero-carousel>
```

Todos los parametros son opcionales. Si no pasas nada, el componente carga una animacion por defecto.

---

## Media por slide

Hay 4 slides. Puedes usar imagen, video o media generico.

- `image-1`, `image-2`, `image-3`, `image-4`
  - URL de imagen.

- `video-1`, `video-2`, `video-3`, `video-4`
  - URL de video `.mp4`, `.webm` u `.ogg`.
  - Se reproduce en mute, loop y autoplay.

- `media-1`, `media-2`, `media-3`, `media-4`
  - URL generica. El componente intenta detectar si es video por extension.

- `media-type-1`, `media-type-2`, `media-type-3`, `media-type-4`
  - Fuerza el tipo: `image` o `video`.

Ejemplo:

```html
<yourweb-hero-carousel
  image-1="https://site.com/mascota-1.png"
  video-2="https://site.com/video.mp4"
  media-3="https://site.com/imagen.jpg"
  media-type-3="image">
</yourweb-hero-carousel>
```

---

## Colores por slide

Acepta HEX, RGB, HSL o cualquier color CSS valido.

- `bg-1`, `bg-2`, `bg-3`, `bg-4`
  - Color de fondo activo de cada slide.

- `panel-1`, `panel-2`, `panel-3`, `panel-4`
  - Reservado para personalizacion visual por slide.

Ejemplo:

```html
<yourweb-hero-carousel
  bg-1="rgb(244, 132, 95)"
  bg-2="#6BBF7A"
  bg-3="hsl(330, 70%, 70%)"
  bg-4="#6EB5FF">
</yourweb-hero-carousel>
```

---

## Texto por slide

- `label-1`, `label-2`, `label-3`, `label-4`
  - Nombre visible del slide activo.

- `caption-1`, `caption-2`, `caption-3`, `caption-4`
  - Descripcion corta del slide activo.

Ejemplo:

```html
<yourweb-hero-carousel
  label-1="Luna"
  caption-1="Chequeo preventivo"
  label-2="Max"
  caption-2="Vacunas y bienestar">
</yourweb-hero-carousel>
```

---

## Textos generales

- `brand`
  - Texto superior izquierdo.
  - Default: `YOURWEB HERO`

- `ghost-text`
  - Texto gigante de fondo.
  - Default: `PETCARE`

- `eyebrow`
  - Texto pequeno encima del titulo.

- `title`
  - Titulo principal.

- `body`
  - Parrafo descriptivo.

- `cta-label`
  - Texto del boton.

- `cta-href`
  - Link del boton.

Ejemplo:

```html
<yourweb-hero-carousel
  brand="PETCARE"
  ghost-text="PETCARE"
  eyebrow="Veterinaria moderna"
  title="Cuidado profesional para mascotas"
  body="Agenda consultas, vacunas y grooming desde un solo lugar."
  cta-label="Agendar cita"
  cta-href="https://tusitio.com/contacto">
</yourweb-hero-carousel>
```

---

## Tipografia y colores globales

- `font-family`
  - Fuente del cuerpo.

- `display-font`
  - Fuente del titulo y texto gigante.

- `text-color`
  - Color principal del texto.

- `button-bg`
  - Fondo del boton.

- `button-text`
  - Color del texto del boton.

Ejemplo:

```html
<yourweb-hero-carousel
  font-family="Inter, system-ui, sans-serif"
  display-font="Anton, Impact, sans-serif"
  text-color="#ffffff"
  button-bg="#ffffff"
  button-text="#111111">
</yourweb-hero-carousel>
```

---

## Tamanos generales

- `height`
  - Alto del hero.
  - Default: `100%` (respeta la altura del Custom Element en Wix)

- `min-height`
  - Alto minimo.
  - Default: `320px`

- `ghost-size`
  - Tamano del texto gigante.

- `title-size`
  - Tamano del titulo principal.

Ejemplo:

```html
<yourweb-hero-carousel
  height="720px"
  min-height="560px"
  ghost-size="clamp(80px, 24vw, 320px)"
  title-size="clamp(42px, 8vw, 90px)">
</yourweb-hero-carousel>
```

---

## Tamanos de imagenes / videos

Desktop:

- `center-height`
- `side-height`
- `back-height`
- `center-scale`
- `side-scale`
- `back-scale`

Mobile:

- `center-height-mobile`
- `side-height-mobile`
- `back-height-mobile`
- `center-scale-mobile`

Ejemplo:

```html
<yourweb-hero-carousel
  center-height="82%"
  side-height="28%"
  back-height="22%"
  center-scale="1.34"
  center-height-mobile="48%"
  side-height-mobile="15%">
</yourweb-hero-carousel>
```

---

## Posiciones

Desktop:

- `center-bottom`
- `side-bottom`
- `back-bottom`
- `left-pos`
- `right-pos`
- `stage-center`

Mobile:

- `center-bottom-mobile`
- `side-bottom-mobile`
- `back-bottom-mobile`
- `left-pos-mobile`
- `right-pos-mobile`
- `stage-center-mobile`

Ejemplo:

```html
<yourweb-hero-carousel
  center-bottom="0%"
  side-bottom="12%"
  back-bottom="12%"
  stage-center="70%"
  left-pos="58%"
  right-pos="92%"
  center-bottom-mobile="23%"
  stage-center-mobile="50%"
  left-pos-mobile="20%"
  right-pos-mobile="80%">
</yourweb-hero-carousel>
```

Nota: por defecto las imagenes/videos no tienen borde negro ni sombra fuerte. Si quieres sombra, es mejor agregarla directamente al archivo de imagen o pedirme una version con atributo `media-shadow`.

---

## Animacion

- `autoplay`
  - `on` / `off`
  - Default: `on`

- `interval`
  - Tiempo entre cambios en milisegundos.
  - Default: `1000`

- `transition-ms`
  - Duracion de la transicion.
  - Default: `650`

- `controls`
  - Muestra/oculta flechas.
  - `on` / `off`
  - Default: `on`

- `grain`
  - Muestra/oculta textura.
  - `on` / `off`
  - Default: `on`

- `remove-white-bg`
  - Intenta ocultar visualmente fondos blancos de imagenes/GIF usando `mix-blend-mode: multiply`.
  - `on` / `off`
  - Default: `on`
  - Nota: no reemplaza una transparencia real; si el personaje tiene partes claras tambien puede afectarlas.

Ejemplo:

```html
<yourweb-hero-carousel
  autoplay="on"
  interval="1200"
  transition-ms="700"
  controls="off"
  grain="on"
  remove-white-bg="on">
</yourweb-hero-carousel>
```

---

## Ejemplo recomendado para Wix

```html
<yourweb-hero-carousel
  brand="PETCARE"
  ghost-text="PETCARE"
  eyebrow="Veterinaria moderna"
  title="Cuidado para mascotas con estilo"
  body="Consultas, vacunas, grooming y emergencias en una experiencia visual moderna."
  cta-label="Agendar cita"
  cta-href="https://tusitio.com/contacto"
  image-1="https://tusitio.com/pet-1.png"
  image-2="https://tusitio.com/pet-2.png"
  image-3="https://tusitio.com/pet-3.png"
  image-4="https://tusitio.com/pet-4.png"
  bg-1="rgb(244,132,95)"
  bg-2="rgb(107,191,122)"
  bg-3="rgb(232,130,180)"
  bg-4="rgb(110,181,255)"
  controls="off"
  interval="1000">
</yourweb-hero-carousel>
```
