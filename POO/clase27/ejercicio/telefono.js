"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = RLS.question("ingrese el mensaje: ");
        console.log("el mensaje: \"" + mensaje + "\"fue enviado con exito");
    };
    Telefono.prototype.hacerLlamada = function () {
        var numero = RLS.questionInt("ingrese el numero al que desea llamar: ");
        console.log("Llamando a.... " + numero);
    };
    Telefono.prototype.prenderApagar = function () {
        var prendido = RLS.question("quiere prender el telefono?(si/no): ");
        if (prendido == "si") {
            this.estaPrendido = true;
            console.log("el telefono esta prendido");
        }
        else {
            this.estaPrendido = false;
            console.log("el telefono esta apagado");
        }
    };
    //if(this.estaPrendido){
    //     this.estaPrendido=false
    // }else{
    //     this.estaPrendido=true
    // }
    // 
    Telefono.prototype.verBateriaActual = function () {
        console.log("El telefono tiene " + this.bateriaActual + "% de bateria");
    };
    Telefono.prototype.mostrarTelefono = function () {
        console.log("El telefono se encuentra " + this.estaPrendido + " con " + this.bateriaActual);
    };
    return Telefono;
}());
exports["default"] = Telefono;
