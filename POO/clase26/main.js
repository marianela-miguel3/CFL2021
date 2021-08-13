"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var GestorLibros_1 = require("./GestorLibros");
var gestor = new GestorLibros_1["default"]();
gestor.cargarLibros("libro.txt", "\n");
gestor.mostrarLibros();
//menu de opciones CRUD
var opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
if (opcion != "c" && opcion != "r" && opcion != "u" && opcion != "d") {
    throw new Error("Debe ingresar opcion C,D,U o D");
}
try {
}
catch (error) {
    console.log("ocurrio un error esperado");
    console.log(error);
}
var titulo;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': { //agrego un nuevo libro
            gestor.addLibro();
            break;
        }
        case 'R': { //busco un libro por su titulo, me devuelve la posicion de ese libro
            titulo = RLS.question('Ingrese el titulo que busca: ').toUpperCase();
            console.log("Encontre ese titulo en la posicion " + gestor.findLibro(titulo) + ".");
            break;
        }
        case 'U': { //actualizar un libro, ingresa uno nuevo y elimina uno viejo
            titulo = RLS.question('Ingrese el titulo del libro que desea reemplazar: ').toUpperCase();
            gestor.updateLibro(titulo);
            break;
        }
        case 'D': { //eliminar un libro ya cargado
            titulo = RLS.question('Ingrese el titulo del libro que desea eliminar: ').toUpperCase();
            gestor.deleteLibro(titulo);
            break;
        }
    }
    gestor.mostrarLibros();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
