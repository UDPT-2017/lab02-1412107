var pool = require('./db')

module.exports = {
  getNoneFriends: function(email, callback){
    pool.connect(function(err, client, done) {
  	  if(err) {
  	    return console.error('error fetching client from pool', err);
  	  }
  	  client.query("select email from users where email != $1 and email not in(select friend from friends where friends.email = $1);", [email]
      , function(err, result) {
  	    done(err);
  	    if(err) {
  	    	// res.end();
  	      return console.error('error running query', err);
  	    }
        callback(err, result);
  	  });
  	});
  },
  getFriends: function(email, callback){
    pool.connect(function(err, client, done) {
  	  if(err) {
  	    return console.error('error fetching client from pool', err);
  	  }
  	  client.query("select friend from friends where email = $1;", [email]
      , function(err, result) {
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
