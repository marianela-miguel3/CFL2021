import * as RLS from "readline-sync";
import * as FS from "fs";
import Auto from "./Auto";
import Moto from "./Moto";
class RegistroAutomotor{
    // private autos:Auto[];
    // private motos:Moto[];

    public constructor(){
        // this.autos=[];
        // this.motos=[];
    }

    public cargarVehiculos():void{//con switch
        let opcion:number=RLS.questionInt("Ingrese 1 si desea cargar un auto y 2 una moto: ");
       if(opcion==1){
           this.autos.
       }else if(opcion==0){
           this.motos.cargarVehiculo();
       }

       }
       
}
} 