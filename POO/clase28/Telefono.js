"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual, linternaPrendida) {
        this.estaPrendido = estaPrendido;
        this.bateriaActual = bateriaActual;
        this.linternaPrendida = linternaPrendida;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        //console.log("ingrese el mensaje que desea enviar sino ingrese 0: ");
        //numero=RLS.questionInt("ingrese el numero al que desea mandar el mensaje: ");
        if (msg !== "0") {
            console.log("el mensaje: " + msg + " se envio correctamente al " + numero);
            return true;
        }
        else {
            return false;
        }
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("llamando....");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
