let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio del producto: ");
let porcentajeDescuento = readlineSync.questionInt ("Ingrese el porcentaje de descuento: ");
let precioFinal= precioProducto*(100-porcentajeDescuento)/100;
console.log("El precio con descuento es: ", precioFinal);