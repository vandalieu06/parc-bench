# Detall d'Errors d'Accessibilitat

## Llegenda

- **Criteri WCAG**: Criteri que es viola
- **Descripció de l'error**: Explicació de l'error introduït
- **Codi Erroni (Snippet) + Línia**: Fragment de codi amb línia on es troba
- **Impacte en l'usuari**: Com afecta l'usuari real
- **Solució proposada**: Correcció recomanada

---

## Error 1 - 1.1.1 Contingut no textual

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.1.1 (A) Alternatives textuals |
| **Descripció** | Imatge decorativa sense atribut alt o amb alt irrellevant. L'hero i les imatges de la galeria no tenen alt descriptiu. |
| **Codi Erroni (Snippet) + Línia** | `index.html:46` `<img src="assets/images/hero-parque.svg" alt="foto">` |
| **Impacte en l'usuari** | Usuaris de lectors de pantalla no reben informació sobre el contingut de la imatge. |
| **Solució proposada** | `alt="Parque Nacional con bancos de madera con vista panorámica"` |

---

## Error 2 - 1.3.1 Informació i relacions (sense label)

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.3.1 (A) Adaptable |
| **Descripció** | Inputs del formulari sense element `<label>` associat. S'usa placeholder com a única guia visual. |
| **Codi Erroni (Snippet) + Línia** | `index.html:283` `<input type="text" id="nombre" placeholder="Nombre completo" required>` |
| **Impacte en l'usuari** | Usuaris de lectors de pantalla no identifiquen el propòsit del camp; el placeholder desapareix en escriure. |
| **Solució proposada** | ```html <label for="nombre">Nombre completo</label> <input type="text" id="nombre" required>``` |

---

## Error 3 - 1.3.1 Informació i relacions (fieldset)

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.3.1 (A) Adaptable |
| **Descripció** | El formulari usa `<div class="form-group">` en lloc d'agrupar amb `<fieldset>` i `<legend>`. |
| **Codi Erroni (Snippet) + Línia** | `index.html:281-295` `<div class="form-group"> <input ...> </div>` |
| **Impacte en l'usuari** | Dificulta la comprensió de l'agrupació de camps per a usuaris de lectors de pantalla. |
| **Solució proposada** | `<fieldset><legend>Dades de registre</legend>...</fieldset>` |

---

## Error 4 - 1.4.3 Contrast mínim

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.4.3 (AA) Distingible |
| **Descripció** | Text en color #8a908a (gris clar) sobre fons #f5f2eb (beige). Ratio de contrast ~2.6:1, inferior al mínim 4.5:1. |
| **Codi Erroni (Snippet) + Línia** | `styles.css:69-72` `.section-subtitle { font-size: 12px; color: #8a908a; }` (fons body: #f5f2eb) |
| **Impacte en l'usuari** | Dificultat severa de lectura per a persones amb baixa visió, daltonisme o en condicions de llum desfavorables. |
| **Solució proposada** | Canviar a `color: #5a6a5a` per aconseguir ratio ≥ 4.5:1 sobre #f5f2eb. |

---

## Error 5 - 1.4.4 Canvi de mida del text

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.4.4 (AA) Distingible |
| **Descripció** | Text de 12px amb propietat `text-size-adjust: none` que bloqueja el zoom de text en navegadors. |
| **Codi Erroni (Snippet) + Línia** | `styles.css:12-14` `html { ... -webkit-text-size-adjust: none; text-size-adjust: none; }` i `styles.css:69` `.section-subtitle { font-size: 12px; }` |
| **Impacte en l'usuari** | Usuaris que necessiten ampliar el text no poden fer-ho; el text petit es manté il·legible. |
| **Solució proposada** | Eliminar `text-size-adjust: none` i usar unitats rem/em per permetre escalat. |

---

## Error 6 - 1.4.1 Ús del color

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.4.1 (A) Distingible |
| **Descripció** | L'estat de disponibilitat s'indica només amb color (verd=disponible, vermell=ocupat) sense text ni icona addicional. |
| **Codi Erroni (Snippet) + Línia** | `index.html:63-64` `<span class="status-dot available"></span><span class="status-dot busy"></span>` |
| **Impacte en l'usuari** | Usuaris amb daltonisme o ceguesa no poden distingir l'estat. |
| **Solució proposada** | Afegir text `"Disponible"` / `"Ocupat"` a cada span o usar aria-label. |

---

## Error 7 - 1.4.11 Contrast d'aparença no textual

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 1.4.11 (AA) Distingible |
| **Descripció** | S'ha eliminat el focus outline globalment amb `*:focus { outline: none; }` sense proporcionar un indicador de focus alternatiu. |
| **Codi Erroni (Snippet) + Línia** | `styles.css:29-31` `*:focus { outline: none; }` |
| **Impacte en l'usuari** | Usuaris de teclat no veuen on tenen el focus, impossibilitant la navegació per teclat. |
| **Solució proposada** | `*:focus { outline: 2px solid #2d4a2d; outline-offset: 2px; }` |

---

## Error 8 - 2.2.2 Posar en pausa, aturar, ocultar

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 2.2.2 (A) Temps suficient |
| **Descripció** | Banner promocional amb animació parpellejant (blink) sense cap control per aturar-la o pausar-la. |
| **Codi Erroni (Snippet) + Línia** | `index.html:275-278` `<div class="promo-banner blink">` i `styles.css:97-101` `animation: blink 0.8s ease-in-out infinite;` |
| **Impacte en l'usuari** | Persones amb trastorns d'atenció o dificultats cognitives es distreuen. No es pot pausar el contingut en moviment. |
| **Solució proposada** | Afegir un botó "Aturar animació" o usar `prefers-reduced-motion: reduce`. |

---

## Error 9 - 2.3.1 Tres llampecs o per sota del llindar

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 2.3.1 (A) Convulsions |
| **Descripció** | Element amb animació de flaixos ràpids (0.5s per cicle) amb canvis de color i opacitat, sense avís previ. |
| **Codi Erroni (Snippet) + Línia** | `index.html:277` `<span class="flash-element" aria-hidden="true"></span>` i `styles.css:104-115` `animation: flash 0.5s step-end infinite;` |
| **Impacte en l'usuari** | Persones amb epilèpsia fotosensible podrien patir convulsions. |
| **Solució proposada** | Eliminar l'animació o assegurar que no superi 3 flaixos per segon. |

---

## Error 10 - 2.4.3 Ordre del focus

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 2.4.3 (A) Navegable |
| **Descripció** | Ordre de tabulació incorrecta: els enllaços del footer tenen `tabindex="1"` mentre que la navegació principal té `tabindex="2"`. |
| **Codi Erroni (Snippet) + Línia** | `index.html:323-329` `<li><a href="#inicio" tabindex="1">Inicio</a></li>` i `index.html:23` `<li><a href="#inicio" tabindex="2">Inicio</a></li>` |
| **Impacte en l'usuari** | Usuaris de teclat naveguen al footer abans que al contingut principal, causant confusió. |
| **Solució proposada** | Eliminar `tabindex` i deixar l'ordre natural del DOM. |

---

## Error 11 - 2.4.4 Propòsit dels enllaços (en context)

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 2.4.4 (A) Navegable |
| **Descripció** | Enllaç amb href="#" sense cap URL o descripció significativa ("Enlace vacío"). |
| **Codi Erroni (Snippet) + Línia** | `index.html:329` `<a href="#" tabindex="1">Enlace vacío</a>` |
| **Impacte en l'usuari** | Usuaris de lectors de pantalla troben un enllaç sense propòsit clar ni destí. |
| **Solució proposada** | Assignar URL real o eliminar l'enllaç. |

---

## Error 12 - 2.4.1 Evitar blocs

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 2.4.1 (A) Navegable |
| **Descripció** | No hi ha cap enllaç "Skip to content" / "Saltar al contingut principal" al principi del body. |
| **Codi Erroni (Snippet) + Línia** | `index.html:12-33` El body comença directament amb el header, sense cap enllaç de salt. |
| **Impacte en l'usuari** | Usuaris de lectors de pantalla han de navegar per tot el menú abans d'arribar al contingut principal. |
| **Solució proposada** | Afegir `<a href="#main-content" class="skip-link">Saltar al contingut principal</a>` després del `<body>`. |

---

## Error 13 - 2.4.3 Ordre del focus (navegació per teclat)

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 2.4.3 (A) Navegable |
| **Descripció** | La navegació per teclat falla perquè els `tabindex` estan assignats en ordre aleatori (footer=1, nav=2, sitemap=1 altra vegada). |
| **Codi Erroni (Snippet) + Línia** | `index.html:23-30` (tabindex=2) i `index.html:323-329` (tabindex=1) - valors inconsistents |
| **Impacte en l'usuari** | Usuari no pot predir on anirà el focus, navegació erràtica. |
| **Solució proposada** | Eliminar tots els `tabindex` i confiar en l'ordre natural del DOM. |

---

## Error 14 - 3.1.1 Idioma de la pàgina

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 3.1.1 (A) Legible |
| **Descripció** | Text en català ("Els millors bancs de parc, valorats per tu") sense marcar amb `lang="ca"` en un document amb `lang="es"`. |
| **Codi Erroni (Snippet) + Línia** | `index.html:54-55` `<p class="section-subtitle">Els millors bancs de parc, valorats per tu</p>` |
| **Impacte en l'usuari** | Lectors de pantalla apliquen pronunciació espanyola al català, fent-lo incomprensible. |
| **Solució proposada** | `<p class="section-subtitle" lang="ca">Els millors bancs de parc, valorats per tu</p>` |

---

## Error 15 - 3.1.1 Idioma de la pàgina (canvi d'idioma)

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 3.1.1 (A) Legible |
| **Descripció** | Text en anglès ("Best park benches, curated by our community") sense marcar amb `lang="en"`. |
| **Codi Erroni (Snippet) + Línia** | `index.html:56-57` `<p class="section-subtitle">Best park benches, curated by our community</p>` |
| **Impacte en l'usuari** | Lectors de pantalla apliquen pronunciació espanyola a l'anglès. |
| **Solució proposada** | `<p class="section-subtitle" lang="en">Best park benches, curated by our community</p>` |

---

## Error 16 - 3.2.2 Al canviar d'element

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 3.2.2 (A) Predictible |
| **Descripció** | El `<select>` envia el formulari automàticament en rebre focus (onchange submit), provocant un canvi de context inesperat. |
| **Codi Erroni (Snippet) + Línia** | `index.html:298` `<select id="plan" onchange="this.form.submit()">` |
| **Impacte en l'usuari** | L'usuari pot enviar el formulari accidentalment només en navegar pel menú desplegable. |
| **Solució proposada** | Eliminar `onchange="this.form.submit()"` i afegir un botó "Enviar" explícit. |

---

## Error 17 - 3.3.1 Identificació d'errors

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 3.3.1 (A) Assistència a l'entrada |
| **Descripció** | El missatge d'error "Error: Datos inválidos. Por favor, revise el formulario." no especifica quin camp falla ni el format esperat. |
| **Codi Erroni (Snippet) + Línia** | `js/main.js:23-26` `message.textContent = 'Error: Datos inválidos. Por favor, revise el formulario.';` |
| **Impacte en l'usuari** | L'usuari no sap què ha de corregir, especialment problemàtic per a persones amb discapacitat cognitiva. |
| **Solució proposada** | Indicar exactament el camp: "El campo Correo electrónico no es válido. Debe contener @" |

---

## Error 18 - 3.3.2 Etiquetes o instruccions

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 3.3.2 (A) Assistència a l'entrada |
| **Descripció** | Els inputs del formulari usen `placeholder` com a única etiqueta visible, sense cap `<label>` associat. |
| **Codi Erroni (Snippet) + Línia** | `index.html:283-294` `<input type="text" id="nombre" placeholder="Nombre completo" required>` (3 inputs iguals) |
| **Impacte en l'usuari** | El placeholder desapareix en escriure; usuaris amb memòria a curt termini reduïda obliden què han d'escriure. |
| **Solució proposada** | ```html <label for="nombre">Nombre completo</label> <input type="text" id="nombre">``` |

---

## Error 19 - 4.1.1 Processament (Parsing)

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 4.1.1 (A) Compatible |
| **Descripció** | Tres elements al DOM tenen el mateix `id="menu"`: header, nav i un div. Els IDs han de ser únics. |
| **Codi Erroni (Snippet) + Línia** | `index.html:15` `<header id="menu">` / `index.html:20` `<nav id="menu">` / `index.html:308` `<div id="menu" class="btn...">` |
| **Impacte en l'usuari** | Lectors de pantalla i eines d'assistència es confonen; JavaScript no pot referenciar correctament l'element. |
| **Solució proposada** | Assignar IDs únics: `id="header"`, `id="nav-main"`, `id="btn-submit"`. |

---

## Error 20 - 4.1.2 Nom, funció, valor

| Camp | Detall |
|---|---|
| **Criteri WCAG** | 4.1.2 (A) Compatible |
| **Descripció** | El botó d'enviament és un `<div>` amb `onclick` en lloc d'un `<button>` o `<input type="submit">`. No té `role="button"`, `tabindex`, ni suport de teclat. |
| **Codi Erroni (Snippet) + Línia** | `index.html:307-308` `<div id="menu" class="btn btn-primary btn-large btn-full" onclick="...">Crear cuenta</div>` |
| **Impacte en l'usuari** | Usuaris de teclat no poden activar el botó amb Enter/Espai; lectors de pantalla no l'identifiquen com a botó. |
| **Solució proposada** | `<button type="submit" class="btn btn-primary btn-large btn-full">Crear cuenta</button>` |

---

## Errors per Pauta WCAG

| Pauta | Quantitat | Errors |
|-------|-----------|--------|
| **1.1 Alternatives textuals** | 1 | #1 |
| **1.3 Adaptable** | 2 | #2, #3 |
| **1.4 Distingible** | 4 | #4, #5, #6, #7 |
| **2.2 Temps suficient** | 1 | #8 |
| **2.3 Convulsions** | 1 | #9 |
| **2.4 Navegable** | 4 | #10, #11, #12, #13 |
| **3.1 Legible** | 2 | #14, #15 |
| **3.2 Predictible** | 1 | #16 |
| **3.3 Assistència a l'entrada** | 2 | #17, #18 |
| **4.1 Compatible** | 2 | #19, #20 |

## Detecció automàtica vs manual

| Tipus | Quantitat | Errors |
|-------|-----------|--------|
| **Detectable automàticament** (TAW, Axe, Lighthouse) | 10 | #1, #2, #4, #5, #7, #11, #12, #18, #19, #20 |
| **Requereix revisió manual** | 10 | #3, #6, #8, #9, #10, #13, #14, #15, #16, #17 |

---
*Document generat: Maig 2026*
