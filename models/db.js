// module.exports = {
//   'url' : 'mongodb://admin:123456@ds051903.mlab.com:51903/heroku_554zpg9r',
//    'url_test' : 'mongodb://localhost/passport'
// }
var mongoose = require('mongoose');
const  url = 'mongodb://admin:123456@ds051903.mlab.com:51903/heroku_554zpg9r';
//    'url_test' : 'mongodb://localhost/passport'
// }
mongoose.connect(url, function(err) {
    if (err){
		throw err;
    } 
    else{
    	console.log('Se conectó a la BD');
    }
});