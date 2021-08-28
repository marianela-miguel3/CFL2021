import ArticuloLectura from "./ArticuloLectura";

export default class Libro extends ArticuloLectura {
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
    this.cantidadPaginas = cantidad;
  }
}
