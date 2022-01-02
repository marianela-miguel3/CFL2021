import Cliente from "src/cliente/cliente.entity";

export default class FacturaDTO{
    readonly nro_factura:number;
    readonly fecha:Date;
    readonly total_sin_iva: number;
    readonly iva:number;
    readonly total_con_iva:number;
    readonly nro_cliente:Cliente;
}