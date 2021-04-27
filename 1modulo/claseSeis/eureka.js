let readlineSync=require("readline-sync");
let cantidadIntentos= 1;
let clave="eureka";
let contraseña = readlineSync.question("Ingrese su contraseña: ");
while ((cantidadIntentos<3) && (contraseña!=clave)) {
    cantidadIntentos++;
    contraseña = readlineSync.question("Ingrese su contraseña: ");
}
if (contraseña==clave) {
    console.log("Usted ha ingresado con éxito");
} else {
    console.log("Usted agoto las oportunidades");
}