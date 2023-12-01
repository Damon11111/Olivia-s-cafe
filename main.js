
var counter= 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000);

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("audio").play();
});

$(document).ready(function() {
    $("#audioplayer").get(0).play();
});


function myOnClick(){
    document.location.href="Olivia's album1.htm";
}

function homeclick(){
    document.location.href="Olivia.html";
}



