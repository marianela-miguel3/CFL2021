let readlineSync = require('readline-sync');
let texto = readlineSync.question("ingrese el texto: ");
let letras='abcdefghijklmnñopqrstuvwzxyz';
let todasLasLetras =letras.length;
let ocurrencias= new Array(todasLasLetras);
let cuantasLetras =0;
inicializar(ocurrencias);
cantidadTotalDeLetras=contarLetras(letras,texto,ocurrencias);
listado(letras,ocurrencias,cantidadTotalDeLetras);


function inicializar(ocurrencias){
    let indice;
    for (indice = 0; indice < ocurrencias.length; indice++) {
        ocurrencias[indice]=0;
    }
}
function cuantasVecesEsta(texto,largo,letra){
    let ocurrencia=0;
    let i;
    for(i=0; i<largo; i++){
        if(texto[i]==letra){
            ocurrencia++
        }
    }
    return ocurrencia;
}


function contarLetras(letras,texto,ocurrencias) {
    // esta funcion cuenta las ocurrencias de cada letra del arreglo letras en el texto
    let indice;
    let textoLocal=texto.toLowerCase();
    let cantidadTotalDeLetras=0;
    for(indice = 0; indice < letras.length; indice++) {
        ocurrencias[indice]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[indice]);
        cantidadTotalDeLetras+=ocurrencias[indice];
    }
    return cantidadTotalDeLetras;
}
function listado(letras,ocurrencia,totalLetras) {
    let indice;
    for(indice =0; indice < letras.length; indice++){
        if (ocurrencia[indice] !=0){
            console.log('la letra',letras[indice],'aparece',ocurrencias[indice],'veces con una probabilidad de ',ocurrencias[indice]/totalLetras);
        }
    }
}
