let boton=document.getElementById("boton");
let arreglo=new Array(100);
boton.addEventListener("click",cargarArreglo);

function cargarArreglo(num) {
    for(let indice=0; indice<num;indice++) {
    
    }
    document.getElementById("mostrar").innerHTML=arreglo;
}