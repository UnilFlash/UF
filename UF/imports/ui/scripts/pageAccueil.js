import { Template } from 'meteor/templating';

import '../templates/pageAccueil.html'

//Template.pageAccueil.helpers({
    //titre: () => "Flash"
//})

Template.pageAccueil.events({
    'click #begin': function(){
        window.location ="http://localhost:3000/login"
    },
})