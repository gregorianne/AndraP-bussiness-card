# Portofoliu personal

Site-portofoliu de o pagină, făcut de la zero, fără framework-uri.

## Ce conține

- Prezentare scurtă, cu link-uri către GitHub și email
- Secțiunea „Ce fac acum"
- Contact
- Variantă în română și în engleză, cu buton RO / EN

## Tehnologii

- HTML și CSS, în `index.html`; textele, în `content.js`
- JavaScript simplu (vanilla), fără biblioteci
- `<canvas>` pentru panglica animată
- Fonturi: Fraunces și Hanken Grotesk, încărcate din Google Fonts

## Structura

```
index.html   # structură, stiluri și scripturi
content.js   # toate textele, link-urile și numele (aici editezi conținutul)
README.md
```

## Cum funcționează

- **Panglica:** textura patchwork (petice colorate, flori, frunze și pătrate cu cod) se desenează o singură dată pe un canvas ascuns. La fiecare cadru se redesenează doar forma panglicii, pentru partea vizibilă pe ecran, și textura e decupată după ea. Astfel mișcarea rămâne fluidă fără să redesenez sute de elemente.
- **Efecte la scroll:** textul și butoanele apar cu fade-in când ajung pe ecran, iar titlurile se scriu litera cu literă (typewriter), cu `IntersectionObserver`. Fiecare efect rulează o singură dată pe element.
- **Conținut și limbi:** textele, numele și link-urile sunt în `content.js` (`window.SITE`), separate de cod, în română și engleză. Elementele din HTML au atribute `data-i18n` sau `data-site`, iar un script le completează. Limba inițială vine din setările browserului, iar alegerea se reține în `localStorage`. Titlurile cu efect typewriter sunt refăcute la schimbarea limbii.
- **Accesibilitate:** dacă sistemul are „reduce motion" activat, animațiile sunt oprite și panglica rămâne statică. Titlurile au `aria-label` cu textul complet.

## Publicare

Pagina conține `<meta name="robots" content="noindex">`, deci nu e indexată de motoarele de căutare. 

## Idei pentru mai târziu

- Secțiune de proiecte, cu link-uri către repo-uri
- Galerie de artă
- Fonturi găzduite local, în loc de Google Fonts
