# Registre de Canvis - ACT15 Accessibilitat i Usabilitat

**Data**: 2026-05-10
**Projecte**: ParcBench - Guia de Bancs de Parcs

---

## Resum

Implementació completa de les fases 1-4 del projecte ACT15: creació d'una landing page per a la "Guia de Bancs de Parcs" amb disseny MiniMax adaptat a tons natura, introduint 20 errors d'accessibilitat WCAG.

---

## Canvis Realitzats

### 1. Estructura del Projecte

```
DAW2_DissWeb_ACT15/
├── index.html                    # Landing page principal
├── css/
│   └── styles.css               # Estils MiniMax + tons natura
├── js/
│   └── main.js                  # Menú hamburguesa + validació formulari
├── assets/
│   ├── logo.svg                 # Logo SVG (banc de parc estilitzat)
│   ├── logo.png                 # Logo PNG
│   └── images/
│       ├── hero-parque.svg      # Imatge hero del parc
│       ├── banco-1.svg          # Banco Clàssic
│       ├── banco-2.svg          # Banco Modern
│       ├── banco-3.svg          # Banco Jardí Botànic
│       ├── banco-4.svg          # Banco Vista Lago
│       ├── banco-5.svg          # Banco Colina del Silencio
│       └── banco-6.svg          # Banco Fuente de los Sueños
├── docs/
│   ├── plans/
│   │   └── PROJECT_PLAN.md      # Pla detallat del projecte
│   ├── changes/
│   │   └── 2026-05-10-implementacio-act15.md  # Aquest document
│   ├── listado_errores.md       # Resum dels 20 errors WCAG
│   └── errores_detalle.md       # Taula detallada amb snippet, impacte i solució
├── DESIGN.md                    # Especificació MiniMax original
└── README.md                    # Enunciat de l'ACT15
```

---

### 2. index.html — Estructura i Contingut

**Seccions implementades** (single-page):
| Secció | ID | Descripció |
|--------|----|------------|
| Header/Nav | — | Sticky amb logo SVG i navegació funcional |
| Hero | `#inicio` | Títol 80px, subtítol, CTAs duplicats, imatge destacada |
| Galeria | `#galeria` | Grid 3×2 de 6 bancs amb imatges i descripcions |
| Informació | `#informacion` | 3 targetes de funcionalitats + estadístiques |
| Promoció | `#promocion` | 4 targetes de bancs destacats + CTA promocional |
| Preus | `#precios` | 3 plans (Gratis, Aventurero, Supremo) |
| Formulari | `#registro` | Registre amb nom, email, contrasenya, pla |
| Mapa del lloc | `#sitio` | 4 columnes amb enllaços interns |
| Footer | `#contacto` | Contacte, horari, copyright |

**Idioma**: Espanyol (català i anglès només com a errors d'accessibilitat)

---

### 3. css/styles.css — Disseny MiniMax + Natura

**Paleta de colors adaptada**:
- Primary: `#2d4a2d` (verd bosc) → CTAs, navegació
- Brand Coral: `#c4783c` (marró càlid) → targetes destacades, badges
- Brand Blue: `#4a90a4` (blau llac) → targetes secundàries
- Brand Purple: `#7c5cbf` → targetes especials
- Brand Magenta: `#b85c8a` → targetes destacades
- Canvas: `#f5f2eb` (beige) → fons principal
- Surface: `#e8e4d9` (arena) → seccions alternes
- Ink: `#1a2e1a` (verd fosc) → textos principals

**Tipografia**: DM Sans (Google Fonts)
- Hero: 80px, w600, lh1.10, ls-2px
- Body: 16px, w400, lh1.50

**Components clau**:
- Botons pill (border-radius: 9999px)
- Targetes amb border-radius 16px (estàndard) i 32px (destacades)
- Graella de galeria (3 col), matriu promocional (4 col), graella de preus (3 col)
- Layout responsive (4 breakpoints: 479, 767, 1023, 1279px)

---

### 4. js/main.js — Interactivitat

- **Menú hamburguesa** per a mobile (crea botó dinàmicament, toggle classe `.nav-open`)
- **Validació de formulari** amb missatge d'error vague (error #17 intencionat)

---

### 5. Errors d'Accessibilitat Introduïts (20 errors)

| # | Criteri WCAG | Descripció | Arxiu: Línia |
|---|-------------|------------|-------------|
| 1 | 1.1.1 (A) | Imatge sense alt o alt irrellevant | `index.html`:46,61,85 |
| 2 | 1.3.1 (A) | Input sense label associat | `index.html`:283,288,293 |
| 3 | 1.3.1 (A) | div en lloc de fieldset/legend | `index.html`:281-295 |
| 4 | 1.4.3 (AA) | Contrast insuficient (#8a908a/#f5f2eb ~2.6:1) | `styles.css`:69-72 |
| 5 | 1.4.4 (AA) | Text 12px + text-size-adjust:none | `styles.css`:12-14,69 |
| 6 | 1.4.1 (A) | Estat indicat només per color | `index.html`:63-64 |
| 7 | 1.4.11 (AA) | Focus outline:none global | `styles.css`:29-31 |
| 8 | 2.2.2 (A) | Banner parpellejant sense control | `index.html`:275, `styles.css`:97-101 |
| 9 | 2.3.1 (A) | Flaixos ràpids (0.5s cicle) | `index.html`:277, `styles.css`:104-115 |
| 10 | 2.4.3 (A) | Taborder incorrecte (footer=1, nav=2) | `index.html`:23-30,323-329 |
| 11 | 2.4.4 (A) | Enllaç buit href="#" | `index.html`:329 |
| 12 | 2.4.1 (A) | Falta skip-link | `index.html`:12-33 |
| 13 | 2.4.3 (A) | Navegació teclat erràtica (tabindex) | `index.html`:23-30,323-329 |
| 14 | 3.1.1 (A) | Català sense lang="ca" | `index.html`:54-55 |
| 15 | 3.1.1 (A) | Anglès sense lang="en" | `index.html`:56-57 |
| 16 | 3.2.2 (A) | Context automàtic en focus (onchange submit) | `index.html`:298 |
| 17 | 3.3.1 (A) | Missatge d'error vague | `js/main.js`:23-26 |
| 18 | 3.3.2 (A) | Placeholder en lloc de label | `index.html`:283,288,293 |
| 19 | 4.1.1 (A) | IDs duplicats (3× id="menu") | `index.html`:15,20,308 |
| 20 | 4.1.2 (A) | div com a botó sense semàntica | `index.html`:307-308 |

**Ratio de detecció**: 10 automatitzables / 10 manuals

---

### 6. Resum d'Arxius Creats/Modificats

| Arxiu | Acció | Mida aprox. |
|-------|-------|-------------|
| `index.html` | Creat | ~8.5 KB |
| `css/styles.css` | Creat | ~12 KB |
| `js/main.js` | Creat | ~1.2 KB |
| `assets/logo.svg` | Creat | ~0.5 KB |
| `assets/logo.png` | Preexistent | ~33 KB |
| `assets/images/hero-parque.svg` | Creat | ~0.8 KB |
| `assets/images/banco-1.svg` | Creat | ~0.6 KB |
| `assets/images/banco-2.svg` | Creat | ~0.6 KB |
| `assets/images/banco-3.svg` | Creat | ~0.6 KB |
| `assets/images/banco-4.svg` | Creat | ~0.6 KB |
| `assets/images/banco-5.svg` | Creat | ~0.6 KB |
| `assets/images/banco-6.svg` | Creat | ~0.6 KB |
| `docs/plans/PROJECT_PLAN.md` | Creat | ~8 KB |
| `docs/changes/2026-05-10-implementacio-act15.md` | Creat | ~4 KB |
| `docs/listado_errores.md` | Creat | ~2.5 KB |
| `docs/errores_detalle.md` | Creat | ~6 KB |

---

### 7. Estat del Projecte

| Fase | Estat |
|------|-------|
| Fase 1: Estructura HTML | ✅ Completada |
| Fase 2: Estils CSS | ✅ Completada |
| Fase 3: JavaScript + Errors | ✅ Completada |
| Fase 4: Documentació d'errors | ✅ Completada |
| Fase 5: Testing i validació | ⏳ Pendent (usuari) |

**Properes passes**: Pujar a GitHub Pages i executar TAW/Axe/Lighthouse per verificar la detecció d'errors.

---
*Document generat: 2026-05-10*
