import { Template } from 'meteor/templating';

import '../templates/pageAccueil.html'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.pageAccueil.helpers({
    titre: () => "Flash"
})


Template.navbar.events({
    'click .js-open-login-modal'(event, instance){

        Modal.show('login_modal');

    },

    'click .js-logout'(event, instance){

        Meteor.logout();
    },

    'click .js-goto-create-article' (event, instance){
        FlowRouter.go('/article/create');
    }
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

