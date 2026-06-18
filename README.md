# Dragon Ball API — Vue 3 + Quasar

Clon de la presentación de [web.dragonball-api.com](https://web.dragonball-api.com/) con un **buscador en la parte superior**, hecho con **Vue 3 + Quasar Framework** y consumiendo la API oficial `https://dragonball-api.com/api`.

## Componentes (4 en total, mínimo pedido: 3)

| Componente | Archivo | Función |
|---|---|---|
| `SearchBar` | `src/components/SearchBar.vue` | Buscador superior (con debounce y botón de búsqueda) |
| `CharacterCard` | `src/components/CharacterCard.vue` | Tarjeta individual de cada personaje |
| `CharacterGrid` | `src/components/CharacterGrid.vue` | Grilla responsive + skeleton de carga + estado vacío |
| `CharacterDialog`| `src/components/CharacterDialog.vue` | Modal con el detalle del personaje |

La página `src/pages/IndexPage.vue` orquesta todo y `src/layouts/MainLayout.vue` define la cabecera y el fondo temático.

## Requisitos

- Node.js 20, 22 o 24
- npm

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:9000

## Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/spa/` lista para subir a cualquier hosting estático.

## Subir el proyecto en modo público (elige UNA opción)

### Opción A — Netlify (la más rápida, sin cuenta de Git)
1. `npm run build`
2. Entra a https://app.netlify.com/drop
3. Arrastra la carpeta `dist/spa` a la página.
4. Te da una URL pública al instante (ej. `https://tu-proyecto.netlify.app`).

### Opción B — Vercel
1. Sube el proyecto a un repo de GitHub.
2. En https://vercel.com importas el repo.
3. Build command: `npm run build` · Output directory: `dist/spa`.

### Opción C — GitHub Pages
1. En `quasar.config.js` pon `build.publicPath: '/NOMBRE-DEL-REPO/'`.
2. `npm run build`
3. Sube el contenido de `dist/spa` a la rama `gh-pages`.

> Nota: el router está en modo **hash** (`createWebHashHistory`), por eso funciona en cualquier hosting estático sin configurar redirecciones.

## API usada

- Lista paginada: `GET /api/characters?page=1&limit=12` → `{ items, meta, links }`
- Búsqueda: `GET /api/characters?name=goku` → array de personajes
- Detalle: `GET /api/characters/:id`
