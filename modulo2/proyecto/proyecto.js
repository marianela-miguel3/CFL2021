"use strict";
let ramalPrincipal=document.getElementById("ramalPrincipal");
ramalPrincipal.addEventListener("keypress",ramales);
let tipoCaño=document.getElementById("tipoCaño");
tipoCaño.addEventListener("keypress",tipoDeCaño);


function ramales() {
    let tramoPrincipal=document.getElementById("ramalPrincipal").value;
    document.getElementById("onInput").innerHTML=tramoPrincipal;
}
function tipoDeCaño() {
    let tipoDeCaño=document.getElementById("tipoCaño").value;
    document.getElementById("mostrarTipoCaño").innerHTML=tipoDeCaño;
}
