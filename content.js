/* ============================================================
   CONȚINUTUL SITE-ULUI

   Reguli:
   - Pune textele între ghilimele "…". Dacă vrei ghilimele în interiorul textului, folosește ' sau \" .
   - Fiecare rând de text se termină cu virgulă.
   - Poți adăuga sau șterge paragrafe și puncte din liste, oricâte vrei.
   - Păstrează ambele limbi (ro și en), cu aceleași câmpuri.
   ============================================================ */

window.SITE = {

  /* ---- Date comune, la fel în ambele limbi ---- */
  name:   "Andra   P.",                         // apare în titlu, în tab-ul browserului și în footer
  github: "https://github.com/gregorianne",  // linkul butoanelor GitHub
  email:  "axente.pop.andra@gmail.com",                        // adresa pentru butoanele de email
  footer: "Andra A.P., FMI II",                   // textul din josul paginii

  /* ---- Galerie (pagina galerie.html) ----
     Pune pozele în folderul "desene/" și adaugă câte o linie aici.
     ro / en = descrierea pozei (apare la mărire și pentru cititoarele de ecran). */
  gallery: [
     { src: "desene/1.png", ro: "Mesagerul", en: "The Messenger" },
     { src: "desene/3.png", ro: "Studiu de culoare", en: "Saturated coloring study" },
     { src: "desene/2.png", ro: "Studiu de chip masculin", en: "Male face study" },
     { src: "desene/4.png", ro: "Studiu de profil feminin", en: "Female profile study" },
     { src: "desene/5.png", ro: "Meet the artist", en: "Meet the artist" },
     { src: "desene/6.png", ro: "Studiu de pozitie dinamica, Inktober", en: "Dynamic pose study, Inktober" },
     { src: "desene/7.png", ro: "Van Gogh cu flori", en: "Van Gogh with sunflowers" },
     { src: "desene/8.png", ro: "Schite diverse", en: "Sketches" },
     { src: "desene/9.png", ro: "Pahar de fructe", en: "Strawberry cup" },
     { src: "desene/10.png", ro: "Doodle in acuarela", en: "Watercolor doodle" }
  ],

  /* ---- Română ---- */
  ro: {
    hi:   "Salut, sunt",                    // textul mic de deasupra numelui
    lead: "Studentă la Informatică, UBB. Traducător full time din vis în cod :)",

    workTitle: "Portofoliu",
    galleryTitle: "Galerie",
    galleryText:  "Desene, grafică și character design.",
    galleryBack:  "← Înapoi",
    galleryClose: "Închide",
    galleryEmpty: "Desenele vin în curând.",
    galleryRights: "Toate drepturile rezervate.",
    projects: [
             {
        name: "Galerie de desene",
        text: "Desen, grafică și character design, adunate într-o pagină separată.",
        tags: ["Desen", "Character design", "Krita"],
        link: "galerie.html",
        linkText: "Vezi galeria →"
      },
      {
        name: "Site-portofoliu",
        text: "Site de 2 pagini, în română și engleză, cu panglică patchwork animată pe canvas și efecte la scroll. Publicat pe GitHub Pages.",
        tags: ["HTML", "CSS", "JavaScript", "Canvas"],
        link: "https://github.com/gregorianne/AndraP-bussiness-card"
      },
             {
        name: "Toy Network",
        text: "Rețea de socializare în Java, construită cu principii OOP: clase, moștenire, interfețe, colecții și fișiere.",
        tags: ["Java", "OOP"]
        // link: "https://github.com/gregorianne/NUME-REPO",   <- adaugă linkul repo-ului când îl ai
      },
    ],

    nowTitle: "Ce fac acum",
    paragraphs: [
      "Sunt în anul II la Facultatea de Matematică și Informatică, UBB. Învăț programare orientată pe obiect în Java, Baze de date + o tonă de alte lucruri și îmi construiesc primele proiecte pe GitHub.",
      "Vin dintr-un liceu de matematică-informatică și dintr-o viață de desen, grafică și character design. Încerc să le țin pe amândouă la un loc :)"
    ],
    bullets: [
      "Studiez Informatică și lucrez la proiecte de cod - încep să scriu cod pentru un desktop-assitant!",
      "Predau desen și pictură copiilor în tabere (+4 ani) și am voluntariat în diverse domenii: editare video/documentare, organizare de evenimente, ghid turistic",
      "Caut un internship unde să învăț lucruri noi"
    ],

    contactTitle: "Codul și contactul",
    contactText:  "Proiectele mele sunt pe GitHub. Răspund și la email-uri.",
    emailButton:  "Scrie-mi",

    switchLabel: "Switch to English"        // textul pentru cititoarele de ecran la butonul de limbă
  },

  /* ---- English ---- */
  en: {
    hi:   "Hi, I'm",
    lead: "Computer science student. Full time translator of dreams to code.",

    workTitle: "Portfolio",
    galleryTitle: "Gallery",
    galleryText:  "Drawings, graphic design and character design.",
    galleryBack:  "← Back",
    galleryClose: "Close",
    galleryEmpty: "Drawings coming soon.",
    galleryRights: "All rights reserved.",
    projects: [
      {
        name: "Toy Network",
        text: "Social network in Java, built with OOP principles: classes, inheritance, interfaces, collections and files.",
        tags: ["Java", "OOP"]
        // link: "https://github.com/gregorianne/REPO-NAME",   <- add the repo link when you have it
      },
      {
        name: "Portfolio website",
        text: "One-page site in Romanian and English, with an animated patchwork ribbon on canvas and scroll effects. Hosted on GitHub Pages.",
        tags: ["HTML", "CSS", "JavaScript", "Canvas"],
        link: "https://github.com/gregorianne/AndraP-bussiness-card"
      },
      {
        name: "Drawing gallery",
        text: "Drawing, graphic design and character design, collected on a separate page.",
        tags: ["Drawing", "Character design", "Krita"],
        link: "galerie.html",
        linkText: "View the gallery →"
      }
    ],

    nowTitle: "What I'm up to",
    paragraphs: [
      "I'm a second year student at UBB, Computer Science. I'm learning object-oriented programming in Java, Data Bases + a lot of other interesting stuff and building my first projects on GitHub.",
      "I come from a CS-oriented high school and a lifetime of drawing, graphic design and character design. I'm trying to combine both :)"
    ],
    bullets: [
      "Studying Computer Science and working on code projects - currently devising my plan for a desktop-assitant!",
      "Teaching drawing and painting to kids at summer camps (+4 years) and volunteriing in all kinds of domains: video/documentary shooting/editing, event organizing, tour guiding",
      "Looking for an internship where I can learn new things"
    ],

    contactTitle: "Code and contact",
    contactText:  "My projects are on GitHub. I also do check my email.",
    emailButton:  "Email me",

    switchLabel: "Schimbă limba în română"
  }
};
