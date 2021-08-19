let readlineSync = require('readline-sync');
let texto = readlineSync.question("ingrese el texto: ");
let letras='abcdefghijklmnñopqrstuvwzxyz';
let todasLasLetras =letras.length;
let ocurrencias= new Array(todasLasLetras);
let cuantasLetras =0;
inicializar(ocurrencias);
cantidadTotalDeLetras=contarLetras(letras,texto,ocurrencias);



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
    return console.log('la letra',letras[indice],'aparece',ocurrencias[indice],'veces con una probabilidad de ',ocurrencias[indice]/cantidadTotalDeLetras);
}
