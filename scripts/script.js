let dienste = {
    arktr:{
        title:"Architektur",
        text:"HyperConvergent“, „OnPremises“ oder „Cloud“ sind nur einige wenige Buzzwords, die uns fast täglich begegnen. Um die richtige Mischung an Technik und am Ende die perfekte Planung der künftigen Zielarchitektur zu erreichen, erarbeiten wir ein umfangreiches Konzept inklusive einer Analyse der IST-Situation.Für die Planung und Umsetzung ist es uns dabei besonders wichtig, stets individuell auf die Wünsche und Bedürfnisse unserer Kunden einzugehen. Nur so kann die beste Lösung für das Unternehmen erreicht werden.",
        listungen:["Citrix Umgebungen","onPrem Szenarien (Private Cloud)","Public und Hybrid Cloud","Identityfederation"]
    },
    contsulting:{
        title:"Consulting",
        text:"Nach der Planungsphase folgt die gemeinsame Umsetzung der zuvor ausgearbeiteten Architektur. Wichtiger Bestandteil dieser Phase ist die professionelle Fehleranalyse und die Optimierung von Bestandsumgebungen für folgende Fachgebiete:",
        leistungen:["Citrix Virtual Apps and Desktops","Citrix Provisoning","Citrix Hypervisor","Citrix Content Collaboration","Citrix ADC","Citrix Profile Managment"],
        text1:"Die Basis einer schnellen und stabilen Citrix Umgebung stellt fast immer ein Microsoft Umfeld dar, weshalb wir auch Spezialisten in folgenden Fachgebieten in unseren Team haben:",
        leistungen1:["Active Directory","DHCP und DNS","MS Server-und Desktop OS", "Remote Desktop Services", "Print- und File Services"]
    },
    service:{
        title:"Managed Services",
        text:"Ihre IT soll einfach nur funktionieren, Sie haben jedoch nicht die nötige Zeit oder das nötige Personal, um sich um die Installation, die Updates oder die Fehlersuche zu kümmern? Kein Problem – Wir übernehmen für Sie die gesamte Managed Service Palette. Egal, ob es sich dabei nur um klassisches E-Mail Hosting oder einen komplett gemieteten Arbeitsplatz handelt.",
        leistungen:["Lösungen aus dem Enterprise Umfeld für KMU","Monatlich Kündbar","Ab einem User","Garantierte Einhaltung aller Vorschriften der DSGVO"]
    },  
    kritis:{
        title:"Kritische Infrastruktur",
        text:"Für Betreiber von kritischer Infrastruktur und alle, die kritische Daten verarbeiten, bieten wir eine vollumfängliche Betreuung an. In den letzten Jahren haben wir bereits viele Leitstellenbetreiber, Energieversorger und andere, die mit der Aufrechterhaltung wichtiger gesellschaftlicher Funktionen vertraut sind betreut. Dabei stand das Ziel der größtmöglichen Sicherheit bei einer maximalen Usability stets im Fokus unserer Umsetzung.",
        leistungen:["KRITIS Erfahrung","Alle Mitarbeiter mit ISO 27001 Personenzertifizierung","SO 9001 und 27001 zertifiziertes Rechenzentrum"]
    },
    hardsoft:{
        title:"Hard-/Software",
        text:"Wir bieten Ihnen eine große Auswahl an Hard- und Software. Auch in diesem Bereich beraten wir Sie jederzeit fachgerecht zu Ihren Vorstellungen. Je nach Wunsch und Bedarf stellen wir Ihnen anschließend Standardprogramme zusammen oder entwickeln dazu individuelle Lösungen.",
        leistungen:["Microsoft OPEN/Enterprise/SPLA Lizenzen","Citrix OnPremis/Cloud&Service Provider Lizenzen"]
    }

}
let a1 = document.getElementById("div221")
let a2 = document.getElementById("div222")

a1.innerHTML='<h3>'+dienste.arktr.title+'</h3><p>'+dienste.arktr.text+'</p>';
a2.innerHTML=sleistung(dienste.arktr.listungen);

function sleistung(x){
    let data = '<ul>'
    for(let i = 0;i < x.length; i++){
        data+='<li>'+x[i]+'</li>';
    }
    return (data+'</ul>')
}

function stext(x){
    switch (x) {
        case 1:
          a1.innerHTML='<h3>'+dienste.arktr.title+'</h3><p>'+dienste.arktr.text+'</p>';
          a2.innerHTML=sleistung(dienste.arktr.leistungen);
          break;
        case 2:
            a1.innerHTML='<h3>'+dienste.contsulting.title+'</h3><p>'+dienste.contsulting.text+'</p>';
            a2.innerHTML=sleistung(dienste.contsulting.leistungen);
          break;
        case 3:
            a1.innerHTML='<h3>'+dienste.service.title+'</h3><p>'+dienste.service.text+'</p>';
            a2.innerHTML=sleistung(dienste.service.leistungen);
          break;
        case 4:
            a1.innerHTML='<h3>'+dienste.kritis.title+'</h3><p>'+dienste.kritis.text+'</p>';
            a2.innerHTML=sleistung(dienste.kritis.leistungen);
          break;
        case 5:
            a1.innerHTML='<h3>'+dienste.hardsoft.title+'</h3><p>'+dienste.hardsoft.text+'</p>';
            a2.innerHTML=sleistung(dienste.hardsoft.leistungen);
      }
}

//menue on click open and close the menuebar
let mspan = document.getElementById("mspan")
let m1 = document.getElementById("m1")
function mspan1(){
    if(m1.innerHTML==""||m1.innerText==""){
        m1.innerHTML='<div class="divm11"><a href="./index.html">Home</a></div><div class="divm12"><a href="./pages/produkt.html">Produkte</a></div><div class="divm13"><a href="./pages/dienstleistung.html">Diestleistungen</a></div><div class="divm13"><a href="./pages/shop.html">Shop</a></div><div class="divm14"><a href="./pages/about.html">About us</a></div>'
    }else{
        m1.innerHTML=null;
    }
}
mspan.addEventListener("click",mspan1)

    

