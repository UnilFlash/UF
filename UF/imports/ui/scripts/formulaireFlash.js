import { Template } from 'meteor/templating';


import '../templates/formulaireFlash.html'

// Template.formulaireFlash.helpers()
Template.formulaireFlash.events({
    "submit .js-formulaire-flash"(event, instance){
        event.preventDefault();

        const activiteVal= event.target.activite.value;
        const heureVal= event.target.heure.value;
        const nbrPersVal= event.target.nbrPers.value;
        const caseVal= event.target.case.value;
        const parEquipeVal= event.target.parEquipe.value;
        const infoSuppVal= event.target.infoSupp.value;
        const lieuVal= event.target.lieu.value;
       

        console.log(activiteVal);
        console.log(heureVal);

    }
});

