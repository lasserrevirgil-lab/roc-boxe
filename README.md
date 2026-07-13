# ROC Boxe — Guide du bénévole

Ce fichier explique comment modifier le site sans connaissances techniques.
Lisez-le entièrement une fois. Ensuite vous n'aurez besoin que des sections
qui vous intéressent.

---

## Structure du projet

```
roc-boxe/
├── index.html          → Page d'accueil
├── club.html           → Le Club (histoire, valeurs, équipe)
├── horaires.html       → Horaires et adresse
├── inscriptions.html   → Tarifs et inscription
├── actualites.html     → Actualités
├── contact.html        → Contact + galerie photos
├── css/
│   └── style.css       → Toute la mise en page et les couleurs
├── js/
│   └── main.js         → Comportements (menu mobile, galerie)
└── assets/
    └── images/         → Toutes les photos du site
```

---

## 1. MODIFIER UN TEXTE

Ouvrez le fichier HTML de la page concernée avec un éditeur de texte.

**Sur Windows :** clic droit sur le fichier → "Ouvrir avec" → Bloc-notes
**Sur Mac :** clic droit → "Ouvrir avec" → TextEdit

Cherchez le texte que vous voulez modifier (Ctrl+F pour chercher),
puis remplacez-le directement. Sauvegardez le fichier (Ctrl+S).

**Attention :** Ne modifiez jamais ce qui est entre `<` et `>`.
Par exemple : `<h2>Nos valeurs</h2>`
→ Vous ne pouvez changer que "Nos valeurs", pas les balises `<h2>` et `</h2>`.

---

## 2. CHANGER OU AJOUTER UNE PHOTO

1. Copiez votre photo dans le dossier `assets/images/`
2. Nommez la photo sans espaces, sans accents, en minuscules.
   Exemple : `stage_ete_2025.jpg` ✅ (pas `Stage Été 2025.jpg` ❌)
3. Dans le fichier HTML concerné, trouvez la balise `<img>` à modifier :
   ```html
   <img src="assets/images/ancienne_photo.jpg" alt="Description" />
   ```
4. Remplacez `ancienne_photo.jpg` par le nom de votre nouveau fichier
5. Mettez à jour le texte `alt="..."` avec une description de la nouvelle photo

---

## 3. CHANGER LE LOGO

1. Placez le nouveau logo dans `assets/images/logo_roc_boxe.png`
   (en remplaçant l'ancien fichier — gardez le même nom)
2. Si votre logo a un autre format ou nom, cherchez "logo_roc_boxe.png"
   dans tous les fichiers HTML et remplacez par votre nom de fichier.

---

## 4. MODIFIER LES LIENS HELLOASSO

Ouvrez `inscriptions.html` et cherchez "helloasso.com".
Vous trouverez plusieurs lignes comme :
```html
<a href="https://www.helloasso.com/associations/roc-boxe/adhesions/saison-2025-2026">
```
Remplacez l'URL par votre vrai lien HelloAsso.

Pour récupérer vos liens HelloAsso :
1. Connectez-vous sur helloasso.com
2. Allez dans votre espace association
3. Sur chaque formulaire/campagne, copiez le lien de partage

---

## 5. MODIFIER LES COORDONNÉES (email, téléphone, adresse)

Ces informations apparaissent dans le footer (bas de chaque page)
et dans la page contact.html.

Cherchez (Ctrl+F dans un éditeur) :
- `contact@rocboxe.fr` → remplacez par votre email
- `05 XX XX XX XX`     → remplacez par votre numéro
- `Adresse de la salle, 17200 Royan` → remplacez par la vraie adresse
- `ROCBoxeRoyan`       → remplacez par votre URL Facebook réelle

Chaque information apparaît dans **6 fichiers** (une fois par page).
Faites la modification dans chaque fichier HTML.

---

## 6. MODIFIER LES HORAIRES

Ouvrez `horaires.html`.
Cherchez le tableau (balise `<table>`).
Chaque cellule `<td>` correspond à un jour et une heure.

Pour modifier un badge/étiquette colorée :
```html
<span class="badge badge-rouge">Pros / Élites</span>
```
Changez le texte entre `>` et `</span>`.

Pour changer la couleur du badge :
- `badge-rouge`  = rouge
- `badge-bleu`   = bleu
- `badge-vert`   = vert
- `badge-orange` = orange
- `badge-gris`   = gris

---

## 7. AJOUTER UNE ACTUALITÉ

Ouvrez `actualites.html`.
Copiez un bloc complet entre les commentaires :
`<!-- DÉBUT CARTE -->` et `<!-- FIN CARTE -->`

Collez-le juste après le dernier `<!-- FIN CARTE -->`.
Modifiez ensuite la photo, la date, le titre et le texte.

---

## 8. CHANGER LES COULEURS

Ouvrez `css/style.css` et cherchez la section `:root` (tout en haut).
Vous verrez :
```css
--rouge:  #CC2200;
--bleu:   #1E5FA8;
```
Changez les codes couleur hexadécimaux (#...).
Vous pouvez trouver des codes couleur sur : https://htmlcolorcodes.com/fr/

---

## 9. PUBLIER SUR GITHUB PAGES (gratuit)

### Première fois (création du site) :

1. Créez un compte sur https://github.com (c'est gratuit)
2. Cliquez sur "New repository" (nouveau projet)
3. Nommez-le exactement : `roc-boxe` (en minuscules, sans espace)
4. Cochez "Public" puis cliquez "Create repository"
5. Sur la page qui apparaît, cliquez "uploading an existing file"
6. Glissez-déposez TOUS les fichiers et dossiers du projet
7. Cliquez "Commit changes"

### Activer l'hébergement :

1. Dans votre repository, cliquez "Settings" (en haut à droite)
2. Dans le menu gauche, cliquez "Pages"
3. Sous "Branch", sélectionnez "main" puis "/" puis cliquez "Save"
4. Attendez 2-3 minutes

Votre site sera disponible à :
`https://VOTRE-NOM-GITHUB.github.io/roc-boxe/`

### Mettre à jour le site après modification :

1. Sur GitHub, ouvrez le fichier à modifier
2. Cliquez le crayon (✏️) en haut à droite
3. Modifiez directement dans GitHub
4. Cliquez "Commit changes"
Le site se met à jour automatiquement en quelques minutes.

---

## 10. CONNECTER UN NOM DE DOMAINE (ex: rocboxe.fr)

### Sur GitHub Pages :

1. Achetez votre nom de domaine (OVH, Gandi, etc.)
2. Dans les paramètres DNS de votre domaine, ajoutez :
   - Type A : `185.199.108.153`
   - Type A : `185.199.109.153`
   - Type A : `185.199.110.153`
   - Type A : `185.199.111.153`
3. Sur GitHub → Settings → Pages → Custom domain
4. Entrez votre domaine (ex: `www.rocboxe.fr`) et sauvegardez
5. Attendez 24-48h que les DNS se propagent

---

## PROBLÈMES FRÉQUENTS

**Une photo ne s'affiche pas :**
→ Vérifiez que le nom du fichier est identique dans le HTML et dans assets/images/
→ Les noms sont sensibles à la casse : `Photo.jpg` ≠ `photo.jpg`

**Le menu ne s'ouvre pas sur mobile :**
→ Vérifiez que le fichier `js/main.js` est bien présent

**Une modification n'apparaît pas :**
→ Videz le cache de votre navigateur (Ctrl+Shift+R ou Cmd+Shift+R)

**Le formulaire de contact ne fonctionne pas :**
→ Le formulaire ouvre votre logiciel de messagerie. Si vous n'avez pas
  de logiciel mail installé, utilisez directement le lien email :
  contact@rocboxe.fr

---

*Guide rédigé pour ROC Boxe Royan — Saison 2025-2026*
