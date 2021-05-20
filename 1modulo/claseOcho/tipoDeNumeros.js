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

for (indice=0; indice<n; indice++) {
     if (v[indice]==0) {
        ceros++;
    } else if (v[indice]<0) {
        negativos++;
    } else {
        positivos++;
    }
}
console.log("la cantidad de numeros positivos es: "+ positivos);
console.log("la cantidad de ceros es: "+ ceros);
console.log("la cantidad de numeros negativos es: "+ negativos);