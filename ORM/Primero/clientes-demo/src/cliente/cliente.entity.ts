import Factura from "src/factura/factura.entity";
import Telefono from "src/telefono/telefono.entity";
import {Column, Entity, OneToMany,PrimaryColumn} from "typeorm";
@Entity("E01_CLIENTE")
export default class Cliente{
    @PrimaryColumn()
    private nro_cliente:number;
    @Column()
    private nombre:string;
    @Column()
    private apellido:string;
    @Column()
    private direccion:string;
    @Column()
    private activo:boolean;

    @OneToMany(() => Factura, factura => factura.cliente)
    public facturas : Factura[];

    @OneToMany(() => Telefono, telefono => telefono.cliente)
    public telefonos : Telefono[];

    constructor(nro_cliente:number,nombre:string,apellido:string,direccion:string,activo:boolean){
        this.nro_cliente=nro_cliente;
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
        this.activo=activo;
    }
    public getIdCliente():number{
        return this.nro_cliente;
    }
    public setNombreCliente(nombreCambiado:string):void{
        this.nombre=nombreCambiado;
    }
    public setApellidoCliente(apellidoCambiado:string):void{
        this.apellido=apellidoCambiado;
    }
    public setDireccionCliente(direccionCambiado:string):void{
        this.direccion=direccionCambiado;
    }
    public setActivoCliente(activoCambiado:boolean):void{
        this.activo=activoCambiado;
    }

}




