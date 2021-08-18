import Telefono from "./telefono";
import TelefonoConCamara from "./telefonoConCamara";
import TelefonoConRadio from "./telefonoConRadio";
import * as RLS from "readline-sync";
let opcion=RLS.question("ingrese una opcion para conocer nuestros productos(Telefono/T, TelefonoConCamara/C o TelefonoConRadio/R,X para finalizar: ").toUpperCase();
while (opcion !="X"){
     switch (opcion){
          case "T":{
           let estaPrendido:boolean=true;
           let bateriaActual:number=95;
           let miTelefono=new Telefono(estaPrendido,bateriaActual);
           miTelefono.hacerLlamada();
           miTelefono.mandarMensaje();
           miTelefono.mostrarTelefono();
           miTelefono.verBateriaActual();
           miTelefono.prenderApagar();
           break;
        }   
          case "C":{
           let estaPrendido:boolean;
           let bateriaActual:number;
           let miTelefonoConCamara=new TelefonoConCamara(estaPrendido=true,bateriaActual=20);
           miTelefonoConCamara.sacarFoto();
           miTelefonoConCamara.verBateriaActual();
           break;
        }
          case "R":{
           let estaPrendido:boolean=true;
           let bateriaActual:number=50;
           let frecuenciaActual:number;
           let miTelefonoConRadio=new TelefonoConRadio(estaPrendido,bateriaActual,frecuenciaActual);
           miTelefonoConRadio.verFrecuenciaActual();
           miTelefonoConRadio.mostrarTelefonoConRadio();
           miTelefonoConRadio.verBateriaActual();
           break;
        }    
    }
   opcion=RLS.question("ingrese una opcion para conocer nuestros productos(Telefono/T, TelefonoConCamara/C o TelefonoConRadio/R,X para finalizar: ").toUpperCase();
}


