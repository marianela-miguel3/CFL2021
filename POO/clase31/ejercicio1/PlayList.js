"use strict";
exports.__esModule = true;
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.pistasDeAudio = [];
    }
    Playlist.prototype.agregarLista = function (pista) {
        this.pistasDeAudio.push(pista);
    };
    Playlist.prototype.setDuracion = function () {
        var duracionTotal = 0;
        var i;
        for (i = 0; i < this.pistasDeAudio.length; i++) {
            duracionTotal += this.pistasDeAudio[i].setDuracion();
        }
        console.log("La duracion total de su lista de reproduccion es: " + duracionTotal.toFixed(2));
        return duracionTotal;
    };
    Playlist.prototype.cantidadPistas = function () {
        console.log("Su lista de reproduccion tiene: " + this.pistasDeAudio.length + " pistas");
    };
    Playlist.prototype.mostrarPistas = function () {
        console.log(this.pistasDeAudio);
    };
    return Playlist;
}());
exports["default"] = Playlist;
