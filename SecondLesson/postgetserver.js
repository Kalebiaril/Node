var http = require('http');

const server = http.createServer(function(req,res){
    console.log('request')
    if(req.method == 'GET'){
        res.end('GET request path: ' + req.url);      
    }
    else if(req.method == 'POST'){
        res.end('POST request path: ' + req.url);      
    }

}).listen(8080); 

