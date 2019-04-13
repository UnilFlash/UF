FlowRouter.route('/uploadForm',{
    name:'creationFlash',
    action(){
        BlazeLayout.render('uploadForm')
    }
});

FlowRouter.route('/',{
    name:'login',
    action(){
        BlazeLayout.render('pageLogin')
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