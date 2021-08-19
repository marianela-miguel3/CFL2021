let readlineSync=require("readline-sync");
let elem, arr, nro, ocu;
elem=readlineSync.questionInt("ingrese tamaño: ");
arr=new Array(elem);
cargar(arr,elem);
nro=readlineSync.questionInt("ingrese numero: ");
ocu=metodo(arr,elem,nro);
mostrar(arr,elem);

function cargar(v,elem) {
     for (let i=0; i<elem; i++) {
        v[i]=Math.floor(Math.floor()*100);
    }
}

function mostrar(v,elem) {
    let c=" ";
    for (let i=0; i<elem; i++) {
        c+=v[i] + " ";
        console.log(c);
    }
}

function metodo(v,elem,n) {
    let oc;
    for (let i=0; i<elem; i++) {
         if (v[i]==n) {
            oc++
        }
    }
}



