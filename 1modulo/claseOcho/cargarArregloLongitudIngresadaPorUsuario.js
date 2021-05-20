let readlineSync=require("readline-sync");
let dimension=readlineSync.questionInt("Ingrese la longitud deseada de arreglo: ");
let num=new Array(dimension);
let indice=0;
for (indice=0; indice<dimension; indice++) {
       num[indice]=readlineSync.questionInt("ingrese un numero: ");
}
console.log(num);

