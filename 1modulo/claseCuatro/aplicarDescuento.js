let readlineSync = require("readline-sync");
let monto = readlineSync.questionFloat("Ingresar monto: ");
let cantidad = readlineSync.questionFloat("Ingresar cantidad: ");
let precioTotal = monto * cantidad;
if (precioTotal>= 1000) {
    let descuento = (precioTotal * 10/100);
    let montoConDescuento = precioTotal - descuento;
    console.log("Por gastar mas de 1000 pesos tiene un 10% de descuento: ");
    console.log("El monto a pagar es: " + montoConDescuento);
} else {
    console.log("No tiene descuento. El monto a pagar es: "+ precioTotal);
}