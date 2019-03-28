import { Template } from 'meteor/templating';


import '../templates/selectionFlash.html'

if (Meteor.isClient) {

    Template.types.events({
       'click #games': function() {
          alert("GAMEEEE ONNN");
       },
       'click #drink': function(){
           alert("You will never drink alone!");
       },
       'click #music': function(){
           alert("DO RE MI FA SOL LA SOOOOOOL")
       }
    });
 }
