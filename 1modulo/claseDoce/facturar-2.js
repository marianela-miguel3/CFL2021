let readlineSync=require("readline-sync");
let clientes=new Array(10);
let facturacion=new Array(10);
cargarFacturacion(facturacion,10);
burbuja(facturacion,10,clientes);
mostrarArreglo(clientes,facturacion,5);



function cargarFacturacion(facturacion, n) {
    let indice;
    let num= " ";
    for(indice=0; indice<n; indice++) {
        clientes[indice]=readlineSync.question("Ingrese el nombre del cliente "+indice+ ":");
        facturacion[indice]=readlineSync.questionInt("ingrese la facturacion del cliente: " +clientes[indice]+ ":");
        num=num + " " + facturacion[indice] + " " + clientes[indice];
    }
    console.log(num); 
}

function burbuja (facturacion, n, clientes) {
    let i, j, aux, aux2;
    for(j=1; j<n;j++) {
        for(i=0;i<(n-j); i++) {
            if (facturacion[i]<facturacion[i+1]) {
                aux=facturacion[i];
                facturacion[i]=facturacion[i+1];
                facturacion[i+1]=aux;

                aux2=clientes[i];
                clientes[i]=clientes[i+1];
                clientes[i+1]=aux2;

            }

        }
    }
}
 
 
 function mostrarArreglo(clientes,facturacion,n){
     let indice=0;
     for(indice=0; indice<n; indice++) {
         console.log(" ",clientes[indice],facturacion[indice])
     }
 }