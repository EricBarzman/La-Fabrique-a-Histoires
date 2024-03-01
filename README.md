# LA FABRIQUE A HISTOIRES

## Description

Une application pour les enfants de 3 à 6 ans (accompagnés de leurs parents !) pour jouer à des jeux "dont vous êtes le héros", et ainsi créer de véritables histoires à se raconter !

## Installation

- Clonez le repo
- Lancez la commande `npm install`.
- Renommez le fichier **.env.exemple** en **.env**
- Lancer `postgres` avec la commande `sudo -i -u postgres psql`.
- Créez un utilisateur _storycraft_ avec la commande
  ```
  CREATE USER storycraft WITH PASSWORD 'notre_mot_de_passe'
  ```
  (notre_mot_de_passe étant, évidemment... notre mot de passe !)
- Créez une database _storyfactory_ avec la commande :
  ```
  CREATE DATABASE storyfactory OWNER storycraft
  storyforge
  ```

- Lancez les commandes `npm run db:create`, `npm run db:seed`. Vous devrez à chaque fois entrer le mot de passe pour valider.

- Lancez `npm run build` pour que **vite** assemble le projet.

## Stack techno

Une **API** avec architecture controllers-models, et un routeur.

Une **base de donnée** contenant les informations nécessaires au site :

- les utilisateurs
- les histoires
- les blocs d'histoire
- les thèmes
- les niveaux de difficulté
- les choix potentiels pour passer d'un bloc à un autre
- les sauvegardes d'histoires en cours ou terminées

Un FRONT codé en **React**.

### Technologies

- BACK : `Node.JS`, `Express`, l'ORM `Sequelize`, une BDD en SQL, token `JWT` pour l'authentification, `multer` pour uploader de photos de profil
- FRONT : `React`, `Redux`, `Semantic UI`
