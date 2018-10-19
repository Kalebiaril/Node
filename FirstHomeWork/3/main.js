var calculator = require('./module');

function Process(arguments){

    let x = Number(arguments[2]);
    let action = arguments[3];
    let y = Number(arguments[4]);
    let result = undefined;
    switch (action){
        case "+":{
            result= calculator.add(x,y);
            break;
        }
        case "-":{
            result= calculator.substract(x,y);
            break;
        }
        case "*":{
            result= calculator.multiply(x,y);
            break;
        }
        case "/":{
            result= calculator.divide(x,y);
            break;
        }
        default:
        {
            console.log("Not possible to calculate");
        }
    }
    console.log(result);
}

Process(process.argv);