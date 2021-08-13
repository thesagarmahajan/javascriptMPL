console.log("Printing in the console!");

var firstTb = document.getElementById("tb1");
var secondTb = document.getElementById("tb2");
var ansDiplayer = document.getElementById("ansContainer");


function add(){
    var ans = parseInt(firstTb.value)+parseInt(secondTb.value);
    ansDiplayer.innerHTML = "<h1>"+ans+"</h1>";
}

function sub(){
    console.lqog("This is subtraction function");
}

function multi(){
    console.log("This is multiplication function");
}

function divi(){
    console.log("This is division function");
}