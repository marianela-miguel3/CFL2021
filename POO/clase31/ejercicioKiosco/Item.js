"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(descripcion, costo, cantidad) {
        //this.costo = Math.floor(Math.random() * 300);
        this.descripcion = descripcion;
        this.costo = costo;
        this.cantidad = cantidad;
    }
    Item.prototype.getCosto = function () {
        return this.costo;
    };
    Item.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
        return cantidad;
    };
    Item.prototype.getVenta = function (cantidadCompra) {
        return this.cantidad - cantidadCompra;
    };
    Item.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Item.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    return Item;
}());
exports["default"] = Item;
