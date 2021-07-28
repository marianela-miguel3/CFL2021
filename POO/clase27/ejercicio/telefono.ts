import * as RLS from "readline-sync";
export default class Telefono {
protected estaPrendido:boolean;
protected bateriaActual:number;
    public constructor(estaPrendido:boolean,bateriaActual:number){
     this.estaPrendido=estaPrendido;
     this.bateriaActual=bateriaActual;
    }

public mandarMensaje():void {
let mensaje:string=RLS.question("ingrese el mensaje: ");
console.log(`el mensaje: "${mensaje}"fue enviado con exito`);
}

public hacerLlamada():void {
    let numero=RLS.questionInt("ingrese el numero al que desea llamar: ");
    console.log(`Llamando a.... ${numero}`);
}
public prenderApagar():void{
    let prendido=RLS.question("quiere prender el telefono?(si/no): ");
    if (prendido=="si"){
        this.estaPrendido=true;
        console.log("el telefono esta prendido");
    }else{
        this.estaPrendido=false;
        console.log("el telefono esta apagado");
    }
}
//if(this.estaPrendido){
//     this.estaPrendido=false
// }else{
//     this.estaPrendido=true
// }
// 
public verBateriaActual():number{
return this.bateriaActual;
}
public mostrarTelefono():void{
    console.log(`El telefono se encuentra ${this.estaPrendido} con ${this.bateriaActual}`);
}
}

        