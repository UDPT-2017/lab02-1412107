var indexController = {
   index: function (req, res) {
     
     console.log(req.session.email);
     res.render('index/index',
        {
           title: 'MyChat',
           message: 'Welcome to MyChat!',
           page: 'index'
        });
     }
};

module.exports = indexController;
