let readlineSync=require("readline-sync");
let numeroEntero=readlineSync.questionInt("Ingrese un numero entero: ");
console.log("la cantidad de divisores es:", cantidadDeDivisores(numeroEntero));




function cantidadDeDivisores(numeroEntero) {
    let i=1;
    let= cantidad=0;
    for (i=1; i<=numeroEntero; i++) {
        if ((numeroEntero%i)==0) {
          cantidad++
        }
    }
    return cantidad;
}