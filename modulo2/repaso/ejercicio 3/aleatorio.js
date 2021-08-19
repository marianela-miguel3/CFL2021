let boton=document.getElementById("boton");
boton.addEventListener("click",estiloAleatorio);
let div=document.getElementById("miDiv");


function estiloAleatorio() {
    div.style.backgroundColor=`rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;
    div.style.fontSize=`${aleatorio(30,200)}px`;
    div.style.marginLeft=`${aleatorio(0,100)}px`;
}



function aleatorio(menorValor,mayorValor) {
    return Math.floor(Math.random()*((mayorValor+1)-menorValor)+menorValor);
}
