# Banca Mayorista · Tablero ejecutivo

Tablero ejecutivo web de **Grupo Consupago — Banca Mayorista / Banca Empresarial**, preparado para publicarse en GitHub Pages.

Todo el contenido proviene exclusivamente de la presentación *Estrategia Banca Mayorista: Banca Empresarial 2027–2031*. No se incorporaron datos, métricas, KPIs ni fechas que no estén explícitos en la fuente.

## Estructura del proyecto

```
banca-mayorista-tablero/
├── index.html Estructura y contenido de las cinco pestañas
├── css/
│ └── styles.css Tokens de diseño, componentes y responsive
├── js/
│ └── main.js Navegación por pestañas, teclado y enlace profundo
├── .nojekyll Evita el procesado Jekyll en GitHub Pages
└── README.md
```

## Secciones y origen de la información

| Pestaña | Contenido | Fuente |
|---|---|---|
| Tablero | Contexto, decisiones pendientes, alertas y riesgos | Slide 2 |
| Oferta | Mercado, oferta de valor, journey del cliente, ecosistema Nexus, relación Fase 1 – Fase 2 | Slides 8, 9 y 10 |
| Resumen por mesa | Estructura preparada, sin contenido | Sin información en la fuente |
| Actividades | Originación y contratación, banca activa, habilitadores transversales | Slide 12 |
| Timeline del proyecto | Inicio del plan de negocios, Fase 1, Fase 2, propuestas de valor | Slides 5 y 7 |

Las secciones sin información muestran el estado **“Información pendiente de definición”** y conservan la arquitectura visual lista para actualizarse.

## Publicar en GitHub Pages

1. Crea un repositorio y sube el contenido de esta carpeta a la raíz de la rama `main`.
2. En **Settings → Pages**, selecciona *Deploy from a branch* → `main` → `/ (root)`.
3. El tablero queda disponible en `https://<usuario>.github.io/<repositorio>/`.

Cada pestaña tiene enlace propio: `#tablero`, `#oferta`, `#mesas`, `#actividades`, `#timeline`.

## Diseño

- Paleta institucional de Grupo Consupago:

| Color | HEX | Pantone | Uso en el tablero |
|---|---|---|---|
| Azul Profundo | `#1B355D` | 534 C | Encabezado, bloques destacados, hitos |
| Azul Horizonte | `#7DACE3` | 2142 C | Tintas de fondo, chips, viñetas, estados |
| Naranja Legado | `#E75301` | 166 C | Acento: pestaña activa, Fase 2, crédito estructurado |
| Rojo Cercanía | `#983920` | 174 C | Avisos y estados pendientes |

- Los colores se definen como variables CSS en el bloque `:root` de `css/styles.css`, con sus tintas al 40% y 20% derivadas del Azul Horizonte.
- Tipografías: *Source Serif 4* para títulos y *IBM Plex Sans* para texto e interfaz (Google Fonts).
- Diseño responsive de 400 px en adelante, compatible con tema claro y oscuro, y hoja de estilos para impresión.

## Actualizaciones futuras

- **Resumen por mesa**: sustituir las tarjetas con clase `card--ghost` por el contenido real de cada mesa.
- **Timeline**: añadir fechas dentro de `.tl__card` cuando estén documentadas.
- **Decisiones y alertas**: reemplazar los bloques `.state` por la lista correspondiente cuando existan registros.

