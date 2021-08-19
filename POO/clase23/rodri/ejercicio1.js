"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var numero1 = readline.questionInt("Ingrese el primer numero: ");
var numero2 = readline.questionInt("Ingrese el segundo numero: ");
var numero3 = readline.questionInt("Ingrese el tercer numero: ");
if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1 + "es el numero mayor");
}
else {
    if (numero2 > numero1 && numero2 > numero3) {
        console.log(numero2 + "es el numero mayor");
    }
    else {
        if (numero3 > numero1 && numero3 > numero2) {
            console.log(numero3 + "es el numero mayor");
        }
        else {
        }
    }
}
