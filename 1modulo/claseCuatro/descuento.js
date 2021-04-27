let readlineSync = require("readline-sync");
let cantidad =readlineSync.questionInt("Ingrese la cantidad: ");
let precioUnitario =readlineSync.questionInt("Ingrese el precio unitario: ");
let mesCompra = readlineSync.question("Ingrese el mes en el que realizo su compra: ");
let precioTotal = precioUnitario*cantidad;
let descuento = (precioTotal*85)/100;
if (mesCompra=="octubre") {
    console.log("Usted tiene un descuento del 15% en su compra del mes de Octubre");
    console.log("El total con descuento es: " + descuento);
} else {
    console.log("El total es: " + precioTotal);
}