FlowRouter.route('/uploadForm',{
    name:'creationFlash',
    action(){
        BlazeLayout.render('uploadForm')
    }
});

FlowRouter.route('/',{
    name:'accueil',
    action(){if(Meteor.userId()){
        FlowRouter.go("/filtres");
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
        }else{
            FlowRouter.go("/");
        }
    }
});

FlowRouter.route('/main',{
    name:'main',
    action(){
        BlazeLayout.render('pagePrincipale')
    }
});


FlowRouter.route('/profil',{
    name:'profil',
    action(){
        BlazeLayout.render('pageProfil')
    }
});

