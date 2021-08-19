"use strict"
let enviar=document.getElementById("envio");

enviar.addEventListener("click",invertir);

function invertir() {
    let ingreso=document.getElementById("input").value; 
    console.log(ingreso);
    let cadena=ingreso.length;
    //let cadenaInvertida="";
    while (cadena>=0) {
        //cadenaInvertida=cadenaInvertida + 
        let cadenaInvertida=cadenaInvertida + ingreso.charAt(cadena);
        cadena--;
    }
    document.getElementById("etiqueta").innerHTML=cadenaInvertida;
}
