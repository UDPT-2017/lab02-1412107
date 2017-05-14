var indexController = {
   index: function (req, res) {
     sess = req.session;
     console.log(sess.email);
     if(sess.email) {
       return res.redirect('/messages');
     }
     else {
       res.render('index/index',
          {
             title: 'MyChat',
             message: 'Welcome to MyChat!',
             page: 'index'
          });
       }
     }
};

module.exports = indexController;
