import Auto from "./Auto";
export default class AutoCarrera implements Auto{
    protected velocidadActual:number;//estados de la clase
    public constructor(){
        this.velocidadActual=0;
    }
    public acelerar():void{
        this.velocidadActual+=50;
    }
    public getVelocidadActual():number{
        return this.velocidadActual;

    }
}