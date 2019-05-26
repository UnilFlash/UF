# UniFlash !
Il s'agit d'une application meteor développée par des étudiants de l'université de Laussane dans le cadre du cours Programmation pour Internet II - Meteor.js donné par Isaac Pante et Loris Rimaz. 

L'application consiste à créer des Flashs afin de faire rencontrer des gens et développer en eux une certaine spontanéité. 
Tout d'abord nous avons une page de login avec un signup et un login par mot de passe. Une fois enregistré l'utilisateur préséléctionne des filtres pour avoir les types de Flashs qui l'intéresseraient sur la page principale. Après sa sélection, il se retrouve sur la page principale où l'on retrouve les Flashs des autres utilisateurs et un bouton jaune avec un éclair en bas de la page pour créer son propre Flash. Ce bouton l'amène sur une page de formulaire où il doit entrer diverses informations concernant son Flash ainsi qu'un upload de
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

(images + petites descriptions) 

(https://github.com/LaraL99/UniFlash/raw/master/UF/Images interfaces/Page Accueil 1.PNG "Comparaison utilisateur-groupe")



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
* Flash : Evènement

## Contributeurs
* Lara
* Marielle
* Jason
* Lucas

Faculté des Lettres - Université de Lausanne - Février à Mai 2019 Github
