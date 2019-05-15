import { Template } from 'meteor/templating';
import { Session } from "meteor/session";


import '../templates/formulaireFlash.html'

import { Mongo } from "meteor/mongo";
import { Flash } from '../../api/flash';

Template.formulaireFlash.helpers({
    dateNow: function(){
        let date = new Date();
        let annee = date.getFullYear();
        let mois = date.getMonth()+1;
        let jour = date.getDate();
        // console.log(`${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`)
        return `${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`
    },
    dateMax: function(){
        let date = new Date();
        let annee = date.getFullYear();
        let mois = date.getMonth()+1;
        let jour = date.getDate()+2;
        // console.log(`${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`)
        return `${annee}-${mois.toString().length < 2 ? `0${mois}` : mois}-${jour.toString().length < 2 ? `0${jour}` : jour}`
        //return "2019-05-10"
    }
})

// Template.formulaireFlash.helpers()
Template.formulaireFlash.events({
    "submit .js-formulaire-flash"(event, instance){
        event.preventDefault();

        const activiteVal= event.target.activite.value;
        const dateVal= event.target.date.value;
        const heureVal= event.target.heure.value;
        const nbrPersVal= event.target.nbrPers.value;
        const caseVal= event.target.case.value;
        const infoSuppVal= event.target.infoSupp.value;
        const lieuVal= event.target.lieu.value;

        //console.log (lieuVal);
    
        //interaction avec base de données récupère les données entrées dans les input du formulaire pour l'insérer dans la base de données
        Flash.insert({
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

        FlowRouter.go("/main")

    },
    'click #music': function(e){
        e.preventDefault();
        document.getElementById("music").style.color="rgb(255,0,0,58%)"
    },
    'click #drink': function(e){
        e.preventDefault();
        document.getElementById("drink").style.color="rgb(255,0,0,58%)"    
    },
    'click #walk': function(e){
        e.preventDefault();
        document.getElementById("walk").style.color="rgb(255,0,0,58%)"
    },
    'click #study': function(e){
        e.preventDefault(); 
        document.getElementById("study").style.color="rgb(255,0,0,58%)"
    },
    'click #sport': function(e){
        e.preventDefault();
        document.getElementById("sport").style.color="rgb(255,0,0,58%)"
    },
    'click #games': function(e){
        e.preventDefault();
        document.getElementById("games").style.color="rgb(255,0,0,58%)"
    },
});
