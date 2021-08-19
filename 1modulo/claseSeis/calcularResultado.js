let readlineSync=require("readline-sync");
let resultado=calcularResultado(20,5,2);
console.log("el resultado es: ",resultado);


function calcularResultado(numero1,numero2,opcionMenu) {
    let resultado;
    if (opcionMenu==1) {
        resultado=numero1+numero2;
    }else if (opcionMenu==2) {
        resultado=numero1-numero2;
    }
     return resultado;
}