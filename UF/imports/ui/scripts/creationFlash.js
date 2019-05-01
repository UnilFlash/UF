
import '../templates/creationFlash.html'
import { Template }    from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../../api/img.js';

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload() {
    return Template.instance().currentUpload.get();
  },
  imageFile(){
      return Images.findOne()
  }
});

Template.uploadForm.events({
  'change #customFile'(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      console.log(Images)
      const upload = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
});

Template.appPhoto.events({
  'click .btn btn-primary': function(e, instance) {
      e.preventDefault();
      var cameraOptions = {
          width: 800,
          height: 600
      };
      MeteorCamera.getPicture(cameraOptions, function (error, data) {
         if (!error) {
             instance.$('.photo').attr('src', data); 
         }
      });
  }
});

Template.retour.events({
  "click #retour": function(){
    window.location="http://localhost:3000/main"
  }
})