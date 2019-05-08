import { Template } from 'meteor/templating';

import '../templates/pageAccueil.html'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.navbar.events({
    'click .js-open-login-modal'(event, instance){

        Modal.show('login_modal');
    },
    
    'click .js-logout'(event, instance){

        Meteor.logout();
    },

});


Template.login_modal.onCreated(function(){
    this.autorun(()=>{
        if(Meteor.userId()){
            Modal.hide('login_modal');
        }

    });

});

T9n.setLanguage('fr');

let email = AccountsTemplates.removeField('email');
let password = AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'fullname',
    type: 'text',
    displayName: 'Nom complet',
    placeholder: 'Nom complet',
    required: true,
    minLength: 3,
    trim: true,
});


password.minLength = 3;



AccountsTemplates.addField(email);
AccountsTemplates.addField(password);

Template.atForm.events({
   'click #at-btn'(e, i){
        let titre = document.querySelector("h3").innerHTML;
        console.log(titre)
        if(titre == "Se connecter"){
            setTimeout(() => { FlowRouter.go("/main") }, 1000)
        }else if(titre == "Créer un compte"){
            setTimeout(() => { FlowRouter.go("/filtres") }, 1000)
        }
    },
});



