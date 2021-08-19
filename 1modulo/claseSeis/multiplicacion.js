let readlineSync=require("readline-sync");
let numeroIngresado=readlineSync.questionInt("Ingrese un numero: ");
let limiteTabla=readlineSync.questionInt("Ingrese hasta que numero quiere que se multiplique el numero ingresado: ");
let contador, resultado;
for (contador=1; contador<=limiteTabla; contador++) {
    resultado=numeroIngresado*contador;
    console.log(numeroIngresado, "x", contador, "=", resultado);
}