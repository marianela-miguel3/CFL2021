import Pista from "./Pista";
import PistaDeAudio from "./PistaDeAudio";
export default class Playlist implements Pista {
  private pistasDeAudio: PistaDeAudio[];
  public constructor() {
    this.pistasDeAudio = [];
  }

  public agregarLista(pista: PistaDeAudio): void {
    this.pistasDeAudio.push(pista);
  }

  public getDuracion():number{
    let duracionTotal: number = 0;
    let i: number;
    for (i = 0; i < this.pistasDeAudio.length; i++) {
      duracionTotal += this.pistasDeAudio[i].getDuracion();
    }
    console.log(`La duracion total de su lista de reproduccion es: ${duracionTotal.toFixed(2)}`);
    return duracionTotal;
  }
  public cantidadPistas():void {
    console.log(`Su lista de reproduccion tiene: ${this.pistasDeAudio.length} pistas`);
  }
  public mostrarPistas():void{
      console.log(this.pistasDeAudio);
  }
  
}
