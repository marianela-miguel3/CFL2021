import Factura from "src/factura/factura.entity";
import Producto from "src/producto/producto.entity";

export default class DetalleFacturaDTO{
    readonly nro_factura:number;
    readonly codigo_producto:number;
    readonly nro_item:number;
    readonly cantidad:number;
}