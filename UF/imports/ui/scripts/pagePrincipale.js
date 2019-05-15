import { Template } from 'meteor/templating';
//import { Flash } from '../../api/flash';
import { Images } from '../../api/img.js';
import { Flash } from '../../api/flash.js';



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
    flash(){
        return Flash.find()
    },
    image(){
        let flashId = this._id;
        let image = Flash.findOne({_id: flashId}, {fields: {idImage: 1}})
        let returnedImage = Images.findOne({_id: image.idImage})
        return returnedImage
    },
    description(){
        return this.infoSupp
    }
  });

 //Template.deconnexion.events({
	//'click .js-logout'(event, instance){
        //if(Meteor.userId()){
		//FlowRouter.go('/');}
	//}
//});

 
  