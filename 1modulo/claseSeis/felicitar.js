let readlineSync=require("readline-sync");
let nombreIngresado=readlineSync.question("Ingrese a quien felicitar: ");
felicitarGente(nombreIngresado);

function felicitarGente(nombre) {
    console.log("felicitaciones", nombre);
};