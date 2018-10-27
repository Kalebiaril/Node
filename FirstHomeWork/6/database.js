const mongoose = require('mongoose');
const logger = require('./logger');
function DBConnect(){
    mongoose.connect('mongodb://localhost/mongoose_basics', {useNewUrlParser: true}, function (err) {        
        if (err) throw err;
        console.log('Successfully connected');
    });

    var studentSchema = mongoose.Schema({
        id: Number,
        firstName: String,
        lastName: String,
        gender: String,
        grade: Number
    });
    var Student = mongoose.model('Student', studentSchema);

    this.getAll = () => {
       
       var query = Student.find({},  function(err, students) {           
            if(err){
                log(err);
                 return console.log(err);  
            }
        });
        return query;
        
    }

    this.create =  (id, firstName, lastName, gender ,grade) =>{        
        Student.create({id, firstName, lastName, gender ,grade},function(err, doc){                       
            if(err) return console.log(err);
            console.log("Student created");     
        }); 
    }
    this.delete = (id) => {       
        Student.deleteOne({id:id}, function(err, result){
           
            if(err) return console.log(err);         
            console.log(result);
        });
    }
    
    this.find = (id) => {
        Student.findOne({id:id}, function(err, result){
              
            if(err) return console.log(err);         
            console.log(result);
        });
    }   
}

if(module.parent){
    module.exports = DBConnect;
}

