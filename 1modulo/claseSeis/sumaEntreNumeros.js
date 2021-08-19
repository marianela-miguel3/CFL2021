let readlineSync=require("readline-sync");
let primerNumero= readlineSync.questionInt("Ingrese el primer numero: ");
let segundoNumero=readlineSync.questionInt("Ingrese el segundo numero: ");
let actual=primerNumero;
let suma=0;
while (actual<=segundoNumero) {
    suma= suma + actual;
    actual ++;
}
console.log("El resultado de la suma es: "+ suma);
