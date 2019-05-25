import { Template } from 'meteor/templating';
import { Session } from "meteor/session";


import '../templates/formulaireFlash.html'

import { Mongo } from "meteor/mongo";
import { Flash } from '../../api/flash';

//limitation pour l'input date au jour même
Template.formulaireFlash.helpers({
    dateNow: function(){
        let date = new Date();
        let annee = date.getFullYear();
        let mois = date.getMonth()+1;
        let jour = date.getDate();
        // console.log(`${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`)
        return `${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`
    },
    //limitation pour l'input date au jour même + 48h
    dateMax: function(){
        let date = new Date();
        let annee = date.getFullYear();
        let mois = date.getMonth()+1;
        let jour = date.getDate()+2;
        // console.log(`${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`)
        return `${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`
        
    }
})

// conserve dans le cache les informations insérées dans les inputs du formulaire
Template.formulaireFlash.events({
    "submit .js-formulaire-flash"(event, instance){
        event.preventDefault();

        let musicVal= event.target.music.value;
        let gamesVal= event.target.games.value;
        let drinkVal= event.target.drink.value;
        let studyVal= event.target.study.value;
        let sportVal= event.target.sport.value;
        let walkVal= event.target.walk.value;
        const activiteVal= event.target.activite.value;
        const dateVal= event.target.date.value;
        const heureVal= event.target.heure.value;
        const nbrPersVal= event.target.nbrPers.value;
        const caseVal= event.target.case.checked;
        const infoSuppVal= event.target.infoSupp.value;
        const lieuVal= event.target.lieu.value;

        

    
        if(musicVal == "false"){
            musicVal = false
        }else{
            musicVal = true
        }

        if(gamesVal == "false"){
            gamesVal = false
        }else{
            gamesVal = true
        }

        if(drinkVal == "false"){
            drinkVal = false
        }else{
            drinkVal = true
        }

        if(studyVal == "false"){
            studyVal = false
        }else{
            studyVal = true
        }

        if(sportVal == "false"){
            sportVal = false
        }else{
            sportVal = true
        }

        if(walkVal == "false"){
            walkVal = false
        }else{
            walkVal = true
        }

        //interaction avec base de données récupère les données entrées dans les input du formulaire pour l'insérer dans la base de données

        Flash.insert({
            music: musicVal,
            games: gamesVal,
            drink: drinkVal,
            study: studyVal,
            walk: walkVal,
            sport: sportVal,
            activite: activiteVal,
            date: dateVal,
            heure: heureVal,
            nbrPers: nbrPersVal,
            case: caseVal,
            infoSupp: infoSuppVal,
            lieu: lieuVal,
            createdAt: new Date(),
            idImage: Session.get("imageId"),
        });
//redirection vers la page principale
        FlowRouter.go("/main")
//en cliquant sur le type d'activité la pastille change de couleur
    },
    'click #music': function(e){
        e.preventDefault();
        let music = document.getElementById("music")
        if(music.value == "false"){
            music.style.color="lightgreen";
            music.value = true;
        }else{
            music.value = "false";
            music.style.color="black";
        }
    },
    'click #drink': function(e){
        e.preventDefault();
        let drink = document.getElementById("drink")
        if(drink.value == "false"){
            drink.style.color="lightgreen";
            drink.value = true;
        }else{
            drink.value = "false";
            drink.style.color="black";
        }
    },
    'click #walk': function(e){
        e.preventDefault();
        let walk = document.getElementById("walk")
        if(walk.value == "false"){
            walk.style.color="lightgreen";
            walk.value = true;
        }else{
            walk.value = "false";
            walk.style.color="black";
        }
    },
    'click #study': function(e){
        e.preventDefault(); 
        let study = document.getElementById("study")
        if(study.value == "false"){
            study.style.color="lightgreen";
            study.value = true;
        }else{
            study.value = "false";
            study.style.color="black";
        }
    },
    'click #sport': function(e){
        e.preventDefault();
        let sport = document.getElementById("sport")
        if(sport.value == "false"){
            sport.style.color="lightgreen";
            sport.value = true;
        }else{
            sport.value = "false";
            sport.style.color="black";
        }
    },
    'click #games': function(e){
        e.preventDefault();
        let games = document.getElementById("games")
        if(games.value == "false"){
            games.style.color="lightgreen";
            games.value = true;
        }else{
            games.value = "false";
            games.style.color="black";
        }
    },

    



});

