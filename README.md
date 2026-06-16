# HeroCarouselYourWeb - Custom Element para Wix

Animacion tipo hero/carrusel inspirada en `veterinaria-landing`, lista para usar como **Custom Element** en Wix Studio.

Tag:

```html
<yourweb-hero-carousel></yourweb-hero-carousel>
```

Archivo principal:

- `yourweb-hero-carousel.js`

Funciona con imagenes, videos, colores y tamanos por defecto. Solo necesitas pasar atributos si quieres cambiar algo desde Wix.

---

## Uso basico en HTML

```html
<script src="yourweb-hero-carousel.js" defer></script>

<yourweb-hero-carousel></yourweb-hero-carousel>
```

## Ejemplo con parametros

```html
<yourweb-hero-carousel
  brand="PETCARE"
  ghost-text="PETCARE"
  title="Cuidado veterinario moderno"
  body="Atencion medica, vacunas, grooming y emergencias para mascotas."
  cta-label="Agendar cita"
  cta-href="https://tusitio.com/contacto"
  image-1="https://tusitio.com/perro.png"
  image-2="https://tusitio.com/gato.png"
  image-3="https://tusitio.com/conejo.png"
  image-4="https://tusitio.com/mascota.png"
  bg-1="rgb(244, 132, 95)"
  bg-2="rgb(107, 191, 122)"
  bg-3="rgb(232, 130, 180)"
  bg-4="rgb(110, 181, 255)"
  interval="1000"
  controls="off">
</yourweb-hero-carousel>
```

## Video o imagen

Puedes pasar imagenes:

```html
image-1="https://..."
```

O videos:

```html
video-1="https://tusitio.com/video.mp4"
```

Tambien puedes usar `media-1` y forzar el tipo:

```html
media-1="https://tusitio.com/archivo.mp4"
media-type-1="video"
```

## Wix Studio

1. Sube este repo a GitHub.
2. Usa jsDelivr para cargar el script:

```text
https://cdn.jsdelivr.net/gh/Diegoxpd123/HeroCarouselYourWeb@main/yourweb-hero-carousel.js
```

3. En Wix Studio:
   - Add -> Embed -> Custom Element.
   - Server URL: la URL de jsDelivr.
   - Tag name: `yourweb-hero-carousel`.
4. En **Set Attributes**, agrega los parametros que quieras cambiar.

Ver todos los parametros en `PARAMS-yourweb-hero-carousel.md`.
