let readlineSync = require("readline-sync");
let numeroEntero =readlineSync.questionInt("Ingrese un numero entero: ");
while (numeroEntero<=0) {
    let numeroEntero=readlineSync.questionInt("ingrese un numero entero: ");
}
if (numeroEntero%2==0) {
    console.log("el numero ingresado es par");
} else {
    console.log("el numero ingresado es impar")
}