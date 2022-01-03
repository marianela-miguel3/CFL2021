import Cliente from "src/cliente/cliente.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
@Entity("E01_TELEFONO")
export default class Telefono{
@PrimaryColumn()
private codigo_area:number;
@PrimaryColumn()
private nro_telefono:number;
@Column()
private tipo:string;

@ManyToOne(type => Cliente, cliente => cliente.telefonos)
@JoinColumn({name: 'nro_cliente'})
public cliente : Cliente;

constructor(codigo_area:number,nro_telefono:number,tipo:string,cliente:Cliente){
    this.codigo_area=codigo_area;
    this.nro_telefono=nro_telefono;
    this.tipo=tipo;
    this.cliente=cliente;
}

public getTelefono():number{
    return this.codigo_area  +  this.nro_telefono;
}
public setTipo(tipoNuevo:string):void{
    this.tipo=tipoNuevo;
}

}