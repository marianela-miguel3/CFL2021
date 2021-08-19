`let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(3, 1, 'May');
// replaces 1 element at index 4
console.log(months);`

let readlineSync=require("readline-sync");
let cantidadPalabras=readlineSync.question("ingrese cantidad de palabras: ");
let arregloPalabras=new Array(cantidadPalabras);
console.log(cargarArreglo(arregloPalabras,cantidadPalabras));
let palabraBuscada=readlineSync.question("ingrese la palabra buscada: ");
console.log(buscarPalabra(arregloPalabras,palabraBuscada));
let palabraAAgregar=readlineSync.question("ingrese la palabra que desea agregar: ");
console.log(agregarPalabra(palabraAAgregar));

function cargarArreglo(arregloPalabras,palabras) {
    for (let i=0; i<palabras; i++) {
        arregloPalabras[i]=readlineSync.question("ingrese palabra siguiente: ");
    }
    console.log(arregloPalabras);
}

function buscarPalabra(arregloPalabras,palabraBuscada) {
    for (let i=0; i<cantidadPalabras;i++) {
        if (palabraBuscada==arregloPalabras[i]) {
            console.log("la palabra buscada se encuentra en la posicion: " +(i+1) );
        }
    }
}

function agregarPalabra(palabra) {
    let numeroDePalabra=arregloPalabras.indexOf(palabra);
        if(numeroDePalabra!=-1) {
            arregloPalabras.splice(numeroDePalabra,1);
        }
        console.log(arregloPalabras);
}