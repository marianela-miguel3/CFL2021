import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Detalle_Factura from 'src/detalle-factura/detalleFactura.entity';
import { Repository } from 'typeorm';
import Producto from './producto.entity';
import ProductoDTO from './productoDTO';

@Injectable()
export class ProductoService {
    constructor(
    @InjectRepository(Producto) private readonly repoProducto : Repository<Producto>,
    @InjectRepository(Detalle_Factura) private readonly repoDetalleFactura : Repository<Detalle_Factura>)
    {}

    public async getProductos() : Promise<Producto[]> {    
        //return this.tareas;
        try {
            const productos: Producto[] = await this.repoProducto.find(
            {
              relations:[`detalles_facturas`]
            });
            return productos;          
        } catch (error) {
            throw new HttpException( { error : `Error buscando los productos: ${error}`}, HttpStatus.NOT_FOUND);
        }  
    }

    public async getProducto(id: number): Promise<Producto> {
        try{
          const producto: Producto= await this.repoProducto.findOne(id,
            {
            relations:[`detalles_facturas`]
          });
          return producto;
        } catch (error){
          throw new HttpException( { error : `Error buscando el id ingresado: ${error}`}, HttpStatus.NOT_FOUND);
        }
      }

      public async addProducto(producto: ProductoDTO): Promise<Producto[]>{
        try{
          //let idTarea: number= await this.generarId();
          let productoNuevo= new Producto(producto.codigo_producto,producto.marca,producto.nombre,producto.descripcion,producto.precio,producto.stock);
          await this.repoProducto.save(productoNuevo);
          const productos: Producto[]=await this.repoProducto.find()
          return productos;
        } catch(error){
          console.log(error)
          throw new HttpException( {error: `Error agregando un nuevo producto: ${error}`}, HttpStatus.NOT_FOUND);
        }
       }

       public async updateProducto(producto:ProductoDTO):Promise<Producto[]>{
        try{
          const productoActualizado: Producto=await this.repoProducto.findOne(producto.codigo_producto);
          if(!productoActualizado){
            throw new HttpException({ error: `error buscando la tarea de id ${producto.codigo_producto}`}, HttpStatus.NOT_FOUND);
          }
          productoActualizado.setMarcaProducto(producto.marca);
          productoActualizado.setNombreProducto(producto.nombre);
          productoActualizado.setDescripcionProducto(producto.descripcion);
          productoActualizado.setPrecioProducto(producto.precio);
          productoActualizado.setStockProducto(producto.stock);
          
          await this.repoProducto.save(productoActualizado);
          const productos: Producto[]= await this.repoProducto.find()
          return productos;
        } catch (error){
          throw new HttpException( {error: `Error modificando el producto de id ${producto.codigo_producto}`},HttpStatus.NOT_FOUND);
        }
        }

        public async delProducto(id:number): Promise<Producto[]>{
          try{
            const producto:Producto= await this.repoProducto.findOne(id);
            if(!producto){
              throw new HttpException( { error: `error buscando el producto de id ${id}`}, HttpStatus.NOT_FOUND);
            }
            await this.repoProducto.delete(id);
            const productos: Producto[]= await this.repoProducto.find()
            return productos;
          }catch (error){
            throw new HttpException( { error: `error buscando el productp de id ${id}`}, HttpStatus.NOT_FOUND);
          }
       }
}
