const http = require('http');
const url = require('url'); 
const qs = require('querystring');
const student = require('./students');
//const mongoClient = require('mongodb').MongoClient;

const server = http.createServer();

var port = 8080;

server.on('request', function(req, res) { 
    var method = req.method;
    var _url = req.url;

	console.log('Method:', method, '; URL:', _url); 


    var body = '';
    req.on('data', function (data) {
        
        body += data;
        console.log('data came'); 
        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6)
            req.connection.destroy();
    });

    req.on('end', function () {
        console.log('end data came'); 
        qs.parse(body);
        var s = new student.Student(body['Id'],body['FirstName'], body['LastName'], body['Gender'], body['Grade']);
        console.log(s.LastName);
    });


	
}); 


server.listen(port); 

server.on('listening', function() {
	console.log('Server running on port ' + port); 
}); 