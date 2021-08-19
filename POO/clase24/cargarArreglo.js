"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var palabras = new Array();
leerPalabra();
mostrarPalabra();
function addPalabra(palabra) {
    palabras.push(palabra);
}
function delPalabra(palabra) {
    var posicion = findPalabra(palabra);
    if (posicion != -1) {
        palabras.splice(posicion, 1);
    }
}
//function cargarArreglo(palabras:string[],palabras:number):void {
//   for (let i:number=0; i<palabras; i++) {
//       arregloPalabras[i]=readline.question("ingrese palabra siguiente: ");
//  }
//  console.log(arregloPalabras);
//}
function leerPalabra() {
    //let palabra=RLS.question("ingrese una palabra: , enter para finalizar");
    while (palabra.trim() != " ")
        ;
    {
        palabras.push(palabra);
        palabra = RLS.question("ingrese una palabra: ");
    }
}
function updPalabra(palabraOriginal, palabraReemplazo) {
    var posicion = findPalabra(palabraOriginal);
    if (posicion != -1) {
        palabras[posicion] = palabraReemplazo;
    }
}
function findPalabra(palabra) {
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i] == palabra) {
            return i;
        }
    }
}
var opcion = RLS.question("indique una opcion (c,r,u,d) x para finalizar").toUpperCase();
var palabra;
while (opcion != "x") {
    switch (opcion) {
        case "c": {
            palabra = RLS.question("ingrese la palabra que desea agregar: ");
            addPalabra(palabra);
            break;
        }
        case "r": {
            palabra = RLS.question("ingrese la palabra que desea buscar: ");
            console.log("encontre la palabra en la posicion " + findPalabra(palabra));
            break;
        }
        case "u": {
            var palabra1 = RLS.question("ingrese la palabra que busca: ");
            var palabra2 = RLS.question("ingrese la palabra que la va a reemplazar: ");
            updPalabra(palabra1, palabra2);
            break;
        }
        case "d": {
            palabra = RLS.question("ingrese la palabra que desea eliminar: ");
            delPalabra(palabra);
            break;
        }
    }
}
mostrarPalabra();
//opcion=RLS.question("ingrese una opcion, x para finalizar: ").toUpperCase();
function mostrarPalabra() {
    console.log(palabras);
}
