import { Template } from 'meteor/templating';
//import { Flash } from '../../api/flash';
import { Images } from '../../api/img.js';
import { Flash } from '../../api/flash.js';
import { Session } from 'meteor/meteor'
import '../templates/pagePrincipale.html';


import '../templates/pagePrincipale.html'

Template.lienCreationFlash.events({ 
    'click #flasher': function () {
        FlowRouter.go('formulaire')
    },
    'click #preferences': function(){
        FlowRouter.go('/filtres');}
        }
);



Template.lienCreationFlash.events({ 
    
    'click .participe': function(){
        let join = document.getElementById("join");
        if(join.value == "non"){
            document.getElementById("carte").style.backgroundColor="lightgreen";
            join.value = "oui";
            $("#join").text("Annule");
            document.getElementById("join").style.backgroundColor="rgb(249,88,88)";
            document.getElementById("info").style.backgroundColor="rgb(77, 255, 77)";
        }else if (join.value == "oui"){
            join.value = "non";
            document.getElementById("carte").style.backgroundColor="rgb(255,213,0,80%)";
            $("#join").text("Je participe!");
            document.getElementById("join").style.backgroundColor="lightgreen";
            document.getElementById("info").style.backgroundColor="rgb(255,213,0,80%)";
            
        }
}});

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
        //liaison de l'image à la base de données des flashs
    },
    description(){
        return this.activite
    },
    date(){
        return this.date
    },
    heure(){
        return this.heure
    },
    nombre(){
        return this.nbrPers
    },
    case(){
        return this.case
    },
    infoSupp(){
        return this.infoSupp
    },
    lieu(){
        return this.lieu
    }
  });

 Template.deconnexion.events({
	'click .js-logout'(event, instance){
        if(Meteor.userId()){
		FlowRouter.go('/');}
        }
});

  