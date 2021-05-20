let readlineSync=require("readline-sync");
let v1=new Array(6);
let v2=new Array(6);
let vSuma=new Array(6);
let indice;
for (indice=0; indice<6; indice++) {
    v1[indice]=readlineSync.questionInt("Ingrese el valor de v1[", [indice], "]:");
}
for (indice=0; indice<6; indice++) {
    v2[indice]=readlineSync.questionInt("Ingrese el valor de v2[", [indice], "]:");
}
for (indice=0; indice<6; indice++) {
    vSuma[indice]=v1[indice] + v2[indice];
    console.log("vSuma[", indice,"]=",vSuma[indice]);
}