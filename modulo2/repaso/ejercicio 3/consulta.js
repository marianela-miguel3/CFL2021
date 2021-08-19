"use strict"
let boton=document.getElementById("boton");
boton.addEventListener("click",estiloAleatorio);

// function estiloAleatorio() {
//     let intervalo=setInterval(function() {
//     let contador=0;
//     if (contador<=20) {
//     contador++;
//     let div=document.getElementById("miDiv");
//     div.style.backgroundColor=`rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;
//     div.style.fontSize=`${aleatorio(30,200)}px`;
//     div.style.marginLeft=`${aleatorio(0,100)}px`;
//     console.log(contador);
//     }else{
//     clearInterval(intervalo);
//     }
//     },1000); 
// }


// function aleatorio(menorValor,mayorValor) {
//     return Math.floor(Math.random()*((mayorValor+1)-menorValor)+menorValor);
// }

