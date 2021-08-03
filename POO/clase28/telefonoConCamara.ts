import Telefono from "./Telefono";
import Camara from "./camara";
class TelefonoConCamara extends Telefono{
    private camara:Camara;
    public constructor(estaPrendido:boolean,bateriaActual:number,linternaPrendida:boolean){
        super(estaPrendido,bateriaActual,linternaPrendida);
        this.camara=new Camara();
    }

    public sacarFoto():void{
        this.camara.sacarFoto();
    }
}
let telefono=new Telefono(true,50,false);
telefono.mandarMensaje("hola",2485);
telefono.hacerLlamada;
console.log(telefono);
let telefonoConCamara=new TelefonoConCamara(true,20,true);
console.log(telefonoConCamara)
telefonoConCamara.sacarFoto;