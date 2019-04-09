FlowRouter.route('/uploadForm',{
    name:'creationFlash',
    action(){
        BlazeLayout.render('uploadForm')
    }
});

const routes = {
    '/login'      : Login
    , '/preferences'      : Preferences
    , '/formulaire'   : Formulaire
    ,'/creation' : Creation
};