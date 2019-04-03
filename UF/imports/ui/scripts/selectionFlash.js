import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


import '../templates/selectionFlash.html';

Template.selectionFlash.onCreated(function(){
    Session.set("games", false);
    Session.set("drink", false);
    Session.set("music", false);
    Session.set("study", false);
    Session.set("sport", false);
    Session.set("walk", false);
});

var nClicks = 0;


    Template.selectionFlash.events({
       'click #games': function() {
           if(Session.get("games")){
               Session.set("games", false)
           }else{
               Session.set("games", true)
           }
       },
       'click #drink': function(){
           if(Session.get("drink")){
               Session.set("drink", false)
           }else{
               Session.set("drink", true)
           }
       },
       'click #music': function(){
           if(Session.get("music")){
               Session.set("music", false)
           }else{
               Session.set("music", true)
           }
       },
       'click #sport': function(){
           if(Session.get("sport")){
               Session.set("sport", false)
           }else{
               Session.set("sport", true)
           }
       },
       'click #walk': function(){
           if(Session.get("walk")){
               Session.set("walk", false)
           }else{
               Session.set("walk", true)
           }
       },
       'click #filtrer': function(){
           if(Session.get("filtrer")){
               Session.set("filtrer", false)
           }else{
               Session.set("filtrer", true)
           }
       },
       'click #music': function(){ 
            if(nClicks%2==0){ 
               document.getElementsById("music").style.backgroundColor = "lightgreen"
            }else{
               document.getElementsById("music").style.backgroundColor = "black";
            }
        }
       
    })
