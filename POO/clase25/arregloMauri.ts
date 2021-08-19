import * as RLS from 'readline-sync';
//import * as FS from 'fs';
//import Auto from "./Auto";

//estructura para las palabras
let palabras: string[] = new Array();

//funciones CRUD
function addPalabra(palabra: string):void {    //Create
    palabras.push(palabra);   
}
function findPalabra(palabra: string): number { //Read (retorna posicion)
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i]==palabra) {
            return i;
        }
    }
    return -1;
}
function updPalabra(palabraOriginal: string, palabraReemplazo: string): void { //Update
    let posicion=findPalabra(palabraOriginal);
    if (posicion != -1) {
        palabras[posicion] = palabraReemplazo;
    }
}
function delPalabra(palabra: string): void {    //Delete
    let posicion=findPalabra(palabra);
    if (posicion != -1) {
        palabras.splice(posicion,1);
    }
}

//funcion para mostrar el contenido del arreglo
function mostrarPalabras(): void {
    console.log(palabras);    
}

//funcion para leer palabras desde teclado
function leerPalabras(): void {
    let palabra = RLS.question('Ingrese una palabra, enter para finalizar: ');
    while (palabra.trim() != '') {
        palabras.push(palabra);
        palabra = RLS.question('Ingrese una palabra, enter para finalizar: ');
    }
}
//funcion para leer palabras desde archivo
//function leerPalabrasArchivo(): void {
 //   let texto = FS.readFileSync('palabras.txt','utf8');
//    palabras = texto.split(';');
//}

//Principal
leerPalabras();
mostrarPalabras();
//menu de opciones CRUD
let opcion: string = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
let palabra: string;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            palabra = RLS.question('Ingrese la palabra a agregar: ');
            addPalabra(palabra);
            break;
        }
        case 'R': {
            palabra = RLS.question('Ingrese la palabra a buscar: ');
            console.log(`Encontre la palabra en la posicion ${findPalabra(palabra)}`);
            break;            
        }
        case 'U': {
            let palabra1 = RLS.question('Ingrese la palabra a buscar: ');
            let palabra2 = RLS.question('Ingrese la palabra que la reeplaza: ');
            updPalabra(palabra1, palabra2);
            break;
        }
        case 'D': {
            palabra = RLS.question('Ingrese la palabra a eliminar: ');
            delPalabra(palabra);
            break;                        
        }
    }
}
mostrarPalabras();
opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
