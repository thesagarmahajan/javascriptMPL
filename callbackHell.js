const http = require('http');
const fs = require('fs');

var pr = new Promise((resolve, reject)=>{
    http.get("http://google.co.in", function(res){
        var body = '';
        res.on('data', function(chunk){
            body+=chunk;
        });

        res.on('end', function(){
            resolve(body);
        });
    });
});

pr.then((data)=>{
    fs.writeFile("writable.txt", data, function(err){
        if (err){

        }
        else{
            console.log("Data Written into the file successfully");
        }
    });
});
