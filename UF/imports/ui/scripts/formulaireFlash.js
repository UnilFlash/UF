import { Template } from 'meteor/templating';


import '../templates/formulaireFlash.html'

import { Mongo } from "meteor/mongo";
import { Flash } from '../../api/flash';

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
    

    },
    'click #flasher': function(){
        window.location ="http://localhost:3000/main";

        let project = {title: '', heure: '', nbrPers: 0};
        project.title = document.getElementby("activite").value;
        project.heure = document.getElementById("heure").value;
        project.nbrPers= document.getElementById("nbrPers").value;


    },
    'click #music': function(){
        document.getElementById("music").style.color="rgb(255,0,0,58%)"
    },
    'click #drink': function(){
        document.getElementById("drink").style.color="rgb(255,0,0,58%)"    
    },
    'click #walk': function(){
        document.getElementById("walk").style.color="rgb(255,0,0,58%)"
    },
    'click #study': function(){ 
        document.getElementById("study").style.color="rgb(255,0,0,58%)"
    },
    'click #sport': function(){
        document.getElementById("sport").style.color="rgb(255,0,0,58%)"
    },
    'click #games': function(){ 
        document.getElementById("games").style.color="rgb(255,0,0,58%)"
    },


});


