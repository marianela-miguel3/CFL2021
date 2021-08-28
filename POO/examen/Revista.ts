import ArticuloLectura from "./ArticuloLectura";

export default class Revista extends ArticuloLectura {
  private articulos: string[];
  public constructor(
    ISBN: number,
    autor: string,
    editorial: string,
    titulo: string,
    cantidadPaginas: number
  ) {
    super(ISBN, autor, editorial, titulo, cantidadPaginas);
  }
  public setCantidadPaginas(cantidad: number): void {
    try {
      if (cantidad > 50) {
        throw new Error("Cantidad de paginas excede");
      }
      this.cantidadPaginas = cantidad;
    } catch (error) {
      throw error;//es como que retorno el error para atraparlo luego en la funcion de modificar paginas de biblioteca
    }
  }

  //       console.log("ocurrio un error esperado");
  //       console.log(error);
  //     }
  // }

  public agregarRevista(articulo: string) {
    this.articulos.push(articulo);
  }
}
