import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import Detalle_Factura from './detalleFactura.entity';
import DetalleFacturaDTO from './detalleFacturaDTO';


@Controller('detalle-factura')
export class DetalleFacturaController {
    constructor(private readonly detallefacturaService:DetalleFacturaService){}

    @Get()
    public async getDetalles():Promise<Detalle_Factura[]>{
        return await this.detallefacturaService.getDetalles();
    }
    @Get(`:nroFactura`)
    public async getDetallesFactura(@Param(`nroFactura`) nroFactura:string):Promise<Detalle_Factura[]>{
        return await this.detallefacturaService.getDetallesFactura(nroFactura);
    }

    @Get(`:nroFactura/:codigoProducto`)
    public async getDetalleFacturaProducto(@Param(`nroFactura`) nroFactura:string,@Param(`codigoProducto`)codigoProducto:string):Promise<Detalle_Factura>{
        return await this.detallefacturaService.getDetalleFacturaProducto(parseInt(nroFactura),parseInt(codigoProducto));
    }
    @Post()
    public async addDetalleFactura(@Body()detalleFacturaDTO:DetalleFacturaDTO):Promise<Detalle_Factura[]>{
        return await this.detallefacturaService.addDetalleFactura(detalleFacturaDTO);
    }
    @Put()
    public async updateDetalleFactura(@Body()detalle:DetalleFacturaDTO):Promise<Detalle_Factura[]>{
        return await this.detallefacturaService.updateDetalleFactura(detalle);
    }

    @Delete(`:nro_factura/:codigo_producto`)
    public delDetalle(@Param("nro_factura") nro_factura:string, @Param("codigo_producto") codigo_producto:string):Promise<Detalle_Factura[]>{
        return this.detallefacturaService.delDetalle(parseInt(nro_factura),parseInt(codigo_producto));
    }
 
  
}
