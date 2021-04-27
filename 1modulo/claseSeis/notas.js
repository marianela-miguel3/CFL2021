let readlineSync = require("readline-sync");
let nota, suma, promedio, contador;
contador =1;
suma =0;
while (contador<=10) {
    nota = readlineSync.questionInt("Ingresar una nota: ");
    suma = suma + nota;
    contador = contador + 1;
}
promedio = suma/10;
console.log("El promedio de las notas es: " + promedio);