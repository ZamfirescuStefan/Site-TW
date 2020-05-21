var num_clicks = 0;
function modificareContinut(){
    num_clicks++;
    if(num_clicks % 2 != 0){
        var x = document.createElement("p");
       x.innerHTML = "<br>Allview Soul X7 PRO a fost lansat astazi si este primul telefon din portofliul companiei prevazut cu un sistem quad-camera. Impreuna cu proceosorul Qualcomm Snapdragon, poate sustine linistit tehnologia din spatele acestor camere. Ecranul de 6.54″ cu tehnologie LTPS asigura un consum redus de energie, astfel telefonul ofera un echilibru bun intre performanta, calitate si durata de viata a bateriei. ";
        x.setAttribute('id', 'p_adaugat');
        document.getElementById("continut").appendChild(x);
        document.getElementById("citesteMM").innerHTML = "Ascunde paragraf";
    }
    else{
        var x =  document.getElementById("p_adaugat")
        x.parentNode.removeChild(x);
        document.getElementById("citesteMM").innerHTML = "Citeste mai mult";

    }
}