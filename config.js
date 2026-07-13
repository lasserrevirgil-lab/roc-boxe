/* =============================================================================
   CONFIG.JS — FICHIER DE CONFIGURATION DU SITE ROC BOXE ROYAN
   =============================================================================

   👉 C'EST LE SEUL FICHIER QUE VOUS AVEZ BESOIN DE MODIFIER AU QUOTIDIEN.

   Tout le contenu qui change souvent est ici : nom du club, contacts, liens,
   horaires, tarifs, actualités, photos de la galerie...

   RÈGLES À RESPECTER POUR NE RIEN CASSER :
   - Ne modifiez QUE le texte entre les guillemets "comme ceci".
   - Gardez toujours la virgule à la fin de chaque ligne.
   - N'effacez pas les accolades { } ni les crochets [ ].
   - En cas de doute, modifiez une seule chose à la fois et rechargez la page.

   Astuce : faites une copie de ce fichier avant une grosse modification.
   ============================================================================ */

window.CONFIG = {

  /* -------------------------------------------------------------------------
     1. IDENTITÉ DU CLUB
     ------------------------------------------------------------------------- */
  club: {
    name: "ROC Boxe Royan",                 // Nom complet affiché partout
    shortName: "ROC Boxe",                   // Nom court (logo, menu)
    tagline: "Club de boxe anglaise à Royan", // Petite phrase sous le nom
    city: "Royan",
  },

  /* -------------------------------------------------------------------------
     2. COORDONNÉES DE CONTACT
     ------------------------------------------------------------------------- */
  contact: {
    email: "contact@rocboxe-royan.fr",       // Email du club
    phone: "06 00 00 00 00",                 // Téléphone (laissez "" si aucun)
    addressName: "Salle de boxe — Complexe sportif", // Nom du lieu
    addressLine: "Rue du Stade, 17200 Royan", // Adresse postale

    // Lien Google Maps (clic = ouvre l'itinéraire). Pour le changer :
    // ouvrez Google Maps > cherchez l'adresse > Partager > Copier le lien.
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Royan+salle+de+sport",

    // Carte intégrée (facultatif). Pour obtenir ce lien :
    // Google Maps > votre lieu > Partager > "Intégrer une carte" > copiez
    // UNIQUEMENT l'adresse qui se trouve dans src="...".
    // Laissez "" pour afficher seulement un bouton vers Google Maps.
    mapsEmbed: "",
  },

  /* -------------------------------------------------------------------------
     3. RÉSEAUX SOCIAUX
     ------------------------------------------------------------------------- */
  social: {
    facebook: "https://www.facebook.com/", // Adresse de la page Facebook du club
  },

  /* -------------------------------------------------------------------------
     4. LIENS DE PAIEMENT HELLOASSO
     ------------------------------------------------------------------------- */
  /* Remplacez chaque lien par votre vraie URL HelloAsso.
     Pour la créer : compte HelloAsso > créez une campagne d'adhésion / un
     événement / une collecte de dons, puis copiez l'adresse de la page.
     Laissez "" pour masquer automatiquement le bouton correspondant. */
  helloasso: {
    adhesion: "https://www.helloasso.com/",  // Adhésion de la saison
    stage:    "https://www.helloasso.com/",  // Stage / événement
    don:      "https://www.helloasso.com/",  // Don au club
    boutique: "",                            // Boutique (laissez "" si aucune)
  },

  /* -------------------------------------------------------------------------
     5. BANNIÈRE D'ACCUEIL (HÉRO)
     ------------------------------------------------------------------------- */
  hero: {
    title: "La boxe anglaise pour tous, à Royan",
    subtitle: "Boxe éducative, loisir et compétition dans une ambiance " +
              "associative et conviviale. Débutants bienvenus, dès 7 ans.",
    image: "assets/images/hero.jpg",         // Photo de fond de la bannière
  },

  /* -------------------------------------------------------------------------
     6. POINTS FORTS (page d'accueil)
     ------------------------------------------------------------------------- */
  features: [
    { title: "Boxe éducative", text: "Apprendre les bases en toute sécurité, sans coups portés pour les plus jeunes." },
    { title: "Loisir & forme", text: "Se dépenser, prendre confiance et garder la forme à son rythme." },
    { title: "Compétition", text: "Un encadrement diplômé pour celles et ceux qui veulent monter sur le ring." },
    { title: "Esprit associatif", text: "Un club à taille humaine, animé par des bénévoles passionnés." },
  ],

  /* -------------------------------------------------------------------------
     7. HORAIRES DES ENTRAÎNEMENTS
     ------------------------------------------------------------------------- */
  /* Ajoutez / supprimez des lignes en copiant un bloc { ... }, sans oublier
     la virgule à la fin. */
  schedules: [
    { category: "Enfants (7-11 ans)", day: "Mercredi", time: "14h00 - 15h30", location: "Salle de boxe" },
    { category: "Ados (12-15 ans)",   day: "Mardi",    time: "18h00 - 19h30", location: "Salle de boxe" },
    { category: "Ados (12-15 ans)",   day: "Jeudi",    time: "18h00 - 19h30", location: "Salle de boxe" },
    { category: "Adultes loisir",     day: "Lundi",    time: "19h30 - 21h00", location: "Salle de boxe" },
    { category: "Adultes loisir",     day: "Mercredi", time: "19h30 - 21h00", location: "Salle de boxe" },
    { category: "Compétiteurs",       day: "Vendredi", time: "19h00 - 21h00", location: "Salle de boxe" },
    { category: "Compétiteurs",       day: "Samedi",   time: "10h00 - 12h00", location: "Salle de boxe" },
  ],

  /* -------------------------------------------------------------------------
     8. TARIFS DE LA SAISON
     ------------------------------------------------------------------------- */
  prices: [
    { name: "Enfants (7-11 ans)",  price: "180 €", details: "Licence FFBoxe incluse" },
    { name: "Ados (12-15 ans)",    price: "200 €", details: "Licence FFBoxe incluse" },
    { name: "Adultes loisir",      price: "230 €", details: "Licence FFBoxe incluse" },
    { name: "Compétiteurs",        price: "250 €", details: "Licence compétition incluse" },
    { name: "Réduction 2e membre", price: "-10 %", details: "Pour une même famille" },
  ],

  /* -------------------------------------------------------------------------
     9. PIÈCES À FOURNIR POUR L'INSCRIPTION
     ------------------------------------------------------------------------- */
  documents: [
    "Fiche d'inscription complétée et signée",
    "Certificat médical de non contre-indication à la pratique de la boxe (datant de moins d'un an)",
    "Une photo d'identité récente",
    "Autorisation parentale signée pour les mineurs",
    "Règlement de l'adhésion (en ligne via HelloAsso, chèque ou espèces)",
  ],

  // Lien vers le dossier d'inscription à télécharger (PDF).
  // Placez le fichier dans assets/ puis indiquez son chemin, ex :
  // "assets/dossier-inscription.pdf". Laissez "" pour masquer le bouton.
  registrationFile: "",

  /* -------------------------------------------------------------------------
     10. ACTUALITÉS
     ------------------------------------------------------------------------- */
  /* La plus récente en haut. Le champ "image" et "link" sont facultatifs
     (mettez "" pour ne rien afficher). */
  news: [
    {
      date: "Septembre 2025",
      title: "Reprise des entraînements",
      text: "La nouvelle saison démarre ! Venez essayer gratuitement lors de votre première séance.",
      image: "assets/images/gallery-1.jpg",
      link: "",
    },
    {
      date: "Octobre 2025",
      title: "Stage de perfectionnement",
      text: "Stage ouvert à tous les licenciés pendant les vacances. Inscriptions à l'accueil du club.",
      image: "assets/images/gallery-2.jpg",
      link: "",
    },
    {
      date: "Novembre 2025",
      title: "Gala de boxe à Royan",
      text: "Notre club organise une soirée de combats amateurs. Billetterie et infos à venir sur Facebook.",
      image: "assets/images/gallery-3.jpg",
      link: "",
    },
  ],

  /* -------------------------------------------------------------------------
     11. GALERIE PHOTOS
     ------------------------------------------------------------------------- */
  /* Déposez vos photos dans le dossier assets/images/ puis listez-les ici.
     "alt" = courte description de la photo (important pour l'accessibilité). */
  gallery: [
    { src: "assets/images/gallery-1.jpg", alt: "Entraînement collectif au sac de frappe" },
    { src: "assets/images/gallery-2.jpg", alt: "Séance de technique sur le ring" },
    { src: "assets/images/gallery-3.jpg", alt: "Travail des appuis et de la garde" },
    { src: "assets/images/gallery-4.jpg", alt: "Groupe d'enfants pendant un cours" },
    { src: "assets/images/gallery-5.jpg", alt: "Sparring encadré par un coach" },
    { src: "assets/images/gallery-6.jpg", alt: "Photo de groupe du club" },
  ],

  /* -------------------------------------------------------------------------
     12. FORMULAIRE DE CONTACT
     ------------------------------------------------------------------------- */
  forms: {
    // true  : utilise le formulaire Netlify (UNIQUEMENT si hébergé sur Netlify)
    // false : affiche un bouton qui ouvre la messagerie de l'utilisateur (mailto)
    useNetlifyForm: false,
  },

  /* -------------------------------------------------------------------------
     13. MENU DE NAVIGATION
     ------------------------------------------------------------------------- */
  /* L'ordre des pages dans le menu. Ne touchez pas aux "href" sauf si vous
     renommez un fichier .html. */
  nav: [
    { label: "Accueil",      href: "index.html" },
    { label: "Le club",      href: "club.html" },
    { label: "Horaires",     href: "horaires.html" },
    { label: "Inscriptions", href: "inscriptions.html" },
    { label: "Paiement",     href: "paiement.html" },
    { label: "Actualités",   href: "actualites.html" },
    { label: "Galerie",      href: "galerie.html" },
    { label: "Contact",      href: "contact.html" },
  ],
};
