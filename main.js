var a=15;
function submit(){
   var  b=document.getElementById("numberinput").value;
   if(a>b){
    document.getElementById("status").textContent="guess higher"
   }
   if(a<b){
    document.getElementById("status").textContent="guess lower"
}
   
}