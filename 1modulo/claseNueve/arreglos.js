let readlineSync=require("readline-sync");
let cantidad=readlineSync.questionInt("ingrese la cantidad de numeros: ");
let array= new Array(n);
let i;
for (i=0; i<n; i++) {
    array[i]=readlineSync.questionInt("indique un valor para la posicion "+i+":");
}
for