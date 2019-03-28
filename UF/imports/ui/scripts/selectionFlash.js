import { Template } from 'meteor/templating';


import '../templates/selectionFlash.html'

if (Meteor.isClient) {
    
    Template.types.events({
       'click #chill': function() {
          alert("You've got the chill...");
       },
       'click #drink': function(){
           alert("Drink together...");
       },
       'click #art': function(){
           alert("The art world is the best world")
       }
    });
 }
