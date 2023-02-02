

var btn= document.querySelector("button");
btn.onclick=()=>{
   window.print();
}
var icon =document.getElementById("theme button");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.containsI("dark-theme")){
        icon.src="sol.png";
    }
    
}
