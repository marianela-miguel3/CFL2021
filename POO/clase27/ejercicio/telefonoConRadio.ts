import Telefono from "./telefono";
import * as RLS from "readline-sync";
export default class TelefonoConRadio extends Telefono{
private frecuenciaActual:number;
     public constructor(estaPrendido:boolean,bateriaActual:number,frecuenciaActual:number){
        super(estaPrendido,bateriaActual);
        this.frecuenciaActual=frecuenciaActual;
    }
public verFrecuenciaActual():number{
this.frecuenciaActual=RLS.questionFloat("Cual es su frecuencia actual?: ");
return this.frecuenciaActual;
}
public mostrarTelefonoConRadio():void{
    console.log(`El telefono se encuentra:  ${this.estaPrendido} con:  ${this.bateriaActual}% de bateria en la frecuencia: ${this.frecuenciaActual}`);
}
}
