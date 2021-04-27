let readlineSync= require("readline-sync");
let numeroDados=readlineSync.questionInt("Ingrese la cantidad de dados: ");
let probabilidad = 6**numeroDados;
console.log("Las probabilidades de que salgan 6 son: 1/" + probabilidad);