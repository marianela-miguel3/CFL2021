export default abstract class ArticuloLectura {
  private ISBN: number;
  private autor: string;
  private editorial: string;
  private titulo: string;
  protected cantidadPaginas: number;

  public constructor(
    ISBN: number,
    autor: string,
    editorial: string,
    titulo: string,
    cantidadPaginas: number
  ) {
    this.ISBN = ISBN;
    this.autor = autor;
    this.editorial = editorial;
    this.titulo = titulo;
    this.cantidadPaginas = cantidadPaginas;
  }
  abstract setCantidadPaginas(cantidad: number): void;

  public getTitulo(): string {
    return this.titulo;
  }
  public getId(): number {
    return this.ISBN;
  }
  public getAutor(): string {
    return this.autor;
  }
  public getCantidadPaginas(): number {
    return this.cantidadPaginas;
  }
}
