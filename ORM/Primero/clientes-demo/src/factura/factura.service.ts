import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Factura from './factura.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Cliente from 'src/cliente/cliente.entity';
import FacturaDTO from './factura.dto';
import Detalle_Factura from 'src/detalle-factura/detalleFactura.entity';

@Injectable()
export class FacturaService {
    constructor(
        @InjectRepository(Factura) private readonly repoFactura : Repository<Factura>,
        @InjectRepository(Cliente) private readonly repoCliente : Repository<Cliente>,
        @InjectRepository(Detalle_Factura) private readonly repoDetalleFactura : Repository<Detalle_Factura>)
    {}

    public async getFacturas() : Promise<Factura[]> {    
        //return this.tareas;
        try {
            const facturas: Factura[] = await this.repoFactura.find({
                relations:[`cliente`]
            });
            console.log(facturas);
            return facturas;          
        } catch (error) {
            throw new HttpException( { error : `Error buscando los clientes: ${error}`}, HttpStatus.NOT_FOUND);
        }  
    }
    public async getFactura(id: number): Promise<Factura> {
        try{
          const factura: Factura= await this.repoFactura.findOne(id,{
            relations:[`cliente`]                             
          });                      
          return factura;
        } catch (error){
          throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
        }
      }

      public async addFactura(factura: FacturaDTO): Promise<Factura[]>{
        try{
          let cliente: Cliente=await this.repoCliente.findOne(factura.nro_cliente);
          if(!cliente){
            throw new HttpException( { error : `El cliente afectado no existe`}, HttpStatus.NOT_FOUND);
          }
          let facturaNueva= new Factura(factura.nro_factura,factura.fecha,factura.total_sin_iva,factura.iva,factura.total_con_iva,cliente);
          await this.repoFactura.save(facturaNueva);
          const facturas: Factura[]=await this.repoFactura.find()
          return facturas;
        } catch(error){
          console.log(error)
          throw new HttpException( {error: `Error agregando nueva tarea: ${error}`}, HttpStatus.NOT_FOUND);
        }
       }

       public async updateFactura(factura:FacturaDTO):Promise<Factura[]>{
        try{
          const facturaActualizada: Factura=await this.repoFactura.findOne(factura.nro_factura);
          if(!facturaActualizada){
            throw new HttpException({ error: `error buscando la factura de id ${factura.nro_factura}`}, HttpStatus.NOT_FOUND);
          }
          facturaActualizada.setFechaFactura(factura.fecha);
          facturaActualizada.setTotalSinIva(factura.total_sin_iva);
          facturaActualizada.setIvaFactura(factura.iva);
          facturaActualizada.setTotalConIva(factura.total_con_iva);
          facturaActualizada.getNroCliente;
          
          await this.repoFactura.save(facturaActualizada);
          const facturas: Factura[]= await this.repoFactura.find()
          return facturas;
        } catch (error){
          throw new HttpException( {error: `Error modificando la tarea de id ${factura.nro_factura}`},HttpStatus.NOT_FOUND);
        }
        }

        public async delFactura(id:number): Promise<Factura[]>{
          try{
            const factura:Factura= await this.repoFactura.findOne(id);
            console.log(factura);
            if(!factura){
              throw new HttpException( { error: `la factura ${id} no existe`}, HttpStatus.NOT_FOUND);
            }
            await this.repoFactura.remove(factura);
            const facturas: Factura[]= await this.repoFactura.find()
            return facturas;
          }catch (error){
            throw new HttpException( { error: `error buscando la factura de id ${id}`}, HttpStatus.NOT_FOUND);
          }
       }



}




