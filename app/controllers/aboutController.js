var aboutController = {
   about: function (req, res) {
      res.render('about/about',
      {
        title: 'About',
        message: 'This is about!'
      });
   }
};

module.exports = aboutController;
