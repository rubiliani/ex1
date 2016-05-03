//get the model structure
var Student = require ('../models/student')

//method to get all students and return json array
module.exports.getAllStudents = function(req,res){
	Student.find({}, function(err,results){
		res.json(results);
	})
}


//method to get only grade by student id
module.exports.getStudentGradeById = function(req,res,next){
	var id = req.params.id;

	console.log(id);
	Student.find({id: id}, {_id:0,firstname:0,lastname:0,id:0,year:0}, function(err,results){
		res.json(results);
	})
}

//method to get all excellence students (grade greater then 89)
module.exports.getExcellenceStudents = function(req,res){
	Student.find({grade: { $gt: 89 } }, function(err,results){
		res.json(results);
	})
}

//method to get all excellence students in specific year (grade greater then 89)
module.exports.getExcellenceStudentsByYear = function(req,res){
	var year = req.params.year;
	
	Student.find({year : year, grade: { $gt: 89 } }, function(err,results){
		res.json(results);
	})
}



