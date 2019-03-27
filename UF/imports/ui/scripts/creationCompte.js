import { Template } from 'meteor/templating';


import '../templates/creationCompte.html'


Template.register.events({
    'submit form' : function(event, template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      Accounts.createUser({
        email: emailVar,
        password : passwordVar,
  
      });
    }
    });
  
  
    Template.login.events({
      'submit form' : function(event, template){
        event.preventDefault();
        var emailVar = template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
        Meteor.loginWithPassword(emailVar, passwordVar);
      
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
