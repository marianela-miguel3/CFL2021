import Detalle_Factura from "src/detalle-factura/detalleFactura.entity";
import { Column, Entity,OneToMany, PrimaryColumn } from "typeorm";

@Entity("E01_PRODUCTO")
export default class Producto{
    @PrimaryColumn()
    private codigo_producto:number;
    @Column()
    private marca:string;
    @Column()
    private nombre:string;
    @Column()
    private descripcion:string;
    @Column()
    private precio:number;
    @Column()
    private stock:number;

    @OneToMany(type => Detalle_Factura, detalle_factura => detalle_factura.producto)
    public detalles_facturas : Detalle_Factura[];
    
    constructor(codigo_producto:number,marca:string,nombre:string,descripcion:string,precio:number,stock:number){
        this.codigo_producto=codigo_producto;
        this.marca=marca;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.stock=stock;
    }
   
        public getCodigoProducto():number{
        return this.codigo_producto;
        }

        public setMarcaProducto(marcaNueva:string){
            this.marca=marcaNueva;
        }
        public setNombreProducto(nombreNuevo:string){
            this.nombre=nombreNuevo;
        }
        public setDescripcionProducto(descripcionNueva:string){
            this.descripcion=descripcionNueva;
        }
        public setPrecioProducto(precioNuevo:number){
            this.precio=precioNuevo;
        }
        public setStockProducto(stockNuevo:number){
            this.stock=stockNuevo;
        }

}