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

try {
    printOnTarget("alert", "sagar");
} catch (eroor) {
    console.log("The target alert is invalid as you are not using this code from a browser.");
}


