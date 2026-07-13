/* ============================================================
   ROC BOXE — JavaScript principal
   Ce fichier gère :
   - Le menu mobile (bouton hamburger)
   - La galerie photos (clic pour agrandir)
   - Le lien actif dans la navigation
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     MENU MOBILE
     Le bouton ☰ affiche/cache les liens de navigation
     ---------------------------------------------------------- */
  var boutonMenu = document.querySelector('.nav-toggle');
  var liensNav   = document.querySelector('.nav-links');

  if (boutonMenu && liensNav) {
    boutonMenu.addEventListener('click', function () {
      var estOuvert = liensNav.classList.toggle('ouvert');
      boutonMenu.setAttribute('aria-expanded', estOuvert);
      boutonMenu.textContent = estOuvert ? '✕' : '☰';
    });

    // Fermer le menu quand on clique sur un lien
    liensNav.querySelectorAll('a').forEach(function (lien) {
      lien.addEventListener('click', function () {
        liensNav.classList.remove('ouvert');
        boutonMenu.textContent = '☰';
      });
    });
  }

  /* ----------------------------------------------------------
     LIEN ACTIF DANS LA NAVIGATION
     Met en surbrillance la page courante dans le menu
     ---------------------------------------------------------- */
  var pageCourante = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (lien) {
    var href = lien.getAttribute('href');
    if (href === pageCourante || (pageCourante === '' && href === 'index.html')) {
      lien.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     LIGHTBOX — GALERIE PHOTOS
     Clic sur une photo → elle s'affiche en grand
     Clic sur le fond ou sur ✕ → elle se ferme
     ---------------------------------------------------------- */
  var lightbox      = document.getElementById('lightbox');
  var lightboxImg   = document.getElementById('lightbox-img');
  var lightboxFermer = document.getElementById('lightbox-fermer');

  if (lightbox && lightboxImg) {
    // Ouvrir la lightbox au clic sur une photo de la galerie
    document.querySelectorAll('.galerie-grille img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // bloquer le scroll
      });
    });

    // Fermer la lightbox
    function fermerLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }

    if (lightboxFermer) {
      lightboxFermer.addEventListener('click', fermerLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) fermerLightbox();
    });

    // Touche Échap pour fermer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fermerLightbox();
    });
  }

});
