var messagesController = {
   messages: function (req, res) {
     let Welcome;
      if(req.session.email) {
        Welcome = 'Welcome ' + req.session.email + ' to mychat';
        res.render('messages/messages',
           {
              title: 'Messages',
              message: Welcome,
              page: 'messages',
              Welcome: Welcome
           });
      }
      else {
        res.redirect('/');
      }
    },
};

module.exports = messagesController;
