/* =============================================================================
   APP.JS — MOTEUR D'AFFICHAGE DU SITE ROC BOXE ROYAN
   =============================================================================
   Ce fichier lit config.js et construit les parties communes (menu, pied de
   page) ainsi que les listes (horaires, tarifs, actualités, galerie...).

   👉 EN PRINCIPE, VOUS N'AVEZ PAS À MODIFIER CE FICHIER.
      Tout le contenu se change dans config.js.
   ============================================================================ */

(function () {
  "use strict";

  // Raccourci : récupère la config (avec garde-fou si elle est absente)
  var C = window.CONFIG || {};

  // Petit utilitaire pour échapper le texte (sécurité de base)
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------------------------------------------------------------------
     1. EN-TÊTE (logo + menu de navigation)
     ------------------------------------------------------------------------ */
  function buildHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;

    // Page courante (ex : "horaires.html") pour surligner le bon onglet
    var current = location.pathname.split("/").pop() || "index.html";

    var links = (C.nav || []).map(function (item) {
      var active = item.href === current ? " is-active" : "";
      return '<li><a class="' + active.trim() + '" href="' + esc(item.href) + '">' +
             esc(item.label) + "</a></li>";
    }).join("");

    var name = C.club ? C.club.shortName : "";
    // On colore la dernière partie du nom (effet "Boxe")
    var parts = name.split(" ");
    var nameHtml = parts.length > 1
      ? esc(parts.slice(0, -1).join(" ")) + " <span>" + esc(parts.slice(-1)[0]) + "</span>"
      : esc(name);

    host.innerHTML =
      '<div class="container">' +
        '<a class="brand" href="index.html" aria-label="Accueil ' + esc(name) + '">' +
          '<img src="assets/images/logo.png" alt="Logo ' + esc(name) + '">' +
          '<span class="brand-name">' + nameHtml + "</span>" +
        "</a>" +
        '<button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav">' +
          "<span></span><span></span><span></span>" +
        "</button>" +
        '<nav class="main-nav" id="main-nav" aria-label="Navigation principale">' +
          "<ul>" + links + "</ul>" +
        "</nav>" +
      "</div>";

    // Comportement du menu mobile
    var toggle = host.querySelector(".nav-toggle");
    var nav = host.querySelector(".main-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
  }

  /* ---------------------------------------------------------------------------
     2. PIED DE PAGE
     ------------------------------------------------------------------------ */
  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;

    var club = C.club || {};
    var ct = C.contact || {};
    var fb = (C.social && C.social.facebook) ? C.social.facebook : "";

    var navLinks = (C.nav || []).map(function (i) {
      return '<li><a href="' + esc(i.href) + '">' + esc(i.label) + "</a></li>";
    }).join("");

    var phoneLine = ct.phone
      ? '<li>Tél : <a href="tel:' + esc(ct.phone.replace(/\s/g, "")) + '">' + esc(ct.phone) + "</a></li>"
      : "";
    var fbLine = fb
      ? '<li><a href="' + esc(fb) + '" target="_blank" rel="noopener">Page Facebook</a></li>'
      : "";

    host.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          "<div>" +
            "<h4>" + esc(club.name || "") + "</h4>" +
            "<p>" + esc(club.tagline || "") + "</p>" +
            "<p>" + esc(ct.addressName || "") + "<br>" + esc(ct.addressLine || "") + "</p>" +
          "</div>" +
          "<div>" +
            "<h4>Contact</h4>" +
            "<ul>" +
              '<li>Email : <a href="mailto:' + esc(ct.email || "") + '">' + esc(ct.email || "") + "</a></li>" +
              phoneLine + fbLine +
            "</ul>" +
          "</div>" +
          "<div>" +
            "<h4>Le site</h4>" +
            "<ul>" + navLinks + "</ul>" +
          "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<p>© " + new Date().getFullYear() + " " + esc(club.name || "") +
          " — Association loi 1901. Tous droits réservés.</p>" +
          "<p>Données personnelles utilisées uniquement pour répondre à vos demandes (RGPD).</p>" +
        "</div>" +
      "</div>";
  }

  /* ---------------------------------------------------------------------------
     3. BANNIÈRE D'ACCUEIL (héro)
     ------------------------------------------------------------------------ */
  function buildHero() {
    var host = document.getElementById("hero");
    if (!host || !C.hero) return;

    if (C.hero.image) host.style.backgroundImage = "url('" + C.hero.image + "')";
    host.innerHTML =
      '<div class="container">' +
        '<p class="hero-tagline">' + esc(C.club ? C.club.tagline : "") + "</p>" +
        "<h1>" + esc(C.hero.title) + "</h1>" +
        "<p>" + esc(C.hero.subtitle) + "</p>" +
        '<div class="hero-actions">' +
          '<a class="btn btn--primary" href="inscriptions.html">S\'inscrire</a>' +
          '<a class="btn btn--light" href="horaires.html">Voir les horaires</a>' +
          '<a class="btn btn--outline" style="color:#fff" href="contact.html">Nous contacter</a>' +
        "</div>" +
      "</div>";
  }

  /* ---------------------------------------------------------------------------
     4. POINTS FORTS
     ------------------------------------------------------------------------ */
  function buildFeatures() {
    var host = document.getElementById("features");
    if (!host) return;
    host.innerHTML = (C.features || []).map(function (f) {
      return '<div class="card feature-card"><h3>' + esc(f.title) + "</h3><p>" +
             esc(f.text) + "</p></div>";
    }).join("");
  }

  /* ---------------------------------------------------------------------------
     5. TABLEAU DES HORAIRES
     ------------------------------------------------------------------------ */
  function buildSchedule() {
    var host = document.getElementById("schedule");
    if (!host) return;
    var rows = (C.schedules || []).map(function (s) {
      return "<tr><td>" + esc(s.category) + "</td><td>" + esc(s.day) +
             "</td><td>" + esc(s.time) + "</td><td>" + esc(s.location) + "</td></tr>";
    }).join("");
    host.innerHTML =
      '<div class="table-wrap"><table class="schedule">' +
        "<thead><tr><th>Catégorie</th><th>Jour</th><th>Horaire</th><th>Lieu</th></tr></thead>" +
        "<tbody>" + rows + "</tbody>" +
      "</table></div>";
  }

  /* ---------------------------------------------------------------------------
     6. TARIFS
     ------------------------------------------------------------------------ */
  function buildPrices() {
    var host = document.getElementById("prices");
    if (!host) return;
    host.innerHTML = (C.prices || []).map(function (p) {
      return '<div class="card price-card">' +
               '<div class="price-name">' + esc(p.name) + "</div>" +
               '<div class="price-amount">' + esc(p.price) + "</div>" +
               '<div class="price-details">' + esc(p.details || "") + "</div>" +
             "</div>";
    }).join("");
  }

  /* ---------------------------------------------------------------------------
     7. PIÈCES À FOURNIR
     ------------------------------------------------------------------------ */
  function buildDocuments() {
    var host = document.getElementById("documents");
    if (!host) return;
    host.innerHTML = '<ul class="check-list">' +
      (C.documents || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") +
      "</ul>";
  }

  /* ---------------------------------------------------------------------------
     8. BOUTONS HELLOASSO (réutilisable)
        - data-helloasso="adhesion|stage|don|boutique"
        Le bouton se masque tout seul si le lien est vide dans config.js.
     ------------------------------------------------------------------------ */
  function bindHelloAssoButtons() {
    var links = C.helloasso || {};
    document.querySelectorAll("[data-helloasso]").forEach(function (el) {
      var key = el.getAttribute("data-helloasso");
      var url = links[key];
      if (url) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        // Pas de lien configuré : on masque proprement le bloc parent .pay-card
        var card = el.closest(".pay-card");
        if (card) card.style.display = "none";
        else el.style.display = "none";
      }
    });
  }

  /* ---------------------------------------------------------------------------
     9. BOUTON "TÉLÉCHARGER LE DOSSIER D'INSCRIPTION"
     ------------------------------------------------------------------------ */
  function bindRegistrationFile() {
    var el = document.getElementById("registration-file");
    if (!el) return;
    if (C.registrationFile) {
      el.setAttribute("href", C.registrationFile);
      el.setAttribute("download", "");
    } else {
      el.style.display = "none";
    }
  }

  /* ---------------------------------------------------------------------------
     10. ACTUALITÉS
     ------------------------------------------------------------------------ */
  function buildNews() {
    var host = document.getElementById("news");
    if (!host) return;
    host.innerHTML = (C.news || []).map(function (n) {
      var img = n.image ? '<img src="' + esc(n.image) + '" alt="' + esc(n.title) + '">' : "";
      var link = n.link
        ? '<p><a href="' + esc(n.link) + '" target="_blank" rel="noopener">En savoir plus →</a></p>'
        : "";
      return '<article class="card news-card">' + img +
               '<div class="news-body">' +
                 '<span class="news-date">' + esc(n.date) + "</span>" +
                 "<h3>" + esc(n.title) + "</h3>" +
                 "<p>" + esc(n.text) + "</p>" + link +
               "</div>" +
             "</article>";
    }).join("");
  }

  /* ---------------------------------------------------------------------------
     11. GALERIE
     ------------------------------------------------------------------------ */
  function buildGallery() {
    var host = document.getElementById("gallery");
    if (!host) return;
    host.innerHTML = (C.gallery || []).map(function (g) {
      return '<a href="' + esc(g.src) + '" target="_blank" rel="noopener">' +
               '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy">' +
             "</a>";
    }).join("");
  }

  /* ---------------------------------------------------------------------------
     12. INFOS DE CONTACT + CARTE + FORMULAIRE
     ------------------------------------------------------------------------ */
  function buildContact() {
    var info = document.getElementById("contact-info");
    if (info) {
      var ct = C.contact || {};
      var fb = (C.social && C.social.facebook) || "";
      var phone = ct.phone
        ? '<li><span class="label">Téléphone</span><a href="tel:' +
          esc(ct.phone.replace(/\s/g, "")) + '">' + esc(ct.phone) + "</a></li>" : "";
      var fbLine = fb
        ? '<li><span class="label">Facebook</span><a href="' + esc(fb) +
          '" target="_blank" rel="noopener">Suivez le club</a></li>' : "";
      info.innerHTML = '<ul class="contact-info">' +
        '<li><span class="label">Adresse</span>' + esc(ct.addressName || "") + "<br>" +
          esc(ct.addressLine || "") + "</li>" +
        '<li><span class="label">Email</span><a href="mailto:' + esc(ct.email || "") +
          '">' + esc(ct.email || "") + "</a></li>" +
        phone + fbLine +
      "</ul>";
    }

    // Carte intégrée si fournie, sinon bouton vers Google Maps
    var map = document.getElementById("contact-map");
    if (map) {
      var ct2 = C.contact || {};
      if (ct2.mapsEmbed) {
        map.innerHTML = '<div class="map-embed"><iframe src="' + esc(ct2.mapsEmbed) +
          '" loading="lazy" title="Carte du club" allowfullscreen></iframe></div>';
      } else if (ct2.mapsUrl) {
        map.innerHTML = '<a class="btn btn--dark" href="' + esc(ct2.mapsUrl) +
          '" target="_blank" rel="noopener">Voir sur Google Maps</a>';
      }
    }

    // Formulaire : on affiche soit le bloc Netlify, soit le bloc mailto.
    // (Les deux existent en HTML statique dans contact.html.)
    var netlifyForm = document.getElementById("netlify-form");
    var mailtoForm = document.getElementById("mailto-form");
    var mailtoLink = document.getElementById("mailto-link");
    var useNetlify = !!(C.forms && C.forms.useNetlifyForm);

    if (netlifyForm) netlifyForm.style.display = useNetlify ? "block" : "none";
    if (mailtoForm) mailtoForm.style.display = useNetlify ? "none" : "block";
    if (mailtoLink) {
      var email = (C.contact && C.contact.email) || "";
      mailtoLink.setAttribute("href",
        "mailto:" + email + "?subject=" + encodeURIComponent("Contact site ROC Boxe"));
    }
  }

  /* ---------------------------------------------------------------------------
     13. BANDEAU FACEBOOK (bouton)
     ------------------------------------------------------------------------ */
  function bindFacebook() {
    var fb = (C.social && C.social.facebook) || "";
    document.querySelectorAll("[data-facebook]").forEach(function (el) {
      if (fb) {
        el.setAttribute("href", fb);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        el.style.display = "none";
      }
    });
  }

  /* ---------------------------------------------------------------------------
     LANCEMENT — on construit tout une fois la page chargée
     ------------------------------------------------------------------------ */
  function init() {
    buildHeader();
    buildFooter();
    buildHero();
    buildFeatures();
    buildSchedule();
    buildPrices();
    buildDocuments();
    buildNews();
    buildGallery();
    buildContact();
    bindHelloAssoButtons();
    bindRegistrationFile();
    bindFacebook();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
