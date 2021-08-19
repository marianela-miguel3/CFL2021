"use script";
//function saludar() {
// console.log("Hola");
//}
let contador=0;
function clickear() {
    contador=contador+1; //o uso contador++
    console.log("Hiciste "+ contador + "clicks");//puedo reemplazar console.log por alert
}
//let str="agustin";
//let nombre= str.length;
//console.log(nombre);

//let largo="cadena";
//console.log(largo.length);

document.querySelector("h1").innerHTML="Nuevo";
//document.getElementById("principal").innerHTML="otra cosa";

//let contador=0;
//function clickear (){
//    contador++;
//document.getElementById("contadorClicks").innerHTML = ("Hiciste "+contador+" Clicks")
//}
////eso es lo que querias hacer vos maxi
//<p id=contadorClicks>No hiciste clicks</p>//
function ocultar() {
    document.getElementById("principal").className="hidden";
}

//if(nombre.length >5) {
 //   document.getElementById("alerta").className="alert";
//}

function actualizarSaludo() {
    let nodoInput=document.getElementById("txtNombre");
    let nombre=nodoInput.value;
    console.log("nombre");
    let nodoSaludo=document.getElementById("txtSaludo");
    nodoSaludo.innerHTML=" Hola " + nombre;
}
