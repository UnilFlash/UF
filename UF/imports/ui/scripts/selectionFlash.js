import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";


import '../templates/selectionFlash.html';
import '../../api/filtres.js'
import { Mongo } from "meteor/mongo";
import { Filtres } from '../../api/filtres.js';



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
        "submit .js-filtres"(event, instance){
            event.preventDefault();
    
            let musicVal= event.target.music.value;
            let gamesVal= event.target.games.value;
            let drinkVal= event.target.drink.value;
            let studyVal= event.target.study.value;
            let sportVal= event.target.sport.value;
            let walkVal= event.target.walk.value;


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

            Meteor.users.insert({
                music: musicVal,
                games: gamesVal,
                drink: drinkVal,
                study: studyVal,
                walk: walkVal,
                sport: sportVal,

            });
        },



        'click #games': function(e){
            e.preventDefault();
            let games = document.getElementById("gamesicone")
            if(games.value == "false"){
                games.style.color="black";
                games.value = true;
            }else{
                games.value = "false";
                games.style.color="rgb(255,0,0,58%)";
            }
        },
       'click #drink': function(e){
           e.preventDefault();
           let drink = document.getElementById("drinkicone")
           if(drink.value == "false"){
               drink.style.color="black";
               drink.value = true
            }else{
                drink.value = "false";
                drink.style.color="rgb(255,0,0,58%)";
        }
    },
       'click #music': function(e){
        e.preventDefault();
        let music = document.getElementById("musicicone")
        if(music.value == "false"){
            music.style.color="black";
            music.value = true;
        }else{
            music.value = "false";
            music.style.color="rgb(255,0,0,58%)";
        }
    },
       'click #sport': function(e){
        e.preventDefault();
        let sport = document.getElementById("sporticone")
        if(sport.value == "false"){
            sport.style.color="black";
            sport.value = true;
        }else{
            sport.value = "false";
            sport.style.color="rgb(255,0,0,58%)";
        }
    },
       'click #walk': function(e){
        e.preventDefault();
        let walk = document.getElementById("walkicone")
        if(walk.value == "false"){
            walk.style.color="black";
            walk.value = true;
        }else{
            walk.value = "false";
            walk.style.color="rgb(255,0,0,58%)";
        }
    },
       'click #study': function(e){
        e.preventDefault(); 
        let study = document.getElementById("studyicone")
        if(study.value == "false"){
            study.style.color="black";
            study.value = true;
        }else{
            study.value = "false";
            study.style.color="rgb(255,0,0,58%)";
        }
    },
       'click #filtrer': function(){
           window.location ="http://localhost:3000/main"
           
       }
    })