# CID-STM-FRONTEND

## Introduction
Le projet **CID** est une application Web conçue pour interagir avec les données du réseau de transport STM (Société de transport de Montréal). L’application utilise React pour la construction de l’interface utilisateur et Tailwind CSS pour la conception de l’interface utilisateur réactive. Les données sont récupérées en temps réel depuis une API backend, offrant aux utilisateurs des informations actualisées sur les horaires et les arrêts des bus.

---

## Architecture et patrons de conception utilisés
1. **Application de l’architecture MVC** :
   - **Modèles** : Les modèles sont utilisés pour gérer les données et les interactions avec la base de données MongoDB. Ils définissent la structure des données, les validations, et les relations entre les entités. Par exemple, un modèle `User` pourrait gérer les utilisateurs de l'application, avec des propriétés comme `username`, `email`, et `password`. Les modèles assurent également la gestion des requêtes CRUD (Create, Read, Update, Delete) nécessaires pour interagir avec les données de l’application.
   - **Vues** : Les vues sont responsables de l'affichage des données dans l'application. Elles utilisent React pour créer des composants réutilisables qui intègrent les données provenant du backend et affichent l'interface utilisateur via des composants de Tailwind CSS pour un style réactif. Les vues présentent les informations aux utilisateurs, et elles sont souvent liées à des actions ou des événements (comme les clics ou les soumissions de formulaire) pour interagir avec le modèle.
   - **Contrôleurs** : Les contrôleurs gèrent la logique métier et les requêtes des utilisateurs. Ils agissent comme intermédiaires entre les modèles et les vues, en traitant les données des requêtes HTTP, en interagissant avec les modèles pour récupérer ou modifier des données, et en renvoyant les réponses aux vues sous forme de données manipulées ou formatées. L'architecture MVC permet de maintenir une séparation claire entre la logique métier, la présentation, et le stockage des données.

2. **Intégration de React et Tailwind CSS** :
   - **React** : React est utilisé pour construire l’interface utilisateur en créant des composants réutilisables. Chaque composant peut encapsuler la logique de l’application, les interactions utilisateur, et le style en utilisant Tailwind CSS. React facilite également la gestion de l'état avec des hooks comme `useState` et `useEffect`, permettant une réactivité en temps réel des éléments de l’interface utilisateur.
   - **Tailwind CSS** : Utilisé pour la conception de l’interface utilisateur, Tailwind CSS permet de créer des interfaces modernes et réactives rapidement grâce à des classes utilitaires. Il simplifie le processus de style des composants React en permettant aux développeurs de définir les styles directement dans le JSX. La réactivité de Tailwind CSS se traduit par un style adaptatif sur différents appareils (téléphones, tablettes, ordinateurs) sans nécessiter de media queries complexes.

3. **Gestion des données entre le frontend et le backend** :
   - **Communications API** : Le frontend utilise Axios pour consommer les données de l’API backend. Les appels HTTP (GET, POST, PUT, DELETE) sont faits pour interagir avec le backend afin de récupérer, créer, mettre à jour ou supprimer des données. Les données échangées sont formatées en JSON pour assurer la compatibilité entre les deux parties.
   - **Synchronisation des données** : Les données échangées entre le frontend et le backend peuvent être en temps réel ou non, selon les besoins de l’application. Par exemple, les données de l’API STM peuvent être en temps réel, ce qui permet de fournir une expérience utilisateur dynamique. Pour les données non en temps réel, comme les informations utilisateur, l’application doit mettre à jour les données de manière périodique ou attendre des actions de l’utilisateur pour les synchroniser.

## Sources des données
- **Sources de données** :
  - Le backend récupère les données du dataset STM, qui sont intégrées dans l’application via API calls. La structure des données peut inclure des informations comme les points d’arrêt, les lignes de bus, et les horaires, toutes organisées en objets JSON avec des propriétés spécifiques pour chaque type de donnée. Les données sont formatées en temps réel pour offrir des informations précises et à jour aux utilisateurs.
  - Les données sont stockées dans MongoDB, une base de données NoSQL, permettant une flexibilité accrue dans la gestion des données variées. La relation entre les collections (comme stops, routes, timetable) est maintenue via des clés étrangères et des requêtes `populate` pour accéder aux données nécessaires à l’affichage dans l’interface utilisateur.
  - La synchronisation des données en temps réel est facilitée par WebSockets ou par des requêtes périodiques sur l’API, selon le type de données et les besoins de l’application.

- **Influence de la synchronisation des données** :
  - La synchronisation en temps réel des données influence positivement l’expérience utilisateur en fournissant des informations actualisées sur les horaires de bus, par exemple. Les utilisateurs peuvent obtenir les informations en temps réel sans avoir à actualiser la page, ce qui est crucial pour une application de planification de transport. Les données non en temps réel, comme les informations de profil utilisateur, sont actualisées sur demande ou via un contrôle manuel, permettant une expérience utilisateur plus stable sans surcharger les performances.

## Documentation API
- **Guide détaillé de l’API backend** :
  - **Endpoints principaux** :
    - **GET /api/stops** : Renvoie la liste des points d'arrêt disponibles dans le dataset STM.
    - **GET /api/routes** : Renvoie les informations sur les lignes de bus, y compris les arrêts, les horaires, et les correspondances.
    - **POST /api/user** : Crée un nouvel utilisateur avec des informations d’identification (username, email, password) et retourne un token JWT.
    - **PUT /api/user/:id** : Met à jour les informations de profil de l’utilisateur spécifié par l’ID.
    - **DELETE /api/user/:id** : Supprime un utilisateur du système.
  - Les réponses sont formatées en JSON avec des codes de statut HTTP appropriés (200 pour succès, 400 pour erreurs de validation, 500 pour erreurs du serveur).

## Déploiement
- **Processus de déploiement** :
  - **Installation des dépendances** : Assurez-vous que toutes les dépendances nécessaires sont installées en exécutant `npm install` dans le dossier backend et frontend.
  - **Lancement du service en production** : Utilisez `npm start` pour lancer l’application en production. Cela démarrera le backend et l’application React via un serveur HTTP sécurisé, accessible publiquement.
  - **Gestion des problèmes courants** : CORS (Cross-Origin Resource Sharing).
  - 
---

## Fonctionnalités principales  

1. Consommation des données provenant de l’API backend.  
2. Interface utilisateur réactive et moderne grâce à Tailwind CSS.  
3. Organisation du code selon une structure MVC.  
4. Intégration des données issues du dataset STM pour une expérience enrichie.

--- 

## Technologies utilisées  

- **Type de base de données** : MongoDB  
- **Backend** : Express/TypeScript  
- **Frontend** : React/Tailwind CSS  
- **Modèle d'architecture** : MVC  

---

## Liste des librairies utilisées  

### Frontend  
Les librairies utilisées pour le développement du frontend sont :  
- **fontawesome**
- **observable plot**
- **jest**
- **axios**
- **react** 
- **tailwindcss**

### Backend  
Les librairies utilisées pour le développement du backend sont :  
- **bcryptjs** 
- **cors**
- **dotenv**
- **express**
- **fs**
- **https**  
- **jsonwebtoken**
- **mongodb**  
- **mongoose** 
- **swagger**
- **ts-node**
- **winston**
- **typescript**
  
---

## Lien vers le backend  

[CID-STM-BACKEND Repository](https://github.com/hodux/CID-STM-BACKEND)  

## Lien vers le dataset  

[STM Dataset](https://www.stm.info/fr/a-propos/developpeurs)  

