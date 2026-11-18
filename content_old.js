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
  email:  "gregorianne@proton.me",                        // adresa pentru butoanele de email
  footer: "Andra A.P., FMI II",                   // textul din josul paginii

  /* ---- Română ---- */
  ro: {
    hi:   "Salut, sunt",                    // textul mic de deasupra numelui
    lead: "Studentă la Informatică, UBB. Traducător full time din vis în cod :)",

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
