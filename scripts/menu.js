//menue on click open and close the menuebar
let mspan = document.getElementById("mspan")
let m1 = document.getElementById("m1")
function mspan1(){
    if(m1.innerHTML==""||m1.innerText==""){
        m1.innerHTML='<div class="divm11"><a href="https://itwurzel.de">Home</a></div><div class="divm12"><a href="https://itwurzel.de/pages/produkt.html">Produkte</a></div><div class="divm13"><a href="https://itwurzel.de/pages/dienstleistung.html">Diestleistungen</a></div><div class="divm13"><a href="https://itwurzel.de/pages/shop.html">Shop</a></div><div class="divm14"><a href="https://itwurzel.de/pages/about.html">About us</a></div>'
    }else{
        m1.innerHTML=null;
    }
}
mspan.addEventListener("click",mspan1)