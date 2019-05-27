//routes pour accéder aux differentes pages de l'appli

FlowRouter.route('/',{
    name:'accueil',
    action(){
        if(Meteor.userId()){
        FlowRouter.go("/main");
    }else{
        BlazeLayout.render('pageAccueil');
    }
}
});

FlowRouter.route('/formulaire',{
    name:'formulaire',
    action(){
        BlazeLayout.render('formulaireFlash')
    }
});

FlowRouter.route('/filtres',{
    name:'filtres',
    action(){
        if(Meteor.userId()){
            BlazeLayout.render('selectionFlash')
        }
    }
});

FlowRouter.route('/main',{
    name:'main',
    action(){
        BlazeLayout.render('pagePrincipale')
    }
});


