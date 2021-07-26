"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Libro_1 = require("./Libro");
var GestorLibro = /** @class */ (function () {
    function GestorLibro() {
        this.libros = [];
    }
    GestorLibro.prototype.addLibro = function () {
        this.libros.push(this.crearLibro());
    };
    GestorLibro.prototype.findLibro = function (titulo) {
        for (var i = 0; i < this.libros.length; i++) {
            if (titulo == this.libros[i].getTitulo()) {
                return i;
            }
        }
        return -1;
    };
    GestorLibro.prototype.deleteLibro = function (titulo) {
        var posicion = this.findLibro(titulo);
        if (posicion != -1) {
            this.libros.splice(posicion, 1);
        }
    };
    GestorLibro.prototype.updateLibro = function (libroViejo) {
        var posicion = this.findLibro(libroViejo);
        if (posicion != -1) { //-1 lo devuelve cuando no encuentra lo que ingresa como busqueda
            this.libros[posicion] = this.crearLibro();
        }
        else {
            console.log("el libro no existe");
        }
    };
    GestorLibro.prototype.mostrarLibros = function () {
        console.log(this.libros);
    };
    GestorLibro.prototype.cargarLibros = function (rutaArchivo, separador) {
        var _this = this;
        var libros = (FS.readFileSync(rutaArchivo, 'utf8')).split(separador);
        var propiedadesLibro = [];
        libros.forEach(function (libroString) {
            propiedadesLibro = libroString.split(";");
            _this.libros.push(new Libro_1["default"](propiedadesLibro[0], propiedadesLibro[1], propiedadesLibro[2], propiedadesLibro[3], propiedadesLibro[4], propiedadesLibro[5], parseInt(propiedadesLibro[6])));
        });
    };
    GestorLibro.prototype.crearLibro = function () {
        var titulo = RLS.question('Ingrese el titulo: ');
        var editorial = RLS.question('Ingrese la editorial: ');
        var anioEdicion = RLS.question('Ingrese el anio: ');
        var genero = RLS.question('Ingrese el genero: ');
        var idioma = RLS.question('Ingrese el idioma: ');
        var autor = RLS.question('Ingrese el autor: ');
        var precio = RLS.questionInt('Ingrese el precio: ');
        var nuevoLibro = new Libro_1["default"](titulo, editorial, anioEdicion, genero, idioma, autor, precio);
        //FS.writeFileSync("libro.txt",(`${titulo};${editorial};${anioEdicion};${genero};${idioma};${autor};${precio}`));
        //this.libros.push(nuevoLibro);
        //console.log(FS.readFileSync("libro.txt","utf8"));
        return nuevoLibro;
    };
    return GestorLibro;
}());
exports["default"] = GestorLibro;
