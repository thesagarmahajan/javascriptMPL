let c = 0;
let wc = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
let xcp = [];
let ocp = [];
function clck(bid, n){
    
    c++;
    let cbtn = document.getElementById(bid);
    if(c%2==0){
        sign="X";
        xcp.push(n);
    }
    else{
        sign="O";
        ocp.push(n);
    }
    cbtn.innerHTML=sign;
    cbtn.value=sign;
    console.log(xcp, ocp);
  
    wc.forEach((v, k)=>{
        xcount=0;
        ocount=0;
        for (let i = 0; i < v.length; i++) {
            for (let j = 0; j < xcp.length; j++) {
                if(v[i]==xcp[j]){
                    xcount++;
                }
            }
            for (let j = 0; j < ocp.length; j++) {
                if(v[i]==ocp[j]){
                    ocount++;
                }
            }
        }
        if(xcount==3){
            console.log("XWIN");
        }
        else if(ocount==3){
            console.log("OWIN");
        }
    });
}

// a = [1,4,7,2,3]
// b = [1,2,3]

// count=0;
// for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//         if(b[i]==a[j]){
//             count++;
//         }
//     }
// }
// console.log(count);