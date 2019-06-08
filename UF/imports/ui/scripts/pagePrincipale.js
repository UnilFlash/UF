import { Template } from 'meteor/templating';
//import { Flash } from '../../api/flash';
import { Images } from '../../api/img.js';
import { Flash } from '../../api/flash.js';
import { Filtres } from '../../api/filtres.js';
import { Session } from 'meteor/meteor'
import '../templates/pagePrincipale.html';


import '../templates/pagePrincipale.html'


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
	'click .js-logout':function(){
        Meteor.logout();
        FlowRouter.go('/')}
    
});

Template.lienCreationFlash.events({ 
    'click #flasher': function () {
        FlowRouter.go('formulaire')
    },
    'click #preferences': function(){
        FlowRouter.go('/filtres');}
        }
);


Template.lienCreationFlash.events({
    
    'mouseover #carte' : function(){
        let join = document.getElementById("join");
        if(this.nbrPers==0 && join.value == "non"){
        document.getElementById("status").style.opacity="0.5";
        document.getElementById("carte").style.opacity="0.5";
        document.getElementById("carte").style.backgroundColor="red";
        document.getElementById("info").style.backgroundColor="red";
        $("#join").text("COMPLET")
    }
},
    'click .participe': function(e){
        let join = document.getElementById("join");
        if(join.value == "non" && this.nbrPers>0){
            document.getElementById("carte").style.backgroundColor="lightgreen";
            join.value = "oui";
            $("#join").text("Annuler");
            document.getElementById("join").style.backgroundColor="rgb(249,88,88)";
            document.getElementById("info").style.backgroundColor="rgb(77, 255, 77)";
            Flash.update(this._id,{ $set : {nbrPers : this.nbrPers-1}});
        }else if (join.value == "oui" && this.nbrPers>=0){
            join.value = "non";
            document.getElementById("carte").style.backgroundColor="rgb(255,213,0,80%)";
            $("#join").text("Je participe!");
            document.getElementById("join").style.backgroundColor="lightgreen";
            document.getElementById("info").style.backgroundColor="rgb(255,213,0,80%)";
            Flash.update(this._id,{ $set : {nbrPers : this.nbrPers+1}});
    }
}
})