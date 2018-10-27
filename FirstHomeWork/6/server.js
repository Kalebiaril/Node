const http = require('http');
const url = require('url'); 
const db = require('./database');
const log = require('./logger');
var evt = require('events').EventEmitter;

var emt = new evt();

 emt.on('error', (err) => {
     log(err);
});

emt.on('info', (inf)=>{
    log(`INFO:${inf}`);
})

const server = http.createServer();
var port = 8080;

var cn = new db();

server.on('request', function(req, res) { 
    var method = req.method;
    var _url = url.parse(req.url, true).pathname;

    var jsonString  = '';
    req.on('error', function(err) {
        res.writeHead(500, "Internal server error");
        emt.emit('error', new Error('error'));
    });

    var query = url.parse(req.url, true).query;

    if(method == "GET"){
        if(query['id'] == undefined){
            emt.emit('info', "Getting a student by id")
            cn.getAll().exec(function(err, allStudents){                 
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    var results = '';
                    allStudents.forEach(function(student){             
                        results += `<p> Name: ${student.firstName} ${student.lastName} Gender: ${student.gender} Grade: ${student.grade}</p>`;
                    });
                    res.write(results);
                    res.end();
            });;
        }else{
            cn.find(query['id']).exec(function(err, student){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`<p> Name: ${student.firstName} ${student.lastName} Gender: ${student.gender} Grade: ${student.grade}</p>`);
                res.end();
            });
        }
     }
    if(method == "DELETE"){ 
        cn.delete(query['id']);
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write("The student was deleted");
        res.end();
    } 
    if(method == "POST"){       
        req.on('data', function(data) {
            jsonString  += data;                        
            var parsed =  JSON.parse(jsonString ); 
            cn.create(parsed['Id'],parsed['FirstName'], parsed['LastName'], parsed['Gender'], parsed['Grade']);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("The student was created");           
            res.end();             
        });
    }
}); 
server.listen(port); 
server.on('listening', function() {
	console.log('Server running on port ' + port); 
}); 