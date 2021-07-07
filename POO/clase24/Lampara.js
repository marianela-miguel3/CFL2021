var Lampara = /** @class */ (function () {
    function Lampara(estadoInicial, intensidadInicial) {
        this.estaPrendida = estadoInicial;
        this.intensidad = intensidadInicial;
    }
    Lampara.prototype.encenderApagar = function () {
        if (this.estaPrendida)
            this.estaPrendida = false;
        else
            this.estaPrendida = true;
    };
    Lampara.prototype.subirIntensidad = function () {
        this.intensidad = this.intensidad + 1;
    };
    Lampara.prototype.bajarIntensidad = function () {
        this.intensidad = this.intensidad - 1;
    };
    Lampara.prototype.mostrarLampara = function () {
        console.log("Mi lampara esta encendida " + this.estaPrendida + " con intensidad " + this.intensidad);
    };
    return Lampara;
}());
var estadoInicial = true;
var intensidadInicial = 10;
var miLampara = new Lampara(estadoInicial, intensidadInicial);
miLampara.mostrarLampara();
miLampara.bajarIntensidad();
miLampara.mostrarLampara();
