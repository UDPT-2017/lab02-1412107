var express = require('express');
var app = express();

// var sess;
// module.exports = sess;

require('./config')(app);

//start server
app.listen(process.env.PORT || 3000);
