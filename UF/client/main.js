import '../imports/ui/body.js';
import './main.html';

userInfos = new Mongo.Collection('User');
let userEmail = document.getElementById("login-email")
let userPassword = document.getElementById("login-password")
userInfos.insert({ email: userEmail, password: userPassword, });