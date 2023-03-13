var count = 0;
 var btn = document.getElementById("btn");
var disp = document.getElementById("display")
btn.onclick=function(){
    count++;
    disp.innerHTML=count;
}
let headingElm=document.querySelector("h1")
headingElm.textContent="Welcome to the best web page ever created."
headingElm.style.fontFamily="sans-serif"