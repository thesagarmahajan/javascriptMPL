
var  promise = new Promise((resolve, reject)=>{
    
    setTimeout(function(){
        console.log("TIMEOUT COMPLETED");
        resolve();
    }, 3000);

    
});

console.log("START");
promise.then(()=>{
    console.log("SOME DEPENDENT CODE");
});
console.log("Continue");
console.log("END");

// const mypromise = new Promise((resolve, reject)=>{
//     resolve();
// });

// mypromise.then(()=>{
//     var primeNums = [];
//     for(i=1;i<=50000;i++){
//         count=0;
//         for(j=1;j<=i;j++){
//             if(i%j==0){
//                 count++;
//             }
//         }
//         if(count==2){
//             primeNums.push(i);
//         }
//     }

//     var selectBox = document.getElementById('selectBoxId');
//     var dt = '';
//     primeNums.forEach((value, index) => {
//         dt += "<option>"+value+"</option>"; 
//     });

//     selectBox.innerHTML=dt;
// });


// const examplePromise = new Promise((resolve, reject)=>{
//     var somevar = [
//         {}
//     ];

//     if(somevar.length>0){
//         resolve(somevar);
//     }

//     else{
//         reject();
//     }
    
// });

// examplePromise.then((res)=>{
//     console.log("DATA FOUND");
//     console.log(res);
// }).finally(()=>{
//     console.log("EXECUTED SUCCESSFULLY");
// });

// examplePromise.catch(()=>{
//     alert("NO Data found! Please try after some time.");
// });

// console.log("END");