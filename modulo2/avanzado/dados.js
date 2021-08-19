let dado1=new Array(10);
let dado2=new Array(10);
let suma;
let num=10;
let lanzarDados=document.getElementById("lanzarDados");
lanzarDados.addEventListener("click",sumarArreglos);
cargarArreglo(num,dado1);
cargarArreglo(num,dado2);
sumarArreglos(num);

function cargarArreglo(num,dado) {
    for(let indice=0;indice<num;indice++) {
        dado[indice]=aleatorio();
    }  
}

function aleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

function sumarArreglos(num) { debugger
let cantidadDeSietes=0;
let suma=0;
let indice=0;
    for(indice=0;indice<num;indice++) {
        suma=dado1[indice]+dado2[indice];
        if (suma==7) {
        cantidadDeSietes++;
        }
    }
    document.getElementById("siete").innerHTML=cantidadDeSietes;
}
