var express = require('express'); 
var app = express(); 

var port = 8080; 

var router = express.Router();

router.route("/")
            .get(function(req, res){     
                res.send("<h1>Hello from get</h1>");
            })
            .post(function(req, res){
                res.send("<h1>Hello from post</h1>");
            })
            .delete(function(req, res){     
                res.send("<h1>Hello from delete</h1>");
            })
            .put(function(req, res){
                res.send("<h1>Hello from put</h1>");
            });
app.use("/", router);
app.listen(port);

 