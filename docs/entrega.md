# Informe de Lliurament — ACT15: Accessibilitat i Usabilitat

**Projecte**: ParcBench - Guia de Bancs de Parcs
**Alumne**: Jhonny Vicmar Claure Vedia
**Data**: Maig 2026
**Mòdul**: 0615 - Disseny d'interfícies web

---

## 1. Enllaç per descarregar els arxius font

Repositori de GitHub amb tots els arxius font del projecte:

```
https://github.com/vandalieu06/parc-bench
```

### Estructura del projecte

```
parc-bench/
├── index.html                    # Landing page principal (single-page)
├── css/
│   └── styles.css                # Estils MiniMax + tons natura
├── js/
│   └── main.js                   # Menú hamburguesa + validació formulari
├── assets/
│   ├── logo.svg                  # Logo SVG
│   ├── logo.png                  # Logo PNG
│   └── images/
│       ├── hero-parque.svg       # Imatge hero del parc
│       ├── banco-1.svg           # Banco Clàssic
│       ├── banco-2.svg           # Banco Modern
│       ├── banco-3.svg           # Banco Jardí Botànic
│       ├── banco-4.svg           # Banco Vista Lago
│       ├── banco-5.svg           # Banco Colina del Silencio
│       └── banco-6.svg           # Banco Fuente de los Sueños
├── docs/
│   ├── entrega.md                # Aquest document
│   ├── capturas_errores.md       # Captures de les eines de test
│   ├── listado_errores.md        # Resum dels 20 errors WCAG
│   ├── errores_detalle.md        # Taula detallada d'errors
│   ├── plans/
│   │   └── PROJECT_PLAN.md       # Planificació del projecte
│   └── changes/
│       └── 2026-05-10-implementacio-act15.md
├── DESIGN.md                     # Especificació MiniMax
└── README.md                     # Enunciat de l'ACT15
```

---

## 2. URL on s'allotja la pàgina web

La pàgina es troba desplegada a GitHub Pages:

```
https://vandalieu06.github.io/parc-bench/
```

---

## 3. Captures de la pàgina web

### 3.1 PageSpeed Insights

Anàlisi de rendiment i accessibilitat realitzat amb Google PageSpeed Insights.

**URL de l'anàlisi**: https://pagespeed.web.dev/analysis/https-vandalieu06-github-io-parc-bench/h8tnekv1g0?form_factor=mobile

![PageSpeed Insights - Resultat 1](assets/Pasted%20image%2020260510231109.png)
![PageSpeed Insights - Resultat 2](assets/Pasted%20image%2020260510231140.png)
![PageSpeed Insights - Resultat 3](assets/Pasted%20image%2020260510231024.png)
![PageSpeed Insights - Resultat 4](assets/Pasted%20image%2020260510231035.png)
![PageSpeed Insights - Resultat 5](assets/Pasted%20image%2020260510231045.png)

### 3.2 Visió general de la pàgina (tabulacions)

![Tabulacions i estructura de la pàgina](assets/Pasted%20image%2020260510230852.png)

---

## 4. Resultat test TAW

Test d'accessibilitat realitzat amb l'eina **TAW (tawdis.net)**.

![Resultat TAW](assets/Pasted%20image%2020260510231237.png)

---

## 5. Resultat test WAVE

Test d'accessibilitat realitzat amb l'eina **WAVE (WebAIM)**.

![Resultat WAVE](assets/Pasted%20image%2020260510231404.png)

---

## 6. Resultat test pa11y

Test d'accessibilitat realitzat amb l'eina **pa11y**.

![Resultat pa11y](assets/Pasted%20image%2020260510232044.png)

---

## 7. Llistat d'errors generats (20 errors WCAG)

Errors d'accessibilitat introduïts deliberadament a la pàgina, classificats per pauta WCAG i amb indicació de si són detectables automàticament o requereixen revisió manual.

| # | Criteri WCAG | Descripció de l'error | Arxiu: Línia | Impacte | Solució proposada | Detecció |
|---|---|---|---|---|---|---|
| 1 | **1.1.1** (A) Alternatives textuals | Imatge decorativa sense `alt` descriptiu (`alt="foto"`) | `index.html:46` | Lectors de pantalla no reben informació de la imatge | `alt="Parque Nacional con bancos de madera con vista panorámica"` | Automàtica |
| 2 | **1.3.1** (A) Informació i relacions | Inputs del formulari sense `<label>` associat; només placeholder | `index.html:283` | Usuaris de lectors de pantalla no identifiquen el propòsit del camp | Afegir `<label for="nombre">` a cada input | Automàtica |
| 3 | **1.3.1** (A) Informació i relacions | Formulari usa `<div class="form-group">` en lloc de `<fieldset>` i `<legend>` | `index.html:281-295` | Dificulta la comprensió de l'agrupació de camps | Usar `<fieldset><legend>Dades de registre</legend>` | Manual |
| 4 | **1.4.3** (AA) Contrast mínim | Text #8a908a sobre fons #f5f2eb (~2.6:1, mínim 4.5:1) | `styles.css:69-72` | Dificultat de lectura per a persones amb baixa visió | Canviar a `color: #5a6a5a` | Automàtica |
| 5 | **1.4.4** (AA) Canvi de mida del text | Text 12px amb `text-size-adjust: none` bloqueja el zoom | `styles.css:12-14,69` | Usuaris no poden ampliar el text | Eliminar `text-size-adjust:none` i usar rem/em | Automàtica |
| 6 | **1.4.1** (A) Ús del color | Estat indicat només per color (verd/vermell) sense text ni icona | `index.html:63-64` | Usuaris amb daltonisme no distingeixen l'estat | Afegir text "Disponible"/"Ocupat" o aria-label | Manual |
| 7 | **1.4.11** (AA) Contrast d'aparença no textual | `*:focus { outline: none; }` sense indicador de focus alternatiu | `styles.css:29-31` | Usuaris de teclat no veuen on tenen el focus | `*:focus { outline: 2px solid #2d4a2d; outline-offset: 2px; }` | Automàtica |
| 8 | **2.2.2** (A) Posar en pausa, aturar, ocultar | Banner promocional amb animació parpellejant sense control d'usuari | `index.html:275`, `styles.css:97-101` | Persones amb trastorns d'atenció es distreuen | Afegir botó "Aturar animació" o `prefers-reduced-motion` | Manual |
| 9 | **2.3.1** (A) Tres llampecs o per sota del llindar | Animació CSS amb flaixos ràpids (0.5s per cicle) sense avís previ | `index.html:277`, `styles.css:104-115` | Persones amb epilèpsia fotosensible podrien patir convulsions | Eliminar l'animació o assegurar ≤3 flaixos/segon | Manual |
| 10 | **2.4.3** (A) Ordre del focus | Footer té `tabindex=1` mentre que nav té `tabindex=2` | `index.html:23-30,323-329` | Usuaris de teclat naveguen al footer abans que al contingut | Eliminar `tabindex` i usar ordre natural del DOM | Manual |
| 11 | **2.4.4** (A) Propòsit dels enllaços | Enllaç buit amb `href="#"` i text "Enlace vacío" sense descripció | `index.html:329` | Lectors de pantalla troben un enllaç sense propòsit | Assignar URL real o eliminar l'enllaç | Automàtica |
| 12 | **2.4.1** (A) Evitar blocs | No hi ha enllaç "Skip to content" / "Saltar al contingut principal" | `index.html:12-33` | Usuaris han de navegar tot el menú abans del contingut | Afegir `<a href="#main-content" class="skip-link">` | Automàtica |
| 13 | **2.4.3** (A) Ordre del focus (navegació teclat) | `tabindex` inconsistents: footer=1, nav=2, sitemap=1 | `index.html:23-30,323-329` | Navegació erràtica, usuari no pot predir el focus | Eliminar tots els `tabindex` | Manual |
| 14 | **3.1.1** (A) Idioma de la pàgina | Text en català sense `lang="ca"` ("Els millors bancs de parc") | `index.html:54-55` | Lectors de pantalla apliquen pronunciació espanyola al català | `<p lang="ca">` | Manual |
| 15 | **3.1.1** (A) Idioma de la pàgina | Text en anglès sense `lang="en"` ("Best park benches") | `index.html:56-57` | Lectors de pantalla apliquen pronunciació espanyola a l'anglès | `<p lang="en">` | Manual |
| 16 | **3.2.2** (A) Al canviar d'element | `<select>` envia el formulari automàticament en rebre focus (`onchange submit`) | `index.html:298` | L'usuari pot enviar el formulari accidentalment | Eliminar `onchange="this.form.submit()"` i afegir botó "Enviar" | Manual |
| 17 | **3.3.1** (A) Identificació d'errors | Missatge genèric "Datos inválidos" sense indicar el camp erroni | `js/main.js:23-26` | L'usuari no sap què ha de corregir | Indicar exactament el camp: "El campo Correo no es válido" | Manual |
| 18 | **3.3.2** (A) Etiquetes o instruccions | `placeholder` com a única etiqueta; sense `<label>` visible | `index.html:283-294` | Placeholder desapareix en escriure; usuaris obliden què han d'omplir | Afegir `<label for="...">` a cada input | Automàtica |
| 19 | **4.1.1** (A) Processament (Parsing) | Tres elements amb `id="menu"` duplicat: header, nav i div | `index.html:15,20,308` | Lectors de pantalla es confonen; JS no referència correctament | Assignar IDs únics: `id="header"`, `id="nav-main"`, etc. | Automàtica |
| 20 | **4.1.2** (A) Nom, funció, valor | Botó d'enviament és un `<div>` amb `onclick` en lloc de `<button>` | `index.html:307-308` | Usuaris de teclat no poden activar-lo amb Enter/Espai | `<button type="submit">Crear cuenta</button>` | Automàtica |

---

## 8. Resum de detecció

| Tipus | Quantitat | Percentatge |
|-------|-----------|-------------|
| Errors detectables automàticament (TAW / Axe / Lighthouse) | 10 | 50% |
| Errors que requereixen revisió manual | 10 | 50% |
| **Total** | **20** | **100%** |

### Distribució per pauta WCAG

| Pauta WCAG | Quantitat | Errors |
|------------|-----------|--------|
| 1.1 Alternatives textuals | 1 | #1 |
| 1.3 Adaptable | 2 | #2, #3 |
| 1.4 Distingible | 4 | #4, #5, #6, #7 |
| 2.2 Temps suficient | 1 | #8 |
| 2.3 Convulsions | 1 | #9 |
| 2.4 Navegable | 4 | #10, #11, #12, #13 |
| 3.1 Legible | 2 | #14, #15 |
| 3.2 Predictible | 1 | #16 |
| 3.3 Assistència a l'entrada | 2 | #17, #18 |
| 4.1 Compatible | 2 | #19, #20 |

---

## 9. Eines de test utilitzades

| Eina | URL | Propòsit |
|------|-----|----------|
| **PageSpeed Insights** | https://pagespeed.web.dev/ | Rendiment i accessibilitat |
| **TAW** | https://www.tawdis.net/ | Anàlisi d'accessibilitat WCAG |
| **WAVE** | https://wave.webaim.org/ | Evaluació d'accessibilitat web |
| **pa11y** | https://pa11y.org/ | Test automatitzat d'accessibilitat |

---

*Document generat: Maig 2026*
