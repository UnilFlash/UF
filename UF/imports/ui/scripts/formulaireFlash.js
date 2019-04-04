import { Template } from 'meteor/templating';


import '../templates/formulaireFlash.html'

// Template.formulaireFlash.helpers()
Template.formulaireFlash.events({
    "submit .js-formulaire-flash"(event, instance){
        event.preventDefault();

        const activiteVal= event.target.activite.value;
        const heureVal= event.target.heure.value;

        console.log(activiteVal);
        console.log(heureVal);

    }
});

