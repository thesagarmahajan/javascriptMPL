
// var alphabets = ['a', 'z', 'p', 'b'];



// for(i=0;i<arrOfNums.length;i++){
//     if(i%2==0){
//         console.log(arrOfNums[i]);
//     }
// }

// console.log(arrOfNums.reverse());
// console.log(arrOfNums.sort());
// console.log(avengersnames.indexOf("Star lord"));



var avengersnames = [
    "Ironman",
    "Captain America",
    "Thor",
    "Hulk",
    "HawkEye",
    "Black Widow"
];


// var arrOfNums = [12,34,546,87,23,76,98,123];
// arrOfNums.forEach(function(value, index){
//     if(value%2==0){
//         console.log(value);
//     }
// });


var ironman = {
    "name":"Ironman",
    "real_name":"Tony Stark",
    "partner":"Pepper Potts",
    "weapons":["Billionair", "Ph", "Playboy", "Genius"],
    "villans":{
        "ironman1":{
            "name":"Kill Monger",
            "weapon":"Modified MK1"
        },
        "ironman2":{
            "name":"Justin Hammer",
            "weapon":"Anton Vanco"
        },
        "ironman3":{
            "name":"Killian",
            "weapon":["Mandarine", "Extramise"]
        }
    },
    "no_of_suits":89,
    "married":false
};

// for(key in ironman){
//     if(key=="villans"){
//         for(key2 in ironman[key]){
//             console.log(ironman[key][key2]);
//         }
//     }
// }


// for(key in ironman['villans']){
//     console.log(ironman['villans'][key]);
// }

var avengers = [
    {
        "name":"Ironman",
        "real_name":"Tony Stark",
        "weapons":["mk1", "mk2", "mk3"]
    },
    {
        "name":"Captain America",
        "real_name":"Steve Rogers",
        "weapons":"Shield"
    },
    {
        "name":"Thor",
        "real_name":"Thor Odinson",
        "weapons":"Hammer"
    }
];

avengers.forEach(function(value,key){
    for(key2 in value){
        console.log(value[key2]);
    }
});





