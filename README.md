# UniFlash !
Il s'agit d'une application meteor développée par des étudiants de l'université de Lausanne dans le cadre du cours Programmation pour Internet II - Meteor.js donné par Isaac Pante et accompagné par Loris Rimaz, tuteur.

Tu as un cours annulé et tu ne sais pas quoi faire!? Alors rends-toi sur Uniflash et trouve un flash qui te correspond! L'application consiste à créer des Flashs/événements, essentiellement au sein d'une communauté universitaire, afin de faire rencontrer des gens et développer en eux une certaine spontanéité. 
Tout d'abord nous avons une page de login avec un signup et un login par mot de passe. Une fois enregistré l'utilisateur présélectionne des filtres pour avoir les types de Flashs qui l'intéresseraient. Après sa sélection, il se retrouve sur la page principale où l'on retrouve les Flashs des autres utilisateurs et un bouton jaune avec un éclair en bas de la page pour créer son propre Flash. Ce bouton l'amène sur une page de formulaire où il doit entrer diverses informations concernant son Flash ainsi qu'un upload de
photo.


## Lancement
Il faut avoir meteor installé : lien pour l'installation :  https://www.meteor.com/install

Une fois installé, allez dans le terminal et dirigez-vous (avec des cd) dans le fichier UF et lancez la commande :
```
meteor run
```
L'application se construit et s'affiche sur localhost:3000, rendez-vous y à l'aide de votre navigateur dans la barre de recherche.

Voilà vous êtes sur notre application !


## Interface
*Bienvenue sur la page accueil d'Uniflash, l'utilisateur est invité à cliquer sur le bouton pour entrer dans le monde de *l'application

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/PageAccueil1%20.png" alt="alt text" width="300" height="500">


*L'utilisateur qui a déjà un compte peut se connecter avec son email et son mot de passe, ceux qui n'ont pas encore de compte son *invités à s'enregitrer

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/Login.png" alt="alt text" width="500" height="250">


*l'utilisateur créer un compte avec un nom, un email et un mot de passe

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/CreerUnCompte%20.png" alt="alt text" width="500" height="250">


*Lors de la première connexion, l'utilisateur est invité à sélectionner le type d'activités qui l'intéressent. lorsqu'il se *connectera par la suite cette étape n'aura plus lieu, cependant il peut à tout moment changer ses préférences en cliquant sur *le bouton préférences sur la page principale.

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/Filtres.png" alt="alt text" width="500" height="250">


*Une fois connecté, l'utilisateur est redirigé vers la page principale où tous les flashs disponibles s'affichent. De plus, il *peut changer ses préférences (types d'activités) et se déconnecter.

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/PagePrincipale%20.png" alt="alt text" width="500" height="250">


*Chaque flash est illustré d'une image et affiche lorsqu'on clique sur le petit plus les informations importantes (lieu, heure, *activité, nombre de participants désirés, information supplémentaires). L'utilisateur intéressé par le flash peut cliquer sur *le bouton je participe et peut donc participer à l'événement.Lorsque l'utilisateur a cliqué sur je participe le flash change *de couleur et devient vert, si le flash est complet il devient rouge. L'utilisateur peut annuler sa participation au flash dans *ce cas il clique sur le bouton Annule.

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/PrecisionsFlash.png" alt="alt text" width="500" height="250">


*Sur cette même page principale l'utilisateur trouvera un bouton(tu veux flasher?!) qui lui permet de créer un flash *(redirection vers formulaire)

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/PagePrincipaleBouton.png" alt="alt text" width="500" height="250">


*L'utilisateur qui veut créer un flash, rempli les informations relatives à l'événement qu'il veut partager (type d'activité, *titre de l'activité, date, heure, lieu, informations supplémentaires s'il y en a). L'utilisateur ne peut pas créer de flash *plus de 48h avant que celui-ci ait lieu.

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/Formulaire%20.png" alt="alt text" width="500" height="250">


*Après avoir rempli le formulaire l'utilisateur peut insérer un image pour illustrer son flash

<img src="https://github.com/UnilFlash/UF/blob/master/ImagesInterfaces/UploadPhoto%20.png " alt="alt text" width="500" height="250">



## Bases de données 

L'application contient 4 collections MongoDB. La première est gérée par accounts-password et useraccounts:bootstrap et gère les comptes utilisateurs. Les 3 autres, Filtres, Flash et Images, gèrent respectivement l'enregistrement des choix/filtrages de types de Flashs, la création du formulaire et de la photo du Flash. 

## License
Ce programme est un prototype gratuit. 

UniFlash a été développé avec le framework de développement web en Javascript Meteor dans sa version 1.8.1

Les principaux modules Meteor utilisés dans ce projet sont :

reactiveVar (variables réactives)
FlowRouter (les liens/les routes)
Bootstrap (style)

## Glossaire
* Flash : Événement

## Contributeurs
* Lara
* Marielle
* Jason
* Lucas

Faculté des Lettres - Université de Lausanne - Février à Mai 2019 Github
