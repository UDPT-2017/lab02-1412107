var usersController = {
   index: function (req, res) {
      res.render('users/users',
         {
            title: 'users',
            message: 'This is users!',
            layout: 'users-layout',
            page: 'users'
         });
   }
};

module.exports = usersController;
