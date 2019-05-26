# UniFlash !
Il s'agit d'une application meteor développée par des étudiants de l'université de Lausanne dans le cadre du cours Programmation pour Internet II - Meteor.js donné par Isaac Pante et Loris Rimaz. 

Tu as un cours annulé et tu ne sais pas quoi faire!? Alors rends-toi sur Uniflash et trouve un flash qui te corresponds! L'application consiste à créer des Flashs/événement essentiellement au sein d'une communauté universitaire, afin de faire rencontrer des gens et développer en eux une certaine spontanéité. 
Tout d'abord nous avons une page de login avec un signup et un login par mot de passe. Une fois enregistré l'utilisateur présélectionne des filtres pour avoir les types de Flashs qui l'intéresseraient. Après sa sélection, il se retrouve sur la page principale où l'on retrouve les Flashs des autres utilisateurs et un bouton jaune avec un éclair en bas de la page pour créer son propre Flash. Ce bouton l'amène sur une page de formulaire où il doit entrer diverses informations concernant son Flash ainsi qu'un upload de
photo.

## Langages utilisés
* HTML
* CSS avec Bootstrap
* Javascript 
* Meteor avec Blaze
* MongoDB et FileCollections


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
![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Page%20Accueil%201%20.png "page accueil")

*L'utilisateur qui a déjà un compte peut se connecter avec son email et son mot de passe ceux qui n'ont pas encore de compte son *invités à s'enregitrer
![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Login.png "connexion")

*l'utilisateur créer un compte avec un email et un mot de passe
![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Cre%CC%81er%20un%20compte%20.png "création compte")

*Une fois connecté, l'utilisateur est redirigé vers la page principale où tous les flashs disponibles s'affichent. De plus, il *peut changer ses préférences (types d'activités) et se déconnecter.
![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Page%20principale%20.png "page principale")

*Chaque flash est illustré d'une image et affiche lorsqu'on clique sur le petit plus les informations importantes (lieu, heure, *activité, nombre de participants désirés, information supplémentaires). L'utilisateur intéressé par le flash peut cliquer sur *le bouton je participe et peut donc participer à l'événement.Lorsque l'utilisateur à cliquer sur je participe le flash change *de couleur et devient vert, si le flash est complet il devient rouge. L'utilisateur peut annuler sa participation au flash dans *ce cas il clique sur le bouton Annule.

![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Pr%C3%A9cisions%20du%20Flash.png "page principale-détail flash")

*Sur cette même page principale l'utilisateur trouvera un bouton qui lui permet de créer un flash (redirection vers formulaire)

![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Page%20principale%20%2B%20bouton.png "page principale 2")

*L'utilisateur qui veut créer un flash rempli les informations relative à l'événement qu'il veut partager (type d'activité, *titre de l'activité, date, heure, lieu, informations supplémentaires s'il y en a). L'utilisateur ne peut pas créer de flash *plus de 48h avant que celui-ci a lieu.
![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Formulaire%20.png "formulaire création flash")

*Après avoir rempli le formulaire l'utilisateur peut insérer un image pour illustrer son flash
![Alt text](https://github.com/UnilFlash/UF/blob/master/Images%20interfaces/Upload%20photo%20.png "insertion image")


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
