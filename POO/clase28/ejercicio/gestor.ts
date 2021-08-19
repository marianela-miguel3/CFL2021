import * as FS from "fs";
export default class Gestor{
    private leerVehiculo:string;
    public constructor(leerVehiculo:string){
        this.leerVehiculo=leerVehiculo;
    }
    public leer(): string[] {
        return FS.readFileSync(this.leerVehiculo, "utf-8").split(",");
    }
    
}