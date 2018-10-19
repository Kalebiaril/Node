var fs = require('fs');

function CreateFolderTree(path){
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
  
    
    for (let i = 1; i <= 50; i++) {
       var dir = `${path}/${i}`;        
        if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
        }
        
        fs.appendFile(`${dir}/file.txt`, `Файл из каталога ${i}`, function (err) {
                if (err) throw err;               
              });        
    }

    fs.readdirSync(path).forEach(folder => {
        if(fs.lstatSync(`${path}/${folder}`).isDirectory()){
            console.log(fs.readFileSync(`${path}/${folder}/file.txt`, "utf8"));
        }
      })

}
CreateFolderTree(process.argv[2]);