import Ordenable from "./Ordenable";
import Persona from "./Persona";

export default class Espectador extends Persona implements Ordenable {
    private posicion:string;

    constructor(altura:number) {
        super(0,'anonimo',0,altura,0);
        this.posicion = '';
    }

    public getPosicion(): string { return this.posicion; } 
    public setPosicion(posicion: string): void { this.posicion = posicion; }

    public comparador(persona1: Persona, persona2: Persona): number {
    //por altura de menor a mayor
        return 1;
        return -1;
    }
    public ordenar(listaPersonas: Persona[]) {
    //retornar la lista ordenada por el arreglo
    }
} 