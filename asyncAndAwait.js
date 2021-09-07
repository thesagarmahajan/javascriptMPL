async function doSomething(){
    console.log("1");
    var result = await new Promise((resolve, reject)=>{
        console.log("2");
        resolve("SOMETHING");
        console.log("3");
    });
    console.log(result);
    console.log("4");
    var primeNums = [];
    for(i=1;i<=50000;i++){
        count=0;
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2){
            primeNums.push(i);
        }
    }

    var selectBox = document.getElementById('selectBoxId');
    var dt = '';
    primeNums.forEach((value, index) => {
        dt += "<option>"+value+"</option>"; 
    });

    selectBox.innerHTML=dt;

    return "DONE";
}

console.log("START");
doSomething().then((res)=>{
    console.log(res);
});
console.log("END");