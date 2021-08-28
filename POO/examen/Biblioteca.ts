import ArticuloLectura from "./ArticuloLectura";
import Libro from "./Libro";
import * as RLS from "readline-sync";
export default class Biblioteca {
  private elementos: ArticuloLectura[];
  private nombreBiblioteca: string;
  private direccion: string;
  private libro: Libro;

  public constructor() {
    this.elementos = [];
    this.nombreBiblioteca = "nelita";
    this.direccion = "necochea 22";
    //this.libro=new Libro("yo","planeta","aquella inestabilidad",80);
  }

  public insertar(a: ArticuloLectura): boolean {
    //    let i:number=0;
    // let idA:number=a.getId();
    // for(i=0;i<this.elementos.length;i++){
    //      if(idA==this.elementos[i].getId()){
    //      console.log(`El articulo ${a} ya se encuentra ingresado`);
    //     }
    // this.elementos.push(a);
    // return true;
    // }
    let articulo: ArticuloLectura = this.buscar(a.getId());
    if (!articulo) {
      this.elementos.push(a);
      console.log(`Se inserto ${a} con exito `);
      return true;
    }
    return false;
  }

  public mostrar(): void {
    console.log(this.elementos);
  }

  // public buscar(isbn:number):ArticuloLectura{
  //     let posicion:number = this.findArticulo(isbn);
  //     //for (let i = 0; i < this.elementos.length; i++) {
  //            // if(isbn== this.elementos[i].getId()){
  //     return this.elementos[posicion];
  // }
  public buscar(id: number): ArticuloLectura {
    try {
      for (let i = 0; i < this.elementos.length; i++) {
        if (id == this.elementos[i].getId()) {
          return this.elementos[i];
        }
      }
      throw new Error("Articulo repetido o no encontrado");
    } catch (error) {
      console.log(error.message);
    }
  }
  //console.log(`se encontro ${this.elementos[posicion]}`)

  public modificarPaginas(isbn: number): boolean {
    try {
      let articulo: ArticuloLectura = this.buscar(isbn);
      let cantidadACambiar: number;
      if (articulo != undefined) {
        //for (let i = 0; i < this.elementos.length; i++) {
        //if(isbn== this.elementos[i].getId()){
        cantidadACambiar = RLS.questionInt(
          `Ingrese la cantidad de paginas por la que quiere que se cambie el articulo con ISBN numero: ${isbn}: `
        );
        articulo.setCantidadPaginas(cantidadACambiar);
        console.log("se modifico la cantidad de paginas");
        //console.log(`${this.libro.getCantidadPaginas}`);
        return true;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
    return false;
  }

  public eliminar(id: number): boolean {
    //id=RLS.questionInt("ingrese el id que desea eliminar: ");
    let posicion: number = this.findArticulo(id);
    if (posicion != -1) {
      this.elementos.splice(posicion, 1);
      console.log("el articulo se elimino con exito");
    }
    return true;
  }
  // for (let i=0;i<elementos.length;i++){
  //    if(id==this.elementos[i].getId()){
  //    this.elementos.splice(i,1);
  //    return true;
  // }
  // return false;
  // }
  private findArticulo(isbn: number): number {
    for (let i = 0; i < this.elementos.length; i++) {
      if (isbn == this.elementos[i].getId()) {
        return i;
      }
    }
    return -1;
  }

  public buscarPorAutor(a: string): ArticuloLectura[] {
    let arregloAutor: ArticuloLectura[] = [];
    for (let i = 0; i < this.elementos.length; i++) {
      if (a == this.elementos[i].getAutor()) {
        arregloAutor.push(this.elementos[i]);
      }
    }
    return arregloAutor;
  }
}
