import Telefono from "./telefono";
export default class TelefonoConCamara extends Telefono{
   public constructor(estaPrendido:boolean,bateriaActual:number){
   super(estaPrendido,bateriaActual);
   }

   public sacarFoto():void{
   console.log("Sacando foto....por favor espere");
   }
}