var mongoose = require('mongoose');


var schema = new mongoose.Schema({ 
	firstname: 'string', 
	lastname: 'string',
	id:'string', 
	grade: 'number',
	year:'number'
 });
module.exports = mongoose.model('student',schema);