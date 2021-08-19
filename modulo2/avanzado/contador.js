let contador=0;
let entrada=document.getElementById("entrada");
let incrementar=document.getElementById("botonIncrementar");
let decrementar=document.getElementById("botonDecrementar");
let mostrar=document.getElementById("contador");
entrada.addEventListener("change",contar);
incrementar.addEventListener("click",incremento);
decrementar.addEventListener("click",decremento);
function contar() {
    contador=entrada.value;
    mostrar.innerHTML=(contador);
}

function incremento() {
    contador++;
    mostrar.innerHTML=(contador);
}
function decremento() {
    contador--;
    mostrar.innerHTML=(contador);
}