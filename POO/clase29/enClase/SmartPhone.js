"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = this.estaPrendido;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("Llamando a " + numero);
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("espere....sacando foto");
    };
    return SmartPhone;
}());
var miSmartPhone = new SmartPhone();
miSmartPhone.prender();
console.log(miSmartPhone);
miSmartPhone.apagar();
miSmartPhone.llamar("245695");
miSmartPhone.sacarFoto();
console.log(miSmartPhone);
