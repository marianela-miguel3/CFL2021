import Pista from "./Pista";
export default class PistaDeAudio implements Pista {
  private id: number;
  private titulo: string;
  private duracion: number;
  private interprete: string;

  public constructor(titulo: string,interprete: string){
    this.titulo=titulo;
    this.interprete=interprete;
    this.id=Math.floor(Math.random() * 100);
  }
  public setDuracion(): number {
    this.duracion=this.aleatorio(1,3);
    return this.duracion;
  }

  public getTitulo(): string {
    return this.titulo;
  }
  public getId():number{
      return this.id;
  }
  public getInterprete(){
      return this.interprete;
  }
  private aleatorio(mayorValor: number, menorValor: number): number {
    return (Math.random() * (mayorValor + 1 - menorValor) + menorValor);
    //toFixed(1);//este me recorta a la cantidad de decimales que quiero pero retorna un string
  }
}
