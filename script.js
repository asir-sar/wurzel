// toggle .de ,.com 
let cnt =1
setInterval(function(){
    let t = document.getElementById("logo")
    let src = t.src
    cnt++
    if(cnt>2)cnt=1
        t.src="./itw"+cnt+".png"
},2000)