import Cliente from "src/cliente/cliente.entity";
import Detalle_Factura from "src/detalle-factura/detalleFactura.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
@Entity("E01_FACTURA")
export default class Factura{
    @PrimaryColumn()
    private nro_factura:number;
    @Column({type:'datetime'})
    private fecha:Date;
    @Column()
    private total_sin_iva:number;
    @Column()
    private iva:number;
    @Column()
    private total_con_iva:number;

    @ManyToOne(type => Cliente, cliente => cliente.facturas)
    @JoinColumn({name: 'nro_cliente'})
    public cliente : Cliente;

    @OneToMany(tyoe => Detalle_Factura, detalles_facturas=> detalles_facturas.factura)
    public detalles_facturas:Detalle_Factura[];


    public constructor(nro_factura:number,fecha:Date,total_sin_iva:number,iva:number,total_con_iva:number,cliente : Cliente){
        this.nro_factura=nro_factura;
        this.fecha=fecha;
        this.total_sin_iva=total_sin_iva;
        this.iva=iva;
        this.total_con_iva=total_con_iva;
        this.cliente=cliente;
    }
    public getNroFactura():number{
        return this.nro_factura;
    }
    public setFechaFactura(fechaCa:Date):void{
        this.fecha=fechaCa;
    }
    public setTotalSinIva(totalSinIvaNuevo:number):void{
        this.total_sin_iva=totalSinIvaNuevo;
    }
    public setIvaFactura(ivaCambiado:number):void{
        this.iva=ivaCambiado;
    }
    
    public setTotalConIva(totalConIvaNuevo:number):void{
        this.total_con_iva=totalConIvaNuevo;
    }

    public getNroCliente():Cliente{
        return this.cliente;
    }

}

