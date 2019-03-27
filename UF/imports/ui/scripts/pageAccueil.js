import { Template } from 'meteor/templating';

import '../templates/monTemplate.html'

Template.monTemplate.helpers({
    titre: () => "UniFlash"
})