import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Cliente from 'src/cliente/cliente.entity';
import { Repository } from 'typeorm';
import Telefono from './telefono.entity';
import TelefonoDTO from './telefonoDTO';
@Injectable()
export class TelefonoService {
    constructor(
        @InjectRepository(Cliente) private readonly repoCliente : Repository<Cliente>,
        @InjectRepository(Telefono) private readonly repoTelefono : Repository<Telefono>)
        {}

        public async getTelefonos() : Promise<Telefono[]> {    
            try {
                const telefonos: Telefono[] = await this.repoTelefono.find({
                  relations:[`cliente`]
                });
                return telefonos;          
            } catch (error) {
                throw new HttpException( { error : `Error buscando el telefono: ${error}`}, HttpStatus.NOT_FOUND);
            }  
        }

        public async getTelefono(codigo_area: number, nro_telefono:number): Promise<Telefono> {
            try{
              const telefono: Telefono= await this.repoTelefono.findOne({
                relations:[`cliente`],
                where: {codigo_area: `${codigo_area}`, nro_telefono:`${nro_telefono}`}
              });
              return telefono;
            } catch (error){
              throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
            }
          }

          public async getTelefonoCliente(cliente:number):Promise<Telefono[]>{
            try{
                let telefonoCliente:Telefono[]= await this.repoTelefono.find({
                    where:{nro_cliente: `${cliente}`}
                });
                return telefonoCliente;
            } catch (error){
                throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
            }
          }

            
          public async addTelefono(telefono: TelefonoDTO): Promise<Telefono[]>{
            try{
              let telefonoNuevo= new Telefono(telefono.codigo_area,telefono.nro_telefono,telefono.tipo,telefono.nro_cliente);
              await this.repoTelefono.save(telefonoNuevo);
              const telefonos: Telefono[]=await this.repoTelefono.find()
              return telefonos;
            } catch(error){
              console.log(error)
              throw new HttpException( {error: `Error agregando nuevo telefono: ${error}`}, HttpStatus.NOT_FOUND);
            }
           }

           public async updateTelefono(telefono:TelefonoDTO):Promise<Telefono[]>{
            try{
              const telefonoActualizado: Telefono=await this.repoTelefono.findOne(telefono.nro_telefono);
              if(!telefonoActualizado){
                throw new HttpException({ error: `error buscando el cliente de id ${telefono.nro_telefono}`}, HttpStatus.NOT_FOUND);
              }
              telefonoActualizado.setTipo(telefono.tipo);           
              await this.repoTelefono.save(telefonoActualizado);
              const telefonos: Telefono[]= await this.repoTelefono.find()
              return telefonos;
            } catch (error){
              throw new HttpException( {error: `Error modificando la tarea de id ${telefono.nro_telefono}`},HttpStatus.NOT_FOUND);
            }
            }

            public async delTelefono(codigo_area:number,nro_telefono:number): Promise<Telefono[]>{
              try{
                const telefono:Telefono= await this.repoTelefono.findOne({where: {codigo_area: `${codigo_area}`, nro_telefono:`${nro_telefono}`}});
                if(!telefono){
                  throw new HttpException( { error: `error buscando el telefono ingresado`}, HttpStatus.NOT_FOUND);
                }
                await this.repoTelefono.remove(telefono);
                const telefonos: Telefono[]= await this.repoTelefono.find()
                return telefonos;
              }catch (error){
                throw new HttpException( { error: `error buscando el telefono ingresado`}, HttpStatus.NOT_FOUND);
              }
           }

}
