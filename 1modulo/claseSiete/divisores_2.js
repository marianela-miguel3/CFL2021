let readlineSync=require("readline-sync");
let numeroEntero=readlineSync.questionInt("Ingrese un numero entero: ");
console.log("La cantidad de divisores es", divisores(numeroEntero));



function divisores(numeroEntero) {
     let cantidad=0;
     let i;
     for (i=0; i<=numeroEntero; i++) {
         if (esMultiplo(numeroEntero,i)) {
           cantidad ++;
      }
    }
    return cantidad;
};

function esMultiplo(numeroEntero,i) {
    return (numeroEntero % i==0);
};

