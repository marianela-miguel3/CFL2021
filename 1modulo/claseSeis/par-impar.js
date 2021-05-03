/*estructura de control parImpar:
Realizar  un  algoritmo  que  dado  un número  entero 
ingresado  por  el usuario, visualice en pantalla si es par o impar
•En  el  caso  de  ingresar  un  cero,  se debe  volver  a  pedir  el  número  por teclado  
(hasta  que  se  ingrese  un número mayor que cero)*/



let readlineSync=require("readline-sync");
let numeroEntero=readlineSync.questionInt("Ingrese un numero entero: ");
if (numeroEntero>0) {
    parImpar;
} else {
     while (numeroEntero<=0) {
        console.log("Ingrese un numero entero distinto a 0: ");
    }
}


function parImpar {
    if (numeroEntero%2==0) {
        console.log("El numero ingresado es par");
     } else {
        console.log("El numero ingresado es impar");
    }
}