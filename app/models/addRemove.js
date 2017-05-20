var pool = require('./db')

module.exports = {
  addRemove: function(friend, email, callback){
    pool.connect(function(err, client, done) {
  	  if(err) {
  	    return console.error('error fetching client from pool', err);
  	  }
  	  client.query("UPDATE friends set friend = $1 where email = $2", [friend, email], function(err, result) {
  	    done(err);
  	    if(err) {
  	    	// res.end();
  	      return console.error('error running query', err);
  	    }
        callback(err, result);
  	  });
  	});
  },
}
