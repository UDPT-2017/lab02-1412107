var messagesController = {
   messages: function (req, res) {
      res.render('messages/messages',
         {
            title: 'Messages',
            message: 'This is messages!',
            layout: 'messages-layout',
            page: 'messages'
         });
      },
};

module.exports = messagesController;
