import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";


import '../templates/selectionFlash.html';
import '../../api/filtres.js'
import { Mongo } from "meteor/mongo";
import { Filtres } from '../../api/filtres.js';




    Template.selectionFlash.events({
       'click #games': function(){
           document.getElementById("gamesicone").style.color="rgb(255,0,0,58%)";
           Meteor.users.update(Meteor.userId(), { $set: { tag : {
               games: true ? false : true,
           } } } )

       },
       'click #drink': function(){
           document.getElementById("drinkicone").style.color="rgb(255,0,0,58%)";
           Filtres.update({_id: ""},{$push:{tag: "drink" }})
       },
       'click #music': function(){
           document.getElementById("musicicone").style.color="rgb(255,0,0,58%)";
           Filtres.update({_id:""},{$push:{tag: "music" }})
       },
       'click #sport': function(){
           document.getElementById("sporticone").style.color="rgb(255,0,0,58%)";
           Filtres.update({_id:""},{$push:{tag: "sport" }})
       },
       'click #walk': function(){
           document.getElementById("walkicone").style.color="rgb(255,0,0,58%)";
           Filtres.update({_id:""},{$push:{tag: "walk" }}) 
       },
       'click #study': function(){
           document.getElementById("studyicone").style.color="rgb(255,0,0,58%)";
           Filtres.update({_id:""},{$push:{tag: "study" }})
       },
       'click #filtrer': function(){
            window.location ="http://localhost:3000/main"
       }
    })