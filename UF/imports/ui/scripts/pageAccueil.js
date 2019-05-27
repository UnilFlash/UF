import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Template }   from 'meteor/templating';
import '../templates/pageAccueil.html'
import { Filtres } from '../../api/filtres';


Template.navbar.events({
	'click .js-open-login-modal'(event, instance){
		Modal.show('login_modal');
	}
});


Template.login_modal.onCreated(function(){
	this.autorun(()=>{
		if(Meteor.userId()){
			const titre = document.querySelector("h3").innerHTML;
			if(Meteor.userId() && titre == "Se connecter"){
				FlowRouter.go("/main");
		}else{
			FlowRouter.go("/filtres");
		}}
	});
});




T9n.setLanguage('fr');
const email = AccountsTemplates.removeField('email');
const password = AccountsTemplates.removeField('password');
AccountsTemplates.addField({
	_id: 'fullname',
	type: 'text',
	displayName: 'Nom complet',
	placeholder: 'Nom complet',
	required: true,
	minLength: 3,
	trim: true,
	re:/(?=.*[a-z])(?=.*[A-Z])/,
	errStr:'Au moins 1 minuscule et 1 majuscule',
});
password.re=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
password.errStr= 'Au moins 1 chiffre, 1 minuscule et 1 majuscule',
password.minLength = 6;
AccountsTemplates.addField(email);
AccountsTemplates.addField(password);
