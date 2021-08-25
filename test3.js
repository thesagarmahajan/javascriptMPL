// var count = 1;
// function dosomething(){
//     if(count<=3){
//         console.log(count);
//         count++;
//         setTimeout(dosomething, 1000);
//     }
//     else{
//         clearTimeout(dosomething);
//     }
// }

// dosomething();

for (var i = 0; i <= 10; i++){
    print(i);
}

function print(i) {
    setTimeout(function(){
        console.log(i)
    },i*2000);
    console.log("EOF");
}
