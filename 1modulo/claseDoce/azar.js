let array=new Array(20);
for (indice=0;indice<array.length;indice++) {
    array[indice]=azar(20);
}



function azar(numero) {
    return Math.floor((Math.random() *numero)+1);
}