# 2023 ING2 Tour Angular
## Installation création du projet
__Vérification de nodeJs installé dans la machine__
```bash
node -v
npm -v
```
__Installation de Angular CLI__
```bash
npm install -g @angular/cli
```
__Création du projet__
```bash
ng new 2023ING2AngularTour
```
__Tester le lancement du serveur__
```bash
ng serve
```
__Création d'un composant__
```bash
ng generate component heros
```
__Création d'un service__
```bash
ng generate service hero
```
__Création d'un autre composant__
```bash
ng generate component hero-details
```
__Installation de TailwindCSS PostCSS et Autoprefixer__
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
```
modifier le fichier `tailwind.config.js` pour ajouter les couleurs de l'application
```js
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
modifier le fichier `style.css` pour ajouter les styles de l'application
```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
__Lancer le projet__
```bash
ng serve
```
