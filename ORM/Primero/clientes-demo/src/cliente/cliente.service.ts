import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Factura from 'src/factura/factura.entity';
import { Repository } from 'typeorm';
import ClienteDTO from './cliente.dto';
import Cliente from './cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
    @InjectRepository(Cliente) private readonly repoCliente : Repository<Cliente>,
    @InjectRepository(Factura) private readonly repoFactura : Repository<Factura>)
    {}

    public async getClientes() : Promise<Cliente[]> {    
        //return this.tareas;
        try {
            const clientes: Cliente[] = await this.repoCliente.find({
              relations:[`facturas`,`telefonos`]
            });
            console.log(clientes);
            return clientes;          
        } catch (error) {
            throw new HttpException( { error : `Error buscando los clientes: ${error}`}, HttpStatus.NOT_FOUND);
        }  
    }

    public async getCliente(id: number): Promise<Cliente> {
        try{
          const cliente: Cliente= await this.repoCliente.findOne(id,{
            relations:[`facturas`,`telefonos`]
          });
          return cliente;
        } catch (error){
          throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
        }
      }
    
      public async addCliente(cliente: ClienteDTO): Promise<Cliente[]>{
        try{
          //let idTarea: number= await this.generarId();
          let clienteNuevo= new Cliente(cliente.nro_cliente,cliente.nombre,cliente.apellido,cliente.direccion,cliente.activo);
          await this.repoCliente.save(clienteNuevo);
          const clientes: Cliente[]=await this.repoCliente.find()
          return clientes;
        } catch(error){
          console.log(error)
          throw new HttpException( {error: `Error agregando nueva tarea: ${error}`}, HttpStatus.NOT_FOUND);
        }
       }

       public async updateCliente(cliente:ClienteDTO):Promise<Cliente[]>{
        try{
          const clienteActualizado: Cliente=await this.repoCliente.findOne(cliente.nro_cliente);
          if(!clienteActualizado){
            throw new HttpException({ error: `error buscando el cliente de id ${cliente.nro_cliente}`}, HttpStatus.NOT_FOUND);
          }
          clienteActualizado.setNombreCliente(cliente.nombre);
          clienteActualizado.setApellidoCliente(cliente.apellido);
          clienteActualizado.setDireccionCliente(cliente.direccion);
          clienteActualizado.setActivoCliente(cliente.activo);
          
          await this.repoCliente.save(clienteActualizado);
          const clientes: Cliente[]= await this.repoCliente.find()
          return clientes;
        } catch (error){
          throw new HttpException( {error: `Error modificando la tarea de id ${cliente.nro_cliente}`},HttpStatus.NOT_FOUND);
        }
        }

        public async delCliente(id:number): Promise<Cliente[]>{
            try{
              const cliente:Cliente= await this.repoCliente.findOne(id);
              if(!cliente){
                throw new HttpException( { error: `error buscando el cliente de id ${id}`}, HttpStatus.NOT_FOUND);
              }
              await this.repoCliente.delete(id);
              const clientes: Cliente[]= await this.repoCliente.find()
              return clientes;
            }catch (error){
              throw new HttpException( { error: `error buscando el cliente de id ${id}`}, HttpStatus.NOT_FOUND);
            }
         }
}


