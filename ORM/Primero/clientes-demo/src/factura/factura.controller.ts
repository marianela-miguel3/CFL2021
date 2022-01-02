import { Controller, Body, Get, Param, Post, Put, Delete } from '@nestjs/common';
import FacturaDTO from './factura.dto';
import Factura from './factura.entity';
import { FacturaService } from './factura.service';

@Controller('factura')
export class FacturaController {
constructor(private readonly facturaService:FacturaService){}

@Get()
    public async getFacturas():Promise<Factura[]>{
        return await this.facturaService.getFacturas();
    }

    @Get(`:id`)
    public async getFactura(@Param(`id`) id:string):Promise<Factura>{
        return await this.facturaService.getFactura(parseInt(id));
    }
    @Post()
    public async addFactura(@Body()facturaDTO:FacturaDTO):Promise<Factura[]>{
        return await this.facturaService.addFactura(facturaDTO);
    }
    
    @Put()
    public async updateFactura(@Body() facturaDTO:FacturaDTO):Promise<Factura[]>{
        return await this.facturaService.updateFactura(facturaDTO);
    }

    @Delete(`:id`)
    public delFactura(@Param("id") id:string):Promise<Factura[]>{
        return this.facturaService.delFactura(parseInt(id));
    }

}