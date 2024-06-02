//menue on click open and close the menuebar smart phone
let mbar = document.getElementById("mbar")
let rows = document.getElementsByClassName("mrows")
let m1 = document.getElementById("m1")

function mspan1(){
if(m1.innerHTML==""||m1.innerText==""){
rows[0].style.visibility = "hidden";
rows[2].style.visibility = "hidden"; 
m1.innerHTML='<div class="divm11"><a href="https://itwurzel.de">Home</a></div><div class="divm12"><a href="https://itwurzel.de/pages/produkt.html">Produkte</a></div><div class="divm13"><a href="https://itwurzel.de/pages/dienstleistung.html">Diestleistungen</a></div><div class="divm13"><a href="https://itwurzel.de/pages/shop.html">Shop</a></div><div class="divm14"><a href="https://itwurzel.de/pages/about.html">About us</a></div>'
}else{
m1.innerHTML=null;
rows[0].style.visibility = "visible";
rows[2].style.visibility = "visible"; 
}
}
mbar.addEventListener("click",mspan1)