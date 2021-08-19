let readlineSync=require("readline-sync");
let n= readlineSync.questionInt("ingrese la cantidad de elementos: ");
let v=new Array(n);
indice=0;
let positivos=0;
let negativos=0;
let ceros=0;
for (indice=0; indice<n; indice++) {
    v[indice]=readlineSync.questionInt("Ingrese v[" ,indice, "]");
}

