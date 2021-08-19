 function cargarArreglo(v,n) {
     let indice;
     let num = " ";
     for (indice = 0; indice < n; indice++) {
         v[indice] = readlineSync.questionInt("Ingrese facturacion: ")
         num = num + " " + v[indice];
     } console.log(num);
 }