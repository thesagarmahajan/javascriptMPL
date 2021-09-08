function greet(message){
    return function(target, to){
        switch(target){
            case "file":
                var fs = require('fs');
                fs.writeFile("target.txt", message+" "+to, function(err){});
                break;

            case "alert":
                alert(message+" "+to);
                break;

            case "console":
                console.log(message+" "+to);
                break;
            
            default:
                console.log("Invalid Target");
                break;
        }
    }  
}

var printOnTarget = greet("Some message");

try{
    printOnTarget("console", "Indu");
}
catch(error){
    // console.log(error);
    // Some code to push the error message into a log file or
    // into a database with it's timestamp.
    console.log("Some error occure. Contact Developer.");
}
finally{
    console.log("END OF THE CODE!");
}


// try {
//     printOnTarget("alert", "sagar");
// } catch (eroor) {
//     console.log("The target alert is invalid as you are not using this code from a browser.");
// }


