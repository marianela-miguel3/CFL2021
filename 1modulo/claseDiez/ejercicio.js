let readlineSync=require("readline-sync");
let cantidadNiños=readlineSync.questionInt("Ingrese la cantidad de niños del equipo de futbol: ");
let equipoFutbol=new Array(cantidadNiños);
cargarArreglo(equipoFutbol,cantidadNiños);
mostrarArreglo(equipoFutbol,cantidadNiños);
promedio= obtenerPromedio(equipoFutbol,cantidadNiños);
console.log("el promedio de las edades es: ", promedio);



function cargarArreglo(equipoFutbol,cantidadNiños) {
      let indice;
      for (indice=0; indice<cantidadNiños; indice++) {
          equipoFutbol[indice]=aleatorio(3,8);
     }
}


function aleatorio(menorValor,mayorValor) {
        return Math.floor(Math.random() * (mayorValor-menorValor)) +menorValor;
}

function mostrarArreglo(equipoFutbol,cantidadNiños) {
      let indice;
      for (indice=0; indice<cantidadNiños; indice++) {
          console.log(" ", equipoFutbol[indice]);
     }
     console.log("/n");
}

function obtenerPromedio(equipoFutbol,cantidadNiños) {
     let promedio=0;
     let suma=0;
     let indice;
     for (indice=0; indice<cantidadNiños; indice++) {
          suma=suma+equipoFutbol[indice];
     }
     promedio=suma/cantidadNiños;
     return promedio;
}
