var messagesController = {
   messages: function (req, res) {
      sess = req.session;
      if(sess.email) {
        let Welcome = 'Welcome ' + email + ' to mychat';
      }
      else {
        Welcome = "";
      }
      res.render('messages/messages',
         {
            title: 'Messages',
            message: Welcome,
            layout: 'messages-layout',
            page: 'messages'
         });
      },
};

module.exports = messagesController;
