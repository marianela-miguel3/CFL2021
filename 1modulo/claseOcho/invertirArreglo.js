let readlineSync=require("readline-sync");
let n=readlineSync.questionInt("Ingrese la cantidad de elementos: ");
let numeros=new Array(n);
for (indice=0; indice<n; indice++) {
       numeros[indice]=readlineSync.questionInt("ingrese un numero: ");
}
for (indice=n-1; indice>=0; indice--) {
       console.log(numeros[indice]);
}
