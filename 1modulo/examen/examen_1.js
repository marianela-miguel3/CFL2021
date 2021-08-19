let readlineSync=require("readline-sync");
let texto=readlineSync.question("ingrese el texto: ");
let letras="abcdefghijklmnopqrstuvwxyz";
let todasLasLetras=cadenaTexto.length;
let ocurrencias=new Array(todasLasLetras);
let cuantasLetras=0;
inicializar(ocurrencias);
cuantasLetras=contarLetras(letras, texto, ocurrencias);
listado(letras,ocurrencias,cuantasLetras);

function inicializar(ocurrencias) {
    let indice;
    for(indice=0; indice<ocurrencias.length; indice++) {
        ocurrencias[indice]=0;
    }
}

function cuantasVecesEsta(texto,largo,letra) {
    let ocurrencia=0;
    for(let i=0; i<largo; i++) {
         if (texto[i]==letra) {
         ocurrencia++
        }
    }
    return ocurrencia;
}

function contarLetras(letras,texto,ocurrencias) {
    let indice;
    let textoLocal=texto.toLowerCase();
    let cantidadTotalLetras=0;
     for (indice=0; indice<letras.length; indice++);
     ocurrencias[indice]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[indice]);
     cantidadTotalLetras+=ocurrencias[indice];
    }
    return cantidadTotalLetras;
}

function listado(letras,ocurrencias,totalLetras) {
    let indice; 
    console.log("en el texto ingresado hay", totalLetras);
     for (indice=0; indice<letras.length; indice++) {
         if(ocurrencias[indice]!=0) {
             console.log("la letra", letras[indice], "aparece", ocurrencias[indice], "con una probabilidad de", ocurrencias[indice]/totalLetras);
        }
    }
}