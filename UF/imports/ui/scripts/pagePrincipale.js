import { Template } from 'meteor/templating';


import '../templates/pagePrincipale.html'

Template.lienCreationFlash.events({
    'click #lienCF': function () {
        window.location = 'http://localhost:3000/uploadForm'
    }
})