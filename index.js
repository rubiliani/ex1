
var express 			= require('express'),
	app 				= express(),
	bodyParser			= require('body-parser'),
	mongoose			= require('mongoose'),
	studentsController 	= require('./controllers/students-controller.js');
	var port = process.env.PORT || 1337;

	process.env.PWD = process.cwd();

//root access will return the index page
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');

});
 
//connection to mongodb
mongoose.connect('mongodb://admin:1234@ds023510.mlab.com:23510/ws-course');

app.use(bodyParser.json());

//open route that allows the client to get the css and js files
app.use('/css', express.static(process.env.PWD + '/client/css'));
app.use('/js', express.static(process.env.PWD + '/client/js'));


//REST API
app.get('/api/students', studentsController.getAllStudents);
app.get('/api/students/grade/:id', studentsController.getStudentGradeById);
app.get('/api/students/excellence/', studentsController.getExcellenceStudents);
app.get('/api/students/excellence/:year', studentsController.getExcellenceStudentsByYear);


//running our server
app.listen(port, function(){
	console.log('im listening');
})
