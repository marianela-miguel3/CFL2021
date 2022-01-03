import Cliente from "src/cliente/cliente.entity";

export default class TelefonoDTO{
    readonly codigo_area:number;
    readonly nro_telefono:number;
    readonly tipo:string;
    readonly nro_cliente:Cliente;
}