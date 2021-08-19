import AutoCarrera from "./AutoCarrera";
import Auto from "./Auto";

class AutoFerrari extends AutoCarrera implements Auto{//ya esta implementada la interface en 
    public constructor(){
    super();
    }
    public acelerar():void{
    this.velocidadActual+=100;
    }

    public getVelocidadActual():number{
    return this.velocidadActual
    }

}