import Persona from "./Persona";
class GestorPersonas extends Persona{
    private listaPersonas:Persona[];
   
    public constructor(dni:number,nombre:string,edad:number,altura:number,peso:number){
        super(dni,nombre,edad,altura,peso);
        this.listaPersonas=[];
    }
    public getAzar(mayorValor:number,menorValor:number):number {
        return Math.floor(Math.random()*((mayorValor+1)-menorValor)+menorValor);
    }
    public getCargarAlumno():Persona[]{
        let i:number;
        //let estaturaAlumnos:number[];
        for (i = 0 ; i<30; i++ ) {
        this.listaPersonas[i]=this.getAzar(106,118);
    }
    return this.listaPersonas
    }

    }
