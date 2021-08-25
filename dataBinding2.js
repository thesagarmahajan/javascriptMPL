function getdata(){
    var http = new XMLHttpRequest();
    http.onload = function(){
        var res = JSON.parse(this.responseText);
        console.log(res.data);
        var dt = '';
        
        for(index in res.data){
            console.log(res.data[index].first_name);
            dt+= "<div class='card' style='width: 18rem;'>"
            +"<img class='card-img-top' style='height: 100px;width:100px;' src='"+res.data[index].avatar+"' alt='Card image cap'>"
            +"<div class='card-body'>"
            +"<h5 class='card-title'>"+res.data[index].first_name+"</h5>"
            +"<p class='card-text'>"+res.data[index].email+"</p>"
            +"</div>"
            +"</div>";
        }

        document.getElementById("users").innerHTML = dt;
        console.log(dt);

    }
    http.open("GET", "https://reqres.in/api/users");
    http.send();
}



