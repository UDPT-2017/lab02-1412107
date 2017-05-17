var indexController = {
   index: function (req, res) {
     let Welcome = '';
     if(req.session.email){
       Welcome = 'Welcome ' + req.session.email + ' to mychat';
     }
     console.log(req.session.email);
     res.render('index/index',
        {
           title: 'MyChat',
           page: 'index',
           Welcome: Welcome
        });
     }
};

module.exports = indexController;
