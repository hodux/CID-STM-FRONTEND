# CID-STM-FRONTEND

## Introduction
Le projet **CID** est une application Web conçue pour interagir avec les données du réseau de transport STM (Société de transport de Montréal). L’application utilise React pour la construction de l’interface utilisateur et Tailwind CSS pour la conception de l’interface utilisateur réactive. Les données sont récupérées en temps réel(plus au moins) depuis une API backend, offrant aux utilisateurs des informations actualisées sur les horaires et les arrêts des bus.

---
# API D'ANALYSE DU SERVICE DE TRANSPORT DE LA STM | FRONTEND

1. **Intégration de React et Tailwind CSS** :
   - **React** : React est utilisé pour construire l’interface utilisateur en créant des composants réutilisables. Chaque composant peut encapsuler la logique de l’application, les interactions utilisateur, et le style en utilisant Tailwind CSS.
   - **Tailwind CSS** : Utilisé pour la conception de l’interface utilisateur, Tailwind CSS permet de créer des interfaces modernes et réactives rapidement grâce à des classes utilitaires. Il simplifie le processus de style des composants React en permettant aux développeurs de définir les styles directement dans le JSX.
2. **Gestion des données entre le frontend et le backend** :
   - **Communications** : Le frontend utilise Axios pour consommer les données de l’API backend. Les appels HTTP (GET, POST, PUT, DELETE) sont faits pour interagir avec le backend afin de récupérer, créer, mettre à jour ou supprimer des données. Les données échangées sont formatées en JSON pour assurer la compatibilité entre les deux parties.
   

## Sources des données
  - On utilise l'api de la STM pour recuperer nos donnes. Il fallait les decoder avec un fichier proto. Apres les avoir decoder, on le mets dans la base de donners mongoDb.


## Documentation API
- **Guide détaillé de l’API backend** :
  - **Endpoints principaux** :
    - **POST /api/login** : Se connecter dans l'application
    - **POST /api/user** : Crée un nouvel utilisateur avec des informations d’identification (username, email, password) et retourne un token JWT.
    - **PUT /api/user/:id** : Met à jour les informations de profil de l’utilisateur spécifié par l’ID.
    - **DELETE /api/user/:id** : Supprime un utilisateur du système.
  - Les réponses sont formatées en JSON avec des codes de statut HTTP appropriés (200 pour succès, 400 pour erreurs de validation, 500 pour erreurs du serveur).
  - **GET /api/trips/duration**: Page pour voir les durers des autobus de leur trip en entier.
  - **GET /api/trips/maxSequences**: Page pour voir le maximum des stops que les autobus ont.
  - **GET /api/seats**: Page pour voir le nmb de sieges disponible de tous les buses



## Déploiement
- **Processus de déploiement** :
  - **Installation des dépendances** : Assurez-vous que toutes les dépendances nécessaires sont installées en exécutant `npm i` dans le dossier frontend.
  - **Lancement du service en production** : Utilisez `npm start` pour lancer l’application en production. Cela démarrera le backend et l’application React via un serveur HTTPS sécurisé.

  - **Gestion des problèmes courants**:
  1. **AXIOS n'accepte pas les certificats non securiser**
  ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Il a fallut aller dans le localhost:3001/ du backend pour accepter que ce n'est pas securitaire pour que ca marche l'application

  2. **Longueur des requetes**
   ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Les sites prenaient trop de temps pour load en raison que les data qui prend sont extremement grande. On ne pouvait pas resoudre ce probleme.

---


## Technologies utilisées  

- **Type de base de données** : MongoDB  
- **Backend** : Express/TypeScript  
- **Frontend** : React,Tailwind CSS   

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
  
---

## Lien vers le backend  

[CID-STM-BACKEND Repository](https://github.com/hodux/CID-STM-BACKEND)  

## Lien vers le dataset  

[STM Dataset](https://www.stm.info/fr/a-propos/developpeurs)  

## Lien vers l'automatisation de donner

[PREFECT](https://github.com/hodux/prefect-stm (Ou les automatisations des donners sont faites))


