"use strict";
exports.__esModule = true;
var Biblioteca_1 = require("./Biblioteca");
var Libro_1 = require("./Libro");
var Revista_1 = require("./Revista");
var biblioteca = new Biblioteca_1["default"]();
console.log("\nEstado biblioteca");
biblioteca.insertar(new Libro_1["default"](501, "yo", "planeta", "esta inestabilidad", 30));
biblioteca.insertar(new Libro_1["default"](705, "nela", "osmosis", "yo y el .gitignore", 55));
biblioteca.insertar(new Revista_1["default"](111, "pronto", "azucar", "aguanten los carpinchos", 100));
biblioteca.insertar(new Revista_1["default"](808, "ole", "yerba", "basta de estudiar quiero trabajo", 62));
biblioteca.mostrar();
console.log("\nBusquedas");
biblioteca.buscar(111);
biblioteca.buscar(100);
console.log("\Modificar paginas");
biblioteca.modificarPaginas(501);
biblioteca.modificarPaginas(111);
console.log("\Eliminar");
biblioteca.eliminar(808);
console.log("\Buscar por autor");
biblioteca.buscarPorAutor("yo");
biblioteca.mostrar();
