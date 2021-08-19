import * as RLS from "readline-sync";
import * as FS from "fs";
export default class Auto{
    protected marca:string;
    protected modelo:string;
    protected año:string;
    protected patente:string;
    //private cantidadPuertas:number;
    //private tipo:string;

    public constructor(marca:string, modelo: string, año:string, patente:string){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.patente=patente;
        //this.cantidadPuertas=cantidadPuertas;
        //this.tipo=tipo;
    }
    public getMarca():string{
        return this.marca;
    }
    public getModelo():string{
        return this.modelo;
    }
    public getAño():string{
        return this.año;
    }
    public getPatente():string{
        return this.patente;
    }
    public cargarVehiculo():void {
        this.marca= RLS.question('Ingrese la marca: ');
        this.modelo= RLS.question('Ingrese el modelo: ');
        this.año= RLS.question('Ingrese el año: ');
        this.patente= RLS.question('Ingrese la patente: ');
        let autos: Auto[]=[];
        autos.push(new Auto(this.marca,this.modelo,this.año,this.patente);
        console.log(autos);
    }
  

// public getCantidadPuertas():void{
//     console.log(`el auto tiene ${this.cantidadPuertas} cantidad de puertas`);
// }
// public getTipoAuto():void{
//     console.log(`el auto es ${this.tipo}`);
// }
}