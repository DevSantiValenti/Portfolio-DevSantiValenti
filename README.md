# Santiago Valenti — Portfolio

Landing page estática profesional para Santiago Valenti, orientada a Full Stack Development con Java, Spring Boot y sistemas web.

## Stack

- HTML5, CSS3 y TypeScript
- Vite como build tool frontend
- Lucide para iconografía
- Netlify Forms para el formulario de contacto
- Sin backend, sin base de datos, sin autenticación y sin servidor propio

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

## Build

```bash
npm run build
```

El resultado queda en `dist/` y puede publicarse directamente en Netlify.

## Deploy en Netlify

La configuración está en `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: `22`

Conectar el repositorio en Netlify y activar Forms desde el panel del sitio.

## Estructura

```text
/
  index.html
  proyectos.html
  proyectos/
    sonrie-plus.html
    turnero-facil.html
    gimnasios.html
  src/
    css/styles.css
    js/
      main.ts
      animations.ts
      navigation.ts
      projects.ts
      contact.ts
    data/
      site.ts
      projects.ts
      courses.ts
      education.ts
      technologies.ts
  public/
    images/
      profile.jpg
      projects/
    cv.pdf
    og-image.jpg
    favicon.svg
```

## Modificar información personal

Editar `src/data/site.ts`:

- nombre
- rol
- descripción
- email
- GitHub
- LinkedIn
- WhatsApp
- URL del CV
- foto de perfil
- canonical URL

## Colocar foto

Reemplazar:

```text
public/images/profile.jpg
```

Usar una imagen vertical, preferentemente 4:5 o similar.

## Colocar CV

Reemplazar:

```text
public/cv.pdf
```

El botón "Descargar CV" apunta a `/cv.pdf`.

## Agregar proyectos

Editar `src/data/projects.ts`.

Cada proyecto soporta:

- id
- slug
- title
- shortDescription
- description
- year
- category
- image
- screenshots
- technologies
- features
- problem
- solution
- architecture
- results
- demoUrl
- githubUrl
- externalUrl
- featured

Para crear un nuevo case study, agregar un HTML estático en `proyectos/` siguiendo los existentes y sumar el input en `vite.config.ts`.

## Agregar cursos

Editar `src/data/courses.ts`.

## Agregar estudios

Editar `src/data/education.ts`.

## Modificar tecnologías

Editar `src/data/technologies.ts`.

## Contacto y redes

Editar `src/data/site.ts`.

El formulario usa Netlify Forms. En producción, Netlify detecta el formulario desde `index.html` y también existe `public/__forms.html` como respaldo de detección.

## SEO

Editar dominio/canonical en:

- `src/data/site.ts`
- `index.html`
- `proyectos.html`
- `proyectos/*.html`
- `public/sitemap.xml`
- `public/robots.txt`

También reemplazar `public/og-image.jpg` por una imagen final de 1200x630.
