import Vehiculo from "./vehiculo";
export default class Camioneta extends Vehiculo{
private tipo:string;
public constructor(patente:string, marca: string, modelo:string, año:number, tipo:string){
    super(patente, marca, modelo, año);
    this.tipo=tipo;
}
public getTipoCamioneta(){
    return this.tipo;
}
}