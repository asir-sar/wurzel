//menue on click open and close the menuebar smart phone
let mbar = document.getElementById("mbar")
let mbtn = document.getElementById("mbtn");
let m1 = document.getElementById("m1")
let closeOpenSVG ={
    open:'<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L19 19;M5 5L19 5"/></path><path d="M12 12H12" opacity="0"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M12 12H12;M5 12H19"/><set attributeName="opacity" begin="0.2s" to="1"/></path><path d="M5 19L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L19 5;M5 19L19 19"/></path></g></svg>',
    close:'<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L19 5"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5;M5 5L19 19"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"/><set attributeName="opacity" begin="0.4s" to="0"/></path><path d="M5 19L19 19"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 19L19 19;M5 19L19 5"/></path></g></svg>'
}
function mspan1(){
if(m1.innerHTML==""||m1.innerText==""){
mbtn.innerHTML=closeOpenSVG.close;

m1.innerHTML='<div class="divm11"><a href="https://itwurzel.de">Home</a></div><div class="divm12"><a href="https://itwurzel.de/pages/produkt.html">Produkte</a></div><div class="divm13"><a href="https://itwurzel.de/pages/dienstleistung.html">Diestleistungen</a></div><div class="divm13"><a href="https://itwurzel.de/pages/shop.html">Shop</a></div><div class="divm14"><a href="https://itwurzel.de/pages/about.html">About us</a></div>'
}else{
m1.innerHTML=null;
mbtn.innerHTML=closeOpenSVG.open;
}
}
mbar.addEventListener("click",mspan1)