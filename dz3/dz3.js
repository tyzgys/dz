document.addEventListener("DOMContentLoaded", function(){


let b1 = document.querySelectorAll(".b1");
let body = document.querySelectorAll(".body");


b1.forEach(function(body){
    
    body.addEventListener("click", function(){
        if(body.style.backgroundColor === "blue"){
            document.body.style.backgroundColor = "yellow";
            document.body.style.margin = '5vw';
            console.log("change color");
        }
        else{
            document.body.style.backgroundColor = "blue";
            document.body.style.margin = '3vw';
        }
    });
});

})