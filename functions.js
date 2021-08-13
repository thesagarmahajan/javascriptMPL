/* -----------Example-1----------- */
/* function addition(num1, num2){
    return num1+num2;
}

var ans = addition(12,45);

if(ans%2 == 0){
    document.write("Addition is a even number!");
}
else{
    document.write("Addition is a odd number!");
} */

/* -----------Example-2----------- */
/* function primeOrNot(no){

    var count = 0;
    for(i=1;i<=no;i++){
        if(no%i==0){
            count++;
        }
    }

    // if(count==2){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return count==2 ? true : false;

}

if(primeOrNot(5)){
    alert("You can use this number in encryption algorithm.");
}
else{
    alert("You cannot use this number in encryption algorithms.");
} */

/* -----------Example-3----------- */

function validateEmail(e, mycallback){
    if(e.length>10 && e.indexOf("@")>=0 && e.indexOf(".")>=0 && e.indexOf("@") < e.indexOf(".")){
      mycallback(true);  
    }
    else{
        mycallback(false);
    }
}

// validateEmail("s@g.c", function(res){

//     if(res){
//         alert("Email validated");
//     }
//     else{
//         alert("Invalid Email");
//     }

// });
                                // function(res){} 
validateEmail("sagar@gmail.com", (res) => {
    res ? alert("valid email"): alert("invalid email")
});


// if(emailValidator){
//     // do something
// }
// else{
//     // do something else
// }



