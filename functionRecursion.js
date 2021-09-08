var count = 0;
function loop(){
    if(count>10){
        return
    }
    count++;
    console.log(count);
    loop();
}
loop();