"use strict";
exports.__esModule = true;
var PistaDeAudio = /** @class */ (function () {
    function PistaDeAudio(titulo, interprete) {
        this.titulo = titulo;
        this.interprete = interprete;
        this.id = Math.floor(Math.random() * 100);
    }
    PistaDeAudio.prototype.setDuracion = function () {
        this.duracion = this.aleatorio(1, 3);
        return this.duracion;
    };
    PistaDeAudio.prototype.getTitulo = function () {
        return this.titulo;
    };
    PistaDeAudio.prototype.getId = function () {
        return this.id;
    };
    PistaDeAudio.prototype.aleatorio = function (mayorValor, menorValor) {
        return (Math.random() * (mayorValor + 1 - menorValor) + menorValor);
        //toFixed(1);//este me recorta a la cantidad de decimales que quiero pero retorna un string
    };
    PistaDeAudio.prototype.getInterprete = function () {
        return this.interprete;
    };
    return PistaDeAudio;
}());
exports["default"] = PistaDeAudio;
