import '../imports/ui/body.js';
import './main.html';

userInfos = new Mongo.Collection('User');
let userEmail = document.getElementById("login-email")
userInfos.insert({ email: userEmail});