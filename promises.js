/* Synchronous and blocking code */
/* Output sequence will be */
/* 
    1. document.write syntax
    2. console.log whole array
    
*/

// const mypr = new Promise(function(resolve, reject){
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
  
//     resolve(primeNums);

// });

// mypr.then(function(res){
//     console.log(res);
// });


/* Synchronous and blocking code */
/* Output sequence will be */
/* 
    1. console.log whole array
    2. document.write syntax
*/

// var primeNums = [];

// for(i=1;i<=50000;i++){
//     count=0;
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count++;
//         }
//     }
//     if(count==2){
//         primeNums.push(i);
//     }
// }

// console.log(primeNums);

// document.write("Welcome to Prime Numbers Logic");


const fetchdata = new Promise((resolve, reject)=>{
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e)=>{
        resolve(xhr.responseText);
    });
    xhr.open("GET", "https://reqres.in/api/users");
    xhr.send();
});

fetchdata.then((res)=>{

    return JSON.parse(res);

}).then((res)=>{

    return res.data;

}).then((res)=>{

    var arr = res.filter((value, index)=>{
        if(value.id%2==0){
            // console.log(value);
            return value;
        }
    });

    return arr;

}).then((res)=>{

    console.log(res);
    
});





