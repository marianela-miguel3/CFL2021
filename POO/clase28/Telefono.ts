import * as RLS from "readline-sync";
export default class Telefono{
    private estaPrendido:boolean;
    private bateriaActual:number;
    protected linternaPrendida:boolean;
    
    public constructor(estaPrendido:boolean,bateriaActual:number,linternaPrendida:boolean){
        this.estaPrendido=estaPrendido;
        this.bateriaActual=bateriaActual;
        this.linternaPrendida=linternaPrendida;
    }

    public mandarMensaje(msg:string,numero:number):boolean{
        //console.log("ingrese el mensaje que desea enviar sino ingrese 0: ");
        //numero=RLS.questionInt("ingrese el numero al que desea mandar el mensaje: ");
          if (msg!=="0"){
              console.log(`el mensaje: ${msg} se envio correctamente al ${numero}`);
            return true;
          }else{
              return false;
          }
    }

    public hacerLlamada():void{
        console.log("llamando....");
    }

    public prenderApagar():void{
        if (this.estaPrendido){
        this.estaPrendido=false;
        }else{
        this.estaPrendido=true;
        }
    }

}
