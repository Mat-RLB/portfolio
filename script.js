/* ── TRADUCTIONS FR / EN ── */
const T = {
  fr: {
    nav_about:    "À propos",
    nav_services: "Services",
    nav_projects: "Projets",
    nav_contact:  "Contact",
    hero_label:   "Développeur Web · Île-de-France",
    hero_t1:      "Des sites",
    hero_t2:      "qui marquent.",
    hero_sub:     "Conception et développement de sites web sur mesure — pensés pour convertir, construits pour durer.",
    hero_cta:     "Voir mes projets",
    hero_cta2:    "Me contacter",
    about_label:  "À propos",
    about_title:  "Code et<br>créativité.",
    about_text:   "Développeur web indépendant basé en Île-de-France, je conçois des <strong>sites vitrines sur mesure</strong> pour les commerces locaux et les associations. Chaque projet est pensé pour refléter l'identité de mon client — pas un template, une vraie présence en ligne.",
    stat1:        "Projets livrés",
    stat2:        "Code sur mesure",
    stat3:        "Bilingue",
    stat4:        "Délai de réponse",
    svc_label:    "Ce que je fais",
    svc_title:    "Services",
    s1t:          "Développement web",
    s1d:          "Sites vitrines HTML/CSS sur mesure, optimisés pour le référencement, adaptés à tous les écrans. Un site qui ressemble vraiment à votre activité.",
    s2t:          "Maintenance & support",
    s2d:          "Mises à jour de contenu, corrections, hébergement et suivi régulier. Votre site reste à jour sans effort de votre côté.",
    s3t:          "Outils sur mesure",
    s3d:          "Scripts, automatisations et petites applications pour simplifier vos tâches répétitives. Du code qui travaille à votre place.",
    proj_label:   "Réalisations",
    proj_title:   "Projets",
    p1_num:       "01 — Site institutionnel",
    p1_type:      "Nouveau Village · Copropriété · Cesson (77)",
    p1_desc:      "Site vitrine complet pour une association syndicale libre — présentation des services, actualités, et formulaire de contact intégré avec confirmation par email. Design professionnel pensé pour instaurer la confiance.",
    p2_num:       "02 — Outil interne",
    p2_type:      "Interface de gestion · Aménagement magasin",
    p2_desc:      "Outil web interne pour la gestion de l'aménagement en magasin et le suivi de projets. Interface intuitive conçue pour une utilisation quotidienne par les équipes terrain, sans courbe d'apprentissage.",
    ct_label:     "Travaillons ensemble",
    ct_title:     "Un projet<br>en tête ?",
    ct_p:         "Que ce soit pour un site vitrine, une refonte ou un outil sur mesure — parlons-en. Je réponds généralement sous 24h.",
    ct_email:     "matheojannest26@gmail.com",
    ft_copy:      "© 2026 Mathéo Jannest"
  },
  en: {
    nav_about:    "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact:  "Contact",
    hero_label:   "Web Developer · Paris Region",
    hero_t1:      "Websites that",
    hero_t2:      "leave a mark.",
    hero_sub:     "Custom web design and development — built to convert, crafted to last.",
    hero_cta:     "View my work",
    hero_cta2:    "Get in touch",
    about_label:  "About",
    about_title:  "Code meets<br>creativity.",
    about_text:   "Freelance web developer based near Paris, I build <strong>custom showcase websites</strong> for local businesses and associations. Every project is crafted to reflect my client's identity — not a template, a real online presence.",
    stat1:        "Projects delivered",
    stat2:        "Custom code",
    stat3:        "Bilingual",
    stat4:        "Response time",
    svc_label:    "What I do",
    svc_title:    "Services",
    s1t:          "Web Development",
    s1d:          "Custom HTML/CSS showcase sites, SEO-friendly and fully responsive. A website that actually looks like your business.",
    s2t:          "Maintenance & Support",
    s2d:          "Content updates, fixes, hosting and regular monitoring. Your site stays current without any effort on your end.",
    s3t:          "Custom Tools",
    s3d:          "Scripts, automations and small applications to handle your repetitive tasks. Code that works for you.",
    proj_label:   "Work",
    proj_title:   "Projects",
    p1_num:       "01 — Institutional website",
    p1_type:      "Nouveau Village · Residential · Cesson (77)",
    p1_desc:      "Full showcase website for a homeowner association — services presentation, news section, and integrated contact form with email confirmation. Professional design that builds resident trust.",
    p2_num:       "02 — Internal tool",
    p2_type:      "Management interface · Store layout",
    p2_desc:      "Internal web tool for store layout management and project tracking. Intuitive interface designed for daily use by floor teams, with zero learning curve.",
    ct_label:     "Let's work together",
    ct_title:     "Got a project<br>in mind?",
    ct_p:         "Whether it's a new website, a redesign or a custom tool — let's talk. I usually respond within 24 hours.",
    ct_email:     "matheojannest26@gmail.com",
    ft_copy:      "© 2026 Mathéo Jannest"
  }
};

let lang = 'fr';

/* Applique la langue sur tous les éléments data-i18n */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[l][k] !== undefined) el.innerHTML = T[l][k];
  });
  document.getElementById('langBtn').textContent = l === 'fr' ? 'EN' : 'FR';
  document.title = l === 'fr'
    ? 'Mathéo Jannest — Développeur Web'
    : 'Mathéo Jannest — Web Developer';
}

/* Toggle langue */
document.getElementById('langBtn').addEventListener('click', () => {
  setLang(lang === 'fr' ? 'en' : 'fr');
});

/* Nav — fond au scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* Hero — on ne fait tourner les blobs que quand la hero est visible.
   Dès qu'elle sort de l'écran, on coupe l'animation -> plus de repaint coûteux. */
const hero = document.getElementById('hero');
if (hero) {
  hero.classList.add('in-view'); // état initial : la hero est visible au chargement
  const heroIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      hero.classList.toggle('in-view', e.isIntersecting);
    });
  }, { threshold: 0 });
  heroIO.observe(hero);
}

/* Révélation au scroll (IntersectionObserver) */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '50px'
});

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── LIGHTBOX ── */
const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.innerHTML = `
  <button class="lightbox-close" aria-label="Fermer">✕</button>
  <div class="lightbox-inner">
    <div class="lightbox-bar">
      <div class="dot d1"></div>
      <div class="dot d2"></div>
      <div class="dot d3"></div>
      <div class="lightbox-url"><span class="lightbox-url-text"></span></div>
    </div>
    <img class="lightbox-img" src="" alt="">
  </div>
`;
document.body.appendChild(overlay);

const lbImg   = overlay.querySelector('.lightbox-img');
const lbUrl   = overlay.querySelector('.lightbox-url-text');
const lbClose = overlay.querySelector('.lightbox-close');

function openLightbox(src, alt, url) {
  lbImg.src = src;
  lbImg.alt = alt;
  lbUrl.textContent = url;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.browser').forEach(browser => {
  browser.addEventListener('click', () => {
    const img = browser.querySelector('.project-screenshot');
    const url = browser.querySelector('.burl span');
    if (img) openLightbox(img.src, img.alt, url ? url.textContent : '');
  });
});

lbClose.addEventListener('click', closeLightbox);
overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
