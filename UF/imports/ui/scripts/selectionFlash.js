import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


import '../templates/selectionFlash.html';
import '../../api/filtres.js'
import { Mongo } from "meteor/mongo";



    Template.selectionFlash.events({
       'click #games': function(){
           db.filtres.insert({_id: ObjectId(games)})
       },
       'click #drink': function(){
           db.filtres.insert({_id: drink})
       },
       'click #music': function(){
           db.filtres.insert({_id: music})
       },
       'click #sport': function(){
           db.filtres.insert({_id: sport})
       },
       'click #walk': function(){
           db.filtres.insert({_id: walk})
       },
       'click #study': function(){
           db.filtres.insert({_id: study})
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
