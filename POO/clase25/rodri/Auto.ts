import Vehiculo from "./vehiculo";
export default class Auto extends Vehiculo{
    private cantidadPuertas:number;
    private tipo:string;
    public constructor(patente:string, marca: string, modelo:string, año:number,cantidadPuertas:number,tipo:string){
        super(patente, marca, modelo, año);
        this.cantidadPuertas=cantidadPuertas;
        this.tipo=tipo;
    }
public getCantidadPuertas():void{
    console.log(`el auto tiene ${this.cantidadPuertas} cantidad de puertas`);
}
public getTipoAuto():void{
    console.log(`el auto es ${this.tipo}`);
}
}
