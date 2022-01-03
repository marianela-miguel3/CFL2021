import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Factura from 'src/factura/factura.entity';
import Producto from 'src/producto/producto.entity';
import { Repository } from 'typeorm';
import Detalle_Factura from './detalleFactura.entity';
import DetalleFacturaDTO from './detalleFacturaDTO';

@Injectable()
export class DetalleFacturaService {
    constructor(
        @InjectRepository(Detalle_Factura) private readonly repoDetalleFactura : Repository<Detalle_Factura>,
        @InjectRepository(Factura) private readonly repoFactura : Repository<Factura>,
        @InjectRepository(Producto) private readonly repoProducto : Repository<Producto>)
        {}

        public async getDetalles() : Promise<Detalle_Factura[]> {    
            try {
                const detalles: Detalle_Factura[] = await this.repoDetalleFactura.find({
                  relations:[`factura`,`producto`]
                });
                return detalles;          
            } catch (error) {
                throw new HttpException( { error : `Error buscando los detalles de factura: ${error}`}, HttpStatus.NOT_FOUND);
            }  
        }

        public async getDetallesFactura(nroFactura:string): Promise <Detalle_Factura[]> {
          try{
            const detalles: Detalle_Factura[]= await this.repoDetalleFactura.find(
              {relations:[`factura`,`producto`],
              where : {nro_factura: `${nroFactura}`}
            });
            return detalles;
          } catch (error){
            throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
          }
        }
    
        public async getDetalleFacturaProducto(nroFactura:number,codigoProducto:number): Promise<Detalle_Factura> {
            try{
              const detalle: Detalle_Factura= await this.repoDetalleFactura.findOne({
                relations:[`factura`,`producto`],
                where: {nro_factura: `${nroFactura}`, codigo_producto:`${codigoProducto}`}
              });
              return detalle;
            } catch (error){
              throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
            }
          }

          public async addDetalleFactura(detalleFactura:DetalleFacturaDTO){
            try {
                let factura : Factura = await this.repoFactura.findOne(detalleFactura.nro_factura)
                if(!factura){
                    throw new HttpException( { error : `Error buscando detalle factira: ${detalleFactura}`}, HttpStatus.NOT_FOUND);
                }
                let producto : Producto = await this.repoProducto.findOne(detalleFactura.codigo_producto)
                if(!producto){
                    throw new HttpException( { error : `Error buscando producto: ${detalleFactura}`}, HttpStatus.NOT_FOUND);
                }
                let detalleFacturaNuevo = new Detalle_Factura(factura.getNroFactura(), producto.getCodigoProducto(),detalleFactura.nro_item, detalleFactura.cantidad);
                await this.repoDetalleFactura.save(detalleFacturaNuevo)
                const detalleFacturas: Detalle_Factura[] = await this.repoDetalleFactura.find()
                return detalleFacturas;
            } catch (error) {
                    throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: "there is an error in the request, " + error,
                }, HttpStatus.NOT_FOUND);
                }
            }

            public async updateDetalleFactura(detalle:DetalleFacturaDTO):Promise<Detalle_Factura[]>{
              try{
                const detalleActualizado: Detalle_Factura=await this.repoDetalleFactura.findOne(detalle.nro_factura);
                if(!detalleActualizado){
                  throw new HttpException({ error: `error buscando la tarea de id ${detalle.nro_factura}`}, HttpStatus.NOT_FOUND);
                }
                detalleActualizado.setItemDetalle(detalle.nro_item);
                detalleActualizado.setCantidadDetalle(detalle.cantidad);              
                await this.repoDetalleFactura.save(detalleActualizado);
                const detalles: Detalle_Factura[]= await this.repoDetalleFactura.find()
                return detalles;
              } catch (error){throw new HttpException( {error: `Error modificando el detalle de factura de nro_factura ${detalle.nro_factura}`},HttpStatus.NOT_FOUND);
              }
              }

              public async delDetalle(nro_factura:number,codigo_producto:number): Promise<Detalle_Factura[]>{
                try{
                  const detalle:Detalle_Factura= await this.repoDetalleFactura.findOne({where : { nro_factura : `${nro_factura}`, codigo_producto : `${codigo_producto}`}});
                  if(!detalle){
                    throw new HttpException( { error: `error buscando el detalle con nro_factura ${nro_factura} y codigo_producto ${codigo_producto}`}, HttpStatus.NOT_FOUND);
                  }
                  await this.repoDetalleFactura.delete(detalle);
                  const detalles: Detalle_Factura[]= await this.repoDetalleFactura.find()
                  return detalles;
                }catch (error){
                  throw new HttpException( { error: `error buscando el detalle de nro_factura ${nro_factura}`}, HttpStatus.NOT_FOUND);
                }
             }
      
}
