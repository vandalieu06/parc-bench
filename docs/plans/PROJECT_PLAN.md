# Plan del Proyecto: Guia de Bancs de Parcs - Accessibilitat

## 1. Información General

| Campo | Detalle |
|---|---|
| **Proyecto** | Guia de Bancs de Parcs |
| **Materia** | Mòdul 0615: Disseny d'interfícies web |
| **Actividad** | ACT15: Accessibilitat i usabilitat |
| **Alumno** | - |
| **Fecha** | Mayo 2026 |
| **Objetivo** | Landing page para captar clientes y registrar inscripciones de una plataforma para intercambiar experiencias con bancos de parque |
| **Estilo** | Diseño MiniMax adaptado a tonos naturaleza |
| **Hosting** | Gratuito (pendiente) |

---

## 2. Estructura del Proyecto

```
DAW2_DissWeb_ACT15/
├── index.html                    # Página web principal (single-page)
├── css/
│   └── styles.css               # Estilos inspirados en MiniMax + tonos naturaleza
├── docs/
│   ├── plans/
│   │   └── PLAN.md              # Este documento
│   ├── listado_errores.md        # Tabla resumen de errores
│   └── errores_detalle.md       # Tabla detallada con snippet, línea, impacto, solución
├── assets/
│   ├── logo.svg                 # Logo como imagen SVG
│   ├── logo.png                 # Logo como imagen PNG
│   └── images/                  # Galería de imágenes de bancos de parques
│       ├── banco-1.jpg
│       ├── banco-2.jpg
│       ├── banco-3.jpg
│       ├── banco-4.jpg
│       ├── banco-5.jpg
│       ├── banco-6.jpg
│       └── hero-parque.jpg
└── README.md / DESIGN.md         # Documentación existente
```

---

## 3. Diseño - Estilo MiniMax Adaptado (Tonos Naturaleza)

### 3.1 Paleta de Colores

| Token | Color | Hex | Uso |
|---|---|---|---|
| `primary` | Verde oscuro | `#2d4a2d` | CTAs principales, header, texto importante |
| `on-primary` | Blanco | `#ffffff` | Texto sobre primary |
| `primary-soft` | Gris verdoso | `#3d4d3d` | Hover states, fondos oscuros |
| `brand-coral` | Marrón cálido | `#c4783c` | Accentos, badges, CTA especiales |
| `brand-blue` | Azul森林公园 | `#4a90a4` | Tarjetas secundarias, enlaces |
| `brand-magenta` | Magenta | `#b85c8a` | Tarjetas destacadas |
| `brand-purple` | Púrpura | `#7c5cbf` | Tarjetas especiales |
| `canvas` | Beige claro | `#f5f2eb` | Fondo principal |
| `surface` | Arena | `#e8e4d9` | Secciones alternas |
| `surface-soft` | Arena claro | `#f0ece3` | Subsecciones |
| `hairline` | Gris arena | `#d4cfc2` | Bordes, separadores |
| `ink` | Verde muy oscuro | `#1a2e1a` | Textos principales |
| `charcoal` | Gris verdoso | `#2a3a2a` | Texto secundario |
| `slate` | Gris verdoso medio | `#5a6a5a` | Texto terciario |
| `stone` | Gris claro | `#8a908a` | Placeholder text |
| `muted` | Gris apagado | `#a8a8a8` | Footer links |
| `success-bg` | Verde claro | `#e8ffea` | Badges de éxito |
| `success-text` | Verde oscuro | `#1ba673` | Texto de éxito |
| `footer-bg` | Verde oscuro | `#1a2e1a` | Fondo footer |
| `on-dark` | Blanco | `#ffffff` | Texto sobre fondos oscuros |

### 3.2 Tipografía

**Familia**: DM Sans (Google Fonts) con fallback: Inter, Helvetica Neue, Helvetica, Arial

| Token | Tamaño | Peso | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|
| `hero-display` | 80px | 600 | 1.10 | -2px | Hero principal |
| `display-lg` | 56px | 600 | 1.10 | -1.5px | Títulos de sección |
| `heading-lg` | 40px | 600 | 1.20 | -1px | Subsecciones |
| `heading-md` | 32px | 600 | 1.25 | -0.5px | Tarjetas destacadas |
| `heading-sm` | 24px | 600 | 1.30 | 0 | Títulos de tarjetas |
| `card-title` | 20px | 600 | 1.40 | 0 | Subtítulos de tarjetas |
| `subtitle` | 18px | 500 | 1.50 | 0 | Subtítulos de sección |
| `body-md` | 16px | 400 | 1.50 | 0 | Texto principal |
| `body-md-bold` | 16px | 700 | 1.50 | 0 | Texto enfatizado |
| `body-sm` | 14px | 400 | 1.50 | 0 | Texto secundario |
| `body-sm-medium` | 14px | 500 | 1.50 | 0 | Labels, navegación |
| `caption` | 13px | 400 | 1.70 | 0 | Fine print |
| `caption-bold` | 13px | 600 | 1.50 | 0 | Labels de badges |
| `micro` | 12px | 400 | 1.50 | 0 | Microcopy, footer |
| `button-md` | 14px | 600 | 1.40 | 0 | Labels de botones |

### 3.3 Border Radius

| Token | Valor | Uso |
|---|---|---|
| `xs` | 4px | Code chips |
| `sm` | 6px | Tablas, elementos compactos |
| `md` | 8px | Inputs, botones secundarios |
| `lg` | 12px | Tarjetas de documentación |
| `xl` | 16px | Tarjetas estándar |
| `xxl` | 20px | Paneles grandes |
| `xxxl` | 24px | Tarjetas de producto |
| `hero` | 32px | Tarjetas vibrantes, CTA promocional |
| `full` | 9999px | Todos los botones, tabs, badges |

### 3.4 Spacing

| Token | Valor |
|---|---|
| `xxs` | 4px |
| `xs` | 8px |
| `sm` | 12px |
| `md` | 16px |
| `lg` | 20px |
| `xl` | 24px |
| `xxl` | 32px |
| `xxxl` | 40px |
| `section-sm` | 48px |
| `section` | 64px |
| `section-lg` | 80px |
| `hero` | 96px |

### 3.5 Componentes Clave

- **Botón primario**: Fondo `#2d4a2d`, texto blanco, pill shape, padding 11px 24px
- **Botón secundario**: Fondo transparente, borde `#2d4a2d`, texto verde oscuro
- **Botón terciario**: Fondo blanco, borde `#d4cfc2`
- **Tarjetas producto**: Fondo gradiente (coral, magenta, azul, púrpura), rounded 32px
- **Tarjetas base**: Fondo blanco, borde `#d4cfc2`, rounded 16px
- **Inputs**: Fondo blanco, borde `#d4cfc2`, rounded 8px, altura 40px

---

## 4. Contenido de la Página Web

### 4.1 Secciones Requeridas

| # | Sección | Descripción | Elementos |
|---|---|---|---|
| 1 | **Header/Nav** | Navegación sticky | Logo (img), menú enlaces, CTA registro |
| 2 | **Hero** | Sección principal | Título grande, subtítulo, botones CTA, imagen destacada |
| 3 | **Galeria** | Grid de bancos | 6-8 imágenes con tarjetas informativas |
| 4 | **Informació** | Sobre el proyecto | Cómo funciona, estadísticas, beneficios |
| 5 | **Promoció** | Bancos destacados | Rankings, badges de categoría (còmode, net, tranquil, vistes) |
| 6 | **Preus** | Tabla de precios | 3-4 planes con características |
| 7 | **Formulari** | Registro | Campos de registro, validación |
| 8 | **Mapa del lloc** | Navegación del sitio | Enlaces a todas las secciones |
| 9 | **Footer** | Contacto | Info de contacto, redes sociales, copyright |

### 4.2 Idiomas

- **Idioma principal**: Español (castellano)
- **Sin fragmentos en otros idiomas** (según decisión)

### 4.3 Requisitos README.md a Cumplir

- [x] Diseño Responsive y en una sola plana web
- [x] El logo de la web ha de ser una imagen
- [x] Menú de navegación funcional
- [x] Galeria d'imatges i seccions d'informació, promoció i preus
- [x] Formulari de contacte, registre o confirmació
- [x] Mapa del lloc i informació de contacte dels organitzadors
- [x] Textos reals (sin Lorem Ipsum)
- [x] Inclusión deliberada de errores de accesibilidad

---

## 5. Errores de Accesibilidad (20 errores)

### 5.1 Resumen de Errores por Pauta WCAG

| Pauta WCAG | Cantidad | Errores |
|---|---|---|
| **1.1 Alternatives textuals** | 1 | Imagen decorativa sin alt |
| **1.3 Adaptable** | 2 | Input sin label; falta de semántica en formularios |
| **1.4 Distingible** | 4 | Contraste insuficiente; texto pequeño; color como único indicador; sin focus visible |
| **2.2 Temps suficient** | 1 | Contenido parpadeante sin control de usuario |
| **2.3 Convulsions** | 1 | Animación con flashes rápidos |
| **2.4 Navegable** | 4 | Tab order incorrecto; enlaces vacíos; falta skip-link; sin focus outline |
| **3.1 Legible** | 2 | Cambio de idioma no indicado |
| **3.2 Predictible** | 1 | Cambio de contexto automático en focus |
| **3.3 Assistència a l'entrada** | 2 | Mensajes de error poco claros; falta hint |
| **4.1 Compatible** | 2 | IDs duplicados; botón sin type |

### 5.2 Detalle de Errores

#### 1.1 Alternatives textuals (1 error)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 1 | Imagen decorativa sin atributo `alt` | 1.1.1 (A) | Sí |

#### 1.3 Adaptable (2 errores)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 2 | Campo de búsqueda sin `<label>` asociado | 1.3.1 (A) | Sí |
| 3 | Formulario usando `<div>` en lugar de `<fieldset>` y `<legend>` | 1.3.1 (A) | No |

#### 1.4 Distingible (4 errores)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 4 | Texto gris claro (#8a908a) sobre fondo beige (#f5f2eb) con contraste 2.5:1 | 1.4.3 (AA) | Sí |
| 5 | Texto de 12px sin zoom disponible | 1.4.4 (AA) | Sí |
| 6 | Enlace "nuevo" indicado solo por color rosa (#b85c8a) | 1.4.1 (A) | No |
| 7 | Focus outline removido con `outline: none` sin alternativa | 1.4.11 (AA) | Sí |

#### 2.2 Temps suficient (1 error)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 8 | Banner promocional con animación parpadeante sin control de usuario | 2.2.2 (A) | No |

#### 2.3 Convulsions (1 error)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 9 | Animación CSS con 3+ flashes por segundo | 2.3.1 (A) | No |

#### 2.4 Navegable (4 errores)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 10 | Tab order salta del header al footer, ignorando contenido principal | 2.4.3 (A) | No |
| 11 | Enlaces con `href="#"` sin descripción | 2.4.4 (A) | Sí |
| 12 | Falta enlace "Skip to content" | 2.4.1 (A) | Sí |
| 13 | Navegación por teclado fallida por orden incorrecto | 2.4.3 (A) | No |

#### 3.1 Legible (2 errores)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 14 | Título en catalán "Els millors bancs de parc" sin cambio de idioma en HTML | 3.1.1 (A) | No |
| 15 | Frases en inglés "Best park benches" sin `lang="en"` | 3.1.1 (A) | No |

#### 3.2 Predictible (1 error)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 16 | Select de idioma ejecuta submit al hacer focus (cambio automático) | 3.2.2 (A) | No |

#### 3.3 Assistència a l'entrada (2 errores)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 17 | Mensaje de error "Datos inválidos" sin indicar qué campo ni qué formato | 3.3.1 (A) | No |
| 18 | Placeholder en lugar de label visible en campos del formulario | 3.3.2 (A) | Sí |

#### 4.1 Compatible (2 errores)

| # | Descripción | Criterio | Automatizable |
|---|---|---|---|
| 19 | Dos elementos con `id="menu"` en el DOM | 4.1.1 (A) | Sí |
| 20 | Botón con `<div class="btn">Enviar</div>` sin tipo ni semántica | 4.1.2 (A) | Sí |

### 5.3 Ratio de Detección Esperada

| Tipo | Cantidad | Porcentaje |
|---|---|---|
| **Automatizables** (TAW/Axe/Lighthouse) | 10 | 50% |
| **Manuales** (revisión humana) | 10 | 50% |

---

## 6. Fases de Implementación

### Fase 1: Estructura HTML (Semana 1)
**Objetivo**: Crear la estructura HTML semántica con todas las secciones requeridas

**Tareas**:
1. Crear directorio `css/` y `assets/images/`
2. Crear archivo `index.html` base
3. Implementar estructura semántica:
   - `<header>` con logo y navegación
   - `<main>` con todas las secciones
   - `<footer>` con contacto
4. Crear menú de navegación funcional con anclas (`#hero`, `#galeria`, etc.)
5. Implementar formulario de registro con campos básicos
6. Agregar mapa del sitio con enlaces internos
7. **INTRODUCIR ERRORES**: #12 (falta skip-link), #19 (IDs duplicados)
8. Crear `assets/logo.svg` e `assets/logo.png`
9. Añadir placeholder images para la galería

**Entregable**: `index.html` con estructura completa (sin estilos)

---

### Fase 2: Estilos CSS (Semana 2)
**Objetivo**: Aplicar diseño MiniMax con tonos naturaleza

**Tareas**:
1. Crear `css/styles.css`
2. Importar Google Fonts (DM Sans)
3. Definir variables CSS (colores, spacing, tipografía)
4. Implementar estilos de layout (grid, flexbox, responsive)
5. Estilizar componentes:
   - Header y navegación sticky
   - Hero con tipografía display
   - Grid de galería
   - Tarjetas de bancos
   - Tabla de precios
   - Formulario
   - Footer
6. Implementar breakpoints responsive
7. **INTRODUCIR ERRORES**: #4 (contraste insuficiente), #5 (texto pequeño), #7 (outline none)
8. Aplicar paleta de tonos naturaleza

**Entregable**: `css/styles.css` completo

---

### Fase 3: Interactividad y Errores Específicos (Semana 3)
**Objetivo**: Añadir JavaScript básico e introducir el resto de errores

**Tareas**:
1. Crear `js/main.js` (inline o archivo)
2. Implementar menú hamburguesa para mobile
3. Validación básica del formulario
4. **INTRODUCIR TODOS LOS ERRORES RESTANTES**:
   - #1: Imagen decorativa sin alt
   - #2: Input sin label
   - #3: div en lugar de fieldset
   - #6: Color como único indicador
   - #8: Banner parpadeante
   - #9: Animación con flashes
   - #10-11-13: Tab order, enlaces vacíos, orden de navegación
   - #14-15: Cambios de idioma no indicados
   - #16: Cambio de contexto automático
   - #17-18: Mensajes de error vagos, placeholder en vez de label
   - #20: Botón con div
5. Añadir animaciones CSS para errores 8 y 9

**Entregable**: JavaScript funcional + errores introducidos

---

### Fase 4: Documentación de Errores (Semana 4)
**Objetivo**: Crear la documentación técnica de los errores

**Tareas**:
1. Crear `docs/listado_errores.md` con tabla resumen (raw markdown)
2. Crear `docs/errores_detalle.md` con tabla completa:
   - Criteri WCAG
   - Descripció de l'error
   - Codi Errroni (Snippet) + Línia
   - Impacte en l'usuari
   - Solució proposada
3. Revisar que todos los errores estén correctamente implementados

**Entregables**: `docs/listado_errores.md` y `docs/errores_detalle.md`

---

### Fase 5: Testing y Validación (Semana 5)
**Objetivo**: Verificar errores con herramientas automatizadas

**Tareas**:
1. Subir a hosting gratuito (GitHub Pages / Netlify / Vercel)
2. Ejecutar test TAW (tawdis.net)
3. Ejecutar Axe DevTools o Lighthouse en Chrome
4. Documentar resultados:
   - Errores detectados automáticamente
   - Errores que requieren revisión manual
5. Comparar con el listado de 20 errores

**Entregable**: Informe de resultados con capturas de pantalla

---

## 7. Checklist Final

### README.md - Requisitos:
- [ ] Diseño Responsive y single-page
- [ ] Logo como imagen
- [ ] Menú de navegación funcional
- [ ] Galería de imágenes
- [ ] Secciones: información, promoción, precios
- [ ] Formulario de registro
- [ ] Mapa del sitio y contacto
- [ ] Textos reales
- [ ] Errores de accesibilidad introducidos

### WCAG - Errores:
- [ ] 1.1.1 - 1 error
- [ ] 1.3.1 - 2 errores
- [ ] 1.4.1 - 1 error
- [ ] 1.4.3 - 1 error
- [ ] 1.4.4 - 1 error
- [ ] 1.4.11 - 1 error
- [ ] 2.2.2 - 1 error
- [ ] 2.3.1 - 1 error
- [ ] 2.4.1 - 1 error
- [ ] 2.4.3 - 2 errores
- [ ] 2.4.4 - 1 error
- [ ] 3.1.1 - 2 errores
- [ ] 3.2.2 - 1 error
- [ ] 3.3.1 - 1 error
- [ ] 3.3.2 - 1 error
- [ ] 4.1.1 - 1 error
- [ ] 4.1.2 - 1 error

### Documentación:
- [ ] docs/listado_errores.md
- [ ] docs/errores_detalle.md
- [ ] Capturas de TAW/Axe
- [ ] Informe de detección automática vs manual

---

## 8. Recursos

### Herramientas de Testing:
- [TAW](https://www.tawdis.net/) - Test de accesibilidad
- [Axe DevTools](https://www.deque.com/axe/) - Extensión Chrome
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Integrado en Chrome
- [WAVE](https://wave.webaim.org/) - Evaluador de accesibilidad web

### Documentación:
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Guia d'Accessibilitat WCAG 2.1](https://www.w3.org/WAI/translations/ca/wcag21/)

### Diseño:
- [Google Fonts - DM Sans](https://fonts.google.com/specimen/DM+Sans)
- [DESIGN.md](./DESIGN.md) - Especificación de estilo MiniMax

---

*Documento creado: Mayo 2026*
*Última actualización: Mayo 2026*
