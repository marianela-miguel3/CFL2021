let readlineSync=require("readline-sync");
let primerNum=readlineSync.questionInt("ingrese el primer numero: ");
let segundoNum=readlineSync.questionInt("ingrese el segundo numero: ");
if (esMultiplo(primerNum,segundoNum)) {
    console.log(primerNum,"es multiplo de", segundoNum);
} else {
    console.log(primerNum,"no es multiplo de", segundoNum);
}




function esMultiplo(primerNum,segundoNum) {
    return (primerNum % segundoNum==0);
};