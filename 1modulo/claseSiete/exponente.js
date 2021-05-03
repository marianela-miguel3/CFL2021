let readlineSync=require("readline-sync");
let base=readlineSync.questionInt("ingrese el numero base: ");
let exponente=readlineSync.questionInt("ingrese el exponente: ");
console.log("la potencia es = ", calcularExponente(base, exponente));



function calcularExponente(base, exponente) {
   let numero=1;
   if(exponente==0) {
       return 1;
   } else {
          for(let i=1; i<=exponente; i++) {
             console.log (numero=numero*base);
          };
          return numero;
   }
}
