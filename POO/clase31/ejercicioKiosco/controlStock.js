"use strict";
exports.__esModule = true;
var Item_1 = require("./Item");
var Kiosco_1 = require("./Kiosco");
var kiosco = new Kiosco_1["default"];
var nuevoItem = new Item_1["default"]("arroz", 50, 45);
kiosco.cargarItems();
kiosco.agregarItem(nuevoItem);
kiosco.mostrarItem();
kiosco.comprarItem();
kiosco.mostrarItem();
