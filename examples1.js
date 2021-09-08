// Promises - callbacks & Async - await examples

console.log("START");

// var  promise = new Promise((resolve, reject)=>{
//     console.log("FETCHING DATA FROM SERVER");
//     resolve();
// });

// promise.then(()=>{
//     console.log("WRITE DATA INTO LOCAL FILES");
// });


async function somefun(){
    try{
        await new Promise((resolve, reject)=>{
            console.log("FETCHING DATA FROM SERVER");
            resolve();
        });
        
        console.log("AFTER FETCHING DATA FROM SERVER");

        await new Promise((resolve, reject)=>{
            console.lo("READ FILES FROM LOCAL COMP");
            resolve();
        });

        console.log("AFTER READing  FILES FROM LOCAL COMP");
    }
    catch(err){
        console.log(err);
    }
}

somefun();

console.log("END");

