import Item from "./Item";
import * as RLS from "readline-sync";
import * as FS from "fs";
export default class Kiosco {
  private items: Item[];
  public constructor() {
    this.items = [];
  }

  public cargarItems(): void {
    let articulos: string[] = FS.readFileSync("items.txt", "utf8").split("\n");
    let propiedadesItem: string[] = [];
    articulos.forEach((articuloString) => {
      propiedadesItem = articuloString.split(";");
      this.items.push(
        new Item(
          propiedadesItem[0],
          parseInt(propiedadesItem[1]),
          parseInt(propiedadesItem[2])
        )
      );
    });
  }

  public mostrarItem(): void {
    console.log(this.items);
  }
  private findItem(producto: string): number {
    for (let i = 0; i < this.items.length; i++) {
      if (producto == this.items[i].getDescripcion()) {
        return i;
      }
    }
    console.log(`Lo sentimos, ${producto} no se encuentra en stock`);
    return -1;
  }
 
  public agregarItem(producto: Item): void {
    this.items.push(producto);
  }

  public comprarItem(): void {
    let compra:string=RLS.question("Escriba el producto que desea comprar, x para finalizar: ").toLowerCase();
    let sumaTotal:number=0;
    let costo:number;
    let cantidadStock:number;
    let stock:number=0;
    while (compra != "x") {
      let cantidadCompra:number=RLS.questionInt(`ingrese la cantidad de ${compra} que desea comprar: `);
      let posicion: number = this.findItem(compra);
      for (let i = 0; i < this.items.length; i++) {
        costo = (this.items[posicion].getCosto()*cantidadCompra);
    }
    cantidadStock = this.items[posicion].getVenta(cantidadCompra);
    stock=this.items[posicion].setCantidad(cantidadStock);
    sumaTotal += costo;
    console.log(`Su compra se realizo con exito: subtotal: $ ${costo}`);
    FS.appendFileSync("ventaItems.txt",`Queda en stock un total de ${stock} ${compra}\n`);
    if (stock==0){
          this.items.splice(posicion, 1);
    }
    compra = RLS.question("Si desea seguir comprando ingrese otro producto, x para finalizar: ").toLowerCase();
    }
    console.log(`El total de su compra es: $ ${sumaTotal}`);
    }
}