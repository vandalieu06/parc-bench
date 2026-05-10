# Listado de Errores de Accesibilidad

## Resumen por Pauta WCAG

| # | Pauta WCAG | Criterio | Descripció de l'error | Detectable |
|---|------------|----------|----------------------|------------|
| 1 | **1.1 Alternatives textuals** | 1.1.1 (A) | Imatge sense alt o amb alt irrellevant | Automàtic |
| 2 | **1.3 Adaptable** | 1.3.1 (A) | Input sense label associat | Automàtic |
| 3 | **1.3 Adaptable** | 1.3.1 (A) | Formulari usa div en lloc de fieldset/legend | Manual |
| 4 | **1.4 Distingible** | 1.4.3 (AA) | Contrast de color insuficient (#8a908a sobre #f5f2eb, ~2.6:1) | Automàtic |
| 5 | **1.4 Distingible** | 1.4.4 (AA) | Text a 12px amb zoom de text bloquejat (text-size-adjust:none) | Automàtic |
| 6 | **1.4 Distingible** | 1.4.1 (A) | Estat indicat només per color (verd/vermell sense text) | Manual |
| 7 | **1.4 Distingible** | 1.4.11 (AA) | Focus outline eliminat globalment (outline:none) sense alternativa | Automàtic |
| 8 | **2.2 Temps suficient** | 2.2.2 (A) | Banner promocional amb animació parpellejant sense control d'usuari | Manual |
| 9 | **2.3 Convulsions** | 2.3.1 (A) | Animació CSS amb flashes ràpids (3+ per segon) sense avís previ | Manual |
| 10 | **2.4 Navegable** | 2.4.3 (A) | Ordre de tabulació incorrecte (footer tabindex=1 abans que nav tabindex=2) | Manual |
| 11 | **2.4 Navegable** | 2.4.4 (A) | Enllaç buit amb href="#" sense descripció | Automàtic |
| 12 | **2.4 Navegable** | 2.4.1 (A) | Falta enllaç "Skip to content" per saltar navegació | Automàtic |
| 13 | **2.4 Navegable** | 2.4.3 (A) | Navegació per teclat fallida per ordre tabindex erroni | Manual |
| 14 | **3.1 Legible** | 3.1.1 (A) | Text en català sense lang="ca" ("Els millors bancs de parc") | Manual |
| 15 | **3.1 Legible** | 3.1.1 (A) | Text en anglès sense lang="en" ("Best park benches") | Manual |
| 16 | **3.2 Predictible** | 3.2.2 (A) | Canvi de context automàtic al fer focus en select (onchange submit) | Manual |
| 17 | **3.3 Assistència a l'entrada** | 3.3.1 (A) | Missatge d'error vague: "Datos inválidos" sense indicar camp | Manual |
| 18 | **3.3 Assistència a l'entrada** | 3.3.2 (A) | Placeholder substituint label visible en inputs del formulari | Automàtic |
| 19 | **4.1 Compatible** | 4.1.1 (A) | IDs duplicats (tres elements amb id="menu" al DOM) | Automàtic |
| 20 | **4.1 Compatible** | 4.1.2 (A) | Botó creat amb div sense role="button" ni semàntica | Automàtic |

## Recompte

| Tipus | Quantitat |
|-------|-----------|
| Errors automàtics (detectables per TAW/Axe/Lighthouse) | 10 |
| Errors manuals (requereixen revisió humana) | 10 |
| **Total** | **20** |

---
*Document generat: Maig 2026*
