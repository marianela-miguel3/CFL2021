import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Producto from './producto.entity';
import { ProductoService } from './producto.service';
import ProductoDTO from './productoDTO';


@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService:ProductoService){}

    @Get()
    public async getProductos():Promise<Producto[]>{
        return await this.productoService.getProductos();
    }
    @Get(`:id`)
    public async getProducto(@Param(`id`) id:string):Promise<Producto>{
        return await this.productoService.getProducto(parseInt(id));
    }
    @Post()
    public async addProducto(@Body()productoDTO:ProductoDTO):Promise<Producto[]>{
        return await this.productoService.addProducto(productoDTO);
    }
    
    @Put()
    public async updateProducto(@Body() productoDTO:ProductoDTO):Promise<Producto[]>{
        return await this.productoService.updateProducto(productoDTO);
    }

    @Delete(`:id`)
    public delProducto(@Param("id") id:string):Promise<Producto[]>{
        return this.productoService.delProducto(parseInt(id));
    }

}
