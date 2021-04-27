let readlineSync = require ("readline-sync");
let primeraVuelta = readlineSync.questionInt("Ingrese el tiempo de la primera vuelta: ");
let segundaVuelta = readlineSync.questionInt("Ingrese el tiempo de la segunda vuelta: ");
let terceraVuelta = readlineSync.questionInt("Ingrese el tiempo de la tercera vuelta: ");
let cuartaVuelta = readlineSync.questionInt("Ingrese el tiempo de la cuarta vuelta: ");
let tiempoTotal = (primeraVuelta+segundaVuelta+terceraVuelta+cuartaVuelta);
console.log("el tiempo total es: " , tiempoTotal);
let tiempoPromedio = (tiempoTotal/4);
console.log("el tiempo promedio es: ", tiempoPromedio);