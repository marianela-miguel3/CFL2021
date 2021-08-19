"use strict"
let boton=document.getElementById("boton");
boton.addEventListener("click",estiloAleatorio);

function estiloAleatorio() {
    let contador=0;
    let intervalo=setInterval(function() {
    if (contador===20) {
        clearInterval(intervalo);
    }else{
    contador++;
    let div=document.getElementById("miDiv");
    div.style.backgroundColor=`rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;
    div.style.fontSize=`${aleatorio(30,200)}px`;
    div.style.marginLeft=`${aleatorio(0,100)}px`;
    }
    console.log(contador);
    },1000); 
}


function aleatorio(menorValor,mayorValor) {
    return Math.floor(Math.random()*((mayorValor+1)-menorValor)+menorValor);
}