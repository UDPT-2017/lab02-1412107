var pool = require('./db')

module.exports = {

  checkExistEmail: function(email, callback){
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

  insertData: function(email, password, name, telephone, callback){
    pool.connect(function(err, client, done) {
  	  if(err) {
  	    return console.error('error fetching client from pool', err);
  	  }
  	  client.query("INSERT into users(email, password, name, telephone) values($1, $2, $3, $4)", [email, password, name, telephone], function(err, result) {
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
