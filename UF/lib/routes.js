FlowRouter.route('/uploadForm',{
    name:'creationFlash',
    action(){
        BlazeLayout.render('uploadForm')
    }
});

FlowRouter.route('/login',{
    name:'login',
    action(){
        BlazeLayout.render('pageLogin')
    }
});