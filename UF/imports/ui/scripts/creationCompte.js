import { Template } from 'meteor/templating';


import '../templates/creationCompte.html'


Template.register.events({
    'submit form' : function(event, template){
      event.preventDefault();
      let emailVar = template.find('#email').value;
      let passwordVar = template.find('#password').value;
      Accounts.createUser({
        email: emailVar,
        password : passwordVar,
      });
    }
    });
  
  
    Template.login.events({
      'submit form' : function(event, template){
        event.preventDefault();
        let emailVar2 = template.find('#login-email').value;
        let passwordVar2 = template.find('#login-password').value;
        Meteor.loginWithPassword(emailVar2, passwordVar2);
      
      }
      });
  
      //Meteor.users.find().fetch()
      //meteor add accounts-password
      
  
    Template.logout.events({
      'click .Logout' : function(event){
        event.preventDefault();
        Meteor.logout();
      }
    });
