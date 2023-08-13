// toggle .de ,.com 
setInterval(function(){
    let t = document.getElementById("topdomain")
    let tx = t.innerHTML
    if(tx!=".de"){
        t.innerHTML=".de"
        console.log(tx+"#.de")
    }
    if(tx!=".com"){
        t.innerHTML=".com"
        console.log(tx+"#.com")
    }
},2000)