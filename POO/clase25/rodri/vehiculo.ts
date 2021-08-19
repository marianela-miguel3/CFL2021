export default class Vehiculo {
    protected marca:string;
    protected modelo:string;
    protected año:number;
    protected patente:string;
    protected velocidadActual:number=0;
    
    public constructor(patente:string, marca: string, modelo:string, año:number){
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    public acelerar(velocidad:number): void{
        this.velocidadActual = this.velocidadActual+velocidad;
    }
    public getVelocidadActual():number{
        return this.velocidadActual;
    }
    public getMarca():string{
        return this.marca;
    }
    public getModelo():string{
        return this.modelo;
    }
    public getAño():number{
        return this.año;
    }
    public getPatente():string {
        return this.patente;
    }
}
