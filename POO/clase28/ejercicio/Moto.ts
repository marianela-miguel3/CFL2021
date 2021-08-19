import * as FS from "fs";
import * as RLS from "readline-sync";
import Auto from "./Auto";
export default class Moto extends Auto{
    //private motos:Moto[];
    private potencia:string;
    private color:string;
    private tipoFreno:string;
    public constructor(marca:string, modelo: string, año:string, patente:string, potencia:string,color:string,tipoFreno:string){
    super(marca,modelo,año,patente);
    this.potencia=potencia;
    this.color=color;
    this.tipoFreno=tipoFreno;
    }

    public getPotencia():string{
    return this.potencia;
    }
    public getColor():string{
    return this.color;
    }
    public getTipoFreno():string{
    return this.tipoFreno
    }
    public cargarVehiculo():void {
    this.marca= RLS.question('Ingrese la marca: ');
    this.modelo= RLS.question('Ingrese el modelo: ');
    this.año= RLS.question('Ingrese el año: ');
    this.patente= RLS.question('Ingrese la patente: ');
    this.potencia=RLS.question("ingrese la potencia: ");
    this.color=RLS.question("ingrese la potencia: ");
    this.tipoFreno=RLS.question("ingrese la potencia: ");
    // let motos: Moto[]=[];
    // motos.push(new Moto(this.marca,this.modelo,this.año,this.patente,this.potencia,this.color,this.tipoFreno));
    // console.log(motos);

    public agregarVehiculos():void{//con switch
        let motos:string[] = (FS.readFileSync(`motos.txt','utf8')).split('\n');
        let propiedadesMoto:string[] = [];
        motos.forEach(motoString => {
            propiedadeMoto = motoString.split(";")
            this.motos.push(new Auto(propiedadesAuto[0],propiedadesAuto[1],propiedadesAuto[2],parseInt(propiedadesAuto[3])))
       );
}
    // public cargarVehiculo():void{
    //     let motos:string[] = (FS.readFileSync('motos.txt','utf8')).split('\n');
    //     let propiedadesMoto:string[] = [];
    //         motos.forEach(motoString => {
    //         propiedadesMoto = motoString.split(";")
    //         motos.push(new Moto(propiedadesAuto[0],propiedadesAuto[1],propiedadesAuto[2],(propiedadesAuto[3],propiedadesAuto[4],propiedadesAuto[5],propiedadesAuto[6])));