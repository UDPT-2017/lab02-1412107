var pool = require('./db')

module.exports = {
  checkEmail: function(email, callback){
    pool.connect(function(err, client, done) {
  	  if(err) {
  	    return console.error('error fetching client from pool', err);
  	  }
  	  client.query("SELECT * from users where email = $1", [email], function(err, result) {
  	    done(err);
  	    if(err) {
  	    	// res.end();
  	      return console.error('error running query', err);
  	    }
        callback(err, result);
  	  });
  	});
  },
  checkEmailPassword: function(email, password, callback){
    pool.connect(function(err, client, done) {
  	  if(err) {
  	    return console.error('error fetching client from pool', err);
  	  }
  	  client.query("SELECT * from users where email = $1 and password = $2", [email, password], function(err, result) {
  	    done(err);
  	    if(err) {
  	    	// res.end();
  	      return console.error('error running query', err);
  	    }
        callback(err, result);
  	  });
  	});
  }
}
