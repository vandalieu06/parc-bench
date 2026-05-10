# Mòdul 0615: Disseny d'interfícies web

## ACT15: Accessibilitat i usabilitat

## EXERCICI 1

Crea una pàgina web d'una sola plana per promocionar un dels següents negocis.

* **Guia de bancs de parcs.** Plataforma per intercanviar experiències amb bancs de parc. Rànquing dels més còmodes, nets, tranquils, amb millors vistes, etc.

Qualsevol de les tres negocis ha de basar-se en una sola proposta concreta.

L'objectiu és captar clients i registrar inscripcions per a un cas concret.

### Requisits imprescindibles

* Disseny Responsive i en una sola plana web.
* El logo de la web ha de ser una imatge.
* Menú de navegació funcional.
* Galeria d'imatges i seccions d'informació, promoció i preus.
* Formulari de contacte, registre o confirmació.
* Mapa del lloc i informació de contacte dels organitzadors.
* Textos reals i fragments en diferents idiomes respecte al principal.
* Inclou dins el codi de la teva web un seguit d'errors d'accessibilitat. Els requeriments d'errors es citaran a l'exercici 2.

## EXERCICI 2

Dins del codi de la teva web, has d'introduir deliberadament els següents errors d'accessibilitat basats en les pautes WCAG:

| Pauta WCAG | Quantitat mínima d'errors |
| :--- | :--- |
| **1.1 Alternatives textuals** | 1 error (ex. imatge sense alt o amb alt irrellevant). |
| **1.3 Adaptable** | 2 errors diferents de les pautes 1.3.x (ex. falta de semàntica en formularis). |
| **1.4 Distingible** | 4 errors diferents de les pautes 1.4.x (ex. contrast insuficient de color). |
| **2.2 Temps suficient** | 1 error (ex. contingut que parpelleja sense control de l'usuari). |
| **2.3 Convulsions** | 1 error (ex. flaixos ràpids Nota: simular sense risc real). |
| **2.4 Navegable** | 4 errors diferents de les pautes 2.4.x (ex. ordre de tabulació incorrecte). |
| **3.1 Legible** | 2 errors diferents de les pautes 3.1.x (ex. no indicar canvi d'idioma en el text). |
| **3.2 Predictible** | 1 error (ex. canvi de context automàtic en fer focus en un camp). |
| **3.3 Assistència a l'entrada** | 2 errors diferents de les pautes 3.3.x (ex. missatges d'error poc clars). |
| **4.1 Compatible** | 2 errors diferents de les pautes 4.1.x (ex. IDs duplicats en el DOM). |

## EXERCICI 3

Puja la teva pàgina a un hosting gratuït i realitza les següents comprovacions:

1. Mostra el resultat del test TAW (o eines alternatives com Axe o Lighthouse).
2. Comprova quants dels errors que has introduït són detectats automàticament i quants necessitarien una revisió manual.

## EXERCICI 4

Fes un llistat de tots els errors introduïts, incloent el codi i l'explicació. Per a cada error, omple una taula amb aquest format:

| Criteri WCAG | Descripció de l'error | Codi Erroni *(Snippet) + Línia* | Impacte en l'usuari | Solució proposada |
| :--- | :--- | :--- | :--- | :--- |
| **1.4.3 (AA)** | Contrast de color insuficient | `<p style="color: #eee">...</p>` | Dificultat de lectura per a persones amb baixa visió. | Utilitzar colors amb ràtio de contrast 4.5:1. |
