let readlineSync = require("readline-sync");
let usuario = readlineSync.question("Ingrese su nombre de Usuario: ");
let contraseña = readlineSync.question("Ingrese su contraseña: ");
if (usuario=="Juan" && contraseña=="claveJuan") {
    console.log("Acceso valido");
} else {
    console.log("Acceso denegado");
}
