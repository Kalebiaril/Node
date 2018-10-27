const fs = require('fs');
function Log(line){
    fs.writeFile('./log.txt', line, (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;
    });
}
module.exports = Log;