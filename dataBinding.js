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

var avengersData = document.getElementById("avengersData");
var dt = '';
for(index in avengers){
    dt +=  "<tr>"+
            "<td>"+avengers[index].name+"</td>"+
            "<td>"+avengers[index].real_name+"</td>"+
            "<td>"+avengers[index].weapons+"</td>"+
        "</tr>";
}

setTimeout(function(){
    avengersData.innerHTML=dt;
}, 3000);

