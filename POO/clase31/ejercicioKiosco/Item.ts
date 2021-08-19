export default class Item {
  private costo: number;
  private descripcion:string;
  private cantidad:number;
  public constructor(descripcion:string,costo:number,cantidad:number) {
    //this.costo = Math.floor(Math.random() * 300);
    this.descripcion=descripcion;
    this.costo=costo;
    this.cantidad=cantidad;
  }
  public getCosto(): number {
    return this.costo;
  }
  public setCantidad(cantidad:number):number{
    this.cantidad=cantidad;
    return cantidad;
  }
  public getVenta(cantidadCompra:number):number{
    return this.cantidad-cantidadCompra;
  }
  public getCantidad():number{
    return this.cantidad;
  }
  public getDescripcion():string{
      return this.descripcion;
  }

}
