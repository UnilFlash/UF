import { Template } from 'meteor/templating';
import { Images } from '../../api/img';
//import { Flash } from '../../api/flash';

import '../templates/pagePrincipale.html';


import '../templates/pagePrincipale.html'

Template.lienCreationFlash.events({
    'click #flasher': function () {
        window.location = 'http://localhost:3000/formulaire'
    }
})