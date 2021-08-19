let readlineSync=require("readline-sync");
let acumuladorDeNotas=0;
for(let i=0; i<10; i++) {  
    console.log("contador vale", i);
    acumuladorDeNotas += readlineSync.questionInt("Ingrese nota: ");
    console.log("acumulador vale", acumuladorDeNotas);
}
console.log("el promedio de las notas es: ", acumuladorDeNotas/10);