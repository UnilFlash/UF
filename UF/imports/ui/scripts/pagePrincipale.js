import { Template } from 'meteor/templating';
//import { Flash } from '../../api/flash';
import { Images } from '../../api/img.js';

import '../templates/pagePrincipale.html';


import '../templates/pagePrincipale.html'

Template.lienCreationFlash.events({
    'click #flasher': function () {
        window.location = 'http://localhost:3000/formulaire'
    },
    'click #preferences': function(){
        window.location = "http://localhost:3000/filtres"
    }
});

Template.lienCreationFlash.helpers({
    currentUpload() {
      return Template.instance().currentUpload.get();
    },
    imageFile(){
        return Images.find()
    }
  });


  Template.deconnexion.events({
	'click .js-logout'(event, instance){
		FlowRouter.go('/');
	}
});

  