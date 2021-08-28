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
var ArticuloLectura_1 = require("./ArticuloLectura");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(ISBN, autor, editorial, titulo, cantidadPaginas) {
        return _super.call(this, ISBN, autor, editorial, titulo, cantidadPaginas) || this;
    }
    Revista.prototype.setCantidadPaginas = function (cantidad) {
        try {
            if (cantidad > 50) {
                throw new Error("Cantidad de paginas excede");
            }
            this.cantidadPaginas = cantidad;
        }
        catch (error) {
            throw error; //es como que retorno el error para atraparlo luego en la funcion de modificar paginas de biblioteca
        }
    };
    //       console.log("ocurrio un error esperado");
    //       console.log(error);
    //     }
    // }
    Revista.prototype.agregarRevista = function (articulo) {
        this.articulos.push(articulo);
    };
    return Revista;
}(ArticuloLectura_1["default"]));
exports["default"] = Revista;
