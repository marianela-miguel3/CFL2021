"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var camara_1 = require("./camara");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(estaPrendido, bateriaActual, linternaPrendida) {
        var _this = _super.call(this, estaPrendido, bateriaActual, linternaPrendida) || this;
        _this.camara = new camara_1["default"]();
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        var foto = new camara_1["default"];
        foto.sacarFoto;
    };
    return TelefonoConCamara;
}(Telefono_1["default"]));
var telefono = new Telefono_1["default"](true, 50, false);
telefono.mandarMensaje("hola", 2485);
telefono.hacerLlamada;
console.log(telefono);
var telefonoConCamara = new TelefonoConCamara(true, 20, true);
console.log(telefonoConCamara);
telefonoConCamara.sacarFoto;
