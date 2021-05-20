/*Cargue  dos  arreglos  de  dimensión  N  números 
(la cantidad es ingresada por el usuario)
•Calcule el producto escalar entre los dos arreglos*/


let readlineSync=require("readline-sync");
let n=readlineSync.questionInt("ingrese la cantidad de elementos: ");
let v1=new Array(n);
let v2=new Array(n);
let producto=new Array(n);
let suma=0;
indice=1;
for (indice=0; indice<n; indice++) {
    v1[indice]=readlineSync.questionInt("Ingrese numero para el indice " + indice + " de v1: ");
}
for (indice=0; indice<n; indice++) {
    v2[indice]=readlineSync.questionInt("Ingrese numero para el indice " + indice + " de v2: ");
}
for (indice=0; indice<n; indice++) {
    console.log(producto[indice]=(v1[indice] * v2[indice]));
}
for (indice=0; indice<n; indice++) {
    suma+=producto[indice];
}
console.log("la suma de los productos es: " ,suma);