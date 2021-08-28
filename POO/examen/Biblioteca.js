"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.elementos = [];
        this.nombreBiblioteca = "nelita";
        this.direccion = "necochea 22";
        //this.libro=new Libro("yo","planeta","aquella inestabilidad",80);
    }
    Biblioteca.prototype.insertar = function (a) {
        //    let i:number=0;
        // let idA:number=a.getId();
        // for(i=0;i<this.elementos.length;i++){
        //      if(idA==this.elementos[i].getId()){
        //      console.log(`El articulo ${a} ya se encuentra ingresado`);
        //     }
        // this.elementos.push(a);
        // return true;
        // }
        var articulo = this.buscar(a.getId());
        if (!articulo) {
            this.elementos.push(a);
            console.log("Se inserto " + a + " con exito ");
            return true;
        }
        return false;
    };
    Biblioteca.prototype.mostrar = function () {
        console.log(this.elementos);
    };
    // public buscar(isbn:number):ArticuloLectura{
    //     let posicion:number = this.findArticulo(isbn);
    //     //for (let i = 0; i < this.elementos.length; i++) {
    //            // if(isbn== this.elementos[i].getId()){
    //     return this.elementos[posicion];
    // }
    Biblioteca.prototype.buscar = function (id) {
        try {
            for (var i = 0; i < this.elementos.length; i++) {
                if (id == this.elementos[i].getId()) {
                    return this.elementos[i];
                }
            }
            throw new Error("Articulo repetido o no encontrado");
        }
        catch (error) {
            console.log(error.message);
        }
    };
    //console.log(`se encontro ${this.elementos[posicion]}`)
    Biblioteca.prototype.modificarPaginas = function (isbn) {
        try {
            var articulo = this.buscar(isbn);
            var cantidadACambiar = void 0;
            if (articulo != undefined) {
                //for (let i = 0; i < this.elementos.length; i++) {
                //if(isbn== this.elementos[i].getId()){
                cantidadACambiar = RLS.questionInt("Ingrese la cantidad de paginas por la que quiere que se cambie el articulo con ISBN numero: " + isbn + ": ");
                articulo.setCantidadPaginas(cantidadACambiar);
                console.log("se modifico la cantidad de paginas");
                //console.log(`${this.libro.getCantidadPaginas}`);
                return true;
            }
        }
        catch (error) {
            console.log(error.message);
            return false;
        }
        return false;
    };
    Biblioteca.prototype.eliminar = function (id) {
        //id=RLS.questionInt("ingrese el id que desea eliminar: ");
        var posicion = this.findArticulo(id);
        if (posicion != -1) {
            this.elementos.splice(posicion, 1);
            console.log("el articulo se elimino con exito");
        }
        return true;
    };
    // for (let i=0;i<elementos.length;i++){
    //    if(id==this.elementos[i].getId()){
    //    this.elementos.splice(i,1);
    //    return true;
    // }
    // return false;
    // }
    Biblioteca.prototype.findArticulo = function (isbn) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (isbn == this.elementos[i].getId()) {
                return i;
            }
        }
        return -1;
    };
    Biblioteca.prototype.buscarPorAutor = function (a) {
        var arregloAutor = [];
        for (var i = 0; i < this.elementos.length; i++) {
            if (a == this.elementos[i].getAutor()) {
                arregloAutor.push(this.elementos[i]);
            }
        }
        return arregloAutor;
    };
    return Biblioteca;
}());
exports["default"] = Biblioteca;
