# Site ROC Boxe Royan

Site vitrine du club de boxe anglaise **ROC Boxe Royan**.
Léger, gratuit, sans base de données ni backend : du simple HTML / CSS /
JavaScript que l'on peut héberger gratuitement et modifier sans être
développeur.

---

## 🗂️ Comment c'est organisé

```
roc-boxe/
├── index.html          → Accueil
├── club.html           → Le club (histoire, valeurs, équipe)
├── horaires.html       → Horaires et lieux
├── inscriptions.html   → Inscriptions et tarifs
├── paiement.html       → Paiement en ligne (HelloAsso)
├── actualites.html     → Actualités
├── galerie.html        → Galerie photos
├── contact.html        → Contact + formulaire
│
├── config.js           → ⭐ LE FICHIER À MODIFIER : contenu du club
│
├── css/
│   └── style.css       → Apparence (couleurs, polices…)
├── js/
│   └── app.js          → Moteur du site (à ne pas toucher en principe)
│
├── assets/images/      → Toutes les images (logo, bannière, galerie)
│
├── netlify.toml        → Réglages Netlify (ignoré ailleurs)
├── robots.txt          → Autorise les moteurs de recherche
└── .nojekyll           → Réglage technique pour GitHub Pages
```

> 💡 **L'essentiel à retenir :** 90 % de vos modifications se font dans le
> seul fichier **`config.js`**, et le reste en remplaçant des images dans
> **`assets/images/`**.

Pour prévisualiser le site sur votre ordinateur, double-cliquez simplement
sur `index.html` : il s'ouvre dans votre navigateur.

---

## 1. ✏️ Modifier les textes

### a) Les informations qui reviennent partout → `config.js`

Ouvrez `config.js` avec un éditeur de texte (le **Bloc-notes** suffit, ou
mieux **VS Code**). Vous y trouverez, bien commenté :

- nom du club, ville, slogan ;
- email, téléphone, adresse ;
- lien Facebook ;
- liens de paiement HelloAsso ;
- **horaires**, **tarifs**, **actualités**, **galerie**.

Règle d'or : ne modifiez que le texte **entre guillemets**, gardez les
virgules en fin de ligne, et ne supprimez ni `{ }` ni `[ ]`.

Exemple :
```js
club: {
  name: "ROC Boxe Royan",   ← changez seulement ce texte
  city: "Royan",
},
```

### b) Les longs paragraphes (histoire, valeurs…) → directement dans les pages

Certains textes plus longs se trouvent directement dans les fichiers `.html`
(par exemple `club.html`). Ouvrez le fichier, repérez le texte à l'écran,
modifiez-le **entre les balises** sans toucher aux `<balises>` elles-mêmes :

```html
<p>À Royan, le ROC Boxe accueille débutants comme confirmés…</p>
       ↑ modifiez seulement ce qui est entre <p> et </p>
```

Des commentaires `<!-- 👇 Modifiez ce texte -->` vous guident dans les pages.

Enregistrez, puis rechargez la page dans le navigateur pour voir le résultat.

---

## 2. 🖼️ Remplacer les photos

Toutes les images sont dans le dossier **`assets/images/`**.

**La méthode la plus simple :** donnez à votre nouvelle photo **exactement le
même nom** que l'image à remplacer, puis copiez-la dans le dossier en écrasant
l'ancienne. Aucun autre changement nécessaire.

| Fichier            | Rôle                                   |
|--------------------|----------------------------------------|
| `hero.jpg`         | Grande bannière de la page d'accueil   |
| `gallery-1.jpg`…`gallery-6.jpg` | Photos de la galerie / actualités |
| `og-image.jpg`     | Image affichée lors d'un partage Facebook |
| `logo.png`         | Logo du club (voir étape 3)            |

**Conseils photos :**
- Format **JPG** pour les photos, **PNG** pour le logo.
- Bannière : large (env. 1600 × 900 px).
- Compressez vos images (par ex. sur <https://squoosh.app>) pour un site rapide.

**Pour ajouter de nouvelles photos à la galerie :** déposez-les dans
`assets/images/`, puis ajoutez une ligne dans `config.js`, section `gallery` :
```js
{ src: "assets/images/ma-photo.jpg", alt: "Description de la photo" },
```

---

## 3. 🥊 Ajouter / changer le logo

1. Préparez votre logo en **PNG** (carré de préférence, fond transparent idéal).
2. Nommez-le **`logo.png`**.
3. Copiez-le dans `assets/images/` en remplaçant l'ancien.

C'est tout : le logo s'affiche automatiquement dans l'en-tête.
Pensez aussi à adapter les couleurs du site à votre logo (voir « Couleurs »
plus bas).

---

## 4. 💳 Modifier les liens HelloAsso

Dans `config.js`, section `helloasso` :

```js
helloasso: {
  adhesion: "https://www.helloasso.com/associations/votre-club/adhesions/...",
  stage:    "https://www.helloasso.com/...",
  don:      "https://www.helloasso.com/...",
  boutique: "",   ← laissez vide pour masquer le bouton Boutique
},
```

**Comment obtenir un lien HelloAsso :**
1. Connectez-vous sur le compte HelloAsso du club.
2. Créez la campagne voulue (adhésion, événement, collecte de dons…).
3. Une fois publiée, copiez l'adresse de la page.
4. Collez-la dans `config.js` à la place du lien correspondant.

Un bouton dont le lien est laissé vide (`""`) **disparaît automatiquement**.

---

## 5. 🚀 Publier gratuitement sur GitHub Pages

1. Créez un compte gratuit sur <https://github.com>.
2. Cliquez sur **New repository**, nommez-le par ex. `roc-boxe`, laissez-le
   **Public**, puis **Create repository**.
3. Sur la page du dépôt, cliquez **Add file → Upload files**, puis
   glissez-déposez **tout le contenu** du dossier `roc-boxe`
   (les fichiers `.html`, `config.js`, les dossiers `css`, `js`, `assets`,
   ainsi que `.nojekyll`). Cliquez **Commit changes**.
4. Allez dans **Settings → Pages**.
5. Sous « Build and deployment », choisissez **Deploy from a branch**,
   sélectionnez la branche `main` et le dossier `/ (root)`, puis **Save**.
6. Patientez 1 à 2 minutes : l'adresse de votre site apparaît en haut de la
   page (du type `https://votre-nom.github.io/roc-boxe/`).

Pour **mettre à jour** le site plus tard : retournez dans le dépôt,
**Add file → Upload files**, déposez le ou les fichiers modifiés, puis
**Commit**. Le site se met à jour tout seul en quelques instants.

> ℹ️ Le formulaire de contact Netlify ne fonctionne pas sur GitHub Pages :
> laissez `useNetlifyForm: false` dans `config.js` (le bouton email s'affiche).

---

## 6. 🌐 Publier gratuitement sur Netlify

Netlify est encore plus simple et fait fonctionner le **formulaire de contact**.

**Méthode express (glisser-déposer) :**
1. Créez un compte gratuit sur <https://www.netlify.com>.
2. Sur le tableau de bord, repérez la zone **« Deploy manually »** /
   « Drag and drop your site folder ».
3. Glissez-y le dossier `roc-boxe` complet. Le site est en ligne en quelques
   secondes, avec une adresse du type `https://nom-aleatoire.netlify.app`.
4. (Facultatif) Dans **Site settings → Change site name**, choisissez un nom
   plus parlant.

**Pour activer le formulaire de contact sur Netlify :**
1. Dans `config.js`, mettez `useNetlifyForm: true`.
2. Redéployez (re-glissez le dossier).
3. Les messages reçus apparaissent dans **Netlify → Forms**. Pensez à activer
   les notifications par email dans les réglages des formulaires.

> 💡 Pour des mises à jour automatiques, vous pouvez aussi connecter Netlify à
> un dépôt GitHub. Mais le glisser-déposer suffit largement pour démarrer.

---

## 7. 🔗 Connecter un nom de domaine plus tard

Quand vous aurez acheté un nom de domaine (par ex. `rocboxe-royan.fr` chez
OVH, Gandi, Ionos…), vous pourrez le relier gratuitement :

**Sur Netlify :** Site settings → **Domain management** → **Add a domain** →
saisissez votre domaine, puis suivez les instructions (Netlify fournit les
enregistrements DNS à copier chez votre fournisseur de domaine). Le HTTPS
(cadenas) est activé automatiquement et gratuitement.

**Sur GitHub Pages :** Settings → **Pages** → **Custom domain** → saisissez
votre domaine, puis créez chez votre fournisseur les enregistrements DNS
indiqués par GitHub. Cochez ensuite **Enforce HTTPS**.

**Dernière étape (important pour le partage Facebook et le référencement) :**
dans chaque fichier `.html`, remplacez l'adresse d'exemple
`https://www.rocboxe-royan.fr/` (balises `og:url` et `og:image`) par votre
vrai domaine.

---

## 🎨 Changer les couleurs et les polices

Ouvrez `css/style.css` : tout en haut, la section **VARIABLES** permet de
changer l'identité visuelle sans rien casser :

```css
:root {
  --primary-color:    #c8102e;  /* Rouge boxe */
  --secondary-color:  #16161a;  /* Charbon */
  --accent-color:     #f2a900;  /* Or / jaune */
  --background-color: #ffffff;
  --text-color:       #1d1d22;
}
```

Remplacez les codes couleur (format `#rrggbb`) par ceux de votre logo.
Un sélecteur de couleur pratique : <https://htmlcolorcodes.com>.

---

## ❓ En cas de problème

- **Une page s'affiche sans menu / sans contenu :** il y a sûrement une erreur
  dans `config.js` (une virgule ou un guillemet manquant). Annulez votre
  dernière modification. Pensez à garder une copie de sauvegarde avant de
  modifier.
- **Une image ne s'affiche pas :** vérifiez que le nom du fichier est
  identique (majuscules comprises) à celui indiqué dans `config.js`, et qu'elle
  est bien dans `assets/images/`.
- **Un bouton de paiement a disparu :** c'est normal si son lien HelloAsso est
  vide (`""`) dans `config.js`.

Bonne mise en ligne ! 🥊
