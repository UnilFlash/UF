import { Template } from 'meteor/templating';
import { Images } from '../../api/img.js'

import '../templates/pagePrincipale.html'

Template.lienCreationFlash.events({
    'click #lienCF': function () {
        window.location = 'http://localhost:3000/uploadForm'
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
  