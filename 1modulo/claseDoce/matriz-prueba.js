// genero un arreglo "matriz" que formara las columnas de la matriz
let f=3;
let c=4;
let indice;
// genero un arreglo "matriz[indice]" que formará las filas de la matriz, por cada elemento del arreglo de columnas
let matriz = new Array(f);
for (indice=0; indice<f; indice++) {
    matriz[indice] = new Array(c);
}
cargar(matriz,f,c,100);



//ordenar las filas de una matriz n*m en orden descendente segun la suma de todos sus elementos, es decir, columnas.
//la comparacion se hace entre filas
//el intercambia tiene que mover filas enteras



function azar(numero) {
    return Math.floor((Math.random() * numero)+1);
}

function cargar(matriz,f,c,numAzar) {
    let fil, col;
    for(fil=0;fil<f;fil++) {
       for(col=0;col<c;col++) {
           matriz[fil][col]=azar(numAzar);
       }
    }
    
}

function calcularSumaFila(matriz, f, c) {

    let suma = 0; // variable para sumar los elementos de las columnas
    let col; //indice para recorrer las columnas
    for (col=0;col<c;col++) {
        suma = suma + matriz[f][col]  // acumulo en suma las columnas por el indice "col"
    }
    return suma; // devuelvo la suma de los elementos de la fila
}