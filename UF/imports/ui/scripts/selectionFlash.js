import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";


import '../templates/selectionFlash.html';
import '../../api/filtres.js'
import { Mongo } from "meteor/mongo";



    /*Template.selectionFlash.onRendered({
        function(){
            console.log(Meteor.userId())
            Meteor.users.update({
                _id: Meteor.userId(),
                "tag.games": {
                    $exists: false
            }
        }, {
            $set: { 
                tag : {
                    games: false,
                }
            }
        })
    }
    })*/





    Template.selectionFlash.events({
        'click #games': function(){
            document.getElementById("gamesicone").style.color="rgb(255,0,0,58%)";
            Meteor.users.update(Meteor.userId(), { $set: { tag : {
             games: true ? false : true,
         } } } )
        },
       'click #drink': function(event, instance){
            event.preventDefault();
            document.getElementById("drinkicone").style.color="rgb(255,0,0,58%)";
            console.log(Meteor.userId())
            Meteor.users.update(
                {
                    _id: Meteor.userId()
                },
                Meteor.users.findOne(Meteor.userId()),
                ["tag"],
                { $set: { 
                    "tag" : {
                        drink: true ? false : true,
                    }
                }}
            )
       },
       'click #music': function(){
           document.getElementById("musicicone").style.color="rgb(255,0,0,58%)";
           Meteor.users.insert({
            "filtres" : "music"
            },{upsert:true})
       },
       'click #sport': function(){
           document.getElementById("sporticone").style.color="rgb(255,0,0,58%)";
           Meteor.users.update(Meteor.userId(), { $set: { tag : {
            sport: true ? false : true,
        } } } )
       },
       'click #walk': function(){
           document.getElementById("walkicone").style.color="rgb(255,0,0,58%)";
           Meteor.users.update(Meteor.userId(), { $set: { tag : {
            walk: true ? false : true,
        } } } )
       },
       'click #study': function(){
           document.getElementById("studyicone").style.color="rgb(255,0,0,58%)";
           Meteor.users.update(Meteor.userId(), { $set: { tag : {
            study: true ? false : true,
        } } } )
       },
       'click #filtrer': function(){
            window.location ="http://localhost:3000/main"
       }
    })