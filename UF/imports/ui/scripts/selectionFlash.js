import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


import '../templates/selectionFlash.html';
import '../../api/filtres.js'
import { Mongo } from "meteor/mongo";
import { Filtres } from '../../api/filtres.js';



    Template.selectionFlash.events({
       'click #games': function(){
           Filtres.insert({_id: games})
       },
       'click #drink': function(){
           Filtres.insert({_id: drink})
       },
       'click #music': function(){
           Filtres.insert({_id: music})
       },
       'click #sport': function(){
           Filtres.insert({_id: sport})
       },
       'click #walk': function(){
           Filtres.insert({_id: walk})
       },
       'click #study': function(){
           Filtres.insert({_id: study})
       },
       'click #filtrer': function(){
           window.location ="http://localhost:3000/main"
       },



       'click #music': function(){
            document.getElementById("musicicone").style.color="rgb(255,0,0,58%)"
        },
        'click #drink': function(){
            document.getElementById("drinkicone").style.color="rgb(255,0,0,58%)"    
        },
        'click #walk': function(){
            document.getElementById("walkicone").style.color="rgb(255,0,0,58%)"
        },
        'click #study': function(){ 
            document.getElementById("studyicone").style.color="rgb(255,0,0,58%)"
        },
        'click #sport': function(){
            document.getElementById("sporticone").style.color="rgb(255,0,0,58%)"
        },
        'click #games': function(){ 
            document.getElementById("gamesicone").style.color="rgb(255,0,0,58%)"
        },
    })
