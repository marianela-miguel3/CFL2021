let readlineSync = require("readline-sync");
let alturaPersona = readlineSync.questionFloat("Ingrese su altura: ");
if (alturaPersona>=1.30) {
    console.log("Usted puede ingresar a la Montaña Rusa");
} else {
    console.log("Debido a su altura usted no puede ingresar a la Montaña Rusa");
}