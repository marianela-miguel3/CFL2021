let readlineSync=require("readline-sync");
let primerNum=readlineSync.questionInt("Ingrese el primer numero: ");
let segundoNum=readlineSync.questionInt("Ingrese el segundo numero: ");
esMultiplo(primerNum,segundoNum);




function esMultiplo(primerNum,segundoNum) {
    if (primerNum % segundoNum ==0) {
        console.log("true");
    } else {
        console.log("false");
    }
}