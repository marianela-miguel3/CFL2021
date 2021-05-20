let readlineSync=require("readline-sync");
let num= new Array(5);
for (i=0; i<5; i++) {
    num[i]=readlineSync.questionInt("Ingrese un numero para la posicion " + i +":");
}
console.log(num);