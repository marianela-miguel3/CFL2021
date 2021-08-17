"use strict";
exports.__esModule = true;
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.pistasDeAudio = [];
    }
    Playlist.prototype.agregarLista = function (pista) {
        this.pistasDeAudio.push(pista);
    };
    //   public getIds():void {
    //     let i: number = 0;
    //     let ids:number[]=[];
    //     for (i = 0; i < this.pistasDeAudio.length; i++) {
    //       //cargar el arreglo pistasDeAudio con cada ID de cada pistaDeAudio llamando a la funcion getId de pistaDeAudio
    //       ids[i]= this.pistasDeAudio[i].getId();
    //     }
    //     return ids[];
    //console.log(`Esta es la lista de codigos de sus pistas: ${ids}`);
    Playlist.prototype.setDuracion = function () {
        var duracionTotal = 0;
        var i;
        for (i = 0; i < this.pistasDeAudio.length; i++) {
            duracionTotal += this.pistasDeAudio[i].setDuracion();
        }
        console.log("La duracion total de su lista de reproduccion es: " + duracionTotal.toFixed(2));
        return duracionTotal;
    };
    Playlist.prototype.mostrarPistas = function () {
        console.log(this.pistasDeAudio);
    };
    Playlist.prototype.cantidadPistas = function () {
        console.log("Su lista de reproduccion tiene: " + this.pistasDeAudio.length + " pistas");
    };
    return Playlist;
}());
exports["default"] = Playlist;
