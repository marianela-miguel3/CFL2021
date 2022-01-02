import Factura from "src/factura/factura.entity";
import Producto from "src/producto/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("E01_DETALLE_FACTURA")
export default class Detalle_Factura{
    @PrimaryColumn()
    private nro_factura:number;
    @PrimaryColumn()
    private codigo_producto:number;
    @Column()
    private nro_item:number;
    @Column()
    private cantidad:number;
 
    @ManyToOne(type => Factura, factura => factura.detalles_facturas)
    @JoinColumn({name: 'nro_factura'})
    public factura:Factura;

    @ManyToOne(type => Producto, producto => producto.detalles_facturas)
    @JoinColumn({name: 'codigo_producto'})
    public producto:Producto;

    public constructor(nro_factura:number,codigo_producto:number,nro_item:number,cantidad:number){
        this.nro_factura=nro_factura;
        this.codigo_producto=codigo_producto;
        this.nro_item=nro_item;
        this.cantidad=cantidad;
    }

    public setItemDetalle(itemNuevo:number){
        this.nro_item=itemNuevo;
    }
    public setCantidadDetalle(cantidadNueva:number){
        this.cantidad=cantidadNueva;
    }


}