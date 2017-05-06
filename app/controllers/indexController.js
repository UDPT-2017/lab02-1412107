var indexController = {
   index: function (req, res) {
      res.render('index/index',
         {
            title: 'MyChat',
            message: 'Welcome to MyChat!',
            page: 'index'
         });
      }
};

module.exports = indexController;
