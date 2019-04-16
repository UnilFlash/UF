import { Template } from 'meteor/templating';


import '../templates/formulaireFlash.html'

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
        window.location ="http://localhost:3000/main"
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

