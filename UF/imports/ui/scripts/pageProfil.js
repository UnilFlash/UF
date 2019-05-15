import { Template } from 'meteor/templating';


import '../templates/pageProfil.html'


Template.deconnexion.events({
	'click .js-logout'(event, instance){
		FlowRouter.go('/');
	}
});
