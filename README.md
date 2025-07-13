# Yoga Studio - Application Web Moderne

## 🧘‍♀️ À propos

Une application web moderne et responsive pour un studio de yoga, développée avec React, TypeScript et Tailwind CSS. Cette application offre une expérience utilisateur complète avec gestion multilingue, système de réservation et interface élégante.

## ✨ Fonctionnalités

- **Interface Responsive** : Design adaptatif pour tous les appareils
- **Multilingue** : Support français et anglais avec i18next
- **Pages Complètes** :
  - Accueil avec hero section animée
  - Cours et programmes de yoga
  - Profils des instructeurs
  - Tarification flexible
  - Contact avec formulaire fonctionnel
  - Authentification (connexion/inscription)
- **Animations Fluides** : Utilisation de Framer Motion
- **Design Moderne** : Interface élégante avec Tailwind CSS
- **TypeScript** : Code typé pour une meilleure maintenabilité

## 🚀 Technologies Utilisées

- **Frontend** : React 18, TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Internationalisation** : i18next
- **Routing** : React Router DOM
- **Build Tool** : Vite
- **Linting** : ESLint
- **Formatting** : Prettier

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/BenLe302/yoga-studio-modern.git
cd yoga-studio-modern
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur sur `http://localhost:5173`

## 🛠️ Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Build de production
- `npm run preview` : Prévisualise le build de production
- `npm run lint` : Vérifie le code avec ESLint

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
├── scenes/             # Pages principales
│   ├── home/           # Page d'accueil
│   ├── ourClasses/     # Page des cours
│   ├── programs/       # Page des programmes
│   ├── coaches/        # Page des instructeurs
│   ├── pricing/        # Page de tarification
│   ├── contact/        # Page de contact
│   └── auth/           # Pages d'authentification
├── i18n/               # Configuration multilingue
├── hooks/              # Hooks personnalisés
├── shared/             # Types et utilitaires
└── assets/             # Images et ressources
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- Primary : Tons de gris élégants
- Secondary : Dégradé jaune-rouge
- Accent : Couleurs complémentaires

### Traductions
Ajoutez ou modifiez les traductions dans :
- `src/i18n/locales/en.json` (Anglais)
- `src/i18n/locales/fr.json` (Français)

## 📱 Responsive Design

L'application est entièrement responsive avec des breakpoints optimisés :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

Ce projet a été inspiré par la vidéo YouTube d'EdRoh : [Build a Complete Typescript React Fitness Application](https://www.youtube.com/watch?v=I2NNxr3WPDo). Merci pour l'inspiration et les excellents tutoriels !

## 👨‍💻 Auteur

**Dady Akrou Cyrille**
- Email : cyrilledady0501@gmail.com
- Localisation : Trois-Rivières, QC, Canada

---

*Développé avec ❤️ pour la communauté yoga*