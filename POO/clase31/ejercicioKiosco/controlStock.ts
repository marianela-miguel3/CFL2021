import Item from "./Item";
import Kiosco from "./Kiosco";
let kiosco=new Kiosco;
let nuevoItem=new Item("arroz",50,45);
kiosco.cargarItems();
kiosco.agregarItem(nuevoItem);
kiosco.mostrarItem();
kiosco.comprarItem();
kiosco.mostrarItem();
