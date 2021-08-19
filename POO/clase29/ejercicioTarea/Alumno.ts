import Ordenable from "./Ordenable";
import Persona from "./Persona";
class Alumno extends Persona implements Ordenable {
    private fila:number;
    private posicion:number;
    private personas:Persona[];
    //private estaturaAlumnos:number[];

    constructor(nombre:string, edad:number, altura:number) {
        super(0,nombre,edad,altura,0);
        this.fila=edad;
        this.posicion=0;
        //this.personas=[];
        this.estaturaAlumnos=[];
    }

    //let personas:Persona[]=new Persona;

    public getFila(): number { return this.fila; }
    public setFila(fila: number): void { this.fila = fila; }
    public getPosicion(): number { return this.posicion; }
    public setPosicion(posicion: number): void { this.posicion = posicion; }
    
    public getAzar(mayorValor:number,menorValor:number):number {
            return Math.floor(Math.random()*((mayorValor+1)-menorValor)+menorValor);
    }
    
    public getCargarArreglo():number[] {
        let i:number;
        //let estaturaAlumnos:number[];
        for (i = 0 ; i<30; i++ ) {
        this.estaturaAlumnos[i]=this.getAzar(106,118);
        return this.estaturaAlumnos
        }
    }

    public getIntercambiar(arreglo, i, j) { 
        let aux; 
        aux = arreglo[i] ;
        arreglo[i] = arreglo[j] ;
        arreglo[j] = aux ;
    }
    
    
    //function comparar(arreglo, i, j) {
        

    public comparador(persona1: Persona, persona2: Persona): number {
        let comparacion:number;
        //let indice:number;
        if (persona1.getAltura() === this.estaturaAlumnos[persona2]) {
            comparacion = 0;
        } else if (this.estaturaAlumnos[persona1] < this.estaturaAlumnos[persona2]) {
            comparacion = -1;
        } else {
            comparacion = 1;
        }
        return comparacion;
    }
        
    public getBurbuja(estaturaAlumnos: number, i:number, j:number) {
        let aux:number;
        for (let i = 0; i < 30; i++) {
            for (let j = 0; j < (30 - i - 1); j++) {
                if (estaturaAlumnos[i] < estaturaAlumnos[j]) {
                    aux = estaturaAlumnos[i];
                    estaturaAlumnos[i] = estaturaAlumnos[j];
                    estaturaAlumnos[i + 1] = aux;
                }
            }
        }
    };
        public burbuja() {
            let persona1:Persona;
            let persona2:Persona;
            for (i = 0 ; i < 30; i++) {
                for (j = 0 ; j < (30 - i - 1); j++) { 
                    if (comparar(0, j, j+1) == 1 ) { 
                        intercambiar(arreglo, j, j+1) ;
                    }
                }
            }
        }
    //por altura de menor a mayor
    //     return 1;
    //     return -1;
    // }
    public ordenar(listaPersonas: Persona[]) {
    //retornar la lista ordenada por el arreglo
    }   
}