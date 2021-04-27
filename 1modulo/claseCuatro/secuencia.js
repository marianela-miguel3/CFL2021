let readlineSync = require ("readline-sync");
let numeroDeseado = readlineSync.questionInt("Escriba el numero que desea verificar si es mayor o no a 20: ");
if(numeroDeseado>20) {
    console.log("El numero es mayor a 20");
} else {
    console.log("El numero es menor o igual a 20");
}