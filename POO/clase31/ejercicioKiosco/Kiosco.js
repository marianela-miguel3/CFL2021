"use strict";
exports.__esModule = true;
var Item_1 = require("./Item");
var RLS = require("readline-sync");
var FS = require("fs");
var Kiosco = /** @class */ (function () {
    function Kiosco() {
        this.items = [];
    }
    Kiosco.prototype.cargarItems = function () {
        var _this = this;
        var articulos = FS.readFileSync("items.txt", "utf8").split("\n");
        var propiedadesItem = [];
        articulos.forEach(function (articuloString) {
            propiedadesItem = articuloString.split(";");
            _this.items.push(new Item_1["default"](propiedadesItem[0], parseInt(propiedadesItem[1]), parseInt(propiedadesItem[2])));
        });
    };
    Kiosco.prototype.mostrarItem = function () {
        console.log(this.items);
    };
    Kiosco.prototype.findItem = function (producto) {
        for (var i = 0; i < this.items.length; i++) {
            if (producto == this.items[i].getDescripcion()) {
                return i;
            }
        }
        console.log("Lo sentimos, " + producto + " no se encuentra en stock");
        return -1;
    };
    Kiosco.prototype.agregarItem = function (producto) {
        this.items.push(producto);
    };
    Kiosco.prototype.comprarItem = function () {
        var compra = RLS.question("Escriba el producto que desea comprar, x para finalizar: ").toLowerCase();
        var sumaTotal = 0;
        var costo;
        var cantidadStock;
        var stock = 0;
        while (compra != "x") {
            var cantidadCompra = RLS.questionInt("ingrese la cantidad de " + compra + " que desea comprar: ");
            var posicion = this.findItem(compra);
            for (var i = 0; i < this.items.length; i++) {
                costo = (this.items[posicion].getCosto() * cantidadCompra);
            }
            cantidadStock = this.items[posicion].getVenta(cantidadCompra);
            stock = this.items[posicion].setCantidad(cantidadStock);
            sumaTotal += costo;
            console.log("Su compra se realizo con exito: subtotal: $ " + costo);
            FS.appendFileSync("ventaItems.txt", "Queda en stock un total de " + stock + " " + compra + "\n");
            if (stock == 0) {
                this.items.splice(posicion, 1);
            }
            compra = RLS.question("Si desea seguir comprando ingrese otro producto, x para finalizar: ").toLowerCase();
        }
        console.log("El total de su compra es: $ " + sumaTotal);
    };
    return Kiosco;
}());
exports["default"] = Kiosco;
