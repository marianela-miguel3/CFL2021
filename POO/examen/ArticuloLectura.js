"use strict";
exports.__esModule = true;
var ArticuloLectura = /** @class */ (function () {
    function ArticuloLectura(ISBN, autor, editorial, titulo, cantidadPaginas) {
        this.ISBN = ISBN;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }
    ArticuloLectura.prototype.getTitulo = function () {
        return this.titulo;
    };
    ArticuloLectura.prototype.getId = function () {
        return this.ISBN;
    };
    ArticuloLectura.prototype.getAutor = function () {
        return this.autor;
    };
    ArticuloLectura.prototype.getCantidadPaginas = function () {
        return this.cantidadPaginas;
    };
    return ArticuloLectura;
}());
exports["default"] = ArticuloLectura;
