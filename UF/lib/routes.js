FlowRouter.route('/uploadForm',{
    name:'creationFlash',
    action(){
        BlazeLayout.render('uploadForm')
    }
});

FlowRouter.route('/',{
    name:'accueil',
    action(){
        BlazeLayout.render('pageAccueil')
    }
});

FlowRouter.route('/formulaire',{
    name:'formulaire',
    action(){
        BlazeLayout.render('formulaireFlash')
    }
});

FlowRouter.route('/accueil',{
    name:'accueil',
    action(){
        BlazeLayout.render('pageAccueil')
    }
});

FlowRouter.route('/filtres',{
    name:'filtres',
    action(){
        BlazeLayout.render('selectionFlash')
    }
});

FlowRouter.route('/main',{
    name:'main',
    action(){
        BlazeLayout.render('pagePrincipale')
    }
});

FlowRouter.route('/login',{
    name:'login',
    action(){
        BlazeLayout.render('creationCompte')
    }
})
