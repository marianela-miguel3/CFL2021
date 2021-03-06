"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo, año) {
        this.velocidadActual = 0;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Auto.prototype.acelerar = function (velocidad) {
        this.velocidadActual = this.velocidadActual + velocidad;
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAño = function () {
        return this.año;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports.default = Auto;
