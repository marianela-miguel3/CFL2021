"use strict";
exports.__esModule = true;
var telefono_1 = require("./telefono");
var telefonoConCamara_1 = require("./telefonoConCamara");
var telefonoConRadio_1 = require("./telefonoConRadio");
var RLS = require("readline-sync");
var opcion = RLS.question("ingrese una opcion para conocer nuestros productos(Telefono/T, TelefonoConCamara/C o TelefonoConRadio/R,X para finalizar: ").toUpperCase();
while (opcion != "X") {
    switch (opcion) {
        case "T": {
            var estaPrendido = true;
            var bateriaActual = 95;
            var miTelefono = new telefono_1["default"](estaPrendido, bateriaActual);
            miTelefono.hacerLlamada();
            miTelefono.mandarMensaje();
            miTelefono.mostrarTelefono();
            miTelefono.verBateriaActual();
            miTelefono.prenderApagar();
            break;
        }
        case "C": {
            var estaPrendido = void 0;
            var bateriaActual = void 0;
            var miTelefonoConCamara = new telefonoConCamara_1["default"](estaPrendido = true, bateriaActual = 20);
            miTelefonoConCamara.sacarFoto();
            miTelefonoConCamara.verBateriaActual();
            break;
        }
        case "R": {
            var estaPrendido = true;
            var bateriaActual = 50;
            var frecuenciaActual = void 0;
            var miTelefonoConRadio = new telefonoConRadio_1["default"](estaPrendido, bateriaActual, frecuenciaActual);
            miTelefonoConRadio.verFrecuenciaActual();
            miTelefonoConRadio.mostrarTelefonoConRadio();
            miTelefonoConRadio.verBateriaActual();
            break;
        }
    }
    opcion = RLS.question("ingrese una opcion para conocer nuestros productos(Telefono/T, TelefonoConCamara/C o TelefonoConRadio/R,X para finalizar: ").toUpperCase();
}
